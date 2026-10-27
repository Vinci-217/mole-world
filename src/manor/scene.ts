import * as T from 'three';
import {Water} from 'three/addons/objects/Water.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {loadAssets} from './assets';
import {createRendering} from './rendering';
import {createLandscape} from './landscape';
import {createPlayer} from './player';
import {ManorAudio} from './audio';
import {districts,currentDistrict,groundHeight as h,walkHeight,riverX,nearestInteraction,interactables,interactionApproaches,type District,type Weather,type Progress,type Interactable} from './world';

export async function createManor(host:HTMLElement,progress:Progress,onProgress:(n:number,label:string)=>void,onFrame:()=>void){
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(46,1,.15,850),rendering=createRendering(host,scene,camera),audio=new ManorAudio();
  let disposed=false,ready=false,hour=16.15,weather:Weather='clear',cycle=false,time=0,doorAmount=progress.gate?1:0,bellAt=-100,waterAt=progress.watered?-100:0,burstAt=-100;
  let lightingError:unknown=null;const lightingJob=rendering.ready.catch(error=>{lightingError=error;});
  const player=createPlayer(camera,rendering.renderer.domElement,()=>doorAmount>.8,stone=>audio.footstep(stone));
  const initial=(new URL(location.href).searchParams.get('scene')||document.body.dataset.scene||'castle') as District;
  let district:District=initial in districts?initial:'castle';player.district(district);rendering.atmosphere(hour,weather,district);
  const assets=await loadAssets(onProgress);if(disposed)throw Error('庄园已关闭');
  const landscape=createLandscape(scene,assets),root=new T.Group();root.name='Three authored scenes';scene.add(root);
  const objects:T.Object3D[]=[];
  function placeAsset(id:string,x:number,z:number,rotation=0,scale=1){const group=assets.clone(id);group.position.set(x,h(x,z),z);group.rotation.y=rotation;group.scale.setScalar(scale);root.add(group);objects.push(group);return group;}
  const castle=placeAsset('castle',0,-65),cottage=placeAsset('cottage',76,-34),pavilion=placeAsset('pavilion',58,-4),hollow=placeAsset('hollow',-66,-51,.0);
  const crownSource=assets.geometry('trees','tree_leaf_oak_near'),crown=new T.Mesh(crownSource.geometry,crownSource.material);crown.position.set(-66,h(-66,-51)+3,-51);crown.scale.setScalar(1.65);crown.castShadow=crown.receiveShadow=true;root.add(crown);
  function prop(name:string,x:number,z:number,rotation=0,y=0){
    const source=assets.models.get('props')!;source.updateMatrixWorld(true);const g=new T.Group();
    source.traverse(o=>{if(o instanceof T.Mesh&&o.name.startsWith('prop_'+name+'_')){const m=new T.Mesh(o.geometry,o.material);m.name=o.name;m.applyMatrix4(o.matrixWorld);m.castShadow=m.receiveShadow=true;g.add(m);}});
    g.position.set(x,h(x,z)+y,z);g.rotation.y=rotation;root.add(g);return g;
  }
  const fountain=prop('fountain',0,-40),bench=prop('bench',47,23,-.35);prop('bench',-8,-33,.8);prop('bench',70,-24,Math.PI*.7);prop('arch',-54,-26,-.18);
  const bell=prop('bell',4.5,-68,0,3.0),bellPivot=new T.Group();bellPivot.position.y=.8;bell.add(bellPivot);
  const bellGold=bell.getObjectByName('prop_bell_gold');if(bellGold){bellGold.removeFromParent();bellGold.position.y-=.8;bellPivot.add(bellGold);}
  const iron=assets.material('iron'),wood=assets.material('wood'),stone=assets.material('stone');
  for(const side of [-1,1]){const post=new T.Mesh(new RoundedBoxGeometry(.14,4.4,.18,1,.025),wood);post.position.set(4.5+side,h(4.5,-68)+2.2,-68);post.castShadow=true;root.add(post);}
  const rope=new T.Mesh(new T.CylinderGeometry(.018,.018,2.4,6),new T.MeshStandardMaterial({color:'#a18d6a',roughness:1}));rope.position.set(4.5,h(4.5,-68)+2.1,-67.7);root.add(rope);
  const leftDoor=castle.getObjectByName('castle_door_left'),rightDoor=castle.getObjectByName('castle_door_right');
  // A real greenhouse skin fits between the authored iron ribs.
  const glassMat=assets.material('glass'),glassG=new T.CylinderGeometry(2.4,2.4,6,32,1,true,0,Math.PI);glassG.rotateZ(Math.PI/2);glassG.scale(1,1.33,1);glassG.rotateX(Math.PI/2);
  // The Blender ribs remain the silhouette; individual arched glazing panels
  // are supplied here so their transmission can follow the weather profile.
  const glassVerts:number[]=[],glassIx:number[]=[];
  for(let row=0;row<=6;row++)for(let i=0;i<=28;i++){
    const a=i/28*Math.PI;glassVerts.push(82+Math.cos(a)*2.39,h(76,-34)+1.1+Math.sin(a)*3.19,-33-row);
    if(row<6&&i<28){const k=row*29+i;glassIx.push(k,k+1,k+29,k+1,k+30,k+29);}
  }
  const glazingG=new T.BufferGeometry();glazingG.setAttribute('position',new T.Float32BufferAttribute(glassVerts,3));glazingG.setIndex(glassIx);glazingG.computeVertexNormals();root.add(new T.Mesh(glazingG,glassMat));glassG.dispose();
  // Quiet warm lamps; only nearby bulbs contribute point-light draw cost.
  const lamps:{id:string;group:T.Group;light:T.PointLight;bulbs:T.MeshStandardMaterial[];interactive:boolean}[]=[];
  const lampPositions:[string,number,number,boolean][]=[['gateL',-6,-55,false],['gateR',6,-55,false],['courtL',-8,-30,false],['courtR',8,-30,false],['flower',50,7,false],['cottage',71,-28,false],['west',-44,-9,true],['brook',-53,-30,true],['root',-69,-43,true]];
  for(const [id,x,z,interactive] of lampPositions){
    const group=prop('lantern',x,z),bulbs:T.MeshStandardMaterial[]=[];
    group.traverse(o=>{if(o instanceof T.Mesh){const m=o.material as T.MeshStandardMaterial;if(m.name==='Authored window'){o.material=m.clone();bulbs.push(o.material as T.MeshStandardMaterial);}}});
    const light=new T.PointLight('#f4cc8c',0,11,2);light.position.set(x,h(x,z)+3.2,z);scene.add(light);lamps.push({id,group,light,bulbs,interactive});
  }
  for(const x of [-4,4]){const light=new T.PointLight('#ebc38c',9,13,2);light.position.set(x,h(0,-65)+3.3,-66);scene.add(light);}
  const head=new T.Mesh(new T.OctahedronGeometry(.28),new T.MeshPhysicalMaterial({color:'#e5d7ae',emissive:'#dec78e',emissiveIntensity:1.3,roughness:.25,metalness:.15,clearcoat:.5}));head.scale.set(.7,1.6,.7);head.position.set(-66,h(-66,-51)+2.25,-51.1);root.add(head);
  const heartLight=new T.PointLight('#eacb96',0,10,2);heartLight.position.copy(head.position);scene.add(heartLight);
  const ringG=new T.TorusGeometry(1,.025,8,48),ring=new T.Mesh(ringG,new T.MeshStandardMaterial({color:'#b69b65',metalness:.5,roughness:.45}));ring.rotation.x=-Math.PI/2;ring.position.set(-66,h(-66,-51)+.08,-50.7);root.add(ring);
  // The flower seed visibly unfolds after watering and stays grown on reload.
  const seed=new T.Group();seed.position.set(58,walkHeight(58,-1),-1);root.add(seed);
  const source=assets.models.get('flowers')!;source.updateMatrixWorld(true);
  source.traverse(o=>{if(o instanceof T.Mesh&&o.name.includes('rose_near')){const m=new T.Mesh(o.geometry,o.material);m.applyMatrix4(o.matrixWorld);m.castShadow=m.receiveShadow=true;seed.add(m);}});
  const pot=new T.Mesh(new T.CylinderGeometry(.36,.25,.5,24),assets.material('gold'));pot.position.set(58,seed.position.y+.2,-1);root.add(pot);
  // Reflective stream: one planar reflection shared by the entire water ribbon.
  const waterBytes=new Uint8Array(128*128*4);
  for(let y=0;y<128;y++)for(let x=0;x<128;x++){
    const a=x/128*Math.PI*2,b=y/128*Math.PI*2,n=new T.Vector3(.18*Math.cos(a*4+b*2)+.1*Math.sin(a*7-b*3),.17*Math.sin(b*5+a)+.07*Math.cos(a*8+b*8),1).normalize(),k=(y*128+x)*4;
    waterBytes.set([(n.x*.5+.5)*255,(n.y*.5+.5)*255,(n.z*.5+.5)*255,255],k);
  }
  const waterNormal=new T.DataTexture(waterBytes,128,128,T.RGBAFormat);waterNormal.wrapS=waterNormal.wrapT=T.RepeatWrapping;waterNormal.needsUpdate=true;
  const waterV:number[]=[],waterUv:number[]=[],waterIx:number[]=[];
  for(let i=0;i<=250;i++){const z=-168+i*300/250,x=riverX(z),w=3.15+.28*Math.sin(z*.06);waterV.push(x-w,-z,0,x+w,-z,0);waterUv.push(0,i/8,1,i/8);if(i<250){const k=i*2;waterIx.push(k,k+2,k+1,k+1,k+2,k+3);}}
  const waterG=new T.BufferGeometry();waterG.setAttribute('position',new T.Float32BufferAttribute(waterV,3));waterG.setAttribute('uv',new T.Float32BufferAttribute(waterUv,2));waterG.setIndex(waterIx);waterG.computeVertexNormals();
  const water=new Water(waterG,{textureWidth:innerWidth<760?256:512,textureHeight:innerWidth<760?256:512,waterNormals:waterNormal,sunDirection:new T.Vector3(.6,.7,.4),sunColor:'#ffe4b6',waterColor:'#3c7168',distortionScale:1.8,alpha:.92,fog:true});water.rotation.x=-Math.PI/2;water.position.y=-.46;water.material.transparent=true;water.material.depthWrite=false;root.add(water);
  let reflectionAt=-10;const reflect=water.onBeforeRender.bind(water);water.onBeforeRender=(...args)=>{if(time-reflectionAt<.18)return;reflectionAt=time;reflect(...args);};
  // Fountain droplets follow ballistic arcs, animated as separate water points.
  const fountainG=new T.BufferGeometry(),fountainPositions=new Float32Array(380*3);fountainG.setAttribute('position',new T.BufferAttribute(fountainPositions,3));
  const waterPointMat=new T.PointsMaterial({color:'#bed8cb',size:.055,transparent:true,opacity:.7,depthWrite:false,sizeAttenuation:true});
  const droplets=new T.Points(fountainG,waterPointMat);droplets.frustumCulled=false;root.add(droplets);
  const basin=new T.Mesh(new T.CircleGeometry(2.57,64),new T.MeshPhysicalMaterial({color:'#6faaa0',roughness:.14,metalness:.05,clearcoat:1,transparent:true,opacity:.75}));basin.rotation.x=-Math.PI/2;basin.position.set(0,h(0,-40)+.48,-40);root.add(basin);
  // Suspended leaves, drifting pollen, fireflies and celebratory seed motes.
  const rng=(()=>{let n=36192;return()=>{n=(Math.imul(n,1664525)+1013904223)|0;return(n>>>0)/4294967296;};})(),particleV:number[]=[],phases:number[]=[],kinds:number[]=[];
  for(let i=0;i<750;i++){const forest=i<430,x=forest?-87+rng()*57:28+rng()*58,z=forest?8-rng()*85:43-rng()*71;particleV.push(x,h(x,z)+.5+rng()*5,z);phases.push(rng()*6.28);kinds.push(forest?0:1);}
  const particleG=new T.BufferGeometry();particleG.setAttribute('position',new T.Float32BufferAttribute(particleV,3));particleG.setAttribute('phase',new T.Float32BufferAttribute(phases,1));particleG.setAttribute('kind',new T.Float32BufferAttribute(kinds,1));
  const particleTime={value:0},nightUniform=rendering.night;
  const particleM=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,uniforms:{time:particleTime,night:nightUniform,ratio:{value:rendering.renderer.getPixelRatio()}},vertexShader:`uniform float time,night,ratio;attribute float phase,kind;varying float alpha,forest;
    void main(){vec3 p=position;p.x+=sin(time*.25+phase)*.8;p.y+=sin(time*.5+phase)*.25;p.z+=cos(time*.2+phase)*.6;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((kind>.5?.6:1.2)*100.*ratio/-mv.z,1.,6.*ratio);alpha=(.25+.75*pow(.5+.5*sin(time*1.4+phase),2.))*mix(.15+night*.85,.45,kind);forest=1.-kind;}`,fragmentShader:`varying float alpha,forest;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d*d),2.)*alpha;if(a<.015)discard;gl_FragColor=vec4(mix(vec3(1.,.9,.72),vec3(.85,1.,.72),forest)*1.4,a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`});const particles=new T.Points(particleG,particleM);particles.frustumCulled=false;root.add(particles);
  const rainG=new T.BufferGeometry(),rainV=new Float32Array(1000*6);
  for(let i=0;i<1000;i++){const x=(rng()-.5)*48,y=rng()*27,z=(rng()-.5)*48;rainV.set([x,y,z,x-.06,y+.52,z],i*6);}rainG.setAttribute('position',new T.BufferAttribute(rainV,3));const rain=new T.LineSegments(rainG,new T.LineBasicMaterial({color:'#acc3c4',transparent:true,opacity:.38,depthWrite:false}));rain.visible=false;root.add(rain);
  const butterflies:{group:T.Group;left:T.Mesh;right:T.Mesh;center:T.Vector3;phase:number}[]=[];
  const wingG=new T.BufferGeometry();wingG.setAttribute('position',new T.Float32BufferAttribute([0,0,0,.10,.10,.015,.24,.15,.01,.26,.05,0,.18,-.035,0,.08,-.05,0],3));wingG.setIndex([0,1,2,0,2,3,0,3,4,0,4,5]);wingG.computeVertexNormals();
  for(let i=0;i<12;i++){const group=new T.Group(),mat=new T.MeshStandardMaterial({color:i%3?'#d4bb80':'#c1b4cd',side:T.DoubleSide,roughness:.83}),left=new T.Mesh(wingG,mat),right=new T.Mesh(wingG,mat);left.scale.x=-1;group.add(left,right);root.add(group);const center=new T.Vector3(38+rng()*38,0,32-rng()*50);center.y=h(center.x,center.z)+1.1;butterflies.push({group,left,right,center,phase:rng()*6.28});}
  const promptRing=new T.Mesh(new T.TorusGeometry(.34,.014,6,40),new T.MeshBasicMaterial({color:'#ead4a2',transparent:true,opacity:.65,depthWrite:false}));promptRing.rotation.x=-Math.PI/2;promptRing.visible=false;root.add(promptRing);
  const burstG=new T.BufferGeometry(),burstV=new Float32Array(90*3);burstG.setAttribute('position',new T.BufferAttribute(burstV,3));
  const burstM=new T.PointsMaterial({color:'#e9d39d',size:.055,transparent:true,opacity:.7,depthWrite:false,blending:T.AdditiveBlending}),burst=new T.Points(burstG,burstM),burstOrigin=new T.Vector3();burst.frustumCulled=false;burst.visible=false;root.add(burst);
  let nearest:Interactable|null=null,frame=0,last=performance.now(),frameAverage=0,lastShadow=-100;
  const stats={ready:false,error:'',assetIds:assets.manifest.assets.map(a=>a.id),modelSource:assets.manifest.generator,draws:0,triangles:0,frameMs:0,...landscape.stats};
  const daylights=()=>rendering.night.value;
  function sync(){rendering.shadowDirty();}
  function setDistrict(id:District){district=id;player.district(id);if(player.mode==='walk'&&!progress.discovered.includes(id))progress.discovered.push(id);rendering.shadowDirty();landscape.update(camera,true);}
  function activate(item:Interactable):{message:string;journal?:boolean;changed?:boolean}{
    if(item.type==='gate'){
      if(progress.gate&&Math.abs(player.position.x)<2.7&&Math.abs(player.position.z+60)<1.5)return{message:'先离开门洞，再关上门。'};
      progress.gate=!progress.gate;sync();return{message:progress.gate?'王冠之门为你敞开了。':'城堡大门轻轻合上。',changed:true};
    }
    if(item.type==='fountain'){progress.fountain=!progress.fountain;return{message:progress.fountain?'水声重新流过前庭。':'喷泉安静了下来。',changed:true};}
    if(item.type==='bell'){bellAt=time;progress.bell=true;audio.bell();burstAt=time;return{message:progress.watered&&progress.discovered.includes('heart')?'钟声带回了三处风景的记忆。旅程完成，你可以继续漫游。':'钟声越过屋顶，飘向花海和森林。',changed:true};}
    if(item.type==='water'){if(progress.watered)return{message:'花种已经盛开，花瓣正随着风轻轻摇晃。'};progress.watered=true;waterAt=time;audio.chime();burstAt=time;sync();return{message:'花种苏醒了。花海里多了一朵为你盛开的花。',changed:true};}
    if(item.type==='lantern'){if(progress.lanterns.includes(item.id))return{message:'这盏灯已经亮着。'};progress.lanterns.push(item.id);audio.chime();sync();return{message:progress.lanterns.length===3?'三盏旧灯都亮了。古树之心正在回应你。':`点亮旧灯 · ${progress.lanterns.length}/3`,changed:true};}
    if(item.type==='heart'){if(progress.lanterns.length<3)return{message:'古树还在沉睡。先点亮林间的三盏旧灯。'};if(!progress.discovered.includes('heart'))progress.discovered.push('heart');audio.chime();burstAt=time;return{message:'你听见了古树的心跳。带着这束微光，回到城堡敲响归途钟。',changed:true};}
    if(item.type==='bench'){player.sit();return{message:player.seated?'坐一会儿，听花田里的风。移动即可起身。':'你站起身来。'};}
    return{message:'园丁的手记',journal:true};
  }
  const readyPromise=lightingJob.then(()=>{if(lightingError)throw lightingError;ready=stats.ready=true;rendering.shadowDirty();onProgress(1,'庄园已准备好');});
  function animate(now:number){
    if(disposed)return;frame=requestAnimationFrame(animate);const elapsed=now-last,dt=Math.min(elapsed/1000,.1);last=now;time+=dt;frameAverage=frameAverage?frameAverage*.95+elapsed*.05:elapsed;
    if(cycle)hour=(hour+dt*.015)%24;player.update(dt,time);
    if(player.mode==='walk'){district=currentDistrict(player.position.x,player.position.z);if(!progress.discovered.includes(district))progress.discovered.push(district);}
    rendering.atmosphere(hour,weather,district);rendering.update(time);assets.update(time,daylights(),weather==='rain'?1:.45,player.position);if(landscape.update(camera)&&time-lastShadow>.4){rendering.shadowDirty();lastShadow=time;}audio.update(player.position.x,player.position.z);
    doorAmount=T.MathUtils.damp(doorAmount,progress.gate?1:0,4,dt);if(leftDoor)leftDoor.rotation.y=-doorAmount*1.42;if(rightDoor)rightDoor.rotation.y=doorAmount*1.42;
    if(Math.abs(doorAmount-(progress.gate?1:0))>.002)rendering.shadowDirty();
    bellPivot.rotation.z=time-bellAt<5?Math.sin((time-bellAt)*9)*Math.exp(-(time-bellAt)*.65)*.4:0;
    const grow=progress.watered?(waterAt<0?1:Math.min(1,(time-waterAt)/2.2)):0;seed.scale.setScalar(.5+grow*3.0);seed.rotation.y=Math.sin(time*.2)*.03;
    for(const lamp of lamps){const lit=!lamp.interactive||progress.lanterns.includes(lamp.id),near=camera.position.distanceToSquared(lamp.light.position)<80**2;
      lamp.light.intensity=lit&&near?(lamp.interactive?24+daylights()*48:daylights()*78):0;for(const m of lamp.bulbs){m.emissiveIntensity=lit?.12+daylights()*1.8:0;m.color.set(lit?'#d6bd8b':'#7e7560');}}
    const awakened=progress.lanterns.length===3;heartLight.intensity=awakened?15:1.4;head.rotation.y=time*.18;head.position.y=heartLight.position.y+Math.sin(time*.8)*.08;(head.material as T.MeshPhysicalMaterial).emissiveIntensity=awakened?1.9:.35;
    water.material.uniforms.time.value=time*.38;water.material.uniforms.sunDirection.value.copy(rendering.sun.position).sub(rendering.sun.target.position).normalize();water.material.uniforms.sunColor.value.copy(rendering.sun.color).multiplyScalar(.8);particleTime.value=time;
    droplets.visible=basin.visible=progress.fountain;
    if(progress.fountain){for(let i=0;i<380;i++){const t=(time*.4+i/380)%1,a=i*2.399,r=.3+t*1.9;fountainPositions.set([Math.cos(a)*r,h(0,-40)+2.95+2.6*t-5.2*t*t,-40+Math.sin(a)*r],i*3);}fountainG.attributes.position.needsUpdate=true;}
    for(const b of butterflies){b.group.visible=daylights()<.5;b.group.position.copy(b.center).add(new T.Vector3(Math.sin(time*.3+b.phase)*1.7,Math.sin(time*.7+b.phase)*.3,Math.cos(time*.27+b.phase)*1.2));b.group.rotation.y=time*.2+b.phase;b.left.rotation.y=Math.sin(time*11+b.phase)*.9;b.right.rotation.y=-b.left.rotation.y;}
    rain.visible=weather==='rain';if(rain.visible){rain.position.set(camera.position.x,0,camera.position.z);for(let i=0;i<1000;i++){const k=i*6;rainV[k+1]-=dt*10;if(rainV[k+1]<0)rainV[k+1]+=27;rainV[k+4]=rainV[k+1]+.52;}rainG.attributes.position.needsUpdate=true;}
    nearest=player.mode==='walk'?nearestInteraction(player.position):null;promptRing.visible=!!nearest;
    if(nearest){promptRing.position.set(nearest.x,walkHeight(nearest.x,nearest.z)+.06,nearest.z);promptRing.rotation.z=time*.1;}
    const age=time-burstAt;burst.visible=age>=0&&age<2.5;if(burst.visible){burst.position.copy(burstOrigin);burstM.opacity=(1-age/2.5)*.7;for(let i=0;i<90;i++){const a=i*2.399,s=.5+(i%7)*.09;burstV.set([Math.cos(a)*age*s,age*(.65+i%3*.2)-age*age*.17,Math.sin(a)*age*s],i*3);}burstG.attributes.position.needsUpdate=true;}
    rendering.render();stats.draws=rendering.renderer.info.render.calls;stats.triangles=rendering.renderer.info.render.triangles;stats.frameMs=frameAverage;onFrame();
  }
  const observer=new ResizeObserver(()=>rendering.resize(host.clientWidth,host.clientHeight));observer.observe(host);rendering.resize(host.clientWidth,host.clientHeight);landscape.update(camera,true);frame=requestAnimationFrame(animate);
  return{scene,camera,player,audio,assets,rendering,stats,ready:readyPromise,progress,
    get district(){return district;},get hour(){return hour;},get weather(){return weather;},get cycle(){return cycle;},get nearest(){return player.mode==='walk'?nearestInteraction(player.position):null;},
    setDistrict,
    start(){player.enter();if(!progress.discovered.includes(district))progress.discovered.push(district);},
    interact(){const item=player.mode==='walk'?nearestInteraction(player.position):null;if(!item)return{message:'走近门、花种、旧灯或钟绳，再按 E 互动。'};const result=activate(item);if(result.changed){burstAt=time;burstOrigin.set(item.x,h(item.x,item.z)+1.3,item.z);}return result;},
    travelTo(id:string){const item=interactables.find(p=>p.id===id);if(!item)return false;
      if(id==='bell'&&!progress.gate)return false;
      const look:[number,number,number]=[item.x,h(item.x,item.z)+1.4,item.z];
      for(const [x,z] of interactionApproaches(item))if(player.moveTo(x,z,look)){player.enter();district=currentDistrict(player.position.x,player.position.z);if(!progress.discovered.includes(district))progress.discovered.push(district);landscape.update(camera,true);rendering.shadowDirty();return true;}return false;
    },
    setTime(value:number){hour=Math.max(0,Math.min(23.99,value));rendering.atmosphere(hour,weather,district);},
    setWeather(value:Weather){weather=value;rendering.atmosphere(hour,weather,district);for(const m of assets.materials.values())if(/stone|roof|wood/.test(m.name))m.roughness=value==='rain'?.48:.9;},
    setCycle(value:boolean){cycle=value;},
    capture(){return new Promise<Blob>((resolve,reject)=>{rendering.render();rendering.renderer.domElement.toBlob(b=>b?resolve(b):reject(Error('照片暂时无法保存')),'image/png');});},
    snapshot(){return{...stats,ready,scene:district,mode:player.mode,position:player.position.toArray(),camera:camera.position.toArray(),target:player.controls.target.toArray(),hour,weather,cycle,interaction:player.mode==='walk'?nearestInteraction(player.position)?.id||null:null,progress:structuredClone(progress),audio:audio.active,music:audio.track,objects:{door:doorAmount,bloom:seed.scale.x,fountain:droplets.visible,bell:bellPivot.rotation.z},rendering:{...rendering.stats},connectedWorld:true};},
    dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();player.dispose();audio.dispose();rendering.dispose();const geometries=new Set<T.BufferGeometry>(),mats=new Set<T.Material>();scene.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.Points||o instanceof T.Line){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])mats.add(m);}});geometries.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());waterNormal.dispose();assets.dispose();},
  };
}
export type Manor=Awaited<ReturnType<typeof createManor>>;
