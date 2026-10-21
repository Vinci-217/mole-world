import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const clay = (color: number, roughness = .68) => new T.MeshStandardMaterial({color, roughness});

/** Original meshes interpreting the browser game's rounded mole / Ram forms. */
export class CourtyardLife {
  readonly group = new T.Group();
  readonly villagers: {root:T.Group; arms:T.Group[]; feet:T.Group[]; phase:number; route:boolean}[] = [];
  readonly rams: T.Group[] = [];
  private readonly face = clay(0xfff1cb);
  private readonly nose = clay(0xd93938, .26);
  private readonly eyes = clay(0x292a2a, .2);
  private readonly light = clay(0xffffff, .3);

  constructor(ramsOnly=false) {
    if(!ramsOnly){
      this.mole(-7, 11, 0xe4aa45, 0x5987b1, false, .45);
      this.mole(7, 13, 0xe89a8c, 0x829e64, false, -.7);
      this.mole(3, 17, 0xcb8357, 0xa86757,  true, .25);
      this.mole(-6, -16, 0xeab466, 0xb7453d, false, 0, true);
      this.mole(6, -16, 0xeab466, 0xb7453d, false, 0, true);
    }
    this.ram(-9, 12, 0xa4c765, 0);
    this.ram(9, 13.5, 0xe7b771, 2);
    this.ram(-16, -1, 0xb1a4d3, 4);
  }

  private sphere(parent:T.Object3D, radius:number, material:T.Material, position:[number,number,number], scale:[number,number,number]=[1,1,1]) {
    const mesh = new T.Mesh(new T.SphereGeometry(radius,24,16),material);mesh.position.set(...position);mesh.scale.set(...scale);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }

  private mole(x:number,z:number,color:number,clothes:number,route:boolean,angle:number,guard=false) {
    const root = new T.Group();root.position.set(x,.1,z);root.rotation.y=angle;root.scale.setScalar(1.4);this.group.add(root);
    const skin=clay(color),cloth=clay(clothes),shoes=clay(0x5a4438),gold=clay(0xd4aa50,.4);
    this.sphere(root,.42,cloth,[0,.64,0],[.94,1.12,.7]);
    this.sphere(root,.49,skin,[0,1.43,0],[1.04,.98,.85]);
    this.sphere(root,.405,this.face,[0,1.35,.23],[1.05,.75,.6]);
    this.sphere(root,.17,this.nose,[0,1.4,.49],[1,1,.9]);
    for(const side of [-1,1]) {
      this.sphere(root,.065,this.eyes,[side*.19,1.56,.39],[.72,1.2,.48]);
      this.sphere(root,.016,this.light,[side*.19-.014,1.58,.419]);
    }
    const smile = new T.Mesh(new T.TorusGeometry(.115,.012,5,20,Math.PI),this.eyes);smile.position.set(0,1.24,.46);smile.rotation.z=Math.PI;root.add(smile);
    const arms:T.Group[]=[],feet:T.Group[]=[];
    for(const side of [-1,1]) {
      const arm=new T.Group();arm.position.set(side*.38,.83,0);root.add(arm);arms.push(arm);
      this.sphere(arm,.14,cloth,[side*.1,-.15,0],[.9,1.4,1]);
      this.sphere(arm,.14,skin,[side*.12,-.37,.02]);
      const foot=new T.Group();foot.position.set(side*.2,.19,.04);root.add(foot);feet.push(foot);
      this.sphere(foot,.18,shoes,[0,-.03,.08],[.88,.7,1.35]);
    }
    if(guard) {
      this.sphere(root,.51,gold,[0,1.72,-.03],[1,.65,.9]);
      this.sphere(root,.13,this.nose,[0,2.05,-.04],[.55,1.5,.6]);
      const belt=new T.Mesh(new T.CylinderGeometry(.41,.41,.08,24),gold);belt.position.y=.6;root.add(belt);
      const spear=new T.Mesh(new T.CylinderGeometry(.022,.022,2.1,8),clay(0x6d523c));spear.position.set(.69,1.1,0);root.add(spear);
      const tip=new T.Mesh(new T.ConeGeometry(.09,.28,6),gold);tip.position.set(.69,2.26,0);root.add(tip);
    } else {
      // Short cowlicks and a simple cloth collar keep the familiar big-head silhouette.
      for(let i=0;i<3;i++)this.sphere(root,.11,skin,[(i-1)*.11,1.91+(.1-Math.abs(i-1)*.06),-.02],[.48,1.3,.7]);
      const button=new T.Mesh(new T.SphereGeometry(.035,8,8),gold);button.position.set(0,.81,.3);root.add(button);
    }
    this.villagers.push({root,arms,feet,phase:this.villagers.length*1.4,route});
    this.batchDirectChildren(root);
  }

  private ram(x:number,z:number,color:number,phase:number) {
    const root=new T.Group();root.position.set(x,1.3,z);root.userData={x,z,phase};root.scale.setScalar(1.1);this.group.add(root);
    const body=clay(color,.38),leaf=clay(0x6a9b43,.6);
    this.sphere(root,.36,body,[0,0,0],[1,.78,.9]);
    for(const side of [-1,1]) {
      this.sphere(root,.14,this.light,[side*.12,.02,.28],[.8,1,.4]);
      this.sphere(root,.06,this.eyes,[side*.12,.02,.33],[.75,1,.3]);
      this.sphere(root,.16,leaf,[side*.22,.45,-.01],[1.5,.44,.7]);
    }
    this.sphere(root,.05,this.nose,[0,-.14,.31],[1,.65,.4]);
    const stem=new T.Mesh(new T.CylinderGeometry(.024,.03,.27,8),leaf);stem.position.y=.29;stem.rotation.z=.15;root.add(stem);
    this.rams.push(root);
    this.batchDirectChildren(root);
  }

  private batchDirectChildren(root:T.Group) {
    const batches=new Map<T.Material,T.BufferGeometry[]>();const meshes:T.Mesh[]=[];
    for(const child of root.children){
      if(!(child instanceof T.Mesh)||Array.isArray(child.material))continue;
      child.updateMatrix();const clone=child.geometry.clone().applyMatrix4(child.matrix);const geo=clone.index?clone.toNonIndexed():clone;if(geo!==clone)clone.dispose();
      if(!batches.has(child.material))batches.set(child.material,[]);batches.get(child.material)!.push(geo);meshes.push(child);
    }
    for(const mesh of meshes){root.remove(mesh);mesh.geometry.dispose();}
    for(const [material,geometries] of batches){const combined=mergeGeometries(geometries,false);if(combined){const mesh=new T.Mesh(combined,material);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}for(const geo of geometries)geo.dispose();}
  }

  update(time:number) {
    for(const v of this.villagers) {
      if(v.route) {v.root.position.set(Math.sin(time*.055)*6,.1,14+Math.cos(time*.055)*3);v.root.rotation.y=Math.atan2(Math.cos(time*.055)*.33,-Math.sin(time*.055)*.165);}
      const motion=v.route?Math.sin(time*3.4):Math.sin(time*.9+v.phase)*.09;
      v.arms.forEach((arm,i)=>arm.rotation.x=motion*(i===0?1:-1)*.45);
      v.feet.forEach((foot,i)=>foot.rotation.x=v.route?motion*(i===0?-1:1)*.3:0);
    }
    for(const r of this.rams) {const {x,z,phase}=r.userData;r.position.set(x+Math.sin(time*.4+phase)*.35,1.25+Math.sin(time*1.5+phase)*.15,z+Math.cos(time*.3+phase)*.25);r.rotation.y=Math.sin(time*.25+phase)*.4;}
  }
}
