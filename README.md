# 雾隐庄园 · Eldermere

一个以中世纪欧洲庄园为主题的单机 3D 漫游原型。地图采用城堡、中央广场、酒馆与石桥相连的结构，建筑和文字为原创场景设定，并非《摩尔庄园》原版地图或官方产品。

## 运行

需要 Node.js 22.12+，当前云环境使用 Node.js 24.19.0。

```bash
cd /workspace/mole-world
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev
```

默认监听所有网卡的 5173 端口。使用环境的应用预览功能打开；应用需要 WebGL 2。部署时使用 `npm run build`，将 `dist/` 作为静态网站发布。应用正常运行不需要密钥或外部服务，所有场景资产随应用提供。

```bash
npm run build
npm test
```

测试包含 5 项 Python 资产管线测试，以及 7 项 Chromium 场景测试。生成服务测试使用模拟网络，验证任务恢复、避免重复付费、GLB 完整性和授权头隔离；它们不代表真实 Tripo 账号已通过验证。浏览器测试实际渲染模型，检查天气、昼夜、音频、移动和移动端布局。测试默认使用 `/usr/bin/chromium`，其他机器可设置 `CHROMIUM_PATH`。

## 已实现

- Three.js + TypeScript + Vite；GLB 资产随构建复制，无运行时 CDN 依赖。
- 石砌古堡、半木构建筑、广场喷泉、酒馆、礼拜堂、铁匠铺、树林、溪流与石桥。
- 四个观景点、可拖动/缩放的观景镜头、第一人称行走、简单建筑及河岸碰撞、移动端方向键。
- 连续昼夜、可拖动时间、暂停时间、晴朗/薄雾/雨/雪。
- 动态太阳、柔和阴影、夜间窗灯与路灯、辉光、色彩处理、动态云和夜空。
- 雨雪、喷泉水滴、烟雾、落叶、萤火、风车、旗帜和飞鸟。
- 原创 Web Audio 环境配乐、风雨流水层与脚步声；声音必须由用户点击开启。
- 本地保存天气、时间、画质和音量；照片导出、地点手记和漫游指南。

这是用于评估氛围和漫游的场景版本。它采用传统实时光照，并非光线追踪；建筑暂未提供室内空间，雪没有物理堆积。音效为合成声景。现有 CC0 建筑保留简化几何；更精细的 Tripo 建筑需要实际生成后验收，不能将当前版本描述为已经完成的 Tripo 高精度场景。

## Tripo 资产生成

接口与参数根据 [Tripo 官方 Python SDK 的 apiv3 文档](https://github.com/VAST-AI-Research/tripo-python-sdk/blob/master/docs/API.md) 实现。直接使用 HTTPS 标准库请求，保留 TLS 校验；不会调用 SDK 中的禁用 TLS 校验回退逻辑。

在云环境设置中安全绑定 `TRIPO_API_KEY`，允许 `openapi.tripo3d.ai`。密钥仅由 Python 离线生成脚本读取，不使用 `VITE_` 前缀，不进入网页、仓库或 GLB。不要把密钥作为命令行参数。生成返回的模型可能使用其他 CDN；遇到下载限制时，脚本只报告所需主机名，以便将该确切域名加入设置。

```bash
# 仅查看生成计划，不联网也不产生费用。
npm run assets:plan

# 默认只处理第一项：城堡。
npm run assets:generate

# 处理城堡、酒馆、喷泉，最多三项付费任务。
npm run assets:generate -- --limit 3

# 单独处理一个资产。
npm run assets:generate -- --asset tavern
```

模型使用用户指定的 `v3.1-20260211`。提示词、面数预算、PBR 和 detailed 贴图质量配置见 `assets-plan.json`。实际费用以服务商为准。

脚本先检查账户访问和余额，再提交任务。任务回执保存在被忽略的 `.asset-tasks/`，下载后校验 GLB、保存 SHA-256，并更新 `public/assets/manifest.json`。场景刷新后自动替换对应建筑。下载请求不携带 API 授权头。

重复运行会复用已有任务或已校验的资产。付费 POST 失败不会自动重试；如果回执为 `submitting` 且没有 task ID，请先在 Tripo 控制台核对任务，再修复回执，防止重复扣费。运行锁也会阻止并行重复提交。安装和启动流程不会自动生成付费资产。

**当前集成状态：**生成脚本和模拟测试已完成；真实 Tripo 调用需要运行环境的安全密钥绑定及出站域名规则生效。没有将聊天中的密钥复制到文件或命令中。

## Blender 与现有资产

五个外部建筑来自 Kay Lousberg 的 [KayKit Medieval Hexagon Pack 1.0](https://github.com/KayKit-Game-Assets/KayKit-Medieval-Hexagon-Pack-1.0)，CC0，来源提交为 `84fa4e91af6a88989be7c99e0891cede11f2ca38`。原始许可证与处理说明随文件保留在 `public/assets/kaykit/`。

使用 Blender 4.3.2 将源 glTF 转为独立 GLB，替换原渐变色板为本项目生成的石材、板岩与木纹纹理，重新投射 UV 并加入法线贴图。地形、树木、道路、广场、主城堡替代模型及效果由场景代码构建。上述资产全部本地可用，无需付费生成即可查看原型。

重新处理这些资产需要 Blender 和 Pillow；普通安装与运行不需要执行：

```bash
git clone https://github.com/KayKit-Game-Assets/KayKit-Medieval-Hexagon-Pack-1.0.git /tmp/mole-kaykit-source
git -C /tmp/mole-kaykit-source checkout 84fa4e91af6a88989be7c99e0891cede11f2ca38
python3 scripts/prepare_textures.py
blender --background --factory-startup --python scripts/prepare_kaykit.py -- /tmp/mole-kaykit-source
```

这个转换命令会重建基础资产清单。已生成 Tripo 资产时，随后运行相应的 `assets:generate` 命令即可通过现有回执重新安装，已完成资产不会重复付费。

## 文件

- `src/world.ts`：场景布局、资产加载、粒子、动画与碰撞。
- `src/main.ts`：渲染、相机、时间、天气和界面。
- `src/materials.ts`：可复用表面材质。
- `src/audio.ts`：原创环境音乐与声景。
- `scripts/tripo_assets.py`：服务端离线生成、恢复和安装。
- `assets-plan.json`：首批三个 Tripo 资产的风格与质量参数。
- `tests/`：资产管线与真实浏览器检查。

云任务本身已隔离，使用现有 `/workspace/mole-world` 检出目录，无需创建 Git worktree。
