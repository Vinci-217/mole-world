import * as T from 'three';
import { EstateWorld, destinations } from './world';
import { createRegionScene, type RegionScene } from './region-scenes';
import { Vegetation } from './vegetation';
import { WORLD_REGIONS, REGION_BY_ID, regionWorldPosition, type RegionId } from './world-atlas';
import { seeded } from './materials';
import { CourtyardLife } from './mole-life';
import { ConnectedLandscape } from './landscape';
import { WorldExtensions } from './world-extensions';
import { WORLD_SITES } from './world-sites';
import { WORLD_BOUNDS, closestRegion, terrainHeight as landscapeHeight, roadDistance, type MapPoint } from './world-layout';

type District={id:RegionId;region:RegionScene;nature:Vegetation;meshes:number;triangles:number};
/** All districts share one scene and one coordinate system. Travel only changes the player. */
export class WorldExplorer {
  activeId:RegionId='castle';
  loading=false;
  readonly landscape=new ConnectedLandscape();
  readonly extensions=new WorldExtensions();
  readonly districts=new Map<RegionId,District>();
  private regionalLife=new CourtyardLife(true);
  private navigationCost=new Map<number,number>();
  constructor(private scene:T.Scene,private castle:EstateWorld){scene.add(this.landscape.group,this.extensions.group);}
  get loadedRegions(){return ['castle',...this.districts.keys()];}
  get destination(){return this.destinationFor(this.activeId);}
  destinationFor(id:RegionId){
    if(id==='castle')return destinations[0];
    const r=this.districts.get(id)!.region,origin=REGION_BY_ID[id].worldPosition;
    return {name:r.name,description:r.description,position:regionWorldPosition(id,r.camera),target:regionWorldPosition(id,r.target),walk:[r.spawn[0]+origin[0],r.spawn[1]+origin[2]] as [number,number]};
  }
  get meshCount(){let n=0;this.districts.get(this.activeId)?.region.group.traverse(o=>{if(o instanceof T.Mesh)n++;});return n;}
  get sceneMeshCount(){return this.districts.get(this.activeId)?.meshes??0;}
  get sceneTriangleCount(){return this.districts.get(this.activeId)?.triangles??0;}
  async loadWorld(onProgress:(text:string)=>void){
    this.loading=true;
    try{
      await this.landscape.load();await this.extensions.load();
      for(const entry of WORLD_REGIONS){
        if(entry.id==='castle')continue;
        onProgress(`正在连接${entry.name} · ${this.districts.size+2} / 12`);
        const region=createRegionScene(entry.id,true)!;
        let meshes=0,triangles=0;
        region.group.traverse(o=>{if(o instanceof T.Mesh){meshes++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;}});
        const nature=this.plantRegion(entry.id,region);await nature.loadAssets();region.group.add(nature.group);
        region.group.position.set(...entry.worldPosition);this.scene.add(region.group);
        this.districts.set(entry.id,{id:entry.id,region,nature,meshes,triangles});
        // Allow the loading indicator to paint while building the resident world.
        await new Promise<void>(resolve=>setTimeout(resolve,0));
      }
      this.castle.setCourtyardVisible(true);
    }finally{this.loading=false;}
  }
  async travel(id:RegionId){if(!this.loadedRegions.includes(id))throw new Error(`World district unavailable: ${id}`);this.setActive(id);}
  private setActive(id:RegionId){
    if(id===this.activeId)return;
    this.activeId=id;this.regionalLife.group.removeFromParent();
    this.districts.get(id)?.region.group.add(this.regionalLife.group);
  }
  private plantRegion(id:RegionId,region:RegionScene){
    const entry=REGION_BY_ID[id],biome=entry.biome,[ox,,oz]=entry.worldPosition;
    const height=(x:number,z:number)=>landscapeHeight(ox+x,oz+z);
    const nature=new Vegetation(873+id.length*17),random=seeded(810+id.length*19);
    for(const tree of region.heroTrees??[])nature.addTree(tree.x,height(tree.x,tree.z),tree.z,tree.scale,'oak-detailed');
    const count=biome==='forest'?68:biome==='snow'?42:biome==='town'?36:42;
    for(let i=0;i<count;i++){
      const angle=i/count*Math.PI*2+random()*.18,r=49+random()*33,x=Math.cos(angle)*r,z=Math.sin(angle)*r;
      if(WORLD_SITES.some(site=>Math.hypot(ox+x-site.position[0],oz+z-site.position[1])<30)||roadDistance(ox+x,oz+z)<6||id==='mystery-lake'&&Math.sin(angle)>.15)continue;
      nature.addTree(x,height(x,z),z,(biome==='forest'?1.1:.7)+random()*.6,biome==='snow'?'pine':i%5===0?'birch':'oak');
    }
    for(const x of [-38,38])for(const z of [-33,-7,23,36]){
      if(WORLD_SITES.some(site=>Math.hypot(ox+x-site.position[0],oz+z-site.position[1])<30)||roadDistance(ox+x,oz+z)<5||id==='mystery-lake'&&(x>0||region.canMove?.(x,z)===false))continue;
      if(region.collisions.some(c=>Math.abs(x-c.x)<c.w/2+3&&Math.abs(z-c.z)<c.d/2+3))continue;
      nature.addTree(x,height(x,z),z,.9+random()*.35,biome==='snow'?'pine':'oak');region.collisions.push({x,z,w:.8,d:.8});
    }
    // Human-scale planting closes the canopy and gives inhabited lawns a foreground.
    const closeTrees=id==='berry-jungle'?[[-9,16],[-11,-4],[15,-14],[15,40]]:id==='black-forest'?[[-9,15],[10,22],[-12,-5],[12,-26]]:id==='taotao-street'?[[-12,27],[12,27],[-8,-28],[8,-28]]:[];
    for(const [x,z] of closeTrees){
      if(region.canMove?.(x,z)===false||region.collisions.some(c=>Math.abs(x-c.x)<c.w/2+1&&Math.abs(z-c.z)<c.d/2+1))continue;
      nature.addTree(x,height(x,z),z,biome==='forest'?1.5:.7,'oak-detailed');region.collisions.push({x,z,w:.65,d:.65});
      nature.addMeadow(x,height(x,z),z,3.3,95);nature.addFlowerPatch(x,height(x,z),z,2.3,24);
    }
    if(biome!=='snow')for(const x of [-13,13,-30,30])for(const z of [-1,19]){
      if(region.canMove?.(x,z)===false||region.collisions.some(c=>Math.abs(x-c.x)<c.w/2+2&&Math.abs(z-c.z)<c.d/2+2)||roadDistance(ox+x,oz+z)<5)continue;
      nature.addMeadow(x,height(x,z),z,3.7,85);
    }
    if(biome!=='snow')for(let i=0;i<34;i++){
      const angle=random()*Math.PI*2,r=34+random()*11,x=Math.cos(angle)*r,z=Math.sin(angle)*r;
      if(roadDistance(ox+x,oz+z)<4||region.canMove?.(x,z)===false)continue;
      nature.addMeadow(x,height(x,z),z,2.5,38);if(i%3===0)nature.addFlowerPatch(x,height(x,z),z,1.3,15);
    }
    nature.finalize();return nature;
  }
  canMove(x:number,z:number){
    if(x<WORLD_BOUNDS.minX+3||x>WORLD_BOUNDS.maxX-3||z<WORLD_BOUNDS.minZ+3||z>WORLD_BOUNDS.maxZ-3)return false;
    if(!this.castle.canMove(x,z))return false;
    if(this.extensions.collisions.some(c=>Math.abs(x-c.x)<c.w/2+.35&&Math.abs(z-c.z)<c.d/2+.35))return false;
    for(const {id,region} of this.districts.values()){
      const origin=REGION_BY_ID[id].worldPosition,lx=x-origin[0],lz=z-origin[2];
      if(Math.abs(lx)>85||Math.abs(lz)>85)continue;
      if(region.canMove?.(lx,lz)===false)return false;
      if(region.collisions.some(c=>Math.abs(lx-c.x)<c.w/2+.35&&Math.abs(lz-c.z)<c.d/2+.35))return false;
    }
    return true;
  }
  heightAt(x:number,z:number){
    if(Math.abs(x)<55&&Math.abs(z)<55)return this.castle.heightAt(x,z);
    const lake=this.districts.get('mystery-lake')?.region;
    if(lake&&Math.abs(x-360)<45&&Math.abs(z-180)<45){const h=lake.heightAt(x-360,z-180);if(h>0)return h+.14;}
    return landscapeHeight(x,z)+.14;
  }
  /** Collision-aware A* over the persistent world, strongly preferring paved roads. */
  route(from:MapPoint,to:MapPoint):MapPoint[]{
    const step=2,cols=Math.ceil((WORLD_BOUNDS.maxX-WORLD_BOUNDS.minX)/step)+1,rows=Math.ceil((WORLD_BOUNDS.maxZ-WORLD_BOUNDS.minZ)/step)+1;
    const point=(key:number):MapPoint=>[WORLD_BOUNDS.minX+(key%cols)*step,WORLD_BOUNDS.minZ+Math.floor(key/cols)*step];
    const key=(p:MapPoint)=>Math.round((p[1]-WORLD_BOUNDS.minZ)/step)*cols+Math.round((p[0]-WORLD_BOUNDS.minX)/step);
    const start=key(from),goal=key(to),g=new Map<number,number>([[start,0]]),parent=new Map<number,number>(),closed=new Set<number>();
    const heap:{key:number;f:number}[]=[];
    const push=(v:{key:number;f:number})=>{let i=heap.push(v)-1;while(i>0){const p=(i-1)>>1;if(heap[p].f<=v.f)break;heap[i]=heap[p];i=p;}heap[i]=v;};
    const pop=()=>{const top=heap[0],v=heap.pop()!;if(heap.length){let i=0;while(i*2+1<heap.length){let c=i*2+1;if(c+1<heap.length&&heap[c+1].f<heap[c].f)c++;if(heap[c].f>=v.f)break;heap[i]=heap[c];i=c;}heap[i]=v;}return top;};
    const cost=(k:number)=>{
      if(this.navigationCost.has(k))return this.navigationCost.get(k)!;
      const [x,z]=point(k);let c=Infinity;
      if(this.canMove(x,z)){
        const region=closestRegion(x,z),d=Math.max(Math.abs(x-region.worldPosition[0]),Math.abs(z-region.worldPosition[2]));
        c=d<43?1.8:1+Math.min(16,roadDistance(x,z)*2);
      }
      this.navigationCost.set(k,c);return c;
    };
    push({key:start,f:0});let found=false;
    while(heap.length&&closed.size<110000){
      const current=pop().key;if(closed.has(current))continue;if(current===goal){found=true;break;}closed.add(current);
      const cx=current%cols,cz=Math.floor(current/cols);
      for(const [dx,dz] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]){
        const nx=cx+dx,nz=cz+dz;if(nx<0||nx>=cols||nz<0||nz>=rows)continue;
        const next=nz*cols+nx;if(closed.has(next))continue;
        const c=cost(next);if(!Number.isFinite(c))continue;
        if(dx&&dz&&(!Number.isFinite(cost(cz*cols+nx))||!Number.isFinite(cost(nz*cols+cx))))continue;
        const cp=point(current),np=point(next);if([.25,.5,.75].some(t=>!this.canMove(cp[0]+(np[0]-cp[0])*t,cp[1]+(np[1]-cp[1])*t)))continue;
        const candidate=g.get(current)!+Math.hypot(dx,dz)*step*c;
        if(candidate>=(g.get(next)??Infinity))continue;
        g.set(next,candidate);parent.set(next,current);const p=point(next);push({key:next,f:candidate+Math.hypot(p[0]-to[0],p[1]-to[1])});
      }
    }
    if(!found)return [];
    const path:MapPoint[]=[to];let k=goal;while(k!==start){path.push(point(k));k=parent.get(k)!;}path.push(from);path.reverse();
    // Remove collinear grid nodes, retaining turns and collision clearance.
    return path.filter((p,i)=>i===0||i===path.length-1||Math.abs((p[0]-path[i-1][0])*(path[i+1][1]-p[1])-(p[1]-path[i-1][1])*(path[i+1][0]-p[0]))>.01);
  }
  groundClearance(position:T.Vector3){
    const ray=new T.Raycaster(new T.Vector3(position.x,3000,position.z),new T.Vector3(0,-1,0));
    const tiles=this.landscape.group.children.filter(o=>o.name==='shared terrain tile');
    const hit=ray.intersectObjects(tiles,false)[0];return hit?position.y-hit.point.y:null;
  }
  inspectRoute(points:MapPoint[]){
    let blockedSamples=0,distance=0;for(let i=1;i<points.length;i++){
      const a=points[i-1],b=points[i],length=Math.hypot(b[0]-a[0],b[1]-a[1]);distance+=length;
      for(let j=0;j<=Math.ceil(length/.25);j++){const t=j/Math.max(1,Math.ceil(length/.25));if(!this.canMove(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t))blockedSamples++;}
    }
    return {blockedSamples,distance,waypoints:points.length};
  }
  update(t:number,dt:number,daylight:number,x:number,z:number,overview=false){
    if(!this.loading)this.setActive(closestRegion(x,z).id);
    for(const district of this.districts.values()){
      const origin=REGION_BY_ID[district.id].worldPosition,distance=Math.hypot(x-origin[0],z-origin[2]);
      // Visibility culling does not unload scenes or change their positions.
      district.region.group.visible=overview||distance<440;
      district.nature.group.visible=overview||distance<205;
      district.region.update?.(t,dt,daylight,x-origin[0],z-origin[2]);if(overview||distance<220)district.nature.update(t);
    }
    this.castle.setCourtyardVisible(overview||Math.hypot(x,z)<440);
    this.regionalLife.update(t);this.extensions.update(t);this.landscape.update(t,daylight,x,z);
  }
}
