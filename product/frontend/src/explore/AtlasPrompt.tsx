/* Adapted from Prompt Kit prompt-input-actions.tsx (MIT, 5a9496635cc0e1bf7679fe2a9e35d9b36b99c08a).
 * Retains its anchored input / action-row / circular submit structure. Native form controls
 * replace the upstream wrappers; existing ClipCompass submission and IME behavior are used.
 */
import type {ReactNode,RefObject} from 'react';
export function PromptInputWithActions({value,onValueChange,onSubmit,ready,count,error,storageWarning,retry,inputRef,compact=false,footerActions}:{value:string;onValueChange:(text:string)=>void;onSubmit:()=>void;ready:boolean;count:number;error:string;storageWarning:string;retry:()=>void;inputRef:RefObject<HTMLTextAreaElement|null>;compact?:boolean;footerActions?:ReactNode}){
 return <form className="atlas-composer" onSubmit={e=>{e.preventDefault();onSubmit();}}>
  <label htmlFor="atlas-ask">有自己的问题？从视频里找讲解</label>
  <div className="atlas-composer-row">
   {compact?<svg className="orbit-search-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></svg>:null}
   <textarea id="atlas-ask" ref={inputRef} value={value} rows={1} maxLength={8000} placeholder="向收藏提问…" onChange={e=>onValueChange(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();onSubmit();}}}/>
   <button type="submit" disabled={!value.trim()||!ready} aria-label="从视频中查找讲解"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6"/></svg></button>
  </div>
  <div className="atlas-composer-meta"><span>{ready?`可检索 ${count} 条视频`:'正在连接视频检索…'}</span>{footerActions}{error?<span role="status">{error}<button type="button" onClick={retry}>重新连接</button></span>:storageWarning?<span role="status">{storageWarning}</span>:null}</div>
 </form>;
}
