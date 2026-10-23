/** Author tree skeletons with EZ-Tree (MIT), then refine/export in Blender.
 * Pinned upstream and license: scripts/vendor/ez-tree/LICENSE; woodland/sources.json.
 * This tool runs offline after dependencies have been installed; no paid APIs.
 */
import {build} from 'esbuild';
import {mkdirSync,writeFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
await build({entryPoints:['scripts/vendor/ez-tree/tree.js'],bundle:true,platform:'node',format:'esm',external:['three'],outfile:'artifacts/art-rebuild/tree-generator.mjs'});
const {Tree}=await import(pathToFileURL(resolve('artifacts/art-rebuild/tree-generator.mjs')));
const variants=[];
for(const [id,preset,seed,height] of [['oak','Oak Medium',8237,21],['ash','Ash Medium',25804,24],['young','Oak Small',12885,12]]){
  const tree=new Tree();tree.loadPreset(preset);
  tree.options.seed=seed;
  // Build a tall woodland crown with finer individual leaves, an asymmetric
  // habit, and a low first fork, rather than stretching the finished model.
  tree.options.branch.start[1]=id==='ash'?.29:.35;
  tree.options.branch.gnarliness[0]=.07;
  tree.options.branch.force.strength=.018;
  tree.options.branch.length[0]*=.85;
  tree.options.leaves.size*=.85;
  tree.options.leaves.count=28;
  tree.options.branch.segments[0]=12;
  tree.options.branch.sections[0]=18;
  tree.generate();
  tree.leavesMesh.geometry.computeBoundingBox();tree.branchesMesh.geometry.computeBoundingBox();
  const scale=height/Math.max(tree.leavesMesh.geometry.boundingBox.max.y,tree.branchesMesh.geometry.boundingBox.max.y);
  for(const [lod,detail] of [['near',{}],['far',{sectionStride:3,segmentFactor:.65,leafStride:3,leafScale:1.35,billboard:'single'}]]){
    const geometry=tree.createGeometry(detail);
    const meshes=Object.entries(geometry).map(([kind,g])=>({kind,positions:Array.from(g.attributes.position.array),normals:Array.from(g.attributes.normal.array),uvs:Array.from(g.attributes.uv.array),indices:Array.from(g.index.array)}));
    variants.push({id,lod,height,scale,options:tree.options,meshes});
  }
}
mkdirSync('artifacts/woodland',{recursive:true});
writeFileSync('artifacts/woodland/skeletons.json',JSON.stringify(variants));
console.log('Authored six tree LODs:',variants.map(v=>v.id+' '+v.lod+' '+v.meshes.reduce((n,m)=>n+m.indices.length/3,0)+' triangles').join(', '));
