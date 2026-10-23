import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { createGardenRendering } from './flower-rendering';
import {loadWoodlandAssets,woodlandFloor,type WoodlandSpecies} from './woodland-assets';
import { createGardenWalk } from './flower-walk';
import { fernGeometry } from './flower-garden';
import { forestHeight as h,forestBridge,forestBridgeHeight,forestRoutes,forestPathDistance,forestStreamZ,forestHeroes,forestTrees,forestCanWalk,forestWalkHeight,forestRandom,forestPlaces } from './forest-terrain';

export type ForestAtmosphere='dusk'|'moon'|'mist'|'rain';
export function createBlackForest(container:HTMLElement,onFrame:()=>void){
  const rnd=forestRandom(48217),scene=new T.Scene();
  scene.fog=new T.FogExp2('#9bada1',.008);scene.background=new T.Color('#a4b9bd');
  const renderer=new T.WebGLRenderer({antialias:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.88;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
  renderer.info.autoReset=false;container.append(renderer.domElement);
  const camera=new T.PerspectiveCamera(49,1,.12,380);camera.position.set(2,3.1,24);
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(-2.5,3.2,-23);
  controls.enableDamping=true;controls.dampingFactor=.09;controls.maxPolarAngle=Math.PI*.495;controls.minDistance=2;
  // Keep inspection views over the authored terrain. Movement through the
  // woodland uses the walking camera, rather than panning into an empty border.
  controls.maxDistance=80;controls.enablePan=false;controls.update();
  const walk=createGardenWalk(camera,controls,renderer.domElement,{canWalk:forestCanWalk,height:forestWalkHeight,spawn:[2,29]});
  const rendering=createGardenRendering(renderer,scene,camera,'woodland');rendering.weather('dusk');scene.environmentIntensity=.38;
  const sky=new Sky();sky.scale.setScalar(300);scene.add(sky);
  Object.assign(sky.material.uniforms.turbidity,{value:4});sky.material.uniforms.rayleigh.value=1.4;
  sky.material.uniforms.mieCoefficient.value=.006;sky.material.uniforms.mieDirectionalG.value=.82;
  sky.material.uniforms.sunPosition.value.set(-65,34,-80);
  sky.material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('vec4( retColor, 1.0 )','vec4( retColor * .25, 1.0 )');};
  const moon=new T.DirectionalLight('#ffe1aa',3.6);moon.position.set(-42,62,-48);moon.target.position.set(0,0,-23);
  moon.castShadow=true;moon.shadow.mapSize.setScalar(innerWidth<760?2048:4096);
  Object.assign(moon.shadow.camera,{left:-110,right:110,top:140,bottom:-140,near:1,far:240});
  moon.shadow.normalBias=.045;moon.shadow.bias=-.0001;moon.shadow.radius=4;scene.add(moon,moon.target);
  rendering.sun(moon);
  const hemi=new T.HemisphereLight('#becfdf','#3d3828',.5);scene.add(hemi);
  const rim=new T.DirectionalLight('#b9ccdf',.35);rim.position.set(30,22,10);scene.add(rim);
  const moonDisc=new T.Mesh(new T.SphereGeometry(3.4,32,24),new T.MeshStandardMaterial({color:'#e7e4cb',emissive:'#7a97a1',emissiveIntensity:.25,roughness:1,fog:false}));moonDisc.position.set(30,53,-135);scene.add(moonDisc);
  const root=new T.Group();root.name='black-forest-procedural-world';scene.add(root);
  moonDisc.visible=false;
  const stats={ready:false,failed:[] as string[],trees:forestTrees.length+forestHeroes.length+1,mushrooms:0,ferns:0,fireflies:420,dust:180,grassClumps:0,leafLitter:0,authoredTrees:3,blenderLandmarks:0,atmosphere:'dusk' as ForestAtmosphere,draws:0,triangles:0};
  const time={value:0},dummy=new T.Object3D();
  const assetsReady=loadWoodlandAssets(time);
  const heightFogDensity={value:.006};
  function heightFog(material:T.MeshStandardMaterial){
    if(material.userData.forestHeightFog)return;material.userData.forestHeightFog=true;
    const original=material.onBeforeCompile,key=material.customProgramCacheKey();
    material.onBeforeCompile=(shader,renderer)=>{
      original.call(material,shader,renderer);shader.uniforms.heightFogDensity=heightFogDensity;
      shader.vertexShader='varying vec3 forestFogPosition;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`vec4 fogWorld=vec4(transformed,1.);
        #ifdef USE_INSTANCING
        fogWorld=instanceMatrix*fogWorld;
        #endif
        forestFogPosition=(modelMatrix*fogWorld).xyz;
        #include <project_vertex>`);
      shader.fragmentShader='varying vec3 forestFogPosition;uniform float heightFogDensity;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <fog_fragment>',`#include <fog_fragment>
        #ifdef USE_FOG
        float deltaHeight=(forestFogPosition.y-cameraPosition.y)*.42;
        float integral=abs(deltaHeight)<.001?1.:(1.-exp(-deltaHeight))/deltaHeight;
        float opticalDepth=heightFogDensity*length(forestFogPosition-cameraPosition)*exp(-cameraPosition.y*.42)*integral;
        gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,1.-exp(-max(0.,opticalDepth)));
        #endif`);
    };material.customProgramCacheKey=()=>key+'-forest-height-fog';
  }
  function textured(material:T.MeshStandardMaterial,type:'bark'|'stone'|'ground'){
    material.onBeforeCompile=shader=>{
      shader.vertexShader='varying vec3 forestSurface;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nforestSurface=position;');
      shader.fragmentShader='varying vec3 forestSurface;\n'+shader.fragmentShader;
      const grain=type==='bark'?'sin(p.x*18.+sin(p.y*.8+p.z*5.)*2.)*sin(p.z*16.+sin(p.y*1.3))+sin(p.y*4.+p.z*3.)*.18':
        type==='stone'?'sin(p.x*8.+sin(p.z*12.))*sin(p.y*13.+sin(p.x*7.))*sin(p.z*9.)':'sin(p.x*.7+sin(p.z*.8))*sin(p.z*.63+sin(p.x*.4))';
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
        vec3 p=forestSurface;float grain=${grain};diffuseColor.rgb*=.92+.08*grain;`);
      shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
        vec3 dpdx=dFdx(forestSurface),dpdy=dFdy(forestSurface);
        vec3 r1=cross(dpdy,normal),r2=cross(normal,dpdx);float det=dot(dpdx,r1);
        normal=normalize(abs(det)*normal-${type==='stone'?'.028':'.008'}*sign(det)*(dFdx(grain)*r1+dFdy(grain)*r2));`);
    };material.customProgramCacheKey=()=>`forest-${type}`;
  }
  const stone=new T.MeshStandardMaterial({color:'#777568',roughness:.94});textured(stone,'stone');
  const moss=new T.MeshStandardMaterial({color:'#596345',roughness:1});textured(moss,'ground');
  const parts=new Map<T.Material,T.BufferGeometry[]>();
  function part(g:T.BufferGeometry,mat:T.Material,pos:[number,number,number]=[0,0,0],rotation=0){
    // Rounded boxes/extrusions and tubes have different index conventions.
    // Normalize them before batching all props of one material.
    if(g.index){const original=g;g=g.toNonIndexed();original.dispose();}
    g.rotateY(rotation);g.translate(...pos);const list=parts.get(mat)||[];list.push(g);parts.set(mat,list);
  }
  const groundGeo=new T.PlaneGeometry(240,260,200,220);groundGeo.rotateX(-Math.PI/2);groundGeo.translate(0,0,-35);
  const gp=groundGeo.attributes.position,colors:number[]=[],color=new T.Color();
  for(let i=0;i<gp.count;i++){
    const x=gp.getX(i),z=gp.getZ(i);gp.setY(i,h(x,z));
    const patch=.5+.24*Math.sin(x*.21+Math.sin(z*.17)*2)+.22*Math.cos(z*.23-x*.1);
    color.set('#3c4a2c').lerp(new T.Color('#68743e'),patch);
    const distance=forestPathDistance(x,z);if(distance<2.6)color.lerp(new T.Color('#756044'),Math.max(0,1-distance/2.6)*.85);
    colors.push(color.r,color.g,color.b);
  }
  groundGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));groundGeo.computeVertexNormals();
  const groundMat=new T.MeshStandardMaterial({vertexColors:true,roughness:1});
  const terrain=new T.Mesh(groundGeo,groundMat);terrain.receiveShadow=true;root.add(terrain);
  const floorReady=assetsReady.then(assets=>{const mat=woodlandFloor(groundGeo,assets,'forest');heightFog(mat);terrain.material=mat;groundMat.dispose();});

  // Pebbled trails are actual terrain-following ribbons with soft edges.
  const pathMat=new T.MeshStandardMaterial({color:'#9b8968',roughness:1,transparent:true,opacity:.16,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  pathMat.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec2 trailUv;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntrailUv=uv;');
    shader.fragmentShader='varying vec2 trailUv;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a*=smoothstep(0.,.3,trailUv.x)*smoothstep(0.,.3,1.-trailUv.x);');
  };
  for(const route of forestRoutes){
    const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z))),v:number[]=[],uv:number[]=[],ix:number[]=[];
    for(let i=0;i<=160;i++){
      const p=curve.getPoint(i/160),d=curve.getTangent(i/160),side=new T.Vector3(-d.z,0,d.x).normalize();
      for(const sign of [-1,1]){const x=p.x+side.x*sign*1.1,z=p.z+side.z*sign*1.1;v.push(x,h(x,z)+.035,z);uv.push((sign+1)/2,i/12);}
      if(i<160){const a=i*2;ix.push(a,a+1,a+2,a+1,a+3,a+2);}
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeVertexNormals();const mesh=new T.Mesh(g,pathMat);mesh.receiveShadow=true;root.add(mesh);
  }
  // Curved river, with the same banks and bridge deck used by walking physics.
  const waterMat=new T.MeshPhysicalMaterial({color:'#4c655c',roughness:.19,metalness:0,clearcoat:.7,transparent:true,opacity:.82,depthWrite:false});
  waterMat.onBeforeCompile=shader=>{
    shader.uniforms.forestTime=time;shader.vertexShader='uniform float forestTime;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nobjectNormal=normalize(objectNormal+vec3(.065*cos(position.x*3.+forestTime),0.,.06*sin(position.z*5.-forestTime)));');
  };
  const waterVerts:number[]=[],waterIx:number[]=[];
  for(let i=0;i<=180;i++){
    const x=-115+i*230/180,z=forestStreamZ(x);waterVerts.push(x,-.57,z-2.85,x,-.57,z+2.85);
    if(i<180){const a=i*2;waterIx.push(a,a+1,a+2,a+1,a+3,a+2);}
  }
  const waterGeo=new T.BufferGeometry();waterGeo.setAttribute('position',new T.Float32BufferAttribute(waterVerts,3));waterGeo.setIndex(waterIx);waterGeo.computeVertexNormals();root.add(new T.Mesh(waterGeo,waterMat));
  const b=forestBridge;
  for(let i=0;i<31;i++){
    const z=b.minZ+(i+.5)*(b.maxZ-b.minZ)/31,y=forestBridgeHeight(z);
    part(new RoundedBoxGeometry(b.width,.22,.36,1,.06),stone,[b.x,y-.11,z]);
    for(const side of [-1,1])part(new RoundedBoxGeometry(.42,.62,.38,1,.05),i%4===0?moss:stone,[b.x+side*(b.width*.5+.08),y+.22,z]);
  }
  // A broken arched gateway: separate voussoirs, weathered columns and moss.
  for(const x of [-5.2,.2])for(let row=0;row<6;row++){
    const y=h(x,-23)+row*.58+.3;
    part(new RoundedBoxGeometry(1.45,.55,1.75,2,.08),stone,[x+(rnd()-.5)*.07,y,-23],(rnd()-.5)*.05);
    if(row%2===0)part(new RoundedBoxGeometry(1.5,.08,1.8,1,.04),moss,[x,y+.28,-23]);
  }
  const archY=3.35+h(-2.5,-23),archX=-2.5;
  for(let i=0;i<13;i++){
    const a=i*Math.PI/13+.015,c=(i+1)*Math.PI/13-.015,shape=new T.Shape();
    shape.moveTo(Math.cos(a)*2.1,Math.sin(a)*2.1);shape.lineTo(Math.cos(c)*2.1,Math.sin(c)*2.1);shape.lineTo(Math.cos(c)*2.86,Math.sin(c)*2.86);shape.lineTo(Math.cos(a)*2.86,Math.sin(a)*2.86);shape.closePath();
    const g=new T.ExtrudeGeometry(shape,{depth:1.3,bevelEnabled:true,bevelSize:.055,bevelThickness:.055,bevelSegments:1,steps:1});part(g,i%4?stone:moss,[archX,archY,-23.65]);
  }
  // Fallen masonry and stream boulders, flattened and partially buried.
  const rock=new T.DodecahedronGeometry(1,1),rocks=new T.InstancedMesh(rock,stone,210);
  for(let i=0;i<210;i++){
    let x,z,s;
    if(i<100){x=-62+rnd()*124;z=forestStreamZ(x)+(i%2?1:-1)*(3.5+rnd()*2);s=.35+rnd()*.85;}
    else{x=(rnd()-.5)*83;z=31-rnd()*115;s=.25+rnd()*.7;}
    if(forestPathDistance(x,z)<1.8){x+=2.3;}
    dummy.position.set(x,h(x,z)+s*.1,z);dummy.rotation.set(rnd(),rnd()*6,rnd());dummy.scale.set(s,s*.45,s*.8);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);
  }rocks.castShadow=rocks.receiveShadow=true;root.add(rocks);

  const landmarksReady=Promise.all([assetsReady,new GLTFLoader().loadAsync('./assets/woodland/woodland-landmarks.glb')]).then(([assets,model])=>{
    model.scene.updateMatrixWorld(true);
    model.scene.traverse(o=>{
      if(!(o instanceof T.Mesh))return;
      if(o.name.startsWith('Hollow')){
        const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);
        const vertices=geometry.attributes.position;
        for(let i=0;i<vertices.count;i++){
          const y=vertices.getY(i),weight=1-T.MathUtils.smoothstep(y,0,1.4);
          vertices.setY(i,y+(h(vertices.getX(i)+2,vertices.getZ(i)-63)-h(2,-63))*weight);
        }geometry.computeVertexNormals();
        const tree=new T.Mesh(geometry,assets.bark);tree.position.set(2,h(2,-63)-.16,-63);
        tree.castShadow=tree.receiveShadow=true;root.add(tree);stats.blenderLandmarks++;
        // Fine leaf clusters crown the authored fork, instead of leaf blobs.
        const canopy=assets.tree('oak','near').find(row=>row.foliage)!;
        const leaves=new T.Mesh(canopy.geometry,canopy.material);leaves.position.set(2,h(2,-63)+4,-63);leaves.scale.setScalar(1.5);
        leaves.castShadow=leaves.receiveShadow=true;root.add(leaves);
      }else if(o.name==='river_rock_1'){
        rocks.geometry.dispose();rocks.geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);
      }
      o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();
    });
    for(const m of assets.materials)heightFog(m);
    renderer.shadowMap.needsUpdate=true;
  });
  const heartLight=new T.PointLight('#eac786',24,13,2);heartLight.position.set(2,2.8,-63);scene.add(heartLight);
  const heart=new T.Mesh(new T.OctahedronGeometry(.28),new T.MeshStandardMaterial({color:'#e7d79f',emissive:'#eebd6b',emissiveIntensity:1.5,roughness:.35}));heart.scale.set(.8,1.7,.8);heart.position.copy(heartLight.position);root.add(heart);
  for(let i=0;i<7;i++){
    const a=i*Math.PI*2/7,r=.6+rnd()*.3,shard=new T.Mesh(new T.OctahedronGeometry(.14),heart.material);
    shard.position.set(2+Math.cos(a)*r,h(2,-63)+.4,-63+Math.sin(a)*r);shard.scale.set(.7,1.8+rnd(),.7);shard.rotation.z=(rnd()-.5)*.8;root.add(shard);
  }

  // Three edited botanical skeletons, each with two matching LOD meshes.
  const treeRows:{mesh:T.InstancedMesh;near:boolean;species:WoodlandSpecies}[]=[],placements:{matrix:T.Matrix4;species:WoodlandSpecies}[]=[];
  let lastEye=new T.Vector3(Infinity,Infinity,Infinity);
  const treesReady=assetsReady.then(assets=>{
    for(const [i,t] of forestTrees.entries()){
      const species:WoodlandSpecies=i%5===0?'young':i%3===0?'ash':'oak';
      dummy.position.set(t.x,h(t.x,t.z)-.04,t.z);dummy.rotation.set(0,t.rotation,0);dummy.scale.setScalar(t.scale);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),species});
    }
    for(const [i,t] of forestHeroes.entries()){
      const species:WoodlandSpecies=i%2?'ash':'oak';const scale=t.height/(species==='ash'?24:21);
      dummy.position.set(t.x,h(t.x,t.z)-.06,t.z);dummy.rotation.set(0,i*2.3,0);dummy.scale.setScalar(scale);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),species});
    }
    for(const species of ['oak','ash','young'] as const)for(const lod of ['near','far'] as const)for(const row of assets.tree(species,lod)){
      heightFog(row.material);
      const mesh=new T.InstancedMesh(row.geometry,row.material,placements.length);mesh.count=0;
      mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);treeRows.push({mesh,near:lod==='near',species});
    }
    updateTrees(true);renderer.shadowMap.needsUpdate=true;
  });
  function updateTrees(force=false){
    if(!force&&lastEye.distanceToSquared(camera.position)<4)return;lastEye.copy(camera.position);
    for(const row of treeRows){
      let n=0;
      for(const p of placements){const e=p.matrix.elements,d=(e[12]-camera.position.x)**2+(e[14]-camera.position.z)**2;
        if(p.species===row.species&&(d<30**2)===row.near)row.mesh.setMatrixAt(n++,p.matrix);}
      row.mesh.count=n;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();
    }
  }
  // Sculpted lathed caps with an actual underside, curled stem and luminous rim.
  const capGeo=new T.LatheGeometry([[0,.66],[.3,.66],[.64,.68],[.86,.77],[.86,.83],[.73,1.08],[.45,1.3],[.16,1.38],[0,1.39]].map(([x,y])=>new T.Vector2(x,y)),24);
  const capMat=new T.MeshStandardMaterial({color:'#c6baa0',emissive:'#427970',emissiveIntensity:.035,roughness:.83});
  capMat.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec3 capPoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ncapPoint=position;');
    shader.fragmentShader='varying vec3 capPoint;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float gills=sin(atan(capPoint.x,capPoint.z)*68.)*.09;
      float spots=smoothstep(.9,.97,sin(capPoint.x*24.)*sin(capPoint.z*27.));
      diffuseColor.rgb*=mix(.85+gills,1.,smoothstep(.75,.95,capPoint.y));
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.84,.9,.79),spots*.65);`);
  };
  const stemGeo=new T.TubeGeometry(new T.CatmullRomCurve3([new T.Vector3(0,0,0),new T.Vector3(.08,.3,.03),new T.Vector3(0,.72,0)]),8,.085,7,false);
  const stemMat=new T.MeshStandardMaterial({color:'#c3d8bf',roughness:.8,emissive:'#4e8584',emissiveIntensity:.015});
  const rimGeo=new T.TorusGeometry(.84,.023,5,24);rimGeo.rotateX(Math.PI/2);rimGeo.translate(0,.79,0);
  const rimMat=new T.MeshStandardMaterial({color:'#b5ece3',emissive:'#84e5e1',emissiveIntensity:.18,roughness:.88});
  const mushroomSpots:T.Matrix4[]=[],tints:T.Color[]=[];
  for(let i=0;i<420;i++){
    const clusters=[[23,-32],[26,-38],[-10,9],[-18,-25],[10,11],[-27,-43],[7,-57]],c=clusters[i%clusters.length],a=rnd()*Math.PI*2,r=Math.sqrt(rnd())*7;
    const x=c[0]+Math.cos(a)*r,z=c[1]+Math.sin(a)*r;
    if(forestPathDistance(x,z)<1.4||Math.abs(z-forestStreamZ(x))<3.5||Math.hypot(x-2,z+62)<3.2)continue;
    const scale=i%37===0?.48+rnd()*.22:.07+rnd()*.22;
    dummy.position.set(x,h(x,z)-.015,z);dummy.rotation.set((rnd()-.5)*.13,rnd()*6.28,(rnd()-.5)*.18);dummy.scale.setScalar(scale);dummy.updateMatrix();mushroomSpots.push(dummy.matrix.clone());
    tints.push(new T.Color(i%3===0?'#b59d87':i%3===1?'#9ba78c':'#c4b599'));
  }
  for(const [geo,mat] of [[capGeo,capMat],[stemGeo,stemMat],[rimGeo,rimMat]] as const){
    const mesh=new T.InstancedMesh(geo,mat,mushroomSpots.length);mushroomSpots.forEach((m,i)=>{mesh.setMatrixAt(i,m);if(geo===capGeo)mesh.setColorAt(i,tints[i]);});mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);
  }stats.mushrooms=mushroomSpots.length;
  for(const [x,z] of [[23,-32],[-26,-43],[6,-57]]){const light=new T.PointLight('#98b9a1',1.8,5,2);light.position.set(x,h(x,z)+.8,z);scene.add(light);}

  // Reuse our curved, feathered 3D fern fronds from the flower garden.
  const fernsReady=Promise.resolve().then(()=>{
    const mat=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.95,color:'#a4aa86'});
    heightFog(mat);
    const mesh=new T.InstancedMesh(fernGeometry(),mat,1800);let count=0;
    for(let i=0;i<7000&&count<1800;i++){
      const x=(rnd()-.5)*110,z=39-rnd()*130;
      if(forestPathDistance(x,z)<1.4||Math.abs(z-forestStreamZ(x))<3.4)continue;
      dummy.position.set(x,h(x,z),z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.5+rnd()*1.25);dummy.updateMatrix();mesh.setMatrixAt(count++,dummy.matrix);
    }mesh.count=count;stats.ferns=count;mesh.receiveShadow=true;root.add(mesh);
  });
  // Ground cover grows in uneven colonies, leaving compressed soil at paths.
  // Curved blades have a dark base and fine pale tips; wind varies by position.
  const grassVerts:number[]=[],grassIndices:number[]=[],grassColors:number[]=[];
  for(let blade=0;blade<6;blade++){
    const a=blade*2.399,l=.23+rnd()*.38,w=.012+rnd()*.011,bx=Math.cos(a)*.09,bz=Math.sin(a)*.09;
    const offset=grassVerts.length/3;
    for(let row=0;row<4;row++){
      const t=row/3,spread=w*(1-t*.94),bend=t*t*l*.42;
      for(const side of [-1,1]){
        grassVerts.push(bx+Math.cos(a)*bend+Math.sin(a)*spread*side,l*t,bz+Math.sin(a)*bend-Math.cos(a)*spread*side);
        color.set('#36442c').lerp(new T.Color('#9a9c60'),t*.78);grassColors.push(color.r,color.g,color.b);
      }
      if(row<3){const k=offset+row*2;grassIndices.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
  }
  const grassGeo=new T.BufferGeometry();grassGeo.setAttribute('position',new T.Float32BufferAttribute(grassVerts,3));grassGeo.setAttribute('color',new T.Float32BufferAttribute(grassColors,3));grassGeo.setIndex(grassIndices);grassGeo.computeVertexNormals();
  const grassMat=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:1});
  grassMat.onBeforeCompile=shader=>{
    shader.uniforms.woodlandTime=time;shader.vertexShader='uniform float woodlandTime;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      vec2 anchor=vec2(0.);
      #ifdef USE_INSTANCING
      anchor=instanceMatrix[3].xz;
      #endif
      transformed.x+=sin(woodlandTime*1.1+dot(anchor,vec2(.25,.31)))*pow(position.y,2.)*.3;`);
  };heightFog(grassMat);
  const grasses=new T.InstancedMesh(grassGeo,grassMat,24000);let grassCount=0;
  for(let i=0;i<75000&&grassCount<24000;i++){
    const x=(rnd()-.5)*110,z=38-rnd()*135,d=forestPathDistance(x,z);
    const patch=Math.sin(x*.24+Math.cos(z*.16)*2)*Math.cos(z*.31-x*.11);
    if(d<1.18||Math.abs(z-forestStreamZ(x))<3.15||patch<-.12||Math.hypot(x-2,z+63)<3.8)continue;
    dummy.position.set(x,h(x,z)-.015,z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.7+rnd()*.9);dummy.updateMatrix();grasses.setMatrixAt(grassCount++,dummy.matrix);
  }grasses.count=grassCount;grasses.receiveShadow=true;root.add(grasses);stats.grassClumps=grassCount;
  const litterGeo=new T.BufferGeometry();
  litterGeo.setAttribute('position',new T.Float32BufferAttribute([0,0,-.15,-.045,.008,-.07,-.065,.008,.025,0,0,.15,.065,.008,.025,.045,.008,-.07,0,.025,0],3));
  litterGeo.setIndex([0,1,6,1,2,6,2,3,6,3,4,6,4,5,6,5,0,6]);
  litterGeo.computeVertexNormals();
  const litterMat=new T.MeshStandardMaterial({color:'#8b6945',roughness:1,side:T.DoubleSide});heightFog(litterMat);
  const litter=new T.InstancedMesh(litterGeo,litterMat,4200);let litterCount=0;
  for(let i=0;i<5000&&litterCount<4200;i++){
    const x=(rnd()-.5)*90,z=36-rnd()*120;
    if(Math.abs(z-forestStreamZ(x))<3.2||forestPathDistance(x,z)<.65)continue;
    dummy.position.set(x,h(x,z)+.018,z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(.5+rnd()*1.3);dummy.updateMatrix();litter.setMatrixAt(litterCount,dummy.matrix);
    litter.setColorAt(litterCount++,new T.Color().setHSL(.08+rnd()*.05,.2+rnd()*.2,.25+rnd()*.25));
  }litter.count=litterCount;litter.receiveShadow=true;root.add(litter);stats.leafLitter=litterCount;
  const pebbles=new T.InstancedMesh(new T.IcosahedronGeometry(1,0),stone,1700);
  for(let i=0;i<1700;i++){
    const route=forestRoutes[i%forestRoutes.length],point=route[Math.floor(rnd()*route.length)];
    const x=point[0]+(rnd()-.5)*5,z=point[1]+(rnd()-.5)*6,s=.018+rnd()*.045;
    dummy.position.set(x,h(x,z)+s*.25,z);dummy.rotation.set(rnd(),rnd()*6.28,rnd());dummy.scale.set(s*1.3,s*.5,s);dummy.updateMatrix();pebbles.setMatrixAt(i,dummy.matrix);
  }pebbles.receiveShadow=true;root.add(pebbles);
  const logsReady=assetsReady.then(assets=>{
    const endMaterial=new T.MeshStandardMaterial({color:'#a48b5e',roughness:.98});heightFog(endMaterial);
    for(const [x,z,angle] of [[-11,-3,-.6],[18,-42,.8],[-29,-29,1.8]]){
      const log=new T.Group(),length=5.4,radius=.28;
      const shell=new T.Mesh(new T.CylinderGeometry(radius*.8,radius,length,12,8,true),assets.bark);shell.rotation.z=Math.PI/2;shell.castShadow=shell.receiveShadow=true;log.add(shell);
      for(const side of [-1,1]){const cap=new T.Mesh(new T.CircleGeometry(radius*(side>0?.8:1),16),endMaterial);cap.rotation.y=side*Math.PI/2;cap.position.x=side*length*.5;log.add(cap);}
      log.position.set(x,h(x,z)+.2,z);log.rotation.y=angle;root.add(log);
    }
  });
  // Lanterns are the warm counterpoint to the cool woodland palette.
  const iron=new T.MeshStandardMaterial({color:'#384b49',metalness:.4,roughness:.65});
  const glowMat=new T.MeshStandardMaterial({color:'#c8a66b',emissive:'#ffd191',emissiveIntensity:.8,roughness:.5});
  for(const [x,z] of [[-5.5,3],[.5,3],[-5.5,-16],[.5,-16],[-7.5,-23],[2.5,-23]]){
    const y=h(x,z);part(new T.CylinderGeometry(.055,.07,2.2,7),iron,[x,y+1.1,z]);
    part(new T.CylinderGeometry(.28,.23,.44,6),glowMat,[x,y+2.15,z]);
    part(new T.ConeGeometry(.37,.28,6),iron,[x,y+2.52,z]);
    for(const a of [0,Math.PI*.5,Math.PI,Math.PI*1.5])part(new T.BoxGeometry(.025,.5,.025),iron,[x+Math.cos(a)*.22,y+2.15,z+Math.sin(a)*.22]);
    const light=new T.PointLight('#ffd299',8,8,2);light.position.set(x,y+2.1,z);scene.add(light);
  }
  for(const [material,list] of parts){const g=mergeGeometries(list);if(!g)throw Error('Forest geometry merge failed');list.forEach(p=>p.dispose());const mesh=new T.Mesh(g,material);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}

  const particleGeo=new T.BufferGeometry(),positions:number[]=[],phases:number[]=[],sizes:number[]=[],particleColors:number[]=[];
  for(let i=0;i<600;i++){
    const x=(rnd()-.5)*80,z=28-rnd()*105,y=h(x,z)+.6+rnd()*7;
    positions.push(x,y,z);phases.push(rnd()*6.28);sizes.push(i<420?.55+rnd()*.8:.35);
    color.set(i<420?(i%4?'#e7d596':'#8de0ce'):'#90b9ba');particleColors.push(color.r,color.g,color.b);
  }
  particleGeo.setAttribute('position',new T.Float32BufferAttribute(positions,3));particleGeo.setAttribute('phase',new T.Float32BufferAttribute(phases,1));particleGeo.setAttribute('size',new T.Float32BufferAttribute(sizes,1));particleGeo.setAttribute('color',new T.Float32BufferAttribute(particleColors,3));
  const particleMat=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,vertexColors:true,uniforms:{time,pixelRatio:{value:renderer.getPixelRatio()}},
    vertexShader:`uniform float time,pixelRatio;attribute float phase,size;varying vec3 tint;varying float alpha;
      void main(){vec3 p=position;p.x+=sin(time*.24+phase)*1.2;p.y+=sin(time*.47+phase)*.3;p.z+=cos(time*.2+phase)*.8;
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
      gl_PointSize=clamp(size*110.*pixelRatio/-mv.z,1.,7.*pixelRatio);tint=color;
      alpha=(.3+.7*pow(.5+.5*sin(time*1.3+phase),2.))*exp(-max(0.,-mv.z)*.009);}`,
    fragmentShader:`varying vec3 tint;varying float alpha;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d*d),2.)*alpha;if(a<.015)discard;gl_FragColor=vec4(tint*1.7,a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });const fireflies=new T.Points(particleGeo,particleMat);fireflies.frustumCulled=false;root.add(fireflies);
  // Integrate the low mist along each camera ray. It fades continuously around
  // roots and pillars, without horizontal transparent sheets cutting them off.
  root.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof T.MeshStandardMaterial)heightFog(m);});
  const rainGeo=new T.BufferGeometry(),rainArray=new Float32Array(750*6);
  for(let i=0;i<750;i++){
    const x=(rnd()-.5)*48,y=rnd()*24,z=(rnd()-.5)*48;rainArray.set([x,y,z,x-.035,y+.48,z],i*6);
  }rainGeo.setAttribute('position',new T.BufferAttribute(rainArray,3));
  const rain=new T.LineSegments(rainGeo,new T.LineBasicMaterial({color:'#a5c9d6',transparent:true,opacity:.36,depthWrite:false}));rain.visible=false;root.add(rain);
  function setAtmosphere(value:ForestAtmosphere){
    const night=value==='moon';stats.atmosphere=value;rain.visible=value==='rain';
    const fog=scene.fog as T.FogExp2;fog.color.set(night?'#243b48':value==='rain'?'#879698':'#96a491');fog.density=value==='mist'?.016:value==='rain'?.011:night?.009:.0045;
    heightFogDensity.value=value==='mist'?.023:value==='rain'?.014:.003;
    moon.intensity=night?1.3:value==='rain'?1.2:4.2;moon.color.set(night?'#b8cce2':'#ffe1aa');
    hemi.intensity=night?.4:value==='rain'?.8:.5;rim.intensity=night?.22:.35;
    rendering.weather(night?'night':value==='rain'?'rain':'dusk');scene.environmentIntensity=night?.12:value==='rain'?.4:.32;
    sky.visible=!night;moonDisc.visible=night;scene.background=new T.Color(night?'#15283d':'#a4b9bd');
    fireflies.visible=night||value==='mist';
    renderer.shadowMap.needsUpdate=true;
  }
  setAtmosphere('dusk');
  function reset(){walk.stop();camera.position.set(2,3.1,24);controls.target.set(-2.5,3.2,-23);controls.update();}
  function focus(id:string){
    const place=forestPlaces.find(p=>p.id===id);if(!place)return;
    if(walk.active){walk.moveTo(...place.player);walk.lookAt(new T.Vector3(...place.target as [number,number,number]));}
    else{camera.position.fromArray(place.eye);controls.target.fromArray(place.target);controls.update();}
    updateTrees(true);renderer.shadowMap.needsUpdate=true;
  }
  let frame=0,disposed=false,last=performance.now();
  function resize(){const width=container.clientWidth,height=container.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();rendering.resize(width,height);}
  const observer=new ResizeObserver(resize);observer.observe(container);resize();
  const ready=Promise.allSettled([treesReady,fernsReady,floorReady,landmarksReady,rendering.ready,logsReady]).then(results=>{
    results.forEach((result,i)=>{if(result.status==='rejected')stats.failed.push(['林木','蕨类','地表','Blender 地标','环境照明','倒木'][i]+': '+String(result.reason));});stats.ready=true;renderer.shadowMap.needsUpdate=true;
  });
  function animate(now:number){
    if(disposed)return;frame=requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.25);last=now;time.value+=dt;
    if(walk.active)walk.update(dt);else controls.update();sky.position.copy(camera.position);updateTrees();
    heart.rotation.y+=dt*.2;heart.position.y=heartLight.position.y+Math.sin(time.value*.8)*.12;
    if(rain.visible){rain.position.set(camera.position.x,0,camera.position.z);for(let i=0;i<750;i++){const k=i*6;rainArray[k+1]-=dt*9;if(rainArray[k+1]<0)rainArray[k+1]+=24;rainArray[k+4]=rainArray[k+1]+.48;}rainGeo.attributes.position.needsUpdate=true;}
    rendering.render();stats.draws=renderer.info.render.calls;stats.triangles=renderer.info.render.triangles;onFrame();
  }frame=requestAnimationFrame(animate);
  return{scene,camera,controls,renderer,walk,stats,ready,rendering:rendering.stats,setAtmosphere,focus,reset,
    dispose(){
      if(disposed)return;disposed=true;cancelAnimationFrame(frame);observer.disconnect();walk.dispose();controls.dispose();rendering.dispose();
      const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
      scene.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.Points||o instanceof T.Line){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const value of Object.values(m))if(value instanceof T.Texture)textures.add(value);if(m instanceof T.ShaderMaterial)for(const u of Object.values(m.uniforms))if(u.value instanceof T.Texture)textures.add(u.value);}}});
      geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();
    },
  };
}
