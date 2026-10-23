"""Blender-authored garden trees, cloud volume and articulated butterfly.

blender -b --python-exit-code 1 --python scripts/build_flower_atmosphere.py
These supporting assets are authored here, not claimed as Hunyuan results.
"""
import bpy
import bmesh
import hashlib
import json
import math
import random
from pathlib import Path
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/assets/flower-garden'
BLENDS = ROOT / 'artifacts/flower-atmosphere'
OUT.mkdir(parents=True, exist_ok=True)
BLENDS.mkdir(parents=True, exist_ok=True)
rng = random.Random(362)
records = []


def rgb(value):
    def linear(c): return c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4
    return tuple(linear(int(value[i:i+2], 16) / 255) for i in (1, 3, 5))


def mix(a, b, t): return tuple(x * (1-t) + y * t for x, y in zip(a, b))


def mat(name, color, vertex=False):
    m = bpy.data.materials.new(name); m.use_nodes = True
    m.use_backface_culling = True
    node = m.node_tree.nodes.get('Principled BSDF')
    node.inputs['Base Color'].default_value = (*rgb(color), 1)
    node.inputs['Roughness'].default_value = .88
    if vertex:
        v = m.node_tree.nodes.new('ShaderNodeVertexColor'); v.layer_name = 'Color'
        m.node_tree.links.new(v.outputs['Color'], node.inputs['Base Color'])
    return m


def paint(obj, fn):
    obj.data.update()
    color = obj.data.color_attributes.new(name='Color', type='FLOAT_COLOR', domain='POINT')
    for v, c in zip(obj.data.vertices, color.data): c.color = (*fn(v), 1)
    for p in obj.data.polygons: p.use_smooth = True


def curve(name, points, radius, material):
    c = bpy.data.curves.new(name, 'CURVE'); c.dimensions = '3D'
    c.bevel_depth = radius; c.bevel_resolution = 2; c.resolution_u = 10; c.use_fill_caps = True
    s = c.splines.new('BEZIER'); s.bezier_points.add(len(points)-1)
    for i, (p, co) in enumerate(zip(s.bezier_points, points)):
        p.co = co; p.handle_left_type = p.handle_right_type = 'AUTO'; p.radius = 1 - .65 * i / max(1, len(points)-1)
    o = bpy.data.objects.new(name, c); bpy.context.collection.objects.link(o); c.materials.append(material)
    return o


def blob(name, elements, material, resolution):
    data = bpy.data.metaballs.new(name); data.resolution = data.render_resolution = resolution; data.threshold = .65
    o = bpy.data.objects.new(name, data); bpy.context.collection.objects.link(o)
    for co, radius in elements:
        e = data.elements.new(); e.co = co; e.radius = radius; e.stiffness = 2
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
    bpy.ops.object.convert(target='MESH'); o = bpy.context.object
    o.data.materials.append(material)
    smooth = o.modifiers.new('Sculpted soft lobes', 'SMOOTH'); smooth.factor = .45; smooth.iterations = 3
    bpy.ops.object.modifier_apply(modifier=smooth.name)
    for p in o.data.polygons: p.use_smooth = True
    return o


def finish_curves():
    for o in list(bpy.context.scene.objects):
        if o.type == 'CURVE':
            bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
            bpy.ops.object.convert(target='MESH')


def export(asset_id):
    finish_curves()
    for o in bpy.context.scene.objects:
        if o.type != 'MESH': continue
        bpy.context.view_layer.objects.active = o
        bm = bmesh.new(); bm.from_mesh(o.data)
        bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=.000001)
        bm.to_mesh(o.data); bm.free()
        for modifier in list(o.modifiers): bpy.ops.object.modifier_apply(modifier=modifier.name)
        bm = bmesh.new(); bm.from_mesh(o.data); bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces)); bm.to_mesh(o.data); bm.free()
    destination = OUT / (asset_id + '.glb')
    bpy.ops.export_scene.gltf(filepath=str(destination), export_format='GLB', export_yup=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(BLENDS / (asset_id + '.blend')))
    triangles = 0
    for o in bpy.context.scene.objects:
        if o.type == 'MESH': o.data.calc_loop_triangles(); triangles += len(o.data.loop_triangles)
    records.append({'id': asset_id, 'state': 'ready', 'path': './assets/flower-garden/' + destination.name,
                    'sha256': hashlib.sha256(destination.read_bytes()).hexdigest(), 'triangles': triangles,
                    'source': 'Blender authored supporting garden asset', 'blenderVersion': bpy.app.version_string})


# A fused cloud volume with a broad base and distinct, rounded upper lobes.
bpy.ops.wm.read_factory_settings(use_empty=True)
cloud = blob('Cumulus cloud', [((-4,0,0),2.2),((-2.2,0,.7),2.1),((0,.2,1.8),2.7),((2.4,0,.6),2.2),
                             ((4.1,.2,0),1.8),((-.7,.4,.1),2.3)], mat('Soft ivory cloud','#fffceb',True), .23)
