"""Replace the old flattened canopy landmark with the Blender-refined oak.
Run after refine_woodland.py. Embed its real PBR textures for standalone glTF.
"""
from pathlib import Path
import bpy,json,hashlib
ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'artifacts/woodland';TEX=ROOT/'public/assets/woodland'
bpy.ops.wm.open_mainfile(filepath=str(WORK/'Woodland-Tree-Variants.blend'))
for obj in list(bpy.context.scene.objects):
    if not obj.name.startswith('oak_near_'):bpy.data.objects.remove(obj,do_unlink=True)
for obj in bpy.context.scene.objects:
    leaf=obj.name.endswith('leaves');mat=bpy.data.materials.new('Foliage fine oak leaves' if leaf else 'Natural oak bark');mat.use_nodes=True
    nodes=mat.node_tree.nodes;links=mat.node_tree.links;p=nodes.get('Principled BSDF');p.inputs['Roughness'].default_value=.94
    def image(name,linear=False):
        t=nodes.new('ShaderNodeTexImage');t.image=bpy.data.images.load(str(TEX/name));t.image.colorspace_settings.name='Non-Color' if linear else 'sRGB';return t
    color=image('oak_color.png' if leaf else 'oak_color_1k.jpg');links.new(color.outputs['Color'],p.inputs['Base Color'])
    if leaf:
        links.new(color.outputs['Alpha'],p.inputs['Alpha']);mat.surface_render_method='DITHERED';mat.use_backface_culling=False
    else:
        n=image('oak_normal_1k.jpg',True);normal=nodes.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.65;links.new(n.outputs['Color'],normal.inputs['Color']);links.new(normal.outputs[0],p.inputs['Normal'])
        r=image('oak_roughness_1k.jpg',True);links.new(r.outputs[0],p.inputs['Roughness'])
    obj.data.materials.clear();obj.data.materials.append(mat)
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'Garden-Hero-Oak.blend'))
path=ROOT/'public/assets/flower-sea/ancient-tree.glb'
bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True)
triangles=0
for obj in bpy.context.scene.objects:obj.data.calc_loop_triangles();triangles+=len(obj.data.loop_triangles)
manifest_path=ROOT/'public/assets/flower-sea/manifest.json';manifest=json.loads(manifest_path.read_text())
row=next(a for a in manifest['assets'] if a['id']=='ancient-tree')
row.update(sha256=hashlib.sha256(path.read_bytes()).hexdigest(),triangles=triangles,materials=2,meshes=2,source='EZ-Tree MIT skeleton → Blender refinement; Poly Haven CC0 bark; MIT leaf atlas',geometryPolicy='alpha-cutout-foliage',generationState='not-submitted',blenderVersion=bpy.app.version_string,artPass='Replaced flattened generated crown with asymmetric branching oak, physical root flare, fine alpha foliage and PBR bark')
row.pop('rawSha256',None);manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print('GARDEN_OAK',json.dumps(row))
