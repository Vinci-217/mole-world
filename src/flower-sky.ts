import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/** A distant sky dome; it never hides the explorable landscape. */
export function createFlowerSky(scene:T.Scene){
  const uniforms={
    zenith:{value:new T.Color('#42b9df')},horizon:{value:new T.Color('#a6e6df')},
    cloud:{value:new T.Color('#f7f5df')},sunDirection:{value:new T.Vector3(-14,25,13).normalize()},
    night:{value:0},time:{value:0},overcast:{value:0},
  };
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms,
    vertexShader:'varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec3 direction;uniform vec3 zenith,horizon,cloud,sunDirection;uniform float time,night,overcast;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
      void main(){vec3 d=normalize(direction);float elevation=max(d.y,0.);
        vec3 c=mix(horizon,zenith,smoothstep(-.06,.28,elevation));
        vec2 p=d.xz/max(.18,d.y+.16)*1.3+vec2(time*.002,0.);
        float n=noise(p)*.65+noise(p*2.1)*.35;
        float cover=smoothstep(.52-overcast*.14,.78,n)*smoothstep(.02,.25,elevation);
        c=mix(c,cloud,cover*(.14+overcast*.55));
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
  const cloudRoot=new T.Group();cloudRoot.name='sculpted-clouds';scene.add(cloudRoot);
  const stats={clouds:0};
  const cloudMaterial=new T.MeshBasicMaterial({vertexColors:true,color:'#ffffff'});
  let weather:'day'|'dusk'|'rain'|'night'='day';
  const ready=(async()=>{
    const model=await new GLTFLoader().loadAsync('./assets/flower-garden/cloud-formation.glb');
    const bounds=new T.Box3().setFromObject(model.scene),size=bounds.getSize(new T.Vector3());
    model.scene.position.sub(bounds.getCenter(new T.Vector3()));
    model.scene.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();o.material=cloudMaterial;}});
    for(const [x,y,z,s] of [[-38,28,-60,1.15],[-10,22,-78,1.1],[27,29,-70,1.55],[55,23,-53,.9],[-58,26,-15,1.2],[57,27,12,1.35],[-30,31,40,1.2]]){
      const group=new T.Group();group.add(model.scene.clone(true));group.position.set(x,y,z);group.rotation.y=Math.sin(x)*.35;group.scale.set(17/size.x*s,17/size.x*s*(.95+Math.sin(x)*.15),17/size.x*s);cloudRoot.add(group);
      stats.clouds++;
    }
    updateCloudColor();
  })();
  function updateCloudColor(){
    cloudMaterial.color.set(weather==='night'?'#34566e':weather==='dusk'?'#ffd2b6':weather==='rain'?'#bac8ce':'#ffffff');
  }
  return {
    ready,stats,
    update(camera:T.Camera,time:number){dome.position.copy(camera.position);uniforms.time.value=time;cloudRoot.rotation.y=Math.sin(time*.006)*.018;},
    setWeather(value:'day'|'dusk'|'rain'|'night'){
      weather=value;updateCloudColor();
      const colors=value==='night'?['#07172d','#142d42','#2d4656']:value==='dusk'?['#798fc4','#edc5a5','#f4d9b8']:value==='rain'?['#8da6a8','#afc4bc','#c4d0c8']:['#42b9df','#a6e6df','#f7f5df'];
      uniforms.zenith.value.set(colors[0]);uniforms.horizon.value.set(colors[1]);uniforms.cloud.value.set(colors[2]);
      uniforms.night.value=value==='night'?1:0;uniforms.overcast.value=value==='rain'?1:0;
      uniforms.sunDirection.value.set(...(value==='dusk'?[-22,9,12]:value==='night'?[-16,22,10]:[-14,25,13]) as [number,number,number]).normalize();
    },
  };
}
