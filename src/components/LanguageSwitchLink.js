import { useRouter } from 'next/router';

import LangLink from '@/components/links/LangLink';

import languageDetector from '../lib/languageDetector';

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }
  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`;
  }

  //change name of locale
  if (locale === 'en') {
    locale = 'English';
  } else if (locale === 'es') {
    locale = 'Español';
  }

  return (
    <LangLink href={href} className='px-2'>
      <button onClick={() => languageDetector.cache(locale)}>{locale}</button>
    </LangLink>
  );
};

export default LanguageSwitchLink;
