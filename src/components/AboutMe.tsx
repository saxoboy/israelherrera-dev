/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import React from 'react';
import Carousel from 'react-grid-carousel';
const AboutMe = () => {
  const { t } = useTranslation('common');
  return (
    <section id='about-me' className='bg-primary-700 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>
          {`<${t('aboutme.title')} />`}
        </h2>
        <div className='flex flex-col-reverse justify-between gap-x-6 lg:flex-row lg:items-center'>
          <div className='w-full text-lg text-white lg:w-2/3'>
            <div
              dangerouslySetInnerHTML={{
                __html: t('aboutme.description') || '',
              }}
            />
          </div>
          <div className='w-full pb-6 lg:w-1/3 lg:pb-0'>
            <Carousel
              cols={1}
              rows={1}
              gap={1}
              loop={true}
              scrollSnap
              autoplay={5000}
              hideArrow
              showDots
            >
              <Carousel.Item>
                <img
                  src='/images/israel-herrera-saxophone.jpg'
                  alt='Israel Herrera, Software Engineer'
                  className='mx-auto block h-[550px] w-full animate-morph pb-4'
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
