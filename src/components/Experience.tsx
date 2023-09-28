import { useTranslation } from 'next-i18next';

const Experience = () => {
  const { t } = useTranslation('common');
  return (
    <section id='experience' className='bg-primary-700 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-5xl text-secondary-500 md:text-6xl lg:text-left lg:text-7xl'>{`<${t(
          'experience.title'
        )} />`}</h2>
        <div className='flex flex-col items-center justify-center px-4 pb-6'>
          <ol className='relative border-l border-primary-950'>
            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-950 bg-primary-600' />
              <time className=' mb-1 font-normal leading-none text-primary-200'>
                {t('experience.experienceDate5')}
              </time>
              <h3 className='text-3xl font-semibold text-primary-950'>
                React Full Stack Developer
              </h3>
              <h4 className='font-body text-xl font-normal text-secondary-400'>
                CleverIT Group, Santiago, Chile
              </h4>
              <div className='ml-5 tracking-wide'>
                <ul className='list-disc space-y-4 text-lg'>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectTitle')}:{' '}
                      </span>
                      <br /> Web application for end-users and a Backoffice web
                      application for collaborators and employees of the
                      companies.
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectDescription')}:
                    </span>
                    <br />
                    <ol className='ml-5 list-decimal'>
                      <li>
                        <p>
                          Web application for the automatic enrollment process
                          of students in the university's offered programs,
                          along with a Backoffice web application for university
                          staff responsible for managing enrollments, students,
                          representatives, credits, scholarships, and other
                          related aspects.
                        </p>
                      </li>
                      <li>
                        <p>
                          Web application called T.R.S.T for recording the
                          weight, location, collecting company, and tracking the
                          process of recyclable products and waste from the sea
                          along the Chilean coast.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectStack')}:
                    </span>
                    <br />
                    <p>
                      JavaScript, React, TypeScript, GraphQL, Next.js, Nest.js,
                      Git, React Hooks and Custom Hooks, Apollo Client and
                      Server, React Suite, Tailwind CSS, SCRUM, Azure DevOps.
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-950 bg-primary-600' />
              <time className=' mb-1 font-normal leading-none text-primary-200'>
                {t('experience.experienceDate4')}
              </time>
              <h3 className='text-3xl font-semibold text-primary-950'>
                React Frontend Developer
              </h3>
              <h4 className='font-body text-xl font-normal text-secondary-400'>
                SuperDigital by Group Santander, Bs. As. - Arg
              </h4>
              <div className='ml-5 pt-2 tracking-wide'>
                <ul className='list-disc space-y-4 text-lg'>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectTitle')}:{' '}
                      </span>
                      <br /> Web application for the attention and reception of
                      new clients in Argentina, Mexico and Brazil.
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectDescription')}:
                    </span>
                    <br />
                    <p>
                      Web application for Superdigital customers to perform
                      mobile phone top-ups, pay third-party bills, and other
                      transactions, including public transportation.
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectStack')}:
                    </span>
                    <br />
                    <p>
                      JavaScript, React, TypeScript, Redux, Git, React Hooks and
                      Custom Hooks, MicroFrontend, Material UI, Styled
                      Component, Sass CSS, SCRUM, Postman, Unit Testing, Azure
                      DevOps.
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-950 bg-primary-600' />
              <time className=' mb-1 font-normal leading-none text-primary-200'>
                {t('experience.experienceDate3')}
              </time>
              <h3 className='text-3xl font-semibold text-primary-950'>
                React Frontend Developer
              </h3>
              <h4 className='font-body text-xl font-normal text-secondary-400'>
                Avalith - Mar de Plata, Arg
              </h4>
              <div className='ml-5 py-2 tracking-wide'>
                <ul className='list-disc space-y-4 text-lg'>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectTitle')}:{' '}
                      </span>
                      <br /> Web Site de Avalith
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectDescription')}:
                      </span>
                      <br />
                      Development of the Avalith.net website with
                      synchronization with its internal personnel recruitment
                      system.
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectStack')}:
                    </span>
                    <br />
                    <p>
                      JavaScript, React, Gatsby.js, Context Api, Git, React
                      Hooks, Tailwind CSS, SCRUM, Postman, Github
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-950 bg-primary-600' />
              <time className=' mb-1 font-normal leading-none text-primary-200'>
                {t('experience.experienceDate2')}
              </time>
              <h3 className='text-3xl font-semibold text-primary-950'>
                React Frontend Developer
              </h3>
              <h4 className='font-body text-xl font-normal text-secondary-400'>
                Shaddai Solutions LLC - McAllen Tx, USA
              </h4>
              <div className='ml-5 py-2 tracking-wide'>
                <ul className='list-disc space-y-4 text-lg'>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectTitle')}:{' '}
                      </span>
                      <br /> CRM - Website
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectDescription')}:
                    </span>
                    <br />
                    <p>
                      Development of Web Applications and Websites for various
                      clients.
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectStack')}:
                    </span>
                    <br />
                    <p>
                      JavaScript, React, Next.js, Graphql, Apollo Client, Git,
                      React Hooks, Material UI, Postman
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-950 bg-primary-600' />
              <time className='mb-1 font-normal leading-none text-primary-200'>
                {t('experience.experienceDate1')}
              </time>
              <h3 className='text-3xl font-semibold text-primary-950'>
                Software Developer
              </h3>
              <h4 className='font-body text-xl font-normal text-secondary-400'>
                Varias Compañias - Cuenca, Ecuador
              </h4>
              <div className='ml-5 py-2 tracking-wide'>
                <ul className='list-disc space-y-4 text-lg'>
                  <li>
                    <p>
                      <span className='text-primary-200'>
                        {t('experience.projectTitle')}:{' '}
                      </span>
                      <br /> Various clients from the local sector, mostly from
                      the tourism sector
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectDescription')}:
                    </span>
                    <br />
                    <p>
                      Various clients from the local sector, mostly from the
                      tourism sector
                    </p>
                  </li>
                  <li>
                    <span className='text-primary-200'>
                      {t('experience.projectStack')}:
                    </span>
                    <br />
                    <p>
                      HTML5, CSS3, PHP, JavaScript, Jquery, MySQL, WordPress,
                      Custom templates
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