cloud.scale = (1.25, .9, 1.)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
paint(cloud,lambda v:mix(rgb('#d2ecee'),rgb('#fffefa'),max(0,min(1,.55+v.normal.z*.42))))
decimate = cloud.modifiers.new('Cloud silhouette budget','DECIMATE'); decimate.ratio = .5
export('cloud-formation')

# Rounded, painted tree masses fit the page game's foliage better than noisy leaf cards.
bpy.ops.wm.read_factory_settings(use_empty=True)
wood = mat('Warm painted bark','#805b49')
curve('Sculpted curved trunk',[(0,0,0),(.16,.02,1.8),(-.22,.10,3.6),(.22,0,5.5),(.05,.05,7.4)],.35,wood)
for i in range(5):
    a=i*math.tau/5
    curve('Grounded root',[(math.cos(a)*.9,math.sin(a)*.9,.04),(.15*math.cos(a),.15*math.sin(a),.28),(0,0,.7)],.12,wood)
centers=[(-1.65,.1,5.7),(1.4,.15,6.0),(.1,1.55,6.55),(-.35,-1.4,6.4),(1.35,-1.05,7.1),(-.95,.3,7.5),(0,0,6.8)]
for i,center in enumerate(centers[:-1]):
    curve('Tapered crown branch',[(.08,0,3.8+i*.13),tuple(Vector(center)*.65),center],.13,wood)
finish_curves()
bark=[o for o in bpy.context.scene.objects if o.type=='MESH']
bpy.ops.object.select_all(action='DESELECT')
for o in bark:o.select_set(True)
bpy.context.view_layer.objects.active=bark[0];bpy.ops.object.join();bark=bpy.context.object;bark.name='Painted trunk and roots'
paint(bark,lambda v:mix(rgb('#664b46'),rgb('#b98660'),max(0,min(1,.4+v.normal.x*.23+v.co.z*.035))))
bark.data.materials.clear();bark.data.materials.append(mat('Bark vertex paint','#805b49',True))
foliage = mat('Crown vertex paint','#3faa71',True)
crown=blob('Sculpted crown',[(p,2.65 if i<6 else 2.9) for i,p in enumerate(centers)],foliage,.16)
for v in crown.data.vertices:
    v.co+=v.normal*(.09*math.sin(v.co.x*5+v.co.y*3)*math.sin(v.co.z*7)+.035*math.sin(v.co.x*11-v.co.z*6))
crown.data.update()
paint(crown,lambda v:mix(rgb('#147563'),rgb('#83ca5b'),max(0,min(1,.36+v.normal.z*.25-v.normal.y*.12+.18*math.sin(v.co.x*6)*math.cos(v.co.y*5)*math.sin(v.co.z*5)))))
budget=crown.modifiers.new('Preserve broad crown lobes','DECIMATE');budget.ratio=.45
export('garden-tree-near')
budget=crown.modifiers.new('Distant crown silhouette','DECIMATE');budget.ratio=.3
budget=bark.modifiers.new('Distant branches','DECIMATE');budget.ratio=.35
export('garden-tree-far')

# Closed, curved wings with vertex-painted borders; each hinge stays a separate object.
bpy.ops.wm.read_factory_settings(use_empty=True)
wingmat=mat('Butterfly wing paint','#f5c36c',True)
outline=[(0,0),(-.04,.09),(-.10,.17),(-.18,.16),(-.20,.10),(-.17,.01),(-.12,-.025),(-.16,-.075),(-.14,-.13),(-.075,-.14),(-.025,-.075)]
def outline_point(t):
    i=int(t);f=t-i;n=len(outline);p=[Vector(outline[(i+j)%n]) for j in (-1,0,1,2)]
    return .5*((2*p[1])+(-p[0]+p[2])*f+(2*p[0]-5*p[1]+4*p[2]-p[3])*f*f+(-p[0]+3*p[1]-3*p[2]+p[3])*f*f*f)
