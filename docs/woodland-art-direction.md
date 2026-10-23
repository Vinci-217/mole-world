# Woodland art rebuild

The earlier forest used stretched duplicate trees, untextured green ground, uniformly large emissive mushrooms and three separate tubes as its hollow tree. The new pass rebuilds the silhouette and physical material hierarchy before adding effects.

## Sources studied

- [Three.js materials skill](https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-materials/SKILL.md), plus its lighting/textures/postprocessing guides (MIT). The guides target r186; this repository stays on r180. Applied compatible principles: color/albedo maps use sRGB, normal/roughness use linear data, nonmetallic surfaces retain roughness, IBL uses PMREM, and tone mapping is applied once after linear HDR effects.
- [EZ-Tree](https://github.com/dgreenheck/ez-tree), MIT. Reused its branching skeleton and matching geometry LODs; authored three variations and refined their root flare, crown proportions, bending and UVs in Blender. Actual PBR bark and leaf atlases replace the old stretched models.
- [SimonDev Quick_Grass](https://github.com/simondevyoutube/Quick_Grass), MIT, README and grass component read. It references a Ghost of Tsushima GDC grass presentation. Studied patching, segment budgets and independent wind phase; our curved blade meshes and shader are original. The GDC video itself was not reviewed.
- [Three.js procedural terrain example](https://github.com/mrdoob/three.js/blob/e27dfa95ae7f453b5d7a9a36ffdb563f7c9b529b/examples/webgpu_tsl_procedural_terrain.html): studied terrain height/slope/noise layering; no WebGPU migration or distant icosphere trees were introduced.

RDR2 is a reference for natural scale, directional light and restrained color relationships. Its assets and rendering implementation are not part of this project. This remains a browser scene prototype, not an AAA-equivalent renderer.

## Delivered changes

- Three Blender-refined tree variants with matching near/far geometry and fine cutout leaves; a continuous 19 m hollow oak with integrated roots and a walkable cavity.
- Original baked soil diffuse/normal material, muted path/moss color masks, clustered curved grass, tapered fallen leaves, pebbles, fallen logs and authored river stones.
- Ordinary mushrooms scaled to roughly 10–40 cm; a few accents reach about 1 m. Roughness is higher and emission is restrained.
- Low entry camera and selected sightlines, denser surrounding canopy and rising terrain behind the glade.
- Warm directional shadows / cooler skylight, real forest HDR, physically based visible sky and half-resolution shadowed light scattering. Default sunlit glade plus moon, mist and rain presets.
- Flower Sea shares the new forest library and soil material. Its old flattened hero crown is replaced with the authored oak; flowers/vines receive more restrained color and roughness, sky saturation is reduced and the entry camera is lowered.

## Validation

Build, Python navigation and asset tests, Blender glTF round-trip mesh checks, browser weather/navigation/mobile checks, and unaltered WebGL screenshots. Exact results are recorded in artifacts, not inferred from concept art.
