import './style.css';
import * as T from 'three';
import { createIcons, Volume2, VolumeX, Maximize, Pause, Play, Sunset, Music2, Sun, CloudFog, CloudRain, Snowflake, Expand, Footprints, ArrowUpRight, Camera, ChevronDown, X } from 'lucide';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { EstateWorld, destinations, type Weather } from './world';
import { Soundscape } from './audio';
import { ManorAO } from './rendering';
import { WorldExplorer } from './explorer';
import { WorldAtlas } from './atlas-ui';
import { REGION_BY_ID, type RegionId } from './world-atlas';

const $ = <E extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id)! as E;
const icons = { Volume2, VolumeX, Maximize, Pause, Play, Sunset, Music2, Sun, CloudFog, CloudRain, Snowflake, Expand, Footprints, ArrowUpRight, Camera, ChevronDown, X };
const refreshIcons = () => createIcons({icons, attrs: {'stroke-width': 1.5}});
refreshIcons();
let toastTimeout: ReturnType<typeof setTimeout>;
function toast(message: string) { $('toast').textContent = message; $('toast').classList.add('visible'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => $('toast').classList.remove('visible'), 3800); }

type SavedState = {weather: Weather; hour: number; volume: number; highQuality: boolean};
function loadState(): Partial<SavedState> {try {const state = JSON.parse(localStorage.getItem('mole-world-v3') || '{}'); return state && typeof state === 'object' ? state : {};} catch {return {};}}
const saved = loadState();
let weather: Weather = ['clear','mist','rain','snow'].includes(saved.weather ?? '') ? saved.weather! : 'clear';
let hour = Number.isFinite(saved.hour) ? T.MathUtils.clamp(saved.hour!, 0, 23.99) : 16;
let highQuality = saved.highQuality ?? true;
let autoTime = !matchMedia('(prefers-reduced-motion: reduce)').matches;
let walking = false;
let activeDestination = 0;
let day = 1;
let ready = false;
let fps = 0;
let world: EstateWorld;
let explorer: WorldExplorer;
let atlas: WorldAtlas;
const courtyardMap=document.getElementById('minimap')!.innerHTML;
let renderer: T.WebGLRenderer;
let camera: T.PerspectiveCamera;
let controls: OrbitControls;
let composer: EffectComposer;
let bloom: UnrealBloomPass;
let ambientOcclusion: ManorAO;
let scene: T.Scene;
let sun: T.DirectionalLight;
let hemi: T.HemisphereLight;
let sky: T.Mesh<T.SphereGeometry, T.ShaderMaterial>;
const audio = new Soundscape();
const velocity = new T.Vector3();
const keys = new Set<string>();
let yaw = 0, pitch = 0;
let drag: {x: number; y: number; id: number} | null = null;
let destinationTransition: {position: T.Vector3; target: T.Vector3} | null = null;
let travelling=false;
const daylightColor = new T.Color();
const skyColor = new T.Color();
const weatherText: Record<Weather,string> = {clear: '风吹散了云，石墙上留下一点暖意。', mist: '薄雾沿着河谷，缓缓走进庄园。', rain: '雨敲着旧屋顶，灯火替你守着归途。', snow: '第一片雪落下，世界轻轻安静了。'};

function save() {try {localStorage.setItem('mole-world-v3', JSON.stringify({weather, hour, volume: +$<HTMLInputElement>('volume').value, highQuality}));} catch {/* Storage may be unavailable in private browsing. */}}
function syncTime() {
  const h = Math.floor(hour), m = Math.floor((hour % 1) * 60);
  $('clock').textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  $<HTMLInputElement>('time').value = String(hour);
  $('day-number').textContent = `第 ${String(day).padStart(2,'0')} 日`;
}
function setWeather(value: Weather, silent = false) {
  weather = value;
  document.querySelectorAll<HTMLButtonElement>('[data-weather]').forEach(button => {const selected = button.dataset.weather === value; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));});
  $('weather-description').textContent = weatherText[value]; audio.setWeather(value); save();
  if (!silent) toast({clear:'云层散去，阳光正穿过树林。',mist:'山谷起雾了。',rain:'雨来了，去灯火下走走吧。',snow:'庄园迎来了第一场雪。'}[value]);
}

