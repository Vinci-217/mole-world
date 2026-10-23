"""Blender authoring pass for woodland trees, hollow oak, rocks and soil.

node scripts/generate_woodland.mjs
blender -b --python-exit-code 1 --python scripts/refine_woodland.py
Meshes and baked textures are exported; .blend files and measurements remain
in artifacts/woodland for inspection. No existing images are edited.
"""
import bpy, bmesh, json, math, random, hashlib
from pathlib import Path
from mathutils import Vector

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/assets/woodland'
WORK=ROOT/'artifacts/woodland'
random.seed(5278)
records=[]

def material(name,color,roughness=.9):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=roughness
    return m

def mesh(name,verts,faces,mat):
    data=bpy.data.meshes.new(name);data.from_pydata(verts,[],faces);data.update()
    obj=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(obj);data.materials.append(mat)
    for p in data.polygons:p.use_smooth=True
    return obj

def active(obj):
    bpy.ops.object.select_all(action='DESELECT');obj.select_set(True);bpy.context.view_layer.objects.active=obj

def apply(obj,modifier):
    active(obj);bpy.ops.object.modifier_apply(modifier=modifier.name)

def close(obj,distance=.00001):
    bm=bmesh.new();bm.from_mesh(obj.data)
    bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=distance)
    bmesh.ops.dissolve_degenerate(bm,edges=list(bm.edges),dist=distance*.1)
    bmesh.ops.holes_fill(bm,edges=[e for e in bm.edges if e.is_boundary],sides=0)
    bmesh.ops.triangulate(bm,faces=list(bm.faces))
    bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(obj.data);bm.free()

def export(filename):
    path=OUT/filename
    bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True,export_attributes=True)
    objects=[]
    for o in bpy.context.scene.objects:
        if o.type=='MESH':
            o.data.calc_loop_triangles();objects.append({'name':o.name,'triangles':len(o.data.loop_triangles),'dimensions':list(o.dimensions)})
    records.append({'file':filename,'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'bytes':path.stat().st_size,'meshes':objects})

bpy.ops.wm.read_factory_settings(use_empty=True)
bark=material('Woodland bark',(.46,.40,.30))
for row in json.loads((WORK/'skeletons.json').read_text()):
    for geom in row['meshes']:
        pos=geom['positions'];s=row['scale'];kind=geom['kind'];verts=[]
        for i in range(0,len(pos),3):
            x,y,z=pos[i:i+3];x*=s;y*=s;z*=s
            # Root flare has five unequal lobes, and disappears gradually into
            # the trunk. The same crown deformation is applied to every LOD.
            if kind=='branches':
                a=math.atan2(z,x);flare=1+math.exp(-max(y,0)*1.9)*(.32+.16*math.sin(a*5+.6))
                x*=flare;z*=flare
            x+=.3*math.sin(y*.13)*min(1,y/5)
            verts.append((x,-z,y-.05))
        idx=geom['indices'];faces=[tuple(idx[i:i+3]) for i in range(0,len(idx),3)]
        mat=bark if kind=='branches' else material('Foliage '+('ash' if row['id']=='ash' else 'oak'),(.72,.78,.58))
        o=mesh(row['id']+'_'+row['lod']+'_'+kind,verts,faces,mat)
        uv=o.data.uv_layers.new(name='UVMap');coords=geom['uvs']
        for loop in o.data.loops:
            j=loop.vertex_index;uv.data[loop.index].uv=(coords[j*2],verts[j][2]*.8 if kind=='branches' else coords[j*2+1])
        if kind=='branches':close(o)
bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'Woodland-Tree-Variants.blend'))
export('woodland-trees.glb')

# One continuous, irregular hollow trunk, with integrated roots. The opening
# faces -Y in Blender / +Z in Three, toward the approach path.
bpy.ops.wm.read_factory_settings(use_empty=True)
bark=material('Ancient oak bark',(.52,.44,.33));objects=[]
verts=[];faces=[];rings=36;segments=56
for j in range(rings+1):
    t=j/rings;z=t*17-.32
    radius=3.4*(1-.63*t)+.52*math.exp(-t*12)
    for i in range(segments):
        a=i/segments*math.tau
        r=radius*(1+.075*math.sin(a*5+t*9)+.035*math.cos(a*9-t*13))
        verts.append((math.cos(a)*r+.8*t*t,math.sin(a)*r+.35*math.sin(t*4),z))
        if j<rings:
            k=j*segments+i;n=j*segments+(i+1)%segments;faces.append((k,n,n+segments,k+segments))
faces.append(tuple(range(segments-1,-1,-1)));faces.append(tuple(rings*segments+i for i in range(segments)))
trunk=mesh('Hollow Oak · continuous trunk and roots',verts,faces,bark);objects.append(trunk)

