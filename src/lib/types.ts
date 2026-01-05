// Publication types
export type PublicationCategory = 'refereed' | 'report' | 'working-paper';

export interface Author {
  name: string;
  isMe: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  year: number;
  category: PublicationCategory;
  venue: string;
  venueType?: 'journal' | 'book' | 'book-chapter' | 'report' | 'preprint';
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  replicationUrl?: string;
  abstract?: string;
  keywords?: string[];
  featured?: boolean;
}

// Media types
export type MediaType = 'tv' | 'radio' | 'podcast' | 'print' | 'op-ed' | 'news';

export interface MediaAppearance {
  id: string;
  title: string;
  outlet: string;
  outletLogo?: string;
  mediaType: MediaType;
  date: string;
  year: number;
  links: {
    article?: string;
    video?: {
      url: string;
      platform: 'youtube' | 'vimeo' | 'other';
      embedId?: string;
    };
    audio?: {
      url: string;
      platform: 'spotify' | 'apple' | 'soundcloud' | 'other';
      embedUrl?: string;
    };
  };
  description?: string;
  language?: 'en' | 'fr';
  topics?: string[];
  featured?: boolean;
  thumbnail?: string;
}

// Conference types
export type ConferenceType = 'paper' | 'panel' | 'keynote' | 'invited' | 'workshop' | 'discussant';

export interface Conference {
  id: string;
  title: string;
  eventName: string;
  eventType: ConferenceType;
  date: string;
  year: number;
  location: {
    city: string;
    state?: string;
    country: string;
    venue?: string;
    virtual?: boolean;
  };
  coAuthors?: string[];
  slidesUrl?: string;
  paperUrl?: string;
  videoUrl?: string;
  eventUrl?: string;
  description?: string;
  tags?: string[];
}

// Teaching types
export type CourseRole = 'instructor' | 'teaching-assistant' | 'guest-lecturer';

export interface Course {
  id: string;
  code: string;
  title: string;
  term: 'fall' | 'winter' | 'summer';
  year: number;
  role: CourseRole;
  institution: string;
  department?: string;
  syllabusUrl?: string;
  courseUrl?: string;
  description?: string;
}

// Site config
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    position: string;
    institution: string;
    department: string;
    location: string;
    bio: string;
    avatar: string;
  };
  social: {
    twitter?: string;
    github?: string;
    googleScholar?: string;
    orcid?: string;
    linkedin?: string;
    email?: string;
  };
  affiliations: Array<{
    name: string;
    url: string;
    role?: string;
  }>;
  analytics?: {
    googleAnalyticsId?: string;
  };
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
