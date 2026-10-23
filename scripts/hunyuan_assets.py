"""Generate isolated flower-sea assets through the official Tencent Cloud AI3D API.

``plan`` is completely offline. ``generate`` may spend API credits, considers one
asset by default (at most three), and never retries a paid submission. Receipts
are private local files; downloaded GLBs are raw inputs for a later Blender pass.
"""

import argparse
import base64
from contextlib import contextmanager
from datetime import datetime, timezone
import hashlib
import ipaddress
import json
import math
import os
from pathlib import Path
import re
import struct
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import zlib


ROOT = Path(__file__).resolve().parents[1]
PLAN = Path("art-direction/flower-sea/assets.json")
JOBS = Path(".asset-tasks/hunyuan")
RAW = Path("artifacts/hunyuan/raw")
MAX_IMAGE_BYTES = 6 * 1024 * 1024
MAX_DOWNLOAD_BYTES = 180 * 1024 * 1024
MODEL = "3.1"
ENDPOINT = "ai3d.tencentcloudapi.com"
TOKENHUB_API = "https://tokenhub.tencentmaas.com/v1/api/3d"
TOKENHUB_MODEL = "hy-3d-3.1"
AI3D_KEY_API = "https://api.ai3d.cloud.tencent.com/v1/ai3d"
STATUS_VALUES = {"WAIT", "RUN", "FAIL", "DONE"}


class AssetError(Exception):
    """A safe, user-readable pipeline error without provider secrets or URLs."""


def rooted(path):
    """Resolve a manifest path without allowing absolute paths or symlink escape."""
    value = Path(path)
    if value.is_absolute() or ".." in value.parts:
        raise AssetError("Asset paths must be relative to the repository root.")
    resolved = (ROOT / value).resolve()
    if not resolved.is_relative_to(ROOT.resolve()):
        raise AssetError("An asset path leaves the repository root.")
    return resolved


def load_plan():
    try:
        plan = json.loads(rooted(PLAN).read_text(encoding="utf-8"))
    except (OSError, ValueError):
        raise AssetError("Cannot read the flower-sea asset plan; check its path and JSON.") from None
    if not isinstance(plan, dict) or not isinstance(plan.get("assets"), list):
        raise AssetError("The asset plan must contain an assets array.")
    seen = set()
    for asset in plan["assets"]:
        if not isinstance(asset, dict):
            raise AssetError("Each asset plan entry must be an object.")
        asset_id = asset.get("id")
        if not isinstance(asset_id, str) or not re.fullmatch(r"[a-z0-9][a-z0-9_-]{0,63}", asset_id):
            raise AssetError("Asset IDs must use lowercase letters, digits, underscores or hyphens.")
        if asset_id in seen:
            raise AssetError("The asset plan contains duplicate IDs.")
        seen.add(asset_id)
        if not isinstance(asset.get("label"), str) or not asset["label"].strip():
            raise AssetError(f"{asset_id}: label is required.")
        for field, suffix in (("imagePath", ".png"), ("outputPath", ".glb")):
            if not isinstance(asset.get(field), str) or Path(asset[field]).suffix.lower() != suffix:
                raise AssetError(f"{asset_id}: {field} must name a relative {suffix} file.")
            rooted(asset[field])
        count = asset.get("faceCount")
        if type(count) is not int or not 3000 <= count <= 1500000:
            raise AssetError(f"{asset_id}: faceCount must be an integer from 3000 to 1500000.")
        height = asset.get("worldHeight")
        if type(height) not in (int, float) or not math.isfinite(height) or height <= 0:
            raise AssetError(f"{asset_id}: worldHeight must be a positive finite number.")
    return plan


def timestamp():
    return datetime.now(timezone.utc).isoformat()


