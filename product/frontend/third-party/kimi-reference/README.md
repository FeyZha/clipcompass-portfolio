# Kimi AI visual reference and existing-component adaptation

Requested by the user on 2026-10-29: follow the Kimi AI product at https://www.kimi.com/ rather than a bookmark manager. This is unrelated to the previously retained Kimi-generated atlas demo.

## Actual reference evidence

- Loaded Chinese homepage at 1440×1000 and 1123×956, with computed layout/style measurements.
- Official conversation and document screenshot from https://www.kimi.ai/zh-hans/help/docs-and-sheets/docs-and-sheets-overview . This is published product imagery, not a signed-in session we tested.
- Evidence and reference-only screenshots remain in `work/kimi-ui-20261029/references/`; no Kimi screenshots, logos or application bundles are included in product assets.

Measured visual grammar: 240px sidebar / #fbfaf9; 56px sidebar header; 36px navigation rows with 10px corners; white main surface with 6px outer spacing and 12px corners; 768×114px composer with 24px corners, 16/24px text and a 36px circular send control; gray user bubbles and continuous answer text beside a separate document surface.

## Actual implementation reuse

| Existing implementation and license | Adaptation |
| --- | --- |
| Prompt Kit `prompt-input-actions.tsx`, MIT, fixed `5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a` | Existing `AtlasPrompt.tsx` retains its anchored input/action/circular-send composition, actual controlled draft and IME handling. Its former top-search placement becomes the primary lower composer. The real official Prompt Kit demo and pinned source were inspected. |
| Installed `@assistant-ui/react` 0.15.28, MIT | Existing Chat uses Thread, Message and Composer primitives, including actual controlled input, native submission, response scroll and ViewportFooter. Style changes implement the user-bubble/answer/footer relationship; existing search behavior remains authoritative. |
| shadcn/ui Sidebar and sidebar-01, MIT, fixed `ba1503c64472b82256d9de95e2e62c5901a38e8b` | Existing composed sidebar slots and links retain their actual destinations; measured Kimi geometry is applied to the same React components. No fake account, history, model selector or plugin controls. |
| Existing ClipCompass collection / question / reading components, including prior attributed MIT adaptations | Existing list, ready-state bridge, source/player behavior and Anarlog-based body rendering remain. Kimi-style document/conversation framing is an independent visual adaptation. Prior license notices remain distributed. |
| Lucide compass geometry, ISC / Feather MIT | ClipCompass retains its own compass and name; monochrome square brand treatment, not Kimi's logo. |

Kimi's commercial application is a visual reference. Its frontend is **not claimed to be open source**. No Kimi API, account, model, telemetry, billing, plugin or chat history is integrated. This project retains its own actual saved-video search capabilities; it does not claim new multi-turn chat or document-authoring functionality.

The sphere is the main discovery visual instead of Kimi's welcome wordmark. Its engine, orbit/particle/card behavior and original card styling are frozen. The composer is anchored below it, not over it. Collection filters remain within collection; existing readiness and search scope remain visible. Reduced-motion behavior and keyboard/return focus follow the existing product.
