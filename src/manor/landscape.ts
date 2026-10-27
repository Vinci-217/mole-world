import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {Assets} from './assets';
import {groundHeight as h,pathDistance,routes,riverX,bridges,trees,random,walkHeight,smoothstep} from './world';

export function createLandscape(scene:T.Scene,assets:Assets){
  const root=new T.Group();root.name='Hand-authored connected landscape';scene.add(root);
  const rnd=random(71211),dummy=new T.Object3D(),matrix=new T.Matrix4(),color=new T.Color();
  const stats={trees:trees.length+6,flowers:0,grass:0,ferns:0};
  const terrainGeo=new T.PlaneGeometry(460,460,250,250);terrainGeo.rotateX(-Math.PI/2);terrainGeo.translate(0,0,-25);
  const p=terrainGeo.attributes.position,colors:number[]=[],uv:number[]=[];
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i),y=h(x,z);p.setY(i,y);const forest=1-smoothstep(-45,-22,x);
    const noise=.5+.22*Math.sin(x*.12+Math.sin(z*.13))+.17*Math.sin(z*.2-x*.07);
    color.set('#55734c').lerp(new T.Color('#8eaa6b'),noise).lerp(new T.Color('#365b45'),forest*.65);
    color.lerp(new T.Color('#a49978'),(1-smoothstep(.9,2.8,pathDistance(x,z)))*.75);
    if(Math.abs(x-riverX(z))<4.7)color.lerp(new T.Color('#5e6751'),.65);
    colors.push(color.r,color.g,color.b);uv.push(x/2.8,z/2.8);
  }
  terrainGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));terrainGeo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));terrainGeo.computeVertexNormals();
  const soil=new T.MeshStandardMaterial({name:'Baked soil and moss layers',vertexColors:true,map:assets.textures.get('soil-color.png'),normalMap:assets.textures.get('soil-normal.png'),normalScale:new T.Vector2(.45,.45),roughness:.95});
  soil.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
    float soilLuma=dot(texture2D(map,vMapUv).rgb,vec3(.2126,.7152,.0722));diffuseColor.rgb*=clamp(.60+soilLuma*4.6,.55,1.4);
    #endif`);};soil.customProgramCacheKey=()=> 'handmade-layered-soil';
  const terrain=new T.Mesh(terrainGeo,soil);terrain.receiveShadow=true;root.add(terrain);
  // A ring of authored ridges closes the distant horizon beyond the paths.
  const v:number[]=[],c:number[]=[],ix:number[]=[];
  for(let ring=0;ring<9;ring++)for(let i=0;i<=240;i++){
    const a=i/240*Math.PI*2,r=168+ring*19,x=Math.cos(a)*r,z=-25+Math.sin(a)*r;
    const peak=(9+16*Math.pow(.5+.5*Math.sin(a*5+.3),2)+4*Math.sin(a*13)+2*Math.sin(a*31+ring*.7))*Math.sin((ring+1)/10*Math.PI);
    v.push(x,h(x,z)+peak,z);color.set('#5c7766').lerp(new T.Color('#9baaa3'),ring/14+.08*Math.sin(a*11));c.push(color.r,color.g,color.b);
    if(ring<8&&i<240){const k=ring*241+i;ix.push(k,k+1,k+241,k+1,k+242,k+241);}
  }
  const mountains=new T.BufferGeometry();mountains.setAttribute('position',new T.Float32BufferAttribute(v,3));mountains.setAttribute('color',new T.Float32BufferAttribute(c,3));mountains.setIndex(ix);mountains.computeVertexNormals();
  const ridgeMat=new T.MeshStandardMaterial({vertexColors:true,roughness:1,side:T.DoubleSide});
  ridgeMat.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec3 ridgePoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nridgePoint=position;');
    shader.fragmentShader='varying vec3 ridgePoint;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float folds=sin(ridgePoint.x*.13+sin(ridgePoint.z*.17)*1.2)*sin(ridgePoint.z*.22+ridgePoint.x*.05);
      float small=sin(ridgePoint.x*1.37+sin(ridgePoint.z*.74))*sin(ridgePoint.z*1.59);
      diffuseColor.rgb*=.88+.16*folds+.055*small;`);
  };root.add(new T.Mesh(mountains,ridgeMat));
  const parts=new Map<T.Material,T.BufferGeometry[]>();
  function part(g:T.BufferGeometry,material:T.Material,x:number,y:number,z:number,rotation=0){
    if(g.index){const old=g;g=g.toNonIndexed();old.dispose();}g.rotateY(rotation);g.translate(x,y,z);const list=parts.get(material)||[];list.push(g);parts.set(material,list);
  }
  const stone=assets.material('stone'),wood=assets.material('wood'),iron=assets.material('iron');
  // Curves follow the shared terrain. Edge alpha hides straight ribbon borders.
  const pathMat=new T.MeshStandardMaterial({color:'#b1a181',roughness:1,map:assets.textures.get('soil-color.png'),transparent:true,opacity:.45,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  pathMat.onBeforeCompile=shader=>{shader.vertexShader='varying vec2 pathEdge;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\npathEdge=uv;');shader.fragmentShader='varying vec2 pathEdge;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a*=smoothstep(0.,.3,pathEdge.x)*smoothstep(0.,.3,1.-pathEdge.x);');};
  for(const route of routes){
    const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z))),pv:number[]=[],puv:number[]=[],indices:number[]=[];
    for(let i=0;i<=180;i++){
      const point=curve.getPoint(i/180),t=curve.getTangent(i/180),side=new T.Vector3(-t.z,0,t.x).normalize();
      for(const sign of [-1,1]){const x=point.x+side.x*sign*1.2,z=point.z+side.z*sign*1.2;pv.push(x,h(x,z)+.025,z);puv.push((sign+1)/2,i/6);}
      if(i<180){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pv,3));g.setAttribute('uv',new T.Float32BufferAttribute(puv,2));g.setIndex(indices);g.computeVertexNormals();const m=new T.Mesh(g,pathMat);m.receiveShadow=true;root.add(m);
  }
  // The bridge deck uses the same elevation interpolation as walking.
  for(const b of bridges){
    for(let i=0;i<28;i++){
      const x=b.x-b.length*.5+(i+.5)*b.length/28,y=walkHeight(x,b.z);
      part(new RoundedBoxGeometry(b.length/28*.98,.23,b.width,1,.04),stone,x,y-.12,b.z);
      for(const side of [-1,1])part(new RoundedBoxGeometry(.3,.65,.36,1,.04),stone,x,y+.18,b.z+side*(b.width*.5+.08));
    }
  }
  // Front court paving has separate uneven cobbles, not a repeated flat decal.
  const cobbles=new T.InstancedMesh(new RoundedBoxGeometry(.38,.10,.45,1,.025),stone,700);let cobbleCount=0;
  for(let row=0;row<48;row++)for(let col=0;col<13;col++){
    const x=(col-6)*.4+(row%2)*.2,z=-27-row*.49;if(Math.hypot(x,z+40)<3.1)continue;
    dummy.position.set(x,h(x,z)+.04,z);dummy.rotation.set(0,(rnd()-.5)*.07,0);dummy.scale.set(1,1+rnd()*.15,1);dummy.updateMatrix();cobbles.setMatrixAt(cobbleCount++,dummy.matrix);
  }cobbles.count=cobbleCount;cobbles.receiveShadow=true;root.add(cobbles);
  // Terrace edge, subtle balustrade and stair treads give the castle a footing.
  for(const x of [-23,23])for(let i=0;i<19;i++){
    const z=-84+i*2;part(new RoundedBoxGeometry(.5,.8,1.95,1,.06),stone,x,h(x,z)+.25,z);
  }
  for(const x of [-12,12])for(let i=0;i<8;i++){
    const z=-42-i*.65;part(new RoundedBoxGeometry(6,.12,.68,1,.04),stone,x,h(x,z)+.03,z);
  }
  // Creek stones, then scattered stones and pointed, cupped fallen leaves.
  const rockRows=[0,1,2].map(i=>{
    const source=assets.geometry('props','prop_rock_'+i);const m=new T.InstancedMesh(source.geometry,stone,135);m.castShadow=m.receiveShadow=true;root.add(m);return m;
  });
  for(let i=0;i<405;i++){
    const z=62-rnd()*173,x=i<250?riverX(z)+(i%2?1:-1)*(3.5+rnd()*2):(rnd()-.5)*190,s=.25+rnd()*.6;
    dummy.position.set(x,h(x,z)+s*.04,z);dummy.rotation.set(rnd()*.3,rnd()*6.28,rnd()*.2);dummy.scale.set(s,s*.75,s);dummy.updateMatrix();rockRows[i%3].setMatrixAt(Math.floor(i/3),dummy.matrix);
  }
  const pebbleGeo=new T.IcosahedronGeometry(1,0),pebbles=new T.InstancedMesh(pebbleGeo,stone,2100);
  for(let i=0;i<2100;i++){const route=routes[i%routes.length],point=route[Math.floor(rnd()*route.length)],x=point[0]+(rnd()-.5)*4,z=point[1]+(rnd()-.5)*5,s=.025+rnd()*.05;dummy.position.set(x,h(x,z)+.02,z);dummy.rotation.set(rnd(),rnd()*6.28,rnd());dummy.scale.set(s,s*.5,s*.9);dummy.updateMatrix();pebbles.setMatrixAt(i,dummy.matrix);}pebbles.receiveShadow=true;root.add(pebbles);
  const litterG=new T.BufferGeometry();litterG.setAttribute('position',new T.Float32BufferAttribute([0,0,-.12,-.045,.01,-.04,-.04,.01,.04,0,0,.14,.04,.01,.04,.045,.01,-.04,0,.025,0],3));litterG.setIndex([0,1,6,1,2,6,2,3,6,3,4,6,4,5,6,5,0,6]);litterG.computeVertexNormals();
  const litter=new T.InstancedMesh(litterG,new T.MeshStandardMaterial({color:'#a78f62',roughness:1,side:T.DoubleSide}),3900);
  for(let i=0;i<3900;i++){const x=-90+rnd()*67,z=9-rnd()*100;dummy.position.set(x,h(x,z)+.02,z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.5+rnd()*.8);dummy.updateMatrix();litter.setMatrixAt(i,dummy.matrix);litter.setColorAt(i,new T.Color().setHSL(.09+rnd()*.04,.23,.38+rnd()*.2));}litter.receiveShadow=true;root.add(litter);
  // Artist-authored tree skeletons with matching near/far cards and branches.
  const placements=[...trees,...[{x:-27,z:-46,species:'oak' as const},{x:28,z:-50,species:'oak' as const},{x:38,z:12,species:'willow' as const},{x:88,z:16,species:'willow' as const},{x:-48,z:14,species:'oak' as const},{x:-84,z:-53,species:'birch' as const}].map(t=>({...t,scale:1.15,rotation:rnd()*6.28}))];
  const treeRows:{mesh:T.InstancedMesh;species:string;near:boolean;local:T.Matrix4}[]=[];
  for(const species of ['oak','willow','birch'])for(const lod of ['near','far'])for(const kind of ['bark','leaf']){
    const source=assets.geometry('trees',`tree_${kind}_${species}_${lod}`),mesh=new T.InstancedMesh(source.geometry,source.material,placements.length);mesh.count=0;mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);treeRows.push({mesh,species,near:lod==='near',local:source.matrix});
  }
  const treeMatrices=placements.map(t=>{dummy.position.set(t.x,h(t.x,t.z)-.04,t.z);dummy.rotation.set((rnd()-.5)*.035,t.rotation,(rnd()-.5)*.035);const spread=.83+rnd()*.32;dummy.scale.set(t.scale*spread,t.scale*(.93+rnd()*.16),t.scale*spread);dummy.updateMatrix();return dummy.matrix.clone();});
  // Far crowns follow the hills, giving the horizon a wooded silhouette.
  for(const species of ['oak','birch'])for(const kind of ['bark','leaf']){
    const source=assets.geometry('trees',`tree_${kind}_${species}_far`),mesh=new T.InstancedMesh(source.geometry,source.material,70);mesh.receiveShadow=true;
    const far=random(species==='oak'?811:915);
    for(let i=0;i<70;i++){const a=far()*Math.PI*2,r=147+far()*90,x=Math.cos(a)*r,z=-25+Math.sin(a)*r;dummy.position.set(x,h(x,z)-.15,z);dummy.rotation.set(0,far()*Math.PI*2,0);dummy.scale.setScalar(.55+far()*.3);dummy.updateMatrix();mesh.setMatrixAt(i,matrix.multiplyMatrices(dummy.matrix,source.matrix));}root.add(mesh);
  }
  const flowerRows:{mesh:T.InstancedMesh;species:number;lod:number;local:T.Matrix4}[]=[];
  const plants:{x:number;z:number;species:number;matrix:T.Matrix4}[]=[],speciesNames=['rose','ivory','bluebell','golden'];
  const drifts=[[51,24],[63,18],[38,17],[72,7],[47,-14],[62,-21],[30,30],[69,35],[39,-6],[17,-40],[-14,-43],[54,43]];
  for(let i=0;i<50000&&plants.length<24000;i++){
    const drift=drifts[i%drifts.length],angle=rnd()*6.28,r=Math.sqrt(rnd())*(i%drifts.length>8?7:12),x=drift[0]+Math.cos(angle)*r,z=drift[1]+Math.sin(angle)*r;
    if(pathDistance(x,z)<1.15||Math.abs(x-riverX(z))<3.4||Math.hypot(x-58,z+4)<6||Math.hypot(x-76,z+34)<8)continue;
    if(Math.abs(x)<23&&z<-48)continue;
    const patch=Math.sin(x*.34+Math.cos(z*.23)*2)*Math.sin(z*.4);if(patch<-.67)continue;
    const species=i%drifts.length%4;dummy.position.set(x,h(x,z)-.015,z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.6+rnd()*.55);dummy.updateMatrix();plants.push({x,z,species,matrix:dummy.matrix.clone()});
  }stats.flowers=plants.length;
  for(let species=0;species<4;species++)for(let lod=0;lod<2;lod++)for(const kind of ['stem','petal','pollen']){
    const source=assets.geometry('flowers',`flower_${kind}_${speciesNames[species]}_${lod===0?'near':'far'}`),mesh=new T.InstancedMesh(source.geometry,source.material,plants.length);mesh.count=0;mesh.castShadow=lod===0;mesh.receiveShadow=true;root.add(mesh);flowerRows.push({mesh,species,lod,local:source.matrix});
  }
  const distantG=new T.BufferGeometry(),dv:number[]=[],duv:number[]=[],dc:number[]=[],di:number[]=[];
  for(let i=0;i<7;i++){
    const a=i/7*6.28,offset=dv.length/3;dv.push(0,.6,0,Math.cos(a-.18)*.17,.62,Math.sin(a-.18)*.17,Math.cos(a)*.22,.65,Math.sin(a)*.22,Math.cos(a+.18)*.17,.62,Math.sin(a+.18)*.17);duv.push(.5,0,0,.5,.5,1,1,.5);di.push(offset,offset+1,offset+2,offset,offset+2,offset+3);
  }distantG.setAttribute('position',new T.Float32BufferAttribute(dv,3));distantG.setAttribute('uv',new T.Float32BufferAttribute(duv,2));distantG.setIndex(di);distantG.computeVertexNormals();
  const distantMat=new T.MeshStandardMaterial({side:T.DoubleSide,roughness:.85}),distant=new T.InstancedMesh(distantG,distantMat,plants.length);distant.count=0;root.add(distant);const flowerTints=['#d5a3ad','#e3d8bd','#9c9ebd','#d8bc71'].map(c=>new T.Color(c));
  // Cupped blades and clover groundcover, with anchored, coherent breeze.
  const gv:number[]=[],gi:number[]=[],gc:number[]=[];
  for(let blade=0;blade<5;blade++){
    const a=blade*2.4,l=.18+rnd()*.28,w=.018,offset=gv.length/3;
    for(let j=0;j<4;j++){const t=j/3;for(const side of [-1,1]){gv.push(Math.cos(a)*t*t*l*.5+Math.sin(a)*w*(1-t*.98)*side,l*t,Math.sin(a)*t*t*l*.5-Math.cos(a)*w*(1-t*.98)*side);color.set('#406646').lerp(new T.Color('#9ab77c'),t*.8);gc.push(color.r,color.g,color.b);}if(j<3){const k=offset+j*2;gi.push(k,k+1,k+2,k+1,k+3,k+2);}}
  }
  const grassG=new T.BufferGeometry();grassG.setAttribute('position',new T.Float32BufferAttribute(gv,3));grassG.setAttribute('color',new T.Float32BufferAttribute(gc,3));grassG.setIndex(gi);grassG.computeVertexNormals();
  const grassMat=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:1});
  grassMat.onBeforeCompile=shader=>{shader.uniforms.manorTime=assets.uniforms.time;shader.uniforms.manorVisitor=assets.uniforms.visitor;shader.vertexShader='uniform float manorTime;uniform vec3 manorVisitor;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    vec2 grassAnchor=vec2(0.);
    #ifdef USE_INSTANCING
    grassAnchor=instanceMatrix[3].xz;
    #endif
    transformed.x+=sin(manorTime*1.1+dot(grassAnchor,vec2(.19,.25)))*position.y*position.y*.3;
    vec2 brush=grassAnchor-manorVisitor.xz;transformed.xz+=normalize(brush+vec2(.001))*exp(-dot(brush,brush)*1.7)*position.y*.34;`);};
  const grass=new T.InstancedMesh(grassG,grassMat,24000),grassMaster:{x:number;y:number;z:number;matrix:T.Matrix4}[]=[];let grassCount=0;
  for(let i=0;i<90000&&grassCount<24000;i++){
    const lawn=i%7===0,garden=i%5<3,x=lawn?-22+rnd()*44:garden?28+rnd()*61:-94+rnd()*110,z=lawn?-49+rnd()*24:garden?-31+rnd()*81:29-rnd()*138;if(pathDistance(x,z)<1.2||Math.abs(x-riverX(z))<3.2||Math.abs(x)<23&&z<-49||Math.hypot(x,z+40)<3.3||Math.hypot(x-58,z+4)<5.8||Math.hypot(x-76,z+34)<8)continue;
    if(Math.sin(x*.17+Math.cos(z*.23))*Math.cos(z*.22)<-.2)continue;
    dummy.position.set(x,h(x,z)-.02,z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(lawn?.25+rnd()*.4:.75+rnd()*.85);dummy.updateMatrix();grass.setMatrixAt(grassCount++,dummy.matrix);grassMaster.push({x,y:dummy.position.y,z,matrix:dummy.matrix.clone()});
  }grass.count=grassCount;grass.receiveShadow=true;root.add(grass);stats.grass=grassCount;
  // Fine fern fronds grow in colonies under the forest canopy.
  const fernParts:T.BufferGeometry[]=[];
  for(let frond=0;frond<5;frond++)for(let row=0;row<8;row++)for(const side of [-1,1]){
    const t=(row+1)/9,a=frond*2.4,spread=.18*(1-t),z=.55*t,y=Math.sin(t*Math.PI*.8)*.46;
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([0,y,z,side*spread,y+.01,z+.065,side*spread*.7,y+.015,z+.13,0,y+.035,z+.04],3));g.setIndex([0,1,3,1,2,3]);g.rotateY(a);g.computeVertexNormals();fernParts.push(g.toNonIndexed());g.dispose();
  }
  const fernG=mergeGeometries(fernParts)!;fernParts.forEach(g=>g.dispose());const fern=new T.InstancedMesh(fernG,new T.MeshStandardMaterial({color:'#748b56',roughness:.93,side:T.DoubleSide}),1700);let fn=0;
  for(let i=0;i<6000&&fn<1700;i++){const x=-90+rnd()*60,z=9-rnd()*105;if(pathDistance(x,z)<1.4||Math.abs(x-riverX(z))<3.4||Math.hypot(x+66,z+51)<4)continue;dummy.position.set(x,h(x,z),z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.7+rnd()*1.1);dummy.updateMatrix();fern.setMatrixAt(fn++,dummy.matrix);}fern.count=fn;fern.receiveShadow=true;root.add(fern);stats.ferns=fn;
  // Mushrooms have separate cream stems and irregular caps at human scale.
  const capG=new T.LatheGeometry([[0,.2],[.08,.19],[.18,.20],[.22,.23],[.20,.30],[.12,.38],[0,.4]].map(p=>new T.Vector2(...p as [number,number])),16);
  const stemG=new T.CylinderGeometry(.025,.04,.23,6),capMat=new T.MeshStandardMaterial({color:'#ffffff',roughness:.84}),stemMat=new T.MeshStandardMaterial({color:'#c0b49a',roughness:.92});stemG.translate(0,.12,0);
  const caps=new T.InstancedMesh(capG,capMat,430),stems=new T.InstancedMesh(stemG,stemMat,430);let mushrooms=0;
  for(let i=0;i<600&&mushrooms<430;i++){const clusters=[[-48,-11],[-69,-32],[-77,-50],[-58,-56]],cluster=clusters[i%4],a=rnd()*6.28,r=Math.sqrt(rnd())*6,x=cluster[0]+Math.cos(a)*r,z=cluster[1]+Math.sin(a)*r;if(pathDistance(x,z)<1.3)continue;dummy.position.set(x,h(x,z),z);dummy.rotation.set((rnd()-.5)*.1,rnd()*6.28,(rnd()-.5)*.1);dummy.scale.setScalar(.4+rnd()*1.1);dummy.updateMatrix();caps.setMatrixAt(mushrooms,dummy.matrix);stems.setMatrixAt(mushrooms,dummy.matrix);const tint=rnd(),shade=.9+rnd()*.18;caps.setColorAt(mushrooms++,new T.Color(tint<.12?'#9ba7ae':tint<.38?'#a87768':'#c4b498').multiplyScalar(shade));}caps.count=stems.count=mushrooms;caps.castShadow=stems.castShadow=caps.receiveShadow=stems.receiveShadow=true;root.add(caps,stems);
  for(const [mat,gs] of parts){const geometry=mergeGeometries(gs)!;gs.forEach(g=>g.dispose());const mesh=new T.Mesh(geometry,mat);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}
  let lastEye=new T.Vector3(Infinity,Infinity,Infinity),lastRotation=new T.Quaternion(),lastFov=0,lastAspect=0;
  const frustum=new T.Frustum(),projection=new T.Matrix4(),sphere=new T.Sphere(),visible=new Uint8Array(plants.length),plantLod=new Uint8Array(plants.length);
  function update(camera:T.PerspectiveCamera,force=false){
    const eye=camera.position;
    if(!force&&lastEye.distanceToSquared(eye)<1&&lastRotation.angleTo(camera.quaternion)<.025&&camera.fov===lastFov&&camera.aspect===lastAspect)return false;
    lastEye.copy(eye);lastRotation.copy(camera.quaternion);lastFov=camera.fov;lastAspect=camera.aspect;
    camera.updateMatrixWorld(true);projection.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(projection);
    for(const row of treeRows){let count=0;for(let i=0;i<placements.length;i++){const t=placements[i],near=(t.x-eye.x)**2+(t.z-eye.z)**2<35**2;if(t.species===row.species&&near===row.near)row.mesh.setMatrixAt(count++,matrix.multiplyMatrices(treeMatrices[i],row.local));}row.mesh.count=count;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();}
    for(let i=0;i<plants.length;i++){const f=plants[i],d=(f.x-eye.x)**2+(f.z-eye.z)**2;plantLod[i]=d<9**2?0:d<29**2?1:2;sphere.center.set(f.x,h(f.x,f.z)+.5,f.z);sphere.radius=1.2;visible[i]=plantLod[i]===0||frustum.intersectsSphere(sphere)?1:0;}
    for(const row of flowerRows){let count=0;for(let i=0;i<plants.length;i++){const f=plants[i];if(f.species===row.species&&visible[i]&&plantLod[i]===row.lod)row.mesh.setMatrixAt(count++,matrix.multiplyMatrices(f.matrix,row.local));}row.mesh.count=count;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();}
    let n=0;for(let i=0;i<plants.length;i++){const f=plants[i];if(!visible[i]||plantLod[i]!==2)continue;distant.setMatrixAt(n,f.matrix);distant.setColorAt(n++,flowerTints[f.species]);}distant.count=n;distant.instanceMatrix.needsUpdate=true;if(distant.instanceColor)distant.instanceColor.needsUpdate=true;distant.computeBoundingSphere();
    let gn=0;for(const g of grassMaster){if((g.x-eye.x)**2+(g.z-eye.z)**2>72**2)continue;sphere.center.set(g.x,g.y+.3,g.z);sphere.radius=.8;if(frustum.intersectsSphere(sphere))grass.setMatrixAt(gn++,g.matrix);}grass.count=gn;grass.instanceMatrix.needsUpdate=true;grass.computeBoundingSphere();
    return true;
  }
  return{root,stats,update,soil};
}
