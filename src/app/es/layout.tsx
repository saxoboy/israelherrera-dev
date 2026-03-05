import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://israelherrera.dev/es',
    languages: {
      en: 'https://israelherrera.dev',
      es: 'https://israelherrera.dev/es',
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang='es'>{children}</div>;
}
