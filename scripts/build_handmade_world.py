"""Author the three-scene rebuild in Blender, without generated 3D models.

All mesh topology below is authored here: masonry, tiled roofs, carved frames,
flower surfaces, branching trunks, foliage clusters and garden furnishings.
Only the unchanged CC0 bark / MIT leaf photographs are reused as textures.
Run: blender -b --python-exit-code 1 --python scripts/build_handmade_world.py
"""
import bpy,bmesh,math,random,json,hashlib,shutil
from pathlib import Path
from collections import defaultdict
from mathutils import Vector,Matrix

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/assets/handmade';WORK=ROOT/'artifacts/handmade';TEX=OUT/'textures'
for p in [OUT,WORK,TEX]:p.mkdir(parents=True,exist_ok=True)
rng=random.Random(391108)
records=[]
def linear(x):return x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4
def rgb(hex):return tuple(linear(int(hex[i:i+2],16)/255) for i in [1,3,5])
PALETTE={'stone':'#b8b2a1','plaster':'#e2d4ad','ivory':'#e9dfc7','roof':'#a84c3b','roofdark':'#6e3b33','wood':'#64513d','gold':'#b9954f','iron':'#35413d','glass':'#7baca5','window':'#edc67c','cloth':'#80505b','leaf':'#80955a','stem':'#526d42','petal':'#e9b8bd','pollen':'#bb8b38','bark':'#82705c','moss':'#62734a'}
materials={}
def reset():
    global batches,materials
    bpy.ops.wm.read_factory_settings(use_empty=True);batches={};materials={}
    for key,c in PALETTE.items():
        m=bpy.data.materials.new('handmade_'+key);m.use_nodes=True;m.diffuse_color=(*rgb(c),1)
        p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*rgb(c),1);p.inputs['Roughness'].default_value=.86
        if key in ['iron','gold']:p.inputs['Metallic'].default_value=.55;p.inputs['Roughness'].default_value=.4
        materials[key]=m
def batch(key):
    if key not in batches:batches[key]={'v':[],'f':[],'uv':[],'colors':[]}
    return batches[key]
def geom(key,verts,faces,uv=None,color=None):
    b=batch(key);offset=len(b['v']);b['v']+=list(verts);b['f'] += [tuple(offset+i for i in f) for f in faces]
    b['uv'] += list(uv or [(v[0]*.4,v[2]*.4) for v in verts]);b['colors'] += [rgb(color or PALETTE[key.split(':')[0]])]*len(verts)
def box(key,pos,size,rot=0,bevel=0):
    # Separate face vertices retain crisp moulding normals and physical UVs.
    dx,dy,dz=[s*.5 for s in size];corners=[(-dx,-dy,-dz),(dx,-dy,-dz),(dx,dy,-dz),(-dx,dy,-dz),(-dx,-dy,dz),(dx,-dy,dz),(dx,dy,dz),(-dx,dy,dz)]
    faces=[(0,3,2,1),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7),(4,5,6,7)];v=[];f=[];uv=[]
    c,s=math.cos(rot),math.sin(rot)
    for face in faces:
        offset=len(v)
        for j,i in enumerate(face):
            x,y,z=corners[i];v.append((pos[0]+x*c-y*s,pos[1]+x*s+y*c,pos[2]+z))
            uv.append(((j in [1,2])*max(size[0],size[1])*.45,(j>=2)*size[2]*.45))
        f.append(tuple(offset+i for i in range(4)))
    geom(key,v,f,uv)
def lathe(key,pos,profile,segments=32,rotation=0):
    v=[];uv=[];f=[]
    for j,(r,z) in enumerate(profile):
        for i in range(segments+1):
            a=i/segments*math.tau+rotation;v.append((pos[0]+r*math.cos(a),pos[1]+r*math.sin(a),pos[2]+z));uv.append((i/segments*max(1,profile[0][0]*2),z*.45))
            if j and i<segments:
                k=j*(segments+1)+i;f.append((k,k-segments-1,k-segments,k+1))
    geom(key,v,f,uv)
def tube(key,points,radii,sides=10):
    if key.startswith('bark') and '_far' not in key and 3<=len(points)<=5:
        control=[Vector(p) for p in points];curved=[];sizes=[]
        for segment in range(len(control)-1):
            a,b,c,d=control[max(0,segment-1)],control[segment],control[segment+1],control[min(len(control)-1,segment+2)]
            for j in range(4):
                t=j/4;curved.append(tuple(.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t)));sizes.append(radii[segment]*(1-t)+radii[segment+1]*t)
        curved.append(tuple(control[-1]));sizes.append(radii[-1]);points,radii=curved,sizes
    v=[];uv=[];f=[];length=0
    for j,(co,r) in enumerate(zip(points,radii)):
        co=Vector(co);t=Vector(points[min(j+1,len(points)-1)])-Vector(points[max(0,j-1)])
        t.normalize();u=t.cross(Vector((0,0,1)))
        if u.length<.01:u=t.cross(Vector((1,0,0)))
        u.normalize();w=t.cross(u).normalized()
        if j:length+=(co-Vector(points[j-1])).length
        for i in range(sides+1):
            a=i/sides*math.tau;p=co+(u*math.cos(a)+w*math.sin(a))*r;v.append(tuple(p));uv.append((i/sides*max(1,radii[0]*3),length*.7))
            if j and i<sides:
                k=j*(sides+1)+i;f.append((k,k-sides-1,k-sides,k+1))
    f += [tuple(range(sides,-1,-1)),tuple((len(points)-1)*(sides+1)+i for i in range(sides+1))]
    geom(key,v,f,uv)
