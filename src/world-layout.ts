import { WORLD_REGIONS, type RegionId } from './world-atlas';
import { WORLD_SITES, WORLD_TRAILS } from './world-sites';

export type MapPoint = readonly [number, number];
export const WORLD_BOUNDS = {minX:-540,maxX:540,minZ:-430,maxZ:390};
export type WorldRoad = {a:RegionId;b:RegionId;points:MapPoint[]};
// Roads join actual positions in metres. The northern castle route skirts the building.
export const WORLD_ROADS:WorldRoad[] = [
  {a:'castle',b:'taotao-street',points:[[-10,11],[-45,11],[-91,19],[-135,30],[-180,30]]},
  {a:'castle',b:'love-church',points:[[10,11],[45,11],[92,21],[135,30],[180,30]]},
  {a:'castle',b:'sunshine-ranch',points:[[0,36],[0,63],[-9,108],[0,148],[0,210]]},
  {a:'castle',b:'moraya-mountain',points:[[10,11],[45,11],[62,-46],[47,-86],[0,-125],[0,-150]]},
  {a:'taotao-street',b:'amusement-park',points:[[-180,30],[-224,30],[-269,34],[-314,30],[-360,30]]},
  {a:'taotao-street',b:'happy-farm',points:[[-180,30],[-180,76],[-171,118],[-180,147],[-180,210]]},
  {a:'taotao-street',b:'outpost',points:[[-180,30],[-218,30],[-226,-37],[-220,-94],[-180,-150]]},
  {a:'love-church',b:'ram-academy',points:[[180,30],[222,30],[231,-31],[218,-92],[180,-150]]},
  {a:'love-church',b:'berry-jungle',points:[[180,30],[180,82],[170,126],[180,165],[180,210]]},
  {a:'sunshine-ranch',b:'happy-farm',points:[[0,210],[-45,210],[-91,224],[-135,210],[-180,210]]},
  {a:'sunshine-ranch',b:'berry-jungle',points:[[0,210],[45,210],[91,220],[135,210],[180,210]]},
  {a:'berry-jungle',b:'mystery-lake',points:[[180,210],[220,220],[267,225],[315,210],[360,210]]},
  {a:'moraya-mountain',b:'outpost',points:[[0,-150],[-46,-150],[-90,-138],[-136,-150],[-180,-150]]},
  {a:'moraya-mountain',b:'ram-academy',points:[[0,-150],[47,-145],[90,-132],[136,-150],[180,-150]]},
  {a:'outpost',b:'black-forest',points:[[-180,-150],[-228,-150],[-271,-140],[-315,-150],[-360,-150]]},
  {a:'black-forest',b:'amusement-park',points:[[-360,-150],[-401,-126],[-414,-72],[-400,-14],[-360,30]]},
];
export const smooth=(a:number,b:number,v:number)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
export function segmentDistance(x:number,z:number,a:MapPoint,b:MapPoint){
  const dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1)));
  return Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t);
}
export function roadDistance(x:number,z:number){let d=Infinity;for(const r of [...WORLD_ROADS,...WORLD_TRAILS])for(let i=1;i<r.points.length;i++)d=Math.min(d,segmentDistance(x,z,r.points[i-1],r.points[i]));return d;}
export function closestRegion(x:number,z:number){return WORLD_REGIONS.reduce((a,b)=>Math.hypot(x-a.worldPosition[0],z-a.worldPosition[2])<Math.hypot(x-b.worldPosition[0],z-b.worldPosition[2])?a:b);}
export function alpineHeight(x:number,z:number){
  z+=180;
  const gaussian=(px:number,pz:number,sx:number,sz:number,h:number)=>h*Math.exp(-(((x-px)/sx)**2+((z-pz)/sz)**2));
  const peaks=Math.max(gaussian(-43,-88,26,31,47),gaussian(1,-109,31,32,59),gaussian(51,-90,28,29,48));
  const broad=1-Math.abs(Math.sin(x*.113+Math.sin(z*.067)*1.9)*Math.cos(z*.097+Math.sin(x*.042)));
  const medium=1-Math.abs(Math.sin(x*.29+z*.17+Math.sin(z*.11)));
  return smooth(0,23,-z-47)*(1-smooth(81,110,Math.abs(x)))*(1-smooth(143,172,-z))*Math.max(0,peaks+(broad*6.5+medium*2.7)*Math.min(1,peaks/18)-3);
}
export function landscapeHeight(x:number,z:number){
  let distance=Infinity;
  for(const r of WORLD_REGIONS)distance=Math.min(distance,Math.max(Math.abs(x-r.worldPosition[0]),Math.abs(z-r.worldPosition[2])));
  for(const site of WORLD_SITES)if(site.kind!=='summit')distance=Math.min(distance,Math.max(Math.abs(x-site.position[0]),Math.abs(z-site.position[1])));
  const rolling=(3+Math.sin(x*.028)*Math.cos(z*.023)*3+Math.sin(x*.063+z*.039)*1.4)*smooth(48,88,distance);
  let h=-.13+rolling*smooth(5,13,roadDistance(x,z))+alpineHeight(x,z);
  // Water surfaces have a real bed below them, rather than grass shining through.
  if(Math.abs(x)<77&&z>19&&z<31)h-=1.4*(1-smooth(68,77,Math.abs(x)))*smooth(19,21,z)*(1-smooth(29,31,z));
  const lake=((x-377)/27)**2+((z-165)/22)**2;
  if(lake<1.05)h-=1.7*(1-smooth(.84,1.05,lake));
  return h;
}
export const mapCoordinates=(x:number,z:number)=>[90+x*.145,75+z*.145] as const;

/** Interpolate the actual shared mesh triangles, including the shorter edge tiles. */
export function terrainHeight(x:number,z:number){
  const tx=WORLD_BOUNDS.minX+Math.min(8,Math.max(0,Math.floor((x-WORLD_BOUNDS.minX)/120)))*120;
  const tz=WORLD_BOUNDS.minZ+Math.min(6,Math.max(0,Math.floor((z-WORLD_BOUNDS.minZ)/120)))*120;
  const w=Math.min(120,WORLD_BOUNDS.maxX-tx),d=Math.min(120,WORLD_BOUNDS.maxZ-tz),sx=w/Math.ceil(w/3),sz=d/Math.ceil(d/3);
  const ix=Math.max(0,Math.min(Math.ceil(w/3)-1,Math.floor((x-tx)/sx))),iz=Math.max(0,Math.min(Math.ceil(d/3)-1,Math.floor((z-tz)/sz)));
  const x0=tx+ix*sx,z0=tz+iz*sz,u=Math.max(0,Math.min(1,(x-x0)/sx)),v=Math.max(0,Math.min(1,(z-z0)/sz));
  const a=landscapeHeight(x0,z0),b=landscapeHeight(x0+sx,z0),c=landscapeHeight(x0,z0+sz),e=landscapeHeight(x0+sx,z0+sz);
  return u+v<=1?a+(b-a)*u+(c-a)*v:e+(c-e)*(1-u)+(b-e)*(1-v);
}
