# Knowledge color layer: Material Web roles + NotebookLM visual reference

Requested 2026-10-29: keep the entire frontend structure, enrich colors, backgrounds
and logo. The existing Kimi layout is retained; this is only a color/surface layer.

## Actual code reuse

Google Material Web, fixed commit `b256e6f94b92f77e419668b1f641af3f6fa2af61`:
https://github.com/material-components/material-web/tree/b256e6f94b92f77e419668b1f641af3f6fa2af61

The original `tokens/versions/v0_192/_md-sys-color.scss` and `_md-ref-palette.scss`
are retained alongside their complete Apache-2.0 license and source hashes.
`frontend/src/workspace/material-light-roles.css` mechanically adapts the original
49-entry `values-light` Sass mapping into CSS custom-property aliases, preserving
the source's default values and copyright. `knowledge-color.css` supplies a local
palette and maps actual primary/on-primary, container/on-container, surface,
outline and text roles into existing ClipCompass components. This is running code,
not a claim that a screenshot was an open-source UI implementation.

## Visual reference and adaptation

Google's published NotebookLM Studio product image:
https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-video-overviews-studio-upgrades/

The original reference image and pixel sampling evidence are in
`work/color-theme-20261029/references/`. Sampled Audio `#EDF0FA`, Video `#E2F1E5`,
Reports `#F3F2E9`, action blue approximately `#4259FF`, and the image's blue/green
edge lighting inform the sidebar, existing controls and stationary backdrop.
Text/outline tones are adapted for contrast. No Google icon, logo, screenshot or
commercial application bundle is included in product assets; the published image
is not claimed to be a tested signed-in current NotebookLM session.

ClipCompass keeps its own outlined serif logo and Lucide compass geometry. Only
their colors change: blue ring, ochre needle, navy lettering. Sphere/card palette,
fonts, geometry, motion, routes and content remain unchanged. No layout, animation,
component, account or model capability is introduced by this theme.
