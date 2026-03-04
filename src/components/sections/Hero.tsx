'use client';

import { motion } from 'motion/react';
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiDownloadLine,
} from 'react-icons/ri';
import TerminalCard from '@/components/ui/TerminalCard';
import OrbitalPhoto from '@/components/ui/OrbitalPhoto';
import StatsGrid from '@/components/ui/StatsGrid';

interface HeroProps {
  lang: 'en' | 'es';
  data: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    experience: string;
    email: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    stats: Array<{ label: string; value: string; color: string }>;
    orbitalSkills: string[];
  };
}

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

export default function Hero({ lang, data }: HeroProps) {
  const isEs = lang === 'es';

  return (
    <section className='min-h-screen flex items-center pt-20 pb-16 px-6'>
      <div className='mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* LEFT COLUMN */}
        <motion.div
          variants={stagger.container}
          initial='initial'
          animate='animate'
          className='flex flex-col gap-6'
        >
          <motion.div variants={stagger.item}>
            <TerminalCard
              location={data.location}
              experience={data.experience}
              role={data.role}
              lang={lang}
            />
          </motion.div>

          <div className='flex flex-col gap-3'>
            <motion.h1
              variants={stagger.item}
              className='text-5xl md:text-6xl font-bold text-gradient-lime leading-tight'
            >
              {data.name}
            </motion.h1>

            <motion.p
              variants={stagger.item}
              className='font-mono text-xl text-lime'
            >
              {data.tagline}
            </motion.p>

            <motion.p
              variants={stagger.item}
              className='text-muted leading-relaxed max-w-lg'
            >
              {data.bio}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div variants={stagger.item} className='flex flex-wrap gap-3'>
            <a
              href={`mailto:${data.email}`}
              className='flex items-center gap-2 bg-lime text-black font-mono text-sm font-bold px-5 py-2.5 rounded-md hover:bg-lime-300 transition-colors'
            >
              <RiMailLine size={16} />
              {isEs ? 'Contáctame' : 'Contact me'}
            </a>
            <a
              href={data.cvUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 border border-border-hover text-text font-mono text-sm px-5 py-2.5 rounded-md hover:border-lime hover:text-lime transition-all'
            >
              <RiDownloadLine size={16} />
              {isEs ? 'Descargar CV' : 'Download CV'}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={stagger.item}
            className='flex items-center gap-5'
          >
            <a
              href={data.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted hover:text-lime transition-colors hover:scale-110 transform duration-200'
              aria-label='GitHub'
            >
              <RiGithubLine size={22} />
            </a>
            <a
              href={data.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted hover:text-lime transition-colors hover:scale-110 transform duration-200'
              aria-label='LinkedIn'
            >
              <RiLinkedinBoxLine size={22} />
            </a>
            <a
              href={`mailto:${data.email}`}
              className='text-muted hover:text-lime transition-colors hover:scale-110 transform duration-200'
              aria-label='Email'
            >
              <RiMailLine size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className='flex flex-col items-center gap-8'>
          <OrbitalPhoto
            skills={data.orbitalSkills}
            name={data.name}
            photoSrc='/images/israel-herrera-e.jpeg'
          />
          <StatsGrid stats={data.stats} />
        </div>
      </div>
    </section>
  );
}
