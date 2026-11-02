import { build } from 'esbuild';
import { mkdir, writeFile, readFile, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const source = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(source, '../library/static/ui');
if (output !== path.resolve(source, '..', 'library', 'static', 'ui')) throw Error('Unexpected output path');
await mkdir(output, { recursive: true });
const result = await build({
  absWorkingDir: source, entryPoints: [path.join(source, 'src/main.tsx')], outfile: path.join(output, 'app.js'),
  bundle: true, format: 'esm', platform: 'browser', target: 'es2022', jsx: 'automatic',
  minify: true, legalComments: 'linked', metafile: true,
  loader: { '.woff2': 'file', '.woff': 'file', '.ttf': 'file' },
  assetNames: 'fonts/[name]-[hash]',
  define: { 'process.env.NODE_ENV': '"production"' },
});
const packages = new Map();
for (const input of Object.keys(result.metafile.inputs)) {
  const normalized = input.replaceAll('\\', '/');
  const marker = normalized.lastIndexOf('node_modules/');
  if (marker < 0) continue;
  const rest = normalized.slice(marker + 'node_modules/'.length).split('/');
  const name = rest.slice(0, rest[0].startsWith('@') ? 2 : 1).join('/');
  if (packages.has(name)) continue;
  const directory = path.resolve(source, normalized.slice(0, marker), 'node_modules', name);
  const manifest = JSON.parse(await readFile(path.join(directory, 'package.json'), 'utf8'));
  const licenseFiles = (await readdir(directory)).filter(name => /^(licen[cs]e|copying|notice)(\.|$)/i.test(name));
  const destination = path.join(output, 'licenses', name.replaceAll('/', '__'));
  await mkdir(destination, { recursive: true });
  for (const file of licenseFiles) await copyFile(path.join(directory, file), path.join(destination, file));
  packages.set(name, { version: manifest.version, license: manifest.license, files: licenseFiles });
}
const thirdParty = path.join(source, 'third-party');
const licenseOutput = path.join(output, 'licenses');
await mkdir(licenseOutput, { recursive: true });
await copyFile(path.join(thirdParty, 'NOTICE.md'), path.join(licenseOutput, 'NOTICE.md'));
await copyFile(path.join(thirdParty, 'kimi-reference/README.md'), path.join(licenseOutput, 'kimi-attribution.md'));
await copyFile(path.join(thirdParty, 'lucide-compass/LICENSE'), path.join(licenseOutput, 'lucide-compass.txt'));
await copyFile(path.join(thirdParty, 'instrument-serif/OFL.txt'), path.join(licenseOutput, 'instrument-serif.txt'));
await copyFile(path.join(thirdParty, 'instrument-serif/README.md'), path.join(licenseOutput, 'instrument-serif-attribution.md'));
await copyFile(path.join(thirdParty, 'material-color/LICENSE'), path.join(licenseOutput, 'material-color.txt'));
await copyFile(path.join(thirdParty, 'material-color/README.md'), path.join(licenseOutput, 'material-color-attribution.md'));
packages.set('adapted/material-color', { license: 'Apache-2.0', version: 'b256e6f94b92f77e419668b1f641af3f6fa2af61', files: ['material-color.txt', 'material-color-attribution.md'],
  kind: 'adapted-source', repository: 'https://github.com/material-components/material-web' });
const brandOutput = path.resolve(source, '../library/static/brand');
await mkdir(brandOutput, { recursive: true });
await copyFile(path.join(source, 'src/assets/brand/clipcompass.svg'), path.join(brandOutput, 'clipcompass.svg'));
packages.set('artwork/instrument-serif', { license: 'OFL-1.1', files: ['instrument-serif.txt', 'instrument-serif-attribution.md'],
  kind: 'outlined-wordmark', repository: 'https://github.com/Instrument/instrument-serif' });
packages.set('adapted/lucide-compass', { license: 'ISC AND MIT', files: ['lucide-compass.txt'],
  kind: 'adapted-source', repository: 'https://github.com/lucide-icons/lucide', notice: 'NOTICE.md' });
for (const component of [
  { directory: 'raindrop', version: '94ba9cbb88002987ed49cbc3848c93d396ae47a1', repository: 'https://github.com/raindropio/app' },
  { directory: 'prompt-kit', version: '5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a', repository: 'https://github.com/ibelick/prompt-kit' },
  { directory: 'shadcn-ui', version: 'ba1503c64472b82256d9de95e2e62c5901a38e8b', repository: 'https://github.com/shadcn-ui/ui' },
  { directory: 'anarlog', version: '48e19c9ed980bcda8dc64d63c4cdf4b96deddf4a', repository: 'https://github.com/fastrepl/anarlog' },
]) {
  const name = `adapted/${component.directory}`;
  const destination = path.join(licenseOutput, name.replaceAll('/', '__'));
  await mkdir(destination, { recursive: true });
  await copyFile(path.join(thirdParty, component.directory, 'LICENSE.md'), path.join(destination, 'LICENSE.md'));
  packages.set(name, { version: component.version, license: 'MIT', files: ['LICENSE.md'],
    kind: 'adapted-source', repository: component.repository, notice: '../NOTICE.md' });
}
await writeFile(path.join(output, 'licenses.json'), JSON.stringify(Object.fromEntries(packages), null, 2) + '\n');
await writeFile(path.join(output, 'build.json'), JSON.stringify({
  generatedFrom: 'frontend/src/main.tsx',
  assistantUi: '0.15.28',
  outputs: Object.fromEntries(Object.entries(result.metafile.outputs).map(([name, row]) => [path.basename(name), row.bytes])),
}, null, 2) + '\n');
console.log('Built local assistant-ui assets in library/static/ui');
await build({absWorkingDir:source,entryPoints:['src/workspace/legacy.tsx'],outfile:path.resolve(source,'../library/static/workspace/shell.js'),bundle:true,format:'iife',platform:'browser',target:'es2022',jsx:'automatic',minify:true,legalComments:'linked',define:{'process.env.NODE_ENV':'"production"'}});
