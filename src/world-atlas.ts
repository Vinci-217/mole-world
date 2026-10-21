/** Classic browser-era names; the atlas layout and all 3D coordinates are authored here. */
export type RegionId = 'castle' | 'taotao-street' | 'love-church' | 'happy-farm' |
  'sunshine-ranch' | 'berry-jungle' | 'moraya-mountain' | 'mystery-lake' |
  'ram-academy' | 'outpost' | 'black-forest' | 'amusement-park';
export type RegionStatus = 'courtyard-prototype' | 'under-construction';
export type RegionBiome = 'town' | 'farmland' | 'meadow' | 'forest' | 'snow' | 'lake';
export interface AtlasSublocation {
  id: string;
  label: string;
  status: 'not-built' | 'outdoor-prototype';
  classicMapId?: number;
}
export interface WorldRegion {
  id: RegionId;
  name: string;
  label: string;
  subtitle: string;
  description: string;
  biome: RegionBiome;
  /** Percentages in a schematic atlas; these are not an original game map. */
  mapPosition: readonly [number, number];
  /** Region origin, in metres. Local region coordinates add to this translation. */
  worldPosition: readonly [number, number, number];
  color: string;
  landmarks: readonly string[];
  sublocations: readonly AtlasSublocation[];
  status: RegionStatus;
  evidence: 'name-listed' | 'version-uncertain';
}

export const ATLAS_ORIGIN = [50, 50] as const;
export const ATLAS_METRES_PER_PERCENT = [12, 9] as const;
export function atlasPosition([x, , z]: readonly [number, number, number]): [number, number] {
  return [ATLAS_ORIGIN[0] + x / ATLAS_METRES_PER_PERCENT[0], ATLAS_ORIGIN[1] + z / ATLAS_METRES_PER_PERCENT[1]];
}
const builtOutdoorSites=new Set(['rainbow-falls','strength-spring','berry-passage','moraya-rink','moraya-summit','ram-sports','knight-training','race-track']);
const place = (id: string, label: string, classicMapId: number): AtlasSublocation => ({ id, label, classicMapId, status: builtOutdoorSites.has(id)?'outdoor-prototype':'not-built' });
type RegionInput = Omit<WorldRegion, 'label' | 'mapPosition'>;
const region = (entry: RegionInput): WorldRegion => ({ ...entry, label: entry.name, mapPosition: atlasPosition(entry.worldPosition) });

