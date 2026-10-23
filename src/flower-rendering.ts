import * as T from 'three';
import { N8AOPass } from 'n8ao';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import {WoodlandLightPass} from './woodland-light';

/** Linear HDR -> contact shading -> restrained highlights -> output transform -> AA. */
export function createGardenRendering(renderer:T.WebGLRenderer,scene:T.Scene,camera:T.PerspectiveCamera,profile:'garden'|'woodland'='garden'){
  const composer=new EffectComposer(renderer);
  const ao=new N8AOPass(scene,camera);
  ao.setQualityMode('Low');
  Object.assign(ao.configuration,{
    aoRadius:profile==='woodland'?.75:1.05,distanceFalloff:.65,intensity:profile==='woodland'?1.4:1.8,color:new T.Color(profile==='woodland'?'#35352b':'#183c43'),
    halfRes:true,gammaCorrection:false,
    // Water, particles and path ribbons don't write depth. Don't render the
    // whole transparent scene twice just to shade these very small overlays.
    transparencyAware:false,
  });
  composer.addPass(ao);
  // N8AO owns the beauty depth target; reuse it without another scene render.
  const volume=profile==='woodland'?new WoodlandLightPass(camera,()=> (ao as unknown as {beautyRenderTarget:{depthTexture:T.DepthTexture}}).beautyRenderTarget.depthTexture):null;
  if(volume)composer.addPass(volume);
  const bloom=new UnrealBloomPass(new T.Vector2(1,1),.13,.4,1.9);
  composer.addPass(bloom);
  const grade=new ShaderPass({
    uniforms:{tDiffuse:{value:null},warmth:{value:1},saturation:{value:1.04}},
    vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`uniform sampler2D tDiffuse;uniform float warmth,saturation;varying vec2 vUv;
      void main(){
        vec3 c=texture2D(tDiffuse,vUv).rgb;
        float l=dot(c,vec3(.2126,.7152,.0722));
        c=mix(vec3(l),c,saturation);
        float light=smoothstep(.08,.8,l);
        c*=mix(vec3(.965,1.005,1.035),vec3(1.025,1.01,.975),light*warmth);
        gl_FragColor=vec4(max(c,0.),1.);
      }`,
  });
  composer.addPass(grade);
  const output=new OutputPass();composer.addPass(output);
  const fxaa=new ShaderPass(FXAAShader);composer.addPass(fxaa);
  let environment:T.WebGLRenderTarget|undefined,disposed=false;
  const stats={environmentMap:false,contactShadows:true,volumetricLight:!!volume,toneMapping:'ACES Filmic',pipeline:profile==='woodland'?'N8AO / shadowed volumetrics / HDR / FXAA':'N8AO / HDR / FXAA'};
  const ready=new RGBELoader().loadAsync(profile==='woodland'?'./assets/woodland/forest-slope-1k.hdr':'./assets/flower-garden/lighting/rooitou-park-1k.hdr').then(texture=>{
    if(disposed){texture.dispose();return;}
    const generator=new T.PMREMGenerator(renderer);
    environment=generator.fromEquirectangular(texture);generator.dispose();texture.dispose();
    scene.environment=environment.texture;scene.environmentRotation.y=.55;stats.environmentMap=true;
  });
  return {ready,stats,
    sun(light:T.DirectionalLight){volume?.setLight(light);},
    resize(width:number,height:number){
      composer.setSize(width,height);
      const ratio=renderer.getPixelRatio();fxaa.material.uniforms.resolution.value.set(1/(width*ratio),1/(height*ratio));
    },
    weather(value:'day'|'dusk'|'night'|'rain'){
      scene.environmentIntensity=value==='night'?.13:value==='dusk'?.55:value==='rain'?.75:.75;
      grade.uniforms.warmth.value=value==='night'?0:value==='rain'?.25:1;
      grade.uniforms.saturation.value=profile==='woodland'?.94:value==='night'?1:.98;
      bloom.strength=profile==='woodland'?.085:value==='night'?.23:.13;
      if(volume)volume.strength=value==='rain'?0:value==='night'?.2:.38;
    },
    render(){renderer.info.reset();composer.render();},
    dispose(){
      disposed=true;scene.environment=null;environment?.dispose();
      // N8AO 2.0.1 inherits an empty Pass.dispose(): release its owned GPU
      // targets, full-screen materials, and the blue-noise texture explicitly.
      const resources=new Set<{dispose:()=>void}>();
      for(const value of Object.values(ao)){
        if(value&&typeof value==='object'&&'dispose' in value&&typeof value.dispose==='function')resources.add(value as {dispose:()=>void});
        if(value&&typeof value==='object'&&'material' in value&&value.material instanceof T.Material)resources.add(value.material);
      }
      for(const resource of resources)resource.dispose();
      volume?.dispose();for(const pass of [bloom,grade,output,fxaa])pass.dispose();composer.dispose();
    },
  };
}