function makeSky() {
  const material = new T.ShaderMaterial({side: T.BackSide, depthWrite: false, uniforms: {uTime:{value:0},uDay:{value:1},uCloud:{value:.5},uSky:{value:new T.Color(0x7f9486)},uSun:{value:new T.Vector3(1,.3,-1)}},
    vertexShader:`varying vec3 vDirection; void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 vDirection;uniform float uTime;uniform float uDay;uniform float uCloud;uniform vec3 uSky;uniform vec3 uSun;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float a=.5,v=0.;for(int i=0;i<5;i++){v+=noise(p)*a;p=p*2.03+1.7;a*=.5;}return v;}
void main(){vec3 d=normalize(vDirection);float h=max(d.y,0.);vec3 col=mix(uSky*1.35,uSky*vec3(.58,.75,.95),pow(h,.5));float horizon=pow(1.-abs(d.y),8.);col+=vec3(.15,.12,.07)*horizon*uDay;float sun=pow(max(dot(d,normalize(uSun)),0.),120.);col+=vec3(1.,.69,.35)*sun*uDay*.7;vec2 uv=d.xz/max(d.y+.18,.05)*1.6+uTime*.002;float cloud=fbm(uv);float clouds=smoothstep(.44-.13*uCloud,.68-.1*uCloud,cloud);col=mix(col,mix(vec3(.008,.012,.02),vec3(.89,.9,.87),uDay),clouds*(.4+uCloud*.5)*smoothstep(-.05,.18,d.y));float star=step(.9984,hash(floor(d.xz/(abs(d.y)+.08)*500.)));col+=vec3(star)*(1.-uDay)*smoothstep(.05,.5,d.y)*.7;gl_FragColor=vec4(col,1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`});
  const mesh = new T.Mesh(new T.SphereGeometry(280, 36, 20), material); mesh.renderOrder = -10; mesh.userData.excludeFromAO=true; return mesh;
}

