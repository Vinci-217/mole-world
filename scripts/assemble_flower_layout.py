"""Assemble the metre-scale scene and four cameras from the browser's own layout.

node scripts/export_flower_layout.mjs
blender -b --python-exit-code 1 --python scripts/assemble_flower_layout.py
"""
import bpy
import json
import math
from pathlib import Path
from mathutils import Vector, Matrix

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'artifacts/flower-layout'
source=json.loads((OUT/'layout.json').read_text())
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.scene.unit_settings.system='METRIC'
bpy.context.scene.unit_settings.scale_length=1

def mat(name,color):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
    bsdf=m.node_tree.nodes.get('Principled BSDF');bsdf.inputs['Base Color'].default_value=(*color,1);bsdf.inputs['Roughness'].default_value=.9
    return m

def mesh(name,data,material):
    m=bpy.data.meshes.new(name);m.from_pydata(data['vertices'],[],data['faces']);m.materials.append(material);m.update()
    o=bpy.data.objects.new(name,m);bpy.context.collection.objects.link(o)
    for p in m.polygons:p.use_smooth=True
    return o

ground=mesh('Continuous metre-scale garden terrain',source['terrain'],mat('Layout meadow',(.23,.48,.14)))
pathmat=mat('Warm stone path',(.48,.42,.29))
for i,path in enumerate(source['paths']):mesh('Connected garden route '+str(i),path,pathmat)

def ground_height(x,z):
    # Bilinear read from the terrain exported by the actual browser function.
    t=source['layout']['terrain'];nx=100;nz=120
    u=max(0,min(nx-.00001,(x/t['width']+.5)*nx));v=max(0,min(nz-.00001,((z-t['centerZ'])/t['depth']+.5)*nz))
    i=int(u);j=int(v);fu=u-i;fv=v-j;points=source['terrain']['vertices']
    at=lambda a,b:points[b*(nx+1)+a][2]
    return (at(i,j)*(1-fu)+at(i+1,j)*fu)*(1-fv)+(at(i,j+1)*(1-fu)+at(i+1,j+1)*fu)*fv

measurements=[]
for asset in source['manifest']['assets']:
    if asset['state']!='ready':continue
    old=set(bpy.context.scene.objects)
    bpy.ops.import_scene.gltf(filepath=str(ROOT/'public'/asset['path'].removeprefix('./')))
    imported=[o for o in bpy.context.scene.objects if o not in old]
    objects=[o for o in imported if o.type=='MESH']
    for o in objects:
        world=o.matrix_world.copy();o.parent=None;o.data.transform(world);o.matrix_world=Matrix.Identity(4);o.data.update()
    bpy.context.view_layer.update()
    points=[Vector(p) for o in objects for p in o.bound_box]
    lo=Vector([min(p[i] for p in points) for i in range(3)]);hi=Vector([max(p[i] for p in points) for i in range(3)])
    center=Vector(((lo.x+hi.x)/2,(lo.y+hi.y)/2,lo.z));scale=asset['height']/(hi.z-lo.z)
    for o in objects:
        o.data.transform(Matrix.Translation(-center));o.data.update()
    for o in imported:
        if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True)
    placements=[p for p in source['manifest']['placements'] if p['assetId']==asset['id']]
    for index,placement in enumerate(placements):
        group=bpy.data.objects.new(asset['id']+' metre-scale placement '+str(index),None);bpy.context.collection.objects.link(group)
        x,y,z=placement['position'];group.location=(x,-z,ground_height(x,z)+y)
        group.scale=(scale*placement.get('scale',1),)*3;group.rotation_euler.z=placement.get('rotation',0)
        for original in objects:
            if index==0:o=original
            else:o=original.copy();o.data=original.data;bpy.context.collection.objects.link(o)
            o.parent=group;o.matrix_parent_inverse=Matrix.Identity(4);o.matrix_basis=Matrix.Identity(4)
        bpy.context.view_layer.update()
        actual=[child.matrix_world@Vector(v) for child in group.children for v in child.bound_box]
        actual_height=max(v.z for v in actual)-min(v.z for v in actual)
        expected=asset['height']*placement.get('scale',1)
        if abs(actual_height-expected)>.001:raise RuntimeError('Actual Blender world height mismatch: '+asset['id'])
        measurements.append({'id':asset['id'],'position':placement['position'],'worldHeightMetres':actual_height,'sourceDimensionsMetres':list(hi-lo)})

for name,view in source['views'].items():
    data=bpy.data.cameras.new(name+' camera');o=bpy.data.objects.new(name+' camera',data);bpy.context.collection.objects.link(o)
    x,y,z=view['eye'];o.location=(x,-z,y);x,y,z=view['target'];direction=Vector((x,-z,y))-o.location
    o.rotation_euler=direction.to_track_quat('-Z','Y').to_euler();data.clip_end=600
    data.sensor_fit='VERTICAL';data.sensor_height=24;data.lens=24/(2*math.tan(math.radians(45)/2))
    if name=='top':data.type='ORTHO';data.ortho_scale=210
    if name=='front':bpy.context.scene.camera=o
sun_data=bpy.data.lights.new('Warm afternoon sun','SUN');sun_data.energy=2.4;sun_data.angle=.12
sun=bpy.data.objects.new('Warm afternoon sun',sun_data);bpy.context.collection.objects.link(sun);sun.rotation_euler=(.45,-.5,-.4)
world=bpy.data.worlds.new('Clear garden ambient');world.use_nodes=True;world.node_tree.nodes.get('Background').inputs[0].default_value=(.5,.72,.85,1);world.node_tree.nodes.get('Background').inputs[1].default_value=.6;bpy.context.scene.world=world
bpy.context.scene.render.resolution_x=1440;bpy.context.scene.render.resolution_y=900;bpy.context.scene.render.resolution_percentage=100
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'FlowerSea-SpatialLayout.blend'))
(OUT/'measurements.json').write_text(json.dumps(measurements,indent=2))
print('Saved metre-scale Blender layout and four named cameras.',json.dumps(measurements))