def limb(points,radii):
    curve=bpy.data.curves.new('Organic root','CURVE');curve.dimensions='3D';curve.resolution_u=8;curve.bevel_depth=1;curve.bevel_resolution=3;curve.resolution_u=6
    p=curve.splines.new('BEZIER');p.bezier_points.add(len(points)-1)
    for b,co,r in zip(p.bezier_points,points,radii):b.co=co;b.radius=r;b.handle_left_type='AUTO';b.handle_right_type='AUTO'
    obj=bpy.data.objects.new('Sculpted root',curve);bpy.context.collection.objects.link(obj);active(obj);bpy.ops.object.convert(target='MESH');objects.append(bpy.context.object)

for i in range(9):
    a=i/9*math.tau+.18;length=5.8+random.random()*2
    # Do not put a root across the walkable mouth of the hollow.
    if math.sin(a)<-.7:continue
    limb([(math.cos(a)*1.7,math.sin(a)*1.7,1.6),(math.cos(a)*3.7,math.sin(a)*3.7,.45),(math.cos(a)*length,math.sin(a)*length,-.2)],[.95,.5,.045])
for i in range(7):
    a=i/7*math.tau+.6;z=7.8+i*1.04;l=5.6+random.random()*2
    limb([(.4,0,z),(math.cos(a)*3.3,math.sin(a)*3.3,z+.6),(math.cos(a)*l,math.sin(a)*l,z+3.2),(math.cos(a)*(l+.8),math.sin(a)*(l+.8),z+5.3)],[.95,.58,.25,.04])
bpy.ops.object.select_all(action='DESELECT')
for o in objects:o.select_set(True)
bpy.context.view_layer.objects.active=trunk;bpy.ops.object.join()
remesh=trunk.modifiers.new('Fuse roots into the living trunk','REMESH');remesh.mode='VOXEL';remesh.voxel_size=.125;apply(trunk,remesh)
smooth=trunk.modifiers.new('Sculpted junction transitions','SMOOTH');smooth.factor=.8;smooth.iterations=3;apply(trunk,smooth)
# Ellipsoidal cavity: a full opening, not three columns with a lintel.
bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=28,location=(.12,-1.9,2.0));cut=bpy.context.object;cut.scale=(1.72,3.55,3.35)
active(cut);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
boolean=trunk.modifiers.new('Open weathered heartwood cavity','BOOLEAN');boolean.operation='DIFFERENCE';boolean.solver='EXACT';boolean.object=cut;apply(trunk,boolean);bpy.data.objects.remove(cut,do_unlink=True)
# Resample Boolean intersections before decimation. Tiny near-coplanar slivers
# otherwise survive Blender's topology check but vanish in glTF triangulation.
repair=trunk.modifiers.new('Clean cavity sculpt topology','REMESH');repair.mode='VOXEL';repair.voxel_size=.125;apply(trunk,repair)
smooth=trunk.modifiers.new('Weather the cavity edge','SMOOTH');smooth.factor=.5;smooth.iterations=2;apply(trunk,smooth)
dec=trunk.modifiers.new('Preserve silhouette at browser budget','DECIMATE');dec.ratio=.38;apply(trunk,dec)
close(trunk,.005)  # Remove slivers at the centimetre-wide branch tips.
# Voxelization can leave a detached one-cell chip at a very fine branch tip.
# Keep the continuous sculpt only; do not ship detached miniature components.
bm=bmesh.new();bm.from_mesh(trunk.data);unseen=set(bm.verts);components=[]
while unseen:
    seed=unseen.pop();component={seed};pending=[seed]
    while pending:
        v=pending.pop()
        for edge in v.link_edges:
            other=edge.other_vert(v)
            if other in unseen:unseen.remove(other);component.add(other);pending.append(other)
    components.append(component)
largest=max(components,key=len)
bmesh.ops.delete(bm,geom=[v for component in components if component is not largest for v in component],context='VERTS')
bm.to_mesh(trunk.data);bm.free()
active(trunk);bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(angle_limit=1.15,island_margin=.015);bpy.ops.object.mode_set(mode='OBJECT')
for p in trunk.data.polygons:p.use_smooth=True
# Bark grain follows height around the main trunk; smart UVs remain for limbs.
for poly in trunk.data.polygons:
    center=poly.center
    if center.z<7:
        angles=[math.atan2(trunk.data.vertices[trunk.data.loops[i].vertex_index].co.y,trunk.data.vertices[trunk.data.loops[i].vertex_index].co.x)/math.tau for i in poly.loop_indices]
        if max(angles)-min(angles)>.5:angles=[a+1 if a<0 else a for a in angles]
        for li,a in zip(poly.loop_indices,angles):
            v=trunk.data.vertices[trunk.data.loops[li].vertex_index];trunk.data.uv_layers.active.data[li].uv=(a*7,v.co.z*.4)