async function init() {
  const canvas = $<HTMLCanvasElement>('world');
  renderer = new T.WebGLRenderer({canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false});
  renderer.setPixelRatio(Math.min(devicePixelRatio, highQuality ? 1.6 : 1)); renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
  renderer.info.autoReset = false;
  scene = new T.Scene(); scene.fog = new T.FogExp2(0xbacbd0, .004);
  camera = new T.PerspectiveCamera(48, innerWidth / innerHeight, .1, 330); camera.position.set(...destinations[0].position);
  controls = new OrbitControls(camera, canvas); controls.target.set(...destinations[0].target); controls.enableDamping = true; controls.dampingFactor = .045; controls.minDistance = 10; controls.maxDistance = 90; controls.maxPolarAngle = Math.PI / 2 - .03; controls.minPolarAngle = .13; controls.enablePan = true; controls.panSpeed = .55; controls.rotateSpeed = .45; controls.zoomSpeed = .7;
  controls.addEventListener('start', () => { destinationTransition = null; });
  const environment = new RoomEnvironment(); const pmrem = new T.PMREMGenerator(renderer); const target = pmrem.fromScene(environment, .04); scene.environment = target.texture; scene.environmentIntensity = .2; environment.dispose(); pmrem.dispose();
  hemi = new T.HemisphereLight(0xd5e1f0, 0x556646, .75); scene.add(hemi);
  sun = new T.DirectionalLight(0xf9d39a, 3); sun.position.set(-30, 40, 5); sun.castShadow = true; sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left = -55; sun.shadow.camera.right = 55; sun.shadow.camera.top = 55; sun.shadow.camera.bottom = -55; sun.shadow.camera.near = 1; sun.shadow.camera.far = 180; sun.shadow.normalBias = .025; sun.shadow.bias = -.00012; sun.shadow.radius = 3; sun.target.position.set(0,4,-15); scene.add(sun); scene.add(sun.target);
  sky = makeSky(); scene.add(sky);
  // The compositor renders geometry twice for contact AO. Refresh the sun's
  // shadow once per frame rather than repeating the same shadow-map draw.
  sun.shadow.autoUpdate=false;
  $('loading-detail').textContent = '正在展开摩尔城堡与前庭';
  await new Promise(resolve => setTimeout(resolve, 30));
  world = new EstateWorld(); scene.add(world.group);
  explorer=new WorldExplorer(scene,world);
  atlas=new WorldAtlas(id=>{void travelToRegion(id);});
  const renderTarget=new T.WebGLRenderTarget(innerWidth,innerHeight,{type:T.HalfFloatType});
  renderTarget.samples=highQuality?4:0;
  composer = new EffectComposer(renderer,renderTarget); composer.addPass(new RenderPass(scene, camera));
  ambientOcclusion=new ManorAO(scene,camera);ambientOcclusion.enabled=highQuality;composer.addPass(ambientOcclusion);
  bloom = new UnrealBloomPass(new T.Vector2(innerWidth,innerHeight), .1, .55, 1.2); bloom.enabled=highQuality;sun.castShadow=highQuality;composer.addPass(bloom);
  const grade = new ShaderPass({uniforms: {tDiffuse:{value:null},uTime:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);float l=dot(c.rgb,vec3(.2126,.7152,.0722));c.rgb=mix(vec3(l),c.rgb,.99);c.rgb*=vec3(1.01,1.,.99);float vig=1.-smoothstep(.2,.85,distance(vUv,vec2(.5)))*.1;c.rgb*=vig;gl_FragColor=c;}`}); composer.addPass(grade); composer.addPass(new OutputPass());
  setupEvents(); resize(); setWeather(weather, true); syncTime();
  renderLoop();
  await world.loadAssets(message => {$('loading-detail').textContent = message;});
  ready = true; $('loading').classList.add('done'); setTimeout(() => $('loading').remove(), 1100);
  // Read-only runtime diagnostics for smoke tests; never includes credentials.
  Object.defineProperty(window,'__estate',{get:()=>({ready,weather,hour,walking,day,audio:audio.playing,audioState:audio.state,highQuality,activeDestination,position:camera.position.toArray(),loadedAssets:[...world.externalAssets],rainVisible:world.rain.visible,snowVisible:world.snow.visible,daylight:sky.material.uniforms.uDay.value,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,fps,activeRegion:explorer.activeId,regionLoading:explorer.loading,regionMeshCount:explorer.meshCount,sceneMeshCount:explorer.sceneMeshCount,sceneTriangleCount:explorer.sceneTriangleCount,cameraTarget:controls.target.toArray(),natureAssets:[...world.vegetation.loadedAssets],contactShadows:ambientOcclusion.enabled,input:[...keys],velocity:velocity.toArray(),canWalkForward:explorer.canMove(camera.position.x,camera.position.z-.1)})});
}

function resize() {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); composer.setSize(innerWidth,innerHeight);
  if (!walking && activeDestination === 0 && explorer.activeId==='castle') { if (innerWidth < 760) {camera.position.set(32,24,58); controls.target.set(0,7,-10);} else {camera.position.set(...destinations[0].position); controls.target.set(...destinations[0].target);} }
}

function setupEvents() {
  addEventListener('resize', resize);
  addEventListener('keydown', e => {if (e.code === 'Escape' && walking) {exitWalking();return;} if (e.target instanceof HTMLInputElement || e.target instanceof HTMLButtonElement) return; if (['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)) {keys.add(e.code); if (walking) e.preventDefault();}});
  addEventListener('keyup', e => keys.delete(e.code)); addEventListener('blur', () => {keys.clear();drag=null;});
  document.addEventListener('visibilitychange',()=>{if(document.hidden) keys.clear();});
  $('world').addEventListener('pointerdown', e => {if (!walking) return; drag = {x:e.clientX,y:e.clientY,id:e.pointerId}; $<HTMLCanvasElement>('world').setPointerCapture(e.pointerId);});
  $('world').addEventListener('pointermove', e => {if (!walking || !drag || drag.id !== e.pointerId) return; yaw -= (e.clientX - drag.x) * .0035; pitch = T.MathUtils.clamp(pitch - (e.clientY - drag.y) * .0035,-1.25,1.25); drag.x=e.clientX;drag.y=e.clientY;});
  $('world').addEventListener('pointerup',()=>drag=null); $('world').addEventListener('pointercancel',()=>drag=null);
  document.querySelectorAll<HTMLButtonElement>('[data-move]').forEach(button=>{button.addEventListener('pointerdown',e=>{e.preventDefault();keys.add(button.dataset.move!);button.setPointerCapture(e.pointerId);});for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>keys.delete(button.dataset.move!));});
  $('enter').addEventListener('click', enterWalking); $('exit-walk').addEventListener('click', exitWalking);
  document.querySelectorAll<HTMLButtonElement>('[data-weather]').forEach(button=>button.addEventListener('click',()=>setWeather(button.dataset.weather as Weather)));
  $('time').addEventListener('input',()=>{hour=+$<HTMLInputElement>('time').value;syncTime();save();});
  $('auto-time').addEventListener('click',()=>{autoTime=!autoTime;$('auto-time').innerHTML=`<i data-lucide="${autoTime?'pause':'play'}"></i> ${autoTime?'流转中':'已暂停'}`;$('auto-time').setAttribute('aria-pressed',String(autoTime));$('auto-time').title=autoTime?'暂停昼夜流转':'继续昼夜流转';refreshIcons();});
  async function toggleAudio(){try{const playing=await audio.toggle();document.body.classList.toggle('audio-playing',playing);$('audio-toggle').innerHTML=`<i data-lucide="${playing?'volume-2':'volume-x'}"></i>`;$('audio-toggle').setAttribute('aria-label',playing?'关闭音乐':'开启音乐');$('audio-toggle').title=playing?'关闭音乐':'开启音乐';$('sound-status').textContent=playing?'原创环境音乐 · 正在播放':'原创环境音乐 · 点击聆听';refreshIcons();}catch{toast('声音暂时未能开启，请再次点击。');}}
  $('audio-toggle').addEventListener('click',toggleAudio);$('soundscape').addEventListener('click',toggleAudio);
  const volume=$<HTMLInputElement>('volume');volume.value=String(Number.isFinite(saved.volume)?T.MathUtils.clamp(saved.volume!,0,1):.45);audio.setVolume(+volume.value);volume.addEventListener('input',()=>{audio.setVolume(+volume.value);save();});
  $('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('当前浏览器暂不支持全屏。');}});
  const showDialog=(id:string)=>{keys.clear();$<HTMLDialogElement>(id).showModal();};
  $('nav-journal').addEventListener('click',()=>showDialog('journal'));$('nav-guide').addEventListener('click',()=>showDialog('guide'));const openAtlas=()=>{keys.clear();velocity.set(0,0,0);atlas.open(explorer.activeId);};$('map-expand').addEventListener('click',openAtlas);$('nav-world').addEventListener('click',openAtlas);
  document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog=>{dialog.querySelector('button.dialog-close')!.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});});
  document.querySelectorAll<HTMLElement|SVGElement>('[data-destination]').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(d=>d.close());goToDestination(Number(el.dataset.destination));}));
  const quality=$('quality');const syncQuality=()=>{quality.innerHTML=`${highQuality?'高画质':'流畅画质'} <i data-lucide="chevron-down"></i>`;refreshIcons();};syncQuality();
  quality.addEventListener('click',()=>{highQuality=!highQuality;renderer.setPixelRatio(Math.min(devicePixelRatio,highQuality?1.6:1));composer.setPixelRatio(renderer.getPixelRatio());bloom.enabled=highQuality;ambientOcclusion.enabled=highQuality;sun.castShadow=highQuality;composer.renderTarget1.samples=highQuality?4:0;composer.renderTarget2.samples=highQuality?4:0;composer.renderTarget1.dispose();composer.renderTarget2.dispose();resize();syncQuality();save();toast(highQuality?'已开启接触阴影、抗锯齿与柔和辉光。':'已切换流畅画质。');});
  $('photo').addEventListener('click',()=>{document.body.classList.add('ui-hidden');requestAnimationFrame(()=>{composer.render();renderer.domElement.toBlob(blob=>{document.body.classList.remove('ui-hidden');if(!blob){toast('画面保存失败。');return;}const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`摩尔庄园-${weather}-${Math.floor(hour)}时.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('此刻的庄园，已为你留存。');});});});
}

