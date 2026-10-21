import * as T from 'three';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';

/** Contact shading at a bounded resolution; foliage cutouts retain their own shadows. */
export class ManorAO extends GTAOPass {
  constructor(scene: T.Scene, camera: T.PerspectiveCamera) {
    super(scene, camera, 640, 480);
    this.blendIntensity=.62;
    this.updateGtaoMaterial({radius:1.1,thickness:.65,scale:1.1,samples:12,screenSpaceRadius:false});
    this.updatePdMaterial({radius:6,samples:8,rings:2});
    // Three r180 overrides every mesh with one normal material. Exclude sky,
    // translucent water and alpha-cut leaf cards from that depth-only draw.
    // They still appear in the normal beauty pass and cast their real shadows.
    const internals=this as unknown as {_overrideVisibility:()=>void;_visibilityCache:T.Object3D[]};
    const original=internals._overrideVisibility.bind(this);
    internals._overrideVisibility=()=>{
      original();
      scene.traverse(object=>{
        if(!object.visible)return;
        const mesh=object as T.Mesh;
        const materials=mesh.isMesh ? (Array.isArray(mesh.material)?mesh.material:[mesh.material]) : [];
        if(object.userData.excludeFromAO || object instanceof T.Sprite || materials.some(m=>m.transparent || m.alphaTest>0)){
          object.visible=false;internals._visibilityCache.push(object);
        }
      });
    };
  }
  override setSize(width:number,height:number){
    const ratio=Math.min(.65,960/width);
    super.setSize(Math.ceil(width*ratio),Math.ceil(height*ratio));
  }
}
