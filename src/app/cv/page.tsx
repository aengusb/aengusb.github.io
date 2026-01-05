import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae for Aengus Bridgman, Political Scientist at McGill University.',
};

export default function CVPage() {
  return (
    <div className="container-main py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-accent-primary">&gt;</span> Curriculum Vitae
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Download my full CV or view a summary of my academic career below.
        </p>
      </header>

      <section className="mb-12">
        <div className="card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Download CV</h2>
              <p className="text-sm text-text-secondary">
                Full curriculum vitae including publications, presentations, and teaching experience.
              </p>
            </div>
            <a
              href="/files/bridgman_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary rounded font-medium hover:bg-accent-primary/90 transition-colors no-underline"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="mb-12">
        <h2 className="section-title">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-3 text-accent-primary">Current Position</h3>
            <p className="text-text-primary font-medium">Assistant Professor (Research)</p>
            <p className="text-sm text-text-secondary">Max Bell School of Public Policy</p>
            <p className="text-sm text-text-secondary">McGill University</p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3 text-accent-primary">Education</h3>
            <p className="text-text-primary font-medium">Ph.D. Political Science</p>
            <p className="text-sm text-text-secondary">McGill University</p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3 text-accent-primary">Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              {['Digital Politics', 'Misinformation', 'Political Behaviour', 'Computational Methods'].map((area) => (
                <span key={area} className="px-2 py-1 text-xs bg-bg-tertiary rounded text-text-secondary">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3 text-accent-primary">Leadership</h3>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>Director, Media Ecosystem Observatory</li>
              <li>Director, Canadian Digital Media Research Network</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-text-secondary hover:text-accent-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
