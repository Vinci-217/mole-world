"""Refine licensed broadleaf models for the Flower Sea forest in Blender.

Run after sculpt_flower_botanicals.py. Source attribution is retained in SOURCE.txt.
"""
import bpy
import bmesh
import hashlib
import json
from pathlib import Path
from mathutils import Matrix

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/assets/flower-garden'
SOURCE=ROOT/'artifacts/flower-botanical-sculpt'
records=[]
for lod,filename in [('near','oak-detailed.glb'),('far','oak.glb')]:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    original=ROOT/'public/assets/nature'/filename
    bpy.ops.import_scene.gltf(filepath=str(original))
    for o in list(bpy.context.scene.objects):
        if o.type!='MESH':continue
        world=o.matrix_world.copy();o.parent=None;o.data.transform(world);o.matrix_world=Matrix.Identity(4)
        # The leaves and branches deform together, retaining the authored boughs.
        for v in o.data.vertices:
            v.co.x*=1.10;v.co.y*=1.05
            if v.co.z>2:v.co.z=2+(v.co.z-2)*.82
        bpy.context.view_layer.objects.active=o
        bpy.ops.object.select_all(action='DESELECT');o.select_set(True)
        bpy.ops.mesh.separate(type='MATERIAL')
    for o in list(bpy.context.scene.objects):
        if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True);continue
        # Separate alpha-cutout leaf surfaces from the closed wooden structure.
        used=sorted({p.material_index for p in o.data.polygons})
        material=o.data.materials[used[0]]
        o.data.materials.clear();o.data.materials.append(material)
        for p in o.data.polygons:p.material_index=0
        foliage='Foliage' in material.name
        o.name='Broadleaf alpha foliage' if foliage else 'Refined broadleaf trunk'
        for p in o.data.polygons:p.use_smooth=True
        bsdf=material.node_tree.nodes.get('Principled BSDF')
        bsdf.inputs['Roughness'].default_value=.9
        for node in material.node_tree.nodes:
            if node.type=='NORMAL_MAP':node.inputs['Strength'].default_value=.32 if foliage else .5
        if not foliage:
            bm=bmesh.new();bm.from_mesh(o.data)
            bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
            bmesh.ops.holes_fill(bm,edges=[e for e in bm.edges if e.is_boundary],sides=0)
            bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(o.data);bm.free()
    asset_id='garden-tree-'+lod;path=OUT/(asset_id+'.glb')
    bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(SOURCE/(asset_id+'.blend')))
    bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True)
    triangles=0
    for o in bpy.context.scene.objects:
        if o.type=='MESH':o.data.calc_loop_triangles();triangles+=len(o.data.loop_triangles)
    records.append({'id':asset_id,'state':'ready','path':'./assets/flower-garden/'+path.name,
        'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'triangles':triangles,
        'source':'BabylonJS Assets broadleaf tree, CC BY 4.0; crown proportions and normals refined in Blender',
        'sourceSha256':hashlib.sha256(original.read_bytes()).hexdigest(),
        'geometryPolicy':'alpha-cutout-foliage','blenderVersion':bpy.app.version_string})
manifest=json.loads((OUT/'manifest.json').read_text());replaced={r['id'] for r in records}
manifest['assets']=[r for r in manifest['assets'] if r['id'] not in replaced]+records
(OUT/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('REFINED_FOREST',json.dumps(records))