def arch(key,x,y,z,width,height,thick=.2,depth=.16):
    r=width*.5;shoulder=height-r
    box(key,(x-r-thick*.5,y,z+shoulder*.5),(thick,depth,shoulder))
    box(key,(x+r+thick*.5,y,z+shoulder*.5),(thick,depth,shoulder))
    for i in range(16):
        a=i/16*math.pi;b=(i+1)/16*math.pi
        vertices=[]
        for yy in [y-depth*.5,y+depth*.5]:
            vertices.extend([(x+math.cos(t)*rr,yy,z+shoulder+math.sin(t)*rr) for rr,t in [(r,a),(r,b),(r+thick,b),(r+thick,a)]])
        geom(key,vertices,[(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)])
def arched_panel(key,x,y,z,width,height,depth=.08):
    r=width*.5;shoulder=height-r;outline=[(-r,0),(r,0),(r,shoulder)]+[(math.cos(i/20*math.pi)*r,shoulder+math.sin(i/20*math.pi)*r) for i in range(1,21)]
    n=len(outline);v=[(x+xx,y+yy,z+zz) for yy in [-depth*.5,depth*.5] for xx,zz in outline]
    faces=[tuple(range(n-1,-1,-1)),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    geom(key,v,[tuple(reversed(f)) for f in faces])
def window(x,y,z,w=1,h=2):
    arched_panel('window',x,y,z,w,h);arch('ivory',x,y-.08,z-.06,w,h,.13,.22)
    box('wood',(x,y-.13,z+h*.42),(.055,.08,h*.82));box('wood',(x,y-.13,z+h*.46),(w,.08,.055));box('ivory',(x,y-.17,z-.09),(w+.5,.4,.15))
def tile_roof(cx,cy,z,width,depth,rise,rows=12):
    w=width*.44;d=depth*.43
    geom('plaster',[(cx+x,cy+y,z+zz) for x in [-w,w] for y,zz in [(-d,0),(d,0),(0,rise-.15)]],[(0,2,1),(3,4,5),(0,1,4,3),(0,3,5,2),(1,2,5,4)])
    # Each overlapping tile is a curved clay patch with a real leading rim.
    for side in [-1,1]:
        for row in range(rows):
            t=row/rows;yy=cy+side*(depth*.5*(1-t));zz=z+rise*t
            cols=max(4,round(width/.48))
            for col in range(cols):
                xx=cx-width*.5+(col+.5+(row%2)*.18)*width/cols
                v=[];f=[]
                for j in range(3):
                    q=j/2
                    for k in range(4):
                        s=k/3-.5;v.append((xx+s*width/cols*1.04,yy-side*q*depth/(2*rows)*1.17,zz+q*rise/rows*1.17+math.cos(s*math.pi)*.06+.028))
                        if j and k:f.append((j*4+k,j*4+k-1,(j-1)*4+k-1,(j-1)*4+k))
                geom('roof',v,f)
        tube('roofdark',[(cx-width*.5,cy,z+rise+.08),(cx+width*.5,cy,z+rise+.08)],[.13,.13],8)
def cone_roof(cx,cy,z,radius,height,rows=13):
    lathe('roofdark',(cx,cy,z),[(radius,0),(0,height),(0,height+.2)],48)
    for row in range(rows):
        t=row/rows;r=radius*(1-t);rr=radius*(1-(row+1)/rows);count=max(6,round(math.tau*r/.42))
        for j in range(count):
            a=(j+(row%2)*.5)/count*math.tau;da=math.pi/count
            geom('roof',[(cx+math.cos(a-da)*r,cy+math.sin(a-da)*r,z+height*t+.045),(cx+math.cos(a+da)*r,cy+math.sin(a+da)*r,z+height*t+.045),(cx+math.cos(a+da)*rr,cy+math.sin(a+da)*rr,z+height*(t+1/rows)+.05),(cx+math.cos(a-da)*rr,cy+math.sin(a-da)*rr,z+height*(t+1/rows)+.05)],[(0,1,2,3)])
    lathe('gold',(cx,cy,z+height),[(.12,0),(.15,.16),(.06,.36),(0,.64)],16)
def finish_meshes(prefix='',smooth=False,bevel=False):
    objects=[]
    for key,b in batches.items():
        if not b['v']:continue
        name=prefix+key.replace(':','_');d=bpy.data.meshes.new(name);d.from_pydata(b['v'],[],b['f']);d.update()
        o=bpy.data.objects.new(name,d);bpy.context.collection.objects.link(o);d.materials.append(materials[key.split(':')[0]])
        uv=d.uv_layers.new(name='UVMap')
        for loop in d.loops:uv.data[loop.index].uv=b['uv'][loop.vertex_index]
        if key.split(':')[0] in ['petal','stem','pollen','leaf']:
            c=d.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT')
            for i,value in enumerate(b['colors']):c.data[i].color=(*value,1)
        if smooth or key.split(':')[0] in ['roofdark','bark','gold','leaf','petal','pollen','stem']:
            for f in d.polygons:f.use_smooth=True
        if bevel and key.split(':')[0] in ['stone','ivory','wood','plaster']:
            bpy.context.view_layer.objects.active=o;o.select_set(True)
            m=o.modifiers.new('Carved edge bevels','BEVEL');m.width=.025;m.segments=2;m.limit_method='ANGLE';m.angle_limit=.7
            bpy.ops.object.modifier_apply(modifier=m.name);o.select_set(False)
        objects.append(o)
    return objects
def bind_preview():
    for m in list(bpy.data.materials):
        key=m.name.removeprefix('handmade_').split('.')[0];p=m.node_tree.nodes.get('Principled BSDF') if m.use_nodes else None
        if not p:continue
        filename='bark-color.jpg' if key=='bark' else 'oak-leaves.png' if key=='leaf' else key+'-color.png'
        path=TEX/filename
        if not path.exists():continue
        node=m.node_tree.nodes.new('ShaderNodeTexImage');node.image=bpy.data.images.load(str(path),check_existing=True);m.node_tree.links.new(node.outputs['Color'],p.inputs['Base Color'])
        if key=='leaf':m.node_tree.links.new(node.outputs['Alpha'],p.inputs['Alpha']);m.surface_render_method='DITHERED'
        normal_path=TEX/('bark-normal.jpg' if key=='bark' else key+'-normal.png')
        if normal_path.exists():
            image=m.node_tree.nodes.new('ShaderNodeTexImage');image.image=bpy.data.images.load(str(normal_path),check_existing=True);image.image.colorspace_settings.name='Non-Color'
            normal=m.node_tree.nodes.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.5;m.node_tree.links.new(image.outputs[0],normal.inputs['Color']);m.node_tree.links.new(normal.outputs[0],p.inputs['Normal'])
def export(name,objects=None):
    if objects:
        bpy.ops.object.select_all(action='DESELECT')
        for o in objects:o.select_set(True)
    path=OUT/(name+'.glb');bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_yup=True,use_selection=bool(objects),export_attributes=True,export_vertex_color='ACTIVE',export_all_vertex_colors=False)
    rows=[]
    for o in objects or bpy.context.scene.objects:
        if o.type=='MESH':o.data.calc_loop_triangles();rows.append({'name':o.name,'triangles':len(o.data.loop_triangles)})
    records.append({'id':name,'file':path.name,'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'triangles':sum(r['triangles'] for r in rows),'meshes':rows,'source':'Original Blender geometry authored by build_handmade_world.py','blender':bpy.app.version_string})
    bind_preview();bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(WORK/(name+'.blend')))

# Unmodified photographic maps, not any previously generated model.
for old,new in [('oak_color_1k.jpg','bark-color.jpg'),('oak_normal_1k.jpg','bark-normal.jpg'),('oak_roughness_1k.jpg','bark-roughness.jpg'),('oak_color.png','oak-leaves.png'),('ash_color.png','ash-leaves.png')]:
    shutil.copyfile(ROOT/'public/assets/woodland'/old,TEX/new)

# CASTLE: a traversable gatehouse, clock pavilion, two inhabited wings and
# four roofed towers. Openings are physical gaps; animated doors are separate.
reset()
for x in [-11.5,11.5]:
    box('plaster',(x,3,6.1),(9,11,12.2));box('stone',(x,3,.55),(9.5,11.5,1.1))
    tile_roof(x,3,12.3,10.2,12.5,4.1,14)
    for xx in [x-3,x,x+3]:
        for z in [2.2,6.4]:window(xx,-2.65,z,1.15,2.5)
    for zz in [1.1,5.9,10.9]:box('ivory',(x,-2.65,zz),(9.4,.35,.2))
    for xx in [x-4,x+4]:box('ivory',(xx,-2.75,6),(.35,.5,11.8))
for x in [-6.4,6.4]:box('plaster',(x,0,5.8),(2.1,6,11.6))
box('plaster',(0,9,4.5),(14.4,.6,9))
for x in [-4,0,4]:window(x,9.4,2.7,1.6,3.5)
# Gate opening 4.6 m wide, 5.7 m tall.
for x in [-3.85,3.85]:box('plaster',(x,-1.9,6.5),(3.0,6.4,13));box('stone',(x,-1.9,.55),(3.3,6.7,1.1))
box('plaster',(0,-1.9,10.2),(4.7,6.4,5.6));arch('ivory',0,-5.22,.1,4.6,7.4,.48,.5)
box('ivory',(0,-5.24,8.5),(11.4,.55,.35));tile_roof(0,-1.9,13.1,12,8.6,4.0,12)
for x in [-2.5,2.5]:window(x,-5.25,9.3,1.0,2.3)
# Clock tower rises behind the gate, with a deep clock bezel and 12 markers.
box('plaster',(0,3.7,16.2),(5.2,5.2,9.5));box('ivory',(0,.92,18),(5.6,.5,.3))
for x in [-2.6,2.6]:box('ivory',(x,.9,16),(.3,.35,9.8))
cone_roof(0,3.7,21.1,4.1,7.2,18)
tube('gold',[(math.cos(i/64*math.tau)*1.2,.48,18.9+math.sin(i/64*math.tau)*1.2) for i in range(65)],[.12]*65,8)
# Vertical clock face facing front (-Y).
clock_v=[(math.cos(a)*1.1,.5,18.9+math.sin(a)*1.1) for a in [i/64*math.tau for i in range(64)]];geom('ivory',clock_v,[tuple(range(64))])
for i in range(12):
    a=i/12*math.tau;box('gold',(math.sin(a)*.88,.42,18.9+math.cos(a)*.88),(.055,.08,.15))
tube('iron',[(0,.35,18.9),(.1,.35,19.58)],[.04,.035],8);tube('iron',[(0,.34,18.9),(.55,.34,18.8)],[.045,.035],8)
for x,y,height,r in [(-17,-1,12.5,2.4),(17,-1,12.5,2.4),(-15,9,15,2.2),(15,9,15,2.2)]:
    lathe('plaster',(x,y,0),[(r+.2,0),(r+.2,.6),(r,.85),(r,height),(r+.15,height+.2),(r+.15,height+.65)],40)
    lathe('ivory',(x,y,0),[(r+.08,3.4),(r+.08,3.65),(r,3.75)],40)
    cone_roof(x,y,height+.65,r+1,6.1,16);window(x,y-r-.05,6.4,.9,2.3)
    for i in range(8):
        a=i/8*math.tau;box('ivory',(x+math.cos(a)*r,y+math.sin(a)*r,height+.5),(.65,.6,.7),a)
# Crown relief above the main arch, no extracted official geometry.
for i in range(5):
    x=(i-2)*.35;z=8.2+(.6 if i%2==0 else .15)
    tube('gold',[(x,-5.64,7.9),(x*1.15,-5.64,z)],[.09,.055],8)
    lathe('gold',(x*1.15,-5.64,z),[(.09,0),(.12,.1),(.06,.2),(0,.23)],12)
box('gold',(0,-5.64,7.9),(1.7,.16,.2))
# Cobble forecourt colonnades and planters, usable hall beyond the arch.
box('stone',(0,4,.08),(12,12,.16));box('wood',(0,8,1),(8,.35,1.8))
for x in [-5,5]:
    for y in [-2,2,6]:lathe('ivory',(x,y,0),[(.42,0),(.42,.35),(.25,.55),(.25,5.8),(.44,5.9),(.44,6.2)],24)
for x in [-6.4,6.4]:
    tube('iron',[(x-.65,-3,11.2),(x+.65,-3,11.2)],[.045,.045],8)
    verts=[];faces=[]
    for row in range(9):
        t=row/8
        for col in range(3):
            s=col/2-.5;verts.append((x+s*.9,-3.1+.08*math.sin(t*4+s),11.1-t*2.8-(.25*abs(s)*2 if row==8 else 0)))
            if row and col:k=row*3+col;faces.append((k,k-1,k-4,k-3))
    geom('cloth',verts,faces)
for side in [-1,1]:
    for x in [side*2.3]:
        r=2.25
        outline=([(-r,0),(0,0),(0,7.3)]+[(math.cos(a)*r,5.05+math.sin(a)*r) for a in [math.pi*.5+i/14*math.pi*.5 for i in range(1,15)]]) if side<0 else ([(0,0),(r,0),(r,5.05)]+[(math.cos(a)*r,5.05+math.sin(a)*r) for a in [i/14*math.pi*.5 for i in range(1,15)]])
        n=len(outline);vertices=[(xx,-4.94+yy,.12+zz) for yy in [-.09,.09] for xx,zz in outline]
        faces=[tuple(range(n)),tuple(range(2*n-1,n-1,-1))]+[(i,i+n,(i+1)%n+n,(i+1)%n) for i in range(n)]
        geom('wood:door_left' if side<0 else 'wood:door_right',vertices,faces)
        for z in [1.5,3.8]:box('iron:door_left' if side<0 else 'iron:door_right',(x*.5,-5.08,z),(2.12,.12,.09))
objects=finish_meshes('castle_',bevel=True)
# Move door mesh origins to their hinges without changing visible position.
for side in ['left','right']:
    group=bpy.data.objects.new('castle_door_'+side,None);bpy.context.collection.objects.link(group);group.location=(-2.3 if side=='left' else 2.3,-4.94,0)
    bpy.context.view_layer.update()
    for o in objects:
        if o.name.endswith('door_'+side):o.parent=group;o.matrix_parent_inverse=group.matrix_world.inverted()
export('castle')

# GARDEN HOUSE with timber framing, layered roof and a small glass orangery.
reset();box('plaster',(0,1.3,2.8),(7,6.6,5.6));box('stone',(0,1.3,.4),(7.4,7,.8));tile_roof(0,1.3,5.65,8,8,3.0,13)
for x in [-3.35,0,3.35]:box('wood',(x,-2.08,2.8),(.18,.22,5.4))
for z in [1.0,3.0,5.4]:box('wood',(0,-2.1,z),(7,.22,.18))
window(-2.1,-2.18,1.7,1.25,2.0);window(2.1,-2.18,1.7,1.25,2.0);arch('ivory',0,-2.25,.1,1.5,3.0,.2,.3)
arched_panel('wood',0,-2.2,.1,1.45,2.9,.16)
for x in [-2.2,2.2]:
    box('wood',(x,-2.48,1.4),(1.8,.65,.45));box('stem',(x,-2.48,1.65),(1.7,.55,.1))
box('stone',(2.3,2.7,7),(1.15,1.1,4));box('ivory',(2.3,2.7,9.1),(1.45,1.4,.25))
for y in [-1,1,3,5]:
    points=[(6+math.cos(a)*2.4,y,1.1+math.sin(a)*3.2) for a in [i/24*math.pi for i in range(25)]];tube('iron',points,[.055]*len(points),6)
for a in [i/8*math.pi for i in range(9)]:tube('iron',[(6+math.cos(a)*2.4,-1,1.1+math.sin(a)*3.2),(6+math.cos(a)*2.4,5,1.1+math.sin(a)*3.2)],[.045,.045],6)
finish_meshes('cottage_',bevel=True);export('cottage')

# FLOWER PAVILION: sculpted petal shells, filigree ribs and a circular dais.
reset();lathe('stone',(0,0,0),[(5.4,0),(5.4,.18),(5.1,.4),(4.9,.45)],64)
lathe('stem',(0,0,.45),[(.95,0),(.9,.25),(.48,.6),(.38,3.6),(.7,4.0)],40)
for petal in range(15):
    upper=petal>=8;a=(petal if not upper else petal-8)/(8 if not upper else 7)*math.tau+(0 if not upper else .3);v=[];uv=[];faces=[]
    for row in range(13):
        t=row/12;length=3.7 if upper else 5.0;rr=.35+t*length;z=4.4+(1.0 if upper else .55)*math.sin(t*math.pi)-t*t*(.4 if upper else 1.15)
        width=(1.65 if upper else 1.95)*math.sin(t*math.pi)**.7+.05
        for col in range(7):
            s=col/6*2-1;x=rr;y=s*width;zz=z+.42*s*s*math.sin(t*math.pi)+.18*math.sin(t*math.pi*2+a)*abs(s)**3
            v.append((x*math.cos(a)-y*math.sin(a),x*math.sin(a)+y*math.cos(a),zz));uv.append((col/6,t))
            if row and col:k=row*7+col;faces.append((k,k-1,k-8,k-7))
    geom('petal',v,faces,uv,color=['#d8abb9','#e2b9c0','#c997ac'][petal%3])
    if not upper:
        tube('gold',[(math.cos(a)*(.35+t*5),math.sin(a)*(.35+t*5),4.4+.55*math.sin(t*math.pi)-t*t*1.15+.03) for t in [i/18 for i in range(19)]],[.025]*19,6)
        r=4.1;tube('stem',[(math.cos(a)*r,math.sin(a)*r,.4),(math.cos(a)*r*1.03,math.sin(a)*r*1.03,2.3),(math.cos(a)*r,math.sin(a)*r,3.8)],[.065,.055,.045],8)
        lathe('gold',(math.cos(a)*r,math.sin(a)*r,3.65),[(.12,0),(.15,.12),(.08,.22),(0,.3)],12)
for i in range(12):
    a=i/12*math.tau;tube('gold',[(0,0,4.4),(math.cos(a)*.7,math.sin(a)*.7,5.2)],[.045,.025],6)
finish_meshes('pavilion_',smooth=True);export('pavilion')

# BOTANICALS: actual curved petals, leaf midribs, flower throats and bent stems.
reset()
for species,height,tint,petals in [('rose',.65,'#d7a0ac',9),('ivory',.48,'#eadfc3',7),('bluebell',.9,'#9c9fbd',6),('golden',.44,'#dac17e',7)]:
    for lod in ['near','far']:
        before=set(batches);key='stem:'+species+'_'+lod;tip=(.055,0,height)
        tube(key,[(0,0,0),(-.025,.01,height*.35),tip],[.012,.01,.007],5 if lod=='near' else 3)
        for i in range(3 if lod=='near' else 1):
            a=i*2.4;z=.15+i*.10;length=.22;v=[(0,0,z),(.10*math.cos(a+.5),.10*math.sin(a+.5),z+.06),(length*math.cos(a),length*math.sin(a),z+.12),(.10*math.cos(a-.5),.10*math.sin(a-.5),z+.06),(.11*math.cos(a),.11*math.sin(a),z+.095)]
            geom(key,v,[(0,1,4),(1,2,4),(2,3,4),(3,0,4)])
        layers=2 if species=='rose' and lod=='near' else 1;rows=5 if lod=='near' else 2;cols=4 if lod=='near' else 2
        for layer in range(layers):
            for i in range(petals):
                a=i/petals*math.tau+layer*.4;length=.20*(1-layer*.3);verts=[];uv=[];faces=[]
                for j in range(rows+1):
                    t=j/rows;spread=length*.47*(.02+math.sin(t*math.pi)**.6)
                    for k in range(cols+1):
                        s=k/cols*2-1;rr=t*length;xx=rr;yy=s*spread;zz=height+.035+math.sin(t*math.pi)*.025+t*t*(.045+layer*.09)+abs(s)**2*.02
                        verts.append((tip[0]+xx*math.cos(a)-yy*math.sin(a),xx*math.sin(a)+yy*math.cos(a),zz));uv.append((k/cols,t))
                        if j and k:b=j*(cols+1)+k;faces.append((b,b-1,b-cols-2,b-cols-1))
                geom('petal:'+species+'_'+lod,verts,faces,uv,tint)
        lathe('pollen:'+species+'_'+lod,tip,[(.042,.015),(.047,.045),(.02,.068),(0,.07)],12 if lod=='near' else 6)
finish_meshes('flower_',smooth=True);export('flowers')

# TREE LIBRARY. Branch paths and canopy clusters are authored here, not taken
# from EZ-Tree or an image-to-3D generator. Matching skeletons are used per LOD.
reset()
for species,seed,height in [('oak',931,16),('willow',143,14),('birch',1127,19)]:
    rand=random.Random(seed);branches=[];clusters=[]
    slim=.62 if species=='birch' else 1
    main=[(0,0,0),(.14,.1,height*.2),(-.15,.25,height*.45),(.5,.1,height*.7),(.2,-.2,height*.97)]
    branches.append((main,[r*slim for r in [.64,.46,.32,.18,.025]]))
    for i in range(7):
        a=i/7*math.tau+.16;l=2.6+rand.random()*1.3
        branches.append(([(0,0,.55),(math.cos(a)*1.1,math.sin(a)*1.1,.22),(math.cos(a)*l,math.sin(a)*l,-.05)],[.34,.21,.025]))
    for i in range(13):
        a=i*2.399+rand.random()*.65;base=height*(.40+i*.026)+rand.uniform(-.45,.45)
        reach=((2.7 if species=='birch' else 5.0)+rand.random()*1.8)*(1-i*.025)
        rise=1.7+rand.random()*2.3
        end=(math.cos(a)*reach,math.sin(a)*reach,base+rise)
        mid=(end[0]*.44,end[1]*.44,base+rise*.48)
        branches.append(([(.1,.12,base),mid,end],[.19*slim*(1-i*.04),.105*slim,.018]))
        clusters.extend([end,tuple(Vector(mid).lerp(Vector(end),.72))])
        for j in range(4):
            b=a+(j-1.5)*.48;span=(.7 if species=='birch' else 1.2)+rand.random()
            tip=(end[0]+math.cos(b)*span,end[1]+math.sin(b)*span,end[2]+(-2.1 if species=='willow' else .5)+rand.random())
            branches.append(([mid,end,tip],[.07,.04,.007]));clusters.append(tip)
            if species=='willow':clusters.append(tuple(Vector(end).lerp(Vector(tip),.6)))
    for lod in ['near','far']:
        for points,radii in branches:
            if lod=='far' and radii[0]<.09:continue
            tube('bark:'+species+'_'+lod,points,radii,9 if lod=='near' else 5)
        cards=[]
        for anchor in clusters:
            for j in range(12):
                spread=.95 if species=='birch' else 1.35
                v=Vector(anchor)+Vector((rand.uniform(-spread,spread),rand.uniform(-spread,spread),rand.uniform(-.9,1.4)))
                cards.append((tuple(v),rand.uniform(.85,1.35),rand.random()*math.tau,rand.uniform(-.9,.9)))
        # Reset random generator for the next LOD so canopy anchors match.
        rand=random.Random(seed+999)
        if lod=='near':saved_cards=cards
        else:cards=saved_cards[::3]
        for pos,size,a,tilt in cards:
            size*=1 if lod=='near' else 1.55
            for cross in [0,math.pi*.5] if lod=='near' else [0]:
                basis=Matrix.Rotation(a+cross,4,'Z')@Matrix.Rotation(tilt,4,'X');v=[Vector(pos)+basis@Vector((x*size,0,z*size)) for x,z in [(-.5,-.5),(.5,-.5),(.5,.5),(-.5,.5)]]
                geom('leaf:'+species+'_'+lod,[tuple(p) for p in v],[(0,1,2,3)],[(0,0),(1,0),(1,1),(0,1)])
objects=finish_meshes('tree_',smooth=True)
for o in objects:
    if '_leaf_' not in o.name:continue
    # Rounded canopy normals soften card lighting while keeping real cutout
    # silhouettes. This survives glTF export as explicit vertex normals.
    normals=[]
    for v in o.data.vertices:n=Vector((v.co.x*.28,v.co.y*.28,(v.co.z-9)*.18+.4));normals.append(tuple(n.normalized()))
    o.data.normals_split_custom_set_from_vertices(normals)
export('trees')

# ANCIENT HOLLOW. Fuse the authored irregular tube network, carve the cavity,
# remesh it and prune detached voxel chips before final UV mapping.
reset()
main=[(0,0,-.3),(.2,.1,2.5),(-.25,.2,6),(.1,.7,10),(.7,.4,14),(1,.7,18)]
tube('bark',main,[3.2,2.6,2.1,1.65,1.2,.35],36)
for i in range(11):
    a=i/11*math.tau
    if math.sin(a)<-.75:continue
    tube('bark',[(0,0,1.1),(math.cos(a)*3,math.sin(a)*3,.5),(math.cos(a)*6.3,math.sin(a)*6.3,-.18)],[.95,.55,.025],12)
for i in range(8):
    a=i*2.4;z=7+i*.9;tube('bark',[(0,.2,z),(math.cos(a)*3,math.sin(a)*3,z+1),(math.cos(a)*6,math.sin(a)*6,z+4)],[.65,.38,.035],12)
trunk=finish_meshes('hollow_',smooth=True)[0];bpy.context.view_layer.objects.active=trunk;trunk.select_set(True)
def apply(obj,m):bpy.context.view_layer.objects.active=obj;bpy.ops.object.modifier_apply(modifier=m.name)
m=trunk.modifiers.new('Fuse sculpted roots and boughs','REMESH');m.mode='VOXEL';m.voxel_size=.13;apply(trunk,m)
m=trunk.modifiers.new('Soften root junctions','SMOOTH');m.factor=.7;m.iterations=3;apply(trunk,m)
bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=28,location=(0,-1.8,2.3));cut=bpy.context.object;cut.scale=(1.65,3.1,3.3)
m=trunk.modifiers.new('Carve open heartwood','BOOLEAN');m.object=cut;m.operation='DIFFERENCE';m.solver='EXACT';apply(trunk,m);bpy.data.objects.remove(cut,do_unlink=True)
m=trunk.modifiers.new('Clean sculpt topology','REMESH');m.mode='VOXEL';m.voxel_size=.13;apply(trunk,m)
m=trunk.modifiers.new('Browser silhouette budget','DECIMATE');m.ratio=.32;apply(trunk,m)
bm=bmesh.new();bm.from_mesh(trunk.data);unseen=set(bm.verts);components=[]
while unseen:
    start=unseen.pop();c={start};q=[start]
    while q:
        v=q.pop()
        for e in v.link_edges:
            n=e.other_vert(v)
            if n in unseen:unseen.remove(n);c.add(n);q.append(n)
    components.append(c)
