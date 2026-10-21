import './atlas.css';
import { WORLD_REGIONS } from './world-atlas';
import { WORLD_ROADS } from './world-layout';
import { SITE_BY_ID } from './world-sites';

type AtlasRegion = (typeof WORLD_REGIONS)[number];
const biomeNames: Record<AtlasRegion['biome'], string> = {
  town: '街区与庭园', farmland: '田野与耕地', meadow: '草坡与原野',
  forest: '树林与秘境', snow: '雪峰与冰原', lake: '湖泊与水岸',
};

const compass = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 38 26 59 32 38 38 32 59 26 38 5 32 26 26Z" fill="none" stroke="currentColor"/><path d="M32 5 38 26 32 32 26 26Z" fill="currentColor"/><path d="M32 32 38 38 32 59Z" fill="currentColor" opacity=".45"/><circle cx="32" cy="32" r="3" fill="currentColor"/></svg>`;
const arrow = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/** An illustrated, deliberately schematic atlas of the regions built in this project. */
export class WorldAtlas {
  private readonly dialog = document.createElement('dialog');
  private selected: AtlasRegion = WORLD_REGIONS[0];
  private currentId: string = WORLD_REGIONS[0].id;
  private readonly regionButtons = new Map<string, HTMLButtonElement[]>();
  private readonly onTravel: (id: string, mode:'walk'|'fast') => void;

  constructor(onTravel: (id: string, mode:'walk'|'fast') => void,onOverview?:()=>void) {
    this.onTravel = onTravel;
    this.dialog.id = 'world-atlas';
    this.dialog.className = 'atlas-dialog';
    this.dialog.setAttribute('aria-labelledby', 'atlas-title');
    this.dialog.setAttribute('aria-describedby', 'atlas-introduction');
    this.dialog.innerHTML = `
      <div class="atlas-shell">
        <header class="atlas-header">
          <div class="atlas-brand-mark">${compass}</div>
          <div class="atlas-heading"><span class="atlas-overline">MOLE MANOR · WORLD ATLAS</span><h2 id="atlas-title">庄园世界地图</h2><p id="atlas-introduction">循着记忆里的小路，去下一个地方看看。</p></div>
          <div class="atlas-header-note"><span>12 个地区 · 8 处子地点</span><small>同一世界 · 道路相连</small></div>
          <button class="atlas-close dialog-close" type="button" aria-label="关闭世界地图"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
        </header>
        <div class="atlas-content">
          <nav class="atlas-directory" aria-label="选择探索地点">
            <div class="atlas-section-heading"><span>目的地</span><span>01 — 12</span></div>
            <div class="atlas-region-list"></div>
            <p class="atlas-directory-note"><span>✦</span> 选中地点，沿路前往或快速到达。</p>
          </nav>
          <section class="atlas-map-panel" aria-label="庄园连续世界图">
            <div class="atlas-map-top"><span><i></i> 道路连接全部 12 个户外区域</span><span>连续世界</span></div>
            <div class="atlas-map-canvas">
              ${this.mapIllustration()}
              <div class="atlas-map-sites"></div>
            </div>
            <div class="atlas-map-bottom"><div class="atlas-map-key"><span><i class="atlas-key-current"></i> 当前位置</span><span><i class="atlas-key-route"></i> 实际道路</span></div><div class="atlas-compass">${compass}<span>N</span></div></div>
            <p class="atlas-map-caption">经典地点 · 地形布局为本项目重构，非原版地图</p>
          </section>
          <aside class="atlas-preview" aria-label="选中地点介绍">
            <div class="atlas-preview-art" aria-hidden="true"><span class="atlas-art-orbit"></span><div class="atlas-preview-icon"></div><span class="atlas-art-sprig atlas-art-sprig-left">✧</span><span class="atlas-art-sprig atlas-art-sprig-right">✦</span><span class="atlas-art-horizon"></span><span class="atlas-preview-biome"></span></div>
            <div class="atlas-preview-copy" aria-live="polite" aria-atomic="true">
              <div class="atlas-preview-eyebrow"><span class="atlas-place-number"></span><span class="atlas-phase"></span></div>
              <h3 class="atlas-place-name"></h3><p class="atlas-place-subtitle"></p><div class="atlas-sublocations" aria-label="区域内子地点"></div><p class="atlas-place-description"></p>
              <div class="atlas-landmarks-heading">在这里寻找</div><ul class="atlas-landmarks"></ul>
              <p class="atlas-prototype-note"></p>
            </div>
            <div class="atlas-travel-area"><span class="atlas-current-note"></span><button class="atlas-travel" type="button"><span>沿路前往</span>${arrow}</button><button class="atlas-fast" type="button">快速前往 · 跳过路程</button><p>步行无需加载或切换场景</p></div>
          </aside>
        </div>
        <div class="atlas-footer"><button class="atlas-overview-world" type="button">俯瞰全境 ↗</button><span>把熟悉的地方，一点点重新搭起来。</span><span>地点场景初版 · 持续细化中</span></div>
      </div>`;
    document.body.append(this.dialog);
    this.createLocations();
    this.dialog.querySelector('.atlas-overview-world')!.addEventListener('click',()=>{this.close();onOverview?.();});
    this.dialog.querySelector<HTMLButtonElement>('.atlas-close')!.addEventListener('click', () => this.close());
    this.dialog.querySelector<HTMLButtonElement>('.atlas-travel')!.addEventListener('click', () => {
      const id = this.selected.id;
      this.onTravel(id,'walk');
      this.close();
    });
    this.dialog.querySelector<HTMLButtonElement>('.atlas-fast')!.addEventListener('click',()=>{this.onTravel(this.selected.id,'fast');this.close();});
    this.select(this.selected);
  }

