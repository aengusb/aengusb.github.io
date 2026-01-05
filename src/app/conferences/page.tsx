import type { Metadata } from 'next';
import Link from 'next/link';
import { getConferencesByYear } from '@/lib/content';
import { Conference } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Conferences',
  description: 'Conference presentations and talks by Aengus Bridgman on digital politics, misinformation, and political behaviour.',
};

function ConferenceTypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    paper: 'bg-blue-500/20 text-blue-400',
    panel: 'bg-purple-500/20 text-purple-400',
    keynote: 'bg-amber-500/20 text-amber-400',
    invited: 'bg-green-500/20 text-green-400',
    workshop: 'bg-pink-500/20 text-pink-400',
    discussant: 'bg-gray-500/20 text-gray-400',
  };

  return (
    <span className={`badge ${styles[type] || styles.paper}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

function ConferenceItem({ conference }: { conference: Conference }) {
  const locationString = conference.location.virtual
    ? 'Virtual'
    : `${conference.location.city}${conference.location.state ? `, ${conference.location.state}` : ''}, ${conference.location.country}`;

  return (
    <div className="card card-hover">
      <div className="flex items-start gap-4">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center pt-1">
          <div className="w-3 h-3 rounded-full bg-accent-primary"></div>
          <div className="w-0.5 flex-1 bg-border mt-2"></div>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-start gap-2 mb-2">
            <ConferenceTypeBadge type={conference.eventType} />
            {conference.location.virtual && (
              <span className="badge bg-bg-tertiary text-text-tertiary">Virtual</span>
            )}
          </div>

          <h3 className="text-lg font-medium mb-2">{conference.title}</h3>

          <div className="space-y-1 text-sm">
            <p className="text-text-secondary font-medium">{conference.eventName}</p>
            <p className="text-text-tertiary flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {locationString}
            </p>
            <p className="text-text-tertiary flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(conference.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {conference.coAuthors && conference.coAuthors.length > 0 && (
            <p className="text-sm text-text-tertiary mt-2">
              with {conference.coAuthors.join(', ')}
            </p>
          )}

          {(conference.slidesUrl || conference.paperUrl || conference.videoUrl) && (
            <div className="flex flex-wrap gap-2 mt-3">
              {conference.slidesUrl && (
                <a
                  href={conference.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
                >
                  Slides
                </a>
              )}
              {conference.paperUrl && (
                <a
                  href={conference.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
                >
                  Paper
                </a>
              )}
              {conference.videoUrl && (
                <a
                  href={conference.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
                >
                  Recording
                </a>
              )}
            </div>
          )}

          {conference.tags && conference.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {conference.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-bg-secondary border border-border rounded text-text-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConferencesPage() {
  const conferencesByYear = getConferencesByYear();
  const years = Object.keys(conferencesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container-main py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-accent-primary">&gt;</span> Conferences
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Conference presentations, invited talks, and panel discussions on digital politics, misinformation, and political behaviour.
        </p>
      </header>

      {/* Timeline View */}
      <div className="relative">
        {/* Vertical line for timeline */}
        <div className="hidden md:block absolute left-[5px] top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-12">
          {years.map((year) => (
            <section key={year}>
              <div className="flex items-center gap-4 mb-6">
                <div className="hidden md:block w-3 h-3 rounded-full bg-accent-primary ring-4 ring-bg-primary"></div>
                <h2 className="text-2xl font-bold text-accent-primary">{year}</h2>
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-text-tertiary">{conferencesByYear[year].length} presentations</span>
              </div>
              <div className="space-y-4 md:ml-6">
                {conferencesByYear[year].map((conference) => (
                  <ConferenceItem key={conference.id} conference={conference} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-text-secondary hover:text-accent-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
