import Image from 'next/image';
import Link from 'next/link';
import { getSiteConfig, getFeaturedPublications, getFeaturedMedia, getResearchAreas } from '@/lib/content';
import { generatePersonJsonLd } from '@/lib/jsonld';

function AffiliationBadge({ name, url, role }: { name: string; url: string; role?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover px-4 py-3 no-underline block"
    >
      <div className="text-sm font-medium text-text-primary">{name}</div>
      {role && <div className="text-xs text-text-tertiary mt-1">{role}</div>}
    </a>
  );
}

export default function Home() {
  const site = getSiteConfig();
  const featuredPubs = getFeaturedPublications();
  const featuredMedia = getFeaturedMedia();
  const researchAreas = getResearchAreas();

  const personJsonLd = generatePersonJsonLd(site);

  return (
    <div className="container-main py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent-primary/20 shadow-glow">
            <Image
              src={site.author.avatar}
              alt={site.author.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-accent-primary">&gt;</span> {site.author.name}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {site.author.position} @ {site.author.institution}
          </p>
          <p className="text-text-primary leading-relaxed mb-6 max-w-2xl">
            {site.author.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-bg-primary rounded font-medium hover:bg-accent-primary/90 transition-colors no-underline"
            >
              View Research
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded font-medium hover:border-accent-primary/50 transition-colors no-underline"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Hidden for now */}
      {/* <section className="mb-16">
        <h2 className="section-title">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Publications" value={stats.publications} href="/research" />
          <StatCard label="Reports" value={stats.reports} href="/research" />
          <StatCard label="Media" value={stats.mediaAppearances} href="/media" />
          <StatCard label="Conferences" value={stats.conferences} href="/conferences" />
        </div>
      </section> */}

      {/* Affiliations Section */}
      <section className="mb-16">
        <h2 className="section-title">Affiliations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {site.affiliations.map((affiliation) => (
            <AffiliationBadge
              key={affiliation.name}
              name={affiliation.name}
              url={affiliation.url}
              role={affiliation.role}
            />
          ))}
        </div>
      </section>

      {/* Featured Research */}
      {featuredPubs.length > 0 && (
        <section className="mb-16">
          <h2 className="section-title">Featured Research</h2>
          <div className="space-y-4">
            {featuredPubs.slice(0, 3).map((pub) => (
              <a
                key={pub.id}
                href={pub.pdfUrl || pub.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover no-underline block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className={`badge ${pub.category === 'refereed' ? 'badge-refereed' : 'badge-report'} mb-2`}>
                      {pub.category === 'refereed' ? 'Peer-Reviewed' : 'Report'}
                    </span>
                    <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {pub.authors.slice(0, 3).map((a, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <span className={a.isMe ? 'font-semibold text-text-primary' : ''}>
                            {a.name}
                          </span>
                        </span>
                      ))}
                      {pub.authors.length > 3 && <span>, et al.</span>}
                    </p>
                    <p className="text-sm text-text-tertiary italic">{pub.venue}, {pub.year}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-2xl font-bold text-accent-primary/30">{pub.year}</div>
                    {pub.pdfUrl && (
                      <span className="inline-flex items-center gap-1 text-xs text-accent-primary">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/research" className="text-accent-primary hover:underline">
              View all publications →
            </Link>
          </div>
        </section>
      )}

      {/* Featured Media */}
      {featuredMedia.length > 0 && (
        <section className="mb-16">
          <h2 className="section-title">Featured Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredMedia.slice(0, 4).map((media) => (
              <a
                key={media.id}
                href={media.links.article || media.links.video?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover no-underline block"
              >
                <div className="flex items-start gap-3">
                  <span className={`badge ${
                    media.mediaType === 'tv' ? 'badge-video' :
                    media.mediaType === 'radio' || media.mediaType === 'podcast' ? 'badge-audio' :
                    'badge-article'
                  }`}>
                    {media.mediaType.toUpperCase()}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium mb-1 line-clamp-2">{media.title}</h3>
                    <p className="text-xs text-text-tertiary">{media.outlet} · {new Date(media.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/media" className="text-accent-primary hover:underline">
              View all media appearances →
            </Link>
          </div>
        </section>
      )}

      {/* Research Areas */}
      <section>
        <h2 className="section-title">Research Areas</h2>
        <div className="flex flex-wrap gap-2">
          {researchAreas.map((area) => (
            <Link
              key={area.id}
              href={`/research?topic=${area.id}`}
              className="px-3 py-1.5 bg-bg-secondary border border-border rounded-full text-sm text-text-secondary hover:border-accent-primary/50 hover:text-accent-primary transition-colors no-underline"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
