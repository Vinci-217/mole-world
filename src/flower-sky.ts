import * as T from 'three';

/** Painted equirectangular atmosphere. The garden remains full 3D below it. */
export function createFlowerSky(scene:T.Scene){
  const uniforms={
    paintedSky:{value:null as T.Texture|null},paintedReady:{value:0},
    zenith:{value:new T.Color('#42b9df')},horizon:{value:new T.Color('#b6e5da')},
    night:{value:0},dusk:{value:0},overcast:{value:0},time:{value:0},
  };
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms,
    vertexShader:'varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec3 direction;uniform sampler2D paintedSky;uniform vec3 zenith,horizon;
      uniform float paintedReady,time,night,dusk,overcast;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        vec3 d=normalize(direction);
        vec2 uv=vec2(fract(atan(d.z,d.x)/6.2831853+.80),asin(clamp(d.y,-1.,1.))/3.14159265+.5);
        vec3 gradient=mix(horizon,zenith,smoothstep(0.,.8,d.y));
        vec3 painted=texture2D(paintedSky,uv).rgb;
        float seam=1.-smoothstep(0.,.035,min(uv.x,1.-uv.x));
        vec3 seamColor=(texture2D(paintedSky,vec2(.01,uv.y)).rgb+texture2D(paintedSky,vec2(.99,uv.y)).rgb)*.5;
        painted=mix(painted,seamColor,seam);
        vec3 c=mix(gradient,painted,paintedReady);
        vec3 sunset=c*vec3(1.08,.73,.76)+vec3(.095,.035,.035);
        c=mix(c,sunset,dusk*.72);
        float luminance=dot(c,vec3(.2126,.7152,.0722));
        c=mix(c,vec3(luminance*.65,luminance*.74,luminance*.77),overcast*.83);
        c=mix(c,gradient+painted*vec3(.025,.045,.065)*paintedReady,night);
        vec2 starUv=vec2(atan(d.x,d.z),asin(d.y))*270.;
        float star=step(.9975,hash(floor(starUv)))*pow(max(0.,1.-length(fract(starUv)-.5)*2.),4.);
        c+=star*night*smoothstep(.08,.3,d.y)*.7;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const dome=new T.Mesh(new T.SphereGeometry(300,48,24),material);
  dome.name='painted-garden-sky';dome.frustumCulled=false;dome.renderOrder=-100;scene.add(dome);
  const stats={skyTexture:false};
  const ready=new T.TextureLoader().loadAsync('./assets/flower-garden/painted-sky.png').then(texture=>{
    texture.colorSpace=T.SRGBColorSpace;texture.wrapS=T.RepeatWrapping;
    uniforms.paintedSky.value=texture;uniforms.paintedReady.value=1;stats.skyTexture=true;
  });
  return {ready,stats,
    update(camera:T.Camera,time:number){dome.position.copy(camera.position);uniforms.time.value=time;},
    setWeather(value:'day'|'dusk'|'rain'|'night'){
      const colors=value==='night'?['#07172d','#142d42']:['#42b9df','#b6e5da'];
      uniforms.zenith.value.set(colors[0]);uniforms.horizon.value.set(colors[1]);
      uniforms.night.value=value==='night'?1:0;uniforms.dusk.value=value==='dusk'?1:0;uniforms.overcast.value=value==='rain'?1:0;
    },
  };
}
