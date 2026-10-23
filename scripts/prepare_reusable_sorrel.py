"""Adapt the CC0 Poly Haven sorrel supplied by Khronos, without authoring a new plant.

Download the pinned GlassVaseFlowers.glb into artifacts/reusable-assets/ first.
The source vase and comparison duplicate are removed; original plant textures
and mesh are preserved. Run with Blender --background --python-exit-code 1.
"""
from pathlib import Path
import hashlib
import json
import bpy
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'artifacts/reusable-assets/glass-vase-flowers.glb'
OUT = ROOT / 'public/assets/flower-garden/wild-sorrel.glb'
if hashlib.sha256(SOURCE.read_bytes()).hexdigest() != 'faa2e19329961652b585cc62132ef50b1d95dca8a6a2fd63409158e680563761':
    raise RuntimeError('Source is not the pinned CC0 model')
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=str(SOURCE))
plant = bpy.data.objects.get('Flowers1')
if plant is None or plant.type != 'MESH':
    raise RuntimeError('Pinned source plant is missing')
for obj in list(bpy.data.objects):
    if obj != plant:
        bpy.data.objects.remove(obj, do_unlink=True)
bpy.context.view_layer.objects.active = plant
plant.select_set(True)
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
points = [plant.matrix_world @ Vector(v) for v in plant.bound_box]
low = Vector([min(p[i] for p in points) for i in range(3)])
high = Vector([max(p[i] for p in points) for i in range(3)])
scale = .8 / (high.z - low.z)
plant.location -= Vector(((low.x+high.x)/2, (low.y+high.y)/2, low.z))
plant.location *= scale
plant.scale *= scale
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
plant.name = 'Licensed wild sorrel foliage'
for mat in plant.data.materials:
    mat.name = 'Sorrel Foliage - original CC0 painted leaf and petal textures'
    mat.use_backface_culling = False
for image in bpy.data.images:
    if image.packed_file is None:
        try:
            image.pack()
        except RuntimeError:
            pass
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'artifacts/reusable-assets/Wild-Sorrel.blend'))
bpy.ops.export_scene.gltf(filepath=str(OUT), export_format='GLB', use_selection=True,
                         export_animations=False, export_cameras=False, export_lights=False)
plant.data.calc_loop_triangles()
report = {'file': OUT.name, 'sha256': hashlib.sha256(OUT.read_bytes()).hexdigest(),
          'triangles': len(plant.data.loop_triangles), 'height': plant.dimensions.z,
          'sourceSha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
          'geometryPolicy': 'alpha-cutout-foliage', 'license': 'CC0-1.0',
          'author': 'Rico Cilliers (flowers), Eric Chadwick (source assembly)'}
(ROOT/'artifacts/reusable-assets/sorrel-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
