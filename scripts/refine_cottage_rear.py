"""Blender rear-wall refinement prompted by the new back-view reference.

Keep the previous reviewed GLB as immutable input; do not accumulate details on reruns.
"""
import bpy
import bmesh
import hashlib
import json
import math
import shutil
import struct
from pathlib import Path
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree

ROOT=Path(__file__).resolve().parents[1]
PUBLIC=ROOT/'public/assets/flower-sea'
OUT=ROOT/'artifacts/flower-layout'
OUT.mkdir(parents=True,exist_ok=True)
base=OUT/'cottage-before-rear-detail.glb'
if not base.exists():
    # A fresh clone already contains the refined public result. Do not treat
    # that result as a new base and attach a second set of windows to it.
    raw=(PUBLIC/'cottage.glb').read_bytes();length=struct.unpack_from('<I',raw,12)[0]
    document=json.loads(raw[20:20+length])
    if any(m.get('name')=='Rear window warm painted timber' for m in document.get('materials',[])):
        print('Published cottage already has rear windows; left unchanged.')
        raise SystemExit(0)
    shutil.copy2(PUBLIC/'cottage.glb',base)
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=str(base))
objects=[o for o in bpy.context.scene.objects if o.type=='MESH']
for o in objects:
    world=o.matrix_world.copy();o.parent=None;o.data.transform(world);o.matrix_world=Matrix.Identity(4);o.data.update()
for o in list(bpy.context.scene.objects):
    if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True)
bpy.context.view_layer.update()
body=max(objects,key=lambda o:len(o.data.polygons))
bvh=BVHTree.FromObject(body,bpy.context.evaluated_depsgraph_get())

def material(name,color,roughness=.8):
    m=bpy.data.materials.new(name);m.use_nodes=True
    bsdf=m.node_tree.nodes.get('Principled BSDF');bsdf.inputs['Base Color'].default_value=(*color,1);bsdf.inputs['Roughness'].default_value=roughness
    return m
wood=material('Rear window warm painted timber',(.34,.19,.08))
glass=material('Rear window blue green glass',(.025,.085,.09),.48)
stone=material('Rear window pale stone sill',(.58,.51,.35))
bsdf=glass.node_tree.nodes.get('Principled BSDF');bsdf.inputs['Emission Color'].default_value=(.14,.07,.015,1);bsdf.inputs['Emission Strength'].default_value=.07
new_objects=[];windows=[]

def curve(name,points,radius,material,closed=False):
    data=bpy.data.curves.new(name,'CURVE');data.dimensions='3D';data.bevel_depth=radius;data.bevel_resolution=2;data.use_fill_caps=True
    s=data.splines.new('POLY');s.points.add(len(points)-1)
    for p,co in zip(s.points,points):p.co=(*co,1)
    s.use_cyclic_u=closed;o=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(o);data.materials.append(material);new_objects.append(o)

for x in [-2.,0.,2.]:
    for bottom in [.5,1.8]:
        hit,normal,_,_=bvh.ray_cast(Vector((x,10,bottom+.43)),Vector((0,-1,0)))
        if hit is None or normal.y<.75 or abs(normal.z)>.35:continue
        u=normal.cross(Vector((0,0,1))).normalized();v=u.cross(normal).normalized()
        origin=hit-v*.43;w=.58;height=.86;radius=w/2;shoulder=height-radius
        outline=[(-radius,0),(-radius,shoulder)]+[(math.cos(a)*radius,shoulder+math.sin(a)*radius) for a in [math.pi-i*math.pi/12 for i in range(13)]]+[(radius,0)]
        # Remove the duplicate start of the arch so both panel caps stay manifold.
        outline=[p for i,p in enumerate(outline) if i==0 or (Vector(p)-Vector(outline[i-1])).length>1e-6]
        n=len(outline);verts=[tuple(origin+u*px+v*pz+normal*depth) for depth in [.018,.046] for px,pz in outline]
        faces=[tuple(reversed(range(n))),tuple(range(n,n*2))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
        mesh=bpy.data.meshes.new('Closed arched window panel');mesh.from_pydata(verts,[],faces);mesh.materials.append(glass);mesh.update()
        o=bpy.data.objects.new('Rear arched window glass',mesh);bpy.context.collection.objects.link(o);new_objects.append(o)
        curve('Rounded timber arch frame',[origin+u*px+v*pz+normal*.055 for px,pz in outline],.026,wood,True)
        curve('Vertical window mullion',[origin+v*.05+normal*.075,origin+v*(height-.06)+normal*.075],.012,wood)
        curve('Horizontal window mullion',[origin-u*(radius-.04)+v*.42+normal*.075,origin+u*(radius-.04)+v*.42+normal*.075],.012,wood)
        bpy.ops.mesh.primitive_cube_add(size=1,location=origin-v*.045+normal*.065)
        sill=bpy.context.object;sill.name='Beveled rear window sill';sill.dimensions=(w+.17,.20,.085);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);sill.data.materials.append(stone)
        bevel=sill.modifiers.new('Soft stone corners','BEVEL');bevel.width=.015;bevel.segments=2;new_objects.append(sill)
        windows.append({'x':x,'bottom':bottom,'surfacePoint':list(hit)})
if len(windows)<3:raise RuntimeError('Could not anchor enough windows to actual rear wall surfaces')

groups={}
for o in list(new_objects):
    bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
    if o.type=='CURVE':bpy.ops.object.convert(target='MESH');o=bpy.context.object
    for mod in list(o.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
    bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(o.data);bm.free()
    for p in o.data.polygons:p.use_smooth=True
    groups.setdefault(o.data.materials[0],[]).append(o)
for mat,items in groups.items():
    bpy.ops.object.select_all(action='DESELECT')
    for o in items:o.select_set(True)
    bpy.context.view_layer.objects.active=items[0];bpy.ops.object.join();items[0].name=mat.name
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Cottage-RearWindows.blend'))
path=PUBLIC/'cottage.glb';bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True)
triangles=0
for o in bpy.context.scene.objects:
    if o.type=='MESH':o.data.calc_loop_triangles();triangles+=len(o.data.loop_triangles)
manifest=json.loads((PUBLIC/'manifest.json').read_text())
for a in manifest['assets']:
    if a['id']=='cottage':
        a['sha256']=hashlib.sha256(path.read_bytes()).hexdigest();a['triangles']=triangles;a['meshes']=len([o for o in bpy.context.scene.objects if o.type=='MESH']);a['materials']=len({m for o in bpy.context.scene.objects if o.type=='MESH' for m in o.data.materials})
        a['artPass']='Original facade and ivy retained; Blender raycast rear arched windows, rounded timber frames and beveled stone sills'
(PUBLIC/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
report={'inputSha256':hashlib.sha256(base.read_bytes()).hexdigest(),'windows':windows,'triangles':triangles,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()}
(OUT/'cottage-rear-report.json').write_text(json.dumps(report,indent=2))
print('REAR_WINDOW_REFINEMENT',json.dumps(report))
