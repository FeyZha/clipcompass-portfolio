# ClipCompass vector wordmark — Instrument Serif

The 2026-10-29 brand refinement uses the actual **Instrument Serif** type outlines:
italic `Clip`, regular `Compass`, with an optically adjusted join and 32-unit type size.
This is typesetting and outline adaptation, not a claim to newly designed letterforms.

- Project: https://github.com/Instrument/instrument-serif
- Official specimen: https://fonts.google.com/specimen/Instrument+Serif
- Retrieved source: https://github.com/google/fonts/tree/main/ofl/instrumentserif
- Original files retained here: `InstrumentSerif-Regular.ttf`, `InstrumentSerif-Italic.ttf`, `OFL.txt`.
- Copyright 2022 The Instrument Serif Project Authors. SIL Open Font License 1.1;
  the complete unmodified license is retained and copied into both local builds.
- Downloaded 2026-10-29; SHA-256 of the original files is recorded in `source-hashes.json`.

`BrandMark.tsx` and `frontend/src/assets/brand/clipcompass.svg` contain actual paths
generated from these two fonts. No font request, text fallback, raster image or
conversion library is needed at runtime. The outer mark preserves Lucide's circle
and exact needle geometry, adapted into an engraved compass with a longer needle,
four short ticks and one weighted arc. The later color-only refinement keeps all
outlines and uses a blue ring, ochre needle and navy lettering. Lucide ISC / Feather MIT
notices remain under `lucide-compass/`.

Reproduction script and OpenType.js 1.3.4 (MIT) conversion tool are process materials
in `work/brand-vector-20261029/`; they are not frontend dependencies or deployed code.
The standalone SVG is also copied to `library/static/brand/clipcompass.svg`.
The parent's accessible link name remains `ClipCompass 首页`; decorative inline SVG
is hidden from assistive technology to avoid duplicate announcements.
