# 摩尔庄园 · 经典世界

以经典页游地标为基准的浏览器单机 3D 世界重构。目前有 **12 个可切换、可漫游的户外场景初版**：摩尔城堡、淘淘乐街、爱心教堂、开心农场、阳光牧场、浆果丛林、摩尔拉雅雪山、神秘湖、拉姆学院、前哨站、黑森林和游乐场。各地区有独立的地形、建筑和地标，通过「探索世界」地图前往；当前地区按需加载和释放。

**这不是全部历史地图的完整还原，画面尚未达到 3A 标准。** 地标之外的精确布局、室内、子地图、角色精度和大量环境细节仍需制作。不要把四个城堡观景位置计作四张地图，也不要把户外初版计作制作完成。地图名称证据、未建子地图和版本边界见 [世界图谱](docs/world-atlas.md)，全部候选条目见 [313 个地图编号清单](docs/classic-map-inventory.md)，城堡轮廓依据见 [视觉基准](docs/visual-reference.md)。

这一轮增加真实树木 GLB、透明叶片与法线贴图、实例化草丛与蕨类、风吹动画、GTAO 接触阴影和离屏多重采样；修正背面主光、过强补光、地形与植被错位，以及路面纹理密度不一致的问题。没有把二维概念图当作实时游戏截图。完成条件与后续画质工作见 [制作验收](docs/production-acceptance.md)。

## 直接体验

