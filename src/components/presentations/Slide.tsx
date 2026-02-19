import { ReactNode } from 'react';

type SlideVariant = 'title' | 'content' | 'section' | 'two-column' | 'image' | 'quote' | 'thank-you';

interface SlideProps {
  variant?: SlideVariant;
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
  slideNumber?: number;
  totalSlides?: number;
  footerText?: string;
}

export default function Slide({
  variant = 'content',
  children,
  className = '',
  showFooter = true,
  slideNumber,
  totalSlides,
  footerText = 'abridgman.ca'
}: SlideProps) {
  const baseStyles = 'h-full w-full flex flex-col relative';

  const variantStyles: Record<SlideVariant, string> = {
    title: 'justify-center items-center text-center bg-[var(--bg-primary)] grid-bg',
    content: 'justify-start items-start bg-[var(--bg-primary)]',
    section: 'justify-center items-center text-center bg-[var(--bg-secondary)] grid-bg',
    'two-column': 'justify-start items-start bg-[var(--bg-primary)]',
    image: 'justify-center items-center bg-[var(--bg-primary)] p-8',
    quote: 'justify-center items-center text-center px-24 bg-[var(--bg-primary)]',
    'thank-you': 'justify-center items-center bg-[var(--bg-primary)] grid-bg',
  };

  const needsHeader = ['content', 'two-column', 'image', 'quote'].includes(variant);

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {/* Accent gradient line for content slides */}
      {needsHeader && <div className="accent-line w-full flex-shrink-0" />}

      {/* Main content */}
      <div className={`flex-1 w-full flex flex-col ${needsHeader ? 'p-10 pt-8' : 'p-12'}`}>
        {children}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-base text-[var(--text-tertiary)] font-medium tracking-wide">
            {footerText}
          </span>
          {slideNumber && (
            <span className="text-base text-[var(--text-tertiary)]">
              {slideNumber}{totalSlides ? ` / ${totalSlides}` : ''}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ========== TITLE SLIDE ==========
interface TitleSlideProps {
  category?: string;
  title: string;
  subtitle?: string;
  date?: string;
  author?: string;
}

export function TitleSlide({ category, title, subtitle, date, author }: TitleSlideProps) {
  return (
    <Slide variant="title" showFooter={false}>
      <div className="flex flex-col items-center max-w-[80%]">
        {/* Category with terminal prompt */}
        {category && (
          <p className="text-[var(--accent-primary)] text-xl mb-6 tracking-wider font-medium animate-fade-in">
            <span className="opacity-60">&gt;</span> {category}
          </p>
        )}

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--accent-primary)] tracking-tight leading-tight mb-6 animate-slide-up">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[var(--text-secondary)] text-2xl md:text-3xl mt-2 animate-fade-in stagger-2">
            {subtitle}
          </p>
        )}

        {/* Gradient divider */}
        <div className="accent-line w-32 mt-8 mb-6 animate-fade-in stagger-3" />

        {/* Date / Author line */}
        <div className="flex items-center gap-4 text-[var(--text-tertiary)] text-lg animate-fade-in stagger-4">
          {date && <span>{date}</span>}
          {date && author && <span className="opacity-40">|</span>}
          {author && <span>{author}</span>}
        </div>
      </div>
    </Slide>
  );
}

// ========== CONTENT SLIDE WITH HEADER ==========
interface ContentSlideProps {
  category?: string;
  title: string;
  children: ReactNode;
  slideNumber?: number;
  footerText?: string;
}

export function ContentSlide({ category, title, children, slideNumber, footerText }: ContentSlideProps) {
  return (
    <Slide variant="content" slideNumber={slideNumber} footerText={footerText}>
      {/* Header with // category prefix */}
      <div className="mb-8 pb-4 border-b border-[var(--border-color)]">
        <div className="flex items-baseline gap-3">
          {category && (
            <span className="section-prefix text-base uppercase tracking-widest" />
          )}
          {category && (
            <span className="text-[var(--accent-primary)] text-base uppercase tracking-widest opacity-60">
              {category}
            </span>
          )}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 w-full text-xl text-[var(--text-primary)]">
        {children}
      </div>
    </Slide>
  );
}

// ========== TWO COLUMN SLIDE ==========
interface TwoColumnSlideProps {
  category?: string;
  title: string;
  questionTitle?: string;
  left: ReactNode;
  right: ReactNode;
  slideNumber?: number;
  footerText?: string;
}

