"""Validate the actual delivered tree LODs, texture payloads and provenance."""
from pathlib import Path
import hashlib,json,struct,unittest

ASSETS=Path(__file__).parents[1]/'public/assets/woodland'

class WoodlandAssetsTests(unittest.TestCase):
    def test_delivered_images_are_real_verified_payloads_not_lfs_pointers(self):
        for row in json.loads((ASSETS/'sources.json').read_text())['assets']:
            path=ASSETS/row['file'];data=path.read_bytes()
            with self.subTest(file=path.name):
                self.assertEqual(hashlib.sha256(data).hexdigest(),row['sha256'])
                self.assertEqual(len(data),row['bytes'])
                self.assertTrue(data.startswith(b'\x89PNG') if path.suffix=='.png' else data.startswith(b'\xff\xd8'))

    def test_matching_tree_lods_preserve_scale_uvs_and_reduce_real_triangles(self):
        raw=(ASSETS/'woodland-trees.glb').read_bytes();length=struct.unpack_from('<I',raw,12)[0];doc=json.loads(raw[20:20+length])
        nodes={n['name']:doc['meshes'][n['mesh']] for n in doc['nodes'] if 'mesh' in n}
        def info(species,lod):
            count=0;lo=1000;hi=-1000
            for kind in ['branches','leaves']:
                prims=nodes[f'{species}_{lod}_{kind}']['primitives']
                for p in prims:
                    self.assertIn('TEXCOORD_0',p['attributes']);self.assertIn('NORMAL',p['attributes'])
                    count+=doc['accessors'][p['indices']]['count']//3
                    # Blender exports this unparented mesh in glTF Y-up.
                    pos=doc['accessors'][p['attributes']['POSITION']];lo=min(lo,pos['min'][1]);hi=max(hi,pos['max'][1])
            return count,hi-lo
        for species in ['oak','ash','young']:
            with self.subTest(species=species):
                near,near_height=info(species,'near');far,far_height=info(species,'far')
                self.assertLess(far,near*.4)
                self.assertGreater(near_height,10);self.assertLess(near_height,26)
                self.assertLess(abs(near_height-far_height),1.)

    def test_model_manifest_and_forest_hdr_match_exported_bytes(self):
        manifest=json.loads((ASSETS/'manifest.json').read_text())
        for row in manifest['assets']:
            self.assertEqual(hashlib.sha256((ASSETS/Path(row['path']).name).read_bytes()).hexdigest(),row['sha256'])
        source=json.loads((ASSETS/'lighting-source.json').read_text())
        self.assertEqual(hashlib.sha256((ASSETS/'forest-slope-1k.hdr').read_bytes()).hexdigest(),source['sha256'])