def atomic_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    path.parent.chmod(0o700)
    descriptor, temporary = tempfile.mkstemp(prefix=path.name + ".", suffix=".tmp", dir=path.parent)
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8") as output:
            json.dump(value, output, ensure_ascii=False, indent=2, allow_nan=False)
            output.write("\n")
            output.flush()
            os.fsync(output.fileno())
        os.replace(temporary, path)
        directory = os.open(path.parent, os.O_RDONLY | os.O_DIRECTORY)
        try:
            os.fsync(directory)
        finally:
            os.close(directory)
    finally:
        Path(temporary).unlink(missing_ok=True)


@contextmanager
def task_lock():
    directory = rooted(JOBS)
    directory.mkdir(parents=True, exist_ok=True, mode=0o700)
    directory.chmod(0o700)
    lock = directory / "pipeline.lock"
    try:
        descriptor = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY, 0o600)
    except FileExistsError:
        raise AssetError("Another Hunyuan command holds the lock. Check that process before removing a stale pipeline.lock.") from None
    os.close(descriptor)
    try:
        yield
    finally:
        lock.unlink(missing_ok=True)


def receipt_path(asset):
    return rooted(JOBS / (asset["id"] + ".json"))


def read_receipt(asset):
    path = receipt_path(asset)
    if not path.exists():
        return None
    try:
        receipt = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        raise AssetError(f'{asset["id"]}: receipt is unreadable; reconcile it before any paid submission.') from None
    if not isinstance(receipt, dict) or receipt.get("asset_id") != asset["id"]:
        raise AssetError(f'{asset["id"]}: receipt identity is invalid; refusing a paid submission.')
    path.chmod(0o600)
    return receipt


def save_receipt(asset, receipt):
    receipt["updated_at"] = timestamp()
    atomic_json(receipt_path(asset), receipt)


def image_payload(asset):
    path = rooted(asset["imagePath"])
    try:
        if path.stat().st_size > MAX_IMAGE_BYTES:
            raise AssetError(f'{asset["id"]}: PNG input exceeds the 6 MiB limit.')
        with path.open("rb") as source:
            data = source.read(MAX_IMAGE_BYTES + 1)
    except OSError:
        raise AssetError(f'{asset["id"]}: PNG reference is missing or unreadable.') from None
    if len(data) > MAX_IMAGE_BYTES:
        raise AssetError(f'{asset["id"]}: PNG input exceeds the 6 MiB limit.')
    if len(data) < 33 or data[:8] != b"\x89PNG\r\n\x1a\n" or data[12:16] != b"IHDR":
        raise AssetError(f'{asset["id"]}: input must be a PNG with an IHDR header.')
    size = struct.unpack(">I", data[8:12])[0]
    width, height = struct.unpack(">II", data[16:24])
    crc = struct.unpack(">I", data[29:33])[0]
    if size != 13 or zlib.crc32(data[12:29]) & 0xffffffff != crc:
        raise AssetError(f'{asset["id"]}: PNG header is corrupt.')
    if not 128 <= width <= 5000 or not 128 <= height <= 5000:
        raise AssetError(f'{asset["id"]}: PNG dimensions must be between 128 and 5000 pixels.')
    payload = {
        "Model": MODEL,
        "ImageBase64": base64.b64encode(data).decode("ascii"),
        "GenerateType": "Normal",
        "EnablePBR": True,
        "FaceCount": asset["faceCount"],
    }
    # Pro returns OBJ + GLB by default; its ResultFormat enum does not list GLB.
    source = {
        "image_path": asset["imagePath"],
        "image_sha256": hashlib.sha256(data).hexdigest(),
        "model": MODEL,
        "face_count": asset["faceCount"],
        "generate_type": "Normal",
        "enable_pbr": True,
    }
    return payload, source


