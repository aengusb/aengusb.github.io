# CLAUDE.md - Project Instructions for Claude Code

This repository serves as both the personal website (abridgman.ca) and canonical CV for Aengus Bridgman, Assistant Professor at McGill University's Max Bell School of Public Policy.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js pages
│   ├── components/             # React components
│   ├── content/data/           # JSON data files (canonical source)
│   │   ├── publications.json   # Refereed articles & reports
│   │   ├── conferences.json    # Talks, presentations, testimony
│   │   ├── media.json          # Media appearances
│   │   ├── teaching.json       # Teaching history
│   │   └── site.json           # Site metadata
│   └── lib/                    # Utilities and types
├── public/files/               # PDFs (CV, papers)
├── scripts/generate-cv.js      # LaTeX CV generator
└── resume_cv.Rmd               # Legacy CV (reference only)
```

## Adding New Content

When the user provides a URL or brief description of professional activity, follow these steps:

### 1. Media Appearances
If user provides a news article URL or describes an interview:

1. Fetch the URL to extract: title, outlet, date
2. Add entry to `src/content/data/media.json`:
```json
{
  "id": "outlet-year-topic",
  "title": "Article title",
  "outlet": "Outlet Name",
  "mediaType": "news|radio|tv|podcast|op-ed",
  "date": "YYYY-MM-DD",
  "year": YYYY,
  "language": "fr",  // only if French
  "links": {
    "article": "https://...",
    "video": { "url": "...", "platform": "youtube", "embedId": "..." },
    "audio": { "url": "...", "platform": "other" }
  },
  "topics": ["topic1", "topic2"],
  "featured": true  // only for highlights
}
```

### 2. Conference Presentations & Invited Talks
If user describes a talk, presentation, or testimony:

1. Add entry to `src/content/data/conferences.json`:
```json
{
  "id": "event-year",
  "title": "Talk title",
  "eventName": "Conference or Event Name",
  "eventType": "paper|invited|testimony|service",
  "date": "YYYY-MM-DD",
  "year": YYYY,
  "location": {
    "city": "City",
    "state": "Province/State",
    "country": "Country"
  },
  "tags": ["tag1", "tag2"],
  "url": "https://..."  // optional link to recording/notice
}
```

Event types:
- `paper`: Conference paper presentation
- `invited`: Invited talk, keynote, panel
- `testimony`: Parliamentary/committee testimony
- `service`: Committee membership, advisory roles

### 3. Publications
If user mentions a new publication:

1. Add to `src/content/data/publications.json`:
```json
{
  "id": "author-year-keyword",
  "title": "Full title",
  "authors": [
    { "name": "Aengus Bridgman", "isMe": true },
    { "name": "Co-author Name", "isMe": false }
  ],
  "year": YYYY,
  "category": "refereed|report",
  "venue": "Journal or Publisher",
  "venueType": "journal|book-chapter|report|preprint",
  "doi": "10.xxxx/xxxxx",
  "url": "https://...",
  "replicationUrl": "https://...",
  "featured": true
}
```

### 4. Teaching
If user mentions teaching a new course:

1. Add to `src/content/data/teaching.json`:
```json
{
  "id": "course-code-year",
  "code": "PPOL 636",
  "title": "Course Title",
  "term": "fall|winter|summer",
  "year": YYYY,
  "role": "instructor|teaching-assistant",
  "institution": "McGill University",
  "department": "Max Bell School of Public Policy",
  "courseUrl": "https://..."
}
```

## After Adding Content

Always run these commands after updating JSON files:

```bash
npm run cv      # Regenerate LaTeX CV PDF
npm run build   # Rebuild static site
```

Then commit changes:
```bash
git add -A
git commit -m "Add [description of what was added]"
git push        # Only if user requests deployment
```

## Common Tasks

### Regenerate CV only
```bash
npm run cv
```

### Local development
```bash
npm run dev     # Starts at http://localhost:3000
```

### Build for production
```bash
npm run build   # Outputs to /out directory
```

## Deployment

Site deploys automatically via GitHub Actions when pushed to `master` branch.
Custom domain: abridgman.ca (configured via CNAME in public/)

## Notes

- The JSON files are the canonical source of truth
- The CV PDF is auto-generated from JSON data
- Always use WebFetch to extract details from URLs when provided
- French-language content should include `"language": "fr"`
- Mark significant items with `"featured": true` for homepage display
