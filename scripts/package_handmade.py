"""Package the exact three-scene build and its editable Blender sources.

Run after npm run build and npm run models:audit. Nothing outside the explicit
allowlist is added; historical generated models and private receipts stay out.
"""
from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
OUT = ROOT / 'artifacts/handmade/release'
MODELS = ['castle', 'cottage', 'pavilion', 'flowers', 'trees', 'hollow', 'props']
GUIDE = '''归来的风景 · 三片相连的庄园

浏览器进入 index.html，摩尔城堡、神秘花海和黑森林属于同一个世界。
点击「开始探索」进入步行并开启原版音乐。WASD / 方向键行走，拖动环顾，
Shift 快走，空格轻跳，E 互动，Esc 环绕看风景，M 打开地图，J 旅人手记，P 拍照。
手机使用屏幕方向键和「互动」按钮。顶部可快速抵达三个地区；也能沿小径与石桥步行跨区。
花海浇花、森林点亮三盏灯后触碰树心、城堡推门并敲钟，组成一段会保存在本机的旅程。
右上角可选晴天、薄雾、细雨，以及昼夜和画质；「留下风景」可下载实际三维照片。

Handmade-Manor-Website.zip 是静态网站包。解压后运行：
  python3 -m http.server 8000
然后在浏览器打开 http://localhost:8000。请勿用 file:// 双击 HTML，
模型加载及 SHA-256 校验需要 HTTP 的 localhost 或 HTTPS。
也可以将整个文件夹上传任意 HTTPS 静态托管，支持托管在子目录下。
网页正常运行不需要 Node、Blender、模型 API 或密钥。

Handmade-Manor-Blender.zip 提供八个已经打包贴图的 .blend 工程、原始建模脚本、
纹理与完整来源。Blender 4.3.2 可以直接编辑，不是用截图代替三维模型。
在该源包根目录执行：
  blender -b --python-exit-code 1 --python scripts/build_handmade_world.py
  blender -b --python-exit-code 1 --python scripts/audit_handmade.py
输出位于 public/assets/handmade/，工程位于 artifacts/handmade/。
Three.js 地形、种植布局、水体和交互源代码位于 GitHub 仓库的 src/manor/。

当前版本是重新制作的可玩场景，未声称达到 3A 成品画质或还原所有原版地图。
详细素材许可见 assets/handmade/credits.html（网站）或 public/assets/handmade/credits.html（源包）。
本项目为非官方同人，原版音乐权利归原游戏权利方。
源代码与后续版本：https://github.com/Vinci-217/mole-world
'''


def write_zip(path: Path, files: dict[str, bytes]) -> None:
    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name, data in sorted(files.items()):
            item = zipfile.ZipInfo(name, date_time=(2026, 10, 27, 0, 0, 0))
            item.compress_type = zipfile.ZIP_DEFLATED
            item.external_attr = 0o100644 << 16
            archive.writestr(item, data)
    with zipfile.ZipFile(path) as archive:
        if archive.testzip() is not None:
            raise ValueError('Corrupt release archive: ' + path.name)


def main() -> None:
    if not (DIST / 'release-manifest.json').is_file():
        raise SystemExit('Run npm run build first.')
    audit_path = ROOT / 'artifacts/handmade/model-audit.json'
    audit = json.loads(audit_path.read_text())
    manifest = json.loads((DIST / 'assets/handmade/manifest.json').read_text())
    if audit['failures'] or {a['id']: a['sha256'] for a in audit['assets']} != {a['id']: a['sha256'] for a in manifest['assets']}:
        raise SystemExit('Run npm run models:audit against the current geometry first.')
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / '打开说明.txt').write_text(GUIDE)
    source = {}
    for name in [*MODELS, 'material-library']:
        path = ROOT / 'artifacts/handmade' / (name + '.blend')
        source[str(path.relative_to(ROOT))] = path.read_bytes()
    for name in ['build_handmade_world.py', 'audit_handmade.py']:
        source['scripts/' + name] = (ROOT / 'scripts' / name).read_bytes()
    for path in sorted((DIST / 'assets/handmade').rglob('*')):
        if path.is_file() and (path.suffix == '.txt' or 'audio' not in path.parts and 'lighting' not in path.parts):
            source['public/' + str(path.relative_to(DIST))] = path.read_bytes()
    # Rebuild inputs at the paths expected by the authoring script.
    for name in ['oak_color_1k.jpg', 'oak_normal_1k.jpg', 'oak_roughness_1k.jpg', 'oak_color.png', 'ash_color.png']:
        source['public/assets/woodland/' + name] = (ROOT / 'public/assets/woodland' / name).read_bytes()
    source['qa/model-audit.json'] = audit_path.read_bytes()
    source['README.txt'] = GUIDE.encode()
    write_zip(OUT / 'Handmade-Manor-Blender.zip', source)
    website = {str(p.relative_to(DIST)): p.read_bytes() for p in DIST.rglob('*') if p.is_file()}
    # A website ZIP cannot contain a link to a copy of itself. Keep its credit
    # page useful when it is hosted separately from our downloads directory.
    credit = 'assets/handmade/credits.html'
    website[credit] = website[credit].decode().replace('../../downloads/Handmade-Manor-Blender.zip',
        'https://github.com/Vinci-217/mole-world').replace('../../downloads/Handmade-Manor-Website.zip',
        'https://github.com/Vinci-217/mole-world').encode()
    website['打开说明.txt'] = GUIDE.encode()
    # Regenerate hashes for the standalone credit page variant.
    rows = [{'file': name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}
            for name, data in sorted(website.items()) if name != 'release-manifest.json']
    website['release-manifest.json'] = (json.dumps({'version': 'handmade-three-scenes-v1', 'files': rows}, indent=2) + '\n').encode()
    write_zip(OUT / 'Handmade-Manor-Website.zip', website)
    for path in sorted(OUT.iterdir()):
        if path.is_file() and path.suffix in ['.zip', '.txt']:
            print(path.name, path.stat().st_size, hashlib.sha256(path.read_bytes()).hexdigest())


if __name__ == '__main__':
    main()
