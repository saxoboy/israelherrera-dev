import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AboutMe from '@/components/AboutMe';
import {
  Divider,
  DividerFour,
  DividerThree,
  DividerTwo,
} from '@/components/Divider';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Seo from '@/components/Seo';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Israel Herrera - Javascript Fullstack Developer' />
      <Hero />
      <Divider />
      <Projects />
      <DividerTwo />
      <Experience />
      <DividerThree />
      <Skills />
      <AboutMe />
      <DividerThree />
      <DividerFour />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale ?? 'en', ['common']))),
    },
  };
};
