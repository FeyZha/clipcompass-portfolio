# Screenrove reference adaptations

## Current: Miro (2026-10-28)

User-selected reference: https://screenrove.com/miro . The inspected capture and its design guide describe the public marketing website, not the authenticated Miro application.

- https://screenrove.com/miro/design
- https://screenrove.com/guides/miro-tokens.css
- https://screenrove.com/guides/miro-DESIGN.md

`miro-tokens.css` is the published token file, retained without modification and imported by `src/workspace/workspace-miro.css`. It supplies the scoped canvas, text, yellow, blue and border palette. The existing local workspace, Kimi SVG controls, Prompt Kit composer, assistant-ui, collection and reading components are the actual reusable implementation. The Miro adaptation rearranges their layout and states around the reference's horizontal navigation, connected canvas, colored source papers and action styling. It is not official Miro React source, a new dependency or a claim to have copied an authenticated product.

Reference screenshots, guide, tokens and live public-page observations are retained under `work/miro-unification-20261028/reference/`. Those screenshots are not shipped or embedded as application artwork. No Miro logos or proprietary fonts were copied. No open-source license was stated in the published token file; this is the user's authorized local reference adaptation, not a statement of rights for future redistribution. The prior ElevenLabs base stylesheet remains reused for shared component geometry and archived history, with the current Miro rules taking precedence.

## Previous: ElevenLabs product reference

Retrieved 2026-10-28 from the user-selected public reference:

- https://screenrove.com/elevenlabs
- https://screenrove.com/elevenlabs/design
- https://screenrove.com/guides/elevenlabs-tokens.css
- https://screenrove.com/guides/elevenlabs-DESIGN.md

`elevenlabs-tokens.css` is the published reference token file, saved without modification. `src/workspace/workspace.css` imports its scoped product tokens for the canvas, sidebar, navigation fill and related surfaces, and adds the local Chinese typography and component rules.

This is Screenrove's independent reference, not official ElevenLabs component source. No upstream open-source license was stated in this token file. Do not describe it as MIT-licensed ElevenLabs code or redistribute the reference screenshots as product assets. This task is a local adaptation of the user's specified reference; it does not establish a license for a future public release.

Actual product-screen captures and the downloaded design guide used for comparison are retained under `work/elevenlabs-unification-20261028/reference/`. They are reference evidence only and are not loaded by the app. No ElevenLabs logos, illustrations or proprietary fonts are included.

The working components remain adaptations of the project's existing Kimi atlas, Prompt Kit, assistant-ui and reading interface. Their existing notices and licenses remain in their respective directories. `WorkspaceShell.tsx` supplies the shared local application frame. The existing eight-orbit engine is unchanged.