function goToDestination(index:number){
  const destination=destinations[index];if(!destination)return;
  if(explorer.activeId!=='castle'){void travelToRegion('castle').then(()=>goToDestination(index));return;}
  activeDestination=index;
  if(walking){camera.position.set(destination.walk[0],explorer.heightAt(...destination.walk as [number,number])+1.7,destination.walk[1]);yaw=0;pitch=0;}else{destinationTransition={position:new T.Vector3(...destination.position as [number,number,number]),target:new T.Vector3(...destination.target as [number,number,number])};}
  $('location-title').textContent=destination.name;$('location-description').textContent=destination.description;document.querySelector('.caption-index')!.innerHTML=`0${index+1} <span>/ 04</span>`;toast(`前往${destination.name}`);
}

async function travelToRegion(id:string){
  if(!(id in REGION_BY_ID)||travelling)return;
  const regionId=id as RegionId;
  if(regionId===explorer.activeId)return;
  travelling=true;
  const resumeWalking=walking;
  if(walking)exitWalking();
  keys.clear();destinationTransition=null;
  const transition=$('region-transition');transition.hidden=false;
  $('transition-name').textContent=REGION_BY_ID[regionId].name;
  await new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve())));
  try{
    await explorer.travel(regionId);
    const region=REGION_BY_ID[regionId],destination=explorer.destination;
    activeDestination=0;destinationTransition=null;
    camera.position.set(...destination.position);controls.target.set(...destination.target);controls.update();
    $('location-title').textContent=regionId==='castle'?'城堡前庭':region.name;
    $('location-description').textContent=region.subtitle;
    document.querySelector('h1 > span')!.textContent=region.name;
    document.querySelector('.edition')!.textContent=regionId==='castle'?'CASTLE COURTYARD':'MOLE MANOR WORLD';
    document.querySelector('.caption-index')!.innerHTML=`${String(Object.keys(REGION_BY_ID).indexOf(regionId)+1).padStart(2,'0')} <span>/ 12</span>`;
    $('world-status').textContent=`${region.name} · ${regionId==='castle'?'细化中':'场景初版'}`;
    $('local-map-title').textContent=regionId==='castle'?'前庭导览':region.name;
    if(regionId==='castle'){
      $('minimap').innerHTML=courtyardMap;
      $('minimap').querySelectorAll<SVGElement>('[data-destination]').forEach(el=>el.addEventListener('click',()=>goToDestination(Number(el.dataset.destination))));
    }else{
      $('minimap').innerHTML=`<rect x="6" y="6" width="168" height="128" rx="26" fill="${region.color}" opacity=".16"/><path d="M88 132V45M35 76H140" stroke="#d7bd87" stroke-width="5" opacity=".6"/><circle cx="88" cy="47" r="17" fill="${region.color}" stroke="#ddc68c"/><path d="M78 49L88 33L98 49V58H78Z" fill="#ddc68c"/><text x="90" y="101" text-anchor="middle" fill="#e9d4b1" font-size="9">${region.name}</text><circle id="map-player" cx="87" cy="112" r="3" fill="#fff0ba"/>`;
    }
    $('minimap').setAttribute('aria-label',`${region.name}位置示意，完整地点请打开世界地图`);
    $('map-hint').textContent='打开世界地图前往各地';
    if(resumeWalking)enterWalking();
    toast(`已抵达${region.name}`);
  }catch(error){console.error('Region travel failed',error);toast('这个区域暂时未能展开，请稍后重试。');}
  finally{travelling=false;transition.hidden=true;}
}

