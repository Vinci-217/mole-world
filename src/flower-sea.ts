import './flower-sea.css';
import * as T from 'three';
import { Soundscape } from './audio';
import { createFlowerSeaScene, flowerGroundHeight, type FlowerManifest, type FlowerSceneStats, type FlowerWeather } from './flower-sea-scene';

const element = <E extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id)! as E;
const events = new AbortController();
const audio = new Soundscape();
let world: Awaited<ReturnType<typeof createFlowerSeaScene>> | undefined;
let disposed = false;
let currentManifest: FlowerManifest | undefined;
const markerNodes: { element: HTMLElement; position: T.Vector3; assetId: string }[] = [];
const projection = new T.Vector3();
const modelingInputs = [
  ['巨型粉花', new URL('../art-direction/flower-sea/inputs/pink-portal.png', import.meta.url).href],
  ['藤蔓拱门', new URL('../art-direction/flower-sea/inputs/vine-arch.png', import.meta.url).href],
  ['红顶小屋', new URL('../art-direction/flower-sea/inputs/cottage.png', import.meta.url).href],
  ['框景古树', new URL('../art-direction/flower-sea/inputs/ancient-tree.png', import.meta.url).href],
  ['空中花藤', new URL('../art-direction/flower-sea/inputs/flowering-vine.png', import.meta.url).href],
];
for (const [label, url] of modelingInputs) {
  const figure = document.createElement('figure');
  const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener';
  const image = document.createElement('img'); image.src = url; image.alt = `${label}独立建模参考，非3D模型`; image.loading = 'lazy';
  link.append(image); const caption = document.createElement('figcaption'); caption.textContent = label;
  figure.append(link, caption); element('flower-input-grid').append(figure);
}

function showError(message: string) {
  element('flower-error').textContent = message;
  element('flower-error').hidden = false;
  element('flower-loading').hidden = true;
}

function setReferenceVisibility(visible: boolean) {
  element('flower-reference').hidden = !visible;
  element('flower-reference-toggle').setAttribute('aria-pressed', String(visible));
}

function setModelsVisibility(visible: boolean) {
  element('flower-models').hidden = !visible;
  element('flower-models-toggle').setAttribute('aria-pressed', String(visible));
  element('flower-markers').hidden = !visible;
}

function updateAssetState(stats: FlowerSceneStats) {
  if (!currentManifest) return;
  const total = currentManifest.assets.length;
  const missing = total - stats.loaded.length;
  const awaitingDownload = currentManifest.assets.filter(asset => asset.generationState === 'generated' && !stats.loaded.includes(asset.id)).length;
  const sceneLabel = stats.loaded.length ? '3D 场景' : '布局预览';
  element('flower-progress').textContent = missing > 0
    ? `${sceneLabel} · 地标模型 ${stats.loaded.length}/${total} 就绪${awaitingDownload ? ` · ${awaitingDownload} 项已生成待下载` : ''}${stats.failed.length ? ` · ${stats.failed.length} 项加载失败` : ''}`
    : `3D 场景 · ${stats.loaded.length} 项地标模型已就绪`;
  const list = element('flower-model-list'); list.replaceChildren();
  for (const asset of currentManifest.assets) {
    const loaded = stats.loaded.includes(asset.id), failure = stats.failed.find(f => f.id === asset.id);
    const row = document.createElement('li'); row.dataset.assetId = asset.id; row.dataset.state = loaded ? 'ready' : failure ? 'error' : 'pending';
    const label = document.createElement('span'); label.textContent = asset.label;
    const generationLabels = {
      'not-submitted': '待生成', submitted: '任务已提交', generating: '混元生成中',
      generated: '已生成 · 待下载', downloaded: '待整理模型', failed: '生成失败', 'needs-review': '提交结果待核对',
    };
    const status = document.createElement('span'); status.textContent = loaded ? '模型就绪' : failure ? '加载失败' : asset.state === 'ready' ? '加载中' : generationLabels[asset.generationState ?? 'not-submitted'];
    if (failure) row.title = failure.message;
    row.append(label, status); list.append(row);
  }
  for (const marker of markerNodes) marker.element.dataset.loaded = String(stats.loaded.includes(marker.assetId));
}

function validateManifest(value: unknown): asserts value is FlowerManifest {
  if (!value || typeof value !== 'object') throw new Error('地图清单格式不正确');
  const data = value as FlowerManifest;
  if (data.version !== 1 || !Array.isArray(data.assets) || !Array.isArray(data.placements) || !data.sourceReference?.path) throw new Error('地图清单缺少必要内容');
  const ids = new Set<string>();
  for (const asset of data.assets) {
    if (!asset.id || !asset.label || !['ready', 'pending'].includes(asset.state) || !Number.isFinite(asset.height) || asset.height <= 0 || ids.has(asset.id)) throw new Error('地图模型条目不正确');
    ids.add(asset.id);
    if (asset.state === 'ready' && !asset.path) throw new Error('就绪的模型缺少文件路径');
  }
  for (const placement of data.placements) {
    if (!ids.has(placement.assetId) || placement.position?.length !== 3 || !placement.position.every(Number.isFinite)) throw new Error('地图地标位置不正确');
  }
}

