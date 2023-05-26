import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
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
      <body className='bg-primary-900 font-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
