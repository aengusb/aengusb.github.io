import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCourses } from '@/lib/content';
import { Course } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Teaching',
  description: 'Courses taught and teaching experience by Aengus Bridgman at McGill University.',
};

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    instructor: 'bg-green-500/20 text-green-400',
    'teaching-assistant': 'bg-blue-500/20 text-blue-400',
    'guest-lecturer': 'bg-purple-500/20 text-purple-400',
  };

  const labels: Record<string, string> = {
    instructor: 'Instructor',
    'teaching-assistant': 'TA',
    'guest-lecturer': 'Guest',
  };

  return (
    <span className={`badge ${styles[role] || styles.instructor}`}>
      {labels[role] || role}
    </span>
  );
}

function TermLabel({ term, year }: { term: string; year: number }) {
  const termLabels: Record<string, string> = {
    fall: 'Fall',
    winter: 'Winter',
    summer: 'Summer',
  };

  return (
    <span className="text-sm text-text-tertiary">
      {termLabels[term]} {year}
    </span>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card card-hover">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <RoleBadge role={course.role} />
            <TermLabel term={course.term} year={course.year} />
          </div>
          <h3 className="text-lg font-medium mb-1">
            {course.code && <span className="text-accent-primary">{course.code}: </span>}
            {course.title}
          </h3>
          <p className="text-sm text-text-secondary">{course.institution}</p>
          {course.department && (
            <p className="text-sm text-text-tertiary">{course.department}</p>
          )}
          {course.description && (
            <p className="text-sm text-text-secondary mt-2">{course.description}</p>
          )}
          {(course.syllabusUrl || course.courseUrl) && (
            <div className="flex gap-2 mt-3">
              {course.syllabusUrl && (
                <a
                  href={course.syllabusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
                >
                  Syllabus
                </a>
              )}
              {course.courseUrl && (
                <a
                  href={course.courseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-bg-tertiary rounded hover:bg-accent-primary/20 transition-colors no-underline"
                >
                  Course Materials
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeachingPage() {
  const allCourses = getAllCourses();
  const instructorCourses = allCourses.filter(c => c.role === 'instructor');
  const taCourses = allCourses.filter(c => c.role === 'teaching-assistant');

  return (
    <div className="container-main py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-accent-primary">&gt;</span> Teaching
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Courses on digital politics, misinformation, political participation, and computational methods.
        </p>
      </header>

      {/* Instructor Courses */}
      <section className="mb-12">
        <h2 className="section-title">Courses as Instructor</h2>
        <div className="space-y-4">
          {instructorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* TA Courses */}
      {taCourses.length > 0 && (
        <section>
          <h2 className="section-title">Teaching Assistant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {taCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/" className="text-text-secondary hover:text-accent-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
