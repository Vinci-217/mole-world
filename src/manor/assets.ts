import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export interface AssetRow{id:string;file:string;sha256:string;triangles:number;source:string}
export interface HandmadeManifest{generator:string;assets:AssetRow[];textures:{file:string;sha256:string}[]}
export async function loadAssets(onProgress:(value:number,label:string)=>void){
  const base='./assets/handmade/',manifest=await fetch(base+'manifest.json').then(r=>{if(!r.ok)throw Error('资产清单未载入');return r.json() as Promise<HandmadeManifest>;});
  const textures=new Map<string,T.Texture>(),models=new Map<string,T.Group>(),materials=new Map<string,T.MeshStandardMaterial>();
  let done=0;const total=manifest.assets.length+manifest.textures.length;
  const loader=new T.TextureLoader();
  await Promise.all(manifest.textures.map(async row=>{
    const t=await loader.loadAsync(base+row.file);t.colorSpace=row.file.includes('normal')||row.file.includes('roughness')?T.NoColorSpace:T.SRGBColorSpace;
    t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;textures.set(row.file.split('/').at(-1)!,t);onProgress(++done/total*.9,'正在铺开材质');
  }));
  const uniforms={time:{value:0},night:{value:0},cloud:{value:.15},visitor:{value:new T.Vector3(999,0,999)}};
  function material(key:string,vertexColors=false){
    const id=key+(vertexColors?':vertex':'');if(materials.has(id))return materials.get(id)!;
    const mapped=['stone','plaster','roof','wood','bark'].includes(key),map=textures.get(key+'-color.'+(key==='bark'?'jpg':'png'));
    const colors:Record<string,string>={iron:'#34413e',ivory:'#e3d9c0',gold:'#bba065',window:'#376168',leaf:'#c5d8b6',roofdark:'#713e32',cloth:'#8c4252',moss:'#60734a',glass:'#91b3ad',petal:'#d9b0ba',pollen:'#ba8c36',stem:'#526d42'};
    const mat=new T.MeshPhysicalMaterial({name:'Authored '+key,color:mapped||vertexColors?'#ffffff':colors[key]||'#ffffff',map:mapped?map:null,normalMap:mapped?textures.get(key+'-normal.'+(key==='bark'?'jpg':'png')):null,normalScale:new T.Vector2(key==='bark'?.5:.35,key==='bark'?.5:.35),roughness:key==='iron'?.55:key==='gold'?.42:key==='window'?.17:key==='petal'?.72:.92,metalness:key==='iron'?.45:key==='gold'?.65:key==='window'?.18:0,vertexColors});
    if(key==='bark'){mat.roughnessMap=textures.get('bark-roughness.jpg')!;mat.roughness=1;}
    if(key==='leaf'){
      mat.map=textures.get('oak-leaves.png')!;mat.alphaTest=.48;mat.side=T.DoubleSide;mat.vertexColors=false;mat.roughness=.9;
    }
    if(key==='petal'){mat.side=T.DoubleSide;mat.sheen=.24;mat.sheenColor.set('#f0d0bf');mat.sheenRoughness=.85;}
    if(key==='stem'||key==='pollen')mat.side=T.DoubleSide;
    if(key==='window'){mat.emissive.set('#e7b975');mat.emissiveIntensity=.015;mat.clearcoat=.7;mat.side=T.DoubleSide;}
    if(key==='glass'){mat.color.set('#91b3ad');mat.transparent=true;mat.opacity=.22;mat.roughness=.08;mat.clearcoat=1;mat.depthWrite=false;mat.side=T.DoubleSide;}
    const previous=mat.onBeforeCompile;
    mat.onBeforeCompile=(shader,renderer)=>{
      previous.call(mat,shader,renderer);shader.uniforms.manorTime=uniforms.time;shader.uniforms.manorCloud=uniforms.cloud;shader.uniforms.manorVisitor=uniforms.visitor;
      shader.vertexShader='varying vec3 manorWorld;uniform float manorTime;uniform vec3 manorVisitor;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        ${key==='leaf'?`vec3 anchor=vec3(0.);
          #ifdef USE_INSTANCING
          anchor=instanceMatrix[3].xyz;
          #endif
          transformed.x+=(sin(manorTime*.65+position.y*.5+dot(anchor.xz,vec2(.15,.21)))+.22*sin(manorTime*1.7+position.x))*.055*uv.y;`:''}
        ${key==='stem'||key==='petal'?`vec3 plantAnchor=modelMatrix[3].xyz;
          #ifdef USE_INSTANCING
          plantAnchor=(modelMatrix*instanceMatrix[3]).xyz;
          #endif
          vec2 brush=plantAnchor.xz-manorVisitor.xz;float touch=exp(-dot(brush,brush)*1.1);
          float stemHeight=clamp(position.y,0.,1.2);
          transformed.xz+=normalize(brush+vec2(.001))*touch*.13*stemHeight*stemHeight;
          transformed.x+=sin(manorTime*.9+dot(plantAnchor.xz,vec2(.12,.17)))*.018*stemHeight;`:''}
        ${key==='cloth'?'transformed.z+=sin(manorTime*1.3+position.y*.8)*.05;':''}`);
      shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`vec4 surfacePoint=vec4(transformed,1.);
        #ifdef USE_INSTANCING
        surfacePoint=instanceMatrix*surfacePoint;
        #endif
        manorWorld=(modelMatrix*surfacePoint).xyz;
        #include <project_vertex>`);
      shader.fragmentShader='varying vec3 manorWorld;uniform float manorTime,manorCloud;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
        float cloudShade=.82+.18*smoothstep(-.45,.6,sin(manorWorld.x*.027+manorTime*.013)*cos(manorWorld.z*.035+manorTime*.009));
        reflectedLight.directDiffuse*=mix(1.,cloudShade,manorCloud);
        ${['leaf','petal','stem'].includes(key)?`#if NUM_DIR_LIGHTS > 0
          float backscatter=pow(clamp(dot(-normal,directionalLights[0].direction)*.5+.5,0.,1.),3.);
          reflectedLight.directDiffuse+=diffuseColor.rgb*directionalLights[0].color*backscatter*.065;
        #endif`:''}`);
    };mat.customProgramCacheKey=()=> 'handmade-surface-v1-'+key;materials.set(id,mat);return mat;
  }
  await Promise.all(manifest.assets.map(async row=>{
    const response=await fetch(base+row.file);if(!response.ok)throw Error('模型未载入：'+row.id);
    const data=await response.arrayBuffer();
    if(!crypto.subtle)throw Error('请通过 HTTPS 或 localhost 打开庄园');
    const actual=[...new Uint8Array(await crypto.subtle.digest('SHA-256',data))].map(v=>v.toString(16).padStart(2,'0')).join('');
    if(actual!==row.sha256)throw Error('模型校验未通过：'+row.id);
    const gltf=await new GLTFLoader().parseAsync(data,new URL(base,location.href).href);
    gltf.scene.traverse(o=>{
      if(!(o instanceof T.Mesh))return;
      const original=Array.isArray(o.material)?o.material:[o.material];
      o.material=original.map(m=>{const key=m.name.replace('handmade_','').split('.')[0];if(key==='leaf')o.geometry.deleteAttribute('color');return material(key,!!o.geometry.getAttribute('color'));});
      if(o.material.length===1)o.material=o.material[0];original.forEach(m=>m.dispose());o.castShadow=o.receiveShadow=true;
    });models.set(row.id,gltf.scene);onProgress(++done/total*.9,'正在安放'+({castle:'城堡',cottage:'花屋',hollow:'古树',trees:'树林',flowers:'花田',pavilion:'花亭',props:'道具'}[row.id]||row.id));
  }));
  function geometry(asset:string,node:string){
    const root=models.get(asset);if(!root)throw Error('Missing authored asset '+asset);
    root.updateMatrixWorld(true);const o=root.getObjectByName(node);
    if(!(o instanceof T.Mesh))throw Error('Missing authored mesh '+node);
    return{geometry:o.geometry,material:o.material,matrix:o.matrixWorld.clone()};
  }
  return{manifest,models,textures,materials,uniforms,material,geometry,
    clone(id:string){const source=models.get(id);if(!source)throw Error('Unknown authored asset '+id);return source.clone(true);},
    update(time:number,night:number,cloud:number,visitor?:T.Vector3){uniforms.time.value=time;uniforms.night.value=night;uniforms.cloud.value=cloud;if(visitor)uniforms.visitor.value.copy(visitor);for(const m of materials.values())if(m.name==='Authored window')m.emissiveIntensity=.015+night*1.5;},
    dispose(){const g=new Set<T.BufferGeometry>();for(const root of models.values())root.traverse(o=>{if(o instanceof T.Mesh)g.add(o.geometry);});g.forEach(x=>x.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());},
  };
}
export type Assets=Awaited<ReturnType<typeof loadAssets>>;
