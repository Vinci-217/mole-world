"""Publish the tested production build without switching the source checkout.

Run npm run release first, then python3 scripts/publish_site.py --push.
Distribute the playable build, downloads, real screenshots and a separate art gallery.
"""
from __future__ import annotations
import argparse
import html
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
STAGE = ROOT / 'artifacts/publish'
RELEASE = ROOT / 'artifacts/release'
REGIONS = [
    ('castle', '摩尔城堡'), ('taotao-street', '淘淘乐街'), ('love-church', '爱心教堂'),
    ('happy-farm', '开心农场'), ('sunshine-ranch', '阳光牧场'), ('berry-jungle', '浆果丛林'),
    ('moraya-mountain', '摩尔拉雅雪山'), ('mystery-lake', '神秘湖'), ('ram-academy', '拉姆学院'),
    ('outpost', '前哨站'), ('black-forest', '黑森林'), ('amusement-park', '游乐场'),
    ('rainbow-falls','彩虹瀑布'),('strength-spring','力量之泉'),('berry-passage','浆果秘道'),
    ('moraya-rink','滑冰场'),('moraya-summit','雪山顶'),('ram-sports','拉姆运动场'),
    ('knight-training','骑士训练场'),('race-track','摩摩赛车场'),
]

def git(*args: str, data: bytes | None = None) -> bytes:
    return subprocess.check_output(['git', *args], cwd=ROOT, input=data)

def tree(directory: Path) -> str:
    records = []
    for path in sorted(directory.iterdir(), key=lambda p: p.name.encode()):
        if path.is_symlink():
            raise ValueError('Published files cannot be symbolic links.')
        if path.is_dir():
            mode, kind, oid = '040000', 'tree', tree(path)
        else:
            mode, kind = '100644', 'blob'
            oid = git('hash-object', '-w', '--stdin', data=path.read_bytes()).decode().strip()
        records.append(f'{mode} {kind} {oid}\t{path.name}'.encode() + b'\0')
    return git('mktree', '-z', data=b''.join(records)).decode().strip()

