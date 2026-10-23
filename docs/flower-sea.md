# 神秘花海：原图到 3D

本轮仅制作地图 362，浏览入口 `flower-sea.html`。它与旧的十二地区世界独立，尚未作为连续世界的一部分接入。原图风格与布局是依据。已实际调用用户明确指定的 TokenHub 接口；模型就绪与生成进度分开显示，不能把服务端生成完成当作浏览器已安装模型。

当前有四项实际混元模型，均经过最新 Blender 精修：巨型粉花 152,412 三角、藤蔓拱门 179,700 三角、小屋 43,992 三角、古树 107,200 三角（放置两次）。保留原生成模型的 UV、色彩/法线/ORM 贴图，每张不超过 2048²。另有 Blender 新建的顶棚花藤 29,908 三角，与四项混元结果分别记录来源。五个独立 GLB 合计约 46 MB。

Blender 中先焊接重合位置，保留每个面角的UV，再做松弛、细分和树冠形变，修复此前跨UV接缝开裂。花蕊、曲面树叶、沿墙藤叶和顶棚花瓣均为实际网格，厚度修改器应用后导出，曲线封口，同材质细节合并。粉花由39个网格减为2个，顶棚花藤由12个减为3个。可编辑文件与逐项输入/输出哈希报告保存在 `artifacts/flower-art-pass/`，脚本是 `scripts/refine_flower_models.py`。脚本以第一轮整理输出为输入，避免反复叠加细分。

原空中花藤以及使用原 AI3D Key 提交的新变体均未取得 JobId，记录保留为待核对，不自动重提。新变体不是本轮已取得的生成结果。现有四项实际模型的下载已恢复，网站包含真实文件，不需要浏览者的 API Key。

## 已核验的原图

