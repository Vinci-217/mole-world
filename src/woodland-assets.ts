import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export type WoodlandSpecies='oak'|'ash'|'young';
/** Authored dimensions are metres. No vertical stretching or buried cut trunks. */
export async function loadWoodlandAssets(time:{value:number}){
  const loader=new T.TextureLoader();
  async function texture(name:string,color=false){
    const t=await loader.loadAsync('./assets/woodland/'+name);
    t.colorSpace=color?T.SRGBColorSpace:T.NoColorSpace;
    t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;return t;
  }
  const [model,oakColor,oakNormal,oakRough,ashColor,ashNormal,ashRough,oakLeaf,ashLeaf,soilColor,soilNormal]=await Promise.all([
    new GLTFLoader().loadAsync('./assets/woodland/woodland-trees.glb'),
    texture('oak_color_1k.jpg',true),texture('oak_normal_1k.jpg'),texture('oak_roughness_1k.jpg'),
    texture('willow_color_1k.jpg',true),texture('willow_normal_1k.jpg'),texture('willow_roughness_1k.jpg'),
    texture('oak_color.png',true),texture('ash_color.png',true),
    texture('soil-color.png',true),texture('soil-normal.png'),
  ]);
  const bark=new T.MeshStandardMaterial({name:'CC0 oak bark',map:oakColor,normalMap:oakNormal,roughnessMap:oakRough,roughness:1,color:'#b8ada0',normalScale:new T.Vector2(.65,.65)});
  const ashBark=new T.MeshStandardMaterial({name:'CC0 willow bark',map:ashColor,normalMap:ashNormal,roughnessMap:ashRough,roughness:1,color:'#c1b7a5',normalScale:new T.Vector2(.55,.55)});
  function foliage(map:T.Texture){
    const material=new T.MeshStandardMaterial({name:'Fine woodland foliage',map,alphaTest:.48,side:T.DoubleSide,roughness:.92,color:'#c9c6a4',dithering:true});
    material.onBeforeCompile=shader=>{
      shader.uniforms.woodlandTime=time;
      shader.vertexShader='uniform float woodlandTime;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        vec3 windAnchor=vec3(0.);
        #ifdef USE_INSTANCING
          windAnchor=instanceMatrix[3].xyz;
        #endif
        float windPhase=dot(windAnchor.xz,vec2(.17,.23))+position.y*.7;
        float windWave=sin(woodlandTime*.8+windPhase)+.3*sin(woodlandTime*2.1+windPhase*1.7);
        transformed.x+=windWave*.055*uv.y;
        transformed.z+=windWave*.025*uv.y;`);
      shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
        #if NUM_DIR_LIGHTS > 0
          float thinLeaf=pow(clamp(dot(-normal,directionalLights[0].direction)*.5+.5,0.,1.),3.);
          reflectedLight.directDiffuse+=diffuseColor.rgb*directionalLights[0].color*thinLeaf*.065;
        #endif`);
    };
    material.customProgramCacheKey=()=> 'woodland-foliage-wind-v1';return material;
  }
  const leaves={oak:foliage(oakLeaf),ash:foliage(ashLeaf)};
  model.scene.updateMatrixWorld(true);
  const geometry=new Map<string,T.BufferGeometry>();
  model.scene.traverse(o=>{if(o instanceof T.Mesh){geometry.set(o.name,o.geometry.clone().applyMatrix4(o.matrixWorld));o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});
  function tree(species:WoodlandSpecies,lod:'near'|'far'){
    return (['branches','leaves'] as const).map(kind=>{
      const g=geometry.get(`${species}_${lod}_${kind}`);if(!g)throw Error(`Missing authored tree ${species} ${lod} ${kind}`);
      return{geometry:g,material:kind==='branches'?(species==='ash'?ashBark:bark):leaves[species==='ash'?'ash':'oak'],foliage:kind==='leaves'};
    });
  }
  return {tree,bark,ashBark,leaves,soilColor,soilNormal,materials:[bark,ashBark,leaves.oak,leaves.ash]};
}

/** Tileable soil at a physical scale, with broad path/moss masks in vertex color.
 * UVs are world anchored so detail remains the same size at every camera view.
 */
export function woodlandFloor(geometry:T.BufferGeometry,assets:{soilColor:T.Texture;soilNormal:T.Texture},palette:'forest'|'meadow'){
  const p=geometry.attributes.position,uv:number[]=[];
  for(let i=0;i<p.count;i++)uv.push(p.getX(i)/3,p.getZ(i)/3);
  geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
  const mat=new T.MeshStandardMaterial({name:'Layered woodland floor',vertexColors:true,map:assets.soilColor,normalMap:assets.soilNormal,normalScale:new T.Vector2(.45,.45),roughness:.96});
  // The baked soil is intentionally a mid/dark base. Preserve its grain while
  // lifting diffuse response to match the actual green/brown vertex palette.
  mat.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
      vec4 sampledDiffuseColor=texture2D(map,vMapUv);
      float soilLuma=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
      diffuseColor.rgb*=clamp(.58+soilLuma*${palette==='forest'?'4.8':'5.4'},.55,1.35);
    #endif`);
  };mat.customProgramCacheKey=()=> 'woodland-floor-'+palette;return mat;
}
