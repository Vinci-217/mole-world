"""Convert the selected CC0 KayKit assets into self-contained GLB files.

blender --background --python scripts/prepare_kaykit.py -- /path/to/KayKit-checkout
The source checkout must be commit 84fa4e91af6a88989be7c99e0891cede11f2ca38.
"""
import bpy
import json
import pathlib
import shutil
import sys
from mathutils import Vector

root = pathlib.Path(__file__).resolve().parents[1]
source = pathlib.Path(sys.argv[sys.argv.index('--') + 1])
base = source / 'addons/kaykit_medieval_hexagon_pack/Assets/gltf/buildings/green'
out = root / 'public/assets/kaykit'
out.mkdir(parents=True, exist_ok=True)
models = [
    ('castle', 'watchtower', 7.6, [31, 0, -31], 0, None),
    ('barracks', 'tavern', 8.4, [18, 0, -3], -.18, 'tavern'),
    ('home_A', 'cottage', 7.8, [-18, 0, -5], .12, 'cottage'),
    ('church', 'chapel', 8, [-31, 0, -30], .22, None),
    ('blacksmith', 'blacksmith', 7, [31, 0, -14], -.4, None),
]
assets = []
for model, name, width, position, rotation, replace in models:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=str(base / f'building_{model}_green.gltf'))
    surface_materials = []
    for surface in ['stone', 'roof', 'wood', 'iron']:
        mat = bpy.data.materials.new('Eldermere ' + surface)
        mat.use_nodes = True
        nodes = mat.node_tree.nodes
        principled = next(n for n in nodes if n.type == 'BSDF_PRINCIPLED')
        principled.inputs['Roughness'].default_value = .92
        if surface == 'iron':
            principled.inputs['Base Color'].default_value = (.032, .042, .035, 1)
            principled.inputs['Metallic'].default_value = .5
        else:
            texture = nodes.new('ShaderNodeTexImage')
            texture.image = bpy.data.images.load(str(root / 'public/assets/textures' / (surface + '.png')))
            mat.node_tree.links.new(texture.outputs['Color'], principled.inputs['Base Color'])
            normal_tex = nodes.new('ShaderNodeTexImage')
            normal_tex.image = bpy.data.images.load(str(root / 'public/assets/textures' / (surface + '-normal.png')))
            normal_tex.image.colorspace_settings.name = 'Non-Color'
            normal = nodes.new('ShaderNodeNormalMap')
            normal.inputs['Strength'].default_value = .45
            mat.node_tree.links.new(normal_tex.outputs['Color'], normal.inputs['Color'])
            mat.node_tree.links.new(normal.outputs['Normal'], principled.inputs['Normal'])
        surface_materials.append(mat)
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH':
            original = obj.data.materials[0]
            atlas = next(n.image for n in original.node_tree.nodes if n.type == 'TEX_IMAGE')
            pixels = list(atlas.pixels)
            uv = obj.data.uv_layers.active.data
            assignments = []
            for polygon in obj.data.polygons:
                sample = uv[polygon.loop_indices[0]].uv
                xx = max(0, min(atlas.size[0] - 1, int(sample.x * atlas.size[0])))
                yy = max(0, min(atlas.size[1] - 1, int(sample.y * atlas.size[1])))
                offset = (yy * atlas.size[0] + xx) * 4
                r, g, b = pixels[offset:offset+3]
                if g > r * 1.15 and g > b * 1.15:
                    index = 1
                elif r > g * 1.12 and r > b * 1.25:
                    index = 2
                elif max(r, g, b) < .13:
                    index = 3
                else:
                    index = 0
                assignments.append(index)
            obj.data.materials.clear()
            for mat in surface_materials:
                obj.data.materials.append(mat)
            for polygon, index in zip(obj.data.polygons, assignments):
                polygon.material_index = index
                axis = max(range(3), key=lambda i: abs(polygon.normal[i]))
                for loop_index in polygon.loop_indices:
                    vertex_coord = obj.data.vertices[obj.data.loops[loop_index].vertex_index].co
                    a, b = ((vertex_coord.x, vertex_coord.y) if axis == 2 else (vertex_coord.x, vertex_coord.z) if axis == 1 else (vertex_coord.y, vertex_coord.z))
                    uv[loop_index].uv = (a * 2.5, b * 2.5)
    bpy.ops.export_scene.gltf(filepath=str(out / f'{name}.glb'), export_format='GLB', export_yup=True)
    points = [obj.matrix_world @ Vector(corner) for obj in bpy.context.scene.objects if obj.type == 'MESH' for corner in obj.bound_box]
    size = [max(p[i] for p in points) - min(p[i] for p in points) for i in range(3)]
    print('ASSET', name, 'original_dimensions', [round(v, 3) for v in size])
    assets.append(dict(id=name, path=f'/assets/kaykit/{name}.glb', width=width, position=position, rotation=rotation, replace=replace, source='KayKit Medieval Hexagon Pack 1.0, CC0'))
manifest = root / 'public/assets/manifest.json'
manifest.write_text(json.dumps({'assets': assets}, ensure_ascii=False, indent=2) + '\n')
shutil.copyfile(source / 'LICENSE.txt', out / 'LICENSE.txt')
(out / 'SOURCE.txt').write_text('KayKit Medieval Hexagon Pack 1.0 by Kay Lousberg\nhttps://github.com/KayKit-Game-Assets/KayKit-Medieval-Hexagon-Pack-1.0\nCommit: 84fa4e91af6a88989be7c99e0891cede11f2ca38\nLicense: CC0 1.0 Universal\nConverted to GLB using Blender 4.3.2. Original gradient atlas replaced by original tiling stone, slate and timber maps; planar UVs and roughness/normal mapping applied.\n')
print('Prepared', len(assets), 'CC0 assets.')
