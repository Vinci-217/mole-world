"""Exercise actual Blender import/export with an artificial local fixture.

The fixture is not a game asset and is never claimed to be Hunyuan output.
"""
import importlib.util
import json
from pathlib import Path
import shutil
import struct
import subprocess
import tempfile
import unittest

from test_hunyuan_assets import glb, png, triangle_scene


ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts/blender_prepare_asset.py"
BLENDER = shutil.which("blender")
spec = importlib.util.spec_from_file_location("blender_prepare_asset", SCRIPT)
pipeline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pipeline)


def run_blender(script, *arguments):
    command = [BLENDER, "-b", "--python-exit-code", "1", "--python", str(script)]
    if arguments:
        command += ["--", *map(str, arguments)]
    result = subprocess.run(command, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=120)
    if result.returncode:
        raise AssertionError(result.stdout[-6000:])
    return result


class BlenderPrepareValidationTests(unittest.TestCase):
    def test_invalid_container_is_rejected_before_import(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "broken.glb"
            for content in [b"<html>not a model</html>", struct.pack("<4sII", b"glTF", 2, 12)]:
                path.write_bytes(content)
                with self.assertRaises(ValueError):
                    pipeline.glb_document(path)


@unittest.skipUnless(BLENDER, "Blender is required for the real import/export verification")
class BlenderPrepareIntegrationTests(unittest.TestCase):
    def test_thin_double_sided_pbr_surface_retains_all_material_channels(self):
        """A single triangle exercises thin petals without adding thickness."""
        with tempfile.TemporaryDirectory() as folder:
            work = Path(folder)
            raw, output, report = [work / name for name in ("raw.glb", "prepared.glb", "report.json")]
            scene, source_binary = triangle_scene()
            binary = bytearray(source_binary)

            def append_view(data):
                binary.extend(b"\0" * (-len(binary) % 4))
                scene["bufferViews"].append({"buffer": 0, "byteOffset": len(binary), "byteLength": len(data)})
                binary.extend(data)
                return len(scene["bufferViews"]) - 1

            normals = append_view(struct.pack("<9f", *(0, 0, 1) * 3))
            uv = append_view(struct.pack("<6f", 0, 0, 1, 0, 0, 1))
            scene["accessors"].extend([
                {"bufferView": normals, "componentType": 5126, "count": 3, "type": "VEC3"},
                {"bufferView": uv, "componentType": 5126, "count": 3, "type": "VEC2"},
            ])
            primitive = scene["meshes"][0]["primitives"][0]
            primitive["attributes"].update(NORMAL=2, TEXCOORD_0=3)
            primitive["material"] = 0
            scene.update(scene=0, scenes=[{"nodes": [0]}], nodes=[{"mesh": 0}])
            scene["images"] = [
                {"bufferView": append_view(png(128 + i, 128)), "mimeType": "image/png", "name": name}
                for i, name in enumerate(("BaseColor", "Normal", "OcclusionRoughnessMetallic"))
            ]
            scene["textures"] = [{"source": i} for i in range(3)]
            scene["materials"] = [{
                "name": "Thin PBR petal test fixture",
                "pbrMetallicRoughness": {
                    "baseColorFactor": [.8, .5, .9, .7],
                    "baseColorTexture": {"index": 0},
                    "metallicFactor": .15,
                    "roughnessFactor": .62,
                    "metallicRoughnessTexture": {"index": 2},
                },
                "normalTexture": {"index": 1, "scale": .37},
                "occlusionTexture": {"index": 2, "strength": .67},
                "emissiveTexture": {"index": 0},
                "emissiveFactor": [.07, .04, .02],
                "alphaMode": "BLEND", "doubleSided": True,
            }]
            scene["buffers"][0]["byteLength"] = len(binary)
            raw.write_bytes(glb(scene, bytes(binary)))
            run_blender(SCRIPT, "--input", raw, "--output", output, "--height", "3", "--id", "thin-pbr-fixture", "--report", report)
            exported = pipeline.glb_document(output)
            self.assertEqual(pipeline.export_statistics(exported)["triangles"], 1)
            material = exported["materials"][0]
            self.assertTrue(material.get("doubleSided"), "Thin source surfaces must retain back-face visibility.")
            self.assertEqual(material["alphaMode"], "BLEND")
            pbr = material["pbrMetallicRoughness"]
            for actual, expected in zip(pbr["baseColorFactor"], [.8, .5, .9, .7]):
                self.assertAlmostEqual(actual, expected, places=5)
            self.assertAlmostEqual(pbr["metallicFactor"], .15, places=5)
            self.assertAlmostEqual(pbr["roughnessFactor"], .62, places=5)
            self.assertAlmostEqual(material["normalTexture"]["scale"], .37, places=5)
            self.assertAlmostEqual(material["occlusionTexture"]["strength"], .67, places=5)
            for actual, expected in zip(material["emissiveFactor"], [.07, .04, .02]):
                self.assertAlmostEqual(actual, expected, places=5)
            for channel in (pbr["baseColorTexture"], pbr["metallicRoughnessTexture"], material["normalTexture"], material["occlusionTexture"], material["emissiveTexture"]):
                texture = exported["textures"][channel["index"]]
                self.assertIn("bufferView", exported["images"][texture["source"]])

    def test_normalizes_nested_asset_without_losing_materials_or_texture(self):
        with tempfile.TemporaryDirectory() as folder:
            work = Path(folder)
            raw, output, report = [work / name for name in ("raw.glb", "prepared.glb", "report.json")]
            fixture = work / "fixture.py"
            fixture.write_text('''import bpy
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
root = bpy.data.objects.new('OriginalRoot', None)
bpy.context.scene.collection.objects.link(root)
root.location = (8, -2, 4)
root.rotation_euler.z = .25
image = bpy.data.images.new('FixtureTexture', width=4096, height=16)
image.generated_color = (.25, .5, .8, 1)
for i in range(2):
    bpy.ops.mesh.primitive_cube_add(size=2)
    obj = bpy.context.object
    obj.parent = root
    obj.location = (i * 3, 0, i * 2)
    obj.scale = (1, .5, 1)
    material = bpy.data.materials.new('FixtureMaterial' + str(i))
    material.use_nodes = True
    if i == 0:
        texture = material.node_tree.nodes.new('ShaderNodeTexImage')
        texture.image = image
        material.node_tree.links.new(texture.outputs['Color'], material.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
    else:
        material.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value = (.8, .2, .3, 1)
    obj.data.materials.append(material)
bpy.context.view_layer.update()
bpy.ops.export_scene.gltf(filepath=RAW, export_format='GLB')
'''.replace("RAW", repr(str(raw))), encoding="utf-8")
            run_blender(fixture)
            raw_hash = pipeline.file_hash(raw)
            run_blender(SCRIPT, "--input", raw, "--output", output, "--height", "7", "--id", "test-fixture", "--report", report)
            result = json.loads(report.read_text())
            self.assertEqual(result["input"]["sha256"], raw_hash)
            self.assertEqual(pipeline.file_hash(raw), raw_hash, "The raw generation must remain unchanged.")
            self.assertEqual(result["sceneStatistics"]["meshObjects"], 2)
            self.assertEqual(result["exportStatistics"]["materials"], 2)
            self.assertEqual(result["exportStatistics"]["triangles"], 24)
            self.assertEqual(result["exportStatistics"]["images"], 1)
            self.assertEqual(result["textures"][0]["before"], [4096, 16])
            self.assertEqual(result["textures"][0]["after"], [2048, 8])
            self.assertFalse(result["provenance"]["providerVerifiedByThisScript"])
            exported = pipeline.glb_document(output)
            texture_view = exported["bufferViews"][exported["images"][0]["bufferView"]]
            output_bytes = output.read_bytes()
            json_size = struct.unpack_from("<I", output_bytes, 12)[0]
            texture_start = 12 + 8 + json_size + 8 + texture_view.get("byteOffset", 0)
            embedded_png = output_bytes[texture_start:texture_start + texture_view["byteLength"]]
            self.assertEqual(embedded_png[:8], b"\x89PNG\r\n\x1a\n")
            self.assertEqual(struct.unpack_from(">II", embedded_png, 16), (2048, 8), "The browser must receive the resized texture, not stale packed bytes.")

            # Reimport the exported GLB in a fresh scene, so this does not just
            # trust the report's copy of the pre-export Blender transforms.
            probe = work / "probe.py"
            measurements = work / "measurements.json"
            probe.write_text('''import bpy, json
from mathutils import Vector
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=OUTPUT)
bpy.context.view_layer.update()
meshes = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH']
points = [obj.matrix_world @ Vector(corner) for obj in meshes for corner in obj.bound_box]
lo = [min(p[i] for p in points) for i in range(3)]
hi = [max(p[i] for p in points) for i in range(3)]
open(MEASUREMENTS, 'w').write(json.dumps({'min':lo, 'max':hi}))
'''.replace("OUTPUT", repr(str(output))).replace("MEASUREMENTS", repr(str(measurements))), encoding="utf-8")
            run_blender(probe)
            bounds = json.loads(measurements.read_text())
            self.assertAlmostEqual(bounds["min"][2], 0, places=5)
            self.assertAlmostEqual(bounds["max"][2], 7, places=5)
            for axis in (0, 1):
                self.assertAlmostEqual(bounds["min"][axis] + bounds["max"][axis], 0, places=5)
            self.assertEqual(pipeline.file_hash(output), result["output"]["sha256"])


if __name__ == "__main__":
    unittest.main()
