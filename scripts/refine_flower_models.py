"""Blender art pass on downloaded Hunyuan meshes, plus authored canopy dressing.

blender -b --python-exit-code 1 --python scripts/refine_flower_models.py
Raw generated GLBs and the first normalization export remain untouched.
"""
import bpy
import bmesh
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree
from pathlib import Path
import math, random, json, hashlib, array, struct

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public/assets/flower-sea'
REPORTS = ROOT / 'artifacts/flower-art-pass'
REPORTS.mkdir(parents=True, exist_ok=True)
rng = random.Random(362)


def digest(p): return hashlib.sha256(p.read_bytes()).hexdigest()


def material(name, color, rough=.78, vertex=False):
    m = bpy.data.materials.new(name); m.use_nodes = True
    bsdf = m.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = rough
    if vertex:
        node = m.node_tree.nodes.new('ShaderNodeVertexColor'); node.layer_name = 'Color'
        m.node_tree.links.new(node.outputs['Color'], bsdf.inputs['Base Color'])
    return m


class Leaves:
    def __init__(self): self.vertices=[]; self.faces=[]; self.colors=[]
    def add(self, point, normal, length, tint=None):
        n = Vector(normal).normalized()
        tangent = n.cross(Vector((0,0,1)))
        if tangent.length < .1: tangent = Vector((1,0,0))
        tangent.normalize(); tangent.rotate(__import__('mathutils').Quaternion(n, rng.uniform(-math.pi, math.pi)))
        side = n.cross(tangent).normalized(); p = Vector(point)
        # A curved blade with a raised midrib, rather than a flat circular card.
        shape = [(0,0,0),(.30,-.23,.03),(.68,-.19,.08),(1,0,.15),(.68,.19,.08),(.30,.23,.03),(.45,0,.12)]
        start=len(self.vertices)
        self.vertices.extend([tuple(p + tangent*x*length + side*y*length + n*z*length) for x,y,z in shape])
        self.faces.extend([tuple(start+i for i in face) for face in [(0,1,6),(1,2,6),(2,3,6),(3,4,6),(4,5,6),(5,0,6)]])
        tint = tint or (rng.uniform(.14,.26),rng.uniform(.30,.48),rng.uniform(.09,.20),1)
        self.colors.extend([tint]*7)
    def finish(self, name, thickness=.006):
        mesh=bpy.data.meshes.new(name); mesh.from_pydata(self.vertices,[],self.faces); mesh.update()
        obj=bpy.data.objects.new(name,mesh); bpy.context.collection.objects.link(obj)
        attr=mesh.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT')
        for item,color in zip(attr.data,self.colors): item.color=color
        mesh.materials.append(material(name+' foliage',(.25,.42,.14),vertex=True))
        for face in mesh.polygons: face.use_smooth=True
        smooth=obj.modifiers.new('Rounded leaf silhouette','SUBSURF'); smooth.levels=1
        solid=obj.modifiers.new('Physical leaf thickness','SOLIDIFY'); solid.thickness=thickness; solid.offset=0
        solid.use_quality_normals=True
        return obj


def curve(name, points, radius, mat):
    data=bpy.data.curves.new(name,'CURVE'); data.dimensions='3D'; data.bevel_depth=radius; data.bevel_resolution=2; data.use_fill_caps=True
    spline=data.splines.new('BEZIER'); spline.bezier_points.add(len(points)-1)
    for p,co in zip(spline.bezier_points,points): p.co=co; p.handle_left_type=p.handle_right_type='AUTO'
    obj=bpy.data.objects.new(name,data); bpy.context.collection.objects.link(obj); data.materials.append(mat)
    return obj


def load_base(asset_id):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    source=ROOT/f'artifacts/flower-sea/{asset_id}/prepared.glb'
    if not source.exists(): raise RuntimeError('Keep the first Blender normalization export before refining: '+asset_id)
    bpy.ops.import_scene.gltf(filepath=str(source))
    meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
    for obj in meshes:
        world=obj.matrix_world.copy(); obj.parent=None; obj.data.transform(world); obj.matrix_world=Matrix.Identity(4)
        # GLB vertices split at UV seams. Weld positions before subdivision or
        # canopy deformation, while retaining each face corner's UV coordinates.
        # Otherwise smoothing shrinks each side of a seam into a visible crack.
        bm=bmesh.new();bm.from_mesh(obj.data)
        bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
        bm.to_mesh(obj.data);bm.free();obj.data.update()
    for obj in list(bpy.context.scene.objects):
        if obj.type!='MESH': bpy.data.objects.remove(obj,do_unlink=True)
    return source,meshes


