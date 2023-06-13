import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import NextImage from '@/components/NextImage';

const Projects = () => {
  const { t } = useTranslation('common');
  return (
    <section id='projects' className='bg-primary-50 py-12 dark:bg-primary-500'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>{`<${t(
          'projects.title'
        )} />`}</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col justify-between rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 shadow-md'>
            <h3 className='flex h-full flex-col justify-between pb-4 text-center text-4xl text-gray-900'>
              Weather App
            </h3>
            <NextImage
              src='/images/project/weather-app.png'
              alt='Weather App'
              width={320}
              height={320}
              className='mx-auto block rounded-3xl'
            />
          </div>
          <div className='flex flex-col justify-between rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 shadow-md'>
            <h3 className='flex h-full flex-col justify-between pb-4 text-center text-4xl text-gray-900'>
              Weather App
            </h3>
            <Image
              src='/images/project/weather-app.png'
              alt='Weather App'
              width={320}
              height={320}
              className='mx-auto block rounded-3xl'
            />
          </div>
          <div className='flex flex-col justify-between rounded-3xl bg-gradient-radial from-primary-100 to-primary-500 p-4 shadow-md'>
            <h3 className='flex h-full flex-col justify-between pb-4 text-center text-4xl text-gray-900'>
              Weather App
            </h3>
            <Image
              src='/images/project/weather-app.png'
              alt='Weather App'
              width={320}
              height={320}
              className='mx-auto block rounded-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
