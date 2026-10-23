import {brookX,flowerGroundHeight,gardenCanWalk,routeDistance} from './flower-terrain.ts';

// Overlapping irregular fields, with a dominant pair of colors in each district.
export const flowerMeadows=[
  {x:-7,z:12,rx:11,rz:11,angle:-.3,palette:[0,1]},
  {x:12,z:-22,rx:15,rz:18,angle:.2,palette:[1,3]},
  {x:-2,z:37,rx:12,rz:15,angle:-.3,palette:[0,1]},
  {x:22,z:38,rx:18,rz:13,angle:.15,palette:[1,3]},
  {x:45,z:-8,rx:14,rz:17,angle:-.5,palette:[0,1]},
  {x:51,z:-38,rx:16,rz:20,angle:.15,palette:[1,3]},
  {x:46,z:-72,rx:16,rz:13,angle:.4,palette:[2,1]},
  {x:-43,z:-9,rx:14,rz:17,angle:-.2,palette:[1,2]},
  {x:-48,z:-39,rx:15,rz:21,angle:-.1,palette:[0,1]},
  {x:-39,z:-65,rx:15,rz:16,angle:-.8,palette:[2,1]},
  {x:5,z:-94,rx:17,rz:15,angle:-.2,palette:[1,3]},
  {x:32,z:-88,rx:15,rz:11,angle:.4,palette:[0,1]},
];
export interface MeadowPlant{x:number;y:number;z:number;scale:number;rotation:number;lean:number}
export const meadowPlantCounts=[3200,4900,600,5300];

/** Deterministic placements shared with reachability/density checks. */
export function createMeadowPlantings(){
  let seed=641275;
  const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296;};
  return meadowPlantCounts.map((count,kind)=>{
    const weights=flowerMeadows.map(f=>f.rx*f.rz*(f.palette.includes(kind)?1:.08));
    const total=weights.reduce((a,b)=>a+b,0),plants:MeadowPlant[]=[];
    for(let attempt=0;attempt<count*18&&plants.length<count;attempt++){
      let sample=rnd()*total,index=0;
      while(index<weights.length-1&&sample>weights[index])sample-=weights[index++];
      const f=flowerMeadows[index],a=rnd()*Math.PI*2,r=Math.sqrt(rnd()),u=Math.cos(a)*r*f.rx,v=Math.sin(a)*r*f.rz;
      const x=f.x+u*Math.cos(f.angle)-v*Math.sin(f.angle),z=f.z+u*Math.sin(f.angle)+v*Math.cos(f.angle);
      if(!gardenCanWalk(x,z)||Math.abs(x-brookX(z))<1.5||routeDistance(x,z)<1.05)continue;
      if(r>.75&&rnd()>.55+.30*Math.sin(x*.75+z*.93))continue;
      plants.push({x,y:flowerGroundHeight(x,z)-.015,z,scale:.72+rnd()*.5,rotation:rnd()*Math.PI*2,lean:(rnd()-.5)*.16});
    }
    return plants;
  });
}
