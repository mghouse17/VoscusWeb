import type { Metadata } from 'next';
import { Exo_2, IBM_Plex_Mono, Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Voscus - AI Agent Watchdog',
  description:
    'Watch every action. Understand every risk. Voscus monitors autonomous AI agents, calculates blast radius, and helps teams stop risky actions before they become incidents.',
  keywords: ['AI agents', 'AI safety', 'agent monitoring', 'action oversight'],
  openGraph: {
    title: 'Voscus - AI Agent Watchdog',
    description:
      'Action-level oversight for autonomous AI agents. Monitor tool use across email, files, code, browsers, and enterprise systems.',
    type: 'website',
    url: 'https://voscus.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${ibmPlexMono.variable} ${exo2.variable} bg-ink-50 font-sans text-ink-900`}
      >
        {children}
      </body>
    </html>
  );
}
