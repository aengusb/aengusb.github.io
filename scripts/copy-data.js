#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'content', 'data');
const destDir = path.join(__dirname, '..', 'public', 'data');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = ['publications.json', 'media.json', 'conferences.json', 'teaching.json', 'site.json'];

for (const file of files) {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} → public/data/`);
  } else {
    console.warn(`Warning: ${file} not found in src/content/data/`);
  }
}
