"""Catch the joined-mesh UV regression using the actual browser artifact."""
import json
import struct
import unittest
from pathlib import Path


class BotanicalExportTests(unittest.TestCase):
    def test_petals_keep_uvs_and_each_species_has_a_cheaper_distance_model(self):
        path = Path(__file__).parents[1] / 'public/assets/flower-garden/sculpted-flowers.glb'
        raw = path.read_bytes()
        self.assertEqual(raw[:4], b'glTF')
        json_length = struct.unpack_from('<I', raw, 12)[0]
        document = json.loads(raw[20:20+json_length])
        binary_start = 28 + json_length
        nodes = {node['name']: node for node in document['nodes']}

        def triangles(node):
            return sum(document['accessors'][primitive['indices']]['count'] // 3
                       for primitive in document['meshes'][node['mesh']]['primitives'])

        for species in ['coral-cosmos', 'ivory-anemone', 'lilac-spires', 'meadow-cups']:
            near, far = nodes[species], nodes[species+'-far']
            with self.subTest(species=species):
                self.assertLess(triangles(far), triangles(near) * .6)
                for node in [near, far]:
                    for primitive in document['meshes'][node['mesh']]['primitives']:
                        material = document['materials'][primitive['material']]
                        if 'baseColorTexture' not in material['pbrMetallicRoughness']:
                            continue
                        accessor = document['accessors'][primitive['attributes']['TEXCOORD_0']]
                        self.assertEqual(accessor['componentType'], 5126)
                        view = document['bufferViews'][accessor['bufferView']]
                        start = binary_start + view.get('byteOffset', 0) + accessor.get('byteOffset', 0)
                        stride = view.get('byteStride', 8)
                        uv = [struct.unpack_from('<2f', raw, start+i*stride) for i in range(accessor['count'])]
                        # Joining stems previously selected an empty UV layer,
                        # collapsing every painted petal to one brown pixel.
                        for axis in [0, 1]:
                            self.assertGreater(max(p[axis] for p in uv)-min(p[axis] for p in uv), .2)
                        self.assertTrue(all(0 <= u <= 1 and 0 <= v <= 1 for u, v in uv))


if __name__ == '__main__':
    unittest.main()
