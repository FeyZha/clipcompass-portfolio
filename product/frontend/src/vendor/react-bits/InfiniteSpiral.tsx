'use client';

// Adapted from React Bits, commit 1eeb6f105c68b964289d85dabbe84a1d551f3797.
// Original source and MIT + Commons Clause license: frontend/third-party/react-bits/.
import { useEffect, useMemo, useRef, type CSSProperties, type ReactNode, type PointerEvent as ReactPointerEvent } from 'react';
import './InfiniteSpiral.css';

export interface InfiniteSpiralItem {
  id?: string | number;
  src?: string;
  alt?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  label?: string;
}

export interface InfiniteSpiralProps {
  layout?: 'spiral' | 'arc';
  items?: Array<string | InfiniteSpiralItem>;
  speed?: number;
  direction?: 'up' | 'down';
  animationMode?: 'auto' | 'drag' | 'scroll' | 'all';
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardsPerTurn?: number;
  rotation?: number;
  cardTilt?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeFade?: number;
  edgeBlur?: number;
  pauseOnHover?: boolean;
  imageFit?: CSSProperties['objectFit'];
  grayscale?: number;
  className?: string;
  renderItem?: (item: InfiniteSpiralItem, index: number) => ReactNode;
  paused?: boolean;
  initialIndex?: number;
  navigation?: { index: number; revision: number };
  onIndexChange?: (index: number) => void;
  onProgressChange?: (progress: number, reducedMotion: boolean) => void;
  listenToPageScroll?: boolean;
  visibleItems?: number;
}

type NormalizedItem = InfiniteSpiralItem & { alt: string };

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const modulo = (value: number, divisor: number) => ((value % divisor) + divisor) % divisor;
const smoothstep = (min: number, max: number, value: number) => {
  const x = clamp((value - min) / (max - min || 1), 0, 1);
  return x * x * (3 - 2 * x);
};