- [在线预览](https://raw.githack.com/Vinci-217/mole-world/gh-pages/index.html)：第三方静态预览入口，当前云环境无法直接验证该域名的外网可达性。
- [下载离线版](https://github.com/Vinci-217/mole-world/raw/refs/heads/gh-pages/downloads/MoleManor-Offline.zip)：解压，用电脑 Chrome/Edge 打开 `MoleManor-Offline.html`。城堡、树木模型、贴图和脚本全部内嵌，无需 Node、服务器或模型 API。
- [网站发布包](https://github.com/Vinci-217/mole-world/raw/refs/heads/gh-pages/downloads/MoleManor-Website.zip)：完整静态网站，可上传 Netlify Drop、Cloudflare Pages 等服务。

源码在 `main`，静态发布文件在 `gh-pages`。第三方预览缓存旧版时，使用对应发布提交 SHA 的预览链接即可明确指定版本。正式 GitHub Pages 需在仓库 Settings → Pages 中设置 Deploy from a branch → gh-pages → /(root)。

## 运行与验证

需要 Node.js 22.12+；当前环境使用 24.19.0。云任务已经隔离，直接使用现有检出，无需额外 Git worktree。

```bash
cd /workspace/mole-world
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev
```

Vite 监听 5173，应用需要 WebGL 2 和现代浏览器。所有运行时模型均随网站提供，不依赖外部 CDN、账号、数据库或密钥。

```bash
npm run build
npm test
npm run release
```

构建输出为 `dist/`。发布命令另生成 `artifacts/release/MoleManor-Offline.html`、离线 ZIP 和网站 ZIP。包中不含环境变量、密钥或生成任务回执。

发布前可生成各地区的真实高画质截图，同时验证自包含版本完全离线运行：

```bash
node scripts/capture_world.mjs
```

当前托管式 Chromium 阻止 `file://` 导航，离线检查使用网络关闭的浏览器载入全部自包含 HTML，不声称已经测试被策略禁止的文件导航。截图保存到 `artifacts/world-previews/`。

在已获授权的发布任务中，可运行 `python3 scripts/publish_site.py --push`，它将已构建网站、离线下载与实机图集写到 `gh-pages`，同时将当前源码提交推到 `main`，不会切换当前检出。未加 `--push` 时仅在本地准备静态提交。

测试包含 Python 资产管线测试及真实 Chromium 集成测试。管线测试中的付费网络请求均为模拟，用于验证 GLB 完整性、授权头隔离、任务恢复及避免重复提交；它们不代表真实 API 已验证。浏览器测试会加载实际城堡和植被模型，检查各地区加载、雨雪、昼夜、音乐、地点切换、键盘漫游和移动端方向键。默认 Chromium 路径 `/usr/bin/chromium`，可设置 `CHROMIUM_PATH` 更换。

## 当前场景与图形管线

- 实际 GLB 城堡：149,154 三角、9 个按材质合并的网格、6 张嵌入的 1024²色彩/法线贴图。
- 红瓦尖塔、实体搭接瓦、金边钟面与指针、王冠与红宝石、细圆塔、窗框和后排城垛。
- CC BY 4.0 的 BabylonJS Assets 树木 GLB，保留真实分枝、叶片透明裁切及树皮/叶片法线，按近远选用 879–4,420 三角模型并实例化；草丛、蕨类和野花随风摆动。
- 原创网格重构的摩尔与拉姆，带简单行走、呼吸和漂浮动画。
- 中轴道路、绿篱、花圃、水景、树林、溪水与石桥。
- 12 个户外区域初版与世界地图；城堡内部有四个观景位置；拖动/缩放视角；WASD、Shift、拖动环顾、Esc 退出的第一人称漫游；手机方向键。
- 连续昼夜、时间暂停、晴朗/薄雾/雨/雪，夜间灯火、接触阴影、柔和阴影、受阈值控制的辉光、云层和星空。
- 水滴、雨雪、落叶、萤火、烟雾及飞鸟。
- 原创合成环境音乐、风雨流水与脚步声。浏览器要求点击后开启音频。
- 本地保存时间、天气、音量和画质；照片导出和地点导览。

建筑目前不含室内场景，雪不产生物理堆积，光照不是光线追踪。整体地图和隐藏背立面仍属重构解释，需要更多原版参考才能进一步核对。不要把技术测试通过等同于美术还原验收。

## 树木资产来源与重建

树木模型来自 [BabylonJS Assets contributors](https://github.com/BabylonJS/Assets/tree/c81f5d744fe8d41acfebd89eaeb7008c6f9659e3/meshes/Trees)，采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。本项目选择原有 LOD，转换坐标、格式、纹理和尺寸并内嵌到 GLB；没有将其标为自制或 Tripo 生成。完整来源和许可位于 `public/assets/nature/SOURCE.txt` 和 `LICENSE-BabylonJS.txt`，页面指南与离线包也保留署名。

普通运行直接使用仓库内 GLB，无需重新下载。重建时需要 Python 与 Pillow：

```bash
python3 scripts/prepare_vegetation.py
```

## Blender 来源与重建

主城堡是依据可查看轮廓新建的 Blender 网格，不是提取的官方模型，也不是 Tripo 结果。生成脚本会自行生成石灰石、陶瓦和木纹表面，建模并按材质合并，输出独立 GLB。

```bash
blender --background --factory-startup --python scripts/build_mole_castle.py
```

输出 `public/assets/mole/mole-castle.glb` 和建模信息 JSON；可编辑源文件保存在 `artifacts/authoring/mole-castle.blend`。普通安装运行不需要执行 Blender。页游参考截图仅用于观察，不随应用发布。

## Tripo 集成

`assets-plan.json` 已改为经典摩尔城堡的造型约束，取消上一版通用欧洲堡与酒馆计划。模型版本仍为用户指定的 `v3.1-20260211`，目前计划仅有一个城堡资产。

```bash
npm run assets:plan
npm run assets:generate -- --asset mole-castle
```

第一条仅打印计划，不联网或收费。生成命令需要安全运行时绑定 `TRIPO_API_KEY` 和 `openapi.tripo3d.ai` 的出站权限；只在明确授权生成时执行，普通安装和启动不会调用。当前运行环境没有该绑定，真实付费任务尚未提交。

脚本基于官方 apiv3 文档，保留 TLS 校验。密钥只用于服务端 HTTPS，不进入网页、GLB、仓库或 CDN 请求。回执在被忽略的 `.asset-tasks/`；重复运行复用已有任务，付费 POST 不自动重试。下载校验后更新资产清单，页面刷新即可接入。来源为 Tripo 的模型必须在实际生成和检查后才能这样标记。

## 文件

- `src/world-atlas.ts`：12 个导览地区、证据和未建子地图。
- `src/region-scenes.ts`：各户外初版的地形、建筑与动画。
- `src/explorer.ts`：地区加载、释放和漫游切换。
- `src/atlas-ui.ts`：交互式世界地图。
- `src/vegetation.ts`：实例化树木、草丛、风与资源管理。
- `src/rendering.ts`：接触阴影与透明物体的深度处理。
- `src/world.ts`：前庭布局、模型加载、静态合批、天气粒子与碰撞。
- `src/mole-life.ts`：摩尔和拉姆的网格、材质与动画。
- `src/main.ts`：相机、时间、渲染和界面控制。
- `src/audio.ts`：合成配乐和环境声景。
- `scripts/build_mole_castle.py`：可重复的 Blender 城堡建模。
- `scripts/package_release.py`：无安装离线网页和静态网站包。
- `scripts/tripo_assets.py`：付费生成、恢复和安装流程。
