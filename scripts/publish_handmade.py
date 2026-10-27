"""Stage and publish only the tested three-scene reconstruction.

This creates a new gh-pages commit without changing the source worktree, and
uses ordinary fast-forward pushes. Existing source and publication history stay
intact. --push is explicit; without it only a local static commit is created.
"""
from pathlib import Path
import argparse
import hashlib
import html
import json
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
STAGE = ROOT / 'artifacts/handmade/publish'
RELEASE = ROOT / 'artifacts/handmade/release'
VIEWS = [('castle', '摩尔城堡'), ('flower', '神秘花海'), ('forest', '黑森林'),
         ('castle-walk', '城堡步行'), ('castle-night', '城堡月夜'), ('forest-night', '林间月夜'),
         ('forest-mist', '薄雾森林'), ('flower-rain', '花海细雨'), ('mobile', '手机步行')]


def git(*args: str, data: bytes | None = None) -> bytes:
    return subprocess.check_output(['git', *args], cwd=ROOT, input=data)


def tree(directory: Path) -> str:
    records = []
    for path in sorted(directory.iterdir(), key=lambda p: p.name.encode()):
        if path.is_symlink():
            raise ValueError('Symbolic links are not allowed in the static release.')
        if path.is_dir():
            mode, kind, oid = '040000', 'tree', tree(path)
        else:
            mode, kind = '100644', 'blob'
            oid = git('hash-object', '-w', '--stdin', data=path.read_bytes()).decode().strip()
        records.append(f'{mode} {kind} {oid}\t{path.name}'.encode() + b'\0')
    return git('mktree', '-z', data=b''.join(records)).decode().strip()


def stage() -> None:
    for path in [ROOT / 'dist/index.html', RELEASE / 'Handmade-Manor-Blender.zip',
                 RELEASE / 'Handmade-Manor-Website.zip', ROOT / 'artifacts/handmade/review/views.json']:
        if not path.is_file():
            raise SystemExit('Run build, model audit, browser capture and release packaging first: ' + str(path))
    review = json.loads((ROOT / 'artifacts/handmade/review/views.json').read_text())
    if review['errors'] or len(review['modelRequests']) != 7:
        raise SystemExit('The real browser capture did not pass.')
    if review.get('buildSha256') != hashlib.sha256((ROOT / 'dist/release-manifest.json').read_bytes()).hexdigest():
        raise SystemExit('Recapture screenshots against the current production build before publishing.')
    if STAGE.exists():
        shutil.rmtree(STAGE)
    shutil.copytree(ROOT / 'dist', STAGE)
    (STAGE / '.nojekyll').touch()
    downloads = STAGE / 'downloads'
    downloads.mkdir()
    for name in ['Handmade-Manor-Blender.zip', 'Handmade-Manor-Website.zip', '打开说明.txt']:
        shutil.copy2(RELEASE / name, downloads / name)
    previews = STAGE / 'previews'
    previews.mkdir()
    cards = []
    for name, label in VIEWS:
        path = ROOT / 'artifacts/handmade/review' / (name + '.png')
        if not path.is_file():
            raise SystemExit('Missing actual scene screenshot: ' + name)
        shutil.copy2(path, previews / path.name)
        cards.append(f'<figure><a href="previews/{name}.png"><img src="previews/{name}.png" '
                     f'loading="lazy" alt="{html.escape(label)}浏览器实机"></a><figcaption>{html.escape(label)}</figcaption></figure>')
    gallery = '''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>归来的风景 · 浏览器实机</title><style>body{margin:0;background:#203835;color:#e9e5d3;font:15px/1.8 system-ui}main{max-width:1400px;margin:auto;padding:30px 24px}h1{font-weight:400}a{color:#e2c68e}p{color:#b9c7bc}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px}figure{margin:0;border:1px solid #52695d;border-radius:8px;overflow:hidden}img{width:100%;display:block}figcaption{padding:12px}@media(max-width:400px){.grid{grid-template-columns:1fr}}</style>
<main><a href="index.html">← 进入庄园</a><h1>归来的风景 · 浏览器实机</h1>
<p>摩尔城堡、神秘花海、黑森林，三片相连的风景。下方均为当前版本的浏览器实时三维截图，未使用效果图代替实机。当前仍未达到 3A 成品的美术及性能验收标准。</p>
<p><a href="castle.html">摩尔城堡</a>　<a href="flower-sea.html">神秘花海</a>　<a href="black-forest.html">黑森林</a>　<a href="assets/handmade/credits.html">制作与素材</a></p>
<p><a href="downloads/Handmade-Manor-Blender.zip">Blender 源工程</a>　<a href="downloads/Handmade-Manor-Website.zip">网站文件包</a></p><div class="grid">'''
    (STAGE / 'gallery.html').write_text(gallery + ''.join(cards) + '</div></main></html>')
    paths = [p for p in STAGE.rglob('*') if p.is_file()]
    glbs = [p for p in paths if p.suffix == '.glb']
    if len(glbs) != 7 or any('assets/handmade/' not in str(p.relative_to(STAGE)) for p in glbs):
        raise SystemExit('The static release contains an unexpected 3D library.')
    records = []
    for path in sorted(paths):
        if path.is_symlink() or any(p.startswith('.env') or p in ['.asset-tasks', 'node_modules'] for p in path.relative_to(STAGE).parts):
            raise SystemExit('Private or unexpected path in static release.')
        if path.stat().st_size >= 90_000_000:
            raise SystemExit('A published file exceeds the repository hosting limit.')
        records.append({'file': str(path.relative_to(STAGE)), 'bytes': path.stat().st_size,
                        'sha256': hashlib.sha256(path.read_bytes()).hexdigest()})
    (STAGE / 'deployment-manifest.json').write_text(json.dumps({'source': git('rev-parse', 'HEAD').decode().strip(),
                                                             'files': records}, indent=2) + '\n')


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--push', action='store_true')
    args = parser.parse_args()
    stage()
    source = git('rev-parse', 'HEAD').decode().strip()
    previous = git('ls-remote', 'origin', 'refs/heads/gh-pages').decode().split()
    command = ['commit-tree', tree(STAGE)]
    if previous:
        # Fetch the parent object without touching a checked-out branch.
        git('fetch', 'origin', 'refs/heads/gh-pages')
        command.extend(['-p', previous[0]])
    commit = git(*command, '-m', f'Publish handmade connected manor from {source[:12]}').decode().strip()
    (RELEASE / 'publish-commit.txt').write_text(commit + '\n')
    if args.push:
        subprocess.check_call(['git', 'push', 'origin', 'HEAD:refs/heads/main', f'{commit}:refs/heads/gh-pages'], cwd=ROOT)
    print('Static commit:', commit)
    print('Play: https://raw.githack.com/Vinci-217/mole-world/' + commit + '/index.html')


if __name__ == '__main__':
    main()
