#!/usr/bin/env node

/**
 * CV Generator Script
 * Generates a professional LaTeX CV from JSON data files
 *
 * Usage: node scripts/generate-cv.js
 * Output: public/files/bridgman_cv.tex and bridgman_cv.pdf (if pdflatex available)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const DATA_DIR = path.join(__dirname, '../src/content/data');
const OUTPUT_DIR = path.join(__dirname, '../public/files');

// Load JSON data
const publications = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'publications.json'), 'utf-8'));
const conferences = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'conferences.json'), 'utf-8'));
const teaching = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'teaching.json'), 'utf-8'));
const media = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'media.json'), 'utf-8'));
const site = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'site.json'), 'utf-8'));

// Helper: Escape LaTeX special characters
function escapeLatex(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');
}

// Helper: Format author list with "me" bolded
function formatAuthors(authors) {
  return authors.map(a => {
    const name = escapeLatex(a.name);
    return a.isMe ? `\\textbf{${name}}` : name;
  }).join(', ');
}

// Helper: Format date
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

// Helper: Format location
function formatLocation(loc) {
  if (!loc) return '';
  const parts = [];
  if (loc.city) parts.push(loc.city);
  if (loc.state) parts.push(loc.state);
  if (loc.country && loc.country !== 'Canada' && loc.country !== 'USA') parts.push(loc.country);
  return parts.join(', ');
}

// Generate LaTeX document
function generateCV() {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  let tex = `%!TEX program = pdflatex
\\documentclass[11pt,letterpaper]{article}

% Packages
\\usepackage[margin=1in]{geometry}
% Use Computer Modern (default) - always available
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{fancyhdr}
\\usepackage{xcolor}

% Colors
\\definecolor{accent}{RGB}{13, 148, 136}
\\definecolor{linkblue}{RGB}{0, 102, 204}

% Hyperref setup
\\hypersetup{
  colorlinks=true,
  linkcolor=linkblue,
  urlcolor=linkblue,
  pdfauthor={Aengus Bridgman},
  pdftitle={Curriculum Vitae - Aengus Bridgman}
}

% Section formatting
\\titleformat{\\section}{\\Large\\bfseries\\color{accent}}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{12pt}{8pt}

\\titleformat{\\subsection}{\\large\\bfseries}{}{0em}{}
\\titlespacing{\\subsection}{0pt}{8pt}{6pt}

% No paragraph indent
\\setlength{\\parindent}{0pt}

% Header/Footer
\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\fancyfoot[C]{\\thepage}
\\fancyfoot[R]{\\small Updated: ${today}}

% Custom commands
\\newcommand{\\cvitem}[2]{\\noindent\\textbf{#1:} #2\\\\[4pt]}

\\begin{document}

% Header
\\begin{center}
{\\LARGE\\bfseries Aengus Bridgman}\\\\[6pt]
{\\large Assistant Professor (Research)}\\\\[2pt]
{\\large Max Bell School of Public Policy, McGill University}\\\\[8pt]
\\href{mailto:aengus.bridgman@mcgill.ca}{aengus.bridgman@mcgill.ca} \\quad|\\quad
\\href{https://abridgman.ca}{abridgman.ca} \\quad|\\quad
\\href{https://scholar.google.ca/citations?user=rxQTZG0AAAAJ}{Google Scholar}
\\end{center}

\\vspace{12pt}

%% ACADEMIC POSITION
\\section{Academic Position}

\\cvitem{2023--present}{Assistant Professor (Research), Max Bell School of Public Policy, McGill University}

%% EDUCATION
\\section{Education}

\\cvitem{2025}{Ph.D., Political Science, McGill University}
\\begin{itemize}[leftmargin=2em, topsep=0pt, itemsep=0pt]
  \\item Thesis: \\textit{Those who compose the conversation: Three essays on online political activists}
  \\item Committee: Dietlind Stolle (Supervisor), Aaron Erlich, Taylor Owen
\\end{itemize}
\\vspace{4pt}
\\cvitem{2013}{M.A., Political Science, University of Ottawa}
\\cvitem{2010}{B.A. (Honours), Political Science, University of Manitoba}

%% RESEARCH INTERESTS
\\section{Research Interests}

\\textbf{Methods:} Computational social science, causal inference, survey design and analysis, field and natural experiments, survey experiments, text-as-data, machine learning, network analysis\\\\[4pt]
\\textbf{Substantive:} Political behaviour, information ecosystems, political communication, digital activism, misinformation, social media, Canadian politics

%% RELEVANT WORK EXPERIENCE
\\section{Relevant Work Experience}

\\cvitem{2023--present}{Director, Media Ecosystem Observatory}
\\cvitem{2023--present}{Director, Canadian Digital Media Research Network}
\\cvitem{2022--2023}{Research Scientist, Centre for Social Media and Politics, NYU}
\\cvitem{2022--2023}{Senior Policy Analyst, Privy Council Office}
\\cvitem{2019--2022}{Digital Lead, Media Ecosystem Observatory}
\\cvitem{2014--2016}{Consultant, Deloitte}
\\cvitem{2012--2013}{Researcher, Centre on Public Management and Policy}

`;

  // REFEREED PUBLICATIONS
  const refereed = publications.publications
    .filter(p => p.category === 'refereed')
    .sort((a, b) => b.year - a.year);

  tex += `
%% REFEREED PUBLICATIONS
\\section{Refereed Publications}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;

  for (const pub of refereed) {
    const authors = formatAuthors(pub.authors);
    const title = escapeLatex(pub.title);
    const venue = escapeLatex(pub.venue);
    const year = pub.year;

    let entry = '\\item ' + authors + '. ' + year + '. ``' + title + "''," + ' \\textit{' + venue + '}';

    if (pub.doi) {
      entry += `. \\href{https://doi.org/${pub.doi}}{doi:${pub.doi}}`;
    } else if (pub.url) {
      entry += `. \\url{${pub.url}}`;
    }

    entry += '.';
    tex += entry + '\n';
  }

  tex += `\\end{enumerate}

`;

  // BOOK CHAPTERS (if any separate from refereed)
  const bookChapters = publications.publications.filter(p => p.venueType === 'book-chapter' && p.category !== 'refereed');
  if (bookChapters.length > 0) {
    tex += `%% BOOK CHAPTERS
\\section{Book Chapters}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;
    for (const pub of bookChapters) {
      const authors = formatAuthors(pub.authors);
      const title = escapeLatex(pub.title);
      const venue = escapeLatex(pub.venue);
      tex += '\\item ' + authors + '. ' + pub.year + '. ``' + title + "''," + ' in \\textit{' + venue + '}.\n';
    }
    tex += `\\end{enumerate}

`;
  }

  // REPORTS AND NON-REFEREED
  const reports = publications.publications
    .filter(p => p.category === 'report')
    .sort((a, b) => b.year - a.year);

  tex += `%% REPORTS AND NON-REFEREED PUBLICATIONS
\\section{Reports and Non-Refereed Publications}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;

  for (const pub of reports) {
    const authors = formatAuthors(pub.authors);
    const title = escapeLatex(pub.title);
    const venue = escapeLatex(pub.venue);

    let entry = '\\item ' + authors + '. ' + pub.year + '. ``' + title + "''," + ' ' + venue;

    if (pub.url) {
      entry += `. \\href{${pub.url}}{[Link]}`;
    }

    entry += '.';
    tex += entry + '\n';
  }

  tex += `\\end{enumerate}

`;

  // INVITED TALKS
  const invitedTalks = conferences.conferences
    .filter(c => c.eventType === 'invited')
    .sort((a, b) => b.year - a.year || new Date(b.date) - new Date(a.date));

  tex += `%% INVITED TALKS
\\section{Invited Talks}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;

  for (const conf of invitedTalks) {
    const title = escapeLatex(conf.title);
    const event = escapeLatex(conf.eventName);
    const loc = formatLocation(conf.location);

    let entry = '\\item ``' + title + "''," + ' ' + event;
    if (loc) entry += `, ${loc}`;
    entry += ` (${conf.year}).`;

    tex += entry + '\n';
  }

  tex += `\\end{enumerate}

`;

  // PARLIAMENTARY AND COMMITTEE TESTIMONY
  const testimony = conferences.conferences
    .filter(c => c.eventType === 'testimony')
    .sort((a, b) => b.year - a.year || new Date(b.date) - new Date(a.date));

  if (testimony.length > 0) {
    tex += `%% PARLIAMENTARY TESTIMONY
\\section{Parliamentary and Committee Testimony}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;

    for (const conf of testimony) {
      const title = escapeLatex(conf.title);
      const event = escapeLatex(conf.eventName);
      const dateStr = formatDate(conf.date);

      let entry = `\\item ${title}, ${event} (${dateStr})`;
      if (conf.url) {
        entry += `. \\href{${conf.url}}{[Notice]}`;
      }
      entry += '.';

      tex += entry + '\n';
    }

    tex += `\\end{enumerate}

`;
  }

  // CONFERENCE PRESENTATIONS
  const papers = conferences.conferences
    .filter(c => c.eventType === 'paper')
    .sort((a, b) => b.year - a.year || new Date(b.date) - new Date(a.date));

  tex += `%% CONFERENCE PRESENTATIONS
\\section{Conference Presentations}

\\begin{enumerate}[leftmargin=2em, itemsep=2pt]
`;

  for (const conf of papers) {
    const title = escapeLatex(conf.title);
    const event = escapeLatex(conf.eventName);
    const loc = formatLocation(conf.location);

    let entry = '\\item ``' + title + "''," + ' ' + event;
    if (loc) entry += `, ${loc}`;
    entry += ` (${conf.year}).`;

    tex += entry + '\n';
  }

  tex += `\\end{enumerate}

`;

  // SERVICE
  const service = conferences.conferences
    .filter(c => c.eventType === 'service')
    .sort((a, b) => b.year - a.year);

  if (service.length > 0) {
    tex += `%% SERVICE
\\section{Service}

\\begin{itemize}[leftmargin=2em, itemsep=2pt]
`;

    for (const s of service) {
      const title = escapeLatex(s.title);
      const event = escapeLatex(s.eventName);
      tex += `\\item ${title}, ${event} (${s.year})\n`;
    }

    // Add standard service items
    tex += `\\item Referee for \\textit{British Journal of Political Science}, \\textit{Political Behaviour}, \\textit{French Politics}, \\textit{Scientific Reports}, \\textit{Journal of Experimental Political Science}, \\textit{Canadian Journal of Political Science}, \\textit{Journal of Digital War}, \\textit{Journal of Ethnic and Migration Studies}
\\item Referee for Council of Canadian Academies \\textit{Vulnerable Connections: Expert Panel on Public Safety in the Digital Age}
\\item Co-organizer, McGill Comparative Politics Reading Group (2021)
\\item President, McGill Graduate Association of Political Science Students (2017--19)
`;

    tex += `\\end{itemize}

`;
  }

  // TEACHING
  const instructorCourses = teaching.courses
    .filter(c => c.role === 'instructor' && c.year > 0)
    .sort((a, b) => b.year - a.year);

  const taCourses = teaching.courses
    .filter(c => c.role === 'teaching-assistant')
    .sort((a, b) => b.year - a.year);

  tex += `%% TEACHING
\\section{Teaching}

\\subsection{As Instructor}
\\begin{itemize}[leftmargin=2em, itemsep=2pt]
`;

  for (const course of instructorCourses) {
    const title = escapeLatex(course.title);
    const inst = escapeLatex(course.institution);
    const term = course.term ? `${course.term.charAt(0).toUpperCase() + course.term.slice(1)} ` : '';
    tex += `\\item ${title}, ${inst} (${term}${course.year})\n`;
  }

  tex += `\\end{itemize}

\\subsection{As Teaching Assistant}
\\begin{itemize}[leftmargin=2em, itemsep=2pt]
`;

  for (const course of taCourses) {
    const title = escapeLatex(course.title);
    const inst = escapeLatex(course.institution);
    const yearStr = course.year > 0 ? ` (${course.year})` : '';
    tex += `\\item ${title}, ${inst}${yearStr}\n`;
  }

  tex += `\\end{itemize}

`;

  // GRANTS
  tex += `%% GRANTS
\\section{Grant Awards}

\\begin{itemize}[leftmargin=2em, itemsep=2pt]
\\item Canadian Heritage Digital Citizen Initiative (\\$5,500,000) -- awarded to the Media Ecosystem Observatory for delivery of the Canadian Digital Media Research Network
\\item Elections British Columbia (\\$100,000) -- awarded to the Media Ecosystem Observatory for delivery of the British Columbia Elections Study
\\item Canadian Heritage Digital Citizen Initiative (\\$100,000) -- for the Avatar Project
\\item Élections Québec (\\$45,000) -- awarded to the Media Ecosystem Observatory for delivery of the Projet sur la désinformation électorale au Québec
\\item Canadian Heritage Digital Citizen Initiative (\\$50,000) -- for the Disinformed Podcast
\\item Global Affairs Canada (\\$100,000) -- awarded to the Media Ecosystem Observatory for delivery of the Canadian Election Misinformation Project
\\end{itemize}

`;

  // AWARDS
  tex += `%% AWARDS
\\section{Research Awards}

\\begin{itemize}[leftmargin=2em, itemsep=2pt]
\\item SSHRC Postdoctoral Fellowship (2023, declined)
\\item Political Methodology Award, ICPSR (Summer 2019)
\\item Joseph-Armand Bombardier Graduate Scholarship (2018--21)
\\item Consortium on Qualitative Research Methods Scholarship (Summer 2018)
\\item Graduate Mobility Award (2018, 2019, 2021)
\\item Graduate Excellence Fellowship (2016--18)
\\item Centre for the Study of Democratic Citizenship Fellowship (2016--2020)
\\item Mallory Fellowship (2016)
\\item Faculty of Arts Masters Scholarship (2010--11)
\\item Murray S. Donnelly Award (2008--09)
\\end{itemize}

`;

  // MEDIA (summary)
  const mediaCount = media.appearances.length;
  tex += `%% MEDIA
\\section{Media Appearances}

I have been interviewed over 200 times by news media on specific research projects as well as on misinformation, social media, and political participation in Canada more generally. Selected appearances include CBC News/The National, Radio-Canada Téléjournal, The New York Times, Washington Post, Vox, Global News, CTV News, Toronto Star, Montreal Gazette, La Presse, Le Devoir, and NPR. A complete list is available at \\href{https://abridgman.ca/media/}{abridgman.ca/media}.

`;

  // TECHNICAL SKILLS
  tex += `%% TECHNICAL SKILLS
\\section{Technical Skills}

Python, R, SQL, \\LaTeX, Git, Selenium, Qualtrics, JavaScript, Microsoft Office suite

%% LANGUAGES
\\section{Languages}

English (native), French (advanced)

\\end{document}
`;

  return tex;
}

// Main execution
function main() {
  console.log('Generating CV from JSON data...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Generate LaTeX
  const tex = generateCV();
  const texPath = path.join(OUTPUT_DIR, 'bridgman_cv.tex');
  fs.writeFileSync(texPath, tex);
  console.log(`✓ Generated ${texPath}`);

  // Try to compile PDF
  try {
    console.log('Attempting to compile PDF...');
    execSync(`cd "${OUTPUT_DIR}" && pdflatex -interaction=nonstopmode bridgman_cv.tex`, {
      stdio: 'pipe'
    });
    // Run twice for page numbers
    execSync(`cd "${OUTPUT_DIR}" && pdflatex -interaction=nonstopmode bridgman_cv.tex`, {
      stdio: 'pipe'
    });
    console.log(`✓ Generated ${path.join(OUTPUT_DIR, 'bridgman_cv.pdf')}`);

    // Clean up auxiliary files
    const auxFiles = ['aux', 'log', 'out'];
    for (const ext of auxFiles) {
      const auxPath = path.join(OUTPUT_DIR, `bridgman_cv.${ext}`);
      if (fs.existsSync(auxPath)) {
        fs.unlinkSync(auxPath);
      }
    }
    console.log('✓ Cleaned up auxiliary files');
  } catch (err) {
    console.log('⚠ pdflatex not available or compilation failed. LaTeX file generated but not compiled.');
    console.log('  To compile manually: cd public/files && pdflatex bridgman_cv.tex');
  }

  console.log('\nDone!');
}

main();
