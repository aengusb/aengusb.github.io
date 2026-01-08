---
description: Add media, talks, publications, or teaching to the site
argument-hint: <url-or-description>
---

Add the following content to Aengus Bridgman's academic website: $ARGUMENTS

## Context

**Who**: Aengus Bridgman, Assistant Professor (Research) at McGill University's Max Bell School of Public Policy. Director of the Media Ecosystem Observatory (MEO) and Canadian Digital Media Research Network (CDMRN). Assistant Director, Research at the Centre for Media, Technology and Democracy.

**Frequent co-authors**: Taylor Owen, Peter Loewen, Oleg Zhilin, Mathieu Lavigne, Robert Bhardwaj, Mackenzie Hart, Jianing Li, Derek Ruths, Lisa Bhargava, Melissa Baker, Thomas Bergeron, Jérémie Duhamel

## Instructions

1. **Determine content type** from context:
   - **Media**: News articles, interviews, podcasts, TV appearances, op-eds
   - **Conference/Talk**: Presentations, invited talks, panels, testimony, service roles
   - **Publication**: Journal articles, book chapters, reports, preprints
   - **Teaching**: Courses taught or TA'd

2. **If a URL is provided**, use WebFetch to extract details (title, date, outlet/venue).

3. **If a PDF should be hosted locally**, download it to `/public/files/` with a descriptive filename.

4. **Add the entry** to the appropriate JSON file:
   - Media → `src/content/data/media.json`
   - Talks → `src/content/data/conferences.json`
   - Publications → `src/content/data/publications.json`
   - Teaching → `src/content/data/teaching.json`

5. **Assign tags** from these research areas (use IDs):
   - `misinformation` - disinformation, fake news, conspiracy theories
   - `elections` - voting, campaigns
   - `social-media` - Facebook, Twitter/X, YouTube, Meta
   - `ai` - AI, deepfakes, digital ecosystem
   - `foreign-interference` - Russia, China, Tenet Media
   - `canadian-politics` - Canada, Parliament, Quebec, Alberta, BC
   - `covid-19` - vaccines, public health
   - `democracy` - political engagement, participation, public opinion

6. **For media entries**, common outlets include:
   - TV: CBC, CTV, Global, CPAC, Radio-Canada
   - Radio: CBC Radio, CJAD, 98.5 FM
   - Print/Online: Globe and Mail, Toronto Star, The Tyee, Hill Times, National Post, Le Devoir, La Presse
   - Set `featured: true` for major appearances

7. **For publications**, mark `featured: true` for significant works to display on homepage.

8. **After adding**, run:
   ```bash
   npm run cv      # Regenerate CV PDF
   npm run build   # Rebuild site
   ```

9. **Commit and push** the changes:
   ```bash
   git add -A
   git commit -m "Add [brief description of content]"
   git push
   ```

10. **Summarize** what was added, which file was modified, and tags assigned.