第三方存档 [Miigon/RecMoleRes](https://github.com/Miigon/RecMoleRes/tree/7a6d6b3c7037a85afb28ad6abd4d7f4adfddb5ff) 的 `root/resource/map/Map_10362.swf`，导出地图符号 `RES_Map362`。根舞台独立运行为空白，因此用 Ruffle 0.7.1 将原生绘图符号放到观察舞台渲染；不是完整客户端实机。

公开参照图使用其原生 `bg_mc`（character 7）背景。完整 `RES_Map362` 另含灰色可行走区技术蒙版，不应把该蒙版渲染为场景色调。原图不经重绘；背景中不含控制层的黄色传送光圈。

从同版本 XML 核实两个入口：`go_112` 位于 (499,534)，通往虫虫谷；`go_113` 位于 (866,441)，通往神秘花蕊。这两个目标地图尚未实现，不能把本页视为已有两张可进入的子地图。

原图可见左侧古树、上方黄色花藤、左中藤蔓拱门、中央起伏花草地与踏石、后右红顶浅色小屋、右下巨型粉花。各独立资产参考和预算见 [assets.json](../art-direction/flower-sea/assets.json)。单体图由图像生成工具依据原图转译，是供混元使用的输入，既不是官方抠图，也不是已经生成的模型。

## 实际制作流程

1. 独立单体 PNG 输入混元 Pro 3.1，Normal + PBR，并明确面数预算，避免整张地图融合成一个不可编辑模型。
2. 保存 JobId，轮询同一任务、立即下载 GLB。付费提交不自动重试；超时且未取得 JobId 的任务必须核对控制台记录。请求失败不能自行重新创建付费任务。
3. Blender 4.3.2 导入实际 GLB，等比统一尺度、居中落地、限制贴图至 2048，保留 UV、PBR 贴图与法线。第二轮再对实际网格进行明确的造型和细节调整，记录每项修改；不是仅增加面数后宣布完成。
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

## 原版音乐

从同一存档的 `root/dll/ClientConfigDLL.swf` 原生配置核实：`<map id="362" musicId="BGM_131" playType="1" />`。下载原文件 `root/resource/bgSounds/BGM_131.mp3`，未重合成或改编，时长 60.10775 秒，浏览器循环播放。文件哈希与权利来源见 [音乐来源](../public/assets/flower-sea/audio/SOURCE.txt)。映射对应此存档版本，不推断所有历史版本。浏览器要求点击后播放。

## 浏览页与实际范围

鼠标拖动环绕、滚轮缩放；「走入花园」开启步行，WASD/方向键移动，Shift 快走，拖动环顾，Esc 返回鸟瞰。手机提供方向按钮。五个导览地点改变同一场景中的观景或步行位置，不会卸载其他地标或切换地图。溪流通过实体木桥跨越，地标与水道具有简化碰撞；房屋内部尚未制作。

核心地标沿用原图的相对关系，周边增加起伏草坡、混合花圃、树林与两条花径、木桥、长椅和暖色路灯。花草使用实例化，叶片随风摆动，有蝴蝶、花粉、溪流波纹和局部光圈。地面、石头和木材增加固定表面纹理，天空有渐变、云层与夜间星点。晴日、黄昏、月夜、细雨由用户切换，目前没有自动循环昼夜。

`manifest.json` 的 ready 只统计实际成功解析并通过 SHA256 校验的地标 GLB；pending 不会请求缺失模型。树林、蝴蝶和花卉等辅助资产不计入五项地标。树林复用 BabylonJS 的叶片裁切模型并在 Blender 调整，新增的酢浆草复用 Poly Haven 的 CC0 资产；其他花卉、蝴蝶与顶棚花藤的来源见 `public/assets/flower-garden/SOURCE.txt`。天空使用插画全景背景，旧版辅助云团当前未加载。天气、导览、行走与原版音频有真实浏览器验证，美术质量仍需继续迭代，技术通过不等于与原画一致。

网站 `MoleManor-Website.zip` 包含此页；原有 `MoleManor-Offline.html` 仅包含旧世界，花海未塞入该单文件。静态浏览不需要 API 密钥或 Blender。

## 造型与风格检查

本轮以熟悉的页游画风、色彩和氛围为准；核心地标保持可辨认，周边保留连贯的探索空间。保留奶油色墙面、珊瑚红屋顶、粉色与金色花朵。当前渲染采用 HDR 环境光、接触阴影、物理水面、植物背光近似与色彩调整，改动及其限制见 [渲染说明](../art-direction/flower-sea/rendering.md)。网站「地标」面板可打开完整素材鸣谢。

离线回读已发布的GLB，校验哈希、实际三角面数、贴图接缝之外的开放边和非流形边：

```bash
blender -b --python-exit-code 1 --python scripts/audit_flower_models.py
blender -b --python-exit-code 1 --python scripts/build_flower_atmosphere.py
```

第一条只检查现有文件，结果保存在 `artifacts/flower-model-audit.json`；第二条重建风格化辅助资产。封闭网格检查用于防止导出回归，不代表已经通过美术验收。仍需检查实际行走视角、近景、侧后方、五处导览镜头和不同天气；运行时同时记录辅助环境的加载失败，避免五项地标成功掩盖云层或植物未载入。粉花导览已使用指向实际地标的独立镜头，避免通用镜头钻进边界树林。

## 连片花海与黑森林扩展（2026-10-24）

允许根据美术效果适当改编。花海可探索边界从 77×113 米扩为 139×169 米，约为此前边界面积的 2.7 倍；保留地标与远方全尺寸花屋。新增南风花海、东侧花浪坡、溪西花谷、花丘远眺，四条地形花径和第二座木桥连接旧花园。新增约 14,000 株花卉实例组成重叠的自然花带；近景继续使用原花卉，中远景复用经 Blender 整理、保留 UV 的较少面数模型，共享原材质图集。地形此前已有较大背景范围，本次主要扩大实际可行走、可观赏花田的区域。

顶部可前往 `black-forest.html`，查看另一个独立可探索场景。黑森林的主地标采用 Three.js 程序几何与可复用的授权树林，不继续调用混元生成主景。
