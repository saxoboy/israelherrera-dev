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
          href='https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
