"""Reuse the existing flower meshes, with two cheaper Blender LODs for wide fields.

Placeholder materials retain names and UVs; the browser reuses the original
flower materials/textures, avoiding another copy of the large albedo atlas.
"""
from pathlib import Path
import hashlib,json
import bpy,bmesh

ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'public/assets/flower-garden/sculpted-flowers.glb'
OUT=ROOT/'public/assets/flower-garden/meadow-flower-lods.glb'
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=str(SOURCE))
names=['coral-cosmos','ivory-anemone','lilac-spires','meadow-cups']
sources={name:bpy.data.objects.get(name+'-far') for name in names}
if not all(sources.values()):raise RuntimeError('Original distance flowers missing')
copies=[]
for name,source in sources.items():
    for suffix,ratio in [('meadow',.30),('distant',.18)]:
        obj=source.copy();obj.data=source.data.copy();bpy.context.collection.objects.link(obj)
        obj.name=name+'-'+suffix;obj.data.name=obj.name
        bm=bmesh.new();bm.from_mesh(obj.data)
        bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
        bm.to_mesh(obj.data);bm.free();obj.data.update()
        modifier=obj.modifiers.new('Preserve the original flower silhouette','DECIMATE');modifier.ratio=ratio
        bpy.context.view_layer.objects.active=obj
        bpy.ops.object.modifier_apply(modifier=modifier.name)
        # A decimated tiny component can collapse to a doubled triangle. Remove
        # only such damaged islands; preserve closed petals, stems and leaves.
        bm=bmesh.new();bm.from_mesh(obj.data)
        seen=set();discard=[]
        for vertex in bm.verts:
            if vertex in seen:continue
            component=set([vertex]);stack=[vertex];seen.add(vertex)
            while stack:
                for edge in stack.pop().link_edges:
                    for other in edge.verts:
                        if other not in seen:seen.add(other);component.add(other);stack.append(other)
            if any(not e.is_manifold for v in component for e in v.link_edges):discard.extend(component)
        if discard:bmesh.ops.delete(bm,geom=discard,context='VERTS')
        bm.to_mesh(obj.data);bm.free();obj.data.update()
        copies.append(obj)
for obj in list(bpy.context.scene.objects):
    if obj not in copies:bpy.data.objects.remove(obj,do_unlink=True)
for obj in copies:obj.select_set(True)
folder=ROOT/'artifacts/flower-meadow';folder.mkdir(exist_ok=True,parents=True)
bpy.ops.wm.save_as_mainfile(filepath=str(folder/'Meadow-Flower-LODs.blend'))
for material in bpy.data.materials:
    material.use_nodes=False
bpy.ops.export_scene.gltf(filepath=str(OUT),export_format='GLB',use_selection=True,
    export_materials='EXPORT',export_texcoords=True,export_animations=False)
raw=OUT.read_bytes();import struct
length=struct.unpack_from('<I',raw,12)[0];doc=json.loads(raw[20:20+length]);rows=[]
for node in doc['nodes']:
    if 'mesh' not in node:continue
    primitives=doc['meshes'][node['mesh']]['primitives']
    rows.append({'name':node['name'],'triangles':sum(doc['accessors'][p['indices']]['count']//3 for p in primitives)})
if doc.get('images'):raise RuntimeError('Distance asset unexpectedly duplicates textures')
report={'path':'./assets/flower-garden/'+OUT.name,'sha256':hashlib.sha256(raw).hexdigest(),
    'sourceSha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(),'triangles':sum(r['triangles'] for r in rows),'nodes':rows,'bytes':len(raw)}
(folder/'lod-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
