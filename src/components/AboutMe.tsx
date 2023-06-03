/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-grid-carousel';
const AboutMe = () => {
  return (
    <section id='about-me' className='bg-primary-700 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>{`<AboutMe />`}</h2>
        <div className='flex flex-col-reverse justify-between gap-x-6 lg:flex-row lg:items-center'>
          <div className='w-full text-justify text-lg text-white lg:w-2/3'>
            <p className='pb-4'>
              Hey what's up! I am a self-taught programmer living in Cuenca and
              born in Guayaquil - Ecuador 🇪🇨 in the same year as Mark
              Zuckerberg, Cris Evans or Ed Sheeran, yes... a magical year 😅.
            </p>
            <p className='pb-4 text-lg'>
              I am passionate about technology and a fan of{' '}
              <span className='text-secondary-500'>Javascript/Typescript</span>.
              Currently, I am exploring the fascinating world of{' '}
              <span className='text-secondary-500'>React JS</span> and all its
              exciting ecosystems such as{' '}
              <span className='text-secondary-500'>
                Vite - Next - Astros - Gatsby - etc
              </span>
              .
            </p>
            <p className='pb-4 text-lg'>
              I'm not satisfied with just that, I also spend time learning Vue,
              GO, Dart, and anything that allows me to solve those annoying
              daily problems with a touch of code.
            </p>
            <p className='pb-4 text-lg'>
              Yes,{' '}
              <span className='text-secondary-500'>
                I am a Frontend Developer by profession and a Backend Developer
                in evolution
              </span>
              , but I am also an enthusiast of the spiritual life 🙏🏻 and a lover
              of music 🎶.
            </p>
            <p className='pb-4 text-lg'>
              When I'm not immersed in lines of code, I am immersed in the sweet
              melodies of a Yamaha YAS-62 saxophone 🎷 in my local{' '}
              <Link
                href='https://asambleacuenca.com'
                target='_blanck'
                title='Asamblea de Dios Ecuatoria de Cuenca'
                className='text-secondary-100 hover:text-secondary-500'
              >
                church's Praise Band ⛪️
              </Link>
              . What better way to find the balance between the divine and the
              digital, right? I'm always ready to mix beats and code blocks to
              create amazing experiences both in the browser and on stage.
            </p>
            <p className='pb-4 text-lg'>
              So if you are looking for a{' '}
              <span className='text-secondary-500'>
                Javascript Fullstack Developer
              </span>{' '}
              with an overflowing passion for technology, a saxophonist at
              heart, and a touch of humor, here I am! Willing to face any
              challenge with a smile and a coffee ☕️ in hand. Do we talk about
              code and music while making beautiful projects?
            </p>
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