async function start() {
  try {
    const response = await fetch('./assets/flower-sea/manifest.json', { signal: events.signal });
    if (!response.ok) throw new Error(`地图清单暂时无法读取 (${response.status})`);
    const manifest: unknown = await response.json(); validateManifest(manifest); currentManifest = manifest;
    const reference = new URL(manifest.sourceReference.path, new URL('./', location.href));
    if (reference.origin !== location.origin) throw new Error('原图路径必须在当前网站内');
    element<HTMLImageElement>('flower-reference-image').src = reference.href;
    element('flower-reference-caption').textContent = manifest.sourceReference.title;
    for (const asset of manifest.assets) {
      const placement = manifest.placements.find(p => p.assetId === asset.id);
      if (!placement || asset.state === 'ready') continue;
      const marker = document.createElement('span'); marker.className = 'flower-marker';
      marker.textContent = asset.label; marker.dataset.loaded = 'false';
      element('flower-markers').append(marker);
      const [x, y, z] = placement.position;
      markerNodes.push({ element: marker, position: new T.Vector3(x, flowerGroundHeight(x, z) + y + .7, z), assetId: asset.id });
    }
    element('flower-markers').hidden = true;
    world = await createFlowerSeaScene(element('flower-canvas'), manifest, updateAssetState);
    if (disposed) { world.dispose(); return; }
    world.onFrame(() => {
      const bounds = element('flower-canvas').getBoundingClientRect();
      for (const marker of markerNodes) {
        projection.copy(marker.position).project(world!.camera);
        marker.element.hidden = marker.element.dataset.loaded === 'true' || projection.z > 1 || projection.z < -1 || Math.abs(projection.x) > 1.15 || Math.abs(projection.y) > 1.15;
        marker.element.style.left = `${(projection.x * .5 + .5) * bounds.width}px`;
        marker.element.style.top = `${(-projection.y * .5 + .5) * bounds.height}px`;
      }
    });
    world.renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault(); showError('浏览器的三维渲染已暂停。请刷新页面；若仍然无法打开，请在 Chrome 或 Edge 中开启硬件加速。');
    }, { signal: events.signal });
    element('flower-loading').hidden = true;
    Object.defineProperty(window, '__flowerSea', { configurable: true, get: () => Object.freeze({
      ready: world?.stats.ready ?? false,
      loaded: [...(world?.stats.loaded ?? [])], pending: [...(world?.stats.pending ?? [])],
      failed: world?.stats.failed.map(item => ({ ...item })) ?? [],
      triangles: world?.stats.triangles ?? 0, draws: world?.stats.draws ?? 0,
      weather: world?.stats.weather ?? 'day',
      camera: world?.camera.position.toArray(), target: world?.controls.target.toArray(),
      assetCount: manifest.assets.length,
    }) });
  } catch (error) {
    if (disposed) return;
    element('flower-progress').textContent = '场景尚未载入';
    showError(`${error instanceof Error ? error.message : '场景加载失败'}。请刷新重试。此场景需要支持 WebGL 2 的浏览器。`);
    console.error('Flower sea scene:', error);
  }
}

element('flower-reference-toggle').addEventListener('click', () => setReferenceVisibility(element('flower-reference').hidden), { signal: events.signal });
element('flower-inputs-toggle').addEventListener('click', () => element<HTMLDialogElement>('flower-inputs').showModal(), { signal: events.signal });
element('flower-inputs-close').addEventListener('click', () => element<HTMLDialogElement>('flower-inputs').close(), { signal: events.signal });
element('flower-reference-close').addEventListener('click', () => setReferenceVisibility(false), { signal: events.signal });
element('flower-models-toggle').addEventListener('click', () => setModelsVisibility(element('flower-models').hidden), { signal: events.signal });
element('flower-models-close').addEventListener('click', () => setModelsVisibility(false), { signal: events.signal });
element('flower-reset').addEventListener('click', () => world?.resetView(), { signal: events.signal });
element('flower-weather').addEventListener('change', event => {
  const value = (event.target as HTMLSelectElement).value as FlowerWeather;
  if (!['day', 'dusk', 'rain'].includes(value)) return;
  world?.setWeather(value); audio.setWeather(value === 'rain' ? 'rain' : 'clear');
}, { signal: events.signal });
element('flower-sound').addEventListener('click', async () => {
  const button = element<HTMLButtonElement>('flower-sound'); button.disabled = true;
  try {
    const playing = await audio.toggle();
    button.setAttribute('aria-pressed', String(playing)); button.innerHTML = playing ? '♪ <span>音乐已开启</span>' : '♪ <span>开启音乐</span>';
  } catch { button.textContent = '音乐暂不可用'; }
  finally { button.disabled = false; }
}, { signal: events.signal });

function dispose() {
  if (disposed) return; disposed = true;
  events.abort(); world?.dispose(); audio.dispose();
  delete (window as unknown as Record<string, unknown>).__flowerSea;
}
window.addEventListener('pagehide', event => { if (!event.persisted) dispose(); }, { signal: events.signal });
window.addEventListener('beforeunload', dispose, { signal: events.signal });
void start();
