"""Round-trip the published GLBs through Blender and check their real geometry.

blender -b --python-exit-code 1 --python scripts/audit_flower_models.py
This is an offline check; it never submits generation jobs.
"""
import hashlib
import json
from pathlib import Path

import bmesh
import bpy


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
manifest = json.loads((PUBLIC / 'assets/flower-sea/manifest.json').read_text())
support = json.loads((PUBLIC / 'assets/flower-garden/manifest.json').read_text())
woodland = json.loads((PUBLIC / 'assets/woodland/manifest.json').read_text())
report = []
failures = []
for asset in manifest['assets'] + support['assets'] + woodland['assets']:
    if asset['state'] != 'ready':
        continue
    path = (PUBLIC / asset['path'].removeprefix('./')).resolve()
    if not path.is_relative_to(PUBLIC.resolve()):
        raise RuntimeError('Model path leaves the public directory')
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    if digest != asset['sha256']:
        failures.append(asset['id'] + ': SHA256 mismatch')
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=str(path))
    objects = [o for o in bpy.context.scene.objects if o.type == 'MESH']
    triangles = 0
    meshes = []
    for obj in objects:
        obj.data.calc_loop_triangles()
        triangles += len(obj.data.loop_triangles)
        # The GLB format duplicates vertices at UV/normal seams. Audit their
        # positions after welding so ordinary texture seams are not false holes.
        bm = bmesh.new()
        bm.from_mesh(obj.data)
        bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=.000001)
        boundary = sum(edge.is_boundary for edge in bm.edges)
        nonmanifold = sum(not edge.is_manifold for edge in bm.edges)
        # Licensed foliage intentionally uses alpha-cutout leaf surfaces, a
        # standard game asset technique. Only this explicitly declared mesh
        # policy permits open leaf edges; wood and our solid petals stay closed.
        alpha_foliage=(asset.get('geometryPolicy')=='alpha-cutout-foliage'
                       and all('Foliage' in m.name for m in obj.data.materials))
        meshes.append({'name': obj.name, 'boundaryEdges': boundary,
                       'nonManifoldEdges': nonmanifold,'alphaCutoutSurface':alpha_foliage})
        bm.free()
        if (boundary or nonmanifold) and not alpha_foliage:
            failures.append(f"{asset['id']}/{obj.name}: open or nonmanifold geometry")
    if triangles != asset['triangles']:
        failures.append(asset['id'] + ': triangle count mismatch')
    entry = {'id': asset['id'], 'sha256': digest, 'triangles': triangles,
             'meshCount': len(objects), 'meshes': meshes}
    report.append(entry)
    print('MODEL_AUDIT', json.dumps(entry))
output = ROOT / 'artifacts/flower-model-audit.json'
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text(json.dumps({'assets': report, 'failures': failures}, indent=2))
if failures:
    raise RuntimeError('; '.join(failures))
print('All published flower landmark models passed the real GLB round-trip audit.')
