import './black-forest.css';
import {createBlackForest,type ForestAtmosphere} from './black-forest-scene';
import {forestPlaces} from './forest-terrain';
import {ForestAudio} from './forest-audio';
const el=<E extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id)! as E;
const events=new AbortController(),audio=new ForestAudio();
let world:ReturnType<typeof createBlackForest>|undefined,disposed=false;
for(const place of forestPlaces){
  const button=document.createElement('button');button.textContent=place.label;button.dataset.forestPlace=place.id;
  button.addEventListener('click',()=>{world?.focus(place.id);el('forest-location').textContent=place.label;},{signal:events.signal});el('forest-places').append(button);
}
function update(){
  if(!world)return;
  const walking=world.walk.active,button=el<HTMLButtonElement>('forest-walk');
  button.setAttribute('aria-pressed',String(walking));button.textContent=walking?'↥ 退出漫游':'♧ 走入森林';
  el('forest-touch').hidden=!walking;
  el('forest-help').textContent=walking?'WASD / 方向键行走 · 拖动看四周 · Shift 加速 · Esc 退出':'拖动环绕 · 滚轮缩放 · 走入森林可沿路探索';
  el('forest-exit').hidden=!walking||world.walk.position.z<24;
}
try{
  world=createBlackForest(el('forest-canvas'),update);
  Object.defineProperty(window,'__blackForest',{configurable:true,get:()=>Object.freeze({
    ...world!.stats,failed:[...world!.stats.failed],camera:world!.camera.position.toArray(),target:world!.controls.target.toArray(),
    player:world!.walk.position.toArray(),walking:world!.walk.active,audio:audio.playing,rendering:{...world!.rendering},
  })});
  world.renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();el('forest-error').textContent='三维渲染已暂停，请刷新页面重试。';el('forest-error').hidden=false;},{signal:events.signal});
  void world.ready.then(()=>{if(disposed)return;el('forest-status').textContent=world!.stats.failed.length?'部分环境素材未载入，请刷新重试。':'月光穿过树梢，萤火正在引路。';if(!world!.stats.failed.length)el('forest-status').hidden=true;});
}catch(error){el('forest-error').textContent=`森林尚未打开：${error instanceof Error?error.message:'请使用支持 WebGL 2 的浏览器重试'}`;el('forest-error').hidden=false;}
el('forest-walk').addEventListener('click',()=>{if(world?.walk.active)world.walk.stop();else world?.walk.start();update();},{signal:events.signal});
el('forest-reset').addEventListener('click',()=>{world?.reset();el('forest-location').textContent='南侧林径';},{signal:events.signal});
el('forest-atmosphere').addEventListener('change',e=>{const mode=(e.target as HTMLSelectElement).value;if(['moon','mist','rain'].includes(mode))world?.setAtmosphere(mode as ForestAtmosphere);},{signal:events.signal});
el('forest-audio').addEventListener('click',async()=>{
  const button=el<HTMLButtonElement>('forest-audio');button.disabled=true;
  try{const active=await audio.toggle();button.setAttribute('aria-pressed',String(active));button.textContent=active?'♪ 音景已开启':'♪ 林间音景';}catch{button.textContent='音景暂不可用';}finally{button.disabled=false;}
},{signal:events.signal});
function dispose(){if(disposed)return;disposed=true;events.abort();audio.dispose();world?.dispose();delete (window as unknown as Record<string,unknown>).__blackForest;}
window.addEventListener('pagehide',e=>{if(!e.persisted)dispose();},{signal:events.signal});window.addEventListener('beforeunload',dispose,{signal:events.signal});
