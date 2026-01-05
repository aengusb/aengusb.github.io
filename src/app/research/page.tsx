import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublicationsByYear } from '@/lib/content';
import { Publication } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Academic publications and research on digital politics, misinformation, and Canadian political behaviour by Aengus Bridgman.',
};

function PublicationLinks({ pub }: { pub: Publication }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {pub.doi && (
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          DOI
        </a>
      )}
      {pub.url && !pub.doi && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Link
        </a>
      )}
      {pub.pdfUrl && (
        <a
          href={pub.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          PDF
        </a>
      )}
      {pub.replicationUrl && (
        <a
          href={pub.replicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
          Data
        </a>
      )}
    </div>
  );
}

function PublicationEntry({ pub }: { pub: Publication }) {
  return (
    <div className="card card-hover">
      <div className="flex items-start gap-4">
        <div className="hidden md:block text-lg font-bold text-accent-primary/40 w-16 flex-shrink-0">
          {pub.year}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className={`badge ${pub.category === 'refereed' ? 'badge-refereed' : 'badge-report'}`}>
              {pub.category === 'refereed' ? 'Peer-Reviewed' : pub.category === 'report' ? 'Report' : 'Working Paper'}
            </span>
            <span className="md:hidden text-sm text-text-tertiary">{pub.year}</span>
          </div>
          <h3 className="text-lg font-medium mb-2 leading-snug">{pub.title}</h3>
          <p className="text-sm text-text-secondary mb-1">
            {pub.authors.map((a, i) => (
              <span key={i}>
                {i > 0 && ', '}
                <span className={a.isMe ? 'font-semibold text-text-primary' : ''}>
                  {a.name}
                </span>
              </span>
            ))}
          </p>
          <p className="text-sm text-text-tertiary italic">{pub.venue}</p>
          <PublicationLinks pub={pub} />
        </div>
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const publicationsByYear = getPublicationsByYear();
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container-main py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-accent-primary">&gt;</span> Research
        </h1>
        <p className="text-text-secondary max-w-2xl">
          My work has been published in <em>The Journal of Politics</em>, <em>The Journal of Experimental Political Science</em>, <em>Party Politics</em>, <em>The Misinformation Review</em>, <em>Frontiers in Political Science</em>, and <em>The Canadian Journal of Political Science</em>.
        </p>
        <div className="mt-4">
          <a
            href="https://scholar.google.ca/citations?user=rxQTZG0AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-primary hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
            </svg>
            View on Google Scholar
          </a>
        </div>
      </header>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-accent-primary">{year}</h2>
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-sm text-text-tertiary">{publicationsByYear[year].length} publications</span>
            </div>
            <div className="space-y-4">
              {publicationsByYear[year].map((pub) => (
                <PublicationEntry key={pub.id} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-text-secondary hover:text-accent-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
