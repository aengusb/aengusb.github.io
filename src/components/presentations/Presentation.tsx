'use client';

import { useState, useEffect, useCallback, useRef, ReactNode, isValidElement, cloneElement, ReactElement } from 'react';

type Theme = 'personal' | 'meo' | 'mtd';

interface PresentationProps {
  children: ReactNode[];
  title?: string;
  theme?: Theme;
}

/**
 * Fragment support: any child slide can declare `data-fragments={N}` to enable
 * click-to-reveal sub-steps. Inside that slide, use the CSS class `fragment`
 * plus `fragment-{index}` (0-based) on elements. They'll get `opacity: 0` by
 * default and `opacity: 1` when their step is reached.
 *
 * Speaker notes: any child slide can declare `data-notes="..."` to attach
 * speaker notes. Press `s` to open a speaker notes window that shows the
 * current slide notes, next slide preview, and a timer.
 */

function SpeakerNotes() {
  const [state, setState] = useState({
    currentSlide: 0,
    fragmentIndex: -1,
    totalSlides: 0,
    notes: '',
    nextNotes: '',
  });
  const [elapsed, setElapsed] = useState(0);
  const startTime = useRef(Date.now());
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    channelRef.current = new BroadcastChannel('presentation-sync');
    channelRef.current.addEventListener('message', (e: MessageEvent) => {
      if (e.data?.type === 'state') setState(e.data.payload);
    });
    return () => channelRef.current?.close();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setElapsed(Math.floor((Date.now() - startTime.current) / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        channelRef.current?.postMessage({ type: 'next' });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        channelRef.current?.postMessage({ type: 'prev' });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#1a1a2e', color: '#e8e8ed', height: '100vh', display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1rem', opacity: 0.6 }}>Speaker Notes</h1>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '2rem', fontVariantNumeric: 'tabular-nums', fontWeight: 700 }}>
            {mins}:{secs.toString().padStart(2, '0')}
          </span>
          <span style={{ fontSize: '1.25rem', opacity: 0.6 }}>
            {state.currentSlide + 1} / {state.totalSlides}
          </span>
        </div>
      </div>
      {/* Notes */}
      <div style={{ flex: 1, overflow: 'auto', background: '#12121a', borderRadius: '0.5rem', padding: '1.5rem', fontSize: '1.25rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
        {state.notes || <span style={{ opacity: 0.3 }}>No notes for this slide</span>}
      </div>
      {/* Next slide notes preview */}
      <div style={{ background: '#12121a', borderRadius: '0.5rem', padding: '1rem', opacity: 0.5 }}>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Up next</p>
        <p style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
          {state.nextNotes || 'No notes'}
        </p>
      </div>
    </div>
  );
}

export default function Presentation({ children, theme = 'personal' }: PresentationProps) {
  const [isSpeakerMode, setIsSpeakerMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('speaker') === 'true') setIsSpeakerMode(true);
  }, []);

  if (isSpeakerMode) return <SpeakerNotes />;

  return <PresentationMain theme={theme}>{children}</PresentationMain>;
}

function PresentationMain({ children, theme: initialTheme = 'personal' }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fragmentIndex, setFragmentIndex] = useState(-1); // -1 = no fragments shown yet
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;

  // Extract fragment count from each slide's data-fragments prop
  const getFragmentCount = useCallback((slideIndex: number): number => {
    const child = children[slideIndex];
    if (isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      return typeof props['data-fragments'] === 'number' ? props['data-fragments'] : 0;
    }
    return 0;
  }, [children]);

  // Load theme CSS and detect URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true') {
      setIsPrintMode(true);
    }
    if (params.get('light') === 'true') {
      setIsLightMode(true);
    }
    const urlTheme = params.get('theme') as Theme | null;
    if (urlTheme && ['personal', 'meo', 'mtd'].includes(urlTheme)) {
      setTheme(urlTheme);
    }
  }, []);

  // Apply theme stylesheet
  useEffect(() => {
    const id = 'presentation-theme';
    let link = document.getElementById(id) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = `/presentations/themes/${theme}.css`;
  }, [theme]);

  // Scale root font-size so all rem-based Tailwind classes grow with viewport
  useEffect(() => {
    const prev = document.documentElement.style.fontSize;
    // ~24px on 1920w, ~20px on 1440w, capped at 28px
    document.documentElement.style.fontSize = 'clamp(18px, 1.125vw, 28px)';
    return () => { document.documentElement.style.fontSize = prev; };
  }, []);

  // Apply light mode class on the wrapper element (not <html>, to avoid conflicts with site CSS)
  useEffect(() => {
    const wrapper = wrapperRef.current?.closest('.presentation-wrapper');
    if (!wrapper) return;
    if (isLightMode || isPrintMode) {
      wrapper.classList.add('pres-light');
    } else {
      wrapper.classList.remove('pres-light');
    }
  }, [isLightMode, isPrintMode]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || isPrintMode) return;
    if (index >= 0 && index < totalSlides) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setFragmentIndex(-1); // reset fragments when jumping to a slide
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, totalSlides, isPrintMode]);

  const nextSlide = useCallback(() => {
    if (isAnimating || isPrintMode) return;
    const totalFragments = getFragmentCount(currentSlide);
    if (totalFragments > 0 && fragmentIndex < totalFragments - 1) {
      // Advance fragment within current slide
      setFragmentIndex(prev => prev + 1);
    } else {
      // Move to next slide
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, fragmentIndex, getFragmentCount, goToSlide, isAnimating, isPrintMode]);

  const prevSlide = useCallback(() => {
    if (isAnimating || isPrintMode) return;
    const totalFragments = getFragmentCount(currentSlide);
    if (totalFragments > 0 && fragmentIndex >= 0) {
      // Step back a fragment
      setFragmentIndex(prev => prev - 1);
    } else {
      // Move to previous slide (show all its fragments)
      if (currentSlide > 0) {
        const prevFragments = getFragmentCount(currentSlide - 1);
        setIsAnimating(true);
        setCurrentSlide(currentSlide - 1);
        setFragmentIndex(prevFragments > 0 ? prevFragments - 1 : -1);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  }, [currentSlide, fragmentIndex, getFragmentCount, isAnimating, isPrintMode]);

  // Keyboard navigation
  useEffect(() => {
    if (isPrintMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'f':
          e.preventDefault();
          document.documentElement.requestFullscreen?.();
          break;
        case 'Escape':
          document.exitFullscreen?.();
          break;
        case 'l':
          e.preventDefault();
          setIsLightMode(prev => !prev);
          break;
        case 's':
          e.preventDefault();
          window.open(
            `${window.location.pathname}?speaker=true`,
            'speaker-notes',
            'width=800,height=600'
          );
          break;
        case 't':
          e.preventDefault();
          setTheme(prev =>
            prev === 'personal' ? 'meo' : prev === 'meo' ? 'mtd' : 'personal'
          );
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, isPrintMode]);

  // Touch support
  useEffect(() => {
    if (isPrintMode) return;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isPrintMode]);

  // Toggle .visible on .fragment elements based on current fragmentIndex
  useEffect(() => {
    if (!wrapperRef.current) return;
    const slideWrappers = wrapperRef.current.querySelectorAll('.slide-wrapper');
    slideWrappers.forEach((wrapper, slideIdx) => {
      const fragments = wrapper.querySelectorAll('.fragment');
      fragments.forEach((el) => {
        const idx = parseInt(el.getAttribute('data-fragment-index') || '0', 10);
        if (slideIdx === currentSlide) {
          el.classList.toggle('visible', idx <= fragmentIndex);
        } else if (slideIdx < currentSlide) {
          el.classList.add('visible'); // past slides: show all
        } else {
          el.classList.remove('visible'); // future slides: hide all
        }
      });
    });
  }, [currentSlide, fragmentIndex]);

  // Extract notes from each slide's data-notes prop
  const getNotes = useCallback((slideIndex: number): string => {
    const child = children[slideIndex];
    if (isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      return typeof props['data-notes'] === 'string' ? props['data-notes'] : '';
    }
    return '';
  }, [children]);

  // Broadcast slide state to speaker notes window
  const channelRef = useRef<BroadcastChannel | null>(null);
  const nextSlideRef = useRef(nextSlide);
  const prevSlideRef = useRef(prevSlide);
  const goToSlideRef = useRef(goToSlide);
  nextSlideRef.current = nextSlide;
  prevSlideRef.current = prevSlide;
  goToSlideRef.current = goToSlide;

  useEffect(() => {
    const channel = new BroadcastChannel('presentation-sync');
    channelRef.current = channel;
    // Listen for commands from speaker window (e.g. navigation)
    const handler = (e: MessageEvent) => {
      const { type, payload } = e.data || {};
      if (type === 'navigate') goToSlideRef.current(payload);
      if (type === 'next') nextSlideRef.current();
      if (type === 'prev') prevSlideRef.current();
    };
    channel.addEventListener('message', handler);
    return () => {
      channel.removeEventListener('message', handler);
      channel.close();
    };
  }, []);

  // Broadcast current state whenever it changes
  useEffect(() => {
    channelRef.current?.postMessage({
      type: 'state',
      payload: {
        currentSlide,
        fragmentIndex,
        totalSlides,
        notes: getNotes(currentSlide),
        nextNotes: currentSlide < totalSlides - 1 ? getNotes(currentSlide + 1) : '',
      },
    });
  }, [currentSlide, fragmentIndex, totalSlides, getNotes]);

  // Auto-inject slideNumber and totalSlides into component slides (not plain DOM elements)
  const enrichedChildren = children.map((child, index) => {
    if (isValidElement(child) && typeof child.type !== 'string') {
      return cloneElement(child as ReactElement<Record<string, unknown>>, {
        slideNumber: index + 1,
        totalSlides,
      });
    }
    return child;
  });

  // Print mode: stack all slides vertically (show all fragments)
  if (isPrintMode) {
    return (
      <div ref={wrapperRef} className="print-mode flex flex-col items-center bg-[var(--bg-primary)]">
        {enrichedChildren.map((child, index) => (
          <div key={index} className="slide-wrapper">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="h-screen w-screen overflow-hidden bg-[var(--bg-primary)] relative">
      {/* Progress bar */}
      <div className="progress-bar-container absolute top-0 left-0 right-0 h-0.5 bg-[var(--bg-tertiary)] z-50">
        <div
          className="h-full progress-bar transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide container */}
      <div className="h-full w-full relative overflow-hidden">
        {enrichedChildren.map((child, index) => (
          <div
            key={index}
            className={`slide-wrapper absolute inset-0 transition-all duration-300 ease-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                  ? 'opacity-0 -translate-x-8'
                  : 'opacity-0 translate-x-8'
            }`}
            style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="nav-controls absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 && fragmentIndex < 0}
          className="p-2 rounded border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-20 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors bg-[var(--bg-secondary)]/80 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-sm font-medium text-[var(--text-tertiary)] min-w-[80px] text-center tabular-nums">
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1 && fragmentIndex >= getFragmentCount(currentSlide) - 1}
          className="p-2 rounded border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-20 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors bg-[var(--bg-secondary)]/80 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Theme indicator + keyboard hints */}
      <div className="keyboard-hints absolute bottom-6 right-6 flex items-center gap-3 text-xs text-[var(--text-tertiary)] opacity-40 z-50">
        <span className="uppercase tracking-wider">{theme}</span>
        <span className="opacity-40">|</span>
        <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] rounded border border-[var(--border-color)]">t</kbd>
        <span>theme</span>
        <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] rounded border border-[var(--border-color)]">l</kbd>
        <span>light</span>
        <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] rounded border border-[var(--border-color)]">s</kbd>
        <span>notes</span>
        <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] rounded border border-[var(--border-color)]">f</kbd>
        <span>full</span>
      </div>
    </div>
  );
}
