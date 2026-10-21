import type { RegionId } from './world-atlas';
export type WorldSite={id:string;name:string;region:RegionId;position:readonly[number,number];classicMapId:number;kind:'falls'|'spring'|'passage'|'rink'|'summit'|'sports'|'training'|'race'};
/** Authored outdoor extensions; names are sourced, geometry is an original interpretation. */
export const WORLD_SITES:readonly WorldSite[]=[
  {id:'rainbow-falls',name:'彩虹瀑布',region:'berry-jungle',position:[242,264],classicMapId:42,kind:'falls'},
  {id:'strength-spring',name:'力量之泉',region:'berry-jungle',position:[119,267],classicMapId:43,kind:'spring'},
  {id:'berry-passage',name:'浆果秘道',region:'berry-jungle',position:[127,137],classicMapId:40,kind:'passage'},
  {id:'moraya-rink',name:'摩尔拉雅滑冰场',region:'moraya-mountain',position:[-57,-187],classicMapId:5,kind:'rink'},
  {id:'moraya-summit',name:'摩尔拉雅山顶',region:'moraya-mountain',position:[5,-288],classicMapId:37,kind:'summit'},
  {id:'ram-sports',name:'拉姆运动场',region:'ram-academy',position:[250,-200],classicMapId:68,kind:'sports'},
  {id:'knight-training',name:'骑士训练场',region:'outpost',position:[-244,-237],classicMapId:62,kind:'training'},
  {id:'race-track',name:'摩摩赛车场',region:'amusement-park',position:[-425,101],classicMapId:36,kind:'race'},
];
export const SITE_BY_ID=Object.fromEntries(WORLD_SITES.map(site=>[site.id,site]));
export const WORLD_TRAILS:{site:string;points:readonly(readonly[number,number])[]}[]=[
  {site:'rainbow-falls',points:[[180,210],[213,230],[224,248],[226,278],[242,279]]},
  {site:'strength-spring',points:[[180,210],[149,235],[140,249],[139,281],[119,280]]},
  {site:'berry-passage',points:[[180,210],[142,213],[118,180],[120,151],[127,150]]},
  {site:'moraya-rink',points:[[0,-150],[-38,-151],[-57,-163],[-57,-172]]},
  {site:'moraya-summit',points:[[0,-150],[35,-185],[62,-223],[56,-248],[29,-267],[5,-288]]},
  {site:'ram-sports',points:[[180,-150],[221,-148],[250,-168],[250,-176]]},
  {site:'knight-training',points:[[-180,-150],[-222,-161],[-244,-191],[-244,-218]]},
  {site:'race-track',points:[[-360,30],[-390,54],[-425,63],[-425,81]]},
];
export function siteArrival(site:WorldSite):[number,number]{const trail=WORLD_TRAILS.find(t=>t.site===site.id)!;return [...trail.points[trail.points.length-1]];}
