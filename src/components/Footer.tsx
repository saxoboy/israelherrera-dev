import { useTranslation } from 'next-i18next';

import UnderlineLink from '@/components/links/UnderlineLink';
import MenuMain from '@/components/MenuMain';
import SocialMedia from '@/components/SocialMedia';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <footer className='bg-primary-50 py-8 dark:bg-primary-950'>
        <div className='container mx-auto px-4'>
          <h2 className='pb-4 text-center text-5xl text-secondary-500 md:text-6xl lg:text-7xl'>{`<${t(
            'footer.GetInTouch'
          )} />`}</h2>
          <div className='flex items-center justify-center'>
            <SocialMedia />
          </div>
          <div className='pt-8'>
            <MenuMain />
          </div>
        </div>
      </footer>
      <div className='bg-black py-2 text-center text-sm text-white'>
        © Copyrigth 2023 - {t('footer.madeWith')} ❤️ {t('footer.by')}{' '}
        <UnderlineLink
          href='https://www.linkedin.com/in/israelherrerae'
          target='_blank'
        >
          Israel H.
        </UnderlineLink>
      </div>
    </>
  );
};

export default Footer;