largest=max(components,key=len);bmesh.ops.delete(bm,geom=[v for c in components if c is not largest for v in c],context='VERTS');bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(trunk.data);bm.free()
for f in trunk.data.polygons:f.use_smooth=True
uv=trunk.data.uv_layers.active or trunk.data.uv_layers.new(name='UVMap')
for p in trunk.data.polygons:
    angles=[math.atan2(trunk.data.vertices[trunk.data.loops[i].vertex_index].co.y,trunk.data.vertices[trunk.data.loops[i].vertex_index].co.x)/math.tau for i in p.loop_indices]
    if max(angles)-min(angles)>.5:angles=[a+1 if a<0 else a for a in angles]
    for i,a in zip(p.loop_indices,angles):uv.data[i].uv=(a*6,trunk.data.vertices[trunk.data.loops[i].vertex_index].co.z*.45)
export('hollow')

# FURNISHINGS, each named prop exported in a single source library.
reset()
for i in range(3):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=3,radius=1)
    o=bpy.context.object;o.name='prop_rock_'+str(i);o.data.materials.append(materials['stone'])
    for v in o.data.vertices:
        p=v.co;scale=1+.13*math.sin(p.x*5+i)*math.cos(p.y*4+p.z*3);p.x*=scale*(1+i*.13);p.y*=scale*.8;p.z*=scale*.63
    for p in o.data.polygons:p.use_smooth=True
    bpy.context.view_layer.objects.active=o;bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(island_margin=.02);bpy.ops.object.mode_set(mode='OBJECT')
