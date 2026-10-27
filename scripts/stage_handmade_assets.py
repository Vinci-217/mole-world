"""Stage only resources consumed by the new three-scene experience.
The old generated-model libraries remain archived in source, never in dist.
"""
from pathlib import Path
import shutil,json,hashlib
ROOT=Path(__file__).resolve().parents[1];DIST=ROOT/'dist';PUBLIC=ROOT/'public'
target=DIST/'assets/handmade';shutil.copytree(PUBLIC/'assets/handmade',target,dirs_exist_ok=True)
(target/'lighting').mkdir(exist_ok=True);(target/'audio').mkdir(exist_ok=True)
shutil.copy2(PUBLIC/'assets/flower-garden/lighting/rooitou-park-1k.hdr',target/'lighting/park.hdr')
shutil.copy2(PUBLIC/'assets/flower-sea/audio/BGM_131.mp3',target/'audio/BGM_131.mp3')
shutil.copy2(PUBLIC/'assets/flower-sea/audio/SOURCE.txt',target/'audio/original-source.txt')
shutil.copy2(PUBLIC/'assets/woodland/LICENSE-EZ-Tree.txt',target/'LICENSE-Leaf-Atlas.txt')
shutil.copy2(PUBLIC/'assets/woodland/TEXTURE-SOURCES.md',target/'TEXTURE-SOURCES.md')
shutil.copy2(PUBLIC/'assets/flower-garden/lighting/LICENSE-Three.txt',target/'LICENSE-Three.txt')
for name in ['LICENSE-N8AO.txt','LICENSE-Postprocessing.txt']:
    shutil.copy2(PUBLIC/'assets/flower-garden/lighting'/name,target/name)
shutil.copy2(PUBLIC/'crest.svg',DIST/'crest.svg')
paths=[]
for p in sorted(DIST.rglob('*')):
    if p.is_file():paths.append({'file':str(p.relative_to(DIST)),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(DIST/'release-manifest.json').write_text(json.dumps({'version':'handmade-three-scenes-v1','files':paths},indent=2)+'\n')
print('Staged',len(paths),'files;',sum(r['bytes'] for r in paths),'bytes; no generated-model library.')
