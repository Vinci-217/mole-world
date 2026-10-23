import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { brookX, flowerGroundHeight as h, flowerLayout, insideCottage, gardenRoutes, gardenBridges, routeDistance } from './flower-terrain';
import { createMeadowPlantings } from './flower-meadows';
import { flowerParticleMaterial } from './flower-particles';
import { finishGardenMaterial } from './flower-materials';
import {loadWoodlandAssets,woodlandFloor,type WoodlandSpecies} from './woodland-assets';

const seededRandom=(n:number)=>()=>{n=(Math.imul(n,1664525)+1013904223)|0;return(n>>>0)/4294967296;};
const leafGeometry=(length=1,width=.22)=>{
  const g=new T.BufferGeometry();
  g.setAttribute('position',new T.Float32BufferAttribute([0,0,0,-width,.3*length,.025*length,-width*.8,.7*length,.10*length,0,length,.17*length,width*.8,.7*length,.10*length,width,.3*length,.025*length,0,.48*length,.14*length],3));
  g.setIndex([0,1,6,1,2,6,2,3,6,3,4,6,4,5,6,5,0,6]);g.computeVertexNormals();return g;
};
function roundedPetal(length:number,width:number){
  const positions:number[]=[],indices:number[]=[];
  for(let row=0;row<=5;row++){
    const t=row/5,spread=width*(.035+Math.pow(Math.sin(t*Math.PI),.72));
    for(let col=0;col<=2;col++){
      const s=col-1;
      positions.push(s*spread,t*length,(Math.sin(t*Math.PI)*.14+t*t*.13+(1-s*s)*.08)*length);
    }
    if(row<5)for(let col=0;col<2;col++){
      const a=row*3+col;indices.push(a,a+1,a+3,a+1,a+4,a+3);
    }
  }
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}
function tinted(g:T.BufferGeometry,color:T.ColorRepresentation){
  let geometry=g.index?g.toNonIndexed():g;geometry.deleteAttribute('uv');
  const c=new T.Color(color),colors=[];
  for(let i=0;i<geometry.attributes.position.count;i++)colors.push(c.r,c.g,c.b);
  geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));return geometry;
}
export function fernGeometry(){
  const parts:T.BufferGeometry[]=[];
  for(let frond=0;frond<3;frond++){
    const angle=frond*Math.PI*2/3;
    const curve=new T.CatmullRomCurve3([new T.Vector3(),new T.Vector3(0,.28,.20),new T.Vector3(0,.40,.48),new T.Vector3(0,.32,.72)]);
    const spine=new T.TubeGeometry(curve,6,.008,4,false);spine.rotateY(angle);parts.push(tinted(spine,'#6e8a47'));
    for(let row=0;row<6;row++)for(const side of [-1,1]){
      const t=.13+row*.14,point=curve.getPoint(t),direction=new T.Vector3(side*.8,.15,.35).normalize();
      const edge=new T.Vector3().crossVectors(direction,new T.Vector3(0,1,0)).normalize();
      const normal=new T.Vector3().crossVectors(edge,direction).normalize();
      const leaf=leafGeometry(.23*(1-t*.65),.045*(1-t*.55));
      leaf.applyMatrix4(new T.Matrix4().makeBasis(edge,direction,normal));leaf.translate(point.x,point.y,point.z);leaf.rotateY(angle);
      parts.push(tinted(leaf,row%2?'#6e944b':'#567f3e'));
    }
  }
  const geometry=mergeGeometries(parts)!;parts.forEach(part=>part.dispose());return geometry;
}