const InfiniteSpiral = ({
  layout = 'spiral',
  items = [],
  speed = 0.55,
  direction = 'up',
  animationMode = 'auto',
  radius = 170,
  cardWidth = 100,
  cardHeight = 100,
  verticalSpacing = 60,
  perspective = 1000,
  cardsPerTurn = 7,
  rotation = 0,
  cardTilt = 0,
  cardRadius = 10,
  centerScale = 1.2,
  edgeFade = 0.3,
  edgeBlur = 6,
  pauseOnHover = true,
  imageFit = 'cover',
  grayscale = 0,
  className = '',
  renderItem,
  paused = false,
  initialIndex = 0,
  navigation,
  onIndexChange,
  onProgressChange,
  listenToPageScroll = true,
  visibleItems
}: InfiniteSpiralProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | HTMLDivElement | null>>([]);
  const progressRef = useRef(initialIndex);
  const targetProgressRef = useRef(initialIndex);
  const autoSpeedRef = useRef(0);
  const hoveredRef = useRef(false);
  const visibleRef = useRef(true);
  const draggingRef = useRef(false);
  const lastPointerYRef = useRef(0);
  const dragMovedRef = useRef(false);
  const startPointerYRef = useRef(0);
  const focusedRef = useRef(false);
  const reportedIndexRef = useRef(-1);
  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;
  const onProgressChangeRef = useRef(onProgressChange);
  onProgressChangeRef.current = onProgressChange;
  const textCards = Boolean(renderItem);

  const normalizedItems = useMemo<NormalizedItem[]>(
    () =>
      items.map((item, index) =>
        typeof item === 'string'
          ? { src: item, alt: `Spiral image ${index + 1}` }
          : { alt: `Spiral image ${index + 1}`, ...item }
      ),
    [items]
  );

  useEffect(() => {
    if (!navigation || !normalizedItems.length) return;
    const count = normalizedItems.length;
    const offset = modulo(navigation.index - progressRef.current + count / 2, count) - count / 2;
    targetProgressRef.current = progressRef.current + offset;
    autoSpeedRef.current = 0;
  }, [navigation, normalizedItems.length]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || normalizedItems.length === 0) return;

    let frameId = 0;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let previousTime = performance.now();
    let bounds = root.getBoundingClientRect();
    let galleryLeft = root.parentElement?.offsetLeft || 0;
    let lastRendered = NaN;
    let lastCoverLeft = "";
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const scrollEnabled = listenToPageScroll && (animationMode === 'scroll' || animationMode === 'all');
    const scrollSpeedMultiplier = Math.max(speed, 0) / 0.55;
    let lastScrollY = window.scrollY;
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => {
      bounds = root.getBoundingClientRect();
      galleryLeft = root.parentElement?.offsetLeft || 0;
      lastRendered = NaN;
    });
    resizeObserver?.observe(root);
    const intersectionObserver = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    intersectionObserver?.observe(root);

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const scrollDelta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;
      if (!scrollEnabled || !visibleRef.current || scrollDelta === 0) return;
      targetProgressRef.current += clamp(
        (scrollDelta * scrollSpeedMultiplier) / Math.max(verticalSpacing * 2, 1),
        -1.5,
        1.5
      );
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const wheelSurface = layout === 'arc' ? root.closest('.collection-depth-stage') || root : null;
    const handleWheel = (event: Event) => {
      const wheel = event as WheelEvent;
      if (wheel.ctrlKey || paused || !visibleRef.current) return;
      wheel.preventDefault();
      if (normalizedItems.length < 2) return;
      const delta = wheel.deltaY * (wheel.deltaMode === 1 ? 16 : wheel.deltaMode === 2 ? bounds.height : 1);
      targetProgressRef.current += clamp(delta / 180, -2, 2);
      clearTimeout(settleTimer);
      settleTimer=setTimeout(()=>{targetProgressRef.current=Math.round(targetProgressRef.current);},100);
    };
    wheelSurface?.addEventListener('wheel', handleWheel, {passive:false});
    const render = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      const autoEnabled = animationMode === 'auto' || animationMode === 'all';
      const motionPaused = paused || focusedRef.current || draggingRef.current || (pauseOnHover && hoveredRef.current);
      const directionMultiplier = direction === 'down' ? -1 : 1;
      const desiredAutoSpeed =
        normalizedItems.length > 1 && autoEnabled && visibleRef.current && !document.hidden && !reducedMotion?.matches && !motionPaused
          ? speed * directionMultiplier
          : 0;
      const speedBlend = 1 - Math.exp(-delta * 7);
      // Preserve upstream deceleration on pointer hover/drag. Explicit pause and
      // keyboard focus still stop immediately so reading and navigation stay put.
      if (paused || focusedRef.current || reducedMotion?.matches) autoSpeedRef.current = 0;
      autoSpeedRef.current += (desiredAutoSpeed - autoSpeedRef.current) * speedBlend;
      targetProgressRef.current += autoSpeedRef.current * delta;

      const followBlend = 1 - Math.exp(-delta * (draggingRef.current ? 22 : layout === 'arc' ? 18 : 11));
      progressRef.current += (targetProgressRef.current - progressRef.current) * (reducedMotion?.matches ? 1 : followBlend);

      if (layout === 'arc' && Number.isFinite(lastRendered) && Math.abs(progressRef.current-lastRendered)<.00001) {
        frameId=requestAnimationFrame(render);return;
      }
      lastRendered=progressRef.current;
      onProgressChangeRef.current?.(progressRef.current, Boolean(reducedMotion?.matches));
      const count = normalizedItems.length;
      const half = count / 2;
      const visibleHalf = Math.min(count, visibleItems ?? count) / 2;
      const width = Math.max(bounds.width, 1);
      const height = Math.max(bounds.height, 1);
      // Retain upstream gallery proportions and depth on the desktop canvas.
      const fit = Math.min(1, width / (cardWidth * (layout === 'arc' ? 2.2 : 2.8)), height / (cardHeight * (layout === 'arc' ? 3.2 : 2.35)));
      const circleRadius = Math.min(width * .24, height * .35);
      const centerShift = layout === 'arc' ? cardWidth * fit * .24 : 0;
      if (layout === 'arc') {
        const surface = root.closest<HTMLElement>('.collection-depth-stage');
        const coverLeft=`${galleryLeft + width / 2 + circleRadius - centerShift - cardWidth * fit * .6}px`;
        if(coverLeft!==lastCoverLeft){surface?.style.setProperty('--collection-cover-left',coverLeft);lastCoverLeft=coverLeft;}
      }
      const responsiveRadius = Math.min(radius, Math.max(72, width * 0.36)) * fit;
      const fadeStart = clamp(1 - edgeFade, 0, 0.98);
      const turnSize = Math.max(cardsPerTurn, 1);
      const activeIndex = modulo(Math.round(progressRef.current), count);
      if (reportedIndexRef.current !== activeIndex) {
        reportedIndexRef.current = activeIndex;
        onIndexChangeRef.current?.(activeIndex);
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const offset = modulo(index - progressRef.current + half, count) - half;
        const edge = Math.min(Math.abs(offset) / Math.max(visibleHalf, 1), 1);
        const opacity = layout === 'arc' ? 1 : 1 - smoothstep(fadeStart, 1, edge);
        const focus = 1 - Math.min(Math.abs(offset) / Math.max(turnSize * 0.65, 1), 1);
        const scale = (layout === 'arc' ? .3 + (centerScale - .3) * focus * focus : 1 + (centerScale - 1) * focus) * fit;
        const angle = offset * (360 / (layout === 'arc' ? count : turnSize)) + rotation;
        const angleRadians = (angle * Math.PI) / 180;
        const x = layout === 'arc' ? Math.cos(angleRadians) * circleRadius - centerShift : Math.sin(angleRadians) * responsiveRadius;
        const z = Math.cos(angleRadians) * responsiveRadius;
        const depthScale = clamp(perspective / Math.max(perspective - z, 1), 0.72, 1.45);
        const visualScale = layout === 'arc' ? fit * (.23 + .97 * ((Math.cos(angleRadians)+1)/2)**2) : scale * depthScale;
        const y = layout === 'arc' ? Math.sin(angleRadians) * circleRadius : offset * verticalSpacing * fit;
        const depth = (z / Math.max(responsiveRadius, 1) + 1) / 2;
        const recession = layout === 'arc' ? smoothstep(.015, .85, 1 - depth) : 0;
        const blur = layout === 'arc' ? 14 * recession : edgeBlur * smoothstep(0.35, 1, edge);
        card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotateZ(${cardTilt}deg) scale(${visualScale})`;
        card.style.opacity = (layout === 'arc' ? 1 - .94 * recession : opacity).toFixed(3);
        card.style.filter = layout === 'arc' ? `blur(${blur.toFixed(2)}px) saturate(${(1 - .8 * recession).toFixed(3)})` : blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : 'none';
        card.style.zIndex = String(Math.round(depth * 100000) + index);
        card.style.pointerEvents = layout === 'arc' ? (index === activeIndex ? 'auto' : 'none') : opacity > 0.25 ? 'auto' : 'none';
        if (textCards) card.style.visibility = layout === 'arc' || Math.abs(offset * verticalSpacing) <= height / 2 + cardHeight ? 'visible' : 'hidden';
        card.dataset.active = String(index === activeIndex);
        card.tabIndex = index === activeIndex ? 0 : -1;
      });
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(settleTimer);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      wheelSurface?.removeEventListener('wheel', handleWheel);
    };
  }, [
    normalizedItems,
    layout,
    speed,
    direction,
    animationMode,
    radius,
    perspective,
    cardWidth,
    cardHeight,
    verticalSpacing,
    cardsPerTurn,
    rotation,
    cardTilt,
    centerScale,
    edgeFade,
    edgeBlur,
    pauseOnHover,
    paused,
    textCards,
    listenToPageScroll,
    visibleItems
  ]);

  const rootStyle = {
    perspective: `${perspective}px`,
    '--infinite-spiral-card-width': `${cardWidth}px`,
    '--infinite-spiral-card-height': `${cardHeight}px`,
    '--infinite-spiral-card-radius': `${cardRadius}px`,
    cursor: animationMode === 'drag' || animationMode === 'all' ? 'grab' : 'default',
    // Touch users scroll the page normally; explicit previous/next controls navigate cards.
    touchAction: textCards ? 'pan-y' : animationMode === 'drag' || animationMode === 'all' ? 'pan-x' : 'auto',
    userSelect: animationMode === 'drag' || animationMode === 'all' ? 'none' : 'auto'
  } as CSSProperties;

  const dragEnabled = animationMode === 'drag' || animationMode === 'all';

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.style.cursor = dragEnabled ? 'grab' : 'default';
  };

  const setCardRef = (index: number) => (node: HTMLAnchorElement | HTMLDivElement | null) => {
    cardRefs.current[index] = node;
  };

  const cardStyle: CSSProperties = { width: cardWidth, height: cardHeight, borderRadius: cardRadius };
  const imageStyle: CSSProperties = {
    width: cardWidth,
    height: cardHeight,
    maxWidth: 'none',
    maxHeight: 'none',
    objectFit: imageFit,
    filter: `grayscale(${Math.min(1, Math.max(0, grayscale))})`
  };

  return (
    <div
      ref={rootRef}
      className={`infinite-spiral ${className}`.trim()}
      style={rootStyle}
      onDragStart={event => { if (dragEnabled) event.preventDefault(); }}
      onFocusCapture={() => { focusedRef.current = true; }}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) focusedRef.current = false; }}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
      onPointerDown={event => {
        if (!dragEnabled || event.button !== 0 || (textCards && event.pointerType === 'touch')) return;
        draggingRef.current = true;
        dragMovedRef.current = false;
        lastPointerYRef.current = event.clientY;
        startPointerYRef.current = event.clientY;
        targetProgressRef.current = progressRef.current;
        event.currentTarget.style.cursor = 'grabbing';
      }}
      onPointerMove={event => {
        if (!draggingRef.current) return;
        const pointerDelta = event.clientY - lastPointerYRef.current;
        lastPointerYRef.current = event.clientY;
        if (!dragMovedRef.current && Math.abs(event.clientY - startPointerYRef.current) < 6) return;
        if (!dragMovedRef.current) event.currentTarget.setPointerCapture(event.pointerId);
        dragMovedRef.current = true;
        targetProgressRef.current -= pointerDelta / Math.max(verticalSpacing, 1);
      }}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onLostPointerCapture={stopDragging}
      onClickCapture={event => {
        if (!dragMovedRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        dragMovedRef.current = false;
      }}
    >
      <div className="infinite-spiral__stage" role="group" aria-label={layout === 'arc' ? '收藏视频封面' : textCards ? '收藏里的问题气泡' : 'Infinite spiral gallery'}>
        {normalizedItems.map((item, index) => {
          const content = renderItem ? renderItem(item, index) : (
            <img
              className="infinite-spiral__image"
              src={item.src}
              alt={item.alt}
              loading={index < 6 ? 'eager' : 'lazy'}
              draggable={false}
              style={imageStyle}
            />
          );

          return item.href ? (
            <a
              key={item.id ?? `${item.src}-${index}`}
              ref={setCardRef(index)}
              className="infinite-spiral__item"
              style={cardStyle}
              href={item.href}
              target={item.target}
              rel={item.target === '_blank' ? 'noreferrer' : undefined}
              data-question-key={item.id}
              tabIndex={index === initialIndex ? 0 : -1}
              aria-label={item.label ?? item.alt}
            >
              {content}
            </a>
          ) : (
            <div
              key={item.id ?? `${item.src}-${index}`}
              ref={setCardRef(index)}
              className="infinite-spiral__item"
              style={cardStyle}
              tabIndex={index === initialIndex ? 0 : -1}
              aria-label={item.label ?? item.alt}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteSpiral;

