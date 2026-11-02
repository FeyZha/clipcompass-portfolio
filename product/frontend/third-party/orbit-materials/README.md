# Orbit surface assets — 2026-10-28

Actual downloaded assets used by the existing eight-ring scene:

| Source | License | Files used | Adaptation |
| --- | --- | --- | --- |
| [ambientCG Metal 010](https://ambientcg.com/view?id=Metal010), Lennart Demes | [CC0 1.0](https://docs.ambientcg.com/license/) | 1K JPG Roughness and NormalGL maps from the official 1K JPG ZIP | Repeated around the ring surface, normal strength reduced for subtle silver grain; no source diffuse, displacement or preview sphere shipped |
| [Poly Haven Studio Small 09](https://polyhaven.com/a/studio_small_09), Sergej Majboroda | [CC0](https://polyhaven.com/license) | `studio_small_09_1k.hdr` | Equirectangular environment illumination/reflection; the studio panorama itself is not a page backdrop |

Powered by Poly Haven. Assets are stored locally and copied by the frontend
build; the product makes no runtime requests to either asset service.
Downloaded source metadata and ZIP are retained under
`work/orbits-materials-20261028/`; the asset files under `assets/` are original
unmodified channels. The ambientCG asset preview and source site screenshots
are research evidence only, not product imagery.

Implementation reference: Three.js r170
[physical transmission example](https://github.com/mrdoob/three.js/blob/r170/examples/webgl_materials_physical_transmission.html).
The installed Three.js 0.170.0 MIT `WebGLRenderer`, `RGBELoader`, physical
material/environment pipeline and mesh primitives are used directly.
See the served `three-r170.txt` license. This adapts that example's HDR loading,
reflection mapping, filmic tone mapping and transmission material setup to the
local orbit geometry. It is not React Bits Pro source or a premade gear model.
The existing CSS3D cards, camera, eight tracks, controls, content and learning
callbacks remain the local implementation described in `../ribbon-scene/README.md`.

The former 2D ring drawing remains the fallback for unavailable/lost WebGL.
All GPU resources are disposed when leaving the scene. DPR is capped at 1.5.
