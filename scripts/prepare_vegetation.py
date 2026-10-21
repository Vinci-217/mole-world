"""Repackage BabylonJS's CC BY 4.0 broadleaf tree LODs as embedded glTF 2 GLBs.

Requires Pillow: python3 -m pip install Pillow
Run from any directory: python3 scripts/prepare_vegetation.py
The source version is pinned; no API key or Blender installation is required.
Meadow grass and fern textures are original artwork generated below.
"""
from __future__ import annotations
import io
import math
import random
import json
from pathlib import Path
import struct
import urllib.request
from PIL import Image

COMMIT = 'c81f5d744fe8d41acfebd89eaeb7008c6f9659e3'
BASE = f'https://raw.githubusercontent.com/BabylonJS/Assets/{COMMIT}/'
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/assets/nature'
CACHE = Path('/tmp/mole-vegetation-source')

def fetch(name: str) -> bytes:
    cached = CACHE / name
    if not cached.exists():
        cached.parent.mkdir(parents=True, exist_ok=True)
        cached.write_bytes(urllib.request.urlopen(BASE + name, timeout=45).read())
    return cached.read_bytes()

def image_bytes(name: str, size: int, *, normal: bool = False) -> bytes:
    folder = 'meshes/Tree/' if name == 'Tree.tga' else 'meshes/Trees/'
    image = Image.open(io.BytesIO(fetch(folder + name)))
    image.thumbnail((size, size), Image.Resampling.LANCZOS)
    output = io.BytesIO()
    if normal:
        image.convert('RGB').save(output, 'PNG', optimize=True)
    elif image.mode == 'RGBA':
        image.save(output, 'PNG', optimize=True)
    else:
        image.convert('RGB').save(output, 'JPEG', quality=88, optimize=True)
    return output.getvalue()

