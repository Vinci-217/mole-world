import * as T from 'three';
import {Sky} from 'three/addons/objects/Sky.js';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {FXAAShader} from 'three/addons/shaders/FXAAShader.js';
import {N8AOPass} from 'n8ao';
import {WoodlandLightPass} from '../woodland-light';
import type {District,Weather} from './world';

export function createRendering(host:HTMLElement,scene:T.Scene,camera:T.PerspectiveCamera){
  const renderer=new T.WebGLRenderer({antialias:false,powerPreference:'high-performance',preserveDrawingBuffer:true});
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.98;
  renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<760?1.15:1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.info.autoReset=false;host.append(renderer.domElement);
  const sun=new T.DirectionalLight('#ffe5ba',3.7);sun.castShadow=true;sun.shadow.mapSize.setScalar(innerWidth<760?2048:4096);
  Object.assign(sun.shadow.camera,{left:-128,right:128,top:145,bottom:-145,near:1,far:440});sun.shadow.normalBias=.035;sun.shadow.bias=-.00012;sun.shadow.radius=3;
  sun.target.position.set(0,0,-30);scene.add(sun,sun.target);
  const hemi=new T.HemisphereLight('#b8d2df','#5b5742',.65);scene.add(hemi);
  const fill=new T.DirectionalLight('#bdcede',.22);fill.position.set(70,30,60);scene.add(fill);
  const sky=new Sky();sky.scale.setScalar(1000);sky.frustumCulled=false;sky.renderOrder=-100;scene.add(sky);
  const cloudTime={value:0},cloudCover={value:.58},night={value:0};
  const skyUniforms=sky.material.uniforms;skyUniforms.turbidity.value=3.4;skyUniforms.rayleigh.value=1.8;skyUniforms.mieCoefficient.value=.004;
  sky.material.onBeforeCompile=shader=>{
    shader.uniforms.manorCloudTime=cloudTime;shader.uniforms.manorCloudCover=cloudCover;shader.uniforms.manorNight=night;
    shader.fragmentShader=`uniform float manorCloudTime,manorCloudCover,manorNight;
      float cloudHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float cloudNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(cloudHash(i),cloudHash(i+vec2(1,0)),f.x),mix(cloudHash(i+vec2(0,1)),cloudHash(i+vec2(1,1)),f.x),f.y);}
      float cloudFbm(vec2 p){float f=0.;f+=cloudNoise(p)*.5;p=p*2.03+1.7;f+=cloudNoise(p)*.25;p=p*2.01+.8;f+=cloudNoise(p)*.125;f+=cloudNoise(p*2.02)*.0625;return f;}
      `+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor = vec4( retColor, 1.0 );',`vec3 d=normalize(vWorldPosition-cameraPosition);
      vec2 cuv=d.xz/max(.12,d.y+.16)*1.9+vec2(manorCloudTime*.0014,manorCloudTime*.0006);
      float clouds=smoothstep(manorCloudCover,manorCloudCover+.17,cloudFbm(cuv));
      clouds*=smoothstep(.02,.3,d.y);
      vec3 blueSky=retColor*.20*vec3(.83,1.,1.28);
      vec3 skyColor=mix(blueSky,vec3(.88,.9,.88),clouds*.78);
      vec2 suv=vec2(atan(d.x,d.z),asin(d.y))*360.;float star=step(.9977,cloudHash(floor(suv)))*pow(max(0.,1.-length(fract(suv)-.5)*2.),4.);
      vec3 dark=mix(vec3(.008,.017,.026),vec3(.035,.058,.075),pow(max(0.,1.-d.y),3.))+star*.8;
      skyColor=mix(skyColor,dark,manorNight);
      gl_FragColor=vec4(skyColor,1.);`);
  };
  const moon=new T.Mesh(new T.SphereGeometry(2.2,24,16),new T.MeshBasicMaterial({color:'#d2d8cc',fog:false}));moon.visible=false;scene.add(moon);
  const composer=new EffectComposer(renderer),ao=new N8AOPass(scene,camera);ao.setQualityMode('Medium');
  Object.assign(ao.configuration,{aoRadius:.85,distanceFalloff:.7,intensity:1.4,halfRes:true,color:new T.Color('#3c3a2f'),gammaCorrection:false,transparencyAware:false});composer.addPass(ao);
  const volume=new WoodlandLightPass(camera,()=> (ao as unknown as {beautyRenderTarget:{depthTexture:T.DepthTexture}}).beautyRenderTarget.depthTexture);volume.setLight(sun);volume.strength=.25;composer.addPass(volume);
  const bloom=new UnrealBloomPass(new T.Vector2(1,1),.11,.4,2.1);composer.addPass(bloom);
  const grade=new ShaderPass({uniforms:{tDiffuse:{value:null},warmth:{value:.5}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`uniform sampler2D tDiffuse;uniform float warmth;varying vec2 vUv;
    void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,.98);c*=mix(vec3(.98,1.,1.025),vec3(1.025,1.008,.98),smoothstep(.1,.9,l)*warmth);float edge=dot(vUv-.5,vUv-.5);c*=1.-edge*.10;gl_FragColor=vec4(c,1.);}`});composer.addPass(grade);
  const output=new OutputPass();composer.addPass(output);const fxaa=new ShaderPass(FXAAShader);composer.addPass(fxaa);
  let env:T.WebGLRenderTarget|undefined;
  const stats={environment:false,pipeline:'ACES / HDR / N8AO / shadowed volumetrics / planar water / FXAA',quality:innerWidth<760?'balanced':'high'};
  const ready=new HDRLoader().loadAsync('./assets/handmade/lighting/park.hdr').then(texture=>{const p=new T.PMREMGenerator(renderer);env=p.fromEquirectangular(texture);p.dispose();texture.dispose();scene.environment=env.texture;scene.environmentRotation.y=.55;stats.environment=true;});
  let lastHour=-1,lastWeather='',lastDistrict='';
  function atmosphere(hour:number,weather:Weather,district:District){
    if(Math.abs(hour-lastHour)<.01&&lastWeather===weather&&lastDistrict===district)return;
    lastHour=hour;lastWeather=weather;lastDistrict=district;
    const daylight=T.MathUtils.smoothstep(Math.sin((hour-6)/12*Math.PI),-.03,.35);night.value=1-daylight;
    const angle=(hour-6)/12*Math.PI,sunDirection=new T.Vector3(-Math.cos(angle),Math.sin(angle),.55).normalize(),moonDirection=new T.Vector3(-.35,.66,-.67).normalize();
    const direction=daylight<.1?moonDirection:sunDirection;
    sun.position.copy(sun.target.position).addScaledVector(direction,190);skyUniforms.sunPosition.value.copy(sunDirection);
    const dusk=daylight>.1&&Math.sin(angle)<.55;
    sun.color.set(daylight<.1?'#b6c9de':dusk?'#ffd3a1':'#ffe8c5');sun.intensity=daylight<.1?.85:weather==='rain'?1.15:dusk?3.4:3.8;
    hemi.color.set(daylight<.1?'#7193b2':'#b9cedc');hemi.groundColor.set(daylight<.1?'#283b38':'#4e513d');hemi.intensity=daylight<.1?.5:weather==='rain'?.8:.45;
    fill.intensity=daylight<.1?.1:.16;scene.environmentIntensity=daylight<.1?.14:district==='forest'?.28:.4;
    scene.fog=new T.FogExp2(daylight<.1?'#192f3a':weather==='rain'?'#8f9f9d':dusk?'#b5bcb4':'#b1c3c1',weather==='rain'?.007:weather==='mist'?.008:district==='forest'?.0028:.0018);
    cloudCover.value=weather==='rain'?.23:weather==='mist'?.42:.57;grade.uniforms.warmth.value=dusk?1:.35;
    moon.visible=daylight<.1;volume.strength=weather==='rain'?0:daylight<.1?.14:district==='forest'?.38:.13;volume.enabled=weather!=='rain';
    bloom.strength=daylight<.1?.17:.10;renderer.shadowMap.needsUpdate=true;
  }
  return{renderer,composer,sun,ready,stats,night,
    atmosphere,
    update(time:number){cloudTime.value=time;sky.position.copy(camera.position);moon.position.copy(camera.position).add(new T.Vector3(-.35,.66,-.67).normalize().multiplyScalar(270));},
    resize(w:number,h:number){renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();composer.setSize(w,h);fxaa.uniforms.resolution.value.set(1/(w*renderer.getPixelRatio()),1/(h*renderer.getPixelRatio()));},
    quality(value:'high'|'balanced'){stats.quality=value;renderer.setPixelRatio(Math.min(devicePixelRatio,value==='high'?1.5:1));ao.setQualityMode(value==='high'?'Medium':'Low');sun.shadow.mapSize.setScalar(value==='high'?4096:2048);sun.shadow.map?.dispose();sun.shadow.map=null;renderer.shadowMap.needsUpdate=true;},
    shadowDirty(){renderer.shadowMap.needsUpdate=true;},
    render(){renderer.info.reset();composer.render();},
    dispose(){env?.dispose();volume.dispose();[bloom,grade,output,fxaa].forEach(p=>p.dispose());for(const value of Object.values(ao))if(value&&typeof value==='object'&&'dispose' in value&&typeof value.dispose==='function')value.dispose();composer.dispose();sky.geometry.dispose();sky.material.dispose();moon.geometry.dispose();(moon.material as T.Material).dispose();renderer.dispose();renderer.domElement.remove();},
  };
}
