# Infinite Spiral upstream snapshot

## Drift Wall background adapter (2026-10-30)

- Source/demo: https://reactbits.dev/components/drift-wall
- Snapshot: `DriftWall.tsx`, `DriftWall.css`, from DavidHDev/react-bits main on 2026-10-30 (HEAD `e12c22192ac7b4b452c5e2feb9b586d74765d696`).
- License: existing MIT + Commons Clause, not plain MIT.
- Runtime: `src/vendor/react-bits/BackdropDriftWall.tsx` and `src/explore/video-backdrop.css`.
- Reused: columnFactor, alternating velocities, phase offsets, modulo copy-height wrapping, coverage copies, exponential velocity/parallax damping, perspective transform, column/track CSS structure.
- Adapted: decorative video silhouettes, responsive column coverage, reading/input/pause and reduced-motion freeze, passive parent pointer tracking, no clickable/focusable tiles. No new dependencies; sphere untouched.

- Project: https://github.com/DavidHDev/react-bits
- Component: https://reactbits.dev/components/infinite-spiral
- Fixed commit: `1eeb6f105c68b964289d85dabbe84a1d551f3797`
- Original paths: `src/ts-default/Components/InfiniteSpiral/InfiniteSpiral.tsx`
  and `src/ts-default/Components/InfiniteSpiral/InfiniteSpiral.css`.
- `InfiniteSpiral.tsx`, `InfiniteSpiral.css` and `LICENSE.md` here are the original
  upstream snapshot. License is **MIT + Commons Clause**, not plain MIT.
- Adapted component: `frontend/src/vendor/react-bits/InfiniteSpiral.tsx` and CSS.
  Retains upstream modulo wrapping, helix projection, perspective scaling,
  animation interpolation, visibility observation and pointer handling.
- Adaptations: render slot for existing questions; readable text sizing; explicit
  pause, focus pause and navigation; return position; touch page scrolling;
  movement threshold before pointer capture; reduced-motion support; flat text
  compositing to retain crisp Chinese glyphs while reusing the projected helix. Wrapper and
  palette live in `frontend/src/explore/QuestionSpiral.tsx` / `question-spiral.css`.
- Dedicated explore build includes `licenses/react-bits.txt` and this attribution.
- No paid Depth Ribbon source or assets are included.

## Desktop reference alignment, 2026-10-27

The user narrowed the current scope to desktop and requested the original demo's
effect. The adapter now restores the upstream fit, responsive radius and depth
ordering. The wrapper uses the demo's speed (0.55), seven cards per revolution,
center scale (1.2), edge fade (0.3) and edge blur (6). Card size/radius/perspective
are enlarged together for Chinese text. An optional ten-item visible window
applies the demo's fade span to the full 35-question collection without repeating
or omitting saved questions. The flat text compositing fix remains.

Official demo parameters were read from the same fixed commit:
`src/demo/Components/InfiniteSpiralDemo.jsx`. Original TSX/CSS/license snapshots
remain unchanged. Desktop verification and comparison evidence are recorded in
`docs/spiral-desktop-match-20261027.md`.

## Continuous-motion follow-up, 2026-10-27

Live 24-second traces identified an overly wide trajectory despite the same
rotation period. The wrapper now scales the original radius, vertical pitch and
perspective uniformly by 68/60, with 140-pixel square text cards in an 860-pixel
maximum desktop stage. It restores upstream hover/drag deceleration, while
explicit pause, keyboard focus and reduced motion still stop promptly. Original
snapshot files remain intact. Runtime comparisons, unretimed recordings and
desktop checks: `docs/spiral-motion-match-20261027.md`.
