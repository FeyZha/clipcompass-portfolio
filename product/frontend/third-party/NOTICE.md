# Adapted frontend components

## Raindrop.io desktop product

- Source: https://github.com/raindropio/app/tree/94ba9cbb88002987ed49cbc3848c93d396ae47a1
- MIT, Copyright (c) 2024 Rustem Mussabekov; original files and complete license retained in `raindrop/`.
- Actual adaptation: light theme/size values; splitview sidebar and reader structure; common header, navigation rows, controls and bookmark list layout, mapped to existing ClipCompass data and events. Exact mapping and explicit deviations are in `raindrop/README.md`.
- Both local builds distribute the original MIT notice. Raindrop branding, backend, account and sync code are not integrated.

ClipCompass adapts selected presentational components and layout details from the
following projects (licenses are identified separately below). This is not an installation or execution of either
complete application. The existing React, assistant-ui, request, input-method,
draft, loading and playback behavior remains owned by ClipCompass.

## Prompt Kit

- Repository: https://github.com/ibelick/prompt-kit
- Fixed commit: `5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a`
- Copyright: Copyright (c) 2025 Julien Thibeaut
- Complete upstream license: `frontend/third-party/prompt-kit/LICENSE.md`, bundled
  as `licenses/adapted__prompt-kit/LICENSE.md`, copied without content changes from
  upstream `LICENCE.md`:
  https://github.com/ibelick/prompt-kit/blob/5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a/LICENCE.md
- Source components and layout:
  - https://github.com/ibelick/prompt-kit/blob/5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a/components/prompt-kit/prompt-input.tsx
  - https://github.com/ibelick/prompt-kit/blob/5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a/components/prompt-kit/prompt-suggestion.tsx
  - https://github.com/ibelick/prompt-kit/blob/5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a/components/blocks/conversation-prompt-input.tsx

Adaptations: the composer borrows the rounded input shell and action placement;
the local `PromptSuggestion` in `frontend/src/ui-elements.tsx` retains the simple
non-highlight button structure. Tailwind utilities are expressed through local
CSS, and the suggestion uses a native button. Upstream highlight behavior, demo
messages, simulated responses, chat state, SDK integration and input handlers are
not imported. Existing Chinese input-method and submission behavior is retained.

## shadcn/ui

- Repository: https://github.com/shadcn-ui/ui
- Fixed commit: `ba1503c64472b82256d9de95e2e62c5901a38e8b`
- Copyright: Copyright (c) 2023 shadcn
- Complete upstream license: `frontend/third-party/shadcn-ui/LICENSE.md`, bundled
  as `licenses/adapted__shadcn-ui/LICENSE.md`, copied without content changes from:
  https://github.com/shadcn-ui/ui/blob/ba1503c64472b82256d9de95e2e62c5901a38e8b/LICENSE.md
- Source component:
  https://github.com/shadcn-ui/ui/blob/ba1503c64472b82256d9de95e2e62c5901a38e8b/apps/v4/registry/new-york-v4/ui/card.tsx

Adaptations: the local `Card` in `frontend/src/ui-elements.tsx` retains the small
React `div` wrapper and `data-slot="card"` convention. Card appearance is expressed
in local CSS instead of Tailwind utilities and the upstream `cn` helper. This does
not import the entire component library, site, backend, brand assets or demo data.

The desktop workspace additionally adapts the static `Sidebar` branch and the
Header/Content/Footer/Group/Menu composition from `ui/sidebar.tsx` and
`blocks/sidebar-01/components/app-sidebar.tsx` at the same fixed commit.
Unmodified originals are retained in this directory. `src/workspace/Sidebar.tsx`
preserves their slots and hierarchy; Tailwind layout/state declarations are
mapped to `workspace-enterprise.css`. The content landmark remains with each
existing page. Mobile sheets, cookie persistence, team/account selectors, and
the upstream demo links are omitted. The MIT license is also distributed with
the exploration bundle as `explore/licenses/shadcn-ui.txt`.

Source: https://github.com/shadcn-ui/ui/tree/ba1503c64472b82256d9de95e2e62c5901a38e8b/apps/v4/registry/new-york-v4/blocks/sidebar-01

## Anarlog

- Repository: https://github.com/fastrepl/anarlog
- Fixed commit: `48e19c9ed980bcda8dc64d63c4cdf4b96deddf4a`
- License: MIT, complete original in `frontend/third-party/anarlog/LICENSE.md`.
- Original source files: `packages/editor/src/markdown/{parser,schema}.ts`,
  `packages/editor/src/image-markdown.ts`, and
  `packages/editor/src/styles/prosemirror/note-typography.css`.
  Copied unchanged under `frontend/src/vendor/anarlog`.
