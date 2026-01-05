import { Publication, MediaAppearance, Conference, Course, SiteConfig } from './types';

import siteData from '@/content/data/site.json';
import publicationsData from '@/content/data/publications.json';
import mediaData from '@/content/data/media.json';
import conferencesData from '@/content/data/conferences.json';
import teachingData from '@/content/data/teaching.json';

// Site config
export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

// Publications
export function getAllPublications(): Publication[] {
  return (publicationsData.publications as Publication[]).sort((a, b) => b.year - a.year);
}

export function getPublicationsByCategory(category: string): Publication[] {
  return getAllPublications().filter(pub => pub.category === category);
}

export function getFeaturedPublications(): Publication[] {
  return getAllPublications().filter(pub => pub.featured);
}

export function getPublicationsByYear(): Record<number, Publication[]> {
  const publications = getAllPublications();
  return publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);
}

// Media
export function getAllMedia(): MediaAppearance[] {
  return (mediaData.appearances as MediaAppearance[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getMediaByType(type: string): MediaAppearance[] {
  return getAllMedia().filter(media => media.mediaType === type);
}

export function getFeaturedMedia(): MediaAppearance[] {
  return getAllMedia().filter(media => media.featured);
}

export function getMediaByYear(): Record<number, MediaAppearance[]> {
  const media = getAllMedia();
  return media.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, MediaAppearance[]>);
}

// Conferences
export function getAllConferences(): Conference[] {
  return (conferencesData.conferences as Conference[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getConferencesByYear(): Record<number, Conference[]> {
  const conferences = getAllConferences();
  return conferences.reduce((acc, conf) => {
    if (!acc[conf.year]) {
      acc[conf.year] = [];
    }
    acc[conf.year].push(conf);
    return acc;
  }, {} as Record<number, Conference[]>);
}

// Teaching
export function getAllCourses(): Course[] {
  return (teachingData.courses as Course[]).sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    const termOrder = { fall: 3, winter: 1, summer: 2 };
    return termOrder[b.term] - termOrder[a.term];
  });
}

export function getCoursesByRole(role: string): Course[] {
  return getAllCourses().filter(course => course.role === role);
}

// Stats
export function getStats() {
  return {
    publications: getAllPublications().filter(p => p.category === 'refereed').length,
    reports: getAllPublications().filter(p => p.category === 'report').length,
    mediaAppearances: getAllMedia().length,
    conferences: getAllConferences().length,
  };
}
