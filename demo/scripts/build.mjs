import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {readFile,writeFile,mkdir,cp,copyFile,readdir,rm} from 'node:fs/promises';
const out=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(out,'../../product');
const front=path.join(root,'frontend');
const site=path.join(out,'../site');
const {build}=await import(pathToFileURL(path.join(front,'node_modules/esbuild/lib/main.js')));
const transforms=[];
const plugin={name:'static-experience',setup(b){b.onLoad({filter:/\.[jt]sx?$/},async args=>{
 if(!args.path.replaceAll('\\','/').includes('/frontend/src/'))return;
 let s=await readFile(args.path,'utf8');const original=s;
 // Both local applications share one static origin in the released experience.
 s=s.replace(/(['"])http:\/\/127\.0\.0\.1:1485[45]\1/g,'location.origin');
 s=s.replaceAll('http://127.0.0.1:14855/','/').replaceAll('http://127.0.0.1:14854/','/');
 if(args.path.endsWith('WorkspaceShell.tsx')){
  s=s.replace('new URL(destinations[page])','new URL(destinations[page],location.origin)');
  s=s.replace('url.pathname===location.pathname&&url.hash','url.pathname===location.pathname&&!location.search&&url.hash');
 }
 if(args.path.endsWith('AtlasPrompt.tsx')){
  s=s.replace('placeholder="向收藏提问…"','placeholder="选择一个示例，或输入关键词试试…"');
  s=s.replace('<div className="atlas-composer-meta">','<div className="demo-presets"><label htmlFor="demo-search-preset">试一试</label><select id="demo-search-preset" aria-label="选择内置搜索示例" value="" onChange={e=>{onValueChange(e.target.value);inputRef.current?.focus();}}><option value="">选择一个内置搜索问题…</option>{(window as any).DEMO_PRESETS.map((p:any)=><option key={p.label} value={p.question}>{p.label}</option>)}</select></div><div className="atlas-composer-meta">');
  s=s.replace('`可检索 ${count} 条视频`','`内置 ${count} 条视频 · 搜索不实时生成`');
 }
 if(args.path.endsWith('InlineResults.tsx'))s=s.replace('本次未找到可核实的讲解','体验版未匹配到内置讲解').replace('可补充具体问题后重试。未找到不等于收藏中没有相关内容。','请选择内置搜索示例，或输入其他关键词。这不表示完整收藏中没有答案。');
 if(s!==original)transforms.push(path.relative(root,args.path));
 return {contents:s,loader:args.path.endsWith('.tsx')?'tsx':args.path.endsWith('.ts')?'ts':args.path.endsWith('.jsx')?'jsx':'js'};
});}};
for(const [entry,dir] of [['src/explore/main.tsx','explore'],['src/main.tsx','ui']]){
 await mkdir(path.join(site,dir),{recursive:true});
 await build({absWorkingDir:front,entryPoints:[entry],outfile:path.join(site,dir,'app.js'),bundle:true,
  format:'esm',platform:'browser',target:'es2022',jsx:'automatic',minify:true,legalComments:'linked',
  loader:{'.woff2':'file','.woff':'file','.ttf':'file'},assetNames:'fonts/[name]-[hash]',
  define:{'process.env.NODE_ENV':'"production"'},plugins:[plugin]});
}
await cp(path.join(front,'src/assets/video-thumbnails'),path.join(site,'assets/video-thumbnails'),{recursive:true});
await mkdir(path.join(site,'brand'),{recursive:true});
await copyFile(path.join(front,'src/assets/brand/clipcompass.svg'),path.join(site,'brand/clipcompass.svg'));
await copyFile(path.join(root,'library/static/styles.css'),path.join(site,'styles.css'));
await copyFile(path.join(out,'../site/demo-runtime.js'),path.join(site,'demo-runtime.js'));
await cp(path.join(root,'library/static/explore/licenses'),path.join(site,'licenses/explore'),{recursive:true});
await cp(path.join(root,'library/static/ui/licenses'),path.join(site,'licenses/ui'),{recursive:true});
// Copy explicit original notices, including source-adaptation boundaries.
for(const folder of await readdir(path.join(front,'third-party'),{withFileTypes:true})){
 if(!folder.isDirectory())continue;
 for(const name of await readdir(path.join(front,'third-party',folder.name))){
  if(/^(license|licence|copying|notice|ofl|readme)/i.test(name)){
   const dest=path.join(site,'licenses/source',folder.name);await mkdir(dest,{recursive:true});
   await copyFile(path.join(front,'third-party',folder.name,name),path.join(dest,name));
  }
 }
}
const licenseRoot=path.resolve(site,'licenses');
const notices=[];
async function collectNotices(directory){
 for(const entry of await readdir(directory,{withFileTypes:true})){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())await collectNotices(file);
  else notices.push(`\n${'='.repeat(70)}\n${path.relative(licenseRoot,file).replaceAll('\\','/')}\n${'='.repeat(70)}\n${await readFile(file,'utf8')}`);
 }
}
await collectNotices(licenseRoot);
await writeFile(path.join(site,'THIRD-PARTY-NOTICES.txt'),notices.join('\n'));
// Only remove the disposable copied notices after preserving their complete text.
if(licenseRoot!==path.join(path.resolve(out),'../site','licenses'))throw Error('Unexpected notice output path');
await rm(licenseRoot,{recursive:true});
const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="ClipCompass固定内容体验版：浏览95个问题、20条视频的导读和核心纪要，体验内置搜索结果。"><title>ClipCompass · 视频知识探索体验版</title><link rel="icon" href="/brand/clipcompass.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/ui/app.css"><link rel="stylesheet" href="/explore/app.css"><link rel="stylesheet" href="/demo.css"></head><body><div id="root"></div><noscript>请启用JavaScript体验内置内容。</noscript><script type="module" src="/demo-runtime.js"></script></body></html>`;
for(const name of ['index.html','search.html','manage.html'])await writeFile(path.join(site,name),html);
await writeFile(path.join(site,'demo.css'),`.demo-notice{position:fixed;top:0;left:0;right:0;height:30px;z-index:120;background:#eef4fc;color:#475467;font:12px/30px system-ui;text-align:center;border-bottom:1px solid #dce5f1}body:not(.demo-embedded) #root{height:calc(100dvh - 30px);padding-top:30px;box-sizing:content-box}body:not(.demo-embedded) .ws-shell{height:calc(100dvh - 30px);min-height:0}body.demo-embedded{background:#fff}.demo-presets{display:flex;align-items:center;gap:10px;padding:5px 2px;font-size:12px;color:#667085}.demo-presets select{font:inherit;color:#475467;max-width:100%;background:transparent;border:0;cursor:pointer}.demo-management{max-width:740px;margin:90px auto;padding:36px;font:16px/1.9 system-ui}.demo-management h1{font-size:28px}.demo-management a{color:#305fbb}`);

console.log('Static experience built at '+site);
