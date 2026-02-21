import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllPublications, getResearchAreas } from '@/lib/content';
import { ResearchPageClient } from '@/components/research/ResearchPageClient';
import { generatePublicationsJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Academic publications and research on digital politics, misinformation, and Canadian political behaviour by Aengus Bridgman.',
};

export default function ResearchPage() {
  const allPublications = getAllPublications();
  const researchAreas = getResearchAreas();
  const publicationsJsonLd = generatePublicationsJsonLd(allPublications);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
      />
      <Suspense fallback={<div className="container-main py-12">Loading...</div>}>
        <ResearchPageClient
          allPublications={allPublications}
          researchAreas={researchAreas}
        />
      </Suspense>
    </>
  );
}