  open(activeId: string = this.currentId): void {
    this.currentId = WORLD_REGIONS.find(region => region.id === activeId)?.id ?? WORLD_REGIONS[0].id;
    this.select(WORLD_REGIONS.find(region => region.id === this.currentId)!);
    if (!this.dialog.open) this.dialog.showModal();
  }

  close(): void { this.dialog.close(); }

  dispose(): void { this.close(); this.dialog.remove(); }

  private createLocations(): void {
    const list = this.dialog.querySelector('.atlas-region-list')!;
    const sites = this.dialog.querySelector('.atlas-map-sites')!;
    WORLD_REGIONS.forEach((region, index) => {
      const listButton = document.createElement('button');
      listButton.type = 'button';
      listButton.className = 'atlas-region';
      listButton.dataset.region = region.id;
      listButton.innerHTML = `<span class="atlas-region-index">${String(index + 1).padStart(2, '0')}</span><span class="atlas-region-copy"><strong></strong><small></small></span><span class="atlas-region-marker" aria-hidden="true">${arrow}</span>`;
      listButton.querySelector('strong')!.textContent = region.name;
      listButton.querySelector('small')!.textContent = biomeNames[region.biome];
      listButton.addEventListener('click', () => this.select(region));
      list.append(listButton);

      const pin = document.createElement('button');
      pin.type = 'button';
      pin.className = 'atlas-pin';
      pin.dataset.region = region.id;
      pin.style.left = `${region.mapPosition[0]}%`;
      pin.style.top = `${region.mapPosition[1]}%`;
      pin.setAttribute('aria-label', `在地图上选择${region.name}`);
      pin.innerHTML = `<span class="atlas-pin-art">${landmarkIcon(region.id)}</span><span class="atlas-pin-label"></span><span class="atlas-pin-current" aria-hidden="true"></span>`;
      pin.querySelector('.atlas-pin-label')!.textContent = region.name;
      pin.addEventListener('click', () => this.select(region));
      sites.append(pin);
      this.regionButtons.set(region.id, [listButton, pin]);
    });
  }

