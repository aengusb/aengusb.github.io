#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const dataDir = path.join(__dirname, '..', 'src', 'content', 'data');

const siteUrl = 'https://abridgman.ca';

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate publications RSS feed
function generatePublicationsFeed() {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'publications.json'), 'utf-8'));
  const pubs = data.publications.sort((a, b) => b.year - a.year);

  const items = pubs.map((pub) => {
    const authors = pub.authors.map((a) => a.name).join(', ');
    const link = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : `${siteUrl}/research/`);
    return `    <item>
      <title>${escapeXml(pub.title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${escapeXml(`${authors}. ${pub.venue}, ${pub.year}.`)}</description>
      <pubDate>${new Date(`${pub.year}-01-01`).toUTCString()}</pubDate>
      <guid>${escapeXml(pub.id)}</guid>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aengus Bridgman — Publications</title>
    <link>${siteUrl}/research/</link>
    <description>Academic publications by Aengus Bridgman, McGill University.</description>
    <language>en-ca</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>`;
}

// Generate media RSS feed
function generateMediaFeed() {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'media.json'), 'utf-8'));
  const appearances = data.appearances.sort((a, b) => new Date(b.date) - new Date(a.date));

  const items = appearances.map((m) => {
    const link = m.links.article || (m.links.video ? m.links.video.url : null) || (m.links.audio ? m.links.audio.url : null) || `${siteUrl}/media/`;
    return `    <item>
      <title>${escapeXml(m.title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${escapeXml(`${m.outlet} (${m.mediaType})`)}</description>
      <pubDate>${new Date(m.date).toUTCString()}</pubDate>
      <guid>${escapeXml(m.id)}</guid>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aengus Bridgman — Media Appearances</title>
    <link>${siteUrl}/media/</link>
    <description>Media appearances and commentary by Aengus Bridgman, McGill University.</description>
    <language>en-ca</language>
    <atom:link href="${siteUrl}/media-feed.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>`;
}

// Generate sitemap.xml
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'monthly' },
    { path: '/research/', priority: '0.9', changefreq: 'monthly' },
    { path: '/media/', priority: '0.8', changefreq: 'weekly' },
    { path: '/conferences/', priority: '0.8', changefreq: 'monthly' },
    { path: '/teaching/', priority: '0.6', changefreq: 'yearly' },
    { path: '/cv/', priority: '0.7', changefreq: 'monthly' },
    { path: '/presentations/', priority: '0.5', changefreq: 'monthly' },
    { path: '/presentations/2026-02-20-public-health-day/', priority: '0.5', changefreq: 'yearly' },
  ];

  const urls = routes.map((r) => `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

// Generate robots.txt
function generateRobots() {
  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

fs.writeFileSync(path.join(publicDir, 'feed.xml'), generatePublicationsFeed());
console.log('Generated feed.xml (publications)');

fs.writeFileSync(path.join(publicDir, 'media-feed.xml'), generateMediaFeed());
console.log('Generated media-feed.xml (media appearances)');

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap());
console.log('Generated sitemap.xml');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobots());
console.log('Generated robots.txt');