class HunyuanClient:
    """Small adapter so tests never import the SDK or contact the service."""

    def __init__(self):
        secret_id = os.environ.get("TENCENTCLOUD_SECRET_ID")
        secret_key = os.environ.get("TENCENTCLOUD_SECRET_KEY")
        if not secret_id or not secret_key:
            raise AssetError("Bind TENCENTCLOUD_SECRET_ID and TENCENTCLOUD_SECRET_KEY in secure environment settings; do not paste them into commands or frontend files.")
        try:
            from tencentcloud.common import credential
            from tencentcloud.common.profile.client_profile import ClientProfile
            from tencentcloud.common.profile.http_profile import HttpProfile
            from tencentcloud.common.retry import NoopRetryer
            from tencentcloud.ai3d.v20250513 import ai3d_client, models
        except ImportError:
            raise AssetError("Install requirements-hunyuan.txt before using the Hunyuan API.") from None
        try:
            cred = credential.Credential(secret_id, secret_key, os.environ.get("TENCENTCLOUD_TOKEN") or None)
            profile = ClientProfile(
                httpProfile=HttpProfile(endpoint=ENDPOINT, reqTimeout=60),
                retryer=NoopRetryer(),
            )
            self.client = ai3d_client.Ai3dClient(cred, os.environ.get("TENCENTCLOUD_REGION", ""), profile)
            self.models = models
        except Exception:
            raise AssetError("Cannot configure the official Hunyuan SDK; check secure credentials and region settings.") from None

    def submit(self, payload):
        request = self.models.SubmitHunyuanTo3DProJobRequest()
        request.from_json_string(json.dumps(payload))
        try:
            return json.loads(self.client.SubmitHunyuanTo3DProJob(request).to_json_string())
        except Exception:
            # SDK/network exception strings can contain signed request details.
            raise AssetError("Submission outcome is uncertain. No automatic retry will occur; reconcile the receipt with the Tencent Cloud task history before continuing.") from None

    def query(self, job_id):
        request = self.models.QueryHunyuanTo3DProJobRequest()
        request.JobId = job_id
        try:
            return json.loads(self.client.QueryHunyuanTo3DProJob(request).to_json_string())
        except Exception:
            raise AssetError("Task query failed. The saved JobId will be reused; check API access, region and task expiry, then resume.") from None


class NoApiRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        # An API Bearer key must never be forwarded to another URL or host.
        return None


class TokenHubClient:
    """Official TokenHub API Key protocol; it is distinct from TC3 credentials.

    Reference: https://cloud.tencent.com/document/product/1823/137181
    No region or SDK is needed. Selecting this adapter is always explicit.
    """

    def __init__(self):
        self.api_key = os.environ.get("TOKENHUB_API_KEY")
        if not self.api_key:
            raise AssetError("Bind TOKENHUB_API_KEY in secure environment settings for --provider tokenhub; create/manage it in the official TokenHub API Key console.")

    def _request(self, path, payload):
        request = urllib.request.Request(
            TOKENHUB_API + path,
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": "Bearer " + self.api_key,
                "Content-Type": "application/json",
                "User-Agent": "MoleWorld-HunyuanAssets/1.0",
            },
            method="POST",
        )
        try:
            # urllib performs one request; redirects and automatic POST retries
            # are disabled. Do not share this opener with asset CDN requests.
            with urllib.request.build_opener(NoApiRedirect()).open(request, timeout=60) as response:
                data = response.read(1024 * 1024 + 1)
            if len(data) > 1024 * 1024:
                raise AssetError("TokenHub returned an excessive API response.")
            result = json.loads(data)
            if not isinstance(result, dict) or result.get("error"):
                raise AssetError("TokenHub returned an API error; inspect the official task history.")
            return result
        except (urllib.error.URLError, TimeoutError, OSError, ValueError):
            # Never surface server response bodies, headers or signed URLs.
            raise AssetError("TokenHub API request failed; check secure key binding, network access and the official task history.") from None

    def submit(self, payload):
        request = {
            "model": TOKENHUB_MODEL,
            "image_base64": payload["ImageBase64"],
            "generate_type": payload["GenerateType"],
            "enable_pbr": payload["EnablePBR"],
            "face_count": payload["FaceCount"],
        }
        try:
            result = self._request("/submit", request)
        except AssetError:
            raise AssetError("TokenHub submission outcome is uncertain. No automatic retry will occur; reconcile the private receipt with the official task history.") from None
        return {"JobId": result.get("id"), "RequestId": result.get("request_id")}

    def query(self, job_id):
        result = self._request("/query", {"model": TOKENHUB_MODEL, "id": job_id})
        normalized = {
            "Status": {"queued": "WAIT", "in_progress": "RUN", "failed": "FAIL", "completed": "DONE"}.get(result.get("status")),
            "RequestId": result.get("request_id"),
        }
        files = result.get("data")
        if isinstance(files, list):
            normalized["ResultFile3Ds"] = [
                {"Type": item.get("type"), "Url": item.get("url"), "PreviewImageUrl": item.get("preview_image_url")}
                for item in files if isinstance(item, dict)
            ]
        return normalized