stone=material('Weathered woodland stone',(.48,.46,.39))
for i in range(3):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=3,radius=1);obj=bpy.context.object;obj.name='river_rock_'+str(i);obj.data.materials.append(stone)
    for v in obj.data.vertices:
        co=v.co;f=1+.14*math.sin(co.x*5+i)*math.sin(co.y*6+co.z*3);co.x*=f*(1+.16*i);co.y*=f*.83;co.z*=f*.62
    for p in obj.data.polygons:p.use_smooth=True
    # Models share origin for runtime instancing; keep separated only in the
    # authored scene via hidden presentation collection, not baked transforms.
    active(obj);bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(island_margin=.02);bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'Hollow-Oak-and-River-Stones.blend'))
export('woodland-landmarks.glb')

# Bake an ORIGINAL 3D soil material onto a UV plane: no source image processing.
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.mesh.primitive_plane_add(size=4);plane=bpy.context.object
m=material('Damp soil with fine mineral grains',(.15,.105,.06));plane.data.materials.append(m)
nodes=m.node_tree.nodes;links=m.node_tree.links;p=nodes.get('Principled BSDF');p.inputs['Roughness'].default_value=.95
tex=nodes.new('ShaderNodeTexCoord')
noise=nodes.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=7;noise.inputs['Detail'].default_value=5;noise.inputs['Roughness'].default_value=.72;links.new(tex.outputs['UV'],noise.inputs['Vector'])
fine=nodes.new('ShaderNodeTexNoise');fine.inputs['Scale'].default_value=220;fine.inputs['Detail'].default_value=2;links.new(tex.outputs['UV'],fine.inputs['Vector'])
mix=nodes.new('ShaderNodeMath');mix.operation='MULTIPLY_ADD';mix.inputs[1].default_value=.7;links.new(noise.outputs['Fac'],mix.inputs[0]);links.new(fine.outputs['Fac'],mix.inputs[2])
ramp=nodes.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].position=.3;ramp.color_ramp.elements[0].color=(.035,.022,.012,1);ramp.color_ramp.elements[1].position=1.18;ramp.color_ramp.elements[1].color=(.29,.22,.13,1);links.new(mix.outputs[0],ramp.inputs[0]);links.new(ramp.outputs['Color'],p.inputs['Base Color'])
bump=nodes.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.58;bump.inputs['Distance'].default_value=.055;links.new(fine.outputs['Fac'],bump.inputs['Height']);links.new(bump.outputs[0],p.inputs['Normal'])
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=4;scene.cycles.device='CPU'
scene.render.bake.use_pass_direct=False;scene.render.bake.use_pass_indirect=False;scene.render.bake.use_pass_color=True;scene.render.bake.margin=8
for kind in ['DIFFUSE','NORMAL']:
    image=bpy.data.images.new('Soil '+kind,width=512,height=512);image.colorspace_settings.name='sRGB' if kind=='DIFFUSE' else 'Non-Color'
    target=nodes.new('ShaderNodeTexImage');target.image=image;nodes.active=target;active(plane)
    bpy.ops.object.bake(type=kind);image.filepath_raw=str(OUT/('soil-color.png' if kind=='DIFFUSE' else 'soil-normal.png'));image.file_format='PNG';image.save();nodes.remove(target)
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'Forest-Floor-Material.blend'))
(WORK/'refinement-report.json').write_text(json.dumps({'blender':bpy.app.version_string,'assets':records,'soil':'Original Blender node material, diffuse and tangent normal baked from 3D UV plane; 512 pixels'},indent=2)+'\n')
(OUT/'manifest.json').write_text(json.dumps({'units':'metres','assets':[{
    'id':Path(r['file']).stem,'state':'ready','path':'./assets/woodland/'+r['file'],
    'sha256':r['sha256'],'triangles':sum(m['triangles'] for m in r['meshes']),
    'geometryPolicy':'alpha-cutout-foliage' if 'trees' in r['file'] else 'closed-solid',
    'blenderVersion':bpy.app.version_string,
    'source':'EZ-Tree skeleton refined in Blender' if 'trees' in r['file'] else 'Original sculpted Blender mesh'
} for r in records]},indent=2)+'\n')
source_path=OUT/'sources.json';sources=json.loads(source_path.read_text())
sources['assets']=[r for r in sources['assets'] if not r['file'].startswith('soil-')]+[{
    'file':p.name,'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),
    'license':'Original project material','source':'Blender UV plane material bake (refine_woodland.py)'
} for p in sorted(OUT.glob('soil-*.png'))]
source_path.write_text(json.dumps(sources,indent=2)+'\n')
print('WOODLAND_REFINEMENT',json.dumps(records))
