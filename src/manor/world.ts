import * as T from 'three';

export type District='castle'|'flower'|'forest';
export type Weather='clear'|'rain'|'mist';
export interface Point{ x:number;z:number }
export const districts={
  castle:{name:'摩尔城堡',subtitle:'钟声与归途',description:'走过石桥，推开王冠之门。前庭的水声与钟楼，一直都在等你。',color:'#d7b982',spawn:[5,-29],eye:[25,10,-8],target:[0,12,-65]},
  flower:{name:'神秘花海',subtitle:'风与花的来信',description:'穿过起伏的花田，在花瓣亭与温室之间，找回一枚遗落的花种。',color:'#d6b6bd',spawn:[48,27],eye:[65,4.5,30],target:[57,2.8,-7]},
  forest:{name:'黑森林',subtitle:'听见古树呼吸',description:'沿着溪流与萤火走入树林。点亮三盏旧灯，唤醒藏在树心里的微光。',color:'#a8b3a0',spawn:[-39,-2],eye:[-34,4.2,2],target:[-61,5,-34]},
} as const;
export const castlePosition=new T.Vector3(0,0,-65);
export const pavilionPosition=new T.Vector3(58,0,-4);
export const cottagePosition=new T.Vector3(76,0,-34);
export const hollowPosition=new T.Vector3(-66,0,-51);
export const riverX=(z:number)=>-22+Math.sin(z*.042)*7+Math.sin(z*.091)*2;
export const bridges=[{x:riverX(-17),z:-17,width:3.8,length:8.4},{x:riverX(-66),z:-66,width:3.2,length:8.4}];
export const routes:[number,number][][]=[
  [[5,-26],[6,-40],[0,-52],[0,-60],[0,-70]],
  [[5,-26],[17,-24],[29,-20],[39,-11],[50,1],[53,20],[48,34],[35,39],[23,23],[17,-24]],
  [[50,1],[58,-4],[67,-15],[74,-27]],
  [[5,-26],[-8,-26],[-15,-20],[riverX(-17)+7,-17],[riverX(-17),-17],[riverX(-17)-7,-17],[-42,-6],[-50,-17],[-54,-26],[-61,-38],[-66,-46],[-66,-52]],
  [[-50,-17],[-65,-17],[-75,-27],[-72,-41],[-66,-46]],
  [[-61,-38],[-47,-44],[-41,-56],[riverX(-66)-7,-66],[riverX(-66),-66],[riverX(-66)+7,-66],[-8,-68],[0,-58]],
];
export const smoothstep=(a:number,b:number,x:number)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
export function pathDistance(x:number,z:number){
  let best=Infinity;
  for(const route of routes)for(let i=1;i<route.length;i++){
    const [ax,az]=route[i-1],[bx,bz]=route[i],dx=bx-ax,dz=bz-az,t=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz)));
    best=Math.min(best,Math.hypot(x-ax-t*dx,z-az-t*dz));
  }return best;
}
export function groundHeight(x:number,z:number){
  const hill=(cx:number,cz:number,r:number,a:number)=>a*Math.exp(-((x-cx)**2+(z-cz)**2)/r);
  let y=.6+.32*Math.sin(x*.07+z*.045)+.22*Math.cos(z*.13)+hill(71,-27,650,3.2)+hill(-80,-49,500,3.7)+hill(35,28,500,1.1);
  const castleMask=(1-smoothstep(20,27,Math.abs(x)))*(1-smoothstep(0,8,Math.max(-85-z,z+46)));
  y=T.MathUtils.lerp(y,3.5,castleMask);
  const dist=Math.abs(x-riverX(z));y-=1.7*Math.exp(-(dist*dist)/11);
  const nearPavilion=Math.hypot(x-58,z+4);y=T.MathUtils.lerp(y,1.15,1-smoothstep(5,8,nearPavilion));
  // Rising outskirts frame the three playable districts without a hard rim.
  y+=smoothstep(90,160,Math.hypot(x,z+25))*(9+5*Math.sin(x*.037-z*.05));
  return y;
}
export function walkHeight(x:number,z:number){
  for(const b of bridges)if(Math.abs(z-b.z)<b.width*.5&&Math.abs(x-b.x)<b.length*.5){
    const t=(x-b.x+b.length*.5)/b.length;return T.MathUtils.lerp(groundHeight(b.x-b.length*.5,b.z),groundHeight(b.x+b.length*.5,b.z),t)+.2+Math.sin(t*Math.PI)*.5;
  }
  if(Math.hypot(x-58,z+4)<5.1)return groundHeight(58,-4)+.43;
  return groundHeight(x,z);
}
export function random(seed:number){return()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296;};}
export interface TreePlacement{ x:number;z:number;scale:number;rotation:number;species:'oak'|'willow'|'birch'; }
export const trees=(()=>{
  const rnd=random(40891),rows:TreePlacement[]=[];
  for(let i=0;i<15000&&rows.length<305;i++){
    const x=(rnd()-.5)*236,z=67-rnd()*215;
    const forest=x<-33&&z<14&&z>-95;
    const edge=Math.hypot(x,z+30)>99;
    const gardenFrame=x>85||z<-105||z>53;
    if(!forest&&!edge&&!gardenFrame)continue;
    if(pathDistance(x,z)<3.7||Math.abs(x-riverX(z))<5||Math.hypot(x+66,z+51)<11)continue;
    if(Math.abs(x)<28&&z<-43&&z>-91)continue;
    if(Math.hypot(x-76,z+34)<12||Math.hypot(x-58,z+4)<12)continue;
    if([[-29,5],[-39,-2],[-64,-39],[67,40],[22,-17]].some(([a,b])=>Math.hypot(x-a,z-b)<5))continue;
    if(Math.hypot(x+34,z-2)<12)continue;
    const tx=-32,tz=-53,projection=((x+34)*tx+(z-2)*tz)/(tx*tx+tz*tz);
    if(projection>0&&projection<1&&Math.hypot(x+34-projection*tx,z-2-projection*tz)<6.3)continue;
    if(rows.some(t=>Math.hypot(t.x-x,t.z-z)<(forest?4.5:6)))continue;
    rows.push({x,z,scale:.63+rnd()*.5,rotation:rnd()*Math.PI*2,species:rnd()<.2?'birch':rnd()<.3?'willow':'oak'});
  }return rows;
})();
export interface Progress{version:1;watered:boolean;lanterns:string[];discovered:string[];bell:boolean;fountain:boolean;gate:boolean;album:string[]}
export const blankProgress=():Progress=>({version:1,watered:false,lanterns:[],discovered:[],bell:false,fountain:true,gate:false,album:[]});
export function readProgress(raw:string|null):Progress{
  try{const p=JSON.parse(raw||'null');if(p?.version!==1)return blankProgress();
    return{version:1,watered:p.watered===true,lanterns:['west','brook','root'].filter(id=>p.lanterns?.includes(id)),discovered:['castle','flower','forest','heart'].filter(id=>p.discovered?.includes(id)),bell:p.bell===true,fountain:p.fountain!==false,gate:p.gate===true,album:['castle','flower','forest'].filter(id=>p.album?.includes(id))};
  }catch{return blankProgress();}
}
export interface Interactable{ id:string;name:string;action:string;x:number;z:number;radius:number;type:'gate'|'fountain'|'bell'|'water'|'lantern'|'heart'|'bench'|'journal'; }
export const interactables:Interactable[]=[
  {id:'gate',name:'王冠之门',action:'推开城堡大门',x:0,z:-57,radius:4,type:'gate'},
  {id:'fountain',name:'前庭喷泉',action:'拨动水闸',x:0,z:-40,radius:4.8,type:'fountain'},
  {id:'bell',name:'归途钟',action:'拉动钟绳',x:4.5,z:-68,radius:2.8,type:'bell'},
  {id:'water',name:'沉睡的花种',action:'为花种浇水',x:58,z:-1,radius:3,type:'water'},
  {id:'west',name:'藤下的旧灯',action:'点亮旧灯',x:-44,z:-9,radius:3,type:'lantern'},
  {id:'brook',name:'溪边的旧灯',action:'点亮旧灯',x:-53,z:-30,radius:3,type:'lantern'},
  {id:'root',name:'树根旁的旧灯',action:'点亮旧灯',x:-69,z:-43,radius:3,type:'lantern'},
  {id:'heart',name:'古树之心',action:'触碰树心',x:-66,z:-51,radius:3,type:'heart'},
  {id:'bench',name:'花田长椅',action:'坐下听风',x:47,z:23,radius:2.8,type:'bench'},
  {id:'journal',name:'园丁的手记',action:'翻开手记',x:74,z:-27,radius:3,type:'journal'},
];
export function nearestInteraction(p:Point){return interactables.filter(o=>Math.hypot(o.x-p.x,o.z-p.z)<o.radius).sort((a,b)=>Math.hypot(a.x-p.x,a.z-p.z)-Math.hypot(b.x-p.x,b.z-p.z))[0]||null;}
export function interactionApproaches(item:Interactable):[number,number][]{const d=item.type==='fountain'?4:2;return[[item.x,item.z+d],[item.x-d,item.z],[item.x+d,item.z],[item.x,item.z-d]];}
export function canWalk(x:number,z:number,gateOpen=false){
  if((x/100)**2+((z+25)/113)**2>1)return false;
  if(Math.abs(x-riverX(z))<2.7&&!bridges.some(b=>Math.abs(z-b.z)<b.width*.5-.2&&Math.abs(x-b.x)<b.length*.5))return false;
  if(Math.hypot(x,z+40)<3.2)return false;
  if(Math.abs(x-76)<3.8&&Math.abs(z+35)<4)return false;
  if(Math.hypot(x-58,z+4)<.9)return false;
  if(Math.abs(x)<2.4&&Math.abs(z+60)<.65&&!gateOpen)return false;
  if(Math.abs(x)>2.1&&Math.abs(x)<5.6&&z<-59&&z>-67)return false;
  if(Math.abs(x)>5.3&&Math.abs(x)<7.55&&z<-61.8&&z>-68.2)return false;
  if(Math.abs(x)<7.5&&Math.abs(z+74)<.5)return false;
  if(Math.abs(x)<4.3&&Math.abs(z+73)<.6)return false;
  for(const side of [-1,1]){
    if(Math.abs(x-side*11.5)<4.9&&Math.abs(z+68)<5.9)return false;
    if(Math.hypot(x-side*17,z+64)<2.7)return false;
    if(Math.hypot(x-side*15,z+74)<2.6)return false;
  }
  if(Math.hypot(x+66,z+51)<3.2&&!(Math.abs(x+66)<1.25&&z>-52.2))return false;
  if([-56.7,-51.3].some(cx=>Math.abs(x-cx)<.75)&&Math.abs(z+26)<.85)return false;
  if([-5,5].some(cx=>[-63,-67,-71].some(cz=>Math.hypot(x-cx,z-cz)<.52)))return false;
  for(const [cx,cz,a] of [[47,23,-.35],[-8,-33,.8],[70,-24,Math.PI*.7]]){
    const dx=x-cx,dz=z-cz,lx=dx*Math.cos(a)-dz*Math.sin(a),lz=dx*Math.sin(a)+dz*Math.cos(a);
    if(Math.abs(lx)<1.3&&Math.abs(lz)<.55)return false;
  }
  if(trees.some(t=>Math.hypot(x-t.x,z-t.z)<.55*t.scale+.28))return false;
  return true;
}
export function movePosition(x:number,z:number,dx:number,dz:number,gate:boolean):[number,number]{
  const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.14));for(let i=0;i<steps;i++){if(canWalk(x+dx/steps,z,gate))x+=dx/steps;if(canWalk(x,z+dz/steps,gate))z+=dz/steps;}return[x,z];
}
export function currentDistrict(x:number,z:number):District{return x<-27?'forest':x>25?'flower':'castle';}
