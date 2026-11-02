# Three.js orbit field adaptations

Upstream: https://github.com/mrdoob/three.js, fixed tag **r170**, MIT.
Original files are retained unchanged alongside the complete `LICENSE`:

- `webgpu_tsl_compute_attractors_particles.html`
  https://github.com/mrdoob/three.js/blob/r170/examples/webgpu_tsl_compute_attractors_particles.html
- `webgl_buffergeometry_drawrange.html`
  https://github.com/mrdoob/three.js/blob/r170/examples/webgl_buffergeometry_drawrange.html

Actual adapted code: `frontend/src/vendor/three-examples/orbit-field.ts`.

The attractor example's force loop is ported from GPU TSL to CPU Vector3:
direction and inverse-square attraction, plus the cross-product spinning force.
ClipCompass supplies real moving orbit anchors, softens close distances and
subtracts centre acceleration. Its wire core bounds displacement and eases toward
the result. The upstream particle integrator, GPU buffers, colour/GUI, scene and
box wrapping are not copied. This is a visual tidal response, not a calibrated
gravity simulation.

The drawrange example's pair-distance test, per-node connection budget and
distance opacity are reused. ClipCompass excludes permanent shell edges and fades
auxiliary connections over time. The original sphere composition reuses the
installed Three IcosahedronGeometry and EdgesGeometry.

The 2026-10-29 topology interaction additionally imports the installed r170
`three/examples/jsm/math/ConvexHull.js` (same MIT license) directly. Its QuickHull
implementation computes triangular neighbours on normalized shell directions;
ClipCompass displays those edges on the deformed vertices and fades edge changes.
This keeps shallow inward ripples from removing shell nodes. Drag input drives
local differential surface flow rather than a rigid rotation of the core. This
is dynamic visual graph connectivity, not a physical fluid or material solver.

Both current official demos were opened and animated in Chromium on 2026-10-29;
the copied sources are the pinned r170 versions. No external request is made by
the production effect. The build distributes this record and the full MIT notice.
