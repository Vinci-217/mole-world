# 神秘花海：色彩与材质迭代

保留地标、完整尺度的远方小屋、四向镜头与可探索路径。本轮处理运行时画面，不将参考图当成实机。

- 从 pmndrs/drei-assets 的固定版本引入 CC0 Rooitou Park HDR，生成 PMREM 环境光；背景仍使用插画天空。暖日光、冷天光、草地反弹光配合较低的雾密度，保留前景与远景层次。
- 修正混元材质中高于 1 的镜面色，保留原始底色、法线和 ORM 纹理。藤蔓提高粗糙度下限；花瓣和薄叶添加受实际日光控制的背面透光近似，避免用自发光把植物照亮。
- 线性 HDR → N8AO 半分辨率接触阴影 → 克制的亮部泛光 → 冷暖分色 → Khronos PBR Neutral 色调映射 → FXAA。颜色转换只在输出时执行一次。
- 地面使用宏观色块与细部草地纹理；木头、石头、草地增加固定于表面的微小凹凸。溪水使用 Three.js 物理材质，随光照改变，保留细波与环境反射；没有再次渲染整片场景来做昂贵的平面反射。
- 复用 Rico Cilliers 的 CC0 酢浆草（Khronos GlassVaseFlowers 固定版本），在 Blender 去掉花瓶并整理尺寸，实例化 60 簇。没有重新手工制作相同植物。
- 花卉、树林、复用植物分别使用固定随机序列，避免网络加载顺序改变布景。
- 复用已有树木的远景模型，在场地外围增加两层错落林带，补足侧后方的环境包围感。

运行 `npm run build` 后，使用 `scripts/capture_flower_views.mjs` 检查实际生产构建的四向镜头、步行、月夜。浏览器软件渲染的通过不能代表独立显卡帧率，也不能代替美术验收。

素材许可、作者与校验在 `public/assets/flower-garden/credits.html`、`lighting/source.json` 与 `manifest.json`。新植物源文件下载至 `artifacts/reusable-assets/glass-vase-flowers.glb` 后，可运行 `blender -b --python-exit-code 1 --python scripts/prepare_reusable_sorrel.py`；脚本先校验固定源文件哈希。
