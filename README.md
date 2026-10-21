# 摩尔庄园 · 经典城堡前庭

以经典页游可识别地标为基准的单机 3D 场景重构，保留精细材质、天气、昼夜与漫游。已替换上一版通用欧洲庄园主题：主地标现在是红陶瓦、奶油石墙、金色檐线、钟面和王冠入口的摩尔城堡，前庭有摩尔与拉姆动态模型。

城堡轮廓参考已实际查看的页游客户端宣传画。前庭道路、水景、花园与石桥是便于漫游的空间转译，**不是已核实的一比一官方地图**。参考和证据边界见 [视觉基准](docs/visual-reference.md)。

## 直接体验

- [在线预览](https://raw.githack.com/Vinci-217/mole-world/gh-pages/index.html)：第三方静态预览入口，当前云环境无法直接验证该域名的外网可达性。
- [下载离线版](https://github.com/Vinci-217/mole-world/raw/refs/heads/gh-pages/downloads/MoleManor-Offline.zip)：解压，用电脑 Chrome/Edge 打开 `MoleManor-Offline.html`。模型、贴图和脚本全部内嵌，无需 Node、服务器或模型 API。
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

测试包含五项 Python 资产管线测试及七项真实 Chromium 测试。管线测试中的付费网络请求均为模拟，用于验证 GLB 完整性、授权头隔离、任务恢复及避免重复提交；它们不代表真实 API 已验证。浏览器测试会加载实际城堡模型，检查雨雪、昼夜、音乐、地点切换、键盘漫游和移动端方向键。默认 Chromium 路径 `/usr/bin/chromium`，可设置 `CHROMIUM_PATH` 更换。

## 当前场景

- 实际 GLB 城堡：149,154 三角、9 个按材质合并的网格、6 张嵌入的 1024²色彩/法线贴图。
- 红瓦尖塔、实体搭接瓦、金边钟面与指针、王冠与红宝石、细圆塔、窗框和后排城垛。
- 原创网格重构的摩尔与拉姆，带简单行走、呼吸和漂浮动画。
- 中轴道路、绿篱、花圃、水景、树林、溪水与石桥。
- 四个观景位置；拖动/缩放视角；WASD、Shift、拖动环顾、Esc 退出的第一人称漫游；手机方向键。
- 连续昼夜、时间暂停、晴朗/薄雾/雨/雪，夜间灯火、柔和阴影、辉光、云层和星空。
- 水滴、雨雪、落叶、萤火、烟雾及飞鸟。
- 原创合成环境音乐、风雨流水与脚步声。浏览器要求点击后开启音频。
- 本地保存时间、天气、音量和画质；照片导出和地点导览。

建筑目前不含室内场景，雪不产生物理堆积，光照不是光线追踪。整体地图和隐藏背立面仍属重构解释，需要更多原版参考才能进一步核对。不要把技术测试通过等同于美术还原验收。

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

- `src/world.ts`：前庭布局、模型加载、静态合批、天气粒子与碰撞。
- `src/mole-life.ts`：摩尔和拉姆的网格、材质与动画。
- `src/main.ts`：相机、时间、渲染和界面控制。
- `src/audio.ts`：合成配乐和环境声景。
- `scripts/build_mole_castle.py`：可重复的 Blender 城堡建模。
- `scripts/package_release.py`：无安装离线网页和静态网站包。
- `scripts/tripo_assets.py`：付费生成、恢复和安装流程。
