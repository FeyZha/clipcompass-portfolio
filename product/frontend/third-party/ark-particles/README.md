# ARKx particle field adaptation

Source: [Interactive Particles Music Visualizer](https://github.com/tgcnzn/Interactive-Particles-Music-Visualizer), Tiago Canzian / ARKx, MIT. Fixed commit `afe366de4c10e15f627958d7893ab21da8290ea8`.

Original demo: https://tympanus.net/Tutorials/ParticlesMusicVisualizer/ . The public demo returned a Cloudflare challenge during this task; the original core shaders were replayed locally instead. This is not a claim to have exercised the complete audio demo.

`src/vendor/ark-particles/field.ts` ports `src/js/entities/glsl/vertex.glsl` to CPU TypeScript: the full Ashima simplex noise function, central-difference curl, normal-offset target, and nonlinear distance-to-the-fourth interpolation are reused. The original vertex/fragment files and MIT license are retained here. The `curl.y` repeated positive-epsilon sample is corrected to negative epsilon.

Ashima noise: Ian McEwan / Ashima Arts, MIT, https://github.com/ashima/webgl-noise . License snapshot `6abed1e77ed1e18b181627c35f688eb30c9fe75e` retained separately.

Adaptation: regular spherical rows replace Box/Cylinder geometry; the existing signed drag spring replaces audio/BPM input. Following the user's quieter-motion correction, noise phase/frequency and particle orientation remain fixed at rest, with only 18% of the base curl texture. Dragging reveals stronger folds and differential shear, then returns to that quiet shape. Smooth bounds retain the inner envelope; depth and displacement control point opacity/size in the existing Canvas renderer. No bloom, soundtrack, GSAP, additional renderer, or upstream interface is included. Existing wire-shell topology, orbit motion and reading pause are preserved.

Later user-requested dot-size treatment: a broad size crest travels around the fixed spherical surface every 18 seconds. Only radii change automatically (0.24–1.65 CSS px); geometry and opacity retain the quiet behavior. It uses the existing reading clock, so hover/focus, manual pause and reduced motion freeze the size cycle too. This size treatment is a local adaptation based on the user's dot-sphere image, not an upstream ARKx feature.