def tune_materials(meshes):
    for mat in {m for o in meshes for m in o.data.materials if m}:
        if not mat.use_nodes: continue
        tree=mat.node_tree; bsdf=next((n for n in tree.nodes if n.type=='BSDF_PRINCIPLED'),None)
        if not bsdf: continue
        for link in list(bsdf.inputs['Metallic'].links): tree.links.remove(link)
        bsdf.inputs['Metallic'].default_value=0
        rough=bsdf.inputs['Roughness']
        if rough.is_linked:
            source=rough.links[0].from_socket
            remap=tree.nodes.new('ShaderNodeMapRange'); remap.inputs['To Min'].default_value=.53; remap.inputs['To Max'].default_value=.94
            tree.links.new(source,remap.inputs['Value']); tree.links.new(remap.outputs['Result'],rough)
        else: rough.default_value=.77
        for node in tree.nodes:
            if node.type=='NORMAL_MAP': node.inputs['Strength'].default_value=.72


def export(asset_id, source, changes, portal=None):
    bpy.ops.object.select_all(action='DESELECT')
    for o in list(bpy.context.scene.objects):
        if o.type=='CURVE':
            bpy.context.view_layer.objects.active=o; o.select_set(True); bpy.ops.object.convert(target='MESH'); o.select_set(False)
    # Bake the authored thickness into real mesh data before exporting. Exporting
    # the modifier stack without applying it previously left the bell petals open.
    for o in list(bpy.context.scene.objects):
        if o.type!='MESH': continue
        bpy.context.view_layer.objects.active=o
        for modifier in list(o.modifiers): bpy.ops.object.modifier_apply(modifier=modifier.name)
    groups={}
    for o in bpy.context.scene.objects:
        if o.type=='MESH' and len(o.data.materials)==1:
            groups.setdefault(o.data.materials[0],[]).append(o)
    for mat,objects in groups.items():
        if len(objects)<2:continue
        bpy.ops.object.select_all(action='DESELECT')
        for o in objects:o.select_set(True)
        bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join()
        objects[0].name='detail-'+mat.name.replace(' ','-')
    bpy.ops.object.select_all(action='DESELECT')
    destination=PUBLIC/(asset_id+'.glb')
    bpy.ops.export_scene.gltf(filepath=str(destination),export_format='GLB',export_normals=True,export_texcoords=True,export_materials='EXPORT',export_yup=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(REPORTS/(asset_id+'.blend')))
    triangles=0
    for obj in bpy.context.scene.objects:
        if obj.type=='MESH': obj.data.calc_loop_triangles(); triangles+=len(obj.data.loop_triangles)
    raw=destination.read_bytes(); json_length=struct.unpack_from('<I',raw,12)[0]
    exported=json.loads(raw[20:20+json_length])
    report={'id':asset_id,'inputSha256':digest(source) if source else None,'outputSha256':digest(destination),'triangles':triangles,'materials':len(exported.get('materials',[])),'meshes':len(exported.get('meshes',[])),'changes':changes+['Applied authored modifiers, capped curves and merged geometry sharing one material before GLB export'],'portalHeight':portal,'blender':bpy.app.version_string}
    (REPORTS/(asset_id+'.json')).write_text(json.dumps(report,indent=2))
    return report


