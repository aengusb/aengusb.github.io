'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

const navItems = [
  { label: 'Research', href: '/research' },
  { label: 'Media', href: '/media' },
  { label: 'Talks', href: '/conferences' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'CV', href: '/cv' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-semibold text-text-primary hover:text-accent-primary transition-colors no-underline"
          >
            <span className="text-accent-primary">&gt;</span> aengus_bridgman
          </Link>

          <div className="flex items-center gap-1">
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link px-3 py-2 rounded no-underline ${
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'nav-link-active'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 ml-4">
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                className="md:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-bg-tertiary transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-md">
          <ul className="container-main py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-link block px-3 py-2 rounded no-underline ${
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'nav-link-active'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