export function createFlowerGarden(scene:T.Scene){
  const rnd=seededRandom(918362),woodlandTime={value:0};
  const woodlandReady=loadWoodlandAssets(woodlandTime);
  const stats={trees:0,butterflies:0,reusedFlowerClumps:0};
  const root=new T.Group();root.name='layered-garden-environment';scene.add(root);
  const dummy=new T.Object3D(),color=new T.Color();
  const groundGeometry=new T.PlaneGeometry(flowerLayout.terrain.width,flowerLayout.terrain.depth,220,260);groundGeometry.rotateX(-Math.PI/2);groundGeometry.translate(0,0,flowerLayout.terrain.centerZ);
  const p=groundGeometry.attributes.position,colors=[];
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i),y=h(x,z);p.setY(i,y);
    const mottling=.38+.22*Math.sin(x*.38+z*.3)+.13*Math.cos(x*.87-z*.61);
    color.set('#4d6544').lerp(new T.Color('#9fa968'),T.MathUtils.clamp(mottling+y*.025,0,1));
    color.lerp(new T.Color('#bdc28a'),.22*Math.exp(-((x-12)**2/100+(z-2)**2/60)));
    color.lerp(new T.Color('#639c92'),T.MathUtils.clamp((Math.hypot(x,z*.9)-42)/36,0,1)*.65);
    if(routeDistance(x,z)<1.2)color.lerp(new T.Color('#a6a17a'),.35);
    colors.push(color.r,color.g,color.b);
  }
  groundGeometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));groundGeometry.computeVertexNormals();
  const earth=new T.MeshStandardMaterial({vertexColors:true,roughness:1});
  const terrain=new T.Mesh(groundGeometry,earth);terrain.receiveShadow=true;root.add(terrain);
  const meadowLoaded=woodlandReady.then(assets=>{terrain.material=woodlandFloor(groundGeometry,assets,'meadow');earth.dispose();});

  const pathMaterial=new T.MeshStandardMaterial({color:'#b5aa82',roughness:.95,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  pathMaterial.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec2 pathUv;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\npathUv=uv;');
    shader.fragmentShader='varying vec2 pathUv;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      diffuseColor.a*=smoothstep(0.,.16,pathUv.x)*smoothstep(0.,.16,1.-pathUv.x);
      diffuseColor.rgb*=.96+.035*sin(pathUv.y*91.+sin(pathUv.x*18.));`);
  };
  for(const route of gardenRoutes){
    const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z)));const vertices=[],uv=[],indices=[];
    for(let i=0;i<=150;i++){
      const t=i/150,point=curve.getPoint(t),tangent=curve.getTangent(t),side=new T.Vector3(-tangent.z,0,tangent.x).normalize();
      for(const s of [-1,1]){
        const width=.7+.12*Math.sin(i*.41)+.08*Math.sin(i*.93);
        const x=point.x+side.x*s*width,z=point.z+side.z*s*width;
        vertices.push(x,h(x,z)+.027,z);uv.push(s*.5+.5,t*28);
      }
      if(i<150){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();
    const ribbon=new T.Mesh(g,pathMaterial);ribbon.receiveShadow=true;root.add(ribbon);
  }

  const stoneMaterial=new T.MeshStandardMaterial({color:'#c6bb9f',roughness:.83});
  const stoneGeo=new T.DodecahedronGeometry(.65,1);stoneGeo.scale(1,.16,.68);
  surfaceGrain(stoneMaterial,'stone');
  const stones=new T.InstancedMesh(stoneGeo,stoneMaterial,140);
  const main=new T.CatmullRomCurve3([[1,20],[1,11],[2,6],[0,3],[-4,-1],[-7,-4]].map(([x,z])=>new T.Vector3(x,0,z)));
  const northPath=new T.CatmullRomCurve3([[6,-1],[8,-12],[5,-23],[10,-35],[17,-47],[20,-53]].map(([x,z])=>new T.Vector3(x,0,z)));
  for(let i=0;i<140;i++){
    let x,z,scale;
    if(i<28){const pt=main.getPoint(i/27);x=pt.x+(i%2?.22:-.22);z=pt.z;scale=.8+rnd()*.4;}
    else if(i<92){const pt=northPath.getPoint((i-28)/63);x=pt.x+(rnd()-.5)*.28;z=pt.z;scale=.7+rnd()*.35;}
    else{z=-94+rnd()*116;x=brookX(z)+(i%2?1:-1)*(1.05+rnd()*.8);scale=.5+rnd();}
    dummy.position.set(x,h(x,z)+.10,z);dummy.rotation.set(rnd()*.1,rnd()*Math.PI,rnd()*.1);dummy.scale.set(scale,1+rnd(),scale);dummy.updateMatrix();stones.setMatrixAt(i,dummy.matrix);
  }stones.castShadow=stones.receiveShadow=true;root.add(stones);

  const breeze={value:0};
  const vegetation=new T.MeshStandardMaterial({vertexColors:true,roughness:.86,side:T.DoubleSide});
  vegetation.onBeforeCompile=shader=>{
    shader.uniforms.gardenTime=breeze;
    shader.vertexShader='uniform float gardenTime;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float phase=instanceMatrix[3].x*.37+instanceMatrix[3].z*.28;
      transformed.x+=sin(gardenTime*1.1+phase)*.045*pow(max(position.y,0.0),1.7);
      #endif`);
  };
  const foliage=mergeGeometries([0,1,2,3,4,5].map(i=>{
    const g=leafGeometry(.15+i*.018,.018);g.rotateZ((i%2?1:-1)*(.28+i*.08));g.rotateY(i*2.4);return tinted(g,i%2?'#99bd66':'#6d9c5e');
  }))!;
  const grass=new T.InstancedMesh(foliage,vegetation,6500);let grassCount=0;
  for(let i=0;i<60000&&grassCount<6500;i++){
    const b=flowerLayout.walkBounds,x=b.minX+rnd()*(b.maxX-b.minX),z=b.minZ+rnd()*(b.maxZ-b.minZ);
    if(routeDistance(x,z)<.95||Math.abs(x-brookX(z))<1.1||Math.hypot(x-13,z-6)<4.6||insideCottage(x,z,1))continue;
    const patch=.5+.5*Math.sin(x*.45+Math.cos(z*.5)*2);if(rnd()>.3+patch*.65)continue;
    dummy.position.set(x,h(x,z)-.02,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.55+rnd()*.85);dummy.updateMatrix();grass.setMatrixAt(grassCount++,dummy.matrix);
  }
  grass.count=grassCount;grass.receiveShadow=true;root.add(grass);

  // Long, irregular drifts follow the paths; each has a dominant flower color.
  const beds=[[-8,8,5.0],[-5,2,3.6],[6,11,4.5],[7,-3,3.2],[12,-6,2.1],[17,12,4.0],[-23,-8,4.5],[-27,-1,3.5],[24,-14,4.8],[24,4,3.8],[-3,-11,4.8],[-11,16,4.0],[1,-25,4],[13,-29,4.5],[6,-41,4.2],[23,-43,4],[13,-51,3],[29,-53,3.2],[11,-72,3.6],[31,-70,3.4]];
  const drifts=beds.map(([x,z,r],i)=>({x,z,rx:r,rz:r*(i%2?1.65:.66),angle:i*.83,kind:i%4}));
  let flowerTotal=0;
  const botanicalLods:{mesh:T.InstancedMesh;local:T.Matrix4;matrices:T.Matrix4[];min:number;max:number}[]=[];
  const plantMatrix=new T.Matrix4();
  const lastPlantEye=new T.Vector3(Infinity,Infinity,Infinity);
  function updatePlants(eye:T.Vector3){
    if(!botanicalLods.length||lastPlantEye.distanceToSquared(eye)<2.25)return;
    lastPlantEye.copy(eye);
    for(const row of botanicalLods){
      let count=0;
      for(const matrix of row.matrices){
        const e=matrix.elements,distance=(e[12]-eye.x)**2+(e[13]-eye.y)**2+(e[14]-eye.z)**2;
        if(distance>=row.min&&distance<row.max)row.mesh.setMatrixAt(count++,plantMatrix.multiplyMatrices(matrix,row.local));
      }
      row.mesh.count=count;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();
    }
  }
  function plantingPoint(kind:number,rnd:()=>number){
    const preferred=drifts.filter(d=>d.kind===kind);
    const pool=rnd()<.77?preferred:drifts,d=pool[Math.floor(rnd()*pool.length)];
    const a=rnd()*Math.PI*2,r=Math.sqrt(rnd()),u=Math.cos(a)*r*d.rx,v=Math.sin(a)*r*d.rz;
    const x=d.x+u*Math.cos(d.angle)-v*Math.sin(d.angle),z=d.z+u*Math.sin(d.angle)+v*Math.cos(d.angle);
    if(routeDistance(x,z)<1.0||Math.abs(x-brookX(z))<1.25||Math.hypot(x-13,z-6)<4.1||insideCottage(x,z,.7))return null;
    // The edge is broken into little lobes rather than an obvious oval boundary.
    if(r>.77&&rnd()>.5+.4*Math.sin(x*2.1+z*1.7))return null;
    return new T.Vector3(x,h(x,z)-.015,z);
  }
  function installPlants(model:T.Object3D,matrices:T.Matrix4[],sway=true,lod?:'near'|'meadow'|'distant'){
    model.updateMatrixWorld(true);
    model.traverse(o=>{
      if(!(o instanceof T.Mesh))return;
      for(const mat of Array.isArray(o.material)?o.material:[o.material]){
        if(sway&&!mat.userData.gardenFinish)mat.onBeforeCompile=vegetation.onBeforeCompile;
        finishGardenMaterial(mat,mat.name.includes('petal')?'petal':'leaf');
      }
      const mesh=new T.InstancedMesh(o.geometry,o.material,matrices.length);
      if(lod){mesh.count=0;const ranges={near:[0,7.5**2],meadow:[7.5**2,30**2],distant:[30**2,Infinity]};
        const [min,max]=ranges[lod];botanicalLods.push({mesh,local:o.matrixWorld.clone(),matrices,min,max});}
      else matrices.forEach((matrix,i)=>mesh.setMatrixAt(i,new T.Matrix4().multiplyMatrices(matrix,o.matrixWorld)));
      mesh.castShadow=lod!=='distant';mesh.receiveShadow=true;root.add(mesh);
    });
  }
  const flowersReady=(async()=>{
    const rnd=seededRandom(47281);
    const loader=new GLTFLoader();
    const [model,reduced]=await Promise.all([loader.loadAsync('./assets/flower-garden/sculpted-flowers.glb'),loader.loadAsync('./assets/flower-garden/meadow-flower-lods.glb')]);
    const materials=new Map<string,T.Material>();
    model.scene.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.set(m.name,m);});
    const originalMaterial=(m:T.Material)=>{const source=materials.get(m.name);if(!source)throw new Error(`Missing meadow material: ${m.name}`);return source;};
    reduced.scene.traverse(o=>{if(o instanceof T.Mesh)o.material=Array.isArray(o.material)?o.material.map(originalMaterial):originalMaterial(o.material);});
    const fields=createMeadowPlantings();
    const names=['coral-cosmos','ivory-anemone','lilac-spires','meadow-cups'];
    for(const [kind,name] of names.entries()){
      const source=model.scene.getObjectByName(name);if(!source)throw new Error(`Missing sculpted species: ${name}`);
      const matrices:T.Matrix4[]=[],count=[330,500,170,600][kind];
      for(let attempt=0;attempt<count*12&&matrices.length<count;attempt++){
        const point=plantingPoint(kind,rnd);if(!point)continue;
        dummy.position.copy(point);dummy.rotation.set((rnd()-.5)*.18,rnd()*Math.PI*2,(rnd()-.5)*.20);
        dummy.scale.setScalar((kind===0?1.05:.85)+rnd()*.65);dummy.updateMatrix();matrices.push(dummy.matrix.clone());
      }
      for(const plant of fields[kind]){
        dummy.position.set(plant.x,plant.y,plant.z);dummy.rotation.set(plant.lean,plant.rotation,-plant.lean*.6);dummy.scale.setScalar(plant.scale);dummy.updateMatrix();matrices.push(dummy.matrix.clone());
      }
      installPlants(source,matrices,true,'near');
      for(const lod of ['meadow','distant'] as const){
        const simplified=reduced.scene.getObjectByName(name+'-'+lod);if(!simplified)throw new Error(`Missing meadow LOD: ${name}-${lod}`);
        installPlants(simplified,matrices,true,lod);
      }
      flowerTotal+=matrices.length*(kind===2?7:1);
    }
    const cover=await new GLTFLoader().loadAsync('./assets/flower-garden/groundcover-rosette.glb'),matrices:T.Matrix4[]=[];
    for(let attempt=0;attempt<2500&&matrices.length<300;attempt++){
      const point=plantingPoint(attempt%4,rnd);if(!point)continue;
      dummy.position.copy(point);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.9+rnd()*.6);dummy.updateMatrix();matrices.push(dummy.matrix.clone());
    }
    installPlants(cover.scene,matrices);
    lastPlantEye.set(Infinity,Infinity,Infinity);updatePlants(new T.Vector3(1.8,8.5,29));
  })();
  // Original CC0 Poly Haven sorrel, adapted from Khronos' sample in Blender.
  // Reuse its authored leaf/petal albedo, normals, roughness and alpha cutouts.
  const sorrelReady=(async()=>{
    const rnd=seededRandom(19354);
    const model=await new GLTFLoader().loadAsync('./assets/flower-garden/wild-sorrel.glb');
    const matrices:T.Matrix4[]=[];
    for(let attempt=0;attempt<1000&&matrices.length<60;attempt++){
      const point=plantingPoint(attempt%4,rnd);if(!point)continue;
      dummy.position.copy(point);dummy.rotation.set(0,rnd()*Math.PI*2,0);
      dummy.scale.setScalar(.85+rnd()*.55);dummy.updateMatrix();matrices.push(dummy.matrix.clone());
    }
    installPlants(model.scene,matrices);stats.reusedFlowerClumps=matrices.length;
  })();
  const shrubs=new T.InstancedMesh(fernGeometry(),vegetation,180);let shrubCount=0;
  for(let i=0;i<3500&&shrubCount<180;i++){
    const bed=beds[Math.floor(rnd()*beds.length)],a=rnd()*Math.PI*2,r=bed[2]*(.8+rnd()*.4);
    const x=bed[0]+Math.cos(a)*r,z=bed[1]+Math.sin(a)*r;
    if(routeDistance(x,z)<1||Math.abs(x-brookX(z))<1.1)continue;
    dummy.position.set(x,h(x,z),z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.65+rnd()*.55);dummy.updateMatrix();shrubs.setMatrixAt(shrubCount++,dummy.matrix);
  }shrubs.count=shrubCount;shrubs.castShadow=shrubs.receiveShadow=true;root.add(shrubs);

  const waterTime={value:0};
  const waterMat=new T.MeshPhysicalMaterial({color:'#4babad',roughness:.21,metalness:.05,
    clearcoat:.6,clearcoatRoughness:.18,transparent:true,opacity:.92,depthWrite:false,envMapIntensity:1.2});
  waterMat.onBeforeCompile=shader=>{
    shader.uniforms.waterTime=waterTime;shader.vertexShader='uniform float waterTime;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
      objectNormal=normalize(objectNormal+vec3(-.075*cos(position.x*5.5+position.z*1.3+waterTime),0.,-.045*cos(position.z*4.-waterTime*1.6)));`);
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      transformed.y+=.012*sin(position.x*5.5+position.z*1.3+waterTime)+.011*sin(position.z*4.-waterTime*1.6);`);
  };
  const waterVertices=[],waterUV=[],waterIndices=[];
  for(let i=0;i<=180;i++){
    const z=-155+i*237/180,x=brookX(z),y=h(x,z)+.4;
    waterVertices.push(x-.92,y,z,x+.92,y,z);waterUV.push(0,i/180,1,i/180);
    if(i<180){const a=i*2;waterIndices.push(a,a+2,a+1,a+1,a+2,a+3);}
  }
  const waterGeometry=new T.BufferGeometry();waterGeometry.setAttribute('position',new T.Float32BufferAttribute(waterVertices,3));waterGeometry.setAttribute('uv',new T.Float32BufferAttribute(waterUV,2));waterGeometry.setIndex(waterIndices);waterGeometry.computeVertexNormals();
  root.add(new T.Mesh(waterGeometry,waterMat));

  const wood=new T.MeshStandardMaterial({color:'#846145',roughness:.9}),iron=new T.MeshStandardMaterial({color:'#384b42',roughness:.6,metalness:.25});
  surfaceGrain(wood,'wood');
  const propParts=new Map<T.Material,T.BufferGeometry[]>();
  function part(g:T.BufferGeometry,mat:T.Material,x:number,y:number,z:number,ry=0){g.rotateY(ry);g.translate(x,y,z);const list=propParts.get(mat)??[];list.push(g);propParts.set(mat,list);}
  for(const bridge of gardenBridges){
    const z=bridge.z,bx=brookX(z),by=h(bx+3.4,z)+.32;
    for(let i=0;i<25;i++)part(new T.BoxGeometry(.25,.13,2.05),wood,bx-3.25+i*.27,by+.20*Math.sin(i/24*Math.PI),z);
    for(const side of [-1,1]){
      part(new T.BoxGeometry(7.1,.14,.13),wood,bx,by+1.05,z+side*1.05);
      for(let i=0;i<5;i++)part(new T.BoxGeometry(.14,1.05,.14),wood,bx-3.1+i*1.55,by+.5,z+side*1.05);
    }
  }
  for(const [x,z,rotation] of [[-25,-10,.8],[24,-17,-1.2],[29,-50,Math.PI]]){
    const y=h(x,z);
    for(let i=0;i<5;i++){
      const a=(i-2)*.16;
      const offset=new T.Vector3(0,0,a).applyAxisAngle(new T.Vector3(0,1,0),rotation);
      part(new T.BoxGeometry(2.1,.09,.13),wood,x+offset.x,y+.53,z+offset.z,rotation);
    }
    for(let i=0;i<3;i++)part(new T.BoxGeometry(2.1,.12,.09),wood,x+Math.sin(rotation)*.39,y+.88+i*.17,z+Math.cos(rotation)*.39,rotation);
    for(const side of [-1,1]){
      const offset=new T.Vector3(side*.78,0,0).applyAxisAngle(new T.Vector3(0,1,0),rotation);
      part(new T.BoxGeometry(.11,.65,.65),iron,x+offset.x,y+.3,z+offset.z,rotation);
    }
  }
  // A human-scale red garden fence surrounds the full-size rear house.
  const fence=new T.MeshStandardMaterial({color:'#b65a49',roughness:.86});surfaceGrain(fence,'wood');
  const [cx,,cz]=flowerLayout.cottage.position;
  function fenceEdge(ax:number,az:number,bx:number,bz:number){
    const count=Math.ceil(Math.hypot(bx-ax,bz-az)/2.7),angle=Math.atan2(bx-ax,bz-az);
    for(let i=0;i<=count;i++){
      const t=i/count,x=cx+ax+(bx-ax)*t,z=cz+az+(bz-az)*t,y=h(x,z);
      part(new T.CylinderGeometry(.08,.1,1.25,8),fence,x,y+.625,z);
      part(new T.ConeGeometry(.14,.18,8),fence,x,y+1.34,z);
      if(i<count){
        const nt=(i+.5)/count,px=cx+ax+(bx-ax)*nt,pz=cz+az+(bz-az)*nt;
        const length=Math.hypot(bx-ax,bz-az)/count+.04;
        for(const level of [.47,.93])part(new T.BoxGeometry(.1,.12,length),fence,px,h(px,pz)+level,pz,angle);
      }
    }
  }
  fenceEdge(-12,11,-2,11);fenceEdge(2,11,12,11);fenceEdge(-12,11,-12,-12);fenceEdge(12,11,12,-12);fenceEdge(-12,-12,12,-12);
  for(const [mat,parts] of propParts){
    const mesh=new T.Mesh(mergeGeometries(parts)!,mat);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);parts.forEach(g=>g.dispose());
  }
  const bulbs:T.Mesh[]=[];const lanterns:T.PointLight[]=[];
  const lightMaterial=new T.MeshStandardMaterial({color:'#ffe0a0',emissive:'#ffb44e',emissiveIntensity:.2,roughness:.6});
  for(const [x,z] of [[-6,2],[18,-52],[-24,-9],[23,-16],[17,12],[-20,2],[22,-52],[20,-75]]){
    const y=h(x,z);
    const post=new T.Mesh(new T.CylinderGeometry(.045,.065,1.3,7),iron);post.position.set(x,y+.65,z);post.castShadow=true;root.add(post);
    const bulb=new T.Mesh(new T.SphereGeometry(.15,8,6),lightMaterial);bulb.scale.y=1.4;bulb.position.set(x,y+1.4,z);root.add(bulb);bulbs.push(bulb);
    const cap=new T.Mesh(new T.ConeGeometry(.25,.16,8),iron);cap.position.set(x,y+1.7,z);root.add(cap);
    const light=new T.PointLight('#ffd19a',0,7,2);light.position.copy(bulb.position);root.add(light);lanterns.push(light);
  }

  const forest:{mesh:T.InstancedMesh;local:T.Matrix4;near:boolean;species:WoodlandSpecies}[]=[],placements:{matrix:T.Matrix4;position:T.Vector3;species:WoodlandSpecies}[]=[];
  const lastForestEye=new T.Vector3(Infinity,Infinity,Infinity);
  function updateForest(eye:T.Vector3){
    if(!forest.length||lastForestEye.distanceToSquared(eye)<2.25)return;
    lastForestEye.copy(eye);
    for(const row of forest){
      let count=0;
      for(const tree of placements)if(tree.species===row.species&&(tree.position.distanceToSquared(eye)<25*25)===row.near){
        row.mesh.setMatrixAt(count++,new T.Matrix4().multiplyMatrices(tree.matrix,row.local));
      }
      row.mesh.count=count;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();
    }
  }
  // Blender-sculpted crowns with painted color transitions; two actual GLB LODs.
  const forestReady=(async()=>{
    const rnd=seededRandom(71926);
    const assets=await woodlandReady;
    for(let i=0;i<46;i++){
      const a=i/46*Math.PI*2;
      let x=Math.cos(a)*(31+rnd()*7),z=Math.sin(a)*(27+rnd()*6)-5;
      if(z>17&&Math.abs(x)<24)continue;
      if(z<-22&&Math.abs(x-20*(20-z)/82)<10)continue;
      dummy.position.set(x,h(x,z)-.08,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.43+rnd()*.26);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),position:dummy.position.clone(),species:placements.length%5===0?'young':placements.length%3===0?'ash':'oak'});
    }
    for(let i=0;i<25;i++){
      const x=-54+rnd()*108,z=-94-rnd()*21;
      dummy.position.set(x,h(x,z)-.05,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.5+rnd()*.3);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),position:dummy.position.clone(),species:placements.length%5===0?'young':placements.length%3===0?'ash':'oak'});
    }
    for(let i=0;i<22;i++){
      const z=-34-rnd()*53,x=(i%2?1:-1)*(35+rnd()*8);
      dummy.position.set(x,h(x,z)-.05,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.4+rnd()*.3);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),position:dummy.position.clone(),species:placements.length%5===0?'young':placements.length%3===0?'ash':'oak'});
    }
    for(let i=0;i<18;i++){
      const a=.12+i/18*Math.PI*1.83,x=Math.cos(a)*(30+rnd()*5),z=Math.sin(a)*(23+rnd()*5)-6;
      if(z>15&&Math.abs(x)<24)continue;
      dummy.position.set(x,h(x,z)-.08,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);dummy.scale.setScalar(.25+rnd()*.13);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),position:dummy.position.clone(),species:placements.length%5===0?'young':placements.length%3===0?'ash':'oak'});
    }
    // Reuse the authored low LOD to frame all sides of the garden. Two broken
    // bands give the side/rear views a wooded horizon beyond the walkable glade.
    for(let i=0;i<210;i++){
      const angle=i/105*Math.PI*2,band=i<105?0:1;
      const x=Math.cos(angle)*(72+band*25+(rnd()-.5)*13);
      const z=-28+Math.sin(angle)*(79+band*29+(rnd()-.5)*12);
      dummy.position.set(x,h(x,z)-.18,z);dummy.rotation.set(0,rnd()*Math.PI*2,0);
      dummy.scale.setScalar(.55+rnd()*.4);dummy.updateMatrix();
      placements.push({matrix:dummy.matrix.clone(),position:dummy.position.clone(),species:placements.length%5===0?'young':placements.length%3===0?'ash':'oak'});
    }
    stats.trees=placements.length;
    for(const species of ['oak','ash','young'] as const)for(const lod of ['near','far'] as const)for(const row of assets.tree(species,lod)){
      const instances=new T.InstancedMesh(row.geometry,row.material,placements.length);
      instances.count=0;instances.castShadow=instances.receiveShadow=true;root.add(instances);
      forest.push({mesh:instances,local:new T.Matrix4(),near:lod==='near',species});
    }
    updateForest(new T.Vector3(1.8,11.8,32.5));
  })();

  const wings=new T.Group();root.add(wings);const butterflies:{group:T.Group;left:T.Object3D;right:T.Object3D;origin:T.Vector3;phase:number}[]=[];
  const butterflyReady=(async()=>{
  const rnd=seededRandom(81193);
  const model=await new GLTFLoader().loadAsync('./assets/flower-garden/garden-butterfly.glb');
  for(let i=0;i<8;i++){
    const g=new T.Group(),copy=model.scene.clone(true);g.add(copy);wings.add(g);
    const left=copy.getObjectByName('wing-left'),right=copy.getObjectByName('wing-right');
    if(!left||!right)throw new Error('Butterfly wing hinges are missing');
    const bed=beds[i],origin=new T.Vector3(bed[0],h(bed[0],bed[1])+1.1,bed[1]);butterflies.push({group:g,left,right,origin,phase:rnd()*8});
    stats.butterflies++;
  }})();
  const bellflowersReady=(async()=>{
    const model=await new GLTFLoader().loadAsync('./assets/flower-garden/garden-bellflowers.glb');
    model.scene.updateMatrixWorld(true);
    const spots=[[-10,8],[-8.2,9],[-12,6],[-9,5],[-25,-9],[10,-6],[24,-15],[14,13]];
    model.scene.traverse(o=>{
      if(!(o instanceof T.Mesh))return;
      const mesh=new T.InstancedMesh(o.geometry,o.material,spots.length);
      for(const m of Array.isArray(o.material)?o.material:[o.material]){
        if(!m.userData.gardenFinish)m.onBeforeCompile=vegetation.onBeforeCompile;
        finishGardenMaterial(m,m.name.includes('petal')?'petal':'leaf');
      }
      for(const [i,[x,z]] of spots.entries()){
        dummy.position.set(x,h(x,z),z);dummy.rotation.set(0,i*2.4,0);dummy.scale.setScalar(1.15+i%3*.12);dummy.updateMatrix();mesh.setMatrixAt(i,new T.Matrix4().multiplyMatrices(dummy.matrix,o.matrixWorld));
      }
      mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);
    });
  })();
  const driftingPetals=new T.InstancedMesh(roundedPetal(.1,.045),new T.MeshStandardMaterial({color:'#ffd3d1',side:T.DoubleSide,roughness:.83}),30);
  const petalPhases=Array.from({length:30},()=>[rnd()*36-18,rnd()*26-13,rnd()*10]);root.add(driftingPetals);
  const portals:{origin:T.Vector3;points:T.Points;positions:Float32Array;phases:Float32Array}[]=[];
  function addPortal(origin:T.Vector3,radius:number){
    const material=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,
      vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:'varying vec2 vUv;void main(){float r=length(vUv-.5)*2.;float ring=exp(-abs(r-.67)*70.);float glow=exp(-r*r*5.)*.13;gl_FragColor=vec4(1.,.85,.35,(ring*.8+glow)*(1.-smoothstep(.8,1.,r)));}'});
    const ring=new T.Mesh(new T.PlaneGeometry(radius*3,radius*3),material);ring.rotation.x=-Math.PI/2;ring.position.copy(origin);root.add(ring);
    const positions=new Float32Array(28*3),phases=new Float32Array(28);
    for(let i=0;i<28;i++)phases[i]=rnd();
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));
    const points=new T.Points(geometry,flowerParticleMaterial({color:'#ffe9a5',size:.065,opacity:.74,blending:T.AdditiveBlending}));
    points.position.copy(origin);root.add(points);portals.push({origin,points,positions,phases});
  }
  addPortal(new T.Vector3(1,h(1,17)+.13,17),.6);
  return {ready:Promise.all([forestReady,butterflyReady,bellflowersReady,flowersReady,sorrelReady,meadowLoaded]),stats,get flowerTotal(){return flowerTotal;},addPortal,treeSource:'Three EZ-Tree skeletons refined in Blender; CC0 bark / MIT leaves, see woodland/sources.json',update(time:number,night:number,eye:T.Vector3){
    updateForest(eye);updatePlants(eye);
    woodlandTime.value=breeze.value=waterTime.value=time;wings.visible=night<.7;
    lightMaterial.emissiveIntensity=.2+night*2.5;for(const lamp of lanterns)lamp.intensity=night*12;
    for(const b of butterflies){
      b.group.position.copy(b.origin).add(new T.Vector3(Math.sin(time*.31+b.phase)*1.2,Math.sin(time*.8+b.phase)*.3,Math.cos(time*.26+b.phase)*.9));
      b.group.rotation.y=time*.3+b.phase;b.left.rotation.z=Math.sin(time*10+b.phase)*1.1;b.right.rotation.z=-b.left.rotation.z;
    }
    driftingPetals.visible=night<.7;
    for(let i=0;i<petalPhases.length;i++){
      const [x,z,phase]=petalPhases[i];dummy.position.set(x+Math.sin(time*.15+phase)*1.4,h(x,z)+.4+((phase-time*.17)%5+5)%5,z+Math.cos(time*.12+phase));
      dummy.rotation.set(time*.7+phase,time*.3+phase,Math.sin(time*.8+phase));dummy.scale.setScalar(.65+i%3*.2);dummy.updateMatrix();driftingPetals.setMatrixAt(i,dummy.matrix);
    }driftingPetals.instanceMatrix.needsUpdate=true;
    for(const portal of portals){
      for(let i=0;i<28;i++){
        const t=(time*.21+portal.phases[i])%1,a=i*2.4+time*.14;
        portal.positions.set([Math.cos(a)*(.26+t*.16),t*1.6,Math.sin(a)*(.26+t*.16)],i*3);
      }
      portal.points.geometry.attributes.position.needsUpdate=true;
    }
  }};
}

