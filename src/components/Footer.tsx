import UnderlineLink from '@/components/links/UnderlineLink';
import MenuMain from '@/components/MenuMain';
import SocialMedia from '@/components/SocialMedia/SocialMedia';

import { TranslateProps } from '@/constant/env';

const Footer = ({ translate }: TranslateProps) => {
  return (
    <>
      <footer className='bg-primary-950 py-8'>
        <div className='container mx-auto px-4'>
          <h2 className='pb-4 text-center text-5xl text-secondary-500 md:text-6xl lg:text-7xl'>{`<${translate(
            'GetInTouch'
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
        © Copyrigth 2023 - Made with ❤️ by{' '}
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
