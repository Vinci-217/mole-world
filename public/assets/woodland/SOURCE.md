# Woodland assets and authoring

- Tree skeleton generator: Daniel Greenheck, EZ-Tree, MIT. Source vendored without executing install scripts, fixed at dcf309bd86bd521083d9c70f01f2de45fdc7c457. Upstream: https://github.com/dgreenheck/ez-tree
- This project's oak, ash and young-oak variants change branching starts, force, seed, leaf scale/count and trunk detail; Blender adds asymmetric bending, root flares, welded caps and corrected bark UVs. The near/far skeletons match; no vertical stretching is applied in the scene.
- Leaf atlases: EZ-Tree 1.1.0 npm distribution, MIT; full license LICENSE-EZ-Tree.txt. Oak/ash image files remain unchanged.
- Bark: Poly Haven bark_brown_02 and bark_willow_02, CC0, mirrored unchanged in EZ-Tree 1.1.0. Original URLs in TEXTURE-SOURCES.md. The newer ambientCG bark files listed by upstream TEXTURE-LICENSE.md are NOT used by this build.
- Forest environment: Forest Slope, HDRI Haven / Poly Haven, CC0; fixed mirror and SHA256 in lighting-source.json. Used only for PMREM lighting. Visible day sky uses Three.js atmospheric scattering.
- Hollow oak and river rocks: original Blender-authored geometry. The continuous hollow trunk combines an irregular radial profile, fused curved roots/limbs, sculpt smoothing, an ellipsoidal Boolean cavity, mesh repair and silhouette-preserving decimation. Ground contact is conformed to scene terrain at runtime.
- Soil: original Blender node material baked from a UV plane into diffuse and tangent normal maps. These are authored 3D material bakes, not altered photographs.
- Curved grass, tapered fallen leaves, pebbles, fallen logs, bridge, ruins and mushrooms: original procedural meshes in this project. The grass implementation uses general ideas of patch distribution, blade gradients and position-dependent wind; no SimonDev code or assets are copied.
- Rendering: ACES Filmic, HDR/PMREM, N8AO, restrained Bloom, FXAA. Woodland sun scattering samples real scene depth and directional shadows at half resolution. No RDR2 assets or proprietary engine code are used.

Reproduce (from repository root):

    node scripts/generate_woodland.mjs
    blender -b --python-exit-code 1 --python scripts/refine_woodland.py
    blender -b --python-exit-code 1 --python scripts/prepare_garden_oak.py
    blender -b --python-exit-code 1 --python scripts/audit_flower_models.py
    blender -b --python-exit-code 1 --python scripts/prepare_woodland_sources.py

Editable .blend files and export reports are written to artifacts/woodland. File hashes and LOD triangle counts are recorded in manifest.json; original texture hashes in sources.json.