function enterWalking(){
  if(!ready)return;walking=true;destinationTransition=null;controls.enabled=false;keys.clear();velocity.set(0,0,0);const dest=explorer.activeId==='castle'?destinations[activeDestination]:explorer.destination;camera.position.set(dest.walk[0],explorer.heightAt(dest.walk[0],dest.walk[1])+1.7,dest.walk[1]);yaw=0;pitch=0;camera.rotation.order='YXZ';camera.rotation.set(0,0,0);document.body.classList.add('walking');$('walk-hud').hidden=false;$('enter').blur();toast('沿小路慢慢走，按住画面拖动环顾。世界地图可以前往其他地区。');
}
function exitWalking(){walking=false;keys.clear();drag=null;controls.enabled=true;document.body.classList.remove('walking');$('walk-hud').hidden=true;camera.rotation.order='XYZ';if(explorer.activeId==='castle')goToDestination(activeDestination);else{const dest=explorer.destination;destinationTransition={position:new T.Vector3(...dest.position),target:new T.Vector3(...dest.target)};}}

function updateWalking(dt:number,t:number){
  const forward=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'));
  const strafe=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
  const norm=Math.hypot(forward,strafe)||1;const speed=keys.has('ShiftLeft')||keys.has('ShiftRight')?6:3;
  const vx=(Math.cos(yaw)*strafe-Math.sin(yaw)*forward)/norm*speed;const vz=(-Math.sin(yaw)*strafe-Math.cos(yaw)*forward)/norm*speed;
  velocity.x=T.MathUtils.damp(velocity.x,vx,10,dt);velocity.z=T.MathUtils.damp(velocity.z,vz,10,dt);
  const nx=camera.position.x+velocity.x*dt,nz=camera.position.z+velocity.z*dt;
  if(explorer.canMove(nx,camera.position.z))camera.position.x=nx;if(explorer.canMove(camera.position.x,nz))camera.position.z=nz;
  const moving=Math.abs(velocity.x)+Math.abs(velocity.z)>.15;const bob=moving?Math.sin(t*(speed===6?12:8))*.025:0;
  camera.position.y=T.MathUtils.damp(camera.position.y,explorer.heightAt(camera.position.x,camera.position.z)+1.7+bob,9,dt);camera.rotation.set(pitch,yaw,0);
  if(moving)audio.footstep();
}

