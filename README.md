# 摩尔庄园 · 归来的风景

浏览器中的单人三维漫游，当前重构版包含 **摩尔城堡、神秘花海、黑森林**。三处位于同一个驻留世界，以地形、小径与两座实体石桥相连。顶部可快速前往，也可以步行跨区。

这是受经典页游启发的非官方同人场景，允许空间改编。**当前不代表完整原版地图、3A 成品画质或已经验收的硬件帧率。** 历史的大世界与 AI 模型实验仍保存在 Git 历史和旧源码中；当前生产入口使用 `src/manor/`，生产包不会携带旧模型库。

## 体验

- 城堡：红瓦尖塔、钟面、王冠浮雕、拱窗、双扇活动门与可进入的门厅，前庭有可开关喷泉。
- 花海：花瓣亭、花屋、温室、连片四色花田、花田长椅与可浇水盛开的花种。
- 黑森林：三种树形、古树树洞、林间遗迹、溪流、蕨类、蘑菇与三盏可点亮的旧灯。
- 三段旅程：浇花 → 点灯、触碰树心 → 推门、敲响归途钟；进度和留影记录保存在当前浏览器。
- 环绕观察 / 第一人称、跑步、轻跳、坐下、地图地点导航、昼夜、细雨 / 薄雾、照片 PNG 导出、手机方向键。
- 点击「开始探索」后播放档案中神秘花海配置对应的原版 BGM_131，风、水、脚步和钟声通过 Web Audio 合成。

WASD / 方向键行走，拖动环顾，Shift 快走，空格轻跳，Ctrl 蹲下，E 互动；Esc 看风景，M 地图，J 手记，P 留影。

## 本地开发

Node 24、npm 11、Python 3；普通运行不需要 Blender 或任何模型 API 密钥。

```bash
npm ci --cache /workspace/.npm-cache
npm run dev
```

本地开发地址由 Vite 输出，默认端口 5173。生产构建：

```bash
npm run build
npm run preview
```

静态站的输出为 `dist/`。也可以在构建后运行 `python3 -m http.server 4186 --directory dist`。必须使用 localhost 的 HTTP 或公开 HTTPS；请勿通过 `file://` 打开，WebGL 资源和 SHA-256 校验需要正确的浏览器安全上下文。

四个页面入口使用同一套世界：`index.html` / `castle.html`、`flower-sea.html`、`black-forest.html`。支持子目录部署，没有服务端、外部模型 API 或运行时 CDN 依赖。

## 模型制作与复用素材

七组 GLB 几何全部由本项目在 Blender 4.3.2 中构建：城堡、花屋、花瓣亭、花卉、树木、古树树洞、道具。未使用混元或 Tripo 模型。Blender 工程包含材质与打包贴图，可继续编辑；使用脚本建模不等同于已经完成专业美术人工精修。

复用未经图像修改的 Poly Haven CC0 树皮照片、EZ-Tree MIT 树叶图集、Poly Haven CC0 HDR。没有复用它们的树木骨架或三维模型。石材、灰泥、屋瓦、土壤、木材贴图为 Blender 材质节点烘焙。完整署名见 [制作与素材](public/assets/handmade/credits.html)。原版音乐权利归原游戏权利方。

```bash
npm run models:handmade
npm run models:audit
```

第一条写入 `public/assets/handmade/` 和八个 `artifacts/handmade/*.blend`；第二条在 Blender 中重新导入实际 GLB，检查坐标、法线、三角数量、树洞拓扑及大门开关的真实射线通行。

## 检查与实机截图

```bash
npm run build
npm test
npm run capture
```

测试包含六项 Python 几何 / 导航 / 存档 / 发布检查、六项 Chromium 浏览器功能检查。浏览器配置会在需要时启动 `dist/` 静态服务；默认使用 `/usr/bin/chromium`。捕获脚本需要先启动同一静态服务，也可通过 `MANOR_URL` 指定地址。

功能检查覆盖三个地区、完整旅程及刷新恢复、真实行走与坐下、原版音乐播放、昼夜与天气、照片下载、手机操作、损坏资产的显式报错。截图使用实际 WebGL 输出，不用概念图代替。

云环境的 Chromium 使用 SwiftShader 软件渲染；测试通过不能证明真实设备的帧率、内存或 3A 视觉标准。截图脚本为了可复现地执行少量实机帧而控制 RAF，记录的帧间隔不能作为游戏性能数据。

## 打包与发布

```bash
npm run release
npm run publish
npm run verify:live
```

发布前需完成模型审计、浏览器测试和九张真实场景截图。`release` 输出两个独立 ZIP：静态网站和可编辑 Blender 源工程，位于 `artifacts/handmade/release/`。Blender 工程不依赖旧的生成任务。

发布脚本只复制当前生产资源、这两个下载包及实机截图，保留 Git 发布历史，用普通快进推送更新 `main` 与 `gh-pages`。没有 `--push` 时只生成本地发布提交，不上传。部署验证对每一个发布文件进行严格 HTTPS 下载与 SHA-256 对比，不关闭证书验证。

## 制作记录

- [当前重构与美术取舍](docs/handmade-world.md)
- [制作与验收边界](docs/production-acceptance.md)
- [经典地图资料清单（历史参考）](docs/classic-map-inventory.md)

当前入口的代码为 `src/manor/`；`scripts/build_handmade_world.py` 为可重复建模源，`vite.manor.config.ts` 为四入口构建及资源白名单配置。旧版文件为历史实验，不属于当前生产包。