for side in [-1,1]:
    vertices=[];faces=[];colors=[];count=44;center=Vector((-.075,0))
    for layer in [-1,1]:
        for ring,r in enumerate([.14,.55,.9,1.]):
            for i in range(count):
                p=center.lerp(outline_point(i*len(outline)/count),r)
                vertices.append((p.x*(-side),p.y,layer*.003+(1-r*r)*.016))
                c=rgb('#49645c') if r>.94 else mix(rgb('#efa45c'),rgb('#ffe4a0'),r)
                if ring==1 and i%11 in [1,2]:c=rgb('#fff2cc')
                colors.append((*c,1))
        for ring in range(3):
            for i in range(count):
                a=(0 if layer<0 else count*4)+ring*count+i;b=(0 if layer<0 else count*4)+ring*count+(i+1)%count
                faces.append((a,b,b+count,a+count))
    cap=len(vertices)
    vertices.extend([(center.x*(-side),center.y,.013),(center.x*(-side),center.y,.019)])
    colors.extend([(*rgb('#efb668'),1),(*rgb('#efb668'),1)])
    for i in range(count):
        j=(i+1)%count
        faces.append((cap,i,j));faces.append((cap+1,i+count*4,j+count*4))
        faces.append((count*3+i,count*3+j,count*7+j,count*7+i))
    mesh=bpy.data.meshes.new('Curved butterfly wing');mesh.from_pydata(vertices,[],faces);mesh.materials.append(wingmat);mesh.update()
    attr=mesh.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT')
    for c,value in zip(attr.data,colors):c.color=value
    o=bpy.data.objects.new('wing-left' if side<0 else 'wing-right',mesh);bpy.context.collection.objects.link(o)
    for p in mesh.polygons:p.use_smooth=True
bodymat=mat('Butterfly body','#4b5945')
bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=8,radius=.025)
body=bpy.context.object;body.name='Butterfly body';body.scale=(.5,3.6,.65);body.data.materials.append(bodymat)
for side in [-1,1]:curve('Curled antenna',[(side*.007,.07,0),(side*.025,.11,.015),(side*.035,.12,.025)],.002,bodymat)
export('garden-butterfly')

# The coral bell flowers in the original foreground give the garden a warmer accent.
bpy.ops.wm.read_factory_settings(use_empty=True)
stems=mat('Bellflower stems','#377f52');petals=mat('Bellflower petal paint','#ef8f86',True);pollen=mat('Bellflower pale stamens','#ffde8a')
for index,(x,y,height) in enumerate([(-.17,.02,.64),(.12,.09,.86),(.02,-.14,.53)]):
    tip=Vector((x+.09,y,height))
    curve('Drooping flower stem',[(0,0,0),(x*.5,y*.4,height*.45),(x-.015,y,height+.09),tip],.012,stems)
    vertices=[];faces=[];colors=[];around=32
    for row in range(8):
        u=row/7
        for j in range(around):
            a=j*math.tau/around;r=(.016+.14*math.sin(u*math.pi*.60))*(1+.14*math.cos(5*a)*u**3)
            vertices.append(tuple(tip+Vector((math.cos(a)*r,math.sin(a)*r,-.24*u+.035*math.cos(5*a)*u**4))))
            c=mix(rgb('#db6777'),rgb('#ffd5b4'),u*.68)
            if abs(math.sin(a*2.5))<.22:c=mix(c,rgb('#fff0c9'),.65*u)
            colors.append((*c,1))
        if row<7:
            for j in range(around):
                a=row*around+j;b=row*around+(j+1)%around;faces.append((a,b,b+around,a+around))
    mesh=bpy.data.meshes.new('Curved scalloped corolla');mesh.from_pydata(vertices,[],faces);mesh.materials.append(petals);mesh.update()
    color=mesh.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT')
    for c,value in zip(color.data,colors):c.color=value
    o=bpy.data.objects.new('Coral bell flower',mesh);bpy.context.collection.objects.link(o)
    for p in mesh.polygons:p.use_smooth=True
    solid=o.modifiers.new('Corolla rim thickness','SOLIDIFY');solid.thickness=.004;solid.offset=0
    for side in [-1,1]:
        curve('Pale stamen',[tip+Vector((side*.02,0,-.09)),tip+Vector((side*.025,0,-.25))],.006,pollen)
for row in range(6):
    side=-1 if row%2 else 1;z=.1+row*.065
    bpy.ops.mesh.primitive_uv_sphere_add(segments=8,ring_count=6,radius=1,location=(side*.08,0,z))
    leaf=bpy.context.object;leaf.name='Bellflower curled leaf';leaf.scale=(.12,.035,.015);leaf.rotation_euler.y=-side*.35;leaf.data.materials.append(stems)
    for p in leaf.data.polygons:p.use_smooth=True
finish_curves()
groups={}
for o in list(bpy.context.scene.objects):
    if o.type!='MESH':continue
    bpy.context.view_layer.objects.active=o
    for modifier in list(o.modifiers):bpy.ops.object.modifier_apply(modifier=modifier.name)
    groups.setdefault(o.data.materials[0],[]).append(o)
for material,objects in groups.items():
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join();objects[0].name=material.name
export('garden-bellflowers')

(OUT/'manifest.json').write_text(json.dumps({'version':1,'assets':records},indent=2)+'\n')
print('ATMOSPHERE_ASSETS',json.dumps(records))