- Adaptation: the ClipCompass wrapper uses the original Markdown parser, schema
  and typography for a read-only summary. Media and active links are excluded
  before DOM serialization. No full editor, attachments or cloud service is imported.
- Backend copies the original default enhance templates and MIT license into
  `library/summary_templates/anarlog`; teaching-video and Simplified Chinese
  constraints are added separately at runtime. Original first results remain intact.

## React Bits — Infinite Spiral

- Repository: https://github.com/DavidHDev/react-bits
- Fixed commit: `1eeb6f105c68b964289d85dabbe84a1d551f3797`
- Copyright (c) 2026 David Haz; **MIT + Commons Clause**.
- Original component, CSS, license and detailed adaptation record:
  `frontend/third-party/react-bits/`.
- Adapted helix engine: `frontend/src/vendor/react-bits/InfiniteSpiral.tsx`.
  The exploration page uses its animation and projection with existing question
  text cards, reading controls and ClipCompass colors. No paid component source
  is included. `build-explore.mjs` includes the original license and attribution.

## Lucide compass

- Source: https://github.com/lucide-icons/lucide/blob/main/icons/compass.svg
- License: ISC, with the applicable original Feather MIT notice retained in
  `frontend/third-party/lucide-compass/LICENSE`.
- Actual reuse: the compass circle and needle path in the shared `BrandMark`.
  The current line icon is adapted to a blue compass engraving and a
  scaled ochre needle; this is a ClipCompass adaptation, not Miro/Kimi's logo.
- The original SVG, notices and source record are saved in `lucide-compass/`;
  both frontend builds distribute the license with their local assets.

## Three.js orbit attraction and proximity links

- Upstream: https://github.com/mrdoob/three.js, fixed tag `r170`, MIT.
- Unmodified source examples, full license and adaptation boundaries are in
  `frontend/third-party/three-orbit-fields/`.
- `frontend/src/vendor/three-examples/orbit-field.ts` adapts the attractor
  force loop and drawrange distance/degree/opacity rules for the existing core.
- Actual orbit anchors drive bounded mesh deformation and fading proximity
  links. The effect does not claim physically calibrated gravity or remeshing.
- `build-explore.mjs` distributes the full license and attribution.

## Legacy UI build distribution

`frontend/build.mjs` keeps the existing bundled dependency-license collection and
also copies these complete MIT licenses and this notice into
`library/static/ui/licenses/`. Adapted-source entries in `licenses.json` identify
the fixed revisions and the shared notice.

## Kimi AI visual reference (2026-10-29)

The shared shadcn sidebar also adapts the retained upstream desktop open/toggle,
cookie persistence, trigger and icon-collapse pattern. ClipCompass adds initial
cookie reading and return-to-page synchronization so both local ports share the
choice, plus Chinese labels and keyboard-visible icon hints. No mobile sheet or
global keyboard shortcut is added. The existing MIT license continues to apply.

Kimi (https://www.kimi.com/) is the user-selected visual reference, not an open-source dependency. The existing MIT Prompt Kit, assistant-ui, shadcn sidebar and attributed reading/list implementations are adapted to its measured public interface. ClipCompass branding and capabilities remain. No Kimi logo, screenshot, application bundle or API is distributed. See `kimi-reference/README.md` in the source tree and the distributed `kimi-attribution.md` for the reuse map and boundaries.

## Instrument Serif — vector wordmark (2026-10-29)

The outlined ClipCompass name uses the actual Regular and Italic fonts from
https://github.com/Instrument/instrument-serif, via Google Fonts. Copyright 2022
The Instrument Serif Project Authors; SIL Open Font License 1.1. Original fonts,
complete license, hashes and adaptation details are in `instrument-serif/`.
Both frontend builds distribute the license and attribution; only vector paths,
not the font binaries or conversion tool, are used by the application.

## Material Web color roles (2026-10-29)

The 49 light-scheme color roles from Google's Material Web `v0_192` tokens are
adapted into CSS aliases and consumed by ClipCompass's color-only theme.
Copyright 2023 Google LLC, Apache-2.0, fixed commit
`b256e6f94b92f77e419668b1f641af3f6fa2af61`. Original source, full license and hashes
are preserved in `material-color/`; license and attribution accompany both builds.
The palette is adapted from Google's published NotebookLM Studio visual. It is a
visual reference only, not a claim to NotebookLM source code or new functionality.
