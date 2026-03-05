import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import { personal } from '@/data/en/personal';
import { experience } from '@/data/en/experience';
import { skillCategories } from '@/data/en/skills';
import { projects } from '@/data/en/projects';
import { about } from '@/data/en/about';

export default function HomePage() {
  return (
    <>
      <Navbar lang='en' />
      <main>
        <Hero lang='en' data={personal} />
        <Projects lang='en' data={projects} />
        <Experience lang='en' data={experience} />
        <Skills
          lang='en'
          categories={skillCategories}
          subtitle="what I work with and what I'm learning"
        />
        <About lang='en' data={about} />
      </main>
      <Footer lang='en' />
    </>
  );
}
