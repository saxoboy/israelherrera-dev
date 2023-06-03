import AboutMe from '@/components/AboutMe';
import Divider from '@/components/Divider';
import DividerTwo from '@/components/DividerTwo';
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
      <AboutMe />
      <Skills />
      <DividerTwo />
      <Projects />
    </>
  );
}
