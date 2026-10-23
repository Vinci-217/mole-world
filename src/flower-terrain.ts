export const brookX = (z: number) => -18 + Math.sin(z * .16) * 2.3;
export function flowerGroundHeight(x: number, z: number) {
  const hill = (cx: number, cz: number, sx: number, sz: number, height: number) => height * Math.exp(-((x-cx)**2/sx + (z-cz)**2/sz));
  const core = -.6 + hill(-8,-2,75,45,1.25) + hill(12,1,70,55,1.55);
  const perimeter = hill(-28,-18,95,120,3.8) + hill(24,-25,140,110,4.2) + hill(0,-36,200,65,3.3);
  const outer=Math.max(0,Math.min(1,(Math.hypot(x,z*.9)-32)/24));
  const distant=outer*(2.2+1.2*Math.sin(x*.075+z*.06)+.8*Math.cos(z*.13-x*.03)+hill(-16,-75,650,220,14)+hill(29,-68,450,250,16));
  const river = .72*Math.exp(-((x-brookX(z))**2)/.8);
  return core + perimeter + distant - river + .22*Math.sin(x*.19+z*.28) + .09*Math.cos(x*.53-z*.31);
}
export const gardenRoutes: [number, number][][] = [
  [[2,22],[1,13],[2,7],[0,3],[-4,-1],[-7,-4],[-12,-8],[-14,-4],[-14,1],[-18,1],[-24,1],[-27,-4],[-26,-9],[-29,-2],[-24,6],[-18,1],[-11,7],[-5,14],[2,22]],
  [[0,3],[6,-1],[9,-5],[9,-7],[17,-15],[24,-19],[28,-13],[25,-5],[22,1],[21,9],[15,14],[7,13],[2,7]],
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
  { id:'flower-path',label:'藤蔓花径',position:[-5,0,-1],view:{eye:[-.5,5.2,9],target:[-7,3,-4]} },
  { id:'brook-bridge',label:'溪畔木桥',position:[-17.6,0,1],view:{eye:[-12,4.4,9],target:[-18,.9,1]} },
  { id:'secret-grove',label:'林间小憩',position:[-25,0,-9],view:{eye:[-20,4,-1],target:[-25,1.7,-9]} },
  { id:'cottage-garden',label:'花屋前庭',position:[9,0,-6],view:{eye:[3.4,4.3,3.3],target:[9,2,-10]} },
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
  if(x < -32 || x > 31 || z < -28 || z > 23) return false;
  if(Math.abs(x-brookX(z))<1 && Math.abs(z-1)>1.05) return false;
  if(x>4.6 && x<13.6 && z>-12.8 && z<-7.8) return false;
  if(Math.hypot(x-13,z-6)<4.5) return false;
  if(Math.hypot(x+15,z-5)<1.25 || Math.hypot(x-17,z+2)<1.4) return false;
  return true;
}
