"""Normalize an actual generated GLB for the browser without rebuilding its art.

Run with Blender, not the system Python::

    blender -b --python-exit-code 1 --python scripts/blender_prepare_asset.py -- \
      --input artifacts/hunyuan/raw/flower.glb \
      --output public/assets/flower-sea/flower.glb --height 4 --id flower \
      --report artifacts/flower-sea/flower.json

Only hierarchy transforms and oversized texture dimensions change. Meshes,
materials, UVs and authored normals are retained; there is no automatic
decimation, remeshing, smoothing or substitution with generated geometry.
The input hash must be matched to the generation receipt by the caller: a GLB
alone does not prove that its provider was Hunyuan.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
from pathlib import Path
import struct
import sys
import tempfile


def file_hash(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def glb_document(path: Path) -> dict:
    """Check the complete GLB container and read its first JSON chunk."""
    data = path.read_bytes()
    if len(data) < 20:
        raise ValueError("Input is not a complete GLB.")
    magic, version, length = struct.unpack_from("<4sII", data)
    if magic != b"glTF" or version != 2 or length != len(data):
        raise ValueError("Input must be a complete glTF 2 binary file.")
    offset, document = 12, None
    while offset < len(data):
        if offset + 8 > len(data):
            raise ValueError("Incomplete GLB chunk header.")
        size, kind = struct.unpack_from("<I4s", data, offset)
        offset += 8
        if size % 4 or offset + size > len(data):
            raise ValueError("Invalid GLB chunk size.")
        if document is None:
            if kind != b"JSON":
                raise ValueError("The first GLB chunk must contain JSON.")
            document = json.loads(data[offset:offset + size])
        offset += size
    if not isinstance(document, dict) or not document.get("meshes"):
        raise ValueError("GLB contains no mesh resources.")
    # Embedded browser assets must not depend on the local input directory.
    for resource in document.get("buffers", []) + document.get("images", []):
        uri = resource.get("uri", "")
        if uri and not uri.startswith("data:"):
            raise ValueError("GLB contains an external resource; embed it first.")
    return document


def export_statistics(document: dict) -> dict:
    accessors = document.get("accessors", [])
    triangles = 0
    primitives = 0
    for mesh in document.get("meshes", []):
        for primitive in mesh.get("primitives", []):
            primitives += 1
            if primitive.get("mode", 4) != 4:
                raise ValueError("The exported model must use triangle primitives.")
            accessor = primitive.get("indices", primitive.get("attributes", {}).get("POSITION"))
            if accessor is None:
                raise ValueError("Exported primitive has no position accessor.")
            triangles += accessors[accessor]["count"] // 3
    return {
        "meshResources": len(document.get("meshes", [])),
        "primitives": primitives,
        "triangles": triangles,
        "materials": len(document.get("materials", [])),
        "textures": len(document.get("textures", [])),
        "images": len(document.get("images", [])),
    }


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--height", required=True, type=float, help="Target vertical height in world metres.")
    parser.add_argument("--id", required=True, help="Asset identifier for the report and transform root.")
    parser.add_argument("--report", required=True, type=Path)
    parser.add_argument("--blend", type=Path, help="Optional private authoring file; usually under artifacts/.")
    if argv is None:
        argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    args = parser.parse_args(argv)
    if not math.isfinite(args.height) or args.height <= 0:
        parser.error("--height must be a positive finite number.")
    if args.input.resolve() == args.output.resolve():
        parser.error("Input and output must differ so the raw generation is preserved.")
    if args.output.suffix.lower() != ".glb":
        parser.error("--output must end in .glb.")
    targets = [args.output.resolve(), args.report.resolve()]
    if args.blend:
        targets.append(args.blend.resolve())
    if len(set(targets)) != len(targets) or args.input.resolve() in targets:
        parser.error("Input, output, report and authoring file must be distinct paths.")
    return args


def scene_bounds(meshes):
    from mathutils import Vector

    coordinates = [obj.matrix_world @ Vector(corner) for obj in meshes for corner in obj.bound_box]
    minimum = [min(point[axis] for point in coordinates) for axis in range(3)]
    maximum = [max(point[axis] for point in coordinates) for axis in range(3)]
    if not all(math.isfinite(value) for value in minimum + maximum):
        raise ValueError("Mesh bounds contain non-finite coordinates.")
    return {"min": minimum, "max": maximum, "size": [hi - lo for lo, hi in zip(minimum, maximum)]}


def main(argv=None):
    args = parse_args(argv)
    # Validate before touching the current Blender scene.
    glb_document(args.input)
    input_hash = file_hash(args.input)
    import bpy

    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    bpy.ops.import_scene.gltf(filepath=str(args.input.resolve()))
    meshes = [obj for obj in bpy.context.scene.objects if obj.type == "MESH" and len(obj.data.vertices)]
    if not meshes:
        raise ValueError("Imported GLB contains no nonempty mesh objects.")
    for obj in list(bpy.context.scene.objects):
        if obj.type in {"CAMERA", "LIGHT"}:
            bpy.data.objects.remove(obj, do_unlink=True)
    bpy.context.view_layer.update()
    before = scene_bounds(meshes)
    original_height = before["size"][2]
    if original_height < 1e-7:
        raise ValueError("The model has no usable vertical extent.")

    root = bpy.data.objects.new("Prepared_" + args.id, None)
    bpy.context.scene.collection.objects.link(root)
    original_roots = [obj for obj in bpy.context.scene.objects if obj != root and obj.parent is None]
    for obj in original_roots:
        # An identity parent preserves every existing local transform and all
        # relative positions, including imported hierarchy and armatures.
        obj.parent = root
    scale = args.height / original_height
    root.scale = (scale, scale, scale)
    root.location = (
        -(before["min"][0] + before["max"][0]) * .5 * scale,
        -(before["min"][1] + before["max"][1]) * .5 * scale,
        -before["min"][2] * scale,
    )
    bpy.context.view_layer.update()
    after = scene_bounds(meshes)

    materials = {slot.material for obj in meshes for slot in obj.material_slots if slot.material}
    images = {
        node.image
        for material in materials if material.use_nodes
        for node in material.node_tree.nodes
        if node.type == "TEX_IMAGE" and node.image is not None
    }
    image_changes = []
    warnings = []
    for image in sorted(images, key=lambda item: item.name):
        width, height = image.size[:]
        if width == 0 or height == 0:
            raise ValueError(f"Texture {image.name!r} has no pixel data.")
        original_size = [width, height]
        if max(width, height) > 2048:
            factor = 2048 / max(width, height)
            image.scale(max(1, round(width * factor)), max(1, round(height * factor)))
            # Re-encode the resized pixel buffer, not the old packed bytes.
            # save(), unlike save_render(), retains data-texture channel values
            # instead of applying the scene's display colour transform.
            with tempfile.TemporaryDirectory(prefix="mole-asset-texture-") as directory:
                original_path = image.filepath_raw
                image.file_format = "PNG"
                temporary_image = Path(directory) / "texture.png"
                image.save(filepath=str(temporary_image))
                data = temporary_image.read_bytes()
                image.pack(data=data, data_len=len(data))
                image.filepath_raw = original_path
        elif image.packed_file is None:
            image.pack()
        # Do not repack an unchanged embedded image: Blender 4.3 may clear its
        # existing packed_file on a redundant pack(), breaking ORM export.
        # Keeping its source bytes also avoids needless PBR texture re-encoding.
        image_changes.append({"name": image.name, "before": original_size, "after": list(image.size[:])})

    triangles = 0
    vertices = 0
    for obj in meshes:
        obj.data.calc_loop_triangles()
        triangles += len(obj.data.loop_triangles)
        vertices += len(obj.data.vertices)
    if triangles == 0:
        raise ValueError("Imported mesh objects contain no triangles.")
    if triangles > 150000:
        warnings.append("More than 150,000 triangles; review the browser budget. No automatic decimation was applied.")
    if triangles > 1500000:
        raise ValueError("Model exceeds 1,500,000 triangles; choose a smaller generation budget before browser export.")
    if len(materials) > 24:
        warnings.append("More than 24 materials; review draw-call cost.")
    if not images:
        warnings.append("No image textures found. Review the generated material quality before publishing.")
    if not materials:
        warnings.append("No material slots found. The model needs an art review before publishing.")

    for path in [args.output, args.report, args.blend]:
        if path:
            path.parent.mkdir(parents=True, exist_ok=True)
    temporary = args.output.with_name("." + args.output.stem + ".preparing.glb")
    try:
        bpy.ops.export_scene.gltf(
            filepath=str(temporary.resolve()), export_format="GLB",
            export_normals=True, export_texcoords=True, export_materials="EXPORT",
            export_cameras=False, export_lights=False, export_animations=True,
            export_yup=True, export_apply=False,
        )
        exported = glb_document(temporary)
        exported_stats = export_statistics(exported)
        if not exported_stats["triangles"]:
            raise ValueError("GLB export unexpectedly contains no triangles.")
        os.replace(temporary, args.output)
    finally:
        temporary.unlink(missing_ok=True)
    if args.blend:
        bpy.ops.wm.save_as_mainfile(filepath=str(args.blend.resolve()))

    report = {
        "schemaVersion": 1,
        "id": args.id,
        "provenance": {
            "pipeline": "Hunyuan → Blender",
            "providerVerifiedByThisScript": False,
            "note": "Match input.sha256 to the private Hunyuan job receipt; this tool cannot authenticate a model's provider.",
        },
        "blenderVersion": bpy.app.version_string,
        "input": {"path": str(args.input), "sha256": input_hash, "bytes": args.input.stat().st_size},
        "output": {"path": str(args.output), "sha256": file_hash(args.output), "bytes": args.output.stat().st_size},
        "coordinates": "Blender Z-up metres; exported glTF is Y-up metres",
        "normalization": {"uniformScale": scale, "targetHeight": args.height, "before": before, "after": after},
        "sceneStatistics": {"meshObjects": len(meshes), "vertices": vertices, "triangles": triangles, "materials": len(materials), "imageTextures": len(images)},
        "exportStatistics": exported_stats,
        "textures": image_changes,
        "changes": ["Uniform root scale", "Grounded vertical minimum and centred horizontal bounds", "Removed imported cameras/lights", "Packed referenced textures; maximum dimension 2048", "Retained mesh topology, materials, UVs, orientation and normals"],
        "warnings": warnings,
    }
    report_temporary = args.report.with_name("." + args.report.name + ".tmp")
    report_temporary.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(report_temporary, args.report)
    print(json.dumps({"id": args.id, "output": str(args.output), "triangles": exported_stats["triangles"], "report": str(args.report), "warnings": warnings}, ensure_ascii=False))


if __name__ == "__main__":
    main()
