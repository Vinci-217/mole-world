import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {canWalk,walkHeight,movePosition,districts,currentDistrict,type District} from './world';

export function createPlayer(camera:T.PerspectiveCamera,canvas:HTMLCanvasElement,gate:()=>boolean,onStep:(stone:boolean)=>void){
  const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.085;controls.enablePan=false;controls.minDistance=5;controls.maxDistance=70;controls.maxPolarAngle=Math.PI*.48;
  const events=new AbortController(),keys=new Set<string>(),listen={signal:events.signal},position=new T.Vector3();
  let mode:'orbit'|'walk'='orbit',yaw=0,pitch=-.04,drag=false,lastX=0,lastY=0,stepDistance=0,jumpY=0,velocity=0,paused=false,seated=false;
  const oldPosition=new T.Vector3(),oldTarget=new T.Vector3();
  const standingPosition=new T.Vector3();
  function stand(){if(seated){position.copy(standingPosition);seated=false;}}
  function lookAt(x:number,y:number,z:number){const d=new T.Vector3(x,y,z).sub(position).normalize();yaw=Math.atan2(-d.x,-d.z);pitch=Math.asin(d.y);}
  function look(){camera.quaternion.setFromEuler(new T.Euler(pitch,yaw,0,'YXZ'));}
  function district(id:District){
    const d=districts[id];jumpY=velocity=0;position.set(d.spawn[0],walkHeight(d.spawn[0],d.spawn[1])+1.66,d.spawn[1]);lookAt(d.target[0],d.target[1],d.target[2]);
    if(mode==='walk'){camera.position.copy(position);look();}else{camera.position.fromArray(d.eye);controls.target.fromArray(d.target);controls.update();}seated=false;
  }
  function enter(){if(mode==='walk')return;mode='walk';oldPosition.copy(camera.position);oldTarget.copy(controls.target);controls.enabled=false;camera.fov=59;camera.updateProjectionMatrix();camera.position.copy(position);look();}
  function preview(){if(mode==='orbit')return;mode='orbit';keys.clear();controls.enabled=true;camera.fov=46;camera.updateProjectionMatrix();const d=districts[currentDistrict(position.x,position.z)];camera.position.fromArray(d.eye);controls.target.fromArray(d.target);controls.update();document.exitPointerLock?.();}
  function moveTo(x:number,z:number,look?:[number,number,number]){if(!canWalk(x,z,gate()))return false;jumpY=velocity=0;position.set(x,walkHeight(x,z)+1.66,z);seated=false;if(look)lookAt(...look);if(mode==='walk'){camera.position.copy(position);camera.quaternion.setFromEuler(new T.Euler(pitch,yaw,0,'YXZ'));}return true;}
  window.addEventListener('keydown',event=>{
    if(event.target instanceof HTMLInputElement||event.target instanceof HTMLSelectElement||event.target instanceof HTMLTextAreaElement)return;
    if(mode==='walk'&&['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ControlLeft','Space'].includes(event.code)){keys.add(event.code);event.preventDefault();if(event.code==='Space'&&jumpY===0&&!paused){stand();velocity=4.7;}}
  },listen);
  window.addEventListener('keyup',event=>keys.delete(event.code),listen);window.addEventListener('blur',()=>keys.clear(),listen);
  canvas.addEventListener('pointerdown',event=>{if(mode!=='walk')return;drag=true;lastX=event.clientX;lastY=event.clientY;canvas.setPointerCapture(event.pointerId);},listen);
  canvas.addEventListener('pointermove',event=>{
    if(mode!=='walk'||(!drag&&document.pointerLockElement!==canvas))return;
    const dx=document.pointerLockElement===canvas?event.movementX:event.clientX-lastX,dy=document.pointerLockElement===canvas?event.movementY:event.clientY-lastY;
    yaw-=dx*.0027;pitch=T.MathUtils.clamp(pitch-dy*.0027,-1.2,1.18);lastX=event.clientX;lastY=event.clientY;look();
  },listen);
  for(const name of ['pointerup','pointercancel'])canvas.addEventListener(name,()=>{drag=false;},listen);
  for(const button of document.querySelectorAll<HTMLButtonElement>('[data-move]')){
    button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);keys.add(button.dataset.move!);},listen);
    for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,()=>keys.delete(button.dataset.move!),listen);
  }
  return{controls,position,district,enter,preview,moveTo,lookAt,
    get mode(){return mode;},get seated(){return seated;},
    pause(value:boolean){paused=value;keys.clear();},
    sit(){if(seated){stand();return;}standingPosition.copy(position);seated=true;jumpY=velocity=0;position.set(47,walkHeight(47,23)+1.17,23);lookAt(58,walkHeight(58,-4)+2,-4);},
    async lock(){if(mode==='walk'&&canvas.requestPointerLock)await canvas.requestPointerLock();},
    update(dt:number,time:number){
      if(mode==='orbit'){controls.update();return;}
      if(!paused){
        let f=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown')),s=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
        if((f||s)&&seated)stand();
        const length=Math.hypot(f,s)||1;f/=length;s/=length;const speed=(keys.has('ShiftLeft')?5.7:3.1)*dt;
        const ox=position.x,oz=position.z;[position.x,position.z]=movePosition(position.x,position.z,(-Math.sin(yaw)*f+Math.cos(yaw)*s)*speed,(-Math.cos(yaw)*f-Math.sin(yaw)*s)*speed,gate());
        const moved=Math.hypot(position.x-ox,position.z-oz);if(moved>.001)seated=false;stepDistance+=moved;
        if(stepDistance>.95){stepDistance=0;onStep(Math.abs(position.x)<23&&position.z<-26);}
        if(jumpY>0||velocity>0){velocity-=14*dt;jumpY=Math.max(0,jumpY+velocity*dt);if(!jumpY)velocity=0;}
        const eye=seated?1.17:keys.has('ControlLeft')?1.04:1.66;
        position.y=walkHeight(position.x,position.z)+eye+jumpY+(moved>.001&&jumpY===0?Math.sin(time*10)*.018:0);
      }
      camera.position.copy(position);look();
    },
    dispose(){events.abort();keys.clear();controls.dispose();},
  };
}
