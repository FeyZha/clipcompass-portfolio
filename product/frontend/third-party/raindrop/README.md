# Raindrop.io desktop UI adaptation

- Source: https://github.com/raindropio/app/tree/94ba9cbb88002987ed49cbc3848c93d396ae47a1
- License: MIT, Copyright (c) 2024 Rustem Mussabekov. Full original `LICENSE.md` is included.
- `src/` holds unmodified relevant upstream source files. `source-manifest.json` and `source-hashes.json` identify the fetched files.

Actual adaptation in ClipCompass:

| Upstream source | Local mapping |
| --- | --- |
| `co/screen/basic/themes.module.css`, `size.module.css` | `workspace/raindrop-tokens.css`: light palette, spacing, typography scale, 48px toolbar, 32px navigation and 28px controls. Prefix variables and convert from upstream 40px rem to pixels; body secondary text darkened for contrast. No root font-size change. |
| `co/screen/splitview/sidebar`, `co/common/list/item.module.styl`, `section.module.styl` | `WorkspaceShell.tsx` and `workspace-raindrop.css`: full-width rows, flat active state, profile-height brand area and section grouping; original native ClipCompass destinations and settings actions. |
| `co/common/header`, `co/common/button` | 48px toolbar and title rows, real existing filter/search control in toolbar; rectangular 4px controls, compact action sizes. |
| `co/bookmarks/item/view.module.styl`, `cover/view.module.styl`, `info/index.module.styl`, `items/view/list.module.styl` | `PlaylistCollection.tsx` and `playlist-collection.css`: 16px list grid/padding, 15px title, lower information line, hover background, inset row separator. Preserve complete titles and 16:9 video thumbnails at 96x54; no upstream truncation or bulk selection copied. |
| `co/screen/splitview/reader`, `common/tabs` | Existing reading page and embedded reader: fixed toolbar, independent scroll regions, separated source/document panes and native tab behavior. |

The upstream sidebar defaults to 300px. ClipCompass uses 260px to retain room for its locked sphere at the required 1123px desktop viewport. The blue accent retains the upstream hue/saturation with lightness reduced from 49% to 43% for small-text contrast; secondary text is also darker. Existing sphere engine, particle code, card styles and original data remain intact.

No Raindrop API, authentication, accounts, sync, billing, telemetry or backend was integrated. No Raindrop product branding is used. The existing ClipCompass compass uses its original Lucide geometry in monochrome. Article bodies in the upstream app come from a server iframe; ClipCompass keeps its original Anarlog-based renderer and does not claim reuse of unavailable server CSS.

Design evidence: actual Raindrop light desktop list, reader and settings screenshots plus official product/help images were viewed. The implementation follows one product, not a blend of component-demo styles. This is an adapted ClipCompass interface, not an official Raindrop client.
