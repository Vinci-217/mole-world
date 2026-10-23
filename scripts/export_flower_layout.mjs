/** Share the actual browser terrain, paths and metre-scale layout with Blender. */
import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import * as T from 'three';
import {flowerGroundHeight,gardenRoutes,gardenSceneViews,gardenCanWalk} from '../src/flower-terrain.ts';
const root=fileURLToPath(new URL('../',import.meta.url)),out=root+'artifacts/flower-layout/';
mkdirSync(out,{recursive:true});
const manifest=JSON.parse(readFileSync(root+'public/assets/flower-sea/manifest.json','utf8'));
const layout=JSON.parse(readFileSync(root+'public/assets/flower-sea/spatial-layout.json','utf8'));
const vertices=[],faces=[],segmentsX=100,segmentsZ=120;
for(let j=0;j<=segmentsZ;j++)for(let i=0;i<=segmentsX;i++){
  const x=(i/segmentsX-.5)*layout.terrain.width,z=(j/segmentsZ-.5)*layout.terrain.depth+layout.terrain.centerZ;
  vertices.push([x,-z,flowerGroundHeight(x,z)]);
  if(i<segmentsX&&j<segmentsZ){const a=j*(segmentsX+1)+i;faces.push([a,a+segmentsX+1,a+segmentsX+2,a+1]);}
}
const paths=gardenRoutes.map(route=>{
  const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z))),vertices=[],faces=[];
  for(let i=0;i<=180;i++){
    const p=curve.getPoint(i/180),t=curve.getTangent(i/180),side=new T.Vector3(-t.z,0,t.x).normalize();
    for(const s of [-1,1]){const x=p.x+side.x*s*.72,z=p.z+side.z*s*.72;vertices.push([x,-z,flowerGroundHeight(x,z)+.035]);}
    if(i<180){const a=i*2;faces.push([a,a+1,a+3,a+2]);}
  }
  return {vertices,faces};
});
const source={layout,manifest,terrain:{vertices,faces},paths,views:gardenSceneViews,
  guideNotes:'Layout study in metres; browser uses additional instanced vegetation, dynamic sky and weather.'};
writeFileSync(out+'layout.json',JSON.stringify(source));
console.log('Exported browser terrain and paths for the Blender layout project.');
