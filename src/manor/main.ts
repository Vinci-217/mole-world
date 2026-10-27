import './style.css';
import {createManor,type Manor} from './scene';
import {districts,interactables,readProgress,blankProgress,type District,type Weather} from './world';

const el=<E extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id)! as E;
const events=new AbortController(),listen={signal:events.signal},saveKey='mole-manor-handmade-v1';
document.body.classList.add('welcome-open','loading');
let world:Manor|undefined,photo=false,toastAt=0,lastUi=0,lastSaved='',disposed=false;
let stored:string|null=null;try{stored=localStorage.getItem(saveKey);}catch{}
const progress=readProgress(stored);
function toast(message:string){el('toast').textContent=message;el('toast').hidden=false;toastAt=performance.now();}
function save(){
  const value=JSON.stringify(progress);if(value===lastSaved)return;
  try{localStorage.setItem(saveKey,value);lastSaved=value;el('save-status').textContent='旅程已保存 · 可以随时回来';}catch{el('save-status').textContent='此浏览器暂时无法保存，仍可继续探索';}
}
function closePanel(panel:HTMLDialogElement){panel.close();world?.player.pause(photo);}
function openPanel(id:string){
  if(!world)return;
  for(const p of document.querySelectorAll<HTMLDialogElement>('dialog[open]'))p.close();
  document.exitPointerLock?.();world.player.pause(true);el<HTMLDialogElement>(id).showModal();updateJournal();updatePoi();
}
function updateJournal(){
  const done=[progress.watered,progress.discovered.includes('heart'),progress.bell&&progress.watered&&progress.discovered.includes('heart')];
  ['flower','forest','castle'].forEach((id,i)=>el('task-'+id).classList.toggle('done',done[i]));
  el('journey-count').textContent=done.filter(Boolean).length+' / 3';
  el('journal-progress').textContent=`花种${progress.watered?'已盛开':'尚未苏醒'} · 旧灯 ${progress.lanterns.length}/3 · ${progress.discovered.includes('heart')?'已听见树心回应':'古树正在等待'} · ${done[2]?'归途钟已响，旅程完成':'归途钟等待最后的回音'}`;
  el('album').replaceChildren(...(['castle','flower','forest'] as const).map(id=>{const span=document.createElement('span');span.textContent=districts[id].name+(progress.album.includes(id)?' · 已留影':'');span.classList.toggle('recorded',progress.album.includes(id));return span;}));
}
function updatePoi(){
  const list=el('poi-list');list.replaceChildren();
  for(const [heading,ids] of [['摩尔城堡',['gate','fountain','bell']],['神秘花海',['water','bench','journal']],['黑森林',['west','brook','root','heart']]] as [string,string[]][]){
    const title=document.createElement('p');title.className='poi-heading';title.textContent=heading;list.append(title);
    for(const id of ids){
      const point=interactables.find(p=>p.id===id)!,button=document.createElement('button'),name=document.createElement('strong'),label=document.createElement('span');
      button.dataset.poi=id;name.textContent=point.name;name.style.fontWeight='400';label.textContent=id==='bell'&&!progress.gate?'先推开城堡大门':'前往 ↗';button.disabled=id==='bell'&&!progress.gate;button.append(name,label);
      button.addEventListener('click',()=>{
        if(!world)return;
        if(world.travelTo(id)){closePanel(el<HTMLDialogElement>('map-panel'));dismissWelcome(false);toast('已抵达'+point.name+'附近。');update();}
        else toast('这里暂时无法抵达，先沿小径走近。');
      },listen);list.append(button);
    }
  }
}
function dismissWelcome(walk=true){
  el('welcome').hidden=true;document.body.classList.remove('welcome-open');if(walk)world?.start();save();update();
}
function selectDistrict(id:District){
  if(!world)return;
  world.setDistrict(id);history.replaceState(null,'',location.pathname+'?scene='+id);
  const d=districts[id];el('welcome-description').textContent=d.description;
  el('welcome-title').innerHTML=id==='castle'?'钟声起，<br><em>花又开。</em>':id==='flower'?'风起时，<br><em>花会记得。</em>':'循着光，<br><em>走进森林。</em>';
  if(el('welcome').hidden)toast('抵达'+d.name+'。三片风景始终相连。');update();save();
}
function update(){
  if(!world)return;
  const d=world.district,meta=districts[d],walking=world.player.mode==='walk';
  for(const button of document.querySelectorAll<HTMLElement>('[data-district]')){if(button.dataset.district===d)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}
  el('district-name').textContent=meta.name;el('district-subtitle').textContent=meta.subtitle;el('district-number').textContent=d==='castle'?'01':d==='flower'?'02':'03';el('district-english').textContent=d==='castle'?'THE CASTLE':d==='flower'?'THE FLOWER SEA':'THE BLACK FOREST';
  const hour=world.hour,h=Math.floor(hour),m=Math.floor((hour-h)*60),clock=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
  el('time-readout').textContent=clock+' · '+(world.weather==='rain'?'林间细雨':world.weather==='mist'?'薄雾漫游':h<6||h>=19?'月色与萤火':h>=16?'林间斜阳':'晴朗的风');el('hour-output').textContent=clock;
  if(world.cycle)el<HTMLInputElement>('hour-slider').value=String(hour);
  el('walk-button').querySelector('span')!.textContent=walking?'环绕看风景':'走入庄园';el('walk-button').setAttribute('aria-pressed',String(walking));document.body.classList.toggle('walking',walking);
  el('touch-pad').hidden=!walking;el('reticle').hidden=!walking;el('lock-button').hidden=!walking;
  el('controls-help').textContent=walking?'WASD / 方向键行走 · 拖动环顾 · E 互动 · Shift 快走 · 空格轻跳 · Esc 看风景':'拖动环绕 · 滚轮缩放 · 三处风景可以直接步行抵达';
  const near=world.nearest;el('interaction').hidden=!near||!walking||!el('welcome').hidden;
  if(near){el('interact-name').textContent=near.name;el('interact-action').textContent=near.type==='gate'&&progress.gate?'合上城堡大门':near.type==='lantern'&&progress.lanterns.includes(near.id)?'看看这一盏微光':near.action;}
  el('sound-button').setAttribute('aria-pressed',String(world.audio.active));el('sound-button').setAttribute('aria-label',world.audio.active?'关闭音乐与环境声':'开启音乐与环境声');
  for(const button of document.querySelectorAll<HTMLElement>('[data-weather]'))button.setAttribute('aria-pressed',String(button.dataset.weather===world.weather));
}
function interact(){if(!world||photo||document.querySelector('dialog[open]'))return;const result=world.interact();if(result.journal)openPanel('journal-panel');else toast(result.message);if(result.changed){save();updateJournal();}update();}
function photoMode(value:boolean){
  if(!world)return;photo=value;world.player.pause(value);document.body.classList.toggle('photo-mode',value);el('photo-panel').hidden=!value;
  el<HTMLInputElement>('fov-slider').value=String(world.camera.fov);el<HTMLInputElement>('exposure-slider').value=String(world.rendering.renderer.toneMappingExposure);
  if(value)document.exitPointerLock?.();
}
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-district]'))button.addEventListener('click',()=>selectDistrict(button.dataset.district as District),listen);
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-map-district]'))button.addEventListener('click',()=>{selectDistrict(button.dataset.mapDistrict as District);closePanel(el<HTMLDialogElement>('map-panel'));},listen);
for(const button of document.querySelectorAll<HTMLElement>('[data-close]'))button.addEventListener('click',()=>closePanel(button.closest('dialog')!),listen);
for(const panel of document.querySelectorAll<HTMLDialogElement>('dialog')){
  panel.addEventListener('cancel',event=>{event.preventDefault();closePanel(panel);},listen);
  panel.addEventListener('click',event=>{if(event.target===panel){const b=panel.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)closePanel(panel);}},listen);
}
el('start-button').addEventListener('click',()=>{dismissWelcome(true);void world?.audio.start().then(update).catch(()=>toast('点击右上角的声音按钮，再试一次。'));},listen);
el('preview-button').addEventListener('click',()=>dismissWelcome(false),listen);
el('walk-button').addEventListener('click',()=>{if(!world)return;if(world.player.mode==='walk')world.player.preview();else world.start();update();},listen);
el('interact-button').addEventListener('click',interact,listen);
el('map-button').addEventListener('click',()=>openPanel('map-panel'),listen);el('settings-button').addEventListener('click',()=>openPanel('settings-panel'),listen);el('journal-button').addEventListener('click',()=>openPanel('journal-panel'),listen);
el('journey-toggle').addEventListener('click',()=>{const hidden=!el('journey-list').hidden;el('journey-list').hidden=hidden;el('save-status').hidden=hidden;el('journey-toggle').setAttribute('aria-expanded',String(!hidden));},listen);
el('sound-button').addEventListener('click',()=>{void world?.audio.toggle().then(update).catch(()=>toast('声音暂时无法开启，请再点击一次。'));},listen);
el('lock-button').addEventListener('click',()=>{void world?.player.lock().catch(()=>toast('当前浏览器可使用拖动环顾。'));},listen);
el('fullscreen-button').addEventListener('click',()=>{const action=document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();void action.catch(()=>toast('当前页面不支持全屏，仍可正常探索。'));},listen);
el('hour-slider').addEventListener('input',event=>{world?.setTime(Number((event.target as HTMLInputElement).value));update();},listen);
for(const button of document.querySelectorAll<HTMLElement>('[data-hour]'))button.addEventListener('click',()=>{const h=Number(button.dataset.hour);world?.setTime(h);el<HTMLInputElement>('hour-slider').value=String(h);update();},listen);
for(const button of document.querySelectorAll<HTMLElement>('[data-weather]'))button.addEventListener('click',()=>{world?.setWeather(button.dataset.weather as Weather);update();},listen);
el('cycle-toggle').addEventListener('change',event=>world?.setCycle((event.target as HTMLInputElement).checked),listen);
el('quality-select').addEventListener('change',event=>{if(!world)return;world.rendering.quality((event.target as HTMLSelectElement).value as 'high'|'balanced');world.rendering.resize(el('world-canvas').clientWidth,el('world-canvas').clientHeight);},listen);
el('photo-button').addEventListener('click',()=>photoMode(true),listen);el('photo-exit').addEventListener('click',()=>photoMode(false),listen);
el('fov-slider').addEventListener('input',event=>{if(!world)return;world.camera.fov=Number((event.target as HTMLInputElement).value);world.camera.updateProjectionMatrix();},listen);
el('exposure-slider').addEventListener('input',event=>{if(world)world.rendering.renderer.toneMappingExposure=Number((event.target as HTMLInputElement).value);},listen);
el('shutter-button').addEventListener('click',async()=>{
  if(!world)return;const button=el<HTMLButtonElement>('shutter-button');button.disabled=true;
  try{const blob=await world.capture(),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`摩尔庄园-${districts[world.district].name}-${new Date().toISOString().slice(0,10)}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);if(!progress.album.includes(world.district))progress.album.push(world.district);save();updateJournal();toast('这片风景已经记录。');}
  catch{toast('照片未保存，请再试一次。');}finally{button.disabled=false;}
},listen);
el('reset-button').addEventListener('click',()=>{el('reset-confirm').hidden=false;},listen);
el('reset-cancel-button').addEventListener('click',()=>{el('reset-confirm').hidden=true;},listen);
el('reset-confirm-button').addEventListener('click',()=>{Object.assign(progress,blankProgress());save();location.reload();},listen);
el('retry-button').addEventListener('click',()=>location.reload(),listen);
window.addEventListener('keydown',event=>{
  if(event.target instanceof HTMLInputElement||event.target instanceof HTMLSelectElement||event.target instanceof HTMLTextAreaElement)return;
  if(event.code==='Escape'){if(photo){photoMode(false);return;}const panel=document.querySelector<HTMLDialogElement>('dialog[open]');if(panel)closePanel(panel);else if(world?.player.mode==='walk'){world.player.preview();update();}return;}
  if(!el('welcome').hidden||document.querySelector('dialog[open]'))return;
  if(event.code==='KeyE')interact();if(event.code==='KeyM')openPanel('map-panel');if(event.code==='KeyJ')openPanel('journal-panel');if(event.code==='KeyP')photoMode(!photo);
},listen);
if(innerWidth<760){el('journey-list').hidden=true;el('save-status').hidden=true;el('journey-toggle').setAttribute('aria-expanded','false');}
async function start(){
  try{
    world=await createManor(el('world-canvas'),progress,(n,label)=>{el('load-percent').textContent=Math.round(n*100)+'%';el('load-bar').style.width=(n*100)+'%';el('load-label').textContent=label;},()=>{
      const now=performance.now();if(now-lastUi>150){lastUi=now;update();save();}if(toastAt&&now-toastAt>6500){el('toast').hidden=true;toastAt=0;}
    });
    Object.defineProperty(window,'__manor',{configurable:true,get:()=>world?.snapshot()});
    world.rendering.renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();el('fatal').hidden=false;el('fatal-message').textContent='三维渲染已暂停。重新载入可恢复旅程，探索记录会保留。';},listen);
    await world.ready;document.body.classList.remove('loading');el<HTMLButtonElement>('start-button').disabled=false;el<HTMLButtonElement>('preview-button').disabled=false;el('start-button').innerHTML='开始探索 <span>↗</span>';el('load-label').textContent='屋檐、花田和林间，已经准备好了。';
    el<HTMLSelectElement>('quality-select').value=world.rendering.stats.quality;selectDistrict(world.district);updateJournal();updatePoi();update();
  }catch(error){el('fatal').hidden=false;el('fatal-message').textContent=error instanceof Error?error.message:'请使用支持 WebGL 2 的浏览器重试';el('load-label').textContent='庄园暂未载入，请重试。';}
}
function dispose(){if(disposed)return;disposed=true;save();events.abort();world?.dispose();delete (window as unknown as Record<string,unknown>).__manor;}
window.addEventListener('pagehide',event=>{if(!event.persisted)dispose();},listen);window.addEventListener('beforeunload',dispose,listen);
void start();
