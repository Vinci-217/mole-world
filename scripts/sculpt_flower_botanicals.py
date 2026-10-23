"""Author curved, UV-textured garden botanicals in Blender, with editable sources.

blender -b --python-exit-code 1 --python scripts/sculpt_flower_botanicals.py
The atlas is AI-painted; these meshes are Blender-authored, not Hunyuan outputs.
"""
import bpy
import bmesh
import hashlib
import json
import math
import random
from pathlib import Path
from mathutils import Vector, Matrix

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/assets/flower-garden'
SOURCE = ROOT / 'artifacts/flower-botanical-sculpt'
SOURCE.mkdir(parents=True, exist_ok=True)
rng = random.Random(36217)
records = []
LOW = False


def linear(c):
    return c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4


def rgb(value):
    return tuple(linear(int(value[i:i+2], 16) / 255) for i in (1, 3, 5))


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    m = bpy.data.materials.new('Painted petal silk and leaf veins')
    m.use_nodes = True
    bsdf = m.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Roughness'].default_value = .72
    tex = m.node_tree.nodes.new('ShaderNodeTexImage')
    tex.image = bpy.data.images.load(str(OUT / 'botanical-atlas.png'))
    m.node_tree.links.new(tex.outputs['Color'], bsdf.inputs['Base Color'])
    return m


def plain(name, color):
    m = bpy.data.materials.new(name); m.use_nodes = True
    bsdf = m.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*rgb(color), 1)
    bsdf.inputs['Roughness'].default_value = .84
    return m


def mesh(name, verts, faces, uv, material):
    data = bpy.data.meshes.new(name); data.from_pydata(verts, [], faces); data.update()
    if uv:
        # All parts must use the same UV layer name before joining with stems.
        layer = data.uv_layers.new(name='UVMap')
        for p in data.polygons:
            for loop in p.loop_indices: layer.data[loop].uv = uv[data.loops[loop].vertex_index]
    data.materials.append(material)
    for p in data.polygons: p.use_smooth = True
    o = bpy.data.objects.new(name, data); bpy.context.collection.objects.link(o)
    return o


def patch(name, length, width, curl, tile, material, rows=7, cols=4, leaf=False):
    """A cupped, tapered surface, with a central ridge and softly irregular edge."""
    if LOW:rows=min(rows,2);cols=min(cols,2)
    verts=[]; uv=[]; faces=[]
    ox, oy = [(0,.5),(.5,.5),(0,0),(.5,0)][tile]
    for i in range(rows+1):
        t=i/rows
        spread=width*(.008+math.sin(math.pi*t)**(.8 if leaf else .52))
        for j in range(cols+1):
            s=j/cols*2-1
            ruffle=.015*math.sin(t*math.pi*5+s*2)*abs(s)**3*length if not leaf else 0
            z=curl*length*t*t + (1-s*s)*math.sin(t*math.pi)*length*.09+ruffle
            verts.append((s*spread, t*length, z))
            uv.append((ox+.012+(s*.5+.5)*.476,oy+.012+t*.476))
            if i<rows and j<cols:
                a=i*(cols+1)+j;faces.append((a,a+1,a+cols+2,a+cols+1))
    o=mesh(name,verts,faces,uv,material)
    thick=o.modifiers.new('A thin rounded living rim', 'SOLIDIFY');thick.thickness=.0025 if leaf else .0018;thick.offset=0
    return o


def tube(name, points, radius, material):
    c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.bevel_depth=radius;c.bevel_resolution=0 if LOW else 1;c.resolution_u=3 if LOW else 6;c.use_fill_caps=True
    s=c.splines.new('BEZIER');s.bezier_points.add(len(points)-1)
    for i,(p,co) in enumerate(zip(s.bezier_points,points)):
        p.co=co;p.handle_left_type=p.handle_right_type='AUTO';p.radius=1-i/max(1,len(points)-1)*.6
    o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);c.materials.append(material)
    return o


def sphere(name, co, scale, material, segments=12, rings=6):
    if LOW:segments=min(segments,6);rings=min(rings,4)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,radius=1,location=co)
    o=bpy.context.object;o.name=name;o.scale=scale;o.data.materials.append(material)
    for p in o.data.polygons:p.use_smooth=True
    return o


def leaves(material, height, bend=0):
    for i in range(2 if LOW else 4):
        a=i*2.4
        leaf=patch('Veined curved leaf',.20+i*.022,.048,.30,3,material,5,2,True)
        leaf.rotation_euler=(math.radians(28+i*5),0,a)
        leaf.location=(bend*(i*.17)**2,0,.1+i*height*.17)


def petal(o, tip, a, tilt):
    # Local +Y runs from the flower throat to its petal tip.
    o.matrix_world=Matrix.Translation(tip) @ Matrix.Rotation(a,4,'Z') @ Matrix.Rotation(tilt,4,'X')