def stage() -> None:
    required = [ROOT / 'dist/index.html', RELEASE / 'MoleManor-Offline.html',
                RELEASE / 'MoleManor-Offline.zip', RELEASE / 'MoleManor-Website.zip']
    if not all(path.is_file() for path in required):
        raise SystemExit('Run npm run release before publishing.')
    if STAGE.exists():
        shutil.rmtree(STAGE)
    shutil.copytree(ROOT / 'dist', STAGE)
    (STAGE / '.nojekyll').touch()
    shutil.copy2(RELEASE / 'MoleManor-Offline.html', STAGE / 'offline.html')
    downloads = STAGE / 'downloads'
    downloads.mkdir()
    for name in ['MoleManor-Offline.zip', 'MoleManor-Website.zip', '打开说明.txt']:
        shutil.copy2(RELEASE / name, downloads / name)
    if (RELEASE/'FlowerSea-Blender-Botanicals.zip').is_file():
        shutil.copy2(RELEASE/'FlowerSea-Blender-Botanicals.zip',downloads/'FlowerSea-Blender-Botanicals.zip')
    for name in ['FlowerSea-FourViews.zip','FlowerSea-SpatialLayout.zip']:
        if (RELEASE/name).is_file():shutil.copy2(RELEASE/name,downloads/name)
    if (RELEASE/'Woodland-Blender-Source.zip').is_file():
        shutil.copy2(RELEASE/'Woodland-Blender-Source.zip',downloads/'Woodland-Blender-Source.zip')
    for filename, target in [('manor-desktop.png', 'preview.png'), ('manor-night.png', 'preview-night.png'),
                             ('manor-mobile.png', 'preview-mobile.png')]:
        screenshot = ROOT / 'artifacts' / filename
        if screenshot.is_file():
            shutil.copy2(screenshot, STAGE / target)
    source = ROOT / 'artifacts/world-previews'
    cards = []
    previews = STAGE / 'previews'
    previews.mkdir()
    for region_id, label in [('world-overview','连续世界全境'),*REGIONS]:
        screenshot = source / f'{region_id}.png'
        if not screenshot.is_file():
            continue
        shutil.copy2(screenshot, previews / screenshot.name)
        cards.append(f'<figure><a href="previews/{region_id}.png"><img src="previews/{region_id}.png" '
                     f'loading="lazy" alt="{html.escape(label)}实时场景截图"></a><figcaption>{html.escape(label)}'
                     ' <small>户外场景初版</small></figcaption></figure>')
    atlas = source / 'atlas.png'
    if atlas.is_file():
        shutil.copy2(atlas, previews / 'atlas.png')
    for filename,label in [('production-day.png','神秘花海 · 花园全景'),('production-walk.png','神秘花海 · 行走视角'),('production-night.png','神秘花海 · 月夜'),('production-dusk.png','神秘花海 · 黄昏'),('production-rain.png','神秘花海 · 细雨'),('production-front.png','神秘花海 · 前视'),('production-left.png','神秘花海 · 左视'),('production-back.png','神秘花海 · 后视'),('production-top.png','神秘花海 · 俯视')]:
        screenshot=ROOT/'artifacts/flower-review'/filename
        if screenshot.is_file():
            target='flower-garden-'+filename.removeprefix('production-')
            shutil.copy2(screenshot,previews/target)
            cards.append(f'<figure><a href="flower-sea.html"><img src="previews/{target}" loading="lazy" alt="{html.escape(label)}实时3D截图"></a><figcaption>{html.escape(label)} <small>独立花园场景</small></figcaption></figure>')
    before=ROOT/'artifacts/flower-review/before-render-day.png'
    for name,label in [('entrance','黑森林 · 林径入口'),('bridge','黑森林 · 苔桥遗迹'),('mushrooms','黑森林 · 蘑菇林地'),('hollow','黑森林 · 古树之心'),('moon','黑森林 · 林隙溪谷'),('night','黑森林 · 月夜'),('mist','黑森林 · 林雾'),('rain','黑森林 · 细雨')]:
        screenshot=ROOT/'artifacts/forest-review'/f'{name}.png'
        if screenshot.is_file():
            target=f'black-forest-{name}.png';shutil.copy2(screenshot,previews/target)
            cards.append(f'<figure><a href="black-forest.html"><img src="previews/{target}" loading="lazy" alt="{html.escape(label)}实时3D截图"></a><figcaption>{html.escape(label)} <small>可探索森林场景</small></figcaption></figure>')
    for name,label in [('south-meadow','南风花海'),('east-meadow','东侧花浪坡'),('west-meadow','溪西花谷'),('north-lookout','花丘远眺')]:
        screenshot=ROOT/'artifacts/flower-review'/f'production-{name}.png'
        if screenshot.is_file():
            target=f'flower-garden-{name}.png';shutil.copy2(screenshot,previews/target)
            cards.append(f'<figure><a href="flower-sea.html"><img src="previews/{target}" loading="lazy" alt="{html.escape(label)}实时3D截图"></a><figcaption>神秘花海 · {html.escape(label)} <small>新增花田</small></figcaption></figure>')
    if before.is_file() and (previews/'flower-garden-day.png').is_file():
        shutil.copy2(before,previews/'flower-garden-before-render.png')
        (STAGE/'render-comparison.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>神秘花海 · 渲染实机对比</title><style>body{margin:0;background:#142e2d;color:#edf2e2;font:14px/1.8 system-ui}main{max-width:1280px;margin:auto;padding:24px}a{color:#e8d5a3}h1{font-size:24px;font-weight:500}p{color:#b7cbc0}.compare{position:relative;width:100%;aspect-ratio:1280/850;--split:50%;overflow:hidden;border-radius:8px}.compare img{position:absolute;width:100%;height:100%;object-fit:contain}.after{clip-path:inset(0 calc(100% - var(--split)) 0 0)}.line{position:absolute;left:var(--split);height:100%;width:2px;background:#fff8;pointer-events:none}.label{position:absolute;top:12px;background:#183834d9;padding:5px 10px;border-radius:5px;font-size:12px}.new{left:12px}.old{right:12px}input{display:block;width:100%;margin:18px 0;accent-color:#c7d893;cursor:ew-resize}small{color:#b7cbc0}</style>
<main><a href="flower-sea.html">进入当前 3D 花园 →</a><h1>同一花海，渲染实机对比</h1><p>左右拖动滑块查看。两张均来自浏览器实时 3D 场景；前后版本还包括花草与树林的布置调整。</p>
<div class="compare" id="compare"><img src="previews/flower-garden-before-render.png" alt="上一版浏览器实机"><img class="after" src="previews/flower-garden-day.png" alt="当前版浏览器实机"><div class="line"></div><span class="label new">本轮实机</span><span class="label old">上一版实机</span></div>
<label for="split">实机对比滑块</label><input id="split" type="range" min="0" max="100" value="50" aria-label="当前版本覆盖比例"><small>当前版本：HDR 环境照明、植物材质调整、接触阴影、微小凹凸、水面环境反射与色彩处理。完整素材鸣谢在花园「地标」面板。</small></main>
<script>document.getElementById('split').addEventListener('input',e=>document.getElementById('compare').style.setProperty('--split',e.target.value+'%'));</script></html>''')
    art = ROOT / 'art-direction'
    art_link = ''
    if (art / 'catalog.json').is_file():
        catalog = json.loads((art / 'catalog.json').read_text())
        pending = [entry['id'] for entry in catalog['entries'] if entry['status'] != 'generated']
        if pending:
            raise SystemExit(f'Art gallery has {len(pending)} unfinished image entries; complete the current batch first.')
        required_art = [art / 'index.html']
        required_art.extend(art / entry['image'] for entry in catalog['entries']
                            if entry['status'] == 'generated')
        required_art.extend(art / 'downloads' / f"{region['id']}.zip" for region in catalog['regions'])
        if not all(path.is_file() for path in required_art):
            raise SystemExit('Run python3 scripts/art_direction.py render before publishing the art gallery.')
        shutil.copytree(art, STAGE / 'art')
        art_link = '<p><a href="art/index.html">查看 AI 美术画册 →</a>（效果图与单体建模参考，非实机画面）</p>'
    gallery = '''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>摩尔庄园 · 实机图集</title><style>body{margin:0;padding:40px;background:#152c27;color:#e8dfc4;font:15px/1.8 system-ui}
main{max-width:1440px;margin:auto}h1{font-weight:400;letter-spacing:3px}p{color:#afbcac}a{color:#f0cd8e}.grid{display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}figure{margin:0;background:#203a30;border:1px solid #61755e;
border-radius:8px;overflow:hidden}img{width:100%;display:block}figcaption{padding:14px}small{float:right;color:#a7b49d;font-size:11px}
@media(max-width:600px){body{padding:20px}.grid{grid-template-columns:1fr}}</style><main><h1>摩尔庄园 · 实机图集</h1>
<p>以下均为当前程序的实时 3D 截图。12 个地区已由道路连接在同一个世界中，另有 8 处户外子地点初版；布局尚未按某个年代一比一还原；室内和独立子地图未完成，画质未达到 3A 标准。</p>
<p><a href="flower-sea.html">神秘花海 →</a>　<a href="black-forest.html">黑森林 →</a>　<a href="index.html">庄园全图 →</a>　<a href="downloads/MoleManor-Offline.zip">下载旧世界离线版</a></p><div class="grid">'''
    cards.sort(key=lambda card:0 if 'href="black-forest.html"' in card else 1 if 'href="flower-sea.html"' in card else 2)
    (STAGE / 'gallery.html').write_text(gallery + ''.join(cards) + '</div>' + art_link + '</main></html>')
    for path in STAGE.rglob('*'):
        if path.is_file() and any(part.startswith('.env') or part == '.asset-tasks' for part in path.parts):
            raise ValueError('Private file found in published directory.')

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--push', action='store_true')
    args = parser.parse_args()
    stage()
    source = git('rev-parse', 'HEAD').decode().strip()
    previous = git('ls-remote', 'origin', 'refs/heads/gh-pages').decode().split()
    command = ['commit-tree', tree(STAGE)]
    if previous:
        command.extend(['-p', previous[0]])
    commit = git(*command, '-m', f'Publish browser world from {source[:12]}').decode().strip()
    (RELEASE / 'publish-commit.txt').write_text(commit + '\n')
    if args.push:
        subprocess.check_call(['git', 'push', 'origin', 'HEAD:refs/heads/main', f'{commit}:refs/heads/gh-pages'], cwd=ROOT)
    print(f'Static commit: {commit}')
    print(f'Preview: https://raw.githack.com/Vinci-217/mole-world/{commit}/index.html')
    if (STAGE / 'art/index.html').is_file():
        print(f'Art gallery: https://raw.githack.com/Vinci-217/mole-world/{commit}/art/index.html')

if __name__ == '__main__':
    main()
