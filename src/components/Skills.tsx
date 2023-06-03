import {
  SiAntdesign,
  SiApollographql,
  SiAstro,
  SiBootstrap,
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGatsby,
  SiGithub,
  SiGoland,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSemanticuireact,
  SiStorybook,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section className='bg-black py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>{`<Skills />`}</h2>
        <div className='flex flex-col items-center justify-between pb-6 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Languages
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiJavascript className='pb-2 text-6xl text-secondary-500' />{' '}
              Javascript
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiTypescript className='pb-2 text-6xl text-secondary-500' />{' '}
              Typescript
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiGoland className='pb-2 text-6xl text-secondary-500' /> Go{' '}
              <span className='text-xs text-secondary-600'>learning...</span>
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiDart className='pb-2 text-6xl text-secondary-500' /> Dart{' '}
              <span className='text-xs text-secondary-600'>learning...</span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-between pb-6 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Library / Framework Frontend
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiReact className='pb-2 text-6xl text-secondary-500' /> React Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiNextdotjs className='pb-2 text-6xl text-secondary-500' /> Next
              Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiVite className='pb-2 text-6xl text-secondary-500' /> Vite Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiAstro className='pb-2 text-6xl text-secondary-500' /> Astro Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiGatsby className='pb-2 text-6xl text-secondary-500' /> Gatsby
              Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiVuedotjs className='pb-2 text-6xl text-secondary-500' /> Vue Js{' '}
              <span className='text-xs text-secondary-600'>learning...</span>
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiFlutter className='pb-2 text-6xl text-secondary-500' /> Flutter{' '}
              <span className='text-xs text-secondary-600'>learning...</span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-between pb-6 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Library / Framework Backend
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiNestjs className='pb-2 text-6xl text-secondary-500' /> Nestjs
              Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiStrapi className='pb-2 text-6xl text-secondary-500' /> Strapi
              Js
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiFirebase className='pb-2 text-6xl text-secondary-500' />{' '}
              Firebase
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-between pb-6 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Database
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiPostgresql className='pb-2 text-6xl text-secondary-500' />{' '}
              Postgresql
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiMongodb className='pb-2 text-6xl text-secondary-500' /> Mongodb
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiMysql className='pb-2 text-6xl text-secondary-500' /> Mysql
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiFirebase className='pb-2 text-6xl text-secondary-500' />{' '}
              Firestore
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-between pb-6 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Tools
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiReactquery className='pb-2 text-6xl text-secondary-500' />{' '}
              React Query
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiGraphql className='pb-2 text-6xl text-secondary-500' /> Graphql
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiRedux className='pb-2 text-6xl text-secondary-500' /> Redux
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiApollographql className='pb-2 text-6xl text-secondary-500' />{' '}
              Apollo Client / Server
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiJest className='pb-2 text-6xl text-secondary-500' /> Jest
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiTestinglibrary className='pb-2 text-6xl text-secondary-500' />{' '}
              Testing Library
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiGithub className='pb-2 text-6xl text-secondary-500' /> Github
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiDocker className='pb-2 text-6xl text-secondary-500' /> Docker
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiStorybook className='pb-2 text-6xl text-secondary-500' />{' '}
              Storybook
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiFigma className='pb-2 text-6xl text-secondary-500' /> Figma
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-between pb-12 lg:flex-row lg:gap-x-4'>
          <h3 className='w-full pb-4 text-center text-3xl text-primary-50 lg:w-1/4 lg:pb-0 lg:text-left'>
            Framework CSS / UI Component
          </h3>
          <ul className='flex w-full flex-wrap justify-around gap-x-4 gap-y-4 text-primary-100 lg:w-3/4 lg:justify-start'>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiTailwindcss className='pb-2 text-6xl text-secondary-500' />{' '}
              Tailwindcss
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiBootstrap className='pb-2 text-6xl text-secondary-500' />{' '}
              Bootstrap
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiStyledcomponents className='pb-2 text-6xl text-secondary-500' />{' '}
              Styled Components
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiSemanticuireact className='pb-2 text-6xl text-secondary-500' />{' '}
              Semantic UI
            </li>
            <li className='flex flex-col items-center justify-center rounded-2xl p-6 shadow-2xl transition-all delay-75 ease-in-out hover:bg-primary-800'>
              <SiAntdesign className='pb-2 text-6xl text-secondary-500' />{' '}
              AntDesign UI
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
