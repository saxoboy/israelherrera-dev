import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';

import { PortfolioProvider } from '@/context/PortfolioContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  return (
    <PortfolioProvider>
      <TopBar />
      <NavBar />
      <main>{children}</main>
      <Footer translate={t} />
    </PortfolioProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ['common']))),
      // Will be passed to the page component as props
    },
  };
};
