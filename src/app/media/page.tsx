import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllMedia, getFeaturedMedia, getResearchAreas } from '@/lib/content';
import { MediaPageClient } from '@/components/media/MediaPageClient';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Media appearances, interviews, and commentary by Aengus Bridgman on digital politics, misinformation, and Canadian political issues.',
};

export default function MediaPage() {
  const allMedia = getAllMedia();
  const featuredMedia = getFeaturedMedia();
  const researchAreas = getResearchAreas();

  return (
    <Suspense fallback={<div className="container-main py-12">Loading...</div>}>
      <MediaPageClient
        allMedia={allMedia}
        featuredMedia={featuredMedia}
        researchAreas={researchAreas}
      />
    </Suspense>
  );
}
