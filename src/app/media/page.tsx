import type { Metadata } from 'next';
import Link from 'next/link';
import { getMediaByYear, getFeaturedMedia } from '@/lib/content';
import { MediaAppearance } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Media appearances, interviews, and commentary by Aengus Bridgman on digital politics, misinformation, and Canadian political issues.',
};

function MediaTypeBadge({ type }: { type: string }) {
  const badgeClass =
    type === 'tv' ? 'badge-video' :
    type === 'radio' || type === 'podcast' ? 'badge-audio' :
    type === 'op-ed' ? 'bg-indigo-500/20 text-indigo-400' :
    'badge-article';

  const label =
    type === 'tv' ? 'TV' :
    type === 'radio' ? 'Radio' :
    type === 'podcast' ? 'Podcast' :
    type === 'print' ? 'Print' :
    type === 'op-ed' ? 'Op-Ed' :
    type === 'news' ? 'News' :
    type.toUpperCase();

  return <span className={`badge ${badgeClass}`}>{label}</span>;
}

function VideoEmbed({ embedId }: { embedId: string }) {
  return (
    <div className="aspect-video rounded overflow-hidden bg-bg-tertiary">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

function FeaturedMediaCard({ media }: { media: MediaAppearance }) {
  const hasVideo = media.links.video?.platform === 'youtube' && media.links.video.embedId;

  return (
    <div className="card">
      {hasVideo && media.links.video?.embedId && (
        <div className="mb-4">
          <VideoEmbed embedId={media.links.video.embedId} />
        </div>
      )}
      <div className="flex items-start gap-3">
        <MediaTypeBadge type={media.mediaType} />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium mb-1">{media.title}</h3>
          <p className="text-sm text-text-secondary mb-2">{media.outlet}</p>
          <p className="text-xs text-text-tertiary">
            {new Date(media.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <div className="flex gap-2 mt-3">
            {media.links.article && (
              <a
                href={media.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
              >
                Read Article
              </a>
            )}
            {media.links.video?.url && !hasVideo && (
              <a
                href={media.links.video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
              >
                Watch Video
              </a>
            )}
            {media.links.audio?.url && (
              <a
                href={media.links.audio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
              >
                Listen
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaCard({ media }: { media: MediaAppearance }) {
  const linkUrl = media.links.article || media.links.video?.url || media.links.audio?.url || '#';

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover no-underline block"
    >
      <div className="flex items-start gap-3">
        <MediaTypeBadge type={media.mediaType} />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium mb-1 line-clamp-2">{media.title}</h3>
          <p className="text-xs text-text-secondary">{media.outlet}</p>
          <p className="text-xs text-text-tertiary mt-1">
            {new Date(media.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
            {media.language === 'fr' && <span className="ml-2 text-accent-secondary">[FR]</span>}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function MediaPage() {
  const mediaByYear = getMediaByYear();
  const featuredMedia = getFeaturedMedia();
  const years = Object.keys(mediaByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container-main py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-accent-primary">&gt;</span> Media
        </h1>
        <p className="text-text-secondary max-w-2xl">
          I have been interviewed for CBC, CTV, Global News, Le Devoir, La Presse, and many others. My work has been covered in The New York Times, Washington Post, Vox, and more.
        </p>
      </header>

      {/* Featured Section */}
      {featuredMedia.length > 0 && (
        <section className="mb-16">
          <h2 className="section-title">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMedia.slice(0, 4).map((media) => (
              <FeaturedMediaCard key={media.id} media={media} />
            ))}
          </div>
        </section>
      )}

      {/* Timeline */}
      <section>
        <h2 className="section-title">All Appearances</h2>
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-accent-primary">{year}</h3>
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-text-tertiary">{mediaByYear[year].length} appearances</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mediaByYear[year].map((media) => (
                  <MediaCard key={media.id} media={media} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-text-secondary hover:text-accent-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
