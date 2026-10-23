import * as T from 'three';

type Finish='organic'|'petal'|'leaf'|'bark'|'house';

/** Keep the supplied albedo/normal/ORM textures, with a coherent garden finish. */
export function finishGardenMaterial(material:T.Material,finish:Finish){
  if(!(material instanceof T.MeshStandardMaterial)||material.userData.gardenFinish)return;
  material.userData.gardenFinish=finish;
  material.envMapIntensity=finish==='house'?.85:1;
  material.metalness=0;
  material.roughness=finish==='leaf'?.8:finish==='petal'?.72:finish==='bark'?.96:.9;
  if(material.normalMap)material.normalScale.setScalar(finish==='house'?.55:finish==='bark'?.65:.4);
  if(material instanceof T.MeshPhysicalMaterial){
    // Some generated glTFs contain specularColorFactor=(2,2,2). It produces
    // a lacquer-like response even though these are non-metal plant surfaces.
    material.specularColor.setRGB(1,1,1);material.specularIntensity=.65;
    if(finish==='petal'){material.sheen=.3;material.sheenColor.set('#ffdfd4');material.sheenRoughness=.8;}
  }
  if(finish==='house'||finish==='bark')return;
  const previous=material.onBeforeCompile,cacheKey=material.customProgramCacheKey();
  material.customProgramCacheKey=()=>cacheKey+':garden-finish-'+finish;
  material.onBeforeCompile=(shader,renderer)=>{
    previous.call(material,shader,renderer);
    if(finish==='organic')shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      // Lift shadows baked into generated albedo; real lighting supplies the
      // shading. Keep whites and the texture's hand-painted vein detail.
      diffuseColor.rgb=mix(diffuseColor.rgb,sqrt(max(diffuseColor.rgb,0.))* .82,.12);`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float gardenLuma=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
      diffuseColor.rgb=mix(vec3(gardenLuma),diffuseColor.rgb,.88);`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
      // Preserve the supplied roughness variation without the wet-looking
      // mid-grey roughness atlas on the generated vine.
      roughnessFactor=clamp(roughnessFactor,${finish==='petal'?'.66':'.74'},.94);`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      #if NUM_DIR_LIGHTS > 0
        float gardenBacklight=pow(clamp(dot(-normal,directionalLights[0].direction)*.5+.5,0.,1.),3.);
        // Thin-surface backscatter approximation, tied to the actual sun so it
        // disappears at night. Not an emissive or a screen-space glow.
        reflectedLight.directDiffuse+=diffuseColor.rgb*directionalLights[0].color*gardenBacklight*${finish==='petal'?'.09':'.055'};
      #endif`);
  };
  material.needsUpdate=true;
}
