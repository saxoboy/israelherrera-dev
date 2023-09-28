import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import { useState } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import i18nextConfig from './../../next-i18next.config';

const MenuMain = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    i18nextConfig.i18n.defaultLocale
  );
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleChangeLanguage = async () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    await i18n?.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    router.push(router.pathname, router.pathname, { locale: newLanguage });
  };

  return (
    <nav>
      <ul className='flex flex-col items-center justify-center text-center font-display text-xl tracking-wide text-secondary-500 lg:flex-row'>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#home'>{`${t(
            'common:menu.home'
          )}`}</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#projects'>{`${t(
            'common:menu.projects'
          )}`}</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#experience'>{`${t(
            'common:menu.experience'
          )}`}</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#about-me'>{`${t(
            'common:menu.about-me'
          )}`}</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#contact'>{`${t(
            'common:menu.contact'
          )}`}</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <Link href='' passHref onClick={handleChangeLanguage}>
            {currentLanguage === 'en' ? t('Español') : t('English')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
