'use client';

import Link from 'next/link';

const presentations = [
  {
    slug: '2026-02-20-public-health-day',
    title: 'Information Ecosystem Health',
    subtitle: 'When the health of information systems and health misinformation collide',
    event: 'Research & Public Health Day, McGill University',
    date: 'February 20, 2026',
    theme: 'personal' as const,
  },
];

export default function PresentationsIndex() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-[var(--accent-primary)] text-sm uppercase tracking-widest mb-4 opacity-60">
          <span className="opacity-60">&gt;</span> presentations
        </p>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          Presentations
        </h1>
        <p className="text-[var(--text-secondary)] text-lg mb-12">
          Talks, keynotes, and lectures by Aengus Bridgman.
        </p>

        <div className="accent-line w-full mb-12" />

        <div className="grid gap-6">
          {presentations.map((pres) => (
            <Link
              key={pres.slug}
              href={`/presentations/${pres.slug}/`}
              className="slide-card p-8 block no-underline hover:border-[var(--accent-primary)] transition-all group"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm text-[var(--accent-primary)] uppercase tracking-wider mb-2 opacity-60">
                    {pres.event}
                  </p>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {pres.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg">
                    {pres.subtitle}
                  </p>
                </div>
                <span className="text-[var(--text-tertiary)] text-sm whitespace-nowrap mt-1">
                  {pres.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