def convert(source: dict, mesh_name: str, target: Path, *, pine: bool = False) -> dict:
    mesh = next(m for m in source['meshes'] if m['name'] == mesh_name)
    materials = {m['id']: m for m in source['materials']}
    multi = next(m for m in source['multiMaterials'] if m['id'] == mesh['materialId'])
    binary = bytearray()
    gltf = {
        'asset': {'version': '2.0', 'generator': 'Mole Manor BabylonJS tree conversion',
                  'copyright': 'BabylonJS Assets contributors, CC BY 4.0'},
        'scene': 0, 'scenes': [{'nodes': [0]}],
        'nodes': [{'name': 'Conifer tree' if pine else 'Broadleaf tree', 'mesh': 0}],
        'meshes': [{'name': mesh_name, 'primitives': []}],
        'buffers': [{'byteLength': 0}], 'bufferViews': [], 'accessors': [],
        'images': [], 'textures': [],
        'samplers': [{'magFilter': 9729, 'minFilter': 9987, 'wrapS': 10497, 'wrapT': 10497}],
        'materials': [],
    }
    def view(data: bytes, target_hint: int | None = None) -> int:
        while len(binary) % 4: binary.append(0)
        offset = len(binary)
        binary.extend(data)
        item = {'buffer': 0, 'byteOffset': offset, 'byteLength': len(data)}
        if target_hint: item['target'] = target_hint
        gltf['bufferViews'].append(item)
        return len(gltf['bufferViews']) - 1
    def attribute(values: list, size: int, kind: str, index: bool = False, bounds: bool = False) -> int:
        dtype = 'H' if index else 'f'
        record = {'bufferView': view(struct.pack('<' + dtype * len(values), *values), 34963 if index else 34962),
                  'componentType': 5123 if index else 5126, 'count': len(values) // size, 'type': kind}
        if bounds:
            record['min'] = [min(values[i::size]) for i in range(size)]
            record['max'] = [max(values[i::size]) for i in range(size)]
        gltf['accessors'].append(record)
        return len(gltf['accessors']) - 1
    def texture(name: str, size: int, normal: bool = False) -> int:
        data = image_bytes(name, size, normal=normal)
        mime = 'image/jpeg' if name.endswith('.jpg') else 'image/png'
        gltf['images'].append({'bufferView': view(data), 'mimeType': mime, 'name': name})
        gltf['textures'].append({'source': len(gltf['images']) - 1, 'sampler': 0})
        return len(gltf['textures']) - 1
    if pine:
        bark = leaf = texture('Tree.tga', 512)
        bark_normal = leaf_normal = None
    else:
        bark = texture('BroadleafBark.jpg', 1024)
        leaf = texture('Broadleaf_Desktop_Atlas.png', 1024)
        bark_normal = texture('BroadleafBark_Normal.png', 512, normal=True)
        leaf_normal = texture('Broadleaf_Desktop_Atlas_Normal.png', 512, normal=True)
    gltf['materials'] = [
        {'name': 'Conifer Bark' if pine else 'Broadleaf Bark', 'pbrMetallicRoughness': {'baseColorTexture': {'index': bark}, 'metallicFactor': 0, 'roughnessFactor': 1},
         'normalTexture': {'index': bark_normal, 'scale': 0.65}},
        {'name': 'Conifer Foliage' if pine else 'Broadleaf Foliage', 'pbrMetallicRoughness': {'baseColorTexture': {'index': leaf}, 'metallicFactor': 0, 'roughnessFactor': 1},
         'normalTexture': {'index': leaf_normal, 'scale': 0.5}, 'doubleSided': True, 'alphaMode': 'MASK', 'alphaCutoff': 0.33},
    ]
    if pine:
        for material in gltf['materials']: material.pop('normalTexture', None)
    positions = mesh['positions']
    ymin, ymax = min(positions[1::3]), max(positions[1::3])
    scale = 10 / (ymax - ymin)
    pos = []
    normals = []
    uv = []
    for i in range(0, len(positions), 3):
        # Babylon's default is left handed. Convert geometry and normals to glTF's
        # right handed basis, ground, normalize. Babylon source triangles are
        # clockwise; reflecting Z itself gives glTF's counterclockwise winding.
        pos.extend((positions[i] * scale, (positions[i+1] - ymin) * scale, -positions[i+2] * scale))
        normals.extend((mesh['normals'][i], mesh['normals'][i+1], -mesh['normals'][i+2]))
    for i in range(0, len(mesh['uvs']), 2):
        # Babylon's imported Unity atlas UVs address the image from the bottom.
        uv.extend((mesh['uvs'][i], 1 - mesh['uvs'][i+1]))
    attrs = {'POSITION': attribute(pos, 3, 'VEC3', bounds=True),
             'NORMAL': attribute(normals, 3, 'VEC3'), 'TEXCOORD_0': attribute(uv, 2, 'VEC2')}
    groups = [[], []]
    for sm in mesh['subMeshes']:
        material = materials[multi['materials'][sm['materialIndex']]]
        slot = 0 if material['albedoTexture']['name'] == 'BroadleafBark.jpg' else 1
        indices = mesh['indices'][sm['indexStart']:sm['indexStart']+sm['indexCount']]
        for i in range(0, len(indices), 3): groups[slot].extend((indices[i], indices[i+1], indices[i+2]))
    for slot, indices in enumerate(groups):
        if indices:
            gltf['meshes'][0]['primitives'].append({'attributes': attrs, 'indices': attribute(indices, 1, 'SCALAR', index=True), 'material': slot})
    gltf['buffers'][0]['byteLength'] = len(binary)
    json_chunk = json.dumps(gltf, separators=(',', ':')).encode()
    json_chunk += b' ' * (-len(json_chunk) % 4)
    binary.extend(b'\0' * (-len(binary) % 4))
    length = 12 + 8 + len(json_chunk) + 8 + len(binary)
    target.write_bytes(struct.pack('<4sII', b'glTF', 2, length) + struct.pack('<I4s', len(json_chunk), b'JSON') + json_chunk + struct.pack('<I4s', len(binary), b'BIN\0') + binary)
    return {'file': target.name, 'triangles': len(mesh['indices']) // 3, 'vertices': len(pos) // 3, 'bytes': length, 'height': 10}

def textures():
    from PIL import Image, ImageDraw
    rng = random.Random(6831)
    OUT.mkdir(parents=True, exist_ok=True)
    # Detailed individual blade silhouettes make each six-triangle tuft read
    # as a clump, instead of a solid rectangular plane.
    image = Image.new('RGBA', (512, 512))
    draw = ImageDraw.Draw(image)
    for i in range(30):
        x = rng.uniform(95, 417)
        tip_x = x + rng.uniform(-90, 90)
        height = rng.uniform(140, 480)
        w = rng.uniform(3, 9)
        col = (rng.randrange(57, 103), rng.randrange(88, 128), rng.randrange(24, 57), 255)
        draw.polygon([(x-w, 511), (x-w*.6, 511-height*.42),
                      (tip_x, 511-height), (x+w*.6, 511-height*.38), (x+w, 511)], fill=col)
        draw.line([(x, 511), (x, 511-height*.42), (tip_x, 511-height)], fill=(109, 139, 61, 255), width=1)
        if i % 6 == 0:
            for j in range(7):
                yy = 511-height+j*5
                xx = tip_x+(x-tip_x)*j*.025
                draw.ellipse((xx-3, yy-2, xx+3, yy+5), fill=(156, 145, 78, 255))
    image.save(OUT / 'meadow-grass.png')

    image = Image.new('RGBA', (256, 512))
    draw = ImageDraw.Draw(image)
    draw.line([(128, 510), (130, 100), (128, 5)], fill=(87, 113, 32, 255), width=3)
    for j in range(23):
        y = 28+j*18.7
        length = math.sin(j/25*math.pi*.92)*105+4
        for side in [-1, 1]:
            tip = (128+side*length, y-26)
            base = (128+side*2, y+10)
            c = (53+j, 100+j//2, 29+j//3, 255)
            draw.polygon([base, (128+side*length*.5, y-20), tip,
                          (128+side*length*.65, y+4), (128+side*10, y+17)], fill=c)
            draw.line([base,tip], fill=(108, 143, 52, 255), width=1)
    image.save(OUT / 'woodland-fern.png')


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    textures()
    source = json.loads(fetch('meshes/Trees/rawtrees.babylon'))
    exports = [convert(source, 'Tree1_LOD2', OUT / 'oak.glb'),
               convert(source, 'Tree1_LOD1', OUT / 'oak-detailed.glb')]
    pine_source = json.loads(fetch('meshes/Tree/tree.babylon'))
    pine_mesh = pine_source['meshes'][0]
    # The older pine source is Z-up with a -90 degree X node rotation.
    for key in ['positions', 'normals']:
        values = pine_mesh[key]
        converted = []
        for i in range(0, len(values), 3): converted.extend((values[i], values[i+2], -values[i+1]))
        pine_mesh[key] = converted
    pine_source['materials'][0]['albedoTexture'] = {'name': 'Tree.tga'}
    pine_source['multiMaterials'] = [{'id': pine_mesh['materialId'], 'materials': [pine_mesh['materialId']]}]
    exports.append(convert(pine_source, pine_mesh['name'], OUT / 'pine.glb', pine=True))
    (OUT / 'LICENSE-BabylonJS.txt').write_bytes(fetch('LICENSE'))
    attribution = f'''Broadleaf and conifer tree models and bark/leaf textures: BabylonJS Assets contributors.
Source: https://github.com/BabylonJS/Assets/tree/{COMMIT}/meshes/Trees
Pinned commit: {COMMIT}
License: Creative Commons Attribution 4.0 International (CC BY 4.0).
https://creativecommons.org/licenses/by/4.0/
Original license text is included in LICENSE-BabylonJS.txt.
Repository README states CC BY 4.0 unless otherwise specified in an asset folder;
no license override is supplied in meshes/Trees or meshes/Tree.
Conifer source: https://github.com/BabylonJS/Assets/tree/{COMMIT}/meshes/Tree
Modifications: selected authored LOD1/LOD2 from rawtrees.babylon, consolidated
materials, selected conifer tree.babylon with its original Tree.tga atlas, converted left-handed geometry to right-handed glTF, grounded and
normalized to 10 metres tall, resized original textures, embedded them in GLB.
No claim is made that these downloaded assets were generated for this project.

Meadow grass and woodland fern textures: original project artwork, authored
with scripts/prepare_vegetation.py. These two textures are licensed CC0 1.0.
https://creativecommons.org/publicdomain/zero/1.0/
'''
    (OUT / 'SOURCE.txt').write_text(attribution)
    (OUT / 'tree-info.json').write_text(json.dumps({'source': BASE + 'meshes/Trees/rawtrees.babylon', 'license': 'CC BY 4.0', 'exports': exports}, indent=2) + '\n')
    print(json.dumps(exports, indent=2))

if __name__ == '__main__': main()
