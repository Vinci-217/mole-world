"""The distant house must be a real-size building on connected walkable terrain."""
import json
from pathlib import Path
import subprocess
import unittest

ROOT=Path(__file__).parents[1]


class FlowerLayoutTests(unittest.TestCase):
    def test_house_scale_and_separation_come_from_the_shared_layout(self):
        manifest=json.loads((ROOT/'public/assets/flower-sea/manifest.json').read_text())
        layout=json.loads((ROOT/'public/assets/flower-sea/spatial-layout.json').read_text())
        assets={a['id']:a for a in manifest['assets']}
        places={p['assetId']:p for p in manifest['placements']}
        self.assertEqual(assets['cottage']['height'],layout['cottage']['height'])
        self.assertEqual(places['cottage']['position'],layout['cottage']['position'])
        self.assertGreater(assets['cottage']['height'],assets['vine-arch']['height'])
        self.assertGreater(places['vine-arch']['position'][2]-places['cottage']['position'][2],50)

    def test_north_path_reaches_and_circles_the_house_without_crossing_its_walls(self):
        script="""
import {gardenCanWalk,gardenRoutes,insideCottage} from './src/flower-terrain.ts';
const route=gardenRoutes[2],blocked=[];
for(let i=1;i<route.length;i++)for(let j=0;j<=20;j++){
 const t=j/20,x=route[i-1][0]*(1-t)+route[i][0]*t,z=route[i-1][1]*(1-t)+route[i][1]*t;
 if(!gardenCanWalk(x,z))blocked.push([x,z]);
}
console.log(JSON.stringify({blocked,houseBlocked:!gardenCanWalk(20,-62),front: gardenCanWalk(22,-51),rear:gardenCanWalk(20,-80)}));
"""
        output=subprocess.check_output(['node','--input-type=module','-e',script],cwd=ROOT,text=True)
        result=json.loads(output)
        self.assertEqual(result['blocked'],[])
        self.assertTrue(result['houseBlocked'])
        self.assertTrue(result['front'])
        self.assertTrue(result['rear'])

    def test_long_movement_steps_do_not_tunnel_through_the_house_or_river(self):
        script="""
import {advanceGardenPosition,brookX,gardenCanWalk} from './src/flower-terrain.ts';
const wall=advanceGardenPosition(20,-51,0,-35),riverX=brookX(-20);
const river=advanceGardenPosition(riverX-3,-20,8,0);
let slow=[1,17],fast=[1,17];
for(let i=0;i<4;i++)slow=advanceGardenPosition(...slow,0,-2.8*.25);
for(let i=0;i<60;i++)fast=advanceGardenPosition(...fast,0,-2.8/60);
console.log(JSON.stringify({wall,river,riverX,slow,fast,valid: gardenCanWalk(...wall)&&gardenCanWalk(...river)}));
"""
        output=subprocess.check_output(['node','--input-type=module','-e',script],cwd=ROOT,text=True)
        result=json.loads(output)
        self.assertTrue(result['valid'])
        self.assertGreater(result['wall'][1],-60)
        self.assertLess(result['river'][0],result['riverX']-1)
        self.assertAlmostEqual(result['slow'][1],result['fast'][1],places=5)


if __name__=='__main__':unittest.main()
