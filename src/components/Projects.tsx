import { useTranslation } from 'next-i18next';
import { RiChromeFill, RiGithubFill } from 'react-icons/ri';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

const Projects = () => {
  const { t } = useTranslation('common');
  return (
    <section id='projects' className='bg-primary-50 py-12 dark:bg-primary-500'>
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
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3'>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
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
              {/* This is my personal portfolio website. It is a single-page */}
              {t('projects.item1.description')}
            </p>
            <div className='grid grid-cols-3 content-start pb-6 text-center uppercase text-primary-700'>
              <div className='transition-all hover:bg-gray-100'>React</div>
              <div className='transition-all hover:bg-gray-100'>TypeScript</div>
              <div className='transition-all hover:bg-gray-100'>Next.JS</div>
              <div className='transition-all hover:bg-gray-100'>
                Tailwind CSS
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='primary'
                href='https://github.com/saxoboy/israelherrera-dev'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                variant='light'
                href='https://israelherrera.dev'
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
              {t('projects.item2.title')}
            </h3>
            <NextImage
              useSkeleton
              src='/images/project/weather-app.png'
              width='320'
              height='320'
              alt='Weather App'
              className='mx-auto block w-80 pb-4 md:w-80'
              imgClassName='rounded-xl shadow-md'
            />
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item2.description')}
            </p>
            <div className='grid grid-cols-3 content-start pb-6 text-center uppercase text-primary-700'>
              <div className='transition-all hover:bg-gray-100'>React</div>
              <div className='transition-all hover:bg-gray-100'>TypeScript</div>
              <div className='transition-all hover:bg-gray-100'>Vite</div>
              <div className='transition-all hover:bg-gray-100'>
                Tailwind CSS
              </div>
              <div className='transition-all hover:bg-gray-100'>
                Open Weather
              </div>
              <div className='transition-all hover:bg-gray-100'>API SWR</div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='primary'
                href='https://github.com/saxoboy/weather-app-v2'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                variant='light'
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
            <NextImage
              useSkeleton
              src='/images/project/backend-cake-portfolio.png'
              width='320'
              height='320'
              alt='Backend - Cake Portfolio'
              className='mx-auto block w-80 pb-4 md:w-80'
              imgClassName='rounded-xl shadow-md'
            />
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item3.description')}
            </p>
            <div className='grid grid-cols-3 content-start pb-6 text-center uppercase text-primary-700'>
              <div className='transition-all hover:bg-gray-100'>TypeScript</div>
              <div className='transition-all hover:bg-gray-100'>Nest</div>
              <div className='transition-all hover:bg-gray-100'>Postgres</div>
              <div className='transition-all hover:bg-gray-100'>Graphql</div>
              <div className='transition-all hover:bg-gray-100'>Passport</div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='primary'
                href='https://github.com/saxoboy/postgres-cakes-porfolio-app-server'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              {/* <ButtonLink
                variant='light'
                href='https://weather-app-saxoboy.netlify.app/'
                target='_blank'
              >
                <RiChromeFill className='mr-2 text-2xl' />
                Demo
              </ButtonLink> */}
            </div>
          </div>
          {/* item */}
          <div className='flex flex-col justify-center rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 pb-8 shadow-md'>
            <h3 className='pb-4 text-center text-4xl text-primary-950'>
              {t('projects.item4.title')}
            </h3>
            <NextImage
              useSkeleton
              src='/images/project/website-layout.png'
              width='320'
              height='320'
              alt='Website Layout'
              className='mx-auto block w-80 pb-4 md:w-80'
              imgClassName='rounded-xl shadow-md'
            />
            <p className='mx-0 px-8 pb-6 text-center text-primary-900'>
              {t('projects.item4.description')}
            </p>
            <div className='grid grid-cols-3 content-start pb-6 text-center uppercase text-primary-700'>
              <div className='transition-all hover:bg-gray-100'>React</div>
              <div className='transition-all hover:bg-gray-100'>Gatsby</div>
              <div className='transition-all hover:bg-gray-100'>
                Tailwind CSS
              </div>
            </div>
            <div className='flex items-center justify-around gap-x-4'>
              <ButtonLink
                variant='primary'
                href='https://github.com/saxoboy/avalith-demo'
                target='_blank'
              >
                <RiGithubFill className='mr-2 text-2xl' />
                Code
              </ButtonLink>
              <ButtonLink
                variant='light'
                href='https://thirsty-engelbart-abee30.netlify.app/'
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
              {t('projects.coming-soon')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
