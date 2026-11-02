import { useEffect, useRef } from "react";
import { ComposerPrimitive, MessagePrimitive, ThreadPrimitive, useAui } from "@assistant-ui/react";
import { InlineResults } from "./InlineResults";
import { LibraryShelf } from "./LibraryShelf";
import { Card, PromptSuggestion } from "./ui-elements";
import type { SearchResponse, Video } from "./types";
import "./ui.css";
import "./workspace/reading-kimi.css";

export interface ChatProps {
  question: string;
  onQuestionChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  report: SearchResponse | null;
  experimental?: boolean;
  busy: boolean;
  disabled: boolean;
  collectionTitle: string;
  videoCount: number;
  notice: string;
  clarification: string;
  onRetryLibrary?: () => void;
  presets?: { label: string; question: string }[];
  videos?: Video[];
}
const EMPTY_VIDEOS: Video[] = [];

export function Chat({ question, onQuestionChange, onSubmit, report, busy, disabled,
  collectionTitle, videoCount, notice, clarification, onRetryLibrary, presets = [], videos = EMPTY_VIDEOS }: ChatProps) {
  const aui = useAui();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const useTopic = (text: string) => { onQuestionChange(text); inputRef.current?.focus(); };

  // The external draft remains authoritative, including after restore and failed requests.
  useEffect(() => {
    if (aui.composer.getState().text !== question) aui.composer.setText(question);
  }, [aui, question]);
  useEffect(() => { if (viewportRef.current) viewportRef.current.scrollTop = 0; }, [report]);

  const submit = async () => {
    if (busy || disabled || !question.trim() || submittingRef.current) return;
    submittingRef.current = true;
    try { await onSubmit(); }
    finally { submittingRef.current = false; }
  };

  const composer = <div className="cc-composer-wrap">
    {/* Prompt Kit's input/action layout, with the existing IME and submit handling. */}
    <ComposerPrimitive.Root ref={formRef} className="cc-composer" onSubmit={(event) => {
      event.preventDefault();
      void submit();
    }} aria-label="从收藏中提问">
      <ComposerPrimitive.Input
        id="question" ref={inputRef} value={question}
        onChange={(event) => onQuestionChange(event.target.value)}
        placeholder="向收藏中的知识提问"
        aria-label="你想从收藏里了解什么？"
        aria-describedby="collectionScope"
        disabled={disabled} rows={1} maxRows={7} maxLength={2000}
        autoFocus={!report} addAttachmentOnPaste={false} cancelOnEscape={false}
        unstable_focusOnRunStart={false} unstable_focusOnScrollToBottom={false}
        unstable_focusOnThreadSwitched={false}
        className="cc-composer-input"
      />
      <div className="cc-composer-actions">
        <p id="collectionScope" className="cc-collection-scope">
          <svg className="cc-scope-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18M8 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span>{collectionTitle || "正在连接收藏"}{!disabled ? ` · ${videoCount} 个视频` : ""}</span>
        </p>
        <ComposerPrimitive.Send className="cc-send" aria-label={busy ? "正在查找" : "从收藏中查找"}
          title={busy ? "正在查找" : "从收藏中查找"}
          disabled={busy || disabled || !question.trim()}
          onClick={(event) => {
            event.preventDefault();
            formRef.current?.requestSubmit();
          }}>
          {busy ? <span className="cc-wait-mark" aria-hidden="true">···</span> :
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 16V4M4.5 9.5 10 4l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
        </ComposerPrimitive.Send>
      </div>
    </ComposerPrimitive.Root>

  </div>;

  const feedback = <div className="cc-feedback" aria-live="polite">
    {busy ? <p className="cc-waiting" role="status">正在查找收藏并整理导读…{report ? " 上一份内容仍可查看。" : ""}</p> : null}
    {notice ? <div className="cc-notice" role="status"><p>{notice}</p>
      {disabled && onRetryLibrary ? <button type="button" className="cc-text-button" onClick={onRetryLibrary}>重新连接收藏</button> : null}
    </div> : null}
    {clarification ? <div className="cc-clarification" role="status"><p>{clarification}</p>
      <button type="button" className="cc-text-button" onClick={() => inputRef.current?.focus()}>补充问题</button>
    </div> : null}
  </div>;

  return (
    <main id="mainContent" className={`assistant-page cc-kimi-chat${report ? " cc-has-answer" : " cc-empty-thread"}`}>
      <ThreadPrimitive.Root className="cc-thread">
        {report ? <header className="cc-chat-header"><h1>相关讲解</h1></header> : null}
        {report ? <ThreadPrimitive.Viewport ref={viewportRef} className="cc-thread-viewport" autoScroll={false}
          scrollToBottomOnInitialize={false} scrollToBottomOnRunStart={false} scrollToBottomOnThreadSwitch={false}>
          <div className="cc-messages">
            <ThreadPrimitive.Messages>{({ message }) => message.role === "user" ? (
              <MessagePrimitive.Root className="cc-user-message" aria-label="你的问题">
                <div className="cc-user-bubble"><MessagePrimitive.Parts /></div>
              </MessagePrimitive.Root>
            ) : (
              <MessagePrimitive.Root className="cc-assistant-message">
                <Card className="cc-reading-card">
                  <InlineResults response={report} />
                </Card>
              </MessagePrimitive.Root>
            )}</ThreadPrimitive.Messages>
            <LibraryShelf videos={videos} collectionTitle={collectionTitle} compact disabled={disabled || busy} onUseTopic={useTopic} />
          </div>
          <ThreadPrimitive.ViewportFooter className="cc-thread-footer">
            <div className="cc-footer-content">{feedback}{composer}</div>
          </ThreadPrimitive.ViewportFooter>
        </ThreadPrimitive.Viewport> : <div className="cc-empty-content">
          <div className="cc-empty-inner">
            <h1>从收藏中查找讲解</h1>
            {composer}
            {presets.length ? <div className="cc-presets" aria-label="可以这样提问">
              {presets.map((preset) => <PromptSuggestion key={preset.question} disabled={busy || disabled}
                onClick={() => { onQuestionChange(preset.question); inputRef.current?.focus(); }}>
                <span>{preset.label}<b aria-hidden="true">↗</b></span>{preset.question}
              </PromptSuggestion>)}
            </div> : null}
            {feedback}
            <LibraryShelf videos={videos} collectionTitle={collectionTitle} disabled={disabled || busy} onUseTopic={useTopic} />
          </div>
        </div>}
      </ThreadPrimitive.Root>
    </main>
  );
}