class Ai3dKeyClient:
    """Original AI3D console API Key protocol, distinct from TokenHub and TC3.

    Official reference: cloud.tencent.com/document/product/1804/126189.
    It expects raw Authorization and ImageUrl.Url containing a data URI.
    Selecting this adapter is explicit; credentials never cross providers.
    """

    def __init__(self):
        self.api_key = os.environ.get("HUNYUAN_API_KEY")
        if not self.api_key:
            raise AssetError("Bind HUNYUAN_API_KEY in secure environment settings for --provider ai3d-key; no generation was submitted.")

    def _request(self, path, payload):
        request = urllib.request.Request(
            AI3D_KEY_API + path, data=json.dumps(payload).encode("utf-8"),
            headers={"Authorization": self.api_key, "Content-Type": "application/json",
                     "User-Agent": "MoleWorld-HunyuanAssets/1.0"}, method="POST")
        try:
            with urllib.request.build_opener(NoApiRedirect()).open(request, timeout=60) as response:
                data = response.read(1024 * 1024 + 1)
            if len(data) > 1024 * 1024:
                raise AssetError("AI3D returned an excessive response.")
            result = json.loads(data)
            if not isinstance(result, dict):
                raise AssetError("AI3D returned an invalid response.")
            result = result.get("Response", result)
            if not isinstance(result, dict) or result.get("Error") or result.get("error"):
                raise AssetError("AI3D returned an API error; inspect the official task history.")
            return result
        except (urllib.error.URLError, TimeoutError, OSError, ValueError):
            raise AssetError("Original AI3D API request failed; check secure key binding and network access. No response body or credential is printed.") from None

    def submit(self, payload):
        request = {key: payload[key] for key in ("Model", "GenerateType", "EnablePBR", "FaceCount")}
        request["ImageUrl"] = {"Url": "data:image/png;base64," + payload["ImageBase64"]}
        try:
            return self._request("/submit", request)
        except AssetError:
            raise AssetError("AI3D submission outcome is uncertain. No retry will occur; reconcile the saved receipt with the original AI3D console before continuing.") from None

    def query(self, job_id):
        return self._request("/query", {"JobId": job_id})


def checked_https(url):
    if not isinstance(url, str) or any(ord(char) < 32 for char in url):
        raise AssetError("Refusing an invalid asset download URL.")
    try:
        parsed = urllib.parse.urlsplit(url)
        valid = parsed.scheme == "https" and parsed.hostname and not parsed.username and not parsed.password and parsed.port in (None, 443)
    except ValueError:
        valid = False
    if not valid:
        raise AssetError("Asset downloads require HTTPS without URL credentials.")
    try:
        address = ipaddress.ip_address(parsed.hostname)
    except ValueError:
        address = None
    if parsed.hostname.lower() == "localhost" or (address and not address.is_global):
        raise AssetError("Refusing a local or private asset download address.")
    return url


class SafeRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        checked_https(newurl)
        redirected = super().redirect_request(req, fp, code, msg, headers, newurl)
        if redirected is not None:
            for name, _ in list(redirected.header_items()):
                if name.lower() in {"authorization", "cookie", "x-tc-token"}:
                    redirected.remove_header(name)
        return redirected


def index_in(value, collection):
    return type(value) is int and 0 <= value < len(collection)


