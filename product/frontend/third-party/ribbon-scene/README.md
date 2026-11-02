# Ribbon scene provenance

The user explicitly requested an independent implementation inferred from the
publicly visible effect on 2026-10-27. This overrides the previous project-level
requirement to wait for the paid component source for this task.

- Visual/interaction reference: https://pro.reactbits.dev/docs/components/depth-ribbon
- Public preview observed: ribbon overview, camera approach, travel, hover pause,
  hold-to-reveal, drag and release. Reference screenshots and motion evidence are
  local research files under `work/ribbon-rebuild-20261027`.
- **No React Bits Pro source was obtained or copied.** The curve, camera, picking,
  card composition and application integration are independently implemented in
  `frontend/src/explore/ribbon-engine.ts`, `RibbonShell.tsx` and `ribbon.css`.
- Actual third-party code reused: Three.js 0.170.0 `CSS3DRenderer` and camera/curve
  primitives, MIT, Copyright 2010–2024 three.js authors.
  https://github.com/mrdoob/three.js/blob/r170/examples/jsm/renderers/CSS3DRenderer.js
  The exact license is copied from the installed package to the served
  `/licenses/three-css3d.txt` by the explore build.
- Existing Prompt Kit input, saved question/context renderer, inline video,
  query bridge and single-video reader remain the existing implementations.
- The authorized Kimi atlas is retained at `/#layout=atlas` with its own original
  provenance. It is lazy-loaded and not used to claim reuse of Depth Ribbon.

This is not the official Depth Ribbon component or a pixel-identical clone.
Complete Chinese questions replace pictures; current-card readability takes
precedence over making distant text clickable. No reference image assets are
included in the product.

## Eight spatial rings adaptation, 2026-10-27

The user then supplied an ivory armillary-ring image and requested eight slow
rotating circles carrying question cards. They explicitly chose mixed questions
for discovery, with rings acting as spatial layout rather than topic groups.
`orbit-engine.ts` adapts the local `ribbon-engine.ts` CSS3D card construction,
camera interpolation, projected picking, lifecycle and callback interface.
`RibbonShell.tsx` retains the existing shell, topic filter, question/source
dialogs, theme, history, question detail and Prompt Kit input. `orbits.css`
adapts the existing styles; no new dependency or paid source is used.

Eight closed circular tracks, translucent band drawing, non-overlapping card
selection and an interactive hover preview are additions for this request.
The reference image remains research material outside the shipped product.
The previous scene is preserved at `/#layout=ribbon`, atlas at `/#layout=atlas`.
See `docs/orbits-exploration-20261027.md` for actual browser verification and
remaining visual limitations; this is not a reproduction of official Pro code.

Motion refinement in `docs/orbits-motion-20261027.md` retains this same local
engine and dependencies. It replaces flat annular outlines with camera-depth
sorted ribbon surfaces, adds continuous progress on each assigned circle,
bounded track-relative card tilt, gradual card/point transitions, and projected
quadrilateral picking. No additional upstream source or assets were obtained.
