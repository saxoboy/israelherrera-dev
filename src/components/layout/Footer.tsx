import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri';
import { personal } from '@/data/en/personal';

interface FooterProps {
  lang: 'en' | 'es';
}

export default function Footer({ lang }: FooterProps) {
  const isEs = lang === 'es';
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-border bg-[rgba(10,10,10,0.6)]'>
      <div className='mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Left */}
        <div className='flex flex-col items-center md:items-start gap-1'>
          <span className='font-mono text-base md:text-sm text-lime'>
            {'{/}'} israelherrera.dev
          </span>
          <p className='font-mono text-base md:text-sm text-muted'>
            © {year} Israel Herrera E. —{' '}
            {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>

        {/* Availability indicator */}
        <div className='flex items-center gap-2'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75' />
            <span className='relative inline-flex rounded-full h-2 w-2 bg-lime' />
          </span>
          <span className='font-mono text-base md:text-sm text-muted'>
            {isEs ? 'Disponible para proyectos' : 'Available for projects'}
          </span>
        </div>

        {/* Social links */}
        <div className='flex items-center gap-4'>
          <a
            href={personal.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-lime transition-colors'
            aria-label='GitHub'
          >
            <RiGithubLine size={22} />
          </a>
          <a
            href={personal.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-lime transition-colors'
            aria-label='LinkedIn'
          >
            <RiLinkedinBoxLine size={22} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className='text-muted hover:text-lime transition-colors'
            aria-label='Email'
          >
            <RiMailLine size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
