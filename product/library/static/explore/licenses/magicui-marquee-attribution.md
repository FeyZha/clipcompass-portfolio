# Magic UI Marquee adaptation

Source: https://magicui.design/r/marquee.json
Demo: https://magicui.design/docs/components/marquee
License: MIT, Copyright (c) Magic UI. Full license included alongside this file.
Retrieved 2026-10-30. Original registry JSON includes the original TSX and CSS keyframes.

Actual reused implementation: repeated flex groups, shared gap, vertical translation by `calc(-100% - var(--gap))`, linear infinite animation and pause play-state. Adapted to plain CSS, two decorative edge lanes, fixed content and app reading/visibility pause. No Tailwind or extra dependencies. Runtime adapter: src/vendor/QuietMarquee.tsx and src/explore/video-backdrop.css.
