import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Israel Herrera — Full Stack Developer',
    template: '%s | Israel Herrera',
  },
  description:
    'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and great user experiences.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Israel Herrera',
  ],
  authors: [{ name: 'Israel Herrera' }],
  creator: 'Israel Herrera',
  metadataBase: new URL('https://israelherrera.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://israelherrera.dev',
    title: 'Israel Herrera — Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and Node.js.',
    siteName: 'Israel Herrera',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel Herrera — Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and Node.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
