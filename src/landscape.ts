import * as T from 'three';
import { createMaterials, seeded } from './materials';
import { Vegetation } from './vegetation';
import { WORLD_SITES } from './world-sites';
import { WORLD_REGIONS, REGION_BY_ID } from './world-atlas';
import { WORLD_BOUNDS, WORLD_ROADS, alpineHeight, closestRegion, landscapeHeight, terrainHeight, roadDistance, smooth } from './world-layout';

/** Shared terrain and roads are independent of the currently visited district. */
export class ConnectedLandscape {
  readonly group=new T.Group();
  readonly vegetation=new Vegetation(8417);
  private materials=createMaterials();
  private terrainTiles:T.Mesh[]=[];
  private lights:T.PointLight[]=[];
  constructor(){
    this.group.name='connected-world-landscape';
    const mat=new T.MeshStandardMaterial({vertexColors:true,roughness:1,bumpMap:this.materials.ground.bumpMap,bumpScale:.1});
    mat.bumpMap=mat.bumpMap!.clone();mat.bumpMap.repeat.setScalar(1);
    const green=new T.Color(0x628349),gold=new T.Color(0x7b8f53),forest=new T.Color(0x455b43),snow=new T.Color(0xd9e6eb),rock=new T.Color(0x687780);
    for(let tx=WORLD_BOUNDS.minX;tx<WORLD_BOUNDS.maxX;tx+=120)for(let tz=WORLD_BOUNDS.minZ;tz<WORLD_BOUNDS.maxZ;tz+=120){
      const width=Math.min(120,WORLD_BOUNDS.maxX-tx),depth=Math.min(120,WORLD_BOUNDS.maxZ-tz);
      const g=new T.PlaneGeometry(width,depth,Math.ceil(width/3),Math.ceil(depth/3));g.rotateX(-Math.PI/2);g.translate(tx+width/2,0,tz+depth/2);
      const p=g.attributes.position,uv=g.attributes.uv,colors:number[]=[];
      for(let i=0;i<p.count;i++){
        const x=p.getX(i),z=p.getZ(i),h=landscapeHeight(x,z);p.setY(i,h);uv.setXY(i,x/3,z/3);
        const patch=(Math.sin(x*.073+Math.sin(z*.057))*Math.cos(z*.052)+1)*.5;
        const c=green.clone().lerp(gold,patch*.5);
        const cold=(1-smooth(54,145,Math.hypot(x,(z+202)*.7)));
        const dark=Math.max(1-smooth(35,135,Math.hypot(x+360,z+180)),(1-smooth(35,100,Math.hypot(x-180,z-180)))*.6);
        c.lerp(forest,dark*.6).lerp(snow,cold);
        const elevation=alpineHeight(x,z);if(elevation>7)c.lerp(rock,smooth(7,24,elevation)*(1-smooth(38,49,elevation))).lerp(snow,smooth(31,51,elevation));
        c.multiplyScalar(.95+Math.sin(x*2.31+z*3.78)*.035);colors.push(c.r,c.g,c.b);
      }
      g.setAttribute('color',new T.Float32BufferAttribute(colors,3));g.computeVertexNormals();
      const mesh=new T.Mesh(g,mat);mesh.name='shared terrain tile';mesh.receiveShadow=true;this.group.add(mesh);this.terrainTiles.push(mesh);
    }
    this.buildRoads();this.plantCountryside();this.group.add(this.vegetation.group);
  }
  private buildRoads(){
    const path=this.materials.path.clone();path.map=path.map!.clone();path.map.repeat.setScalar(1);path.bumpMap=path.bumpMap!.clone();path.bumpMap.repeat.setScalar(1);path.polygonOffset=true;path.polygonOffsetFactor=-1;
    const edge=this.materials.lightStone;
    const positions:number[]=[],uv:number[]=[],indices:number[]=[];
    for(const road of WORLD_ROADS){
      for(let j=1;j<road.points.length;j++){
        const a=road.points[j-1],b=road.points[j],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),nx=-dz/len,nz=dx/len;
        const n=Math.ceil(len/2.5),base=positions.length/3;
        for(let k=0;k<=n;k++)for(const side of [-1,1]){const x=a[0]+dx*k/n+nx*side*2.7,z=a[1]+dz*k/n+nz*side*2.7;positions.push(x,terrainHeight(x,z)+.045,z);uv.push(side<0?0:1,k/n*len/5.4);}
        for(let k=0;k<n;k++){const v=base+k*2;indices.push(v,v+1,v+2,v+1,v+3,v+2);}
      }
      // Roadside fingerposts stand clear of the walking surface.
      for(const end of [0,road.points.length-1]){
        const p=road.points[end],next=road.points[end===0?1:end-1],dx=next[0]-p[0],dz=next[1]-p[1],l=Math.hypot(dx,dz);
        const x=p[0]+dx/l*18-dz/l*4.8,z=p[1]+dz/l*18+dx/l*4.8;
        this.signpost(x,z,REGION_BY_ID[end===0?road.b:road.a].name,Math.atan2(dx,dz));
      }
      const points=road.points;
      for(let j=1;j<points.length;j++){
        const a=points[j-1],b=points[j],len=Math.hypot(b[0]-a[0],b[1]-a[1]);
        if(len<35)continue;
        const x=(a[0]+b[0])/2-(b[1]-a[1])/len*4.5,z=(a[1]+b[1])/2+(b[0]-a[0])/len*4.5;
        this.lantern(x,z);
      }
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();
    const mesh=new T.Mesh(g,path);mesh.name='continuous inter-district roads';mesh.receiveShadow=true;this.group.add(mesh);
    // A pale paved edge marks the castle's side exits without intersecting its garden hedges.
    for(const side of [-1,1]){const m=new T.Mesh(new T.BoxGeometry(31,.12,.18),edge);m.position.set(side*29,.04,13.85);this.group.add(m);}
  }
  private signpost(x:number,z:number,label:string,rotation:number){
    const group=new T.Group();group.position.set(x,terrainHeight(x,z),z);group.rotation.y=rotation;
    const post=new T.Mesh(new T.CylinderGeometry(.13,.19,3.1,8),this.materials.darkWood);post.position.y=1.55;post.castShadow=true;group.add(post);
    const canvas=document.createElement('canvas');canvas.width=768;canvas.height=192;
    const c=canvas.getContext('2d')!;c.fillStyle='#384d43';c.fillRect(0,0,768,192);c.strokeStyle='#d9c28a';c.lineWidth=5;c.strokeRect(9,9,750,174);
    c.font='bold 67px sans-serif';c.fillStyle='#f7e4b8';c.textAlign='center';c.textBaseline='middle';c.fillText(`${label} →`,384,99,715);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
    const board=new T.Mesh(new T.BoxGeometry(4,.99,.16),this.materials.wood);board.position.y=2.7;group.add(board);
    const face=new T.Mesh(new T.PlaneGeometry(3.94,.94),new T.MeshStandardMaterial({map:texture,roughness:.9,side:T.DoubleSide}));face.position.set(0,2.7,.087);group.add(face);
    const back=face.clone();back.rotation.y=Math.PI;back.position.z=-.087;group.add(back);this.group.add(group);
  }
  private lantern(x:number,z:number){
    const y=terrainHeight(x,z),g=new T.Group();g.position.set(x,y,z);
    const pole=new T.Mesh(new T.CylinderGeometry(.08,.14,3.7,7),this.materials.iron);pole.position.y=1.85;g.add(pole);
    const cap=new T.Mesh(new T.ConeGeometry(.55,.6,4),this.materials.iron);cap.position.y=4.4;g.add(cap);
    const glow=new T.Mesh(new T.BoxGeometry(.45,.7,.45),this.materials.window);glow.position.y=3.8;g.add(glow);
    const light=new T.PointLight(0xffbd6e,0,17,2);light.position.y=3.8;g.add(light);this.lights.push(light);this.group.add(g);
  }
  private plantCountryside(){
    const rand=seeded(494);let count=0;
    for(let i=0;i<2100&&count<230;i++){
      const x=-470+rand()*940,z=-365+rand()*675;
      const nearest=closestRegion(x,z),distance=Math.max(Math.abs(x-nearest.worldPosition[0]),Math.abs(z-nearest.worldPosition[2]));
      if(WORLD_SITES.some(site=>Math.hypot(x-site.position[0],z-site.position[1])<35)||distance<48||roadDistance(x,z)<6||alpineHeight(x,z)>8)continue;
      const h=terrainHeight(x,z);if(h<-.5)continue;
      const snow=z<-135&&Math.abs(x)<105;
      this.vegetation.addTree(x,h,z,.8+rand()*.9,snow?'pine':i%5===0?'birch':'oak');count++;
      if(!snow&&count%3===0)this.vegetation.addMeadow(x+2,h,z+2,3.6,24);
    }
    // Wildflowers and low grass along the actual connecting roads.
    for(const road of WORLD_ROADS)for(let j=1;j<road.points.length;j++){
      const a=road.points[j-1],b=road.points[j],len=Math.hypot(b[0]-a[0],b[1]-a[1]);
      for(let d=10;d<len;d+=10)for(const side of [-1,1]){
        const x=a[0]+(b[0]-a[0])*d/len-(b[1]-a[1])/len*side*5.8,z=a[1]+(b[1]-a[1])*d/len+(b[0]-a[0])/len*side*5.8;
        if(z<-125&&Math.abs(x)<100)continue;
        const nearest=closestRegion(x,z);if(Math.max(Math.abs(x-nearest.worldPosition[0]),Math.abs(z-nearest.worldPosition[2]))<43)continue;
        const y=terrainHeight(x,z);this.vegetation.addMeadow(x,y,z,2.7,20);if(rand()>.6)this.vegetation.addFlowerPatch(x,y,z,1.5,12);
      }
    }
    this.vegetation.finalize();
    // Weathered outcrops use instancing and stay outside roads and inhabited courtyards.
    const geo=new T.DodecahedronGeometry(1,1),mat=new T.MeshStandardMaterial({color:0x718073,roughness:.98,bumpMap:this.materials.plaster.bumpMap,bumpScale:.16});
    const rocks=new T.InstancedMesh(geo,mat,180),dummy=new T.Object3D();let n=0;
    for(let i=0;i<1600&&n<180;i++){
      const x=-470+rand()*940,z=-370+rand()*690,r=closestRegion(x,z);
      if(WORLD_SITES.some(site=>Math.hypot(x-site.position[0],z-site.position[1])<35)||Math.max(Math.abs(x-r.worldPosition[0]),Math.abs(z-r.worldPosition[2]))<48||roadDistance(x,z)<7)continue;
      dummy.position.set(x,terrainHeight(x,z)-.2,z);dummy.rotation.set(rand(),rand()*6,rand());dummy.scale.set(1+rand()*2,.5+rand()*1.6,1+rand()*2);dummy.updateMatrix();rocks.setMatrixAt(n++,dummy.matrix);
    }
    rocks.count=n;rocks.castShadow=rocks.receiveShadow=true;rocks.computeBoundingSphere();this.group.add(rocks);
  }
  async load(){await this.vegetation.loadAssets();}
  update(t:number,daylight:number,x:number,z:number){
    this.vegetation.update(t);this.materials.window.emissiveIntensity=.25+(1-daylight)*2;
    // Only nearby local lights participate in lighting; the full world stays resident.
    for(const light of this.lights){const p=light.parent!.position;light.visible=Math.hypot(p.x-x,p.z-z)<45;light.intensity=(1-daylight)*7;}
  }
}