export const WORLD_REGIONS: readonly WorldRegion[] = [
  region({ id: 'castle', name: '摩尔城堡', subtitle: '红瓦尖塔 · 王冠大门', biome: 'town', color: '#c58b65',
    description: '以经典城堡轮廓为参考的前庭原型。现有花园、喷泉与石桥是本项目的空间安排；城堡室内尚未建成。',
    worldPosition: [0, 0, 0], landmarks: ['红瓦尖塔', '金色钟面', '王冠入口'], status: 'courtyard-prototype', evidence: 'name-listed',
    sublocations: [place('castle-hall', '城堡大厅', 15), place('castle-study', '城堡书房', 32), place('castle-underground', '城堡地下', 14)] }),
  region({ id: 'taotao-street', name: '淘淘乐街', subtitle: '商店街 · 橱窗与招牌', biome: 'town', color: '#cc966f',
    description: '经典页游商店街主题的户外重构区域。店铺外形与街巷布局仍待逐项核对，室内商店尚未建成。',
    worldPosition: [-180, 0, 0], landmarks: ['商店橱窗', '街边招牌'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('item-shop', '道具店', 19), place('clothes-shop', '服装店', 20), place('pet-shop', '宠物店', 21)] }),
  region({ id: 'love-church', name: '爱心教堂', subtitle: '爱心街区 · 温暖的钟声', biome: 'town', color: '#d1b29c',
    description: '以爱心教堂及公共服务地点为主题的重构区域。关联地点采用项目导览分组，不能据此判断原版街区的精确位置。',
    worldPosition: [180, 0, 0], landmarks: ['教堂轮廓', '花园步道'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('church-interior', '爱心教堂内', 18), place('police-station', '摩尔庄园警署', 44), place('guide-club', '爱心向导社', 46), place('care-room', '爱心救治室', 70)] }),
  region({ id: 'happy-farm', name: '开心农场', subtitle: '田垄 · 农场发明屋', biome: 'farmland', color: '#c5ac68',
    description: '以耕地、农场工具与发明屋为主题的户外原型。种植玩法及屋内场景尚未建成。',
    worldPosition: [-180, 0, 180], landmarks: ['田垄', '农场工具'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('invention-house', '农场发明屋', 27), place('mason-house', '梅森小屋', 56)] }),
  region({ id: 'sunshine-ranch', name: '阳光牧场', subtitle: '草坡 · 木栅栏', biome: 'meadow', color: '#b0bb78',
    description: '以开阔草场和木栅栏为主题的牧场原型。动物养成及阳光草舍室内尚未建成。',
    worldPosition: [0, 0, 180], landmarks: ['草场', '木栅栏'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('sunshine-cottage', '阳光草舍', 79)] }),
  region({ id: 'berry-jungle', name: '浆果丛林', subtitle: '林间浆果 · 瀑布水声', biome: 'forest', color: '#849e7d',
    description: '以浆果、浓密植被与林间水体为主题的原型。已补入相连的秘道、瀑布与泉水初版，原版布局与美术仍待核对。',
    worldPosition: [180, 0, 180], landmarks: ['浆果灌木', '林间水体'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('berry-passage', '浆果秘道', 40), place('rainbow-falls', '彩虹瀑布', 42), place('strength-spring', '力量之泉', 43)] }),
  region({ id: 'moraya-mountain', name: '摩尔拉雅雪山', subtitle: '山脚 · 冰场 · 雪峰', biome: 'snow', color: '#b5ced2',
    description: '把山脚、滑冰场与山顶归入同一导览区域的雪山原型。各层之间的原版路线及季节差异尚待核对。',
    worldPosition: [0, 0, -180], landmarks: ['雪松', '雪峰', '冰面'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('moraya-foot', '摩尔拉雅山脚', 4), place('moraya-rink', '摩尔拉雅滑冰场', 5), place('moraya-summit', '摩尔拉雅山顶', 37), place('hunter-cabin', '猎人小屋', 34)] }),
  region({ id: 'mystery-lake', name: '神秘湖', subtitle: '湖面 · 木码头', biome: 'lake', color: '#83b1b1',
    description: '以湖水、岸边植被和码头为主题的原型。湖区的版本差异、钓鱼玩法与子地图尚未完成。',
    worldPosition: [360, 0, 180], landmarks: ['湖面', '木码头'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('mystery-dock', '神秘湖码头', 176)] }),
  region({ id: 'ram-academy', name: '拉姆学院', subtitle: '校园 · 拉姆课堂', biome: 'town', color: '#c6b1cc',
    description: '以拉姆校园为主题的户外原型。运动场已连接到校园东侧；课程、课堂和教导处仍待制作。',
    worldPosition: [180, 0, -180], landmarks: ['校园入口', '拉姆主题庭园'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('ram-classroom', '拉姆课堂', 52), place('academy-office', '学院教导处', 53), place('ram-sports', '拉姆运动场', 68)] }),
  region({ id: 'outpost', name: '前哨站', subtitle: '骑士主题 · 边境瞭望', biome: 'meadow', color: '#a3a284',
    description: '以前哨与骑士设施为主题的户外原型。要塞、训练玩法和秘密基地尚未建成。',
    worldPosition: [-180, 0, -180], landmarks: ['瞭望设施', '骑士旗帜'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('knight-training', '骑士训练场', 62), place('fortress-top', '骑士要塞塔顶', 63), place('knight-base', '骑士秘密基地', 64)] }),
  region({ id: 'black-forest', name: '黑森林', subtitle: '幽深林地 · 年代待核对', biome: 'forest', color: '#667d78',
    description: '经典故事中的黑森林主题预留区域。当前查看的地图名表未确认该名称及子地图，不能认定为所有年代常驻可达区域。',
    worldPosition: [-360, 0, -180], landmarks: ['幽深树林', '林间雾气'], status: 'under-construction', evidence: 'version-uncertain', sublocations: [] }),
  region({ id: 'amusement-park', name: '游乐场', subtitle: '西部与东部 · 游戏时光', biome: 'town', color: '#ccad82',
    description: '西部与东部游乐场的合并导览入口。该分区是项目组织方式，原版分图、小游戏和设施尚未分别建成。',
    worldPosition: [-360, 0, 0], landmarks: ['游乐设施', '彩色旗帜'], status: 'under-construction', evidence: 'name-listed',
    sublocations: [place('west-playground', '西部游乐场', 6), place('east-playground', '东部游乐场', 7), place('game-cabin', '游戏小屋', 22), place('race-track', '摩摩赛车场', 36)] }),
];

export const worldRegions = WORLD_REGIONS;
export const REGION_BY_ID: Readonly<Record<RegionId, WorldRegion>> = Object.fromEntries(WORLD_REGIONS.map(entry => [entry.id, entry])) as Record<RegionId, WorldRegion>;
export function regionWorldPosition(id: RegionId, local: readonly [number, number, number] = [0, 0, 0]): [number, number, number] {
  const origin = REGION_BY_ID[id].worldPosition;
  return [origin[0] + local[0], origin[1] + local[1], origin[2] + local[2]];
}
