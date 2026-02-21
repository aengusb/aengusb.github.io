import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://abridgman.ca'),
  title: {
    default: 'Aengus Bridgman',
    template: '%s | Aengus Bridgman',
  },
  description: 'Political Scientist. Digital Politics, Big Data, and Canadian Politics. Assistant Professor (Research) at McGill University.',
  keywords: ['political science', 'digital politics', 'misinformation', 'Canadian politics', 'McGill University', 'computational social science'],
  authors: [{ name: 'Aengus Bridgman' }],
  creator: 'Aengus Bridgman',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://abridgman.ca',
    siteName: 'Aengus Bridgman',
    title: 'Aengus Bridgman',
    description: 'Political Scientist at McGill University. Research on digital politics, misinformation, and Canadian political behaviour.',
    images: [
      {
        url: '/images/aengus_2_bw.jpg',
        width: 800,
        height: 600,
        alt: 'Aengus Bridgman',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@AengusBridgman',
    creator: '@AengusBridgman',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://abridgman.ca',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="alternate" type="application/rss+xml" title="Aengus Bridgman — Publications" href="/feed.xml" />
        <link rel="alternate" type="application/rss+xml" title="Aengus Bridgman — Media" href="/media-feed.xml" />
        <script
          data-goatcounter="https://abridgman.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 grid-bg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