export function TwoColumnSlide({ category, title, questionTitle, left, right, slideNumber, footerText }: TwoColumnSlideProps) {
  return (
    <Slide variant="two-column" slideNumber={slideNumber} footerText={footerText}>
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-[var(--border-color)] w-full">
        <div className="flex items-baseline gap-3">
          {category && (
            <span className="text-[var(--accent-primary)] text-base uppercase tracking-widest opacity-60">
              <span className="opacity-60">{"// "}</span>{category}
            </span>
          )}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2">
          {title}
        </h2>
      </div>

      {/* Two columns */}
      <div className="flex-1 w-full grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          {questionTitle && (
            <h3 className="text-3xl font-bold text-[var(--accent-tertiary)] mb-6">
              {questionTitle}
            </h3>
          )}
          <div className="text-xl text-[var(--text-primary)]">{left}</div>
        </div>
        <div className="flex items-center justify-center">{right}</div>
      </div>
    </Slide>
  );
}

// ========== SECTION DIVIDER ==========
interface SectionSlideProps {
  title: string;
  subtitle?: string;
}

export function SectionSlide({ title, subtitle }: SectionSlideProps) {
  return (
    <Slide variant="section" showFooter={false}>
      <h2 className="text-6xl md:text-7xl font-bold text-[var(--accent-primary)] mb-4 animate-slide-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-2xl md:text-3xl text-[var(--text-secondary)] animate-fade-in stagger-2">
          {subtitle}
        </p>
      )}
    </Slide>
  );
}

// ========== THANK YOU SLIDE ==========
interface ThankYouSlideProps {
  title?: string;
  contacts?: { name?: string; email: string }[];
  qrCode?: string;
}

export function ThankYouSlide({ title = 'Thank You', contacts, qrCode }: ThankYouSlideProps) {
  return (
    <Slide variant="thank-you" showFooter={false}>
      <div className="flex items-center gap-16">
        {qrCode && (
          <div className="bg-white p-4 rounded-lg glow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrCode} alt="QR Code" className="w-48 h-48" />
          </div>
        )}
        <div>
          <h2 className="text-6xl font-bold text-[var(--accent-primary)] mb-6 animate-slide-up">
            {title}
          </h2>
          <div className="accent-line w-32 mb-6 animate-fade-in stagger-2" />
          {contacts?.map((contact, i) => (
            <p key={i} className="text-2xl text-[var(--text-secondary)] mb-2 animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              {contact.name && <span className="font-medium text-[var(--text-primary)]">{contact.name}: </span>}
              <span className="text-[var(--accent-primary)]">{contact.email}</span>
            </p>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ========== HELPER COMPONENTS ==========

// Terminal-styled bullet list with > prompts
interface BulletListProps {
  items: (string | ReactNode)[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="terminal-bullets space-y-3 list-none">
      {items.map((item, index) => (
        <li key={index} className="text-xl md:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// Highlight box with accent border
interface HighlightBoxProps {
  children: ReactNode;
  variant?: 'teal' | 'indigo' | 'amber';
}

export function HighlightBox({ children, variant = 'teal' }: HighlightBoxProps) {
  const colors = {
    teal: 'border-[var(--accent-primary)]',
    indigo: 'border-[var(--accent-secondary)]',
    amber: 'border-[var(--accent-tertiary)]',
  };

  return (
    <div className={`p-6 rounded-lg border-l-4 ${colors[variant]} bg-[var(--bg-secondary)] my-4 text-lg`}>
      {children}
    </div>
  );
}

// Stats display
interface StatProps {
  value: string;
  label: string;
  color?: 'teal' | 'indigo' | 'amber';
}

export function Stat({ value, label, color = 'teal' }: StatProps) {
  const colors = {
    teal: 'text-[var(--accent-primary)]',
    indigo: 'text-[var(--accent-secondary)]',
    amber: 'text-[var(--accent-tertiary)]',
  };

  return (
    <div className="text-center p-4">
      <div className={`text-5xl md:text-6xl font-bold ${colors[color]} mb-2 animate-count-up`}>
        {value}
      </div>
      <div className="text-base md:text-lg text-[var(--text-secondary)] uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export function StatsRow({ stats }: { stats: StatProps[] }) {
  return (
    <div className="flex justify-around items-center w-full py-8">
      {stats.map((stat, index) => (
        <Stat key={index} {...stat} />
      ))}
    </div>
  );
}

// Citation display — positioned bottom-right above footer
interface CitationProps {
  refs: string[];
}

export function Citation({ refs }: CitationProps) {
  return (
    <div className="absolute bottom-16 right-10 text-right max-w-[60%] z-10">
      {refs.map((ref, i) => (
        <p key={i} className="text-xs text-[var(--text-tertiary)] opacity-60 leading-relaxed">
          {ref}
        </p>
      ))}
    </div>
  );
}

// Image with caption
interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="flex flex-col items-center">
      <div className="border border-[var(--border-color)] rounded-lg overflow-hidden glow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="max-h-[50vh] max-w-full object-contain" />
      </div>
      {caption && (
        <figcaption className="text-base text-[var(--text-tertiary)] mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
