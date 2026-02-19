'use client';

import { useState, useEffect, useCallback, useRef, ReactNode } from 'react';

type Theme = 'personal' | 'meo' | 'mtd';

interface PresentationProps {
  children: ReactNode[];
  title?: string;
  theme?: Theme;
}

export default function Presentation({ children, theme: initialTheme = 'personal' }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;

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
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, totalSlides, isPrintMode]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

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

  // Print mode: stack all slides vertically
  if (isPrintMode) {
    return (
      <div ref={wrapperRef} className="print-mode flex flex-col items-center bg-[var(--bg-primary)]">
        {children.map((child, index) => (
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
        {children.map((child, index) => (
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
          disabled={currentSlide === 0}
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
          disabled={currentSlide === totalSlides - 1}
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
        <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] rounded border border-[var(--border-color)]">f</kbd>
        <span>full</span>
      </div>
    </div>
  );
}
