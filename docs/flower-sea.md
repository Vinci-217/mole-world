# 神秘花海：原图到 3D

本轮仅制作地图 362，浏览入口 `flower-sea.html`。它与旧的十二地区世界独立，尚未作为连续世界的一部分接入。原图风格与布局是依据。已实际调用用户明确指定的 TokenHub 接口；模型就绪与生成进度分开显示，不能把服务端生成完成当作浏览器已安装模型。

## 已核验的原图

第三方存档 [Miigon/RecMoleRes](https://github.com/Miigon/RecMoleRes/tree/7a6d6b3c7037a85afb28ad6abd4d7f4adfddb5ff) 的 `root/resource/map/Map_10362.swf`，导出地图符号 `RES_Map362`。根舞台独立运行为空白，因此用 Ruffle 0.7.1 将原生绘图符号放到观察舞台渲染；不是完整客户端实机。

公开参照图使用其原生 `bg_mc`（character 7）背景。完整 `RES_Map362` 另含灰色可行走区技术蒙版，不应把该蒙版渲染为场景色调。原图不经重绘；背景中不含控制层的黄色传送光圈。

从同版本 XML 核实两个入口：`go_112` 位于 (499,534)，通往虫虫谷；`go_113` 位于 (866,441)，通往神秘花蕊。这两个目标地图尚未实现，不能把本页视为已有两张可进入的子地图。

原图可见左侧古树、上方黄色花藤、左中藤蔓拱门、中央起伏花草地与踏石、后右红顶浅色小屋、右下巨型粉花。各独立资产参考和预算见 [assets.json](../art-direction/flower-sea/assets.json)。单体图由图像生成工具依据原图转译，是供混元使用的输入，既不是官方抠图，也不是已经生成的模型。

## 实际制作流程

1. 独立单体 PNG 输入混元 Pro 3.1，Normal + PBR，并明确面数预算，避免整张地图融合成一个不可编辑模型。
2. 保存 JobId，轮询同一任务、立即下载 GLB。付费提交不自动重试；超时且未取得 JobId 的任务必须核对控制台记录。请求失败不能自行重新创建付费任务。
3. Blender 4.3.2 导入实际 GLB，等比统一尺度、居中落地、限制贴图至 2048，保留拓扑、材质、UV、法线。不自动重拓扑或凭空替换造型。
4. 核对原图哈希、任务回执、原 GLB、Blender 输入/输出报告后才安装公开 GLB、标记 ready。网页再校验 SHA256、实际解析模型；就绪数只统计真实成功载入项。
5. 检查模型背面、拱门开口、叶片边缘、贴图与构图，必要时精修并重新导出。技术测试通过不等于美术验收。

```bash
# 不联网、不收费
python3 scripts/hunyuan_assets.py plan --provider ai3d-key

# 仅在已授权生成且安全绑定密钥后调用；一次默认一个资产
python3 scripts/hunyuan_assets.py generate --provider ai3d-key --asset pink-portal

# 无付费请求：核验回执并执行真实 Blender 整理
python3 scripts/flower_sea.py prepare --asset pink-portal
python3 scripts/flower_sea.py status

# 仅发布回执中的状态枚举，不发布JobId、签名URL或计费记录
python3 scripts/flower_sea.py progress

# 浏览器开发与静态发布包
npm run dev
npm run release
```

`generate` 最多一次选择 3 个资产；按相同 provider 再运行会恢复已有任务，不会为已有回执偷偷重提。失败或不确定的回执不可直接删除后再试。原始 GLB、模型 URL、计费记录、JobId 和 `.blend` 保存在被忽略的私有目录，不随网站发布。

## 三种官方鉴权不能混用

| 控制台/协议 | CLI provider | 安全环境变量 | 目的域名 |
| --- | --- | --- | --- |
| 原 AI3D API Key，用户提供的 `ai3d/packages` 平台 | `ai3d-key` | `HUNYUAN_API_KEY` | `api.ai3d.cloud.tencent.com` |
| TokenHub API Key | `tokenhub` | `TOKENHUB_API_KEY` | `tokenhub.tencentmaas.com` |
| 腾讯云 IAM/TC3 SDK | `ai3d` | `TENCENTCLOUD_SECRET_ID` / `TENCENTCLOUD_SECRET_KEY`，可选 `TOKEN` / `REGION` | `ai3d.tencentcloudapi.com` |

原 AI3D 接口使用原始 `Authorization` Key，不加 Bearer；TokenHub 使用 Bearer，字段为 snake_case；IAM 由官方固定版本 SDK 签名。不要把一个平台的密钥尝试发给其他平台。官方说明：[原 API Key 协议](https://cloud.tencent.com/document/product/1804/126189)、[TokenHub 协议](https://cloud.tencent.com/document/product/1823/137181)、[官方 SDK](https://github.com/TencentCloud/tencentcloud-sdk-python)。网站免费次数不代表 API 免费，当前实际费用以用户账户对应控制台为准。

将密钥安全绑定到运行环境；不要放到 VITE_ 变量、前端、源码或发布包。普通开发、构建、安装和测试不会提交模型生成。下载模型的 CDN 请求完全不携带 API 鉴权头。

## 浏览页

鼠标拖动环绕，滚轮缩放，双指平移；原图视角复位，晴日/黄昏/细雨切换，音乐点击开启。天气是人工切换的三种状态，当前没有自动循环昼夜。原图对照和单体参考独立于真实 3D 画面。

环境地形、踏石、小花与粒子为程序生成；待生成地标仅展示可切换的位置提示。`manifest.json` 内的 pending 不会发起缺失模型请求，也不会被基础几何体替代。真实 GLB 支持多实例放置，分别调整位置、旋转与缩放。

网站 `MoleManor-Website.zip` 包含此页；原有 `MoleManor-Offline.html` 仅包含旧世界，花海未塞入该单文件。静态浏览不需要 API 密钥或 Blender。
