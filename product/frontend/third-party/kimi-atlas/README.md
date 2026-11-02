# User-authorized Kimi knowledge atlas adaptation

- Reference and application source: https://47pn73utmp4d4.kimi.site/
- Retrieved 2026-10-27: `reference.html`, `/assets/index-CdQC-nPo.js` (`reference.js`), `/assets/index-Bnut3962.css` (`reference.css`). Original responses retained here for traceability.
- The original application did not declare a public reuse license. The user explicitly authorized reuse in this conversation: **“可以直接复用这页代码”**. This is the permission basis for the local adaptation; it is not an assertion that the application is MIT or that unrestricted redistribution has been granted.
- Embedded Three.js revision 170 is MIT. Original notice retained in `THREE-LICENSE.txt`, verified from https://github.com/mrdoob/three.js/blob/r170/LICENSE.

## Actual code reused

`src/vendor/kimi-atlas/runtime.js` contains the original Three.js runtime and the original `GR`, `FR`, `HR` graph implementation. The camera, force layout, node/edge rendering, label-placement candidates, mouse drag, zoom, rotation, filtering, path traversal and disposal come directly from the reference application.

`src/vendor/kimi-atlas/AtlasShell.jsx` retains the original React shell, SVG icons, cosmos background, sidebar, heading, graph controls, theme switch, lists and native dialogs. It uses the project's existing React rather than a second bundled copy. `atlas-source.css` is the original stylesheet with document resets scoped to atlas mode and remote font declarations removed.

Local adaptations: existing question IDs/text/data, explicit editorial exploration relations, Chinese multiline label bounds and collision handling, selected-label priority, topic focus, browser history, learning panel using existing context/clip components, bottom ask bridge to the existing local search, reading dialog and source availability. The original sample physics data, uploads/AI import, SDK/analytics and sample source contents are not used at runtime. Original exported bundles are archived, not loaded by the product page.

The bottom composer adapts **Prompt Kit `prompt-input-actions.tsx`**, MIT, commit `5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a`: https://github.com/ibelick/prompt-kit/tree/5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a . Its input/action row/circular submit composition is retained; native controls replace wrappers for the existing application. License: `../prompt-kit/LICENSE.md`. The inspected upstream file is retained alongside the license in `../prompt-kit/prompt-input-actions.tsx`.

Runtime evidence and boundaries: `docs/knowledge-atlas-20261027.md`. Desktop only. No content or model output was regenerated for this integration.

2026-10-27 follow-up: the retained `GR / FR / HR` code now displays each complete question and its topic marker as one node. Edges use the displayed node centre, with the original Three camera and line rendering; actual text height drives the retained collision placement, and selection prioritizes the current question plus its direct neighbors. This adapts the authorized source rather than replacing the graph with a new component. The reference files and original notices are unchanged. Desktop evidence and limitations: `docs/atlas-node-text-20261027.md`.
