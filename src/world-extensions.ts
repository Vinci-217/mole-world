import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createMaterials, seeded, radialTexture } from './materials';
import { terrainHeight as landscapeHeight } from './world-layout';
import { WORLD_SITES, WORLD_TRAILS, type WorldSite } from './world-sites';
import { Vegetation } from './vegetation';

/** Outdoor submaps are physical places adjoining the main districts, not new scenes. */
export class WorldExtensions {
  readonly group=new T.Group();
  readonly nature=new Vegetation(9051);
  readonly collisions:{x:number;z:number;w:number;d:number}[]=[];
  private m=createMaterials();
  private random=seeded(9051);
  private batches=new Map<T.Material,T.BufferGeometry[]>();
  private waterfalls:T.Mesh<T.PlaneGeometry,T.ShaderMaterial>[]=[];
  private spray:T.Points[]=[];
  private naturalRock=new T.MeshStandardMaterial({color:0x78867a,roughness:.97,bumpMap:this.m.plaster.bumpMap,bumpScale:.22,vertexColors:true});
  private water=new T.MeshPhysicalMaterial({color:0x3d9299,roughness:.19,metalness:.12,clearcoat:1,clearcoatRoughness:.13,transparent:true,opacity:.9});
  private ice=new T.MeshPhysicalMaterial({color:0xa7d1db,roughness:.13,metalness:.18,clearcoat:1,transparent:true,opacity:.93});
  constructor(){
    this.group.name='walkable outdoor submaps';
    for(const site of WORLD_SITES){
      const [x,z]=site.position,y=landscapeHeight(x,z);
      if(site.kind==='falls')this.falls(x,y,z);
      if(site.kind==='spring')this.spring(x,y,z);
      if(site.kind==='passage')this.passage(x,y,z);
      if(site.kind==='rink')this.rink(x,y,z);
      if(site.kind==='summit')this.summit(x,y,z);
      if(site.kind==='sports')this.sports(x,y,z);
      if(site.kind==='training')this.training(x,y,z);
      if(site.kind==='race')this.race(x,y,z);
      this.sign(site,x-6,landscapeHeight(x-6,z+12),z+12);
      // Real model canopies frame these destinations at human scale.
      if(site.kind!=='summit'&&site.kind!=='race')for(let i=0;i<11;i++){
        const a=i/11*Math.PI*2,r=site.kind==='sports'?32:24,tx=x+Math.cos(a)*r,tz=z+Math.sin(a)*r;
        if(i>1&&i<5)continue;
        this.nature.addTree(tx,landscapeHeight(tx,tz),tz,.8+this.random()*.55,site.kind==='rink'?'pine':i%4===0?'birch':'oak');
      }
    }
    this.trails();this.flush();this.nature.finalize();this.group.add(this.nature.group);
  }
  private add(geometry:T.BufferGeometry,material:T.Material,x:number,y:number,z:number,rotation=0){geometry.rotateY(rotation);geometry.translate(x,y,z);if(!this.batches.has(material))this.batches.set(material,[]);this.batches.get(material)!.push(geometry);}
  private box(x:number,y:number,z:number,w:number,h:number,d:number,material:T.Material=this.m.wood,rotation=0){this.add(new T.BoxGeometry(w,h,d),material,x,y,z,rotation);}
  private cylinder(x:number,y:number,z:number,rt:number,rb:number,h:number,material:T.Material=this.m.stone){this.add(new T.CylinderGeometry(rt,rb,h,24),material,x,y,z);}
  private rock(x:number,y:number,z:number,sx:number,sy:number,sz:number){const g=new T.IcosahedronGeometry(1,2);const p=g.attributes.position;for(let i=0;i<p.count;i++){const a=1+Math.sin(p.getX(i)*8+p.getY(i)*11+p.getZ(i)*7)*.1;p.setXYZ(i,p.getX(i)*a,p.getY(i)*a,p.getZ(i)*a);}g.scale(sx,sy,sz);g.rotateY(this.random()*6);this.colourRock(g);g.computeVertexNormals();this.add(g,this.naturalRock,x,y,z);}
  private colourRock(g:T.BufferGeometry){const p=g.attributes.position,colors:number[]=[];for(let i=0;i<p.count;i++){const shade=.7+(Math.sin(p.getX(i)*2.1+p.getZ(i)*1.8)*.5+.5)*.25;colors.push(shade,shade+.025,shade-.015);}g.setAttribute('color',new T.Float32BufferAttribute(colors,3));}
  private beam(a:T.Vector3,b:T.Vector3,w:number,material:T.Material=this.m.wood){const g=new T.CylinderGeometry(w,w,a.distanceTo(b),8);g.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),b.clone().sub(a).normalize()));const p=a.clone().add(b).multiplyScalar(.5);this.add(g,material,p.x,p.y,p.z);}
  private circle(x:number,y:number,z:number,rx:number,rz:number,material:T.Material){const g=new T.CircleGeometry(1,64);g.rotateX(-Math.PI/2);g.scale(rx,1,rz);this.add(g,material,x,y,z);}
  private falls(x:number,y:number,z:number){
    const cliff=new T.BoxGeometry(38,16,10,48,24,12),cp=cliff.attributes.position;
    for(let i=0;i<cp.count;i++){
      const px=cp.getX(i),py=cp.getY(i),pz=cp.getZ(i),noise=Math.sin(px*.71+py*.5)*Math.cos(py*.93+pz*.7)*.6+Math.sin(px*1.73-py*1.18)*.24;
      cp.setXYZ(i,px+noise*.35,py+(py>6?Math.sin(px*.4)*.8:noise*.3),pz+noise-(Math.abs(px)<5&&py>6?2:0));
    }
    this.colourRock(cliff);cliff.computeVertexNormals();this.add(cliff,this.naturalRock,x,y+8,z-10);
    this.collisions.push({x,z:z-10,w:39,d:11});
    for(let i=0;i<15;i++){const px=x-18+this.random()*36,pz=z-5+this.random()*4;if(Math.abs(px-x)<5)continue;this.rock(px,y+.7,pz,1.4+this.random()*1.7,.6+this.random(),1.3+this.random());}
    this.circle(x,y+.12,z+3,14,10,this.water);this.collisions.push({x,z:z+2,w:24,d:17});
    const material=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,uniforms:{time:{value:0}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 v;uniform float time;void main(){float ribbons=sin(v.x*92.+sin(v.y*20.-time*3.)*2.)*.5+.5;float foam=pow(sin(v.y*58.+time*9.)*.5+.5,6.);float edge=smoothstep(0.,.12,v.x)*smoothstep(0.,.12,1.-v.x);vec3 c=mix(vec3(.19,.54,.62),vec3(.83,.96,.94),ribbons*.6+foam*.4);gl_FragColor=vec4(c,edge*.74);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`});
    const curtain=new T.Mesh(new T.PlaneGeometry(9,16,20,24),material);curtain.position.set(x,y+8.2,z-3.5);this.group.add(curtain);this.waterfalls.push(curtain);
    const positions=new Float32Array(300*3);for(let i=0;i<300;i++){positions[i*3]=x+(this.random()-.5)*14;positions[i*3+1]=y+.8+this.random()*3;positions[i*3+2]=z-4+this.random()*5;}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(positions,3));const mist=new T.Points(g,new T.PointsMaterial({map:radialTexture(),color:0xd8f4ee,size:.9,transparent:true,opacity:.15,depthWrite:false}));mist.userData.origin=[x,y,z];this.group.add(mist);this.spray.push(mist);
    // Fine coloured arcs are an understated rainbow above the waterfall mist.
    for(let j=0;j<7;j++){const points:T.Vector3[]=[];for(let i=0;i<=60;i++){const a=i/60*Math.PI;points.push(new T.Vector3(x+Math.cos(a)*(12+j*.15),y+3+Math.sin(a)*(10+j*.15),z+1));}const line=new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:[0xe98586,0xe9b67e,0xe0d690,0x9fc898,0x84c4d0,0x9cace0,0xc9a6d7][j],transparent:true,opacity:.18}));this.group.add(line);}
    for(const side of [-1,1])for(let i=0;i<4;i++)this.rock(x+side*(12+i),y+.1,z+6+i,2,.9,1.8);
  }
  private spring(x:number,y:number,z:number){
    this.circle(x,y+.08,z,10,8,this.water);this.collisions.push({x,z,w:17,d:13});
    const blue=new T.MeshStandardMaterial({color:0x67cbd0,emissive:0x2d9ca7,emissiveIntensity:.35,roughness:.25,metalness:.12});
    for(let i=0;i<16;i++){const a=i/16*Math.PI*2;this.rock(x+Math.cos(a)*10.8,y+.4,z+Math.sin(a)*8.8,1.8,1.1,1.8);if(i%4===0){this.cylinder(x+Math.cos(a)*12,y+2,z+Math.sin(a)*10,.65,1,4);this.cylinder(x+Math.cos(a)*12,y+4.15,z+Math.sin(a)*10,.9,.9,.3,this.m.gold);}}
    for(let i=0;i<5;i++){const a=i*2.4;const g=new T.OctahedronGeometry(1.1,0);g.scale(.6,2,.6);this.add(g,blue,x+Math.sin(a)*2,y+1,z+Math.cos(a)*2);}
    this.nature.addMeadow(x-15,y,z+8,7,150);this.nature.addFlowerPatch(x+12,y,z+8,4,55);
  }
  private passage(x:number,y:number,z:number){
    for(let i=0;i<9;i++){
      const pz=z-12+i*3.2;for(const side of [-1,1]){this.nature.addTree(x+side*5,landscapeHeight(x+side*5,pz),pz,1.2,'oak-detailed');if(i%2===0)this.rock(x+side*4,y+.4,pz,1,.6,1.3);}
      const a=new T.Vector3(x-4,landscapeHeight(x-4,pz)+1,pz),b=new T.Vector3(x-1,landscapeHeight(x-1,pz)+5.7,pz),c=new T.Vector3(x+4,landscapeHeight(x+4,pz)+1,pz);if(i%3===0){this.beam(a,b,.35);this.beam(b,c,.35);}
    }
    for(let i=0;i<12;i++){const side=i%2?1:-1,px=x+side*(2.8+this.random()),pz=z-12+this.random()*23,h=landscapeHeight(px,pz);this.cylinder(px,h+.4,pz,.1,.16,.8,this.m.plaster);const cap=new T.MeshStandardMaterial({color:i%2?0x9c63a0:0xbe5961,roughness:.7,emissive:0x533663,emissiveIntensity:.12});this.add(new T.SphereGeometry(.7,16,8,0,Math.PI*2,0,Math.PI/2),cap,px,h+.7,pz);}
  }
  private rink(x:number,y:number,z:number){
    this.circle(x,y+.035,z,19,12,this.ice);const snow=new T.MeshStandardMaterial({color:0xe4eef1,roughness:.88});
    for(let i=0;i<52;i++){const a=i/52*Math.PI*2,px=x+Math.cos(a)*20,pz=z+Math.sin(a)*13,h=landscapeHeight(px,pz);if(pz>z+10&&Math.abs(px-x)<5)continue;this.box(px,h+.5,pz,2.2,.6,.5,snow,-a);}
    for(const side of [-1,1]){this.box(x+side*24,y+.8,z,4,.2,9);for(const dz of [-3,3])this.box(x+side*24,y+.4,z+dz,.3,.8,.5,this.m.iron);}
    const scratches=new T.LineBasicMaterial({color:0xe1f6fa,transparent:true,opacity:.32});
    for(let j=0;j<16;j++){const points:T.Vector3[]=[];for(let i=0;i<35;i++){const a=i/35*1.8+j;points.push(new T.Vector3(x+Math.cos(a)*(5+j*.5),y+.065,z+Math.sin(a)*(3+j*.25)));}this.group.add(new T.Line(new T.BufferGeometry().setFromPoints(points),scratches));}
  }
  private summit(x:number,y:number,z:number){
    this.rock(x,y-2,z,6,2.2,6);this.cylinder(x,y+.12,z,4,4,.4,this.m.lightStone);
    for(let i=0;i<16;i++){const a=i/16*Math.PI*2;if(i>2&&i<7)continue;const px=x+Math.cos(a)*4,pz=z+Math.sin(a)*4;this.box(px,y+.8,pz,.15,1.4,.15,this.m.iron);if(i<15){const b=(i+1)/16*Math.PI*2;this.beam(new T.Vector3(px,y+1.4,pz),new T.Vector3(x+Math.cos(b)*4,y+1.4,z+Math.sin(b)*4),.06,this.m.iron);}}
    this.cylinder(x-2,y+2.4,z, .075,.1,4.8,this.m.gold);this.box(x-.5,y+4,z,2.8,1.25,.08,new T.MeshStandardMaterial({color:0xb84b45}),.15);
    this.cylinder(x+1.4,y+1.2,z-1,.1,.18,2.4,this.m.iron);const scope=new T.CylinderGeometry(.25,.35,1.6,16);scope.rotateX(Math.PI/2-.25);this.add(scope,this.m.gold,x+1.4,y+2.3,z-1);
  }
  private sports(x:number,y:number,z:number){
    const field=new T.MeshStandardMaterial({color:0x719452,roughness:1});this.box(x,y+.015,z,36,.06,25,field);
    for(const dx of [-17,17])this.box(x+dx,y+.06,z,.1,.03,23,this.m.plaster);for(const dz of [-11.5,11.5])this.box(x,y+.06,z+dz,34,.03,.1,this.m.plaster);
    this.box(x,y+.065,z,.12,.025,23,this.m.plaster);const ring=new T.TorusGeometry(3,.055,6,48);ring.rotateX(Math.PI/2);this.add(ring,this.m.plaster,x,y+.07,z);
    for(const side of [-1,1]){
      for(const dz of [-4,4])this.box(x+side*17,y+1.65,z+dz,.15,3.3,.15,this.m.plaster);
      this.box(x+side*17,y+3.3,z,.15,.15,8.2,this.m.plaster);
      for(let dz=-4;dz<=4;dz+=.5)this.beam(new T.Vector3(x+side*17,y+3.3,z+dz),new T.Vector3(x+side*20,y+.1,z+dz),.018,this.m.plaster);
      for(let row=0;row<3;row++){this.box(x,y+row*.4+.3,z+side*(16+row),28,.35,1.1);}
    }
    this.add(new T.IcosahedronGeometry(.4,1),this.m.plaster,x+5,y+.45,z+2);
  }
  private training(x:number,y:number,z:number){
    const dirt=new T.MeshStandardMaterial({color:0x9c8960,roughness:1});this.box(x,y,z,37,.06,29,dirt);
    for(const side of [-1,1]){
      for(let i=0;i<5;i++){const pz=z-12+i*6;this.box(x+side*20,y+1,pz,.25,2,.25);}
      for(const h of [.7,1.4])this.beam(new T.Vector3(x+side*20,y+h,z-13),new T.Vector3(x+side*20,y+h,z+13),.09);
    }
    for(const dx of [-12,0,12]){
      this.box(x+dx,y+1.5,z-7,.2,3,.2);this.box(x+dx,y+2.4,z-7,2.3,.2,.2);
      const g=new T.CylinderGeometry(1.3,1.3,.3,32);g.rotateX(Math.PI/2);this.add(g,this.m.plaster,x+dx,y+2.6,z-6.8);
      const red=new T.MeshStandardMaterial({color:0xa54238,roughness:.8});for(const r of [.85,.45]){const ring=new T.TorusGeometry(r,.12,6,32);this.add(ring,red,x+dx,y+2.6,z-6.61);}this.collisions.push({x:x+dx,z:z-7,w:2.8,d:1});
    }
    for(const dx of [-8,8]){this.cylinder(x+dx,y+.75,z+6,.6,.6,1.5,this.m.canvas);this.box(x+dx,y+1.8,z+6,.15,1,.15);this.box(x+dx,y+1.6,z+6,2,.12,.12);}
    for(let i=0;i<5;i++){this.box(x-18+i*.6,y+1.2,z+10,.08,2.4,.12,this.m.iron);this.box(x-18+i*.6,y+.7,z+10,.55,.1,.14,this.m.gold);}
  }
  private race(x:number,y:number,z:number){
    const dark=new T.MeshStandardMaterial({color:0x4d5551,roughness:.92});
    const p:number[]=[],uv:number[]=[],idx:number[]=[];
    for(let i=0;i<=128;i++)for(const r of [1,.73]){const a=i/128*Math.PI*2,px=x+Math.sin(a)*34*r,pz=z+Math.cos(a)*20*r;p.push(px,landscapeHeight(px,pz)+.05,pz);uv.push(r,i/128*15);}
    for(let i=0;i<128;i++){const j=i*2;idx.push(j,j+2,j+1,j+1,j+2,j+3);}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();const mesh=new T.Mesh(g,dark);mesh.receiveShadow=true;this.group.add(mesh);
    for(let i=0;i<48;i++){const a=i/48*Math.PI*2;for(const r of [1.02,.71]){const px=x+Math.sin(a)*34*r,pz=z+Math.cos(a)*20*r;this.box(px,landscapeHeight(px,pz)+.15,pz,2,.25,.8,i%2?this.m.plaster:this.m.roof,a);}}
    for(let i=0;i<8;i++)this.box(x-4+i,y+.09,z+16.8,1,.05,1.3,i%2?this.m.plaster:this.m.iron);
    for(const dx of [-5,5])this.box(x+dx,y+3.5,z+18,.25,7,.25,this.m.iron);this.box(x,y+6.5,z+18,11,1,.6,this.m.roof);
    // Parked kart with four rubber wheels and a small steering wheel.
    this.box(x+16,y+.7,z,2.3,.5,3.7,this.m.roof);this.box(x+16,y+1.1,z-.5,1.4,.6,1.1,this.m.darkWood);
    for(const dx of [-1.2,1.2])for(const dz of [-1.2,1.2]){const wheel=new T.CylinderGeometry(.5,.5,.35,16);wheel.rotateZ(Math.PI/2);this.add(wheel,this.m.iron,x+16+dx,y+.45,z+dz);}
  }
  private trails(){
    const mat=this.m.path.clone();mat.map=mat.map!.clone();mat.map.repeat.setScalar(1);mat.bumpMap=mat.bumpMap!.clone();mat.bumpMap.repeat.setScalar(1);
    const positions:number[]=[],uv:number[]=[],indices:number[]=[];
    for(const trail of WORLD_TRAILS)for(let i=1;i<trail.points.length;i++){
      const a=trail.points[i-1],b=trail.points[i],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),n=Math.ceil(len),base=positions.length/3;
      for(let j=0;j<=n;j++)for(const side of [-1,1]){const x=a[0]+dx*j/n-dz/len*side*1.6,z=a[1]+dz*j/n+dx/len*side*1.6;positions.push(x,landscapeHeight(x,z)+.06,z);uv.push(side<0?0:1,j/n*len/3.2);}
      for(let j=0;j<n;j++){const k=base+j*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const mesh=new T.Mesh(g,mat);mesh.receiveShadow=true;this.group.add(mesh);
  }
  private sign(site:WorldSite,x:number,y:number,z:number){
    const c=document.createElement('canvas');c.width=768;c.height=192;const ctx=c.getContext('2d')!;
    ctx.fillStyle='#345246';ctx.fillRect(0,0,768,192);ctx.strokeStyle='#d9c591';ctx.lineWidth=6;ctx.strokeRect(9,9,750,174);ctx.fillStyle='#f6e5be';ctx.font='bold 62px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(site.name,384,98,710);
    const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const mat=new T.MeshStandardMaterial({map:texture,roughness:.9,side:T.FrontSide});
    this.box(x,y+1.3,z,.16,2.6,.16,this.m.darkWood);const mesh=new T.Mesh(new T.PlaneGeometry(5,1.25),mat);mesh.position.set(x,y+2.5,z+.012);this.group.add(mesh);const back=mesh.clone();back.rotation.y=Math.PI;back.position.z=z-.012;this.group.add(back);
  }
  private flush(){for(const [m,list] of this.batches){const normalized=list.map(g=>g.index?g.toNonIndexed():g),merged=mergeGeometries(normalized,false);if(merged){const mesh=new T.Mesh(merged,m);mesh.castShadow=mesh.receiveShadow=true;this.group.add(mesh);}list.forEach(g=>g.dispose());normalized.forEach(g=>g.dispose());}this.batches.clear();}
  async load(){await this.nature.loadAssets();}
  update(time:number){this.nature.update(time);for(const waterfall of this.waterfalls)waterfall.material.uniforms.time.value=time;for(const mist of this.spray){const p=mist.geometry.attributes.position,origin=mist.userData.origin as number[];for(let i=0;i<p.count;i++)p.setY(i,origin[1]+.4+((time*.5+i*.018)%1)*2.5);p.needsUpdate=true;}}
}
