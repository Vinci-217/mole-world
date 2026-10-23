"""Verify deployed scene files against the staged production bytes over HTTPS."""
from pathlib import Path
import concurrent.futures
import hashlib
import json
import re
import time
import urllib.error
import urllib.request

ROOT=Path(__file__).resolve().parents[1]
stage=ROOT/'artifacts/publish'
commit=(ROOT/'artifacts/release/publish-commit.txt').read_text().strip()
base='https://raw.githack.com/Vinci-217/mole-world/'+commit+'/'
paths={'index.html','flower-sea.html','black-forest.html','gallery.html','render-comparison.html',
       'assets/flower-sea/manifest.json','assets/flower-garden/manifest.json',
       'assets/flower-garden/art-materials.json','assets/flower-sea/audio/BGM_131.mp3',
       'assets/flower-sea/spatial-layout.json','assets/flower-sea/views/index.html','assets/flower-sea/views/source.json',
       'assets/flower-garden/credits.html','assets/black-forest/credits.html',
       'assets/flower-garden/lighting/rooitou-park-1k.hdr','assets/flower-garden/lighting/source.json',
       'assets/nature/LICENSE-BabylonJS.txt','assets/nature/SOURCE.txt',
       'downloads/FlowerSea-Blender-Botanicals.zip','downloads/FlowerSea-FourViews.zip','downloads/FlowerSea-SpatialLayout.zip'}
paths.update('assets/flower-sea/views/'+kind+'.png' for kind in ['front','left','back','top'])
paths.update('previews/flower-garden-'+kind+'.png' for kind in ['front','left','back','top','day','walk','night','dusk','rain','south-meadow','east-meadow','west-meadow','north-lookout','before-render'])
paths.update('previews/black-forest-'+kind+'.png' for kind in ['entrance','bridge','mushrooms','hollow','moon','mist','rain'])
paths.update(str(p.relative_to(stage)) for p in (stage/'assets/woodland').rglob('*') if p.is_file())
paths.update(['previews/black-forest-night.png','downloads/Woodland-Blender-Source.zip'])
paths.update(str(p.relative_to(stage)) for p in (stage/'assets/flower-garden/lighting').glob('LICENSE*'))
for page in ['index.html','flower-sea.html','black-forest.html']:
    html=(stage/page).read_text()
    paths.update(p.removeprefix('./') for p in re.findall(r'(?:src|href)="([^"]+\.(?:js|css))"',html))
for manifest_path in ['assets/flower-sea/manifest.json','assets/flower-garden/manifest.json']:
    manifest=json.loads((stage/manifest_path).read_text())
    paths.update(a['path'].removeprefix('./') for a in manifest['assets'] if a['state']=='ready')
materials=json.loads((stage/'assets/flower-garden/art-materials.json').read_text())
paths.update('assets/flower-garden/'+a['file'] for a in materials['materials'])

def verify(path):
    expected=hashlib.sha256((stage/path).read_bytes()).hexdigest()
    for attempt in range(3):
        try:
            request=urllib.request.Request(base+path,headers={'User-Agent':'MoleWorld-DeploymentCheck/1.0'})
            with urllib.request.urlopen(request,timeout=45) as response:
                data=response.read()
            actual=hashlib.sha256(data).hexdigest()
            if actual!=expected:raise RuntimeError('Published hash mismatch: '+path)
            return {'path':path,'bytes':len(data),'sha256':actual}
        except urllib.error.HTTPError as error:
            if error.code not in [404,502,503,504] or attempt==2:raise
            time.sleep(2)

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    result=list(pool.map(verify,sorted(paths)))
out=ROOT/'artifacts/scenes-live-verification.json'
out.write_text(json.dumps({'commit':commit,'verified':result},indent=2))
print(json.dumps({'commit':commit,'verifiedFiles':len(result),'flowerSea':base+'flower-sea.html','blackForest':base+'black-forest.html'}))
