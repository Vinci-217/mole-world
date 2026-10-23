"""Check traversable routes and actual new meadow coverage, not just bounds."""
import json
from pathlib import Path
import subprocess
import unittest

ROOT=Path(__file__).parents[1]
def run_node(script):
    return json.loads(subprocess.check_output(['node','--input-type=module','-e',script],cwd=ROOT,text=True))

class SceneExplorationTests(unittest.TestCase):
    def test_new_garden_districts_have_flowers_and_are_reachable_on_foot(self):
        result=run_node("""
import {gardenCanWalk,gardenPlaces,gardenRoutes,flowerLayout,brookX,routeDistance} from './src/flower-terrain.ts';
import {createMeadowPlantings} from './src/flower-meadows.ts';
import * as T from 'three';
const plants=createMeadowPlantings().flat(),blocked=[];
for(const route of gardenRoutes.slice(3)){
 const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z)));
 for(let i=0;i<=500;i++){const p=curve.getPoint(i/500);if(!gardenCanWalk(p.x,p.z))blocked.push([p.x,p.z]);}
}
const b=flowerLayout.walkBounds,visited=new Set(),queue=[[1,17]];
const key=(x,z)=>x+','+z;visited.add(key(1,17));
for(let i=0;i<queue.length;i++){
 const [x,z]=queue[i];for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){
  const nx=x+dx,nz=z+dz,k=key(nx,nz);if(visited.has(k)||!gardenCanWalk(nx,nz)||!gardenCanWalk(x+dx*.5,z+dz*.5))continue;
  visited.add(k);queue.push([nx,nz]);
 }
}
console.log(JSON.stringify({blocked,count:plants.length,invalid:plants.filter(p=>!gardenCanWalk(p.x,p.z)||routeDistance(p.x,p.z)<1.05).length,
 districts:gardenPlaces.slice(0,4).map(p=>({id:p.id,reachable:visited.has(key(Math.round(p.position[0]),Math.round(p.position[2]))),flowers:plants.filter(f=>Math.hypot(f.x-p.position[0],f.z-p.position[2])<14).length})),area:(b.maxX-b.minX)*(b.maxZ-b.minZ)}));
""")
        self.assertEqual(result['blocked'],[])
        self.assertGreater(result['count'],13000)
        self.assertEqual(result['invalid'],0)
        self.assertGreater(result['area'],23000)
        for district in result['districts']:
            with self.subTest(district=district['id']):
                self.assertTrue(district['reachable'])
                self.assertGreater(district['flowers'],250)

    def test_forest_paths_cross_real_bridge_and_reach_every_glade(self):
        result=run_node("""
import * as T from 'three';
import {forestCanWalk,forestWalkHeight,forestBridgeHeight,forestBridge,forestPlaces,forestRoutes,forestStreamZ} from './src/forest-terrain.ts';
import {advanceGardenPosition} from './src/flower-terrain.ts';
const blocked=[];
for(const route of forestRoutes){const curve=new T.CatmullRomCurve3(route.map(([x,z])=>new T.Vector3(x,0,z)));
 for(let i=0;i<=500;i++){const p=curve.getPoint(i/500);if(!forestCanWalk(p.x,p.z))blocked.push([p.x,p.z]);}}
const queue=[[2,29]],visited=new Set(['2,29']);
for(let i=0;i<queue.length;i++){const [x,z]=queue[i];for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){
 const nx=x+dx,nz=z+dz,k=nx+','+nz;if(visited.has(k)||!forestCanWalk(nx,nz)||!forestCanWalk(x+dx*.5,z+dz*.5))continue;visited.add(k);queue.push([nx,nz]);}}
const b=forestBridge,cross=advanceGardenPosition(b.x,1,0,-21,forestCanWalk),blockedRiver=advanceGardenPosition(12,2,0,-20,forestCanWalk);
console.log(JSON.stringify({blocked,cross,blockedRiver,stream:forestStreamZ(12),reachable:forestPlaces.map(p=>visited.has(p.player.map(Math.round).join(','))),heightError:Math.abs(forestWalkHeight(b.x,-8)-forestBridgeHeight(-8))}));
""")
        self.assertEqual(result['blocked'],[])
        self.assertTrue(all(result['reachable']))
        self.assertAlmostEqual(result['cross'][1],-20,places=4)
        self.assertGreater(result['blockedRiver'][1],result['stream']+2.8)
        self.assertEqual(result['heightError'],0)

if __name__=='__main__':unittest.main()