reports={}
for asset_id in ['pink-portal','vine-arch','cottage','ancient-tree']:
    source,meshes=load_base(asset_id); tune_materials(meshes)
    changes=['Welded coincident geometry before deformation while preserving per-corner UV seams',
             'Clamped organic material roughness; removed metallic response; retained base/normal/ORM textures and UVs']
    if asset_id in ['pink-portal','vine-arch']:
        for obj in meshes:
            bpy.context.view_layer.objects.active=obj
            smooth=obj.modifiers.new('Gentle surface relaxation','SMOOTH'); smooth.factor=.14; smooth.iterations=2
            bpy.ops.object.modifier_apply(modifier=smooth.name)
            subdiv=obj.modifiers.new('Petal and vine silhouette refinement','SUBSURF'); subdiv.levels=1
            bpy.ops.object.modifier_apply(modifier=subdiv.name)
            for face in obj.data.polygons: face.use_smooth=True
        changes.append('Applied gentle mesh relaxation and one subdivision level to round faceted organic silhouettes')
    portal_height=None
    obj=meshes[0]
    bvh=BVHTree.FromObject(obj,bpy.context.evaluated_depsgraph_get())
    if asset_id=='pink-portal':
        hit,normal,_,_=bvh.ray_cast(Vector((0,0,8)),Vector((0,0,-1)))
        if hit:
            portal_height=hit.z+.12
            pollen=material('Golden flower heart',(.84,.57,.08),.65)
            for i in range(19):
                a=i*math.tau/19; r=.18+.35*(i%3)/2
                base=hit+Vector((math.cos(a)*r,math.sin(a)*r,.01)); tip=base+Vector((math.cos(a)*.05,math.sin(a)*.05,.15+.11*(i%4)/3))
                curve('Stamen', [base, (base+tip)*.5, tip], .018,pollen)
                bpy.ops.mesh.primitive_uv_sphere_add(segments=8,ring_count=4,radius=.065,location=tip)
                bpy.context.object.scale=(1,1,.68); bpy.context.object.data.materials.append(pollen)
            changes.append('Added modeled golden stamens at the measured flower-cup surface')
    if asset_id=='ancient-tree':
        leaf=Leaves(); obj.data.calc_loop_triangles()
        candidates=[t for t in obj.data.loop_triangles if sum(obj.data.vertices[i].co.z for i in t.vertices)/3>9 and t.normal.z>.25]
        # Give the generated broad canopy plates a shallow volume before adding edge leaves.
        selected=set()
        for t in candidates:
            selected.update(t.vertices)
        adjacency={i:set() for i in selected}
        for edge in obj.data.edges:
            a,b=edge.vertices
            if a in selected and b in selected:adjacency[a].add(b);adjacency[b].add(a)
        seen=set()
        for start in selected:
            if start in seen:continue
            todo=[start];component=[];seen.add(start)
            while todo:
                current=todo.pop();component.append(current)
                for neighbor in adjacency[current]-seen:seen.add(neighbor);todo.append(neighbor)
            if len(component)<35:continue
            coords=[obj.data.vertices[i].co.copy() for i in component]
            lo=Vector([min(p[j] for p in coords) for j in range(3)]);hi=Vector([max(p[j] for p in coords) for j in range(3)])
            center=(lo+hi)*.5;rx=max(.2,(hi.x-lo.x)*.5);ry=max(.2,(hi.y-lo.y)*.5)
            if rx<.5 or ry<.4:continue
            lift=min(1.1,max(.45,min(rx,ry)*.35))
            for i in component:
                v=obj.data.vertices[i].co;r=((v.x-center.x)/rx)**2+((v.y-center.y)/ry)**2
                v.z+=max(0,1-r)*lift
        obj.data.update();obj.data.calc_loop_triangles()
        candidates=[t for t in obj.data.loop_triangles if sum(obj.data.vertices[i].co.z for i in t.vertices)/3>9 and t.normal.z>.25]
        for i in range(700):
            t=rng.choice(candidates); a,b,c=[obj.data.vertices[j].co for j in t.vertices]
            u,v=rng.random(),rng.random()
            if u+v>1:u,v=1-u,1-v
            point=a+(b-a)*u+(c-a)*v
            leaf.add(point+t.normal*.025,t.normal,rng.uniform(.17,.33))
        leaf.finish('Layered canopy leaves')
        changes.append('Rounded canopy surface volumes and added 700 small curved leaf blades')
    if asset_id=='cottage':
        leaf=Leaves(); ivy=material('Ivy stems',(.09,.23,.07))
        for column in [-3.0,2.9]:
            points=[]
            for i in range(29):
                z=.28+i*.075; x=column+.15*math.sin(i*.43)
                hit,normal,_,_=bvh.ray_cast(Vector((x,-5,z)),Vector((0,1,0)))
                if hit and normal.y<-.12:
                    p=hit+normal*.045; points.append(p)
                    for side in [-1,1]: leaf.add(p+Vector((side*.06,0,0)),normal+Vector((side*.5,0,.35)),rng.uniform(.13,.23))
            if len(points)>2:curve('Facade climbing ivy',points,.018,ivy)
        leaf.finish('Facade ivy leaves')
        changes.append('Raycast climbing ivy onto actual facade surfaces, keeping the doorway open')
    reports[asset_id]=export(asset_id,source,changes,portal_height)