const clock=new T.Clock();let uiTimer=0;let saveTimer=0;let frameCount=0;let fpsTimer=0;
function renderLoop(){
  requestAnimationFrame(renderLoop);const realDelta=clock.getDelta(),dt=Math.min(realDelta,.05),t=clock.elapsedTime;
  if(document.hidden)return;
  if(autoTime){hour+=dt/30;if(hour>=24){hour-=24;day++;}}
  const elevation=Math.sin((hour-6)/24*Math.PI*2);const daylight=T.MathUtils.smoothstep(elevation,-.22,.45);
  const overcast=weather==='rain'?.88:weather==='snow'?.75:weather==='mist'?.55:.15;
  const warm=T.MathUtils.smoothstep(1-Math.abs(elevation),.35,1)*daylight;
  daylightColor.setHex(0xfff3dd).lerp(new T.Color(0xffdba5),warm*.6);sun.color.copy(daylightColor);sun.intensity=daylight*(3-overcast*1.5);sun.position.set(Math.cos((hour-6)/24*Math.PI*2)*-55,Math.max(8,elevation*65),38);
  hemi.intensity=.16+daylight*.62;scene.environmentIntensity=.08+daylight*.14;
  skyColor.setHex(0x101e2a).lerp(new T.Color(weather==='rain'?0x82959e:weather==='snow'?0xb4c4cd:0x72a8c6),daylight);
  sky.material.uniforms.uTime.value=t;sky.material.uniforms.uDay.value=daylight;sky.material.uniforms.uCloud.value=overcast;sky.material.uniforms.uSky.value.copy(skyColor);sky.material.uniforms.uSun.value.copy(sun.position).normalize();
  const fog=scene.fog as T.FogExp2;fog.color.copy(skyColor).multiplyScalar(.92);fog.density=T.MathUtils.damp(fog.density,weather==='mist'?.006:weather==='rain'?.009:weather==='snow'?.011:.003,1,dt);
  renderer.toneMappingExposure=.93+daylight*.02;
  world.update(t,dt,weather,daylight);explorer.update(t,dt);
  if(walking)updateWalking(dt,t);else{if(destinationTransition){camera.position.lerp(destinationTransition.position,1-Math.exp(-dt*2.8));controls.target.lerp(destinationTransition.target,1-Math.exp(-dt*2.8));if(camera.position.distanceTo(destinationTransition.position)<.03)destinationTransition=null;}controls.update();}
  uiTimer+=dt;saveTimer+=dt;frameCount++;fpsTimer+=realDelta;if(fpsTimer>1){fps=Math.round(frameCount/fpsTimer);frameCount=0;fpsTimer=0;}
  if(uiTimer>.3){syncTime();uiTimer=0;const mx=86+camera.position.x*1.4,mz=73+camera.position.z*1.4;document.getElementById('map-player')!.setAttribute('cx',String(T.MathUtils.clamp(mx,5,175)));document.getElementById('map-player')!.setAttribute('cy',String(T.MathUtils.clamp(mz,5,135)));}
  if(saveTimer>8){save();saveTimer=0;}
  sky.position.copy(camera.position);
  renderer.info.reset();sun.shadow.needsUpdate=true;composer.render();
}

init().catch(err=>{console.error('Estate initialization failed',err);$('loading').innerHTML='<div class="fatal"><h2>摩尔庄园暂时未能展开</h2><p>请使用支持 WebGL 2 的现代浏览器，并开启硬件加速后刷新。</p><p>如果网络连接不稳定，请稍后重试。</p><button onclick="location.reload()">重新进入 →</button></div>';});
