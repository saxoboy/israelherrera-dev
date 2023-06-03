import Image from 'next/image';

import ButtonLink from '@/components/links/ButtonLink';

import { cvUrl } from '@/constant/env';

const Hero = () => {
  return (
    <section className='container mx-auto px-4'>
      <div
        id='home'
        className='my-16 flex flex-col items-start justify-center gap-x-4 px-4 lg:flex-row lg:items-center'
      >
        <div className='relative w-full md:w-1/3 lg:w-1/2'>
          <Image
            src='/images/israel-herrera-e.jpg'
            alt='Israel Herrera, Software Engineer'
            className='mx-auto animate-morph rounded-full shadow-2xl'
            width={450}
            height={450}
            priority
          />
        </div>
        <div className='w-full pt-6 text-center text-primary-50 md:w-2/3 lg:w-1/2 lg:pt-0 lg:text-left'>
          <h4 className='text-3xl lg:text-4xl'>👋🏼 Hello there!... I'm</h4>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            <span className='text-gray-500'>{`<`}</span> Israel Herrera{' '}
            <span className='text-gray-500'>{`</>`}</span>
          </h1>
          <h2 className='text-secondary-500'>Javascript Fullstack Developer</h2>
          <p className='mt-2 text-lg'>
            <span className='italic'>...no time to surrender</span> 🎷 🚀{' '}
          </p>
          <div className='flex flex-grow items-start justify-start gap-x-4 gap-y-4 pt-8 xl:items-center'>
            <ButtonLink
              className='rounded-md bg-secondary-500 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-50'
              href={cvUrl}
              target='_blanck'
            >
              Download my CV
            </ButtonLink>

            <ButtonLink
              className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              href='#contact'
            >
              Get in touch
            </ButtonLink>

            <ButtonLink
              className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              href='https://www.linkedin.com/in/israelherrerae'
              target='_blank'
            >
              Visit my Linkedin
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