  private select(region: AtlasRegion): void {
    this.selected = region;
    for (const [id, buttons] of this.regionButtons) {
      for (const button of buttons) {
        button.classList.toggle('is-selected', id === region.id);
        button.classList.toggle('is-current', id === this.currentId);
        button.setAttribute('aria-pressed', String(id === region.id));
        if (id === this.currentId) button.setAttribute('aria-current', 'location');
        else button.removeAttribute('aria-current');
      }
    }
    const write = (selector: string, text: string) => { this.dialog.querySelector(selector)!.textContent = text; };
    write('.atlas-place-number', `地点 ${String(WORLD_REGIONS.indexOf(region) + 1).padStart(2, '0')}`);
    write('.atlas-phase', region.id === 'castle' ? '城堡细化中' : '场景初版');
    write('.atlas-place-name', region.name);
    write('.atlas-place-subtitle', region.subtitle);
    write('.atlas-place-description', region.description);
    write('.atlas-preview-biome', biomeNames[region.biome]);
    write('.atlas-prototype-note', region.id === 'castle' ? '城堡前庭已有建筑、花园与石桥，细节仍在完善。' : '已连接到连续世界，可沿道路走入。建筑、植被和细节仍在完善。');
    write('.atlas-current-note', region.id === this.currentId ? '你现在就在这里' : '下一站，去看看');
    this.dialog.querySelector('.atlas-preview-icon')!.innerHTML = landmarkIcon(region.id);
    const landmarks = this.dialog.querySelector('.atlas-landmarks')!;
    landmarks.replaceChildren(...region.landmarks.slice(0, 3).map(landmark => {
      const item = document.createElement('li');
      item.textContent = landmark;
      return item;
    }));
    const sublocations=this.dialog.querySelector('.atlas-sublocations')!;sublocations.replaceChildren();for(const sub of region.sublocations){const row=document.createElement('div');row.className='atlas-sublocation';const site=SITE_BY_ID[sub.id];if(site){const button=document.createElement('button');button.type='button';button.textContent=`${sub.label} →`;button.dataset.site=sub.id;button.addEventListener('click',()=>{this.onTravel(sub.id,'walk');this.close();});const fast=document.createElement('button');fast.type='button';fast.className='atlas-site-fast';fast.textContent='直达';fast.dataset.fastSite=sub.id;fast.setAttribute('aria-label',`快速前往${sub.label}`);fast.addEventListener('click',()=>{this.onTravel(sub.id,'fast');this.close();});row.append(button,fast);}else{row.textContent=`${sub.label} · 待搭建`;row.classList.add('not-built');}sublocations.append(row);}
    this.dialog.querySelector<HTMLElement>('.atlas-preview')!.style.setProperty('--region-color', region.color);
  }