def validate_glb(path):
    """Check the complete GLB container and bounds of embedded model buffers."""
    length = path.stat().st_size
    if length < 20 or length > MAX_DOWNLOAD_BYTES:
        raise AssetError("GLB file size is invalid.")
    chunks = []
    with path.open("rb") as source:
        header = source.read(12)
        magic, version, declared = struct.unpack("<4sII", header)
        if magic != b"glTF" or version != 2 or declared != length:
            raise AssetError("Downloaded file is not a complete glTF 2 binary.")
        offset = 12
        while offset < length:
            chunk_header = source.read(8)
            if len(chunk_header) != 8:
                raise AssetError("GLB has a truncated chunk header.")
            size, kind = struct.unpack("<I4s", chunk_header)
            if size % 4 or offset + 8 + size > length:
                raise AssetError("GLB has an invalid chunk length.")
            data = source.read(size)
            if len(data) != size:
                raise AssetError("GLB has truncated chunk data.")
            chunks.append((kind, data))
            offset += 8 + size
    if not chunks or chunks[0][0] != b"JSON" or sum(kind == b"JSON" for kind, _ in chunks) != 1:
        raise AssetError("GLB must begin with one JSON chunk.")
    bins = [data for kind, data in chunks if kind == b"BIN\0"]
    if len(bins) > 1 or (bins and chunks[1][0] != b"BIN\0"):
        raise AssetError("GLB has an invalid binary chunk layout.")
    try:
        scene = json.loads(chunks[0][1].decode("utf-8"))
    except (ValueError, UnicodeDecodeError):
        raise AssetError("GLB JSON scene is invalid.") from None
    if not isinstance(scene, dict) or not isinstance(scene.get("asset"), dict) or scene["asset"].get("version") != "2.0":
        raise AssetError("GLB does not declare a glTF 2 scene.")
    buffers, views, accessors, meshes = (scene.get(key, []) for key in ("buffers", "bufferViews", "accessors", "meshes"))
    if not all(isinstance(value, list) for value in (buffers, views, accessors, meshes)) or not meshes:
        raise AssetError("GLB scene has no valid mesh data.")
    if len(buffers) != 1 or not isinstance(buffers[0], dict) or "uri" in buffers[0] or not bins:
        raise AssetError("GLB mesh buffers must be embedded in one binary chunk.")
    buffer_size = buffers[0].get("byteLength")
    if type(buffer_size) is not int or buffer_size <= 0 or not buffer_size <= len(bins[0]) <= buffer_size + 3:
        raise AssetError("GLB binary length does not match its buffer declaration.")
    for view in views:
        if not isinstance(view, dict) or view.get("buffer") != 0:
            raise AssetError("GLB contains an invalid buffer view.")
        start, size = view.get("byteOffset", 0), view.get("byteLength")
        if type(start) is not int or type(size) is not int or start < 0 or size <= 0 or start + size > buffer_size:
            raise AssetError("GLB buffer view extends beyond its embedded data.")
    components = {5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4}
    widths = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT2": 4, "MAT3": 9, "MAT4": 16}
    for accessor in accessors:
        if not isinstance(accessor, dict):
            raise AssetError("GLB accessor is invalid.")
        count, component, shape = accessor.get("count"), accessor.get("componentType"), accessor.get("type")
        if type(count) is not int or count <= 0 or component not in components or shape not in widths:
            raise AssetError("GLB accessor has invalid element metadata.")
        if "bufferView" in accessor:
            if not index_in(accessor["bufferView"], views):
                raise AssetError("GLB accessor references an absent buffer view.")
            view = views[accessor["bufferView"]]
            offset = accessor.get("byteOffset", 0)
            element = components[component] * widths[shape]
            # Matrix columns with 1/2-byte components are aligned to four bytes.
            if shape.startswith("MAT"):
                side = int(shape[-1])
                element = ((side * components[component] + 3) // 4 * 4) * side
            stride = view.get("byteStride", element)
            if type(offset) is not int or offset < 0 or type(stride) is not int or stride < element or offset + (count - 1) * stride + element > view["byteLength"]:
                raise AssetError("GLB accessor extends beyond its buffer view.")
    for mesh in meshes:
        primitives = mesh.get("primitives") if isinstance(mesh, dict) else None
        if not isinstance(primitives, list) or not primitives:
            raise AssetError("GLB mesh has no primitives.")
        for primitive in primitives:
            attributes = primitive.get("attributes") if isinstance(primitive, dict) else None
            if not isinstance(attributes, dict) or "POSITION" not in attributes or not all(index_in(value, accessors) for value in attributes.values()):
                raise AssetError("GLB primitive has invalid vertex accessors.")
            if "indices" in primitive and not index_in(primitive["indices"], accessors):
                raise AssetError("GLB primitive has an invalid index accessor.")
    for image in scene.get("images", []):
        if not isinstance(image, dict) or ("uri" in image and not str(image["uri"]).startswith("data:")):
            raise AssetError("GLB textures must be embedded, not external downloads.")
        if "bufferView" in image and not index_in(image["bufferView"], views):
            raise AssetError("GLB image references an absent buffer view.")
    return hashlib.sha256(path.read_bytes()).hexdigest()


def download_model(url, path):
    checked_https(url)
    path.parent.mkdir(parents=True, exist_ok=True)
    descriptor, name = tempfile.mkstemp(prefix=path.name + ".", suffix=".download", dir=path.parent)
    temporary = Path(name)
    try:
        # CDN requests are independent of the SDK and receive no cloud headers.
        request = urllib.request.Request(url, headers={"User-Agent": "MoleWorld-HunyuanAssets/1.0", "Accept": "model/gltf-binary,application/octet-stream"})
        opener = urllib.request.build_opener(SafeRedirect())
        with os.fdopen(descriptor, "wb") as output:
            descriptor = None
            with opener.open(request, timeout=120) as response:
                checked_https(response.geturl())
                declared = response.headers.get("Content-Length")
                if declared is not None and (not declared.isdigit() or int(declared) > MAX_DOWNLOAD_BYTES):
                    raise AssetError("Asset download has an invalid or excessive Content-Length.")
                total = 0
                while chunk := response.read(1024 * 1024):
                    total += len(chunk)
                    if total > MAX_DOWNLOAD_BYTES:
                        raise AssetError("Asset download exceeds the 180 MiB limit.")
                    output.write(chunk)
                if declared is not None and total != int(declared):
                    raise AssetError("Asset download ended before its declared length.")
            output.flush()
            os.fsync(output.fileno())
        sha256 = validate_glb(temporary)
        os.replace(temporary, path)
        return sha256
    except (urllib.error.URLError, TimeoutError, OSError):
        raise AssetError("Asset download failed. No cloud credential is sent to the CDN; resume the saved task after checking network access or URL expiry.") from None
    finally:
        if descriptor is not None:
            os.close(descriptor)
        temporary.unlink(missing_ok=True)


def record_query(asset, receipt, result):
    status = result.get("Status")
    if status not in STATUS_VALUES:
        raise AssetError(f'{asset["id"]}: provider returned an unknown task state; saved JobId is retained.')
    receipt["provider_status"] = status
    receipt["state"] = {"WAIT": "waiting", "RUN": "running", "FAIL": "failed", "DONE": "ready"}[status]
    for source, target in (("RequestId", "last_query_request_id"), ("ErrorCode", "error_code"), ("ErrorMessage", "error_message"), ("ResultCreditDetails", "credit_details")):
        value = result.get(source)
        if isinstance(value, str):
            receipt[target] = value[:4096]
    credit = result.get("ResultCreditConsumed")
    if type(credit) in (int, float) and math.isfinite(credit) and credit >= 0:
        receipt["credit_consumed"] = credit
    save_receipt(asset, receipt)
    return status


def existing_raw(asset, receipt):
    if receipt.get("state") != "downloaded":
        return False
    target = rooted(RAW / (asset["id"] + ".glb"))
    if not target.exists():
        return False
    if validate_glb(target) != receipt.get("sha256"):
        raise AssetError(f'{asset["id"]}: saved raw GLB checksum changed; inspect it before continuing.')
    return True


def job_id_from(receipt):
    value = receipt.get("job_id")
    if not isinstance(value, str) or not value or len(value) > 512 or any(ord(c) < 32 for c in value):
        raise AssetError("Previous submission outcome is uncertain. Reconcile its JobId in the private receipt with Tencent Cloud task history; this command will not resubmit it.")
    return value


def selected_factory(provider, client_factory):
    if provider not in {"ai3d", "tokenhub", "ai3d-key"}:
        raise AssetError("Choose an explicit API provider: ai3d, ai3d-key or tokenhub.")
    return client_factory or {"ai3d": HunyuanClient, "tokenhub": TokenHubClient, "ai3d-key": Ai3dKeyClient}[provider]


def check_receipt_provider(asset, receipt, provider):
    if receipt.get("api_provider", "ai3d") != provider:
        raise AssetError(f'{asset["id"]}: saved task belongs to a different API provider; use its original --provider to resume. No new task was submitted.')


def generate(selected, limit=1, client_factory=None, poll_timeout=1200, poll_interval=5, provider="ai3d", submit_only=False):
    if type(limit) is not int or not 1 <= limit <= 3:
        raise AssetError("The generation limit must be from 1 to 3.")
    client_factory = selected_factory(provider, client_factory)
    client = None
    with task_lock():
        for asset in selected[:limit]:
            receipt = read_receipt(asset)
            if receipt and existing_raw(asset, receipt):
                print(f'{asset["id"]}: raw GLB verified; no paid request.')
                continue
            if receipt:
                check_receipt_provider(asset, receipt, provider)
                job_id = job_id_from(receipt)
                source = receipt.get("source", {})
                if source and (source.get("image_path") != asset["imagePath"] or source.get("face_count") != asset["faceCount"] or source.get("model") != MODEL):
                    raise AssetError(f'{asset["id"]}: plan differs from the saved paid task; reconcile the receipt before changing its input.')
            else:
                payload, source = image_payload(asset)
                client = client or client_factory()
                receipt = {"schema_version": 1, "provider": "TencentCloud AI3D", "api_provider": provider, "asset_id": asset["id"], "state": "submission_uncertain", "source": source, "created_at": timestamp()}
                # Persist intent BEFORE calling a potentially billable endpoint.
                save_receipt(asset, receipt)
                result = client.submit(payload)
                if isinstance(result.get("RequestId"), str):
                    receipt["submit_request_id"] = result["RequestId"][:4096]
                try:
                    job_id = job_id_from({"job_id": result.get("JobId")})
                except AssetError:
                    save_receipt(asset, receipt)
                    raise
                receipt.update(job_id=job_id, state="submitted")
                # Persist JobId immediately, before querying or doing other work.
                save_receipt(asset, receipt)
                print(f'{asset["id"]}: one paid submission saved.')
            if submit_only:
                print(f'{asset["id"]}: JobId already saved; query and download deferred. No resubmission.', flush=True)
                continue
            client = client or client_factory()
            deadline = time.monotonic() + poll_timeout
            last_status = None
            while True:
                result = client.query(job_id)
                status = record_query(asset, receipt, result)
                if status != last_status:
                    print(f'{asset["id"]}: {status}', flush=True)
                    last_status = status
                if status == "FAIL":
                    raise AssetError(f'{asset["id"]}: provider task failed; details are in the private receipt. No replacement task will be submitted automatically.')
                if status == "DONE":
                    files = result.get("ResultFile3Ds")
                    if not isinstance(files, list):
                        raise AssetError("Completed task has no result files; saved JobId is retained.")
                    glb = next((item for item in files if isinstance(item, dict) and str(item.get("Type", "")).upper() == "GLB" and isinstance(item.get("Url"), str)), None)
                    if glb is None:
                        raise AssetError("Completed Pro task did not return a GLB; saved JobId is retained.")
                    target = rooted(RAW / (asset["id"] + ".glb"))
                    sha256 = download_model(glb["Url"], target)
                    receipt.update(state="downloaded", raw_path=target.relative_to(ROOT.resolve()).as_posix(), sha256=sha256, byte_length=target.stat().st_size)
                    save_receipt(asset, receipt)
                    print(f'{asset["id"]}: validated raw GLB saved for Blender: {receipt["raw_path"]}')
                    break
                if time.monotonic() >= deadline:
                    raise AssetError("Polling timed out. Run the same command to resume its saved JobId without another paid submission.")
                time.sleep(min(poll_interval, max(0, deadline - time.monotonic())))


def show_status(selected, client_factory=None, provider="ai3d"):
    client_factory = selected_factory(provider, client_factory)
    client = None
    with task_lock():
        for asset in selected:
            receipt = read_receipt(asset)
            if not receipt:
                print(f'{asset["id"]}: not submitted')
                continue
            if existing_raw(asset, receipt):
                print(f'{asset["id"]}: downloaded; raw GLB checksum verified')
                continue
            if not receipt.get("job_id"):
                print(f'{asset["id"]}: submission outcome uncertain; reconcile the private receipt with task history')
                continue
            check_receipt_provider(asset, receipt, provider)
            client = client or client_factory()
            result = client.query(job_id_from(receipt))
            state = record_query(asset, receipt, result)
            print(f'{asset["id"]}: {state} (no generation submitted)')


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=("plan", "generate", "status"))
    parser.add_argument("--asset", action="append", help="Asset ID; may be repeated. Default: plan order.")
    parser.add_argument("--provider", choices=("ai3d", "ai3d-key", "tokenhub"), default="ai3d", help="ai3d: TC3 SDK; ai3d-key: original HUNYUAN_API_KEY; tokenhub: separate TOKENHUB_API_KEY Bearer protocol.")
    parser.add_argument("--limit", type=int, choices=range(1, 4), default=1, help="Assets considered by generate (default 1; maximum 3).")
    parser.add_argument("--submit-only", action="store_true", help="Save each generation JobId without querying or downloading; existing tasks are never resubmitted.")
    args = parser.parse_args(argv)
    plan = load_plan()
    known = {asset["id"] for asset in plan["assets"]}
    if args.asset and set(args.asset) - known:
        parser.error("--asset must name an ID in the flower-sea plan")
    selected = [asset for asset in plan["assets"] if not args.asset or asset["id"] in args.asset]
    if args.command == "plan":
        print("Offline plan: no SDK, credentials, API requests or charges.")
        print("Official Hunyuan Pro 3.1; Normal + PBR; default OBJ/GLB results.")
        print("API provider:", args.provider)
        print("API pricing and available region must be checked in Tencent Cloud; website free quotas do not establish API pricing.")
        for asset in selected:
            exists = rooted(asset["imagePath"]).is_file()
            print(f'{asset["id"]}: {asset["label"]}; PNG={asset["imagePath"]} ({"ready" if exists else "missing"}); faces={asset["faceCount"]}')
            print(f'  raw={RAW.as_posix()}/{asset["id"]}.glb; later Blender target={asset["outputPath"]}; worldHeight={asset["worldHeight"]}')
    elif args.command == "generate":
        generate(selected, args.limit, provider=args.provider, submit_only=args.submit_only)
    else:
        show_status(selected, provider=args.provider)


if __name__ == "__main__":
    try:
        main()
    except AssetError as exc:
        print("Hunyuan assets:", str(exc), file=sys.stderr)
        sys.exit(1)
    except (OSError, ValueError, TypeError, struct.error):
        print("Hunyuan assets: local input or receipt is invalid; check file paths, permissions and JSON. No automatic resubmission occurs.", file=sys.stderr)
        sys.exit(1)
