import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import ButtonLink from '@/components/links/ButtonLink';

import { cvUrl } from '@/constant/env';

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <section className='container mx-auto px-4'>
      <div
        id='home'
        className='my-16 flex flex-col items-start justify-center gap-x-4 px-4 md:flex-row md:items-center'
      >
        <div className='relative w-full md:w-1/2'>
          <Image
            src='/images/israel-herrera-e.jpg'
            alt='Israel Herrera, Software Engineer'
            className='mx-auto animate-morph rounded-full shadow-2xl'
            width={450}
            height={450}
            priority
          />
        </div>
        <div className='w-full pt-6 text-center text-primary-50 md:w-1/2 lg:pt-0 lg:text-left'>
          <h4 className='text-3xl lg:text-4xl'>{`${t('common:hero.hi')}`}</h4>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            <span className='text-gray-500'>{`<`}</span> Israel Herrera{' '}
            <span className='text-gray-500'>{`</>`}</span>
          </h1>
          <h2 className='text-secondary-500'>{`${t('hero.profession')}`}</h2>
          <p className='mt-2 text-lg'>
            <span className='italic'>{`${t('hero.slogan')}`} </span>
          </p>
          <div className='flex flex-col items-center justify-center gap-x-4 gap-y-4 pt-8 lg:flex-row lg:items-start lg:justify-start xl:items-center'>
            <ButtonLink
              className='block rounded-md bg-primary-900 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-50'
              href={cvUrl}
              target='_blanck'
            >
              {`${t('hero.button')}`}
            </ButtonLink>

            <ButtonLink
              className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              href='#contact'
            >
              {`${t('hero.button2')}`}
            </ButtonLink>

            <ButtonLink
              className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              href='https://www.linkedin.com/in/israelherrerae'
              target='_blank'
            >
              {`${t('hero.button3')}`}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
