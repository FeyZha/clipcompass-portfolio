import { useEffect, useMemo, useRef, useState } from 'react';
import InfiniteSpiral from '../vendor/react-bits/InfiniteSpiral';
import type { DiscoveryQuestion, Topic } from './Discovery';
import type { Video } from './ExploreApp';
import './question-spiral.css';

// Kept across visits to a question, without changing any saved learning material.
const positions = new Map<string, string>();
let motionPaused = false;
export interface SpiralQuestion extends DiscoveryQuestion { href: string }

export function QuestionSpiral({ questions, topics, videos, topic }: {
  questions: SpiralQuestion[]; topics: Topic[]; videos: Video[]; topic: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  const [paused, setPaused] = useState(() => motionPaused || positions.has(topic));
  const [initialIndex] = useState(() => Math.max(0, questions.findIndex(q => `${q.video_id}:${q.question_id}` === positions.get(topic))));
  const [active, setActive] = useState(initialIndex);
  const [navigation, setNavigation] = useState<{ index: number; revision: number }>();
  const items = useMemo(() => questions.map(q => ({ id: `${q.video_id}:${q.question_id}`, href: q.href, label: q.question })), [questions]);
  // Scale upstream pitch, radius and perspective together to preserve its path.
  const helixScale = 68 / 60;

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(Boolean(media?.matches));
    media?.addEventListener('change', change);
    return () => { media?.removeEventListener('change', change); };
  }, []);

  const remember = (index: number) => {
    setActive(index);
    const question = questions[index];
    if (question) positions.set(topic, `${question.video_id}:${question.question_id}`);
  };
  const move = (delta: number, focusCard = false) => {
    if (questions.length < 2) return;
    const index = (active + delta + questions.length) % questions.length;
    motionPaused = true;
    setPaused(true);
    setNavigation(previous => ({ index, revision: (previous?.revision ?? 0) + 1 }));
    remember(index);
    if (focusCard) host.current?.querySelectorAll<HTMLAnchorElement>('.infinite-spiral__item')[index]?.focus({ preventScroll: true });
  };

  return <section className="question-spiral" aria-label="气泡探索" onClick={event => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-question-key]');
    if (link?.dataset.questionKey) positions.set(topic, link.dataset.questionKey);
  }} onKeyDown={event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const focusCard = Boolean((event.target as Element).closest('a[data-question-key]'));
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { event.preventDefault(); move(1, focusCard); }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') { event.preventDefault(); move(-1, focusCard); }
  }}>
    <div className="spiral-field" ref={host}>
      <InfiniteSpiral items={items} animationMode="all" speed={.55} paused={paused || reduced}
        initialIndex={initialIndex} navigation={navigation} onIndexChange={remember} listenToPageScroll={false}
        radius={170 * helixScale} cardWidth={140} cardHeight={140} verticalSpacing={60 * helixScale}
        cardsPerTurn={7} perspective={1000 * helixScale} centerScale={1.2} edgeBlur={6} edgeFade={.3} cardRadius={14} visibleItems={10}
        className="question-orbit" renderItem={(_, index) => {
          const q = questions[index];
          const source = videos.find(v => v.video_id === q.video_id);
          const topicIndex = Math.max(0, topics.findIndex(t => t.id === q.topic_id));
          return <div className="question-bubble" data-tone={topicIndex % 5} title={source?.title}>
            <h3>{q.question}</h3>
          </div>;
        }}/>
    </div>
    <div className="spiral-controls">
      <div className="spiral-pagination"><button type="button" aria-label="上一个问题" disabled={questions.length < 2} onClick={() => move(-1)}>←</button><span aria-label={`第 ${active + 1} 个，共 ${questions.length} 个问题`}>{String(active + 1).padStart(2, '0')} <i>/ {String(questions.length).padStart(2, '0')}</i></span><button type="button" aria-label="下一个问题" disabled={questions.length < 2} onClick={() => move(1)}>→</button></div>
      {questions.length > 1 && !reduced ? <button type="button" className="spiral-pause" aria-pressed={paused} onClick={() => { motionPaused = !paused; setPaused(!paused); setNavigation(undefined); }}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>{paused ? '继续浮动' : '暂停浮动'}</button> : <span className="spiral-still">{questions.length === 1 ? '从这个问题开始' : '用箭头慢慢看'}</span>}
    </div>
  </section>;
}
