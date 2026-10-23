import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createGardenRendering } from './flower-rendering';
import { createFlowerSky } from './flower-sky';
import { createGardenWalk } from './flower-walk';
import { fernGeometry } from './flower-garden';
import { forestHeight as h,forestBridge,forestBridgeHeight,forestRoutes,forestPathDistance,forestStreamZ,forestHeroes,forestTrees,forestCanWalk,forestWalkHeight,forestRandom,forestPlaces } from './forest-terrain';

export type ForestAtmosphere='moon'|'mist'|'rain';
export function createBlackForest(container:HTMLElement,onFrame:()=>void){
  const rnd=forestRandom(48217),scene=new T.Scene();
  scene.fog=new T.FogExp2('#153b42',.012);scene.background=new T.Color('#122e38');
  const renderer=new T.WebGLRenderer({antialias:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.NeutralToneMapping;renderer.toneMappingExposure=1.08;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
  renderer.info.autoReset=false;container.append(renderer.domElement);
  const camera=new T.PerspectiveCamera(57,1,.12,380);camera.position.set(2,4.4,32);
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(-2,5,-18);
  controls.enableDamping=true;controls.dampingFactor=.09;controls.maxPolarAngle=Math.PI*.495;controls.minDistance=2;controls.maxDistance=170;controls.update();
  const walk=createGardenWalk(camera,controls,renderer.domElement,{canWalk:forestCanWalk,height:forestWalkHeight,spawn:[2,29]});
  const rendering=createGardenRendering(renderer,scene,camera);rendering.weather('night');scene.environmentIntensity=.16;
  const sky=createFlowerSky(scene);sky.setWeather('night');
  const moon=new T.DirectionalLight('#bcdcf2',2.6);moon.position.set(-42,90,-48);moon.target.position.set(0,0,-23);
  moon.castShadow=true;moon.shadow.mapSize.setScalar(innerWidth<760?2048:4096);
  Object.assign(moon.shadow.camera,{left:-110,right:110,top:140,bottom:-140,near:1,far:240});
  moon.shadow.normalBias=.045;moon.shadow.bias=-.0001;moon.shadow.radius=4;scene.add(moon,moon.target);
  const hemi=new T.HemisphereLight('#8db7cc','#375e50',.78);scene.add(hemi);
  const rim=new T.DirectionalLight('#78bfc4',1.1);rim.position.set(30,22,10);scene.add(rim);
  const moonDisc=new T.Mesh(new T.SphereGeometry(3.4,32,24),new T.MeshStandardMaterial({color:'#e7e4cb',emissive:'#7a97a1',emissiveIntensity:.25,roughness:1,fog:false}));moonDisc.position.set(30,53,-135);scene.add(moonDisc);
  const root=new T.Group();root.name='black-forest-procedural-world';scene.add(root);
  const stats={ready:false,failed:[] as string[],trees:forestTrees.length+forestHeroes.length+1,mushrooms:0,ferns:0,fireflies:420,dust:180,atmosphere:'moon' as ForestAtmosphere,draws:0,triangles:0};
  const time={value:0},dummy=new T.Object3D(),matrix=new T.Matrix4();
  const heightFogDensity={value:.009};
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
  const bark=new T.MeshStandardMaterial({color:'#657866',roughness:.96});textured(bark,'bark');
  const stone=new T.MeshStandardMaterial({color:'#8c9d96',roughness:.92});textured(stone,'stone');
  const moss=new T.MeshStandardMaterial({color:'#608463',roughness:1});textured(moss,'ground');
  const wood=new T.MeshStandardMaterial({color:'#6b6551',roughness:.88});textured(wood,'bark');
  const parts=new Map<T.Material,T.BufferGeometry[]>();
  function part(g:T.BufferGeometry,mat:T.Material,pos:[number,number,number]=[0,0,0],rotation=0){
    // Rounded boxes/extrusions and tubes have different index conventions.
    // Normalize them before batching all props of one material.
    if(g.index){const original=g;g=g.toNonIndexed();original.dispose();}
    g.rotateY(rotation);g.translate(...pos);const list=parts.get(mat)||[];list.push(g);parts.set(mat,list);
  }
  function tube(points:number[][],radius:number,mat:T.Material,taper=.12){
    const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p as [number,number,number])));
    const g=new T.TubeGeometry(curve,Math.max(8,points.length*5),radius,9,false),p=g.attributes.position;
    // TubeGeometry's U runs along the branch. Bark's grain runs along V.
    const uv=g.attributes.uv;for(let i=0;i<uv.count;i++){const u=uv.getX(i);uv.setXY(i,uv.getY(i),u);}
    for(let i=0;i<p.count;i++){
      const t=Math.floor(i/10)/(Math.max(8,points.length*5)),c=curve.getPointAt(Math.min(t,1)),scale=1-(1-taper)*t;
      const fold=1+.1*Math.sin(Math.atan2(p.getZ(i)-c.z,p.getX(i)-c.x)*5+t*11)*(1-t);
      p.setXYZ(i,c.x+(p.getX(i)-c.x)*scale*fold,c.y+(p.getY(i)-c.y)*scale,c.z+(p.getZ(i)-c.z)*scale*fold);
    }
    g.computeVertexNormals();part(g,mat);
  }
  const groundGeo=new T.PlaneGeometry(240,260,200,220);groundGeo.rotateX(-Math.PI/2);groundGeo.translate(0,0,-35);
  const gp=groundGeo.attributes.position,colors:number[]=[],color=new T.Color();
  for(let i=0;i<gp.count;i++){
    const x=gp.getX(i),z=gp.getZ(i);gp.setY(i,h(x,z));
    const patch=.5+.24*Math.sin(x*.21+Math.sin(z*.17)*2)+.22*Math.cos(z*.23-x*.1);
    color.set('#254f48').lerp(new T.Color('#6c8963'),patch);
    const distance=forestPathDistance(x,z);if(distance<2)color.lerp(new T.Color('#7a7e69'),Math.max(0,1-distance/2)*.65);
    colors.push(color.r,color.g,color.b);
  }
  groundGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));groundGeo.computeVertexNormals();
  const groundMat=new T.MeshStandardMaterial({vertexColors:true,roughness:1});textured(groundMat,'ground');
  const terrain=new T.Mesh(groundGeo,groundMat);terrain.receiveShadow=true;root.add(terrain);

  // Pebbled trails are actual terrain-following ribbons with soft edges.
  const pathMat=new T.MeshStandardMaterial({color:'#91917a',roughness:1,transparent:true,opacity:.48,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
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
  const waterMat=new T.MeshPhysicalMaterial({color:'#2b7e89',roughness:.18,metalness:.08,clearcoat:1,transparent:true,opacity:.88,depthWrite:false});
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

  const crownAnchors:{x:number;y:number;z:number;scale:number}[]=[];
  function ancientTree(x:number,z:number,height:number,radius:number,hollow=false){
    const y=h(x,z)-.08,tilt=(rnd()-.5)*3;
    tube([[x,y,z],[x+.5,y+height*.22,z+.35],[x+tilt,y+height*.55,z-.2],[x+tilt+1,y+height*.86,z-1]],radius,bark,.2);
    for(let i=0;i<7;i++){
      const a=i/7*Math.PI*2+rnd()*.2,len=radius*(3+rnd()*2),endX=x+Math.cos(a)*len,endZ=z+Math.sin(a)*len;
      tube([[x,y+radius*.6,z],[x+Math.cos(a)*len*.4,h(x,z)+.3,z+Math.sin(a)*len*.4],[endX,h(endX,endZ)+.05,endZ]],radius*.36,bark,.06);
    }
    for(let i=0;i<6;i++){
      const a=i/6*Math.PI*2+rnd()*.5,by=y+height*(.5+rnd()*.24),len=5+rnd()*4;
      const ex=x+Math.cos(a)*len,ez=z+Math.sin(a)*len;
      tube([[x+tilt*.5,by,z],[x+Math.cos(a)*len*.35,by+1.2,z+Math.sin(a)*len*.35],[ex,by+4+rnd()*3,ez]],radius*.43,bark,.035);
      crownAnchors.push({x:ex,y:by+4,z:ez,scale:4.5+rnd()*2});
    }
    if(!hollow)for(let i=0;i<3;i++){
      const a=rnd()*6.28,start=[x+Math.cos(a)*radius,y+height*.4,z+Math.sin(a)*radius];
      tube([start,[start[0]+.25,start[1]-2,start[2]+.4],[start[0]-.3,start[1]-6,start[2]+.2]],.045,moss,.1);
    }
  }
  for(const t of forestHeroes)ancientTree(t.x,t.z,t.height,t.r);
  // Three trunks and interlocking boughs make an entrance one can walk inside.
  for(const [x,z] of [[-1.2,-63],[5.2,-63],[2,-66]])ancientTree(x,z,34,1.7,true);
  tube([[-1.2,h(-1.2,-63)+2.2,-63],[-1,7,-63],[2,9,-63],[5.2,6,-63]],.62,bark,.5);
  const heartLight=new T.PointLight('#eac786',24,13,2);heartLight.position.set(2,2.8,-63);scene.add(heartLight);
  const heart=new T.Mesh(new T.OctahedronGeometry(.42),new T.MeshStandardMaterial({color:'#e7d79f',emissive:'#eebd6b',emissiveIntensity:1.5,roughness:.35}));heart.scale.set(.8,1.7,.8);heart.position.copy(heartLight.position);root.add(heart);
  for(let i=0;i<7;i++){
    const a=i*Math.PI*2/7,r=.6+rnd()*.3,shard=new T.Mesh(new T.OctahedronGeometry(.14),heart.material);
    shard.position.set(2+Math.cos(a)*r,h(2,-63)+.4,-63+Math.sin(a)*r);shard.scale.set(.7,1.8+rnd(),.7);shard.rotation.z=(rnd()-.5)*.8;root.add(shard);
  }
  const rings=new T.Group();rings.position.set(2,h(2,-61)+.16,-61);root.add(rings);
  for(const r of [1.15,1.5]){const g=new T.TorusGeometry(r,.035,6,64);g.rotateX(Math.PI/2);rings.add(new T.Mesh(g,new T.MeshStandardMaterial({color:'#b5b893',emissive:'#7baf90',emissiveIntensity:.5,roughness:.85})));}

  // Reuse authored alpha-cutout foliage, with instancing and camera-distance LOD.
  const treeRows:{mesh:T.InstancedMesh;local:T.Matrix4;near:boolean}[]=[],placements:T.Matrix4[]=[];
  let lastEye=new T.Vector3(Infinity,Infinity,Infinity);
  const treesReady=(async()=>{
    const loader=new GLTFLoader(),models=await Promise.all(['near','far'].map(l=>loader.loadAsync(`./assets/flower-garden/garden-tree-${l}.glb`)));
    for(const t of forestTrees){dummy.position.set(t.x,h(t.x,t.z)-2.6,t.z);dummy.rotation.set(0,t.rotation,0);dummy.scale.set(1.6*t.scale,2.65*t.scale,1.6*t.scale);dummy.updateMatrix();placements.push(dummy.matrix.clone());}
    for(const [index,model] of models.entries()){
      const box=new T.Box3().setFromObject(model.scene),center=box.getCenter(new T.Vector3()),s=9.5/box.getSize(new T.Vector3()).y;
      model.scene.scale.setScalar(s);model.scene.position.set(-center.x*s,-box.min.y*s,-center.z*s);model.scene.updateMatrixWorld(true);
      model.scene.traverse(o=>{
        if(!(o instanceof T.Mesh))return;
        for(const mat of Array.isArray(o.material)?o.material:[o.material])if(mat instanceof T.MeshStandardMaterial){
          mat.roughness=.9;mat.metalness=0;
          if(mat.name.includes('Foliage')){
            mat.color.multiply(new T.Color('#a7c5bd'));mat.alphaTest=.4;mat.transparent=false;mat.side=T.DoubleSide;
            mat.onBeforeCompile=shader=>{
              shader.uniforms.forestTime=time;shader.vertexShader='uniform float forestTime;\n'+shader.vertexShader;
              shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
                transformed.x+=sin(forestTime*.65+position.y*2.+position.z)*.008*max(position.y,0.);`);
            };
          }else if(index===0&&mat.map&&!bark.map){
            bark.map=mat.map.clone();bark.map.wrapS=bark.map.wrapT=T.RepeatWrapping;bark.map.repeat.set(2,8);
            if(mat.normalMap){bark.normalMap=mat.normalMap.clone();bark.normalMap.wrapS=bark.normalMap.wrapT=T.RepeatWrapping;bark.normalMap.repeat.set(2,8);}
            bark.normalScale.set(.35,.35);bark.color.set('#96aa98');bark.needsUpdate=true;
          }
          heightFog(mat);
        }
        const mesh=new T.InstancedMesh(o.geometry,o.material,placements.length);mesh.count=0;mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);treeRows.push({mesh,local:o.matrixWorld.clone(),near:index===0});
        if(index===1&&(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.name.includes('Foliage'))){
          const crown=new T.InstancedMesh(o.geometry,o.material,crownAnchors.length);
          // Normalize the licensed leaf canopy before placing it on our boughs.
          const cb=new T.Box3().setFromBufferAttribute(o.geometry.attributes.position as T.BufferAttribute),cc=cb.getCenter(new T.Vector3()),cs=cb.getSize(new T.Vector3());
          const local=new T.Matrix4().makeTranslation(-cc.x,-cc.y,-cc.z);
          for(const [i,a] of crownAnchors.entries()){
            dummy.position.set(a.x,a.y+1,a.z);dummy.rotation.set(0,i*2.4,0);dummy.scale.set(a.scale*2/cs.x,a.scale/cs.y,a.scale*2/cs.z);dummy.updateMatrix();crown.setMatrixAt(i,matrix.multiplyMatrices(dummy.matrix,local));
          }crown.castShadow=crown.receiveShadow=true;root.add(crown);
        }
      });
    }
    updateTrees(true);renderer.shadowMap.needsUpdate=true;
  })();
  function updateTrees(force=false){
    if(!force&&lastEye.distanceToSquared(camera.position)<4)return;lastEye.copy(camera.position);
    for(const row of treeRows){
      let n=0;
      for(const m of placements){const e=m.elements,d=(e[12]-camera.position.x)**2+(e[14]-camera.position.z)**2;
        if((d<26**2)===row.near)row.mesh.setMatrixAt(n++,matrix.multiplyMatrices(m,row.local));}
      row.mesh.count=n;row.mesh.instanceMatrix.needsUpdate=true;row.mesh.computeBoundingSphere();
    }
  }
  // Sculpted lathed caps with an actual underside, curled stem and luminous rim.
  const capGeo=new T.LatheGeometry([[0,.66],[.3,.66],[.64,.68],[.86,.77],[.86,.83],[.73,1.08],[.45,1.3],[.16,1.38],[0,1.39]].map(([x,y])=>new T.Vector2(x,y)),24);
  const capMat=new T.MeshStandardMaterial({color:'#e1f0d9',emissive:'#65b7c6',emissiveIntensity:.35,roughness:.48});
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
  const stemMat=new T.MeshStandardMaterial({color:'#c3d8bf',roughness:.8,emissive:'#4e8584',emissiveIntensity:.13});
  const rimGeo=new T.TorusGeometry(.84,.023,5,24);rimGeo.rotateX(Math.PI/2);rimGeo.translate(0,.79,0);
  const rimMat=new T.MeshStandardMaterial({color:'#b5ece3',emissive:'#84e5e1',emissiveIntensity:1.25,roughness:.6});
  const mushroomSpots:T.Matrix4[]=[],tints:T.Color[]=[];
  for(let i=0;i<420;i++){
    const clusters=[[23,-32],[26,-38],[-10,9],[-18,-25],[10,11],[-27,-43],[7,-57]],c=clusters[i%clusters.length],a=rnd()*Math.PI*2,r=Math.sqrt(rnd())*7;
    const x=c[0]+Math.cos(a)*r,z=c[1]+Math.sin(a)*r;
    if(forestPathDistance(x,z)<1.4||Math.abs(z-forestStreamZ(x))<3.5||Math.hypot(x-2,z+62)<3.2)continue;
    const scale=i%17===0?1+rnd()*.7:.17+rnd()*.57;
    dummy.position.set(x,h(x,z)-.015,z);dummy.rotation.set((rnd()-.5)*.13,rnd()*6.28,(rnd()-.5)*.18);dummy.scale.setScalar(scale);dummy.updateMatrix();mushroomSpots.push(dummy.matrix.clone());
    tints.push(new T.Color(i%3===0?'#b0a0d7':i%3===1?'#77c1bf':'#abc9a9'));
  }
  for(const [geo,mat] of [[capGeo,capMat],[stemGeo,stemMat],[rimGeo,rimMat]] as const){
    const mesh=new T.InstancedMesh(geo,mat,mushroomSpots.length);mushroomSpots.forEach((m,i)=>{mesh.setMatrixAt(i,m);if(geo===capGeo)mesh.setColorAt(i,tints[i]);});mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);
  }stats.mushrooms=mushroomSpots.length;
  for(const [x,z] of [[23,-32],[-26,-43],[6,-57]]){const light=new T.PointLight('#6bc8cb',10,9,2);light.position.set(x,h(x,z)+.8,z);scene.add(light);}

  // Reuse our curved, feathered 3D fern fronds from the flower garden.
  const fernsReady=Promise.resolve().then(()=>{
    const mat=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.95,color:'#a4bdb0'});
    heightFog(mat);
    const mesh=new T.InstancedMesh(fernGeometry(),mat,1800);let count=0;
    for(let i=0;i<7000&&count<1800;i++){
      const x=(rnd()-.5)*110,z=39-rnd()*130;
      if(forestPathDistance(x,z)<1.4||Math.abs(z-forestStreamZ(x))<3.4)continue;
      dummy.position.set(x,h(x,z),z);dummy.rotation.set(0,rnd()*6.28,0);dummy.scale.setScalar(1.1+rnd()*1.5);dummy.updateMatrix();mesh.setMatrixAt(count++,dummy.matrix);
    }mesh.count=count;stats.ferns=count;mesh.receiveShadow=true;root.add(mesh);
  });
  // Lanterns are the warm counterpoint to the cool woodland palette.
  const iron=new T.MeshStandardMaterial({color:'#384b49',metalness:.4,roughness:.65});
  const glowMat=new T.MeshStandardMaterial({color:'#f3d49f',emissive:'#ffd191',emissiveIntensity:2.7,roughness:.5});
  for(const [x,z] of [[-5.5,3],[.5,3],[-5.5,-16],[.5,-16],[-7.5,-23],[2.5,-23]]){
    const y=h(x,z);part(new T.CylinderGeometry(.055,.07,2.2,7),iron,[x,y+1.1,z]);
    part(new T.CylinderGeometry(.28,.23,.44,6),glowMat,[x,y+2.15,z]);
    part(new T.ConeGeometry(.37,.28,6),iron,[x,y+2.52,z]);
    for(const a of [0,Math.PI*.5,Math.PI,Math.PI*1.5])part(new T.BoxGeometry(.025,.5,.025),iron,[x+Math.cos(a)*.22,y+2.15,z+Math.sin(a)*.22]);
    const light=new T.PointLight('#ffd299',14,10,2);light.position.set(x,y+2.1,z);scene.add(light);
  }
  for(const [material,list] of parts){const g=mergeGeometries(list);if(!g)throw Error('Forest geometry merge failed');list.forEach(p=>p.dispose());const mesh=new T.Mesh(g,material);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);}

  const particleGeo=new T.BufferGeometry(),positions:number[]=[],phases:number[]=[],sizes:number[]=[],particleColors:number[]=[];
  for(let i=0;i<600;i++){
    const x=(rnd()-.5)*80,z=28-rnd()*105,y=h(x,z)+.6+rnd()*7;
    positions.push(x,y,z);phases.push(rnd()*6.28);sizes.push(i<420?1.3+rnd()*1.7:.55);
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
  const shaftMat=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,uniforms:{time},
    vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec2 vUv;uniform float time;void main(){float a=pow(sin(vUv.y*3.14159),2.)*.018*(.7+.3*sin(vUv.x*13.+time*.1));gl_FragColor=vec4(.38,.62,.68,a);}',
  });
  for(const [x,z] of [[-24,-35],[18,-28],[-3,-65]]){const ray=new T.Mesh(new T.ConeGeometry(4,36,24,1,true),shaftMat);ray.position.set(x,18,z);ray.rotation.z=-.32;root.add(ray);}
  const rainGeo=new T.BufferGeometry(),rainArray=new Float32Array(750*6);
  for(let i=0;i<750;i++){
    const x=(rnd()-.5)*48,y=rnd()*24,z=(rnd()-.5)*48;rainArray.set([x,y,z,x-.035,y+.48,z],i*6);
  }rainGeo.setAttribute('position',new T.BufferAttribute(rainArray,3));
  const rain=new T.LineSegments(rainGeo,new T.LineBasicMaterial({color:'#a5c9d6',transparent:true,opacity:.36,depthWrite:false}));rain.visible=false;root.add(rain);
  function setAtmosphere(value:ForestAtmosphere){
    stats.atmosphere=value;rain.visible=value==='rain';(scene.fog as T.FogExp2).density=value==='mist'?.022:value==='rain'?.017:.012;
    heightFogDensity.value=value==='mist'?.025:value==='rain'?.014:.009;moon.intensity=value==='rain'?1.3:2.6;scene.environmentIntensity=value==='rain'?.2:.16;
    renderer.shadowMap.needsUpdate=true;
  }
  function reset(){walk.stop();camera.position.set(2,4.4,32);controls.target.set(-2,5,-18);controls.update();}
  function focus(id:string){
    const place=forestPlaces.find(p=>p.id===id);if(!place)return;
    if(walk.active){walk.moveTo(...place.player);walk.lookAt(new T.Vector3(...place.target as [number,number,number]));}
    else{camera.position.fromArray(place.eye);controls.target.fromArray(place.target);controls.update();}
    updateTrees(true);renderer.shadowMap.needsUpdate=true;
  }
  let frame=0,disposed=false,last=performance.now();
  function resize(){const width=container.clientWidth,height=container.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();rendering.resize(width,height);}
  const observer=new ResizeObserver(resize);observer.observe(container);resize();
  const ready=Promise.allSettled([treesReady,fernsReady,sky.ready,rendering.ready]).then(results=>{
    results.forEach((result,i)=>{if(result.status==='rejected')stats.failed.push(['林木','蕨类','天空','环境照明'][i]+': '+String(result.reason));});stats.ready=true;renderer.shadowMap.needsUpdate=true;
  });
  function animate(now:number){
    if(disposed)return;frame=requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.25);last=now;time.value+=dt;
    if(walk.active)walk.update(dt);else controls.update();sky.update(camera,time.value);updateTrees();
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
