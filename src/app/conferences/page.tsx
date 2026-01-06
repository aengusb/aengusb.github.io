import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllConferences, getResearchAreas } from '@/lib/content';
import { TalksPageClient } from '@/components/talks/TalksPageClient';

export const metadata: Metadata = {
  title: 'Talks',
  description: 'Conference presentations, invited talks, and testimony by Aengus Bridgman on digital politics, misinformation, and political behaviour.',
};

export default function TalksPage() {
  const allConferences = getAllConferences();
  const researchAreas = getResearchAreas();

  return (
    <Suspense fallback={<div className="container-main py-12">Loading...</div>}>
      <TalksPageClient
        allConferences={allConferences}
        researchAreas={researchAreas}
      />
    </Suspense>
  );
}
