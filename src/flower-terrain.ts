import layout from '../public/assets/flower-sea/spatial-layout.json' with {type:'json'};
export {layout as flowerLayout};
export type GardenSceneView=keyof typeof layout.views;
export const gardenSceneViews=layout.views;
export function insideCottage(x:number,z:number,padding=0){
  const [cx,,cz]=layout.cottage.position,a=layout.cottage.rotation,dx=x-cx,dz=z-cz;
  const localX=dx*Math.cos(a)-dz*Math.sin(a),localZ=dx*Math.sin(a)+dz*Math.cos(a);
  return Math.abs(localX)<layout.cottage.halfWidth+padding&&Math.abs(localZ)<layout.cottage.halfDepth+padding;
}
export const brookX = (z: number) => -18 + Math.sin(z * .16) * 2.3;
export function flowerGroundHeight(x: number, z: number) {
  const hill = (cx: number, cz: number, sx: number, sz: number, height: number) => height * Math.exp(-((x-cx)**2/sx + (z-cz)**2/sz));
  const core = -.6 + hill(-8,-2,75,45,1.25) + hill(12,1,70,55,1.55);
  const perimeter = hill(-28,-18,95,120,3.8) + hill(24,-25,140,110,4.2) + hill(0,-36,200,65,3.3);
  const meadow=hill(3,-38,900,600,.9)+hill(20,-62,600,700,3.4);
  const outer=Math.max(0,Math.min(1,(Math.hypot(x,z*.8)-73)/32));
  const distant=outer*(1.7+Math.sin(x*.06+z*.04)+.6*Math.cos(z*.09-x*.03)+hill(-35,-124,900,500,17)+hill(40,-128,750,550,20));
  const river = .72*Math.exp(-((x-brookX(z))**2)/.8);
  return core + perimeter + meadow + distant - river + .22*Math.sin(x*.19+z*.28) + .09*Math.cos(x*.53-z*.31);
}
export const gardenRoutes: [number, number][][] = [
  [[2,22],[1,13],[2,7],[0,3],[-4,-1],[-7,-4],[-12,-8],[-14,-4],[-14,1],[-18,1],[-24,1],[-27,-4],[-26,-9],[-29,-2],[-24,6],[-18,1],[-11,7],[-5,14],[2,22]],
  [[0,3],[6,-1],[9,-5],[12,-12],[17,-15],[24,-19],[28,-13],[25,-5],[22,1],[21,9],[15,14],[7,13],[2,7]],
  [[6,-1],[8,-12],[5,-23],[10,-35],[17,-47],[20,-53],[29,-51],[34,-60],[31,-73],[17,-78],[7,-71],[7,-59],[6,-51],[10,-47],[17,-47]],
];
export function routeDistance(x: number, z: number) {
  let distance = Infinity;
  for (const route of gardenRoutes) for (let i=1; i<route.length; i++) {
    const [ax,az]=route[i-1], [bx,bz]=route[i];
    const t=Math.max(0,Math.min(1,((x-ax)*(bx-ax)+(z-az)*(bz-az))/((bx-ax)**2+(bz-az)**2)));
    distance=Math.min(distance,Math.hypot(x-ax-(bx-ax)*t,z-az-(bz-az)*t));
  }
  return distance;
}
export interface GardenView {eye:[number,number,number];target:[number,number,number]}
export const gardenPlaces:{id:string;label:string;position:[number,number,number];view:GardenView}[] = [
  { id:'flower-path',label:'藤蔓花径',position:[-2,0,5],view:{eye:[-.5,5.2,9],target:[-7,3,-4]} },
  { id:'brook-bridge',label:'溪畔木桥',position:[-17.6,0,1],view:{eye:[-12,4.4,9],target:[-18,.9,1]} },
  { id:'secret-grove',label:'林间小憩',position:[-25,0,-9],view:{eye:[-20,4,-1],target:[-25,1.7,-9]} },
  { id:'cottage-garden',label:'远方花屋',position:[22,0,-51],view:{eye:[5,8,-37],target:[20,4.5,-62]} },
  { id:'pink-flower',label:'粉花露台',position:[14,0,13],view:{eye:[4,4.8,16],target:[13,2.3,6]} },
];
export function gardenWalkHeight(x:number,z:number) {
  if(Math.abs(z-1)<1.15 && Math.abs(x-brookX(1))<3.4){
    const t=Math.max(0,Math.min(1,(x-brookX(1)+3.25)/6.48));
    return flowerGroundHeight(brookX(1)+3.4,1)+.385+.20*Math.sin(t*Math.PI);
  }
  return flowerGroundHeight(x,z);
}
export function gardenCanWalk(x:number,z:number) {
  const b=layout.walkBounds;
  if(x < b.minX || x > b.maxX || z < b.minZ || z > b.maxZ) return false;
  if(Math.abs(x-brookX(z))<1 && Math.abs(z-1)>1.05) return false;
  if(insideCottage(x,z,.4)) return false;
  if(Math.hypot(x-13,z-6)<4.5) return false;
  if(Math.hypot(x+15,z-5)<1.25 || Math.hypot(x-17,z+2)<1.4) return false;
  return true;
}

/** Substeps preserve wall/river collisions when one rendered frame takes longer. */
export function advanceGardenPosition(x:number,z:number,dx:number,dz:number):[number,number]{
  const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.1));
  for(let i=0;i<steps;i++){
    if(gardenCanWalk(x+dx/steps,z))x+=dx/steps;
    if(gardenCanWalk(x,z+dz/steps))z+=dz/steps;
  }
  return [x,z];
}
