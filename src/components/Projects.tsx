import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { RiChromeFill, RiGithubFill } from 'react-icons/ri';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

const Projects = () => {
  const { t } = useTranslation('common');
  return (
    <section id='projects' className='bg-primary-500 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>{`<${t(
          'projects.title'
        )} />`}</h2>
        <div className='flex flex-col items-center justify-center pb-6'>
          <p className='pb-4 text-center text-lg'>
            {t('projects.description')}
          </p>
          <ButtonLink
            variant='primary'
            href='https://github.com/saxoboy'
            target='_blank'
          >
            <RiGithubFill className='mr-2 text-2xl' /> {t('projects.button')}
          </ButtonLink>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item5.title')}
            </h3>
            <NextImage
              useSkeleton
              src='/images/project/Appointment-Schedule.png'
              width='320'
              height='320'
              alt='Portfolio Web'
              className='mx-auto block w-80 pb-4 md:w-80'
              imgClassName='rounded-xl shadow-md'
            />
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item5.description')}
            </p>
            <div className='flex flex-wrap items-center justify-evenly gap-4 pb-8 text-center text-primary-700'>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  React.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  TypeScript
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Next.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Tailwind CSS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Firebase
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Zustand
                </span>
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='light'
                href='https://github.com/saxoboy/odonto-system'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                href='https://odonto-system-psi.vercel.app'
                target='_blank'
                className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              >
                <RiChromeFill className='mr-2 text-2xl' />
                Demo
              </ButtonLink>
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item1.title')}
              <span className='block text-xs text-secondary-200'>
                {`-> ${t('projects.item1.note')} 🙈 <- `}
              </span>
            </h3>
            <NextImage
              useSkeleton
              src='/images/project/portfolio-web.png'
              width='320'
              height='320'
              alt='Portfolio Web'
              className='mx-auto block w-80 pb-4 md:w-80'
              imgClassName='rounded-xl shadow-md'
            />
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item1.description')}
            </p>
            <div className='flex flex-wrap items-center justify-evenly gap-4 pb-8 text-center text-primary-700'>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  React.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  TypeScript
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Next.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='light'
                href='https://github.com/saxoboy/israelherrera-dev'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                href='https://israelherrera.dev'
                target='_blank'
                className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              >
                <RiChromeFill className='mr-2 text-2xl' />
                Demo
              </ButtonLink>
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item2.title')}
            </h3>
            <Link href='https://weather-app-saxoboy.netlify.app/'>
              <NextImage
                useSkeleton
                src='/images/project/weather-app.png'
                width='320'
                height='320'
                alt='Weather App'
                className='mx-auto block w-80 pb-4 md:w-80'
                imgClassName='rounded-xl shadow-md'
              />
            </Link>
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item2.description')}
            </p>
            <div className='flex flex-wrap items-center justify-evenly gap-4 pb-8 text-center text-primary-700'>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  React.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  TypeScript
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Vite.Js
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Tailwind CSS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Open Weather
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  API SWR
                </span>
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='light'
                href='https://github.com/saxoboy/weather-app-v2'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
                href='https://weather-app-saxoboy.netlify.app/'
                target='_blank'
              >
                <RiChromeFill className='mr-2 text-2xl' />
                Demo
              </ButtonLink>
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item3.title')}
            </h3>
            <Link href='https://github.com/saxoboy/postgres-cakes-porfolio-app-server'>
              <NextImage
                useSkeleton
                src='/images/project/backend-cake-portfolio.png'
                width='320'
                height='320'
                alt='Backend - Cake Portfolio'
                className='mx-auto block w-80 pb-4 md:w-80'
                imgClassName='rounded-xl shadow-md'
              />
            </Link>
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item3.description')}
            </p>
            <div className='flex flex-wrap items-center justify-evenly gap-4 pb-8 text-center text-primary-700'>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  TypeScript
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Nest.JS
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Postgres
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Graphql
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Passport
                </span>
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='light'
                href='https://github.com/saxoboy/postgres-cakes-porfolio-app-server'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item4.title')}
            </h3>
            <Link href='https://github.com/saxoboy/avalith-demo'>
              <NextImage
                useSkeleton
                src='/images/project/website-layout.png'
                width='320'
                height='320'
                alt='Website Layout'
                className='mx-auto block w-80 pb-4 md:w-80'
                imgClassName='rounded-xl shadow-md'
              />
            </Link>
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item4.description')}
            </p>
            <div className='flex flex-wrap items-center justify-evenly gap-4 pb-8 text-center text-primary-700'>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  React
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Gatsby
                </span>
              </div>
              <div>
                <span className='rounded-lg bg-secondary-500 px-2 py-1 transition-all hover:bg-secondary-200'>
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='light'
                href='https://github.com/saxoboy/avalith-demo'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                href='https://thirsty-engelbart-abee30.netlify.app/'
                target='_blank'
                className='rounded-md bg-primary-600 px-4 py-2 text-center text-primary-50 shadow-md transition duration-150 ease-in-out hover:bg-primary-800 hover:text-primary-100'
              >
                <RiChromeFill className='mr-2 text-2xl' />
                Demo
              </ButtonLink>
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.coming-soon')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
