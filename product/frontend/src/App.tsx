import {WorkspaceShell} from './workspace/WorkspaceShell';
import { useEffect, useMemo, useRef } from 'react';
import { AssistantRuntimeProvider, useExternalStoreRuntime, type ThreadMessageLike } from '@assistant-ui/react';
import { Chat } from './Chat';
import { useLibraryConnection, useSearchSession } from './session';
import { VideoReading } from './VideoReading';

const convertMessage = (message: ThreadMessageLike): ThreadMessageLike => message;
const atlasEmbedded = new URLSearchParams(window.location.search).get('embed') === 'atlas';
const atlasOrigin = 'http://127.0.0.1:14855';

export function App({ experimental = window.location.pathname === '/adaptive.html' }: { experimental?: boolean } = {}) {
  const readingId = new URLSearchParams(window.location.search).get('reading');
  if(atlasEmbedded&&new URLSearchParams(window.location.search).get('library')==='1')return <CollectionBridge/>;
  const content=readingId !== null ? <ReadingPage videoId={readingId} /> : <SearchApp experimental={experimental} />;
  return atlasEmbedded ? <div data-design="enterprise-workspace" className="ws-embedded">{content}</div> : <WorkspaceShell active={readingId!==null?'collection':'ask'} title={readingId!==null?'完整阅读':undefined} immersive>{content}</WorkspaceShell>;
}
// Read-only capability bridge for the collection, separate from asking or opening a reading.
function CollectionBridge(){
  const connection=useLibraryConnection();
  useEffect(()=>{
    if(window.parent===window)return;
    if(connection.error){window.parent.postMessage({type:'clipcompass:error'},atlasOrigin);return;}
    if(!connection.library)return;
    const ids=connection.library.collections[0]?.video_ids||[];
    const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),8000);let canceled=false;
    window.parent.postMessage({type:'clipcompass:ready',videoIds:ids},atlasOrigin);
    void Promise.all(ids.map(async id=>{
      try{
        const response=await fetch(`/api/videos/${encodeURIComponent(id)}/reading`,{signal:controller.signal});
        if(!response.ok)return [id,'unknown'];
        const state=await response.json();
        return [id,state.video_id===id&&['ready','not_generated','generating','failed','unavailable'].includes(state.status)?state.status:'unknown'];
      }catch{return [id,'unknown'];}
    })).then(states=>{clearTimeout(timer);if(!canceled)window.parent.postMessage({type:'clipcompass:readings',states:Object.fromEntries(states)},atlasOrigin);});
    return()=>{canceled=true;clearTimeout(timer);controller.abort();};
  },[connection.library,connection.error]);
  return null;
}
function ReadingPage({ videoId }: { videoId: string }) {
  const connection = useLibraryConnection();
  const video = connection.library?.videos.find(item => item.video_id === videoId);
  return <div className="cc-app-shell"><a className="skip-link" href="#mainContent">跳到主要内容</a>
    <VideoReading videoId={videoId} video={video} embedded={atlasEmbedded} /></div>;
}
function SearchApp({ experimental }: { experimental: boolean }) {
  const connection = useLibraryConnection();
  const session = useSearchSession(connection.library, experimental);
  const received = useRef(new Set<string>());
  useEffect(() => {
    if (!atlasEmbedded || window.parent === window) return;
    const receive = (event: MessageEvent) => {
      if (event.origin !== atlasOrigin || event.source !== window.parent) return;
      const data = event.data;
      if(data?.type==='clipcompass:pause'){
        document.querySelectorAll<HTMLMediaElement>('video,audio').forEach(media=>media.pause());
        document.querySelectorAll<HTMLIFrameElement>('iframe').forEach(frame=>{try{const origin=new URL(frame.src).origin;if(origin==='https://www.youtube.com'||origin==='https://www.youtube-nocookie.com')frame.contentWindow?.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}),origin);}catch{}});
        return;
      }
      if (!session.ready || session.busy || connection.error) return;
      if (!data || data.type !== 'clipcompass:ask' || typeof data.id !== 'string' || typeof data.question !== 'string' || !data.question.trim() || data.question.length > 8000 || received.current.has(data.id)) return;
      received.current.add(data.id);
      session.setQuestion(data.question);
      void session.submit(data.question);
    };
    window.addEventListener('message', receive);
    if (connection.error) window.parent.postMessage({type:'clipcompass:error'},atlasOrigin);
    else if (session.ready && connection.library) window.parent.postMessage({type:'clipcompass:ready',videoIds:connection.library.collections[0]?.video_ids||[],title:connection.library.collections[0]?.title},atlasOrigin);
    return () => window.removeEventListener('message', receive);
  }, [session.ready,session.busy,session.submit,session.setQuestion,connection.library,connection.error]);
  const messages = useMemo<ThreadMessageLike[]>(() => session.report ? [
    { id: 'saved-question', role: 'user', content: [{ type: 'text', text: session.report.question || '上次提问' }] },
    { id: 'saved-answer', role: 'assistant', content: [{ type: 'text', text:
      session.report.report?.sections.map(section => `${section.title}\n${section.content}`).join('\n\n') ||
      session.report.results.map(clip => clip.reason || clip.video_title).join('\n\n') || '本次未找到充分依据。' }] },
  ] : [], [session.report]);
  const runtime = useExternalStoreRuntime({ messages, convertMessage, isRunning: session.busy,
    onNew: async message => {
      const text = message.content.filter(part => part.type === 'text').map(part => part.text).join('\n');
      await session.submit(text);
    },
  });
  const collection = connection.library?.collections[0];
  const videos = useMemo(() => {
    const byId = new Map(connection.library?.videos.filter(video => video && typeof video.video_id === 'string').map(video => [video.video_id, video]));
    return (collection?.video_ids || []).flatMap(id => { const video = byId.get(id); return video ? [video] : []; });
  }, [connection.library, collection]);
  return <div className="cc-app-shell"><a className="skip-link" href="#mainContent">跳到主要内容</a>
    {experimental ? <div className="cc-trial-note" role="note">按需选片试用 <a href="/">返回原版</a></div> : null}
    <AssistantRuntimeProvider runtime={runtime}>
      <Chat question={session.question} onQuestionChange={session.setQuestion} onSubmit={() => session.submit()}
        report={session.report} experimental={experimental || connection.library?.answer_mode === 'inline'} busy={session.busy} disabled={!session.ready || Boolean(connection.error) || connection.loading}
        collectionTitle={collection?.title?.replace(/\s*·\s*\d+\s*个视频\s*$/, '') || '正在读取收藏'} videoCount={collection?.video_ids.length || 0}
        notice={[connection.error, !session.busy && session.notice, session.storageWarning].filter(Boolean).join(' ')}
        clarification={session.clarification} onRetryLibrary={() => { void connection.retry(); }}
        videos={videos}
        presets={connection.library?.demo_questions || []} />
    </AssistantRuntimeProvider>
  </div>;
}
