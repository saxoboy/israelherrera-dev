import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nProgress from 'nprogress';

import '@/styles/globals.css';
import '@/styles/nprogress.css';

import Layout from '@/components/layout/Layout';
// EXPANSION CHANGES: 3 lines below
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