/** Object-space surface detail stays fixed while the camera moves. */
function surfaceGrain(material:T.MeshStandardMaterial,kind:'earth'|'wood'|'stone'){
  material.customProgramCacheKey=()=>`garden-surface-${kind}`;
  material.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec3 gardenSurface;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ngardenSurface=position;');
    shader.fragmentShader=`varying vec3 gardenSurface;
      float gardenHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float gardenNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(gardenHash(i),gardenHash(i+vec3(1,0,0)),f.x),mix(gardenHash(i+vec3(0,1,0)),gardenHash(i+vec3(1,1,0)),f.x),f.y),
        mix(mix(gardenHash(i+vec3(0,0,1)),gardenHash(i+vec3(1,0,1)),f.x),mix(gardenHash(i+vec3(0,1,1)),gardenHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      vec3 gardenSurfaceNormal(vec3 n,float height,vec3 viewPosition){
        vec3 q0=dFdx(viewPosition),q1=dFdy(viewPosition);
        vec3 r0=cross(q1,n),r1=cross(n,q0);float det=dot(q0,r0);
        return normalize(abs(det)*n-sign(det)*(dFdx(height)*r0+dFdy(height)*r1));
      }
      `+shader.fragmentShader;
    const grain=kind==='wood'
      ? `float grain=.5+.5*sin(gardenSurface.x*5.+gardenNoise(gardenSurface*vec3(.5,8.,9.))*8.);diffuseColor.rgb*=.72+grain*.35;`
      : kind==='earth'
      ? `float grain=gardenNoise(gardenSurface*16.);float patches=gardenNoise(gardenSurface*.9);diffuseColor.rgb*=.85+.19*grain+.14*patches;`
      : `float grain=gardenNoise(gardenSurface*24.);diffuseColor.rgb*=.86+.22*grain;`;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>\n${grain}`);
    const relief=kind==='wood'
      ? '.006*sin(gardenSurface.x*5.+gardenNoise(gardenSurface*vec3(.5,8.,9.))*8.)'
      :kind==='earth'?'.012*gardenNoise(gardenSurface*18.)':'.018*gardenNoise(gardenSurface*22.)';
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
      normal=gardenSurfaceNormal(normal,${relief},-vViewPosition);`);
  };
}