  private mapIllustration(): string {
    return `<svg class="atlas-terrain" viewBox="0 0 1000 720" fill="none" aria-hidden="true">
      <defs>
        <pattern id="atlas-paper" width="52" height="52" patternUnits="userSpaceOnUse"><circle cx="8" cy="15" r=".8" fill="#927f55" opacity=".16"/><circle cx="36" cy="39" r=".65" fill="#927f55" opacity=".14"/><path d="m20 6 3 1m24 22 2-1M5 45l3 1" stroke="#927f55" stroke-opacity=".1"/></pattern>
        <pattern id="atlas-waves" width="66" height="30" patternUnits="userSpaceOnUse"><path d="M4 15q8-7 16 0t16 0" stroke="#658984" stroke-opacity=".23" stroke-width="1.3"/></pattern>
        <radialGradient id="atlas-water"><stop stop-color="#c9d8c2"/><stop offset="1" stop-color="#b4ccc2"/></radialGradient>
        <linearGradient id="atlas-land" x1="350" y1="110" x2="650" y2="650" gradientUnits="userSpaceOnUse"><stop stop-color="#d5d8a8"/><stop offset=".52" stop-color="#e5d8a6"/><stop offset="1" stop-color="#d9c998"/></linearGradient>
        <symbol id="atlas-tree" viewBox="0 0 30 44"><path d="M15 29v13" stroke="#667455" stroke-width="3"/><path d="M15 1 3 20h5L0 32h30L22 20h5Z" fill="#73876a" stroke="#536b56" stroke-width="1"/><path d="M15 3v28M9 19l6 4 8-5" stroke="#a9b68b" stroke-opacity=".6" stroke-width="1"/></symbol>
        <symbol id="atlas-hill" viewBox="0 0 55 32"><path d="M2 29Q17 2 28 10 40-8 53 29" fill="#b1ba8a" stroke="#9aaa7b" stroke-width="1.2"/><path d="M11 28q9-18 17-12" stroke="#d1d3a3" stroke-width="2"/></symbol>
        <symbol id="atlas-mountain" viewBox="0 0 70 70"><path d="m3 65 31-59 33 59Z" fill="#9aab99" stroke="#798f82" stroke-width="1.5"/><path d="m18 37 16-31 17 31-12-5-5 9-6-10Z" fill="#ecebd4"/><path d="m34 40 7 25H22Z" fill="#7f9585" opacity=".5"/></symbol>
      </defs>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-water)"/>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-waves)"/>
      <path d="M163 411C115 360 131 295 171 258 130 221 188 161 253 149 279 99 347 81 403 101 454 59 531 68 560 112 646 80 702 115 718 156 800 139 860 203 829 264 897 306 881 365 851 405 887 454 856 507 803 516 818 573 761 613 705 604 655 653 589 646 550 620 490 670 413 646 390 613 306 635 267 600 267 562 185 575 130 522 163 470 134 456 139 431 163 411Z" fill="#789b89" opacity=".18" stroke="#6f9588" stroke-width="23"/>
      <path d="M163 401C115 350 131 285 171 248 130 211 188 151 253 139 279 89 347 71 403 91 454 49 531 58 560 102 646 70 702 105 718 146 800 129 860 193 829 254 897 296 881 355 851 395 887 444 856 497 803 506 818 563 761 603 705 594 655 643 589 636 550 610 490 660 413 636 390 603 306 625 267 590 267 552 185 565 130 512 163 460 134 446 139 421 163 401Z" fill="url(#atlas-land)" stroke="#a5ac7d" stroke-width="2"/>
      <path d="M173 395C131 346 143 289 185 250M262 145q70-87 141-42M725 160q67-14 91 38M788 505q31 55-80 77M391 589q-71 24-108-35" stroke="#f0e7ba" stroke-width="3" stroke-linecap="round"/>
      <path d="M740 153q-47 61-8 110c26 40-34 67-17 117s82 54 45 94c-22 25-34 73-5 105" stroke="#91b8ac" stroke-width="25" stroke-linecap="round"/>
      <path d="M740 153q-47 61-8 110c26 40-34 67-17 117s82 54 45 94c-22 25-34 73-5 105" stroke="#c0d3bd" stroke-width="9" stroke-linecap="round" opacity=".6"/>
      <path d="M740 507q-21-39 26-61t62 21q35-1 31 36t-44 35q-30 29-56 3t-19-34Z" fill="#96b9ac" stroke="#7a9c91" stroke-width="1.5"/>
      <path d="M766 466q20-14 38 1m-40 42q18 9 32 1m12-26q15-7 27 4" stroke="#d4dfc5" stroke-width="3" stroke-linecap="round"/>
      <path d="M188 167q54-26 76 22t-12 79q-21-29-56-27t-29-34q-7-25 21-40Z" fill="#8b9c6e" opacity=".5"/>
      <path d="M629 452q-42 34-8 77t69 19q17-30 4-58t-65-38Z" fill="#9eac7a" opacity=".4"/>
      <path d="M403 416q29 1 27 31t-50 38q-31-15-22-43t45-26Z" fill="#d1ba80" opacity=".48"/>
      ${WORLD_ROADS.map(road=>{const points=road.points.map(([x,z])=>`${500+x/1.2},${360+z*.8}`).join(' ');return `<polyline points="${points}" stroke="#aa936c" stroke-opacity=".5" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${points}" stroke="#f5e5b7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;}).join('')}
      <g opacity=".9"><use href="#atlas-mountain" x="449" y="135" width="56" height="56"/><use href="#atlas-mountain" x="485" y="108" width="78" height="78"/><use href="#atlas-mountain" x="540" y="155" width="50" height="50"/></g>
      <g opacity=".78"><use href="#atlas-tree" x="176" y="155" width="23" height="36"/><use href="#atlas-tree" x="205" y="170" width="30" height="44"/><use href="#atlas-tree" x="155" y="183" width="28" height="42"/><use href="#atlas-tree" x="194" y="209" width="30" height="44"/><use href="#atlas-tree" x="227" y="206" width="25" height="40"/><use href="#atlas-tree" x="174" y="239" width="24" height="38"/><use href="#atlas-tree" x="230" y="259" width="22" height="33"/>
      <use href="#atlas-tree" x="607" y="457" width="23" height="36"/><use href="#atlas-tree" x="627" y="479" width="28" height="43"/><use href="#atlas-tree" x="688" y="530" width="23" height="36"/><use href="#atlas-tree" x="701" y="495" width="25" height="40"/><use href="#atlas-tree" x="671" y="478" width="24" height="38"/>
      <use href="#atlas-hill" x="735" y="312" width="56" height="33"/><use href="#atlas-hill" x="756" y="334" width="50" height="30"/><use href="#atlas-hill" x="351" y="530" width="55" height="33"/><use href="#atlas-hill" x="393" y="550" width="45" height="27"/></g>
      <g stroke="#ad9d6e" stroke-width="1.2" opacity=".55"><path d="m288 465 45 11-10 39-45-11Zm-4 13 45 11m-48 1 45 11m-35-34-10 39m22-36-10 39m22-36-10 39"/><path d="m363 361-11 22m-7-15 26 10m204-98 14-9m-9-2 8 18"/></g>
      <g fill="#8e9b6c" opacity=".65"><path d="m198 270 3-8 4 7 5-5-3 10m570 181 3-8 4 7 5-5-3 10m-370 110 3-8 4 7 5-5-3 10m146-358 3-8 4 7 5-5-3 10"/></g>
      <g fill="#b07e63" opacity=".72"><circle cx="645" cy="480" r="3"/><circle cx="653" cy="472" r="2"/><circle cx="693" cy="510" r="2.5"/><circle cx="617" cy="520" r="2"/></g>
      <path d="m721 493 22 2-2 17-22-2Z" fill="#d4c394" stroke="#b5a377"/><path d="m719 491 26 2m-28 17 26 2" stroke="#eee1b3" stroke-width="3"/>
      <g stroke="#698e84" opacity=".55" stroke-linecap="round"><path d="M75 230q8-8 16 0 8-8 16 0M855 570q8-8 16 0 8-8 16 0M108 546q8-8 16 0 8-8 16 0M833 104q8-8 16 0 8-8 16 0"/></g>
      <g fill="#7d9b8d" opacity=".5"><path d="m115 147 17-5 11 11-12 6-15-3Zm747 312 16-8 9 8-5 12-16-3ZM157 597l19-4 12 7-5 11-21 1Z"/></g>
      <rect x="1" y="1" width="998" height="718" rx="22" fill="url(#atlas-paper)"/>
      <path d="M28 65V28h37m870 0h37v37M28 655v37h37m870 0h37v-37" stroke="#8da28c" stroke-width="1.3" opacity=".8"/>
      <g fill="#6b8276" font-family="Georgia,serif" font-size="15" letter-spacing="5" opacity=".65"><text x="65" y="620" transform="rotate(-12 65 620)">M O L E  M A N O R</text></g>
    </svg>`;
  }
}

function landmarkIcon(id: string): string {
  const icons: Record<string, string> = {
    castle: `<path d="M13 45h38V22H13Z" fill="#e9d6ad"/><path d="M9 45h10V18H9Zm36 0h10V18H45ZM26 35h12V11H26Z" fill="#f1dfb9"/><path d="m6 19 8-14 8 14Zm36 0 8-14 8 14ZM23 12l9-11 9 11Z" fill="#a35c51"/><path d="M28 45V34q4-6 8 0v11" fill="#8b7658"/><path d="M14 24v6m36-6v6M32 17v6m-9 4v5m18-5v5" stroke="#9c8867" stroke-width="2"/><path d="M7 46h50" stroke="#8c9271" stroke-width="3"/>`,
    'taotao-street': `<path d="M7 46V24h22v22m4 0V17h22v29" fill="#dfc48d"/><path d="M3 25 17 13l15 12Zm27-7L44 6l15 12Z" fill="#ac7656"/><path d="M11 32h14m12-7h14" stroke="#f3e5bb" stroke-width="5"/><path d="M14 46V35h8v11m16 0V32h11v14" fill="#8b947b"/><path d="M5 47h53" stroke="#a49b70" stroke-width="3"/><path d="M9 29h18m8-8h18" stroke="#f5d6a6" stroke-width="3"/>`,
    'love-church': `<path d="M14 47V27l18-15 18 15v20Z" fill="#e9d9bf"/><path d="m10 29 22-19 22 19" stroke="#bc8d77" stroke-width="5"/><path d="M27 47V34a5 5 0 0 1 10 0v13" fill="#998675"/><circle cx="32" cy="26" r="4" fill="#bfa46f"/><path d="M32 2v10m-4-6h8" stroke="#b28f60" stroke-width="2.5"/><path d="M9 48h46" stroke="#a8a480" stroke-width="3"/><path d="M10 42h7m30 0h7" stroke="#8d9e75" stroke-width="6"/>`,
    'happy-farm': `<path d="M11 45V26h30v19" fill="#d2b679"/><path d="m7 27 19-16 19 16Z" fill="#b57f55"/><path d="M21 45V31h11v14" fill="#8b8060"/><path d="M7 47h49M44 36h15m-15 6h15m-13-12v17m10-17v17" stroke="#a79c6a" stroke-width="2"/><path d="M53 25V10m0 9-6-5m6-1 5-5m-5 16 6-5" stroke="#c29d54" stroke-width="2.5" stroke-linecap="round"/>`,
    'sunshine-ranch': `<path d="m24 45 3-25h14l3 25" fill="#e5d1a4"/><path d="m24 22 10-10 10 10Z" fill="#a48059"/><path d="m34 24-4-17m4 17 17-4M34 24l4 17m-4-17-17 4" stroke="#eee4c1" stroke-width="5"/><circle cx="34" cy="24" r="3" fill="#b49b6f"/><path d="M4 39h20m-20 6h20M8 33v16m12-16v16m22-10h18m-18 6h18m-14-12v16m11-16v16" stroke="#9c9c75" stroke-width="2"/>`,
    'berry-jungle': `<path d="M29 49V29m0 10-11-9m11 5 12-10" stroke="#8e8061" stroke-width="4"/><path d="M14 34C-1 23 12 9 23 13 28-1 46 3 47 16c16-2 19 18 4 22-7 6-16 4-22-1-5 4-11 3-15-3Z" fill="#8eaa78"/><path d="M18 20q10-9 22-3" stroke="#bdc599" stroke-width="2"/><g fill="#b67c78"><circle cx="16" cy="29" r="3.5"/><circle cx="35" cy="15" r="3.5"/><circle cx="45" cy="31" r="3.5"/></g><path d="M17 49h29" stroke="#a4ac7f" stroke-width="3"/>`,
    'moraya-mountain': `<path d="m4 47 21-37 15 26L49 19l13 28Z" fill="#a3b3a7"/><path d="m15 28 10-18 10 18-7-3-3 5-4-6Zm27 4 7-13 7 13-7-3Z" fill="#f0e8ce"/><path d="m25 30 8 17H14Z" fill="#809b90"/><path d="M6 49h53" stroke="#b4bfac" stroke-width="2"/><path d="M48 7V2m-3 3h6" stroke="#e6e4ca" stroke-width="1.5"/>`,
    'mystery-lake': `<path d="M3 37q15-11 29-3t29 2l-3 11H6Z" fill="#93b5a8"/><path d="M6 42q12-5 23 0t28 0" stroke="#c6d7bd" stroke-width="2"/><path d="M19 32h29l-7 8H25Z" fill="#b29468"/><path d="M32 8v24" stroke="#8d8b67" stroke-width="2"/><path d="m30 10-15 19h15Zm4 4 12 15H34Z" fill="#f2dfaf"/><path d="M8 29v-9m0 5-4-4m4 1 5-5m42 13V19" stroke="#8f9e78" stroke-width="2"/>`,
    'ram-academy': `<path d="M11 45V26h42v19" fill="#e3d1a2"/><path d="m6 26 26-15 26 15Z" fill="#9c9f79"/><path d="M18 29v13m12-13v13m12-13v13" stroke="#f5e5ba" stroke-width="4"/><path d="M7 46h50" stroke="#a3a184" stroke-width="4"/><path d="M26 15V5h13l-4 4 4 4H26" stroke="#b79766" stroke-width="1.5" fill="#bd8b62"/><path d="M15 43h34" stroke="#a8a385" stroke-width="2"/>`,
    outpost: `<path d="m16 45 5-23h23l4 23" fill="#c3b28a"/><path d="M18 24V12h28v12Z" fill="#e6d4ab"/><path d="m14 13 18-9 18 9Z" fill="#9c8766"/><path d="M23 16h5v6h-5m13-6h5v6h-5" fill="#8e9781"/><path d="m26 45 3-13h7l3 13" fill="#8e896e"/><path d="M8 46h48" stroke="#a5a584" stroke-width="3"/><path d="M7 33v13m49-13v13M7 36h11m28 0h10" stroke="#a49671" stroke-width="2"/>`,
    'black-forest': `<path d="M18 47V31m27 16V28M33 48V23" stroke="#8c886a" stroke-width="3"/><path d="m4 37 8-14H8l10-17 10 17h-4l8 14Z" fill="#718b70"/><path d="m31 36 8-14h-4L45 5l10 17h-4l8 14Z" fill="#627f69"/><path d="m19 29 8-13h-4L33 0l10 16h-4l8 13Z" fill="#899d7d"/><path d="M5 49h54" stroke="#9dab85" stroke-width="3"/>`,
    'amusement-park': `<circle cx="31" cy="23" r="18" stroke="#bb9b6a" stroke-width="2"/><path d="M31 5v36M13 23h36M18 10l26 26M18 36l26-26m-24 39 9-26h4l9 26" stroke="#bdab7b" stroke-width="2"/><g fill="#bd8b75"><rect x="27" y="1" width="8" height="7" rx="2"/><rect x="10" y="20" width="8" height="7" rx="2"/><rect x="44" y="20" width="8" height="7" rx="2"/></g><g fill="#91a58a"><rect x="15" y="6" width="7" height="7" rx="2"/><rect x="40" y="6" width="7" height="7" rx="2"/><rect x="15" y="34" width="7" height="7" rx="2"/><rect x="40" y="34" width="7" height="7" rx="2"/></g><circle cx="31" cy="23" r="3" fill="#ece0ba"/><path d="M14 49h34" stroke="#a5aa81" stroke-width="3"/>`,
  };
  return `<svg viewBox="0 0 64 52" fill="none" aria-hidden="true">${icons[id] ?? icons.castle}</svg>`;
}
