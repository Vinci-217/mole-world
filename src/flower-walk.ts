import * as T from 'three';
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gardenCanWalk, gardenWalkHeight, advanceGardenPosition } from './flower-terrain';

export interface WorldNavigation{canWalk:(x:number,z:number)=>boolean;height:(x:number,z:number)=>number;spawn:[number,number]}
export function createGardenWalk(camera:T.PerspectiveCamera,controls:OrbitControls,canvas:HTMLCanvasElement,navigation:WorldNavigation={canWalk:gardenCanWalk,height:gardenWalkHeight,spawn:[1,17]}){
  const canWalk=navigation.canWalk,height=navigation.height;
  const events=new AbortController(),keys=new Set<string>();
  const position=new T.Vector3(navigation.spawn[0],height(...navigation.spawn)+1.62,navigation.spawn[1]);
  const oldPosition=new T.Vector3(),oldTarget=new T.Vector3();
  let active=false,yaw=0,pitch=-.04,drag=false,lastX=0,lastY=0;
  const look=()=>camera.quaternion.setFromEuler(new T.Euler(pitch,yaw,0,'YXZ'));
  function stop(){if(!active)return;active=false;keys.clear();drag=false;controls.enabled=true;camera.position.copy(oldPosition);controls.target.copy(oldTarget);controls.update();}
  function start(){
    if(active)return;oldPosition.copy(camera.position);oldTarget.copy(controls.target);active=true;controls.enabled=false;
    camera.position.copy(position);look();
  }
  const listen={signal:events.signal};
  window.addEventListener('keydown',event=>{
    if(event.code==='Escape'){stop();return;}
    if(active&&['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft'].includes(event.code)){
      keys.add(event.code);event.preventDefault();
    }
  },listen);
  window.addEventListener('keyup',event=>keys.delete(event.code),listen);
  window.addEventListener('blur',()=>keys.clear(),listen);
  canvas.addEventListener('pointerdown',event=>{if(!active)return;drag=true;lastX=event.clientX;lastY=event.clientY;canvas.setPointerCapture(event.pointerId);},listen);
  canvas.addEventListener('pointermove',event=>{
    if(!active||!drag)return;
    yaw-=(event.clientX-lastX)*.003;pitch=T.MathUtils.clamp(pitch-(event.clientY-lastY)*.003,-1.22,1.22);
    lastX=event.clientX;lastY=event.clientY;look();
  },listen);
  const release=()=>{drag=false;};canvas.addEventListener('pointerup',release,listen);canvas.addEventListener('pointercancel',release,listen);
  for(const button of document.querySelectorAll<HTMLButtonElement>('[data-garden-move]')){
    button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);keys.add(button.dataset.gardenMove!);},listen);
    for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,()=>keys.delete(button.dataset.gardenMove!),listen);
  }
  return {
    get active(){return active;},get position(){return position;},start,stop,
    moveTo(x:number,z:number){if(!canWalk(x,z))return false;position.set(x,height(x,z)+1.62,z);if(active)camera.position.copy(position);return true;},
    lookAt(target:T.Vector3){
      const direction=target.clone().sub(position).normalize();
      yaw=Math.atan2(-direction.x,-direction.z);pitch=T.MathUtils.clamp(Math.asin(direction.y),-1.22,1.22);
      if(active)look();
    },
    update(dt:number){
      if(!active)return;
      let forward=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'));
      let side=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
      const length=Math.hypot(forward,side)||1;forward/=length;side/=length;
      const speed=(keys.has('ShiftLeft')?5.2:2.8)*Math.min(dt,.25);
      const dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed,dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;
      [position.x,position.z]=advanceGardenPosition(position.x,position.z,dx,dz,canWalk);
      position.y=height(position.x,position.z)+1.62;camera.position.copy(position);look();
    },
    dispose(){events.abort();keys.clear();controls.enabled=true;},
  };
}