def join_all(name, objects=None):
    objects=objects or list(bpy.context.scene.objects)
    converted=[]
    for o in objects:
        bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
        if o.type=='CURVE':bpy.ops.object.convert(target='MESH');o=bpy.context.object
        for modifier in list(o.modifiers):bpy.ops.object.modifier_apply(modifier=modifier.name)
        converted.append(o)
    bpy.ops.object.select_all(action='DESELECT')
    for o in converted:o.select_set(True)
    bpy.context.view_layer.objects.active=converted[0];bpy.ops.object.join()
    result=bpy.context.object;result.name=name
    # Keep the source's individual petal names in custom data for inspection.
    result['construction']='Curved petal grids, sealed thin rims, UV mapped painted veins, bent stems and stamens'
    return result


def export(asset_id):
    for o in list(bpy.context.scene.objects):
        if o.type!='MESH':continue
        bm=bmesh.new();bm.from_mesh(o.data)
        bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(o.data);bm.free()
    path=OUT/(asset_id+'.glb')
    bpy.ops.file.pack_all()
    bpy.ops.wm.save_as_mainfile(filepath=str(SOURCE/(asset_id+'.blend')))
    bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True)
    triangles=0
    for o in bpy.context.scene.objects:
        if o.type=='MESH':o.data.calc_loop_triangles();triangles+=len(o.data.loop_triangles)
    records.append({'id':asset_id,'state':'ready','path':'./assets/flower-garden/'+path.name,
        'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'triangles':triangles,
        'source':'Blender authored curved botanical meshes; AI-painted albedo atlas','blenderVersion':bpy.app.version_string})


atlas=reset();stem=plain('Warm green flower stems','#48744b');gold=plain('Saffron pollen','#d5a244')
for number,species in enumerate(['coral-cosmos','ivory-anemone','lilac-spires','meadow-cups']*2):
    LOW=number>=4
    before=set(bpy.context.scene.objects)
    height={'coral-cosmos':.88,'ivory-anemone':.54,'lilac-spires':1.12,'meadow-cups':.30}[species]
    bend=.09 if species!='lilac-spires' else -.05
    tip=Vector((bend,0,height))
    tube('Arched living stem',[(0,0,0),(-.025,.02,height*.45),tip],.012 if height>.6 else .008,stem)
    leaves(atlas,height,bend)
    if species=='lilac-spires':
        for k in range(7):
            a=k*2.4;t=Vector((bend+math.cos(a)*.055,math.sin(a)*.055,height-.38+k*.052))
            for j in range(5):
                o=patch('Lilac curled corolla',.10,.043,.7,2,atlas,5,2)
                petal(o,t,j*math.tau/5+a,.4)
            sphere('Lavender throat',t,(.035,.035,.028),gold,8,4)
    else:
        count={'coral-cosmos':8,'ivory-anemone':9,'meadow-cups':5}[species]
        length={'coral-cosmos':.24,'ivory-anemone':.16,'meadow-cups':.13}[species]
        tile=0 if species=='coral-cosmos' else 1
        for layer in range(2 if species=='coral-cosmos' and not LOW else 1):
            for j in range(count):
                a=j*math.tau/count+layer*.35
                o=patch('Ruffled silk petal',length*(1-layer*.25),length*.46,.18+layer*.38,tile,atlas,7,4)
                petal(o,tip,a,.13+layer*.18+.08*math.sin(j*2.1))
        sphere('Raised pollen cushion',tip+Vector((0,0,.025)),(.055,.055,.04),gold)
        for j in range(0 if LOW else 12 if species=='coral-cosmos' else 7):
            a=j*2.4;r=.015+.025*(j%3)/2
            sphere('Pollen anther',tip+Vector((math.cos(a)*r,math.sin(a)*r,.065+.008*math.sin(j))),(.008,.008,.011),gold,6,4)
    join_all(species+('-far' if LOW else ''),[o for o in bpy.context.scene.objects if o not in before])
export('sculpted-flowers')
LOW=False

# Broader, overlapping leaves replace the spiky clumps next to the walking path.
atlas=reset();stem=plain('Rosette stalk','#4f7951')
for i in range(9):
    o=patch('Groundcover leaf',.34+rng.random()*.19,.095,.56,3,atlas,6,3,True)
    o.rotation_euler=(.12+rng.random()*.36,0,i*2.4);o.location=(0,0,.015)
join_all('groundcover-rosette');export('groundcover-rosette')

# Forest assets are refined from licensed models by refine_flower_forest.py.
manifest=json.loads((OUT/'manifest.json').read_text())
replaced={r['id'] for r in records}
manifest['assets']=[r for r in manifest['assets'] if r['id'] not in replaced]+records
manifest['version']=2
(OUT/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('BOTANICAL_SCULPT',json.dumps(records))
