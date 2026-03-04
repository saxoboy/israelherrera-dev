import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import { personal } from '@/data/es/personal';
import { experience } from '@/data/es/experience';
import { skillsMastered, skillsLearning } from '@/data/es/skills';
import { projects } from '@/data/es/projects';

export const metadata: Metadata = {
  title: 'Israel Herrera — Desarrollador Full Stack',
  description:
    'Desarrollador Full Stack especializado en React, Next.js y Node.js. Construyendo aplicaciones web modernas con código limpio y excelentes experiencias de usuario.',
  alternates: {
    canonical: 'https://israelherrera.dev/es',
    languages: { en: 'https://israelherrera.dev' },
  },
};

export default function HomePageEs() {
  return (
    <>
      <Navbar lang='es' />
      <main>
        <Hero lang='es' data={personal} />
        <Projects lang='es' data={projects} />
        <Experience lang='es' data={experience} />
        <Skills lang='es' mastered={skillsMastered} learning={skillsLearning} />
      </main>
      <Footer lang='es' />
    </>
  );
}
