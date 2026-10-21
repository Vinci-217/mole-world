import * as T from 'three';
import { EstateWorld, destinations } from './world';
import { createRegionScene, disposeRegionScene, regionGroundHeight, type RegionScene } from './region-scenes';
import { Vegetation } from './vegetation';
import { REGION_BY_ID, type RegionId } from './world-atlas';
import { seeded } from './materials';
import { CourtyardLife } from './mole-life';

/** Only the current district is resident, while the detailed castle stays cached. */
export class WorldExplorer {
  activeId:RegionId='castle';
  loading=false;
  private region:RegionScene|null=null;
  private nature:Vegetation|null=null;
  private structuralMeshes=0;
  private structuralTriangles=0;
  private regionalLife=new CourtyardLife(true);
  constructor(private scene:T.Scene,private castle:EstateWorld){}

  get destination(){
    return this.region ? {name:this.region.name,description:this.region.description,position:this.region.camera,target:this.region.target,walk:this.region.spawn} : destinations[0];
  }
  get meshCount(){let count=0;this.region?.group.traverse(o=>{if(o instanceof T.Mesh)count++;});return count;}
  get sceneMeshCount(){return this.structuralMeshes;}
  get sceneTriangleCount(){return this.structuralTriangles;}
  async travel(id:RegionId){
    if(this.loading || id===this.activeId)return;
    this.loading=true;
    let next:RegionScene|null=null;let vegetation:Vegetation|null=null;let meshes=0,triangles=0;
    try{
      if(id!=='castle'){
        next=createRegionScene(id);
        if(!next)throw new Error(`Unknown world region: ${id}`);
        next.group.traverse(object=>{
          if(!(object instanceof T.Mesh))return;
          meshes++;
          if(object.name!=='walkable terrain')triangles+=(object.geometry.index?.count??object.geometry.attributes.position.count)/3;
        });
        vegetation=this.plantRegion(id,next);
        await vegetation.loadAssets();
        next.group.add(vegetation.group);
      }
      this.regionalLife.group.removeFromParent();
      if(this.region){this.region.group.removeFromParent();this.nature?.dispose();disposeRegionScene(this.region);}
      this.region=next;this.nature=vegetation;this.activeId=id;
      this.structuralMeshes=meshes;this.structuralTriangles=triangles;
      this.castle.setCourtyardVisible(id==='castle');
      if(next){next.group.add(this.regionalLife.group);this.scene.add(next.group);}
    }catch(error){vegetation?.dispose();if(next)disposeRegionScene(next);throw error;}
    finally{this.loading=false;}
  }
  private plantRegion(id:RegionId,region:RegionScene){
    const biome=REGION_BY_ID[id].biome;
    const nature=new Vegetation(873+id.length*17);
    const random=seeded(810+id.length*19);
    for(const tree of region.heroTrees??[])nature.addTree(tree.x,regionGroundHeight(tree.x,tree.z),tree.z,tree.scale,'oak-detailed');
    const count=biome==='forest'?68:biome==='snow'?42:biome==='town'?36:42;
    for(let i=0;i<count;i++){
      const angle=i/count*Math.PI*2+random()*.18;
      const r=49+random()*33;
      // Keep the arrival route and the lake's open view free of trees.
      if(id==='mystery-lake'&&Math.sin(angle)>.15)continue;
      const x=Math.cos(angle)*r,z=Math.sin(angle)*r;
      nature.addTree(x,regionGroundHeight(x,z),z,(biome==='forest'?1.1:.7)+random()*.6,biome==='snow'?'pine':i%5===0?'birch':'oak');
    }
    // Frame the inhabited area with nearby canopies, avoiding buildings/water.
    for(const x of [-38,38])for(const z of [-33,-7,23,36]){
      if(id==='mystery-lake'&&(x>0||region.canMove?.(x,z)===false))continue;
      if(region.collisions.some(c=>Math.abs(x-c.x)<c.w/2+3&&Math.abs(z-c.z)<c.d/2+3))continue;
      const scale=.9+random()*.35;
      nature.addTree(x,regionGroundHeight(x,z),z,scale,biome==='snow'?'pine':'oak');
      region.collisions.push({x,z,w:.8,d:.8});
    }
    if(biome!=='snow')for(let i=0;i<34;i++){
      const angle=random()*Math.PI*2,r=34+random()*11;
      nature.addMeadow(Math.cos(angle)*r,-.13,Math.sin(angle)*r,2.5,38);
      if(i%3===0)nature.addFlowerPatch(Math.cos(angle)*r,-.13,Math.sin(angle)*r,1.3,15);
    }
    nature.finalize();return nature;
  }
  canMove(x:number,z:number){
    if(!this.region)return this.castle.canMove(x,z);
    return Math.abs(x)<this.region.bounds && Math.abs(z)<this.region.bounds && (this.region.canMove?.(x,z)??true) && !this.region.collisions.some(c=>Math.abs(x-c.x)<c.w/2+.35&&Math.abs(z-c.z)<c.d/2+.35);
  }
  heightAt(x:number,z:number){return this.region ? this.region.heightAt(x,z)+.14 : this.castle.heightAt(x,z);}
  update(t:number,dt:number){this.region?.update?.(t,dt);this.nature?.update(t);if(this.region)this.regionalLife.update(t);}
}
