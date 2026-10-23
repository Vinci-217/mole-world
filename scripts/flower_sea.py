"""Install receipt-verified Hunyuan models after a real Blender processing pass.

This command never submits a generation request. Raw generated GLBs and private
job receipts must already exist. Only verified, processed models become ready
in the public browser manifest; images and placeholders cannot satisfy it.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

sys.path.insert(0, str(Path(__file__).resolve().parent))
import hunyuan_assets as generation

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = Path("public/assets/flower-sea/manifest.json")


def verified_input(asset):
    receipt = generation.read_receipt(asset)
    if not receipt:
        return None
    if receipt.get("provider") != "TencentCloud AI3D" or receipt.get("state") != "downloaded":
        raise generation.AssetError(f'{asset["id"]}: generation is not downloaded; finish the existing job first.')
    raw = generation.rooted(generation.RAW / (asset["id"] + ".glb"))
    if not raw.is_file() or generation.validate_glb(raw) != receipt.get("sha256"):
        raise generation.AssetError(f'{asset["id"]}: raw model does not match its generation receipt.')
    _, source = generation.image_payload(asset)
    if source != receipt.get("source"):
        raise generation.AssetError(f'{asset["id"]}: reference or generation settings changed after generation; reconcile the saved task.')
    return raw, receipt


def atomic_public_file(source, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary = tempfile.mkstemp(prefix=destination.name, suffix=".install", dir=destination.parent)
    os.close(descriptor)
    try:
        shutil.copyfile(source, temporary)
        os.replace(temporary, destination)
    finally:
        Path(temporary).unlink(missing_ok=True)


def save_manifest(manifest):
    destination = ROOT / MANIFEST
    descriptor, temporary = tempfile.mkstemp(prefix="manifest-", suffix=".json", dir=destination.parent)
    try:
        with os.fdopen(descriptor, "w", encoding="utf-8") as output:
            json.dump(manifest, output, ensure_ascii=False, indent=2, allow_nan=False)
            output.write("\n")
        os.replace(temporary, destination)
    finally:
        Path(temporary).unlink(missing_ok=True)


def prepare(assets):
    manifest = json.loads((ROOT / MANIFEST).read_text())
    entries = {entry["id"]: entry for entry in manifest["assets"]}
    blender = shutil.which("blender")
    if not blender:
        raise generation.AssetError("Blender is not installed; no browser assets were changed.")
    with generation.task_lock():
        for asset in assets:
            verified = verified_input(asset)
            if verified is None:
                print(f'{asset["id"]}: pending generation; no replacement model installed')
                continue
            raw, receipt = verified
            destination = generation.rooted(asset["outputPath"])
            public_root = (ROOT / "public/assets/flower-sea").resolve()
            if not destination.is_relative_to(public_root) or asset["id"] not in entries:
                raise generation.AssetError("An output is outside the registered flower-sea assets.")
            work = ROOT / "artifacts/flower-sea" / asset["id"]
            work.mkdir(parents=True, exist_ok=True)
            processed = work / "prepared.glb"
            report_path = work / "blender-report.json"
            entry = entries[asset["id"]]
            # An unchanged verified installation needs no additional Blender run.
            if (entry.get("state") == "ready" and entry.get("rawSha256") == receipt["sha256"]
                    and entry.get("height") == asset["worldHeight"] and destination.is_file()
                    and generation.validate_glb(destination) == entry.get("sha256")):
                print(f'{asset["id"]}: verified existing Blender asset')
                continue
            command = [blender, "-b", "--python-exit-code", "1", "--python",
                       str(ROOT / "scripts/blender_prepare_asset.py"), "--", "--input", str(raw),
                       "--output", str(processed), "--height", str(asset["worldHeight"]),
                       "--id", asset["id"], "--report", str(report_path), "--blend", str(work / "authoring.blend")]
            result = subprocess.run(command, cwd=ROOT, capture_output=True, text=True)
            (work / "blender.log").write_text(result.stdout + result.stderr)
            if result.returncode:
                raise generation.AssetError(f'{asset["id"]}: Blender failed; see the private processing log. The public model was not changed.')
            report = json.loads(report_path.read_text())
            checksum = generation.validate_glb(processed)
            if report["input"]["sha256"] != receipt["sha256"] or report["output"]["sha256"] != checksum:
                raise generation.AssetError(f'{asset["id"]}: Blender report does not match the actual input and output.')
            atomic_public_file(processed, destination)
            entry.update(state="ready", height=asset["worldHeight"],
                         path="./" + destination.relative_to(ROOT / "public").as_posix(),
                         sha256=checksum, rawSha256=receipt["sha256"],
                         source="TencentCloud Hunyuan Pro 3.1 → Blender",
                         triangles=report["exportStatistics"]["triangles"],
                         materials=report["exportStatistics"]["materials"],
                         blenderVersion=report["blenderVersion"])
            save_manifest(manifest)
            print(f'{asset["id"]}: installed real Blender-processed GLB; visual art review still required')


def sync_progress(assets):
    """Publish only a small state enum, never private job IDs, URLs or credits."""
    manifest = json.loads((ROOT / MANIFEST).read_text())
    entries = {entry["id"]: entry for entry in manifest["assets"]}
    with generation.task_lock():
        for asset in assets:
            receipt = generation.read_receipt(asset)
            state = (receipt or {}).get("state")
            progress = {
                None: "not-submitted", "submitted": "submitted", "waiting": "generating",
                "running": "generating", "ready": "generated", "downloaded": "downloaded",
                "failed": "failed", "submission_uncertain": "needs-review",
            }.get(state, "needs-review")
            entries[asset["id"]]["generationState"] = progress
            print(f'{asset["id"]}: {progress}')
        save_manifest(manifest)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["prepare", "status", "progress"])
    parser.add_argument("--asset", action="append")
    args = parser.parse_args()
    plan = generation.load_plan()
    known = {asset["id"] for asset in plan["assets"]}
    if args.asset and set(args.asset) - known:
        parser.error("Unknown asset ID")
    assets = [asset for asset in plan["assets"] if not args.asset or asset["id"] in args.asset]
    if args.command == "prepare":
        prepare(assets)
    elif args.command == "progress":
        sync_progress(assets)
    else:
        manifest = json.loads((ROOT / MANIFEST).read_text())
        for entry in manifest["assets"]:
            if entry["id"] not in {asset["id"] for asset in assets}:
                continue
            state = entry["state"]
            if state == "ready":
                target = ROOT / "public" / entry["path"].removeprefix("./")
                if not target.is_file() or generation.validate_glb(target) != entry.get("sha256"):
                    raise generation.AssetError(f'{entry["id"]}: browser model is missing or its checksum changed.')
            print(f'{entry["id"]}: {state}')


if __name__ == "__main__":
    try:
        main()
    except (generation.AssetError, OSError, ValueError, KeyError) as error:
        print("Flower sea:", str(error), file=sys.stderr)
        sys.exit(1)
