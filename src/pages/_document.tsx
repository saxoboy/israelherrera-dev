import { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../../next-i18next.config';

export default function Document() {
  const currentLocale = 'en' ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Gruppo&family=Saira:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-gray-50 font-body dark:bg-primary-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