for key in ['bench','lantern','fountain','arch','bell']:
    batches={}
    if key=='bench':
        for j in range(5):box('wood',(0,j*.12-.25,.55),(2.4,.10,.09))
        for z in [.8,1.03,1.26]:box('wood',(0,.32,z),(2.4,.08,.14))
        for x in [-.9,.9]:
            tube('iron',[(x,-.25,.03),(x,-.2,.65),(x,.34,.67),(x,.38,1.35)],[.045]*4,8)
            tube('iron',[(x,-.12,.8),(x,.23,.8)],[.035,.035],8)
    elif key=='lantern':
        lathe('iron',(0,0,0),[(.19,0),(.2,.12),(.08,.2),(.045,2.8),(.10,2.85)],16)
        lathe('gold',(0,0,2.77),[(.24,0),(.3,.15),(.3,.58),(.21,.65)],6)
        lathe('iron',(0,0,3.4),[(.39,0),(.05,.36),(0,.44)],6)
        for i in range(6):a=i/6*math.tau;box('iron',(math.cos(a)*.29,math.sin(a)*.29,3.15),(.025,.025,.64))
        lathe('window',(0,0,2.94),[(.22,0),(.22,.4)],6)
    elif key=='fountain':
        for profile in [[(3,0),(3,.15),(2.8,.32),(2.8,.6),(2.6,.6)],[(.7,0),(.8,.2),(.45,.5),(.25,2.5),(.65,2.65)],[(1.45,2.45),(1.5,2.65),(1.35,2.85),(.15,2.85)]]:lathe('ivory',(0,0,0),profile,48)
        lathe('gold',(0,0,2.8),[(.25,0),(.12,.5),(.35,.85),(.1,1.05),(0,1.15)],24)
    elif key=='arch':
        arch('stone',0,0,0,4.8,6.3,.6,1.2)
        for x in [-2.75,2.75]:
            for z in [.2,1.5,2.8]:box('ivory',(x,0,z),(1.45,1.7,.2))
    elif key=='bell':
        lathe('gold',(0,0,0),[(.6,0),(.6,.1),(.42,.2),(.3,.65),(.15,.75),(0,.8)],32)
        tube('wood',[(-1,0,1.2),(1,0,1.2)],[.12,.12],8)
    finish_meshes('prop_'+key+'_',smooth=key in ['fountain','bell'],bevel=True)
