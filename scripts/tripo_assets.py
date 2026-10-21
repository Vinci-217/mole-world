"""Tripo apiv3 asset generation. Secrets are read only from TRIPO_API_KEY.

No credential ever reaches the browser, manifest, job receipt or asset CDN.
POSTs are deliberately never retried: an ambiguous response requires checking
the provider dashboard so a network failure cannot silently spend twice.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import struct
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
API = 'https://openapi.tripo3d.ai'
PLAN = ROOT / 'assets-plan.json'
JOBS = ROOT / '.asset-tasks'


class AssetError(Exception):
    pass


class SafeRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if urllib.parse.urlparse(newurl).scheme != 'https':
            raise AssetError('Refusing a redirect to non-HTTPS transport.')
        if req.has_header('Authorization') and urllib.parse.urlparse(newurl).hostname != 'openapi.tripo3d.ai':
            raise AssetError('Refusing to forward authorization outside the Tripo API host.')
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def api_request(path, key, payload=None):
    body = json.dumps(payload).encode() if payload is not None else None
    request = urllib.request.Request(API + path, data=body, headers={'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json'}, method='POST' if body else 'GET')
    try:
        with urllib.request.build_opener(SafeRedirect).open(request, timeout=45) as response:
            result = json.load(response)
    except urllib.error.HTTPError as exc:
        # Do not print response bodies, headers, signed URLs or authorization.
        if exc.code in (401, 403):
            raise AssetError(f'Tripo returned HTTP {exc.code}. Check the secure key binding and domain policy in environment settings.') from None
        raise AssetError(f'Tripo returned HTTP {exc.code}. Check the provider dashboard before resubmitting a paid task.') from None
    except (urllib.error.URLError, TimeoutError):
        raise AssetError('Tripo network request failed. A submitted job will not be automatically recreated; check its saved receipt and the provider dashboard.') from None
    if result.get('code', 0) != 0:
        raise AssetError(f'Tripo API rejected the request (code {result.get("code")}); inspect the provider dashboard for details.')
    return result.get('data', result)


def atomic_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(path)


def payload_for(plan, asset):
    return {'prompt': asset['prompt'] + ' ' + plan['style'], 'model': plan['model'], 'texture': True, 'pbr': True, 'texture_quality': 'detailed', 'face_limit': asset['face_limit']}


def validate_glb(path):
    with path.open('rb') as file:
        header = file.read(12)
        if len(header) != 12:
            raise AssetError('Downloaded asset has a truncated GLB header.')
        magic, version, length = struct.unpack('<4sII', header)
        if magic != b'glTF' or version != 2 or length != path.stat().st_size:
            raise AssetError('Downloaded asset is not a complete glTF 2 binary. Kept the existing scene asset.')
        chunk_header = file.read(8)
        if len(chunk_header) != 8:
            raise AssetError('Downloaded GLB has no JSON scene chunk.')
        chunk_length, chunk_type = struct.unpack('<I4s', chunk_header)
        if chunk_type != b'JSON' or chunk_length < 2 or chunk_length > length - 20:
            raise AssetError('Downloaded GLB has an invalid JSON chunk.')
        try:
            scene = json.loads(file.read(chunk_length))
        except (ValueError, UnicodeDecodeError):
            raise AssetError('Downloaded GLB scene is not valid JSON.') from None
        if scene.get('asset', {}).get('version') != '2.0' or not scene.get('meshes'):
            raise AssetError('Downloaded GLB does not contain a glTF 2 mesh.')


def download_model(url, path):
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
        raise AssetError('Refusing an invalid or unencrypted asset download URL.')
    temporary = path.with_suffix('.download')
    path.parent.mkdir(parents=True, exist_ok=True)
    try:
        # A fresh request intentionally has no Authorization header.
        request = urllib.request.Request(url, headers={'User-Agent': 'Eldermere-Asset-Pipeline/1.0'})
        with urllib.request.build_opener(SafeRedirect).open(request, timeout=120) as response, temporary.open('wb') as output:
            total = 0
            while chunk := response.read(1024 * 1024):
                total += len(chunk)
                if total > 180 * 1024 * 1024:
                    raise AssetError('Generated asset exceeds the 180 MB download limit.')
                output.write(chunk)
        validate_glb(temporary)
        temporary.replace(path)
    except urllib.error.URLError:
        raise AssetError(f'Asset download blocked or unavailable. Allow the result CDN hostname {parsed.hostname} in environment settings, then resume the saved job.') from None
    finally:
        temporary.unlink(missing_ok=True)


def result_url(task):
    output = task.get('output') or task.get('result') or {}
    value = output.get('model_url') or output.get('pbr_model') or output.get('model')
    if isinstance(value, dict):
        value = value.get('url')
    if not isinstance(value, str):
        raise AssetError('Successful task did not include a downloadable GLB model URL.')
    return value


def install_asset(asset, task_id, path):
    manifest_path = ROOT / 'public/assets/manifest.json'
    manifest = json.loads(manifest_path.read_text())
    new = {field: asset[field] for field in ('id', 'width', 'position', 'rotation', 'replace')}
    new.update(path='/' + path.relative_to(ROOT / 'public').as_posix(), source='Tripo v3.1 generated asset', task_id=task_id, sha256=hashlib.sha256(path.read_bytes()).hexdigest())
    manifest['assets'] = [entry for entry in manifest['assets'] if entry['id'] != asset['id']] + [new]
    atomic_json(manifest_path, manifest)


def generate(plan, selected, limit):
    key = os.environ.get('TRIPO_API_KEY')
    if not key:
        raise AssetError('TRIPO_API_KEY is not bound in this runtime. Enter it securely in environment settings and save; never paste it into a command or frontend file.')
    JOBS.mkdir(exist_ok=True)
    lock = JOBS / 'generation.lock'
    try:
        descriptor = os.open(lock, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    except FileExistsError:
        raise AssetError('Another generation run holds the lock. Check that process before removing a stale .asset-tasks/generation.lock.') from None
    os.close(descriptor)
    try:
        balance = api_request('/v3/account/balance', key)
        print('Tripo connection and account access verified.', flush=True)
        if isinstance(balance.get('balance'), (int, float)):
            print('Available credits:', balance['balance'], flush=True)
            if balance['balance'] <= 0:
                raise AssetError('Tripo account has no available credits.')
        for asset in selected[:limit]:
            receipt_path = JOBS / (asset['id'] + '.json')
            receipt = json.loads(receipt_path.read_text()) if receipt_path.exists() else None
            if receipt and receipt.get('state') == 'installed':
                path = ROOT / receipt['local_path']
                if path.exists():
                    validate_glb(path)
                    if hashlib.sha256(path.read_bytes()).hexdigest() != receipt['sha256']:
                        raise AssetError('Installed asset checksum changed. Inspect it before generating again.')
                    install_asset(asset, receipt['task_id'], path)
                    print(asset['id'] + ': existing asset verified; no paid request.', flush=True)
                    continue
            if receipt and not receipt.get('task_id'):
                raise AssetError(f'{asset["id"]}: previous submission outcome is uncertain. Reconcile its task ID in the provider dashboard and receipt before continuing.')
            if not receipt:
                atomic_json(receipt_path, {'asset': asset['id'], 'state': 'submitting'})
                response = api_request('/v3/generation/text-to-model', key, payload_for(plan, asset))
                task_id = response.get('task_id')
                if not task_id:
                    raise AssetError('Task submission returned no task ID; check the dashboard before another paid request.')
                receipt = {'asset': asset['id'], 'task_id': task_id, 'state': 'submitted'}
                atomic_json(receipt_path, receipt)
                print(asset['id'] + ': paid generation submitted once.', flush=True)
            deadline = time.monotonic() + 1200
            while time.monotonic() < deadline:
                task = api_request('/v3/tasks/' + urllib.parse.quote(receipt['task_id'], safe=''), key)
                status = task.get('status')
                print(asset['id'] + ': ' + str(status) + ' ' + str(task.get('progress', '')), flush=True)
                if status == 'success':
                    target = ROOT / 'public/assets/tripo' / (asset['id'] + '.glb')
                    download_model(result_url(task), target)
                    install_asset(asset, receipt['task_id'], target)
                    receipt.update(state='installed', local_path=str(target.relative_to(ROOT)), sha256=hashlib.sha256(target.read_bytes()).hexdigest())
                    atomic_json(receipt_path, receipt)
                    print(asset['id'] + ': validated GLB installed in scene manifest.', flush=True)
                    break
                if status in ('failed', 'cancelled', 'canceled', 'banned', 'expired'):
                    receipt['state'] = status
                    atomic_json(receipt_path, receipt)
                    raise AssetError(asset['id'] + ': provider task ' + status + '; it will not be automatically recreated.')
                time.sleep(5)
            else:
                raise AssetError('Generation polling timed out. Run the same command to resume; its saved task will be reused.')
    finally:
        lock.unlink(missing_ok=True)


def main():
    plan = json.loads(PLAN.read_text())
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['plan', 'generate'])
    parser.add_argument('--asset', choices=[asset['id'] for asset in plan['assets']])
    parser.add_argument('--limit', type=int, choices=range(1, 4), default=1, help='Maximum assets considered in this invocation (default 1, hard maximum 3).')
    args = parser.parse_args()
    selected = [a for a in plan['assets'] if not args.asset or a['id'] == args.asset]
    if args.command == 'plan':
        print('Model:', plan['model'])
        print('No requests or charges. Each generate invocation considers at most --limit assets; tasks are reused.')
        for asset in selected:
            print(asset['id'], json.dumps(payload_for(plan, asset), ensure_ascii=False))
        return
    generate(plan, selected, args.limit)


if __name__ == '__main__':
    try:
        main()
    except (AssetError, OSError, ValueError) as exc:
        print('Asset pipeline:', str(exc), file=sys.stderr)
        sys.exit(1)
