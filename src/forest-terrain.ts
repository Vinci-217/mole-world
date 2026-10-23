/** Shared by visible paths, prop placement and first-person collision. */
export const forestStreamZ=(x:number)=>-8+Math.sin(x*.09)*2.8;
export const forestBridge={x:-2.5,minZ:-14.4,maxZ:-2.8,width:3.8};
export function forestHeight(x:number,z:number){
  const hill=(cx:number,cz:number,r:number,a:number)=>a*Math.exp(-((x-cx)**2+(z-cz)**2)/r);
  return .35*Math.sin(x*.13+z*.04)+.25*Math.cos(z*.19)+hill(-32,-38,500,3)+hill(29,-55,700,4)
    +hill(-35,25,400,2)+Math.max(0,-z-83)*.18*(1+.35*Math.sin(x*.07))+Math.max(0,Math.abs(x)-58)*.14-1.2*Math.exp(-((z-forestStreamZ(x))**2)/20);
}
export function forestBridgeHeight(z:number){
  const b=forestBridge,t=Math.max(0,Math.min(1,(z-b.minZ)/(b.maxZ-b.minZ)));
  return (1-t)*forestHeight(b.x,b.minZ)+t*forestHeight(b.x,b.maxZ)+.12+.7*Math.sin(t*Math.PI);
}
export const forestRoutes:[number,number][][]=[
  [[2,34],[3,23],[0,15],[-2.5,6],[-2.5,-2.8],[-2.5,-8],[-2.5,-14.4],[-2.5,-24],[3,-38],[2,-53],[2,-58]],
  [[3,23],[18,15],[28,9],[32,2],[23,-2],[7,1],[-2.5,-2.8]],
  [[-2.5,-24],[10,-26],[24,-30],[29,-43],[18,-57],[2,-58]],
  [[-2.5,-24],[-15,-27],[-25,-38],[-27,-53],[-17,-63],[2,-58]],
];
export function forestPathDistance(x:number,z:number){
  let best=Infinity;
  for(const route of forestRoutes)for(let i=1;i<route.length;i++){
    const [ax,az]=route[i-1],[bx,bz]=route[i],dx=bx-ax,dz=bz-az;
    const t=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz)));
    best=Math.min(best,Math.hypot(x-ax-t*dx,z-az-t*dz));
  }
  return best;
}
export const forestHeroes=[{x:-15,z:16,r:1.1,height:25},{x:15,z:9,r:1.4,height:27},{x:-20,z:-20,r:1.3,height:30},{x:22,z:-48,r:1.5,height:29}];
export function forestRandom(seed:number){return()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296;};}
export const forestTrees=(()=>{
  const rnd=forestRandom(289063),trees:{x:number;z:number;scale:number;rotation:number}[]=[];
  for(let i=0;i<5000&&trees.length<290;i++){
    const x=(rnd()-.5)*154,z=51-rnd()*175;
    // Keep a deliberate sightline from the entrance over the bridge to the
    // ruined arch, and keep all guide cameras clear of trunks.
    if(Math.abs(x+1)<8&&z<34&&z>-48)continue;
    if([[3,8],[29,-23],[8,-48],[-32,-29]].some(([cx,cz])=>Math.hypot(x-cx,z-cz)<4))continue;
    if(forestPathDistance(x,z)<4||Math.abs(z-forestStreamZ(x))<5||Math.hypot(x-2,z+63)<13)continue;
    if(Math.hypot(x-23,z+30)<8||Math.hypot(x+25,z+40)<8)continue;
    if(forestHeroes.some(t=>Math.hypot(x-t.x,z-t.z)<5))continue;
    if(trees.some(t=>Math.hypot(x-t.x,z-t.z)<4.2))continue;
    trees.push({x,z,scale:.8+rnd()*.6,rotation:rnd()*Math.PI*2});
  }
  return trees;
})();
export function forestCanWalk(x:number,z:number){
  if((x/51)**2+((z+20)/70)**2>1)return false;
  const b=forestBridge;
  if(Math.abs(z-forestStreamZ(x))<2.9&&Math.abs(x-b.x)>b.width*.5-.28)return false;
  if(forestTrees.some(t=>Math.hypot(x-t.x,z-t.z)<.85*t.scale))return false;
  if(forestHeroes.some(t=>Math.hypot(x-t.x,z-t.z)<t.r+.35))return false;
  // Continuous Blender trunk, with a 2.7 m wide approachable cavity. The back
  // wall remains solid; the central opening must stay freely traversable.
  if(Math.hypot(x-2,z+63)<3.65&&!(Math.abs(x-2.12)<1.35&&z>-64.05))return false;
  // Ruin pillars; the 3.8 m wide central opening stays traversable.
  if([-5.2,.2].some(tx=>Math.abs(x-tx)<.9)&&Math.abs(z+23)<1.25)return false;
  return true;
}
export function forestWalkHeight(x:number,z:number){
  const b=forestBridge;
  return Math.abs(x-b.x)<b.width*.5&&z>b.minZ&&z<b.maxZ?forestBridgeHeight(z):forestHeight(x,z);
}
export const forestPlaces=[
  {id:'bridge',label:'苔桥幽径',player:[-2.5,1] as [number,number],eye:[3,2.8,6],target:[-2.5,2.3,-19]},
  {id:'mushrooms',label:'蘑菇林地',player:[23,-29] as [number,number],eye:[28,2.8,-27],target:[22,1.4,-36]},
  {id:'hollow',label:'古树之心',player:[2,-57] as [number,number],eye:[3.5,3.4,-51],target:[2,4.2,-63]},
  {id:'moon',label:'林隙溪谷',player:[-25,-39] as [number,number],eye:[-32,4.5,-29],target:[-23,2,-44]},
];