export('props')

# Bake original architectural surface materials from Blender node graphs.
reset();bpy.ops.mesh.primitive_plane_add(size=4);plane=bpy.context.object
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=4;scene.cycles.device='CPU';scene.render.bake.margin=8
scene.render.bake.use_pass_direct=False;scene.render.bake.use_pass_indirect=False;scene.render.bake.use_pass_color=True
for name,c1,c2,scale in [('stone','#605e54','#bcb8a5',7),('plaster','#b4a98f','#e4d8b9',4),('roof','#754137','#bd7154',13),('soil','#393322','#7d7050',9),('wood','#403125','#92795a',6)]:
    m=bpy.data.materials.new('Baked '+name);m.use_nodes=True;plane.data.materials.clear();plane.data.materials.append(m);n=m.node_tree.nodes;l=m.node_tree.links;p=n.get('Principled BSDF')
    coord=n.new('ShaderNodeTexCoord');noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=scale;noise.inputs['Detail'].default_value=5;noise.inputs['Roughness'].default_value=.72;l.new(coord.outputs['UV'],noise.inputs[0])
    fine=n.new('ShaderNodeTexNoise');fine.inputs['Scale'].default_value=160;fine.inputs['Detail'].default_value=2;l.new(coord.outputs['UV'],fine.inputs[0])
    ramp=n.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].color=(*rgb(c1),1);ramp.color_ramp.elements[1].color=(*rgb(c2),1);l.new(noise.outputs['Fac'],ramp.inputs[0]);l.new(ramp.outputs[0],p.inputs['Base Color'])
    bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.45;bump.inputs['Distance'].default_value=.035;l.new(fine.outputs['Fac'],bump.inputs['Height']);l.new(bump.outputs[0],p.inputs['Normal']);p.inputs['Roughness'].default_value=.92
    for kind in ['DIFFUSE','NORMAL']:
        image=bpy.data.images.new(name+' '+kind,width=512,height=512);image.colorspace_settings.name='sRGB' if kind=='DIFFUSE' else 'Non-Color';node=n.new('ShaderNodeTexImage');node.image=image;n.active=node
        bpy.context.view_layer.objects.active=plane;plane.select_set(True);bpy.ops.object.bake(type=kind);image.filepath_raw=str(TEX/(name+('-color.png' if kind=='DIFFUSE' else '-normal.png')));image.file_format='PNG';image.save();n.remove(node)
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'material-library.blend'))
for record in records:
    path=WORK/(record['id']+'.blend');bpy.ops.wm.open_mainfile(filepath=str(path));bind_preview();bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(path))
manifest={'version':1,'units':'metres','generator':'Blender authored meshes; no image/text-to-3D models','assets':records,'textures':[{'file':'textures/'+p.name,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size} for p in sorted(TEX.iterdir()) if p.is_file()]}
(OUT/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('HANDMADE_WORLD',json.dumps({'assets':len(records),'triangles':sum(r['triangles'] for r in records)}))
