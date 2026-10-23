import * as T from 'three';

/** A distant sky dome; it never hides the explorable landscape. */
export function createFlowerSky(scene:T.Scene){
  const uniforms={
    zenith:{value:new T.Color('#78b9d1')},horizon:{value:new T.Color('#c4dfd5')},
    cloud:{value:new T.Color('#f7f5df')},sunDirection:{value:new T.Vector3(-14,25,13).normalize()},
    night:{value:0},time:{value:0},overcast:{value:0},
  };
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms,
    vertexShader:'varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec3 direction;uniform vec3 zenith,horizon,cloud,sunDirection;uniform float time,night,overcast;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
      void main(){vec3 d=normalize(direction);float elevation=max(d.y,0.);
        vec3 c=mix(horizon,zenith,smoothstep(0.,.50,elevation));
        vec2 p=d.xz/max(.18,d.y+.16)*1.3+vec2(time*.002,0.);
        float n=noise(p)*.65+noise(p*2.1)*.35;
        float cover=smoothstep(.52-overcast*.14,.78,n)*smoothstep(.02,.25,elevation);
        c=mix(c,cloud,cover*.65);
        float sun=max(dot(d,sunDirection),0.);
        c+=vec3(1.,.78,.42)*pow(sun,22.)*.13*(1.-night)*(1.-overcast);
        c+=vec3(1.,.92,.69)*smoothstep(.9994,.9998,sun)*.5*(1.-overcast);
        vec2 starCell=floor(vec2(atan(d.x,d.z),asin(d.y))*330.);
        float star=step(.997,hash(starCell))*pow(max(0.,1.-length(fract(vec2(atan(d.x,d.z),asin(d.y))*330.)-.5)*2.),3.);
        c+=star*night*smoothstep(.08,.3,elevation)*.65;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const dome=new T.Mesh(new T.SphereGeometry(160,32,16),material);dome.name='garden-sky';dome.frustumCulled=false;dome.renderOrder=-100;scene.add(dome);
  return {
    update(camera:T.Camera,time:number){dome.position.copy(camera.position);uniforms.time.value=time;},
    setWeather(value:'day'|'dusk'|'rain'|'night'){
      const colors=value==='night'?['#07172d','#142d42','#2d4656']:value==='dusk'?['#6e91af','#d8bba7','#f4d9b8']:value==='rain'?['#8da6a8','#afc4bc','#c4d0c8']:['#78b9d1','#b9d8d5','#f7f5df'];
      uniforms.zenith.value.set(colors[0]);uniforms.horizon.value.set(colors[1]);uniforms.cloud.value.set(colors[2]);
      uniforms.night.value=value==='night'?1:0;uniforms.overcast.value=value==='rain'?1:0;
      uniforms.sunDirection.value.set(...(value==='dusk'?[-22,9,12]:value==='night'?[-16,22,10]:[-14,25,13]) as [number,number,number]).normalize();
    },
  };
}
