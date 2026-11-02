import { useState } from 'react';
import type { Reading } from './VideoReading';
import { formatTime } from './Report';
import { buildWatchUrl } from './watch-plan';
import './reading-visual.css';

// Reviewed against this video's saved public captions. Do not attach a CNN
// illustration to another video or silently apply it after the source changes.
const CNN_SOURCE = '6d31a40a62b1764dfcb2073ed66debcb306d718ee350fbb1397c9dd5dcec3e9c';
const CONCEPTS = [
  { id: 'local', label: '只看局部', chapter: 'reading-8', title: '卷积神经网络中的感受野（Receptive Field）概念',
    explanation: '绿色窗口是当前感受野：这个神经元只接收窗口内的输入，不看整张图。' },
  { id: 'sharing', label: '共用参数', chapter: 'reading-14', title: '参数共享概念',
    explanation: '换一个位置，仍使用同一组权重；看到的像素不同，算出的响应也可以不同。' },
  { id: 'map', label: '形成特征图', chapter: 'reading-21', title: '卷积层中多个滤波器产生特征图',
    explanation: '逐个位置计算响应，再按位置排好；一个滤波器得到一张特征图，不同滤波器可得到不同通道。' },
] as const;

export function hasReviewedVisual(reading: Reading): boolean {
  return reading.video_id === 'OP5HcXJg2Aw' && reading.source_fingerprint === CNN_SOURCE &&
    CONCEPTS.every(concept => reading.chapters.some(chapter => chapter.chapter_id === concept.chapter && chapter.title === concept.title)) &&
    reading.chapters.some(chapter => chapter.chapter_id === 'reading-20' && chapter.title === '卷积运算实例：6×6 影像与滤波器内积');
}

// Illustrative black-and-white pixels, not a reconstruction of the lecture slide.
export const DEMO_PIXELS = [
  [1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 1],
];
export const DEMO_KERNEL = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

/** One-channel, stride-one, no-padding demonstration, without bias or activation. */
export function demonstrationMap(pixels = DEMO_PIXELS, kernel = DEMO_KERNEL): number[][] {
  return Array.from({ length: 4 }, (_, row) => Array.from({ length: 4 }, (_, col) =>
    kernel.reduce((sum, line, y) => sum + line.reduce((part, value, x) => part + value * pixels[row + y][col + x], 0), 0)));
}

export function ReadingVisual({ reading, onPlayChapter }: { reading: Reading; onPlayChapter: (id: string) => void }) {
  const [conceptIndex, setConceptIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const concept = CONCEPTS[conceptIndex];
  const row = Math.floor(position / 4), col = position % 4;
  const map = demonstrationMap();
  const source = reading.chapters.find(chapter => chapter.chapter_id === concept.chapter)!;
  const sourceUrl = buildWatchUrl({ video_id: reading.video_id, video_title: reading.title, source_url: source.source_url,
    recommended_watch_start: source.start, recommended_watch_end: source.end }, source.start);
  return <div className="cc-reading-visual">
    <div className="cc-concept-route" role="img" aria-label="CNN的设计思路：全连接网络的代价，局部感受野加参数共享，构成卷积层">
      <span>全连接的代价</span><span aria-hidden="true">→</span><strong>只看局部 <small>＋</small> 共用参数</strong><span aria-hidden="true">→</span><span>卷积层</span>
    </div>
    <div className="cc-concept-choices" aria-label="选择图解概念">
      {CONCEPTS.map((item, index) => <button type="button" key={item.id} aria-pressed={conceptIndex === index}
        onClick={() => setConceptIndex(index)}>{index + 1}. {item.label}</button>)}
    </div>
    <p className="cc-concept-explanation">{concept.explanation}</p>
    <div className="cc-convolution-diagram" data-concept={concept.id} role="img" aria-label={`6乘6演示图像，当前窗口第${row + 1}行第${col + 1}列；使用同一个3乘3对角线滤波器，响应为${map[row][col]}；完整输出为4乘4特征图`}>
      <div className="cc-convolution-stage"><span>输入图像 · 6×6</span>
        <div className="cc-pixel-grid cc-pixel-input">
          {DEMO_PIXELS.flatMap((line, y) => line.map((value, x) => <span key={`${y}-${x}`} className={`cc-pixel${value ? ' is-one' : ''}${y >= row && y < row + 3 && x >= col && x < col + 3 ? ' in-window' : ''}`}>{value}</span>))}
          <div className="cc-receptive-window" style={{ left: `${col * 100 / 6}%`, top: `${row * 100 / 6}%` }} />
        </div><small>绿色框＝当前感受野</small>
      </div>
      <span className="cc-convolution-arrow" aria-hidden="true">×</span>
      <div className="cc-convolution-stage"><span>同一组权重 · 3×3</span>
        <div className="cc-pixel-grid cc-pixel-kernel">{DEMO_KERNEL.flatMap((line, y) => line.map((value, x) => <span className={`cc-pixel${value ? ' is-weight' : ''}`} key={`${y}-${x}`}>{value}</span>))}</div><small>移动窗口，权重不变</small>
      </div>
      <span className="cc-convolution-arrow" aria-hidden="true">→</span>
      <div className="cc-convolution-stage"><span>特征图 · 4×4</span>
        <div className="cc-pixel-grid cc-pixel-output">{map.flatMap((line, y) => line.map((value, x) => <span className={`cc-pixel${y === row && x === col ? ' is-response' : ''}`} key={`${y}-${x}`}>{value}</span>))}</div><small>当前位置响应：<strong>{map[row][col]}</strong></small>
      </div>
    </div>
    <label className="cc-window-control"><span>移动绿色窗口 <output>第 {row + 1} 行 · 第 {col + 1} 列</output></span>
      <input type="range" min="0" max="15" step="1" value={position} aria-label="移动感受野窗口" onChange={event => setPosition(Number(event.target.value))} />
    </label>
    <p className="cc-response-rule">响应＝对应位置相乘，再相加。单通道示意，步长 1，不补边。</p>
    <div className="cc-concept-footer"><span>像素与权重为演示值；实际权重需要学习。</span>
      {sourceUrl ? <a className="cc-reading-chapter-time" href={sourceUrl} target="_blank" rel="noopener noreferrer"
        aria-label={`图解对应原片 ${formatTime(source.start)}–${formatTime(source.end)}`}
        onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return; event.preventDefault(); onPlayChapter(source.chapter_id); }}>
        <span aria-hidden="true">▶</span>{formatTime(source.start)}–{formatTime(source.end)}
      </a> : null}
    </div>
    {reading.sections ? <div className="cc-video-route" aria-label="全片讲解顺序">{reading.sections.map((section, index) => <span key={section.chapter_ids[0]}><small>{String(index + 1).padStart(2, '0')}</small>{section.title}</span>)}</div> : null}
  </div>;
}
