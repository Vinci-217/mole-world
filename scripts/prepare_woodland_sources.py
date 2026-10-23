"""Make the editable Blender deliveries convenient to inspect.

Run after the GLB export/audit. This changes only the .blend presentations:
packed PBR materials, separate tree variants and hidden alternate LODs.
"""
from pathlib import Path
import bpy
ROOT=Path(__file__).resolve().parents[1];WORK=ROOT/'artifacts/woodland';TEX=ROOT/'public/assets/woodland'
for filename in ['Woodland-Tree-Variants.blend','Hollow-Oak-and-River-Stones.blend']:
    bpy.ops.wm.open_mainfile(filepath=str(WORK/filename))
    for obj in bpy.context.scene.objects:
        if obj.type!='MESH' or obj.name.startswith('river_rock'):continue
        leaf=obj.name.endswith('leaves');ash=obj.name.startswith('ash');name=('ash' if ash else 'oak')
        mat=bpy.data.materials.new(('Foliage ' if leaf else 'PBR bark ')+name);mat.use_nodes=True
        nodes=mat.node_tree.nodes;links=mat.node_tree.links;p=nodes.get('Principled BSDF');p.inputs['Roughness'].default_value=.94
        def image(name,linear=False):
            t=nodes.new('ShaderNodeTexImage');t.image=bpy.data.images.load(str(TEX/name),check_existing=True);t.image.colorspace_settings.name='Non-Color' if linear else 'sRGB';return t
        color=image(name+'_color.png' if leaf else ('willow' if ash else 'oak')+'_color_1k.jpg');links.new(color.outputs['Color'],p.inputs['Base Color'])
        if leaf:
            links.new(color.outputs['Alpha'],p.inputs['Alpha']);mat.surface_render_method='DITHERED';mat.use_backface_culling=False
        else:
            prefix='willow' if ash else 'oak';n=image(prefix+'_normal_1k.jpg',True);normal=nodes.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.65;links.new(n.outputs[0],normal.inputs['Color']);links.new(normal.outputs[0],p.inputs['Normal'])
            r=image(prefix+'_roughness_1k.jpg',True);links.new(r.outputs[0],p.inputs['Roughness'])
        obj.data.materials.clear();obj.data.materials.append(mat)
        if 'Variants' in filename:
            obj.location.x=26 if ash else 49 if obj.name.startswith('young') else 0
            obj.hide_render='_far_' in obj.name;obj.hide_set('_far_' in obj.name)
    if 'Stones' in filename:
        for i,obj in enumerate(o for o in bpy.context.scene.objects if o.name.startswith('river_rock')):obj.location.x=11+i*4
    bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(WORK/filename))
print('Packed PBR Blender presentation files; production GLBs unchanged.')
