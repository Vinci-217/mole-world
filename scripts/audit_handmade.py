"""Round-trip authored models through Blender; ray-test the working doorway."""
import bpy,bmesh,json,hashlib,math
from mathutils import Vector
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/assets/handmade';manifest=json.loads((OUT/'manifest.json').read_text());report=[];failures=[]
for row in manifest['assets']:
    path=OUT/row['file'];bpy.ops.wm.read_factory_settings(use_empty=True);bpy.ops.import_scene.gltf(filepath=str(path));triangles=0;objects=[]
    if hashlib.sha256(path.read_bytes()).hexdigest()!=row['sha256']:failures.append(row['id']+' checksum')
    for o in bpy.context.scene.objects:
        if o.type!='MESH':continue
        o.data.calc_loop_triangles();triangles+=len(o.data.loop_triangles)
        if not all(math.isfinite(v) for p in o.data.vertices for v in p.co):failures.append(o.name+' invalid position')
        if not all(math.isfinite(v) for p in o.data.corner_normals for v in p.vector):failures.append(o.name+' invalid normal')
        bm=bmesh.new();bm.from_mesh(o.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
        boundaries=sum(e.is_boundary for e in bm.edges);nonmanifold=sum(not e.is_manifold for e in bm.edges)
        if row['id']=='hollow' and (boundaries or nonmanifold):failures.append(o.name+' hollow sculpt is not sealed')
        objects.append({'name':o.name,'triangles':len(o.data.loop_triangles),'boundaryEdges':boundaries,'nonManifoldEdges':nonmanifold});bm.free()
    if triangles!=row['triangles']:failures.append(row['id']+' triangle count')
    entry={'id':row['id'],'sha256':row['sha256'],'triangles':triangles,'meshes':objects}
    if row['id']=='castle':
        bpy.context.view_layer.update();deps=bpy.context.evaluated_depsgraph_get();origin=Vector((.75,-12,2));direction=Vector((0,1,0))
        closed=bpy.context.scene.ray_cast(deps,origin,direction,distance=10)[0]
        for side,angle in [('left',-1.42),('right',1.42)]:
            obj=bpy.data.objects['castle_door_'+side];obj.rotation_mode='XYZ';obj.rotation_euler.z=angle
        bpy.context.view_layer.update();opened=bpy.context.scene.ray_cast(bpy.context.evaluated_depsgraph_get(),origin,direction,distance=10)[0]
        entry['doorway']={'blockedWhenClosed':closed,'blockedWhenOpen':opened}
        if not closed or opened:failures.append('Castle doorway does not physically open')
    report.append(entry);print('HANDMADE_AUDIT',json.dumps(entry))
target=ROOT/'artifacts/handmade/model-audit.json';target.write_text(json.dumps({'assets':report,'failures':failures},indent=2)+'\n')
if failures:raise RuntimeError('; '.join(failures))
print('All seven authored model libraries passed round-trip and doorway checks.')
