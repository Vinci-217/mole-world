"""A failed or unverified generation must never replace a browser asset."""
import importlib.util
import io
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

from test_hunyuan_assets import glb, png, triangle_scene


spec = importlib.util.spec_from_file_location(
    "flower_sea", Path(__file__).parents[1] / "scripts/flower_sea.py"
)
pipeline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pipeline)


class FlowerInstallationTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        for target in (pipeline, pipeline.generation):
            replacement = patch.object(target, "ROOT", self.root)
            replacement.start()
            self.addCleanup(replacement.stop)
        for replacement in (
            patch("sys.stdout", new_callable=io.StringIO),
            patch.object(pipeline.shutil, "which", return_value="/test/blender"),
            patch.object(pipeline.generation, "HunyuanClient", side_effect=AssertionError("Preparation must not call a generation API")),
            patch.object(pipeline.generation, "TokenHubClient", side_effect=AssertionError("Preparation must not call a generation API")),
        ):
            replacement.start()
            self.addCleanup(replacement.stop)
        self.blender_patch = patch.object(pipeline.subprocess, "run", side_effect=AssertionError("Unverified input must not reach Blender"))
        self.blender = self.blender_patch.start()
        self.addCleanup(self.blender_patch.stop)
        self.asset = {
            "id": "flower-arch",
            "label": "花海拱门",
            "imagePath": "art-direction/flower-sea/references/flower-arch.png",
            "faceCount": 20000,
            "worldHeight": 4.5,
            "outputPath": "public/assets/flower-sea/flower-arch.glb",
        }
        self.image = self.root / self.asset["imagePath"]
        self.image.parent.mkdir(parents=True)
        self.image.write_bytes(png())
        self.raw = self.root / pipeline.generation.RAW / "flower-arch.glb"
        self.raw.parent.mkdir(parents=True)
        self.raw.write_bytes(glb())
        self.destination = self.root / self.asset["outputPath"]
        self.manifest = self.root / pipeline.MANIFEST
        self.manifest.parent.mkdir(parents=True)
        self.manifest.write_text(json.dumps({"assets": [{"id": self.asset["id"], "state": "pending"}]}))

    def write_receipt(self, **changes):
        _, source = pipeline.generation.image_payload(self.asset)
        receipt = {
            "asset_id": self.asset["id"],
            "provider": "TencentCloud AI3D",
            "state": "downloaded",
            "job_id": "offline-fixture-job",
            "source": source,
            "sha256": pipeline.generation.validate_glb(self.raw),
        }
        receipt.update(changes)
        pipeline.generation.save_receipt(self.asset, receipt)
        return receipt

    def old_installation(self):
        scene, binary = triangle_scene()
        scene["asset"]["generator"] = "previous reviewed browser fixture"
        self.destination.write_bytes(glb(scene, binary))
        manifest = json.loads(self.manifest.read_text())
        manifest["assets"][0].update(
            state="ready", height=self.asset["worldHeight"],
            sha256=pipeline.generation.validate_glb(self.destination),
            rawSha256="a" * 64,
        )
        self.manifest.write_text(json.dumps(manifest))
        return self.manifest.read_bytes(), self.destination.read_bytes()

    def assert_existing_unchanged(self, old):
        self.assertEqual(self.manifest.read_bytes(), old[0])
        self.assertEqual(self.destination.read_bytes(), old[1])

    def simulate_blender(self, input_hash=None, output_hash=None):
        """Create a complete private output and report, without an API/Blender."""
        scene, binary = triangle_scene()
        scene["asset"]["generator"] = "processed offline test fixture"
        self.processed_bytes = glb(scene, binary)

        def completed(command, **_):
            output = Path(command[command.index("--output") + 1])
            report = Path(command[command.index("--report") + 1])
            output.write_bytes(self.processed_bytes)
            report.write_text(json.dumps({
                "input": {"sha256": input_hash or pipeline.generation.validate_glb(self.raw)},
                "output": {"sha256": output_hash or pipeline.generation.validate_glb(output)},
                "exportStatistics": {"triangles": 1, "materials": 0},
                "blenderVersion": "4.3.2",
            }))
            return subprocess.CompletedProcess(command, 0, "offline fixture processed", "")

        self.blender.side_effect = completed

    def test_raw_file_without_generation_receipt_never_becomes_ready(self):
        original = self.manifest.read_bytes()
        pipeline.prepare([self.asset])
        self.assertEqual(self.manifest.read_bytes(), original)
        self.assertFalse(self.destination.exists())
        self.blender.assert_not_called()

    def test_raw_checksum_mismatch_preserves_previous_browser_asset(self):
        self.write_receipt(sha256="0" * 64)
        old = self.old_installation()
        with self.assertRaisesRegex(pipeline.generation.AssetError, "raw model does not match"):
            pipeline.prepare([self.asset])
        self.assert_existing_unchanged(old)
        self.blender.assert_not_called()

    def test_changed_reference_image_preserves_previous_browser_asset(self):
        self.write_receipt()
        old = self.old_installation()
        self.image.write_bytes(png(128, 129))
        with self.assertRaisesRegex(pipeline.generation.AssetError, "reference or generation settings changed"):
            pipeline.prepare([self.asset])
        self.assert_existing_unchanged(old)
        self.blender.assert_not_called()

    def test_changed_generation_budget_preserves_previous_browser_asset(self):
        self.write_receipt()
        old = self.old_installation()
        changed_asset = {**self.asset, "faceCount": self.asset["faceCount"] + 3000}
        with self.assertRaisesRegex(pipeline.generation.AssetError, "reference or generation settings changed"):
            pipeline.prepare([changed_asset])
        self.assert_existing_unchanged(old)
        self.blender.assert_not_called()

    def test_unrecognised_provider_cannot_publish_a_model(self):
        self.write_receipt(provider="Unverified model download")
        old = self.old_installation()
        with self.assertRaises(pipeline.generation.AssetError):
            pipeline.prepare([self.asset])
        self.assert_existing_unchanged(old)
        self.blender.assert_not_called()

    def test_matching_generation_and_blender_report_install_real_output_once(self):
        receipt = self.write_receipt()
        original_raw = self.raw.read_bytes()
        self.simulate_blender()
        pipeline.prepare([self.asset])
        installed = json.loads(self.manifest.read_text())["assets"][0]
        self.assertEqual(installed["state"], "ready")
        self.assertEqual(self.destination.read_bytes(), self.processed_bytes)
        self.assertEqual(installed["sha256"], pipeline.generation.validate_glb(self.destination))
        self.assertEqual(installed["rawSha256"], receipt["sha256"])
        self.assertEqual(installed["height"], self.asset["worldHeight"])
        self.assertEqual(installed["path"], "./assets/flower-sea/flower-arch.glb")
        self.assertEqual(installed["triangles"], 1)
        self.assertEqual(self.raw.read_bytes(), original_raw)
        pipeline.prepare([self.asset])
        self.assertEqual(self.blender.call_count, 1, "An unchanged verified installation must not be rebuilt.")

    def test_blender_success_with_forged_report_cannot_replace_public_model(self):
        self.write_receipt()
        old = self.old_installation()
        for mismatch in ({"input_hash": "0" * 64}, {"output_hash": "0" * 64}):
            with self.subTest(mismatch=mismatch):
                self.simulate_blender(**mismatch)
                with self.assertRaisesRegex(pipeline.generation.AssetError, "report does not match"):
                    pipeline.prepare([self.asset])
                self.assert_existing_unchanged(old)

    def test_failed_blender_keeps_old_public_model_and_manifest(self):
        self.write_receipt()
        old = self.old_installation()

        def failed(command, **_):
            # Even if the failed process left a private partial GLB, it must
            # not be copied over the previous public model.
            output = Path(command[command.index("--output") + 1])
            output.write_bytes(b"interrupted output")
            return subprocess.CompletedProcess(command, 1, "partial progress", "simulated Blender failure")

        self.blender.side_effect = failed
        with self.assertRaisesRegex(pipeline.generation.AssetError, "Blender failed"):
            pipeline.prepare([self.asset])
        self.assert_existing_unchanged(old)
        self.assertFalse((self.root / pipeline.generation.JOBS / "pipeline.lock").exists())


if __name__ == "__main__":
    unittest.main()
