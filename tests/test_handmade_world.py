"""Checks the delivered geometry and the traversable three-district layout."""
import unittest,json,hashlib,struct,subprocess
from pathlib import Path
ROOT=Path(__file__).parents[1];ASSETS=ROOT/'public/assets/handmade'
def node(code):return json.loads(subprocess.check_output(['node','--input-type=module','-e',code],cwd=ROOT,text=True))
def glb(path):
    raw=path.read_bytes();return json.loads(raw[20:20+struct.unpack_from('<I',raw,12)[0]])

class HandmadeWorldTests(unittest.TestCase):
    def test_all_landmarks_have_verified_authored_geometry(self):
        manifest=json.loads((ASSETS/'manifest.json').read_text())
        self.assertEqual({a['id'] for a in manifest['assets']},{'castle','cottage','pavilion','trees','flowers','hollow','props'})
        for a in manifest['assets']:
            with self.subTest(asset=a['id']):
                path=ASSETS/a['file'];self.assertEqual(hashlib.sha256(path.read_bytes()).hexdigest(),a['sha256'])
                doc=glb(path);count=sum(doc['accessors'][p['indices']]['count']//3 for m in doc['meshes'] for p in m['primitives'])
                self.assertGreater(count,500);self.assertEqual(count,a['triangles']);self.assertIn('Original Blender geometry',a['source'])
                self.assertTrue(all('NORMAL' in p['attributes'] for m in doc['meshes'] for p in m['primitives']))
    def test_door_hinges_and_botanical_lods_are_real_exported_nodes(self):
        castle=glb(ASSETS/'castle.glb');nodes={n['name']:n for n in castle['nodes']}
        for side,x in [('left',-2.3),('right',2.3)]:
            n=nodes['castle_door_'+side];self.assertAlmostEqual(n['translation'][0],x,places=4);self.assertEqual(len(n['children']),2)
        trees=glb(ASSETS/'trees.glb');nodes={n['name']:n for n in trees['nodes']}
        for species in ['oak','willow','birch']:
            def triangles(lod):
                return sum(trees['accessors'][p['indices']]['count']//3 for kind in ['bark','leaf'] for p in trees['meshes'][nodes[f'tree_{kind}_{species}_{lod}']['mesh']]['primitives'])
            self.assertLess(triangles('far'),triangles('near')*.5)
    def test_closed_gate_blocks_the_front_and_open_gate_allows_it(self):
        data=node("""
import {canWalk,movePosition} from './src/manor/world.ts';
console.log(JSON.stringify({closed:canWalk(0,-60,false),open:canWalk(0,-60,true),wall:canWalk(4,-63,true),closedStep:movePosition(0,-58,0,-5,false),openStep:movePosition(0,-58,0,-5,true)}));
""")
        self.assertFalse(data['closed']);self.assertTrue(data['open']);self.assertFalse(data['wall'])
        self.assertGreater(data['closedStep'][1],-59.4);self.assertAlmostEqual(data['openStep'][1],-63,places=3)
    def test_three_districts_and_all_interaction_approaches_are_connected(self):
        data=node("""
import {canWalk,districts,interactables,interactionApproaches,bridges,walkHeight,groundHeight,riverX} from './src/manor/world.ts';
const seen=new Set(['5,-29']),q=[[5,-29]],key=(x,z)=>x+','+z;
for(let i=0;i<q.length;i++){const [x,z]=q[i];for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,nz=z+dz;if(seen.has(key(nx,nz))||!canWalk(nx,nz,true)||!canWalk(x+dx*.5,z+dz*.5,true))continue;seen.add(key(nx,nz));q.push([nx,nz]);}}
console.log(JSON.stringify({districts:Object.values(districts).map(d=>seen.has(d.spawn.join(','))),approaches:interactables.map(p=>({id:p.id,reachable:interactionApproaches(p).some(([x,z])=>seen.has(key(Math.round(x),Math.round(z))))})),bridgeErrors:bridges.map(b=>Math.abs(walkHeight(b.x-b.length/2+.001,b.z)-groundHeight(b.x-b.length/2,b.z)))}));
""")
        self.assertTrue(all(data['districts']),data)
        self.assertTrue(all(p['reachable'] for p in data['approaches']),data['approaches'])
        self.assertTrue(all(e<.25 for e in data['bridgeErrors']))
    def test_storage_is_validated_and_does_not_complete_a_new_journey(self):
        data=node("""
import {readProgress,blankProgress} from './src/manor/world.ts';
console.log(JSON.stringify({blank:blankProgress(),broken:readProgress('{oops'),old:readProgress('{"version":9,"watered":true}'),p:readProgress('{"version":1,"lanterns":["west","oops","west"],"discovered":["forest","oops"],"album":["castle"]}')}));
""")
        self.assertEqual(data['blank'],data['broken']);self.assertEqual(data['blank'],data['old'])
        self.assertEqual(data['p']['lanterns'],['west']);self.assertEqual(data['p']['discovered'],['forest'])
    def test_production_build_does_not_ship_the_old_model_libraries(self):
        dist=ROOT/'dist';self.assertTrue((dist/'castle.html').is_file())
        files=[str(p.relative_to(dist)) for p in dist.rglob('*') if p.is_file()]
        self.assertFalse(any('/flower-sea/' in p or '/woodland/' in p or '/nature/' in p for p in files))
        self.assertEqual(len([p for p in files if p.endswith('.glb')]),7)

if __name__=='__main__':unittest.main()
