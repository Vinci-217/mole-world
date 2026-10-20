"""Package both a no-install offline HTML and a static hosting ZIP.

Run npm run release. Only the public production build is packaged; API keys,
source files, task receipts, environment files and node_modules are excluded.
"""
from pathlib import Path
import base64
import copy
import hashlib
import json
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
OUT = ROOT / 'artifacts/release'
OUT.mkdir(parents=True, exist_ok=True)

def encoded(path):
    return base64.b64encode(path.read_bytes()).decode('ascii')

html = (DIST / 'index.html').read_text()
manifest = copy.deepcopy(json.loads((DIST / 'assets/manifest.json').read_text()))
for asset in manifest['assets']:
    local = (DIST / asset['path'].lstrip('/')).resolve()
    if not local.is_relative_to(DIST.resolve()):
        raise ValueError('Asset must be inside the production directory.')
    asset['path'] = 'data:model/gltf-binary;base64,' + encoded(local)

styles = re.findall(r'<link\b[^>]*rel="stylesheet"[^>]*>', html)
for tag in styles:
    href = re.search(r'href="([^"]+)"', tag).group(1)
    css = (DIST / href.lstrip('./')).read_text()
    html = html.replace(tag, '<style>' + css.replace('</style', '<\\/style') + '</style>')

scripts = re.findall(r'<script\b[^>]*src="([^"]+)"[^>]*></script>', html)
for src in scripts:
    javascript = (DIST / src.lstrip('./')).read_text()
    # Escape closing tags in JS strings so the HTML parser cannot terminate
    # the inline script. There are no remaining external imports in this build.
    javascript = javascript.replace('</script', '<\\/script')
    tag = re.search(r'<script\b[^>]*src="' + re.escape(src) + r'"[^>]*></script>', html).group(0)
    html = html.replace(tag, '')
    html = html.replace('</body>', '<script type="module">' + javascript + '</script></body>')

icon = 'data:image/svg+xml;base64,' + encoded(DIST / 'crest.svg')
html = re.sub(r'(<link\b[^>]*rel="icon"[^>]*href=")[^"]+', lambda m:m.group(1)+icon, html)
payload = json.dumps(manifest, ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c')
html = html.replace('</head>', '<script type="application/json" id="offline-assets">' + payload + '</script></head>')
html = html.replace('</body>', '<!-- Bundled third-party model license:\n' + (DIST / 'assets/kaykit/LICENSE.txt').read_text().replace('--', '—') + '\n' + (DIST / 'assets/kaykit/SOURCE.txt').read_text() + '\n--></body>')
if re.search(r'tsk_[A-Za-z0-9_-]{24,}', html):
    raise ValueError('Secret-like content found; refusing to package.')
offline = OUT / 'Eldermere-Offline.html'
offline.write_text(html)

guide = '''雾隐庄园 · 打开说明

一、直接体验
下载 Eldermere-Offline.html，使用电脑上的 Chrome 或 Edge 打开。
全部模型、代码、贴图和声音生成逻辑都在这个文件里，不需要安装软件或连接模型 API。
初次进入请等待场景加载。需要支持 WebGL 2 的浏览器，建议开启硬件加速。
点击「走进庄园」，WASD 行走，按住画面拖动环顾，Esc 退出。
右侧可切换天气和时间，点击扬声器开启音乐。
手机文件预览器通常不支持完整 WebGL，请使用网站版本或电脑浏览器。

二、发布为网站
Eldermere-Website.zip 内是完整的静态网站，没有服务端或密钥。
解压后，将包含 index.html 的整个文件夹上传至静态网站托管服务。
例如，在 Netlify Drop（https://app.netlify.com/drop）登录后拖入解压的文件夹。
也可部署到 Cloudflare Pages，构建输出目录为该文件夹根目录。
请保留 assets 文件夹。当前版本支持部署在子目录中。

这是场景原型：已有天气、昼夜、漫游、光影与合成音乐。
目前使用 CC0 资产和场景模型，Tripo 精细模型尚未生成。
'''
(OUT / '打开说明.txt').write_text(guide)
with zipfile.ZipFile(OUT / 'Eldermere-Website.zip', 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted(DIST.rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(DIST))
with zipfile.ZipFile(OUT / 'Eldermere-Offline.zip', 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    archive.write(offline, offline.name)
    archive.write(OUT / '打开说明.txt', '打开说明.txt')
for path in OUT.iterdir():
    print(path.name, path.stat().st_size, 'bytes', hashlib.sha256(path.read_bytes()).hexdigest())