# A new authored canopy, rather than retrying uncertain paid submissions.
bpy.ops.wm.read_factory_settings(use_empty=True)
stem=material('Canopy jade vine',(.045,.22,.085)); gold=material('Canopy golden petals',(.95,.57,.045)); leaf=Leaves()
for strand in range(3):
    points=[]
    for i in range(13):
        x=-18+i*3; z=.9+(abs(x)/18)**1.5*4.1+.25*math.sin(i+strand)
        y=math.sin(i*.65+strand)*.7+strand*.25
        points.append((x,y,z))
    curve('Suspended flowering vine',points,.10 if strand==0 else .055,stem)
    for i in range(62):
        t=i/61; x=-18+t*36; z=.9+(abs(x)/18)**1.5*4.1+.25*math.sin(t*12+strand)
        y=math.sin(t*12*.65+strand)*.7+strand*.25
        leaf.add((x,y,z), (0,-.4,1),rng.uniform(.45,.85))
for x in [-11,-3,6,13]:
    z=.9+(abs(x)/18)**1.5*4.1; y=-.35
    curve('Pendant flower stem',[(x,0,z+.3),(x,y,z),(x,y-.25,z-.42)],.035,stem)
    verts=[];faces=[]
    for p in range(5):
        a=p*math.tau/5
        start=len(verts)
        for j in range(5):
            t=j/4; r=.12+.66*math.sin(t*math.pi*.68); zz=z-.38-t*.55
            for side in [-1,0,1]:
                ang=a+side*.47*math.sin(t*math.pi*.7)
                verts.append((x+math.cos(ang)*r,y-.25+math.sin(ang)*r,zz+(.09 if side==0 else 0)))
        for j in range(4):
            for k in range(2):
                q=start+j*3+k;faces.append((q,q+1,q+4,q+3))
    mesh=bpy.data.meshes.new('Golden bell petals');mesh.from_pydata(verts,[],faces);mesh.materials.append(gold)
    obj=bpy.data.objects.new('Golden bell flower',mesh);bpy.context.collection.objects.link(obj)
    smooth=obj.modifiers.new('Rounded bell petals','SUBSURF');smooth.levels=1
    solid=obj.modifiers.new('Petal thickness','SOLIDIFY');solid.thickness=.018;solid.offset=0
    for poly in mesh.polygons:poly.use_smooth=True
leaf.finish('Canopy curling leaves',.012)
reports['canopy-vine-crafted']=export('canopy-vine-crafted',None,['Blender-authored suspended vines, modeled golden bells and curved leaves; not claimed as AI output'])

manifest=json.loads((PUBLIC/'manifest.json').read_text())
for asset in manifest['assets']:
    if asset['id']=='flowering-vine':
        asset.update(id='canopy-vine-crafted',label='顶棚花藤',path='./assets/flower-sea/canopy-vine-crafted.glb',height=6,state='ready',source='Blender authored canopy detail',generationState='downloaded')
    report=reports.get(asset['id'])
    if report:
        asset.update(sha256=report['outputSha256'],triangles=report['triangles'],materials=report['materials'],meshes=report['meshes'],blenderVersion=report['blender'],artPass='Welded organic silhouettes, applied petal/leaf thickness and material grouping')
        if report['portalHeight'] is not None:asset['portalHeight']=report['portalHeight']
for placement in manifest['placements']:
    if placement['assetId']=='flowering-vine':placement.update(assetId='canopy-vine-crafted',position=[0,9,-2])
(PUBLIC/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:{'triangles':v['triangles'],'changes':v['changes']} for k,v in reports.items()}))
