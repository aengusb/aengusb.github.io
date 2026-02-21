import type { SiteConfig, Publication, Conference, MediaAppearance } from './types';

export function generatePersonJsonLd(site: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.author.name,
    jobTitle: site.author.position,
    worksFor: {
      '@type': 'Organization',
      name: site.author.institution,
      department: {
        '@type': 'Organization',
        name: site.author.department,
      },
    },
    affiliation: site.affiliations.map((a) => ({
      '@type': 'Organization',
      name: a.name,
      url: a.url,
    })),
    url: site.url,
    email: site.social.email ? `mailto:${site.social.email}` : undefined,
    sameAs: [
      site.social.twitter ? `https://x.com/${site.social.twitter}` : null,
      site.social.github ? `https://github.com/${site.social.github}` : null,
      site.social.googleScholar || null,
      site.social.orcid ? `https://orcid.org/${site.social.orcid}` : null,
      site.social.linkedin ? `https://linkedin.com/in/${site.social.linkedin}` : null,
    ].filter(Boolean),
    knowsAbout: site.researchAreas?.map((a) => a.label) || [],
    image: `${site.url}${site.author.avatar}`,
    description: site.author.bio,
  };
}

export function generatePublicationsJsonLd(pubs: Publication[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: pubs.length,
    itemListElement: pubs.map((pub, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        name: pub.title,
        author: pub.authors.map((a) => ({
          '@type': 'Person',
          name: a.name,
        })),
        datePublished: String(pub.year),
        publisher: {
          '@type': 'Organization',
          name: pub.venue,
        },
        ...(pub.doi ? { identifier: { '@type': 'PropertyValue', propertyID: 'doi', value: pub.doi } } : {}),
        ...(pub.url ? { url: pub.url } : {}),
      },
    })),
  };
}

export function generateConferencesJsonLd(confs: Conference[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: confs.length,
    itemListElement: confs.map((conf, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: conf.eventName,
        description: conf.title,
        startDate: conf.date,
        location: conf.location.virtual
          ? { '@type': 'VirtualLocation' }
          : {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: conf.location.city,
                addressRegion: conf.location.state,
                addressCountry: conf.location.country,
              },
            },
        performer: {
          '@type': 'Person',
          name: 'Aengus Bridgman',
        },
        ...(conf.url ? { url: conf.url } : {}),
      },
    })),
  };
}

export function generateMediaJsonLd(media: MediaAppearance[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: media.length,
    itemListElement: media.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': m.mediaType === 'tv' || m.mediaType === 'radio' || m.mediaType === 'podcast'
          ? 'MediaObject'
          : 'Article',
        name: m.title,
        datePublished: m.date,
        publisher: {
          '@type': 'Organization',
          name: m.outlet,
        },
        ...(m.links.article ? { url: m.links.article } : {}),
        ...(m.links.video ? { url: m.links.video.url } : {}),
        ...(m.links.audio ? { url: m.links.audio.url } : {}),
        ...(m.language ? { inLanguage: m.language } : {}),
      },
    })),
  };
}
