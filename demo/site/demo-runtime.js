/* Static experience adapter. Fixtures are read in this browser; no backend requests. */
const fixtures = await (await fetch('./demo-data.json')).json();
window.DEMO_PRESETS = fixtures.searches.map(({label, question}) => ({label, question}));
window.__demoCalls = [];
const nativeFetch = window.fetch.bind(window);
const normalize = value => String(value).toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, '');
function search(question) {
  const text = normalize(question);
  const exact = fixtures.searches.find(item => normalize(item.question) === text);
  if (exact) return structuredClone(exact.response);
  // Existing saved explanations may be discovered by lexical match only.
  // Never reuse a different question's evidence-coverage judgement.
  const terms = String(question).toLowerCase().match(/[a-z0-9]+|[\u3400-\u9fff]+/g) || [];
  const tokens = [...new Set(terms.flatMap(word => /[\u3400-\u9fff]/u.test(word) && word.length > 2
    ? Array.from({length:word.length-1},(_,i)=>word.slice(i,i+2)) : [word]).filter(t=>t.length>1))];
  const matches = Object.entries(fixtures.states).flatMap(([vid,state]) => state.bundle.questions.map(q => ({vid,q,
    score: tokens.filter(t => `${q.question} ${q.answer} ${q.explanation}`.toLowerCase().includes(t)).length,
    titleScore: tokens.filter(t => q.question.toLowerCase().includes(t)).length})))
    .filter(x => x.score >= Math.min(3, Math.max(1, Math.ceil(tokens.length * .55))) && x.titleScore > 0)
    .sort((a,b) => (b.titleScore * 3 + b.score) - (a.titleScore * 3 + a.score)).slice(0,3);
  const results = matches.map(({vid,q}) => {
    const v = fixtures.explore.videos.find(v=>v.video_id===vid), r=q.ranges[0];
    return {video_id:vid, video_title:v.title,creator:v.creator,source_url:v.source_url,
      recommended_watch_start:r.start,recommended_watch_end:r.end,playback_start:r.start,
      key_start:r.start,key_end:r.end,reason:q.answer,chapter:{title:q.question,start:r.start,end:r.end,summary:q.explanation}};
  });
  return {ok:true,question,status:results.length?'partial':'no_evidence',answerable:false,results,
    warning:results.length?'本地关键词匹配：以下是相关的已存讲解，未进行模型理解或完整性判断。':
      '体验版未匹配到内置结果。可选择搜索示例体验；这不表示真实产品或完整收藏中没有答案。',
    report:{format:'video_story_v1',sections:results.map(c=>({title:c.chapter.title,
      content:`相关的已存问题：${c.chapter.title}\n\n${c.reason}`,sources:[c]}))}};
}
window.fetch = async (input, init={}) => {
  const url = new URL(input instanceof Request ? input.url : String(input),location.href);
  if (url.origin !== location.origin || !url.pathname.startsWith('/api/')) return nativeFetch(input,init);
  if (init.signal?.aborted) throw new DOMException('Aborted','AbortError');
  const method=(init.method||(input instanceof Request?input.method:'GET')).toUpperCase();
  let body={};
  if(init.body)body=JSON.parse(String(init.body));
  let value, status=200;
  const path=url.pathname;
  window.__demoCalls.push({path,method,at:Date.now()});
  if(path==='/api/explore/library'&&method==='GET')value=fixtures.explore;
  else if(path==='/api/library'&&method==='GET')value=fixtures.library;
  else if(['/api/search','/api/adaptive/search'].includes(path)&&method==='POST')value=search(body.question||'');
  else {
    let m=path.match(/^\/api\/explore\/videos\/([\w-]+)$/);
    if(m&&method==='GET')value=fixtures.states[m[1]];
    m=path.match(/^\/api\/videos\/([\w-]+)\/(reading|core-summary)(\/timings)?$/);
    if(m&&method==='GET')value=(m[2]==='reading'?fixtures.readings:fixtures.summaries)[m[1]];
    if(m&&m[3]&&method==='POST')value=fixtures.summaries[m[1]]?.timings;
    if(!value){status=method==='GET'?404:409;value={ok:false,message:'体验版仅使用内置内容，暂不提供新增视频或实时生成。'};}
  }
  return new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json; charset=utf-8'}});
};
const params=new URLSearchParams(location.search);
document.body.classList.toggle('demo-embedded',params.has('embed'));
const banner=document.createElement('aside');banner.className='demo-notice';banner.setAttribute('aria-label','体验版说明');
banner.textContent='体验版 · 20 条视频 / 95 个问题 · 搜索使用内置示例与本地关键词匹配 · 原片播放需能访问 YouTube';
if(!params.has('embed'))document.body.prepend(banner);
const mount = params.has('embed')||params.has('reading')||params.has('results')||location.pathname==='/search.html'?'./ui/app.js':'./explore/app.js';
if(location.pathname==='/manage.html'){
 document.getElementById('root').innerHTML='<main class="demo-management"><a href="/">← 返回发现问题</a><h1>体验版说明</h1><p>已内置20条视频、95个探索问题、完整导读、核心纪要和9组历史搜索示例。</p><p>你可以浏览、搜索、阅读、跳转原片；新增视频、重新生成及账号设置需在完整产品中使用。</p><p>搜索示例展示真实保存的历史结果；其他输入仅做本地关键词匹配。页面不会连接本机服务或调用模型。</p><a href="/#view=collection">浏览我的收藏 →</a></main>';
}else await import(mount);
