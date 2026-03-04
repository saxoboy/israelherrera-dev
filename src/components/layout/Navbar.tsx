'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

interface NavbarProps {
  lang: 'en' | 'es';
}

const navLinks = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ],
  es: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
  ],
};

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = navLinks[lang];
  const isEs = lang === 'es';
  const langHref = isEs ? '/' : '/es';
  const langLabel = isEs ? 'EN' : 'ES';

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-border bg-[rgba(10,10,10,0.85)] backdrop-blur-md'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link
          href={isEs ? '/es' : '/'}
          className='flex items-center gap-2 group'
        >
          <span className='font-mono text-lime text-lg font-bold group-hover:opacity-80 transition-opacity'>
            {'{/}'}
          </span>
          <span className='font-mono text-sm text-text hidden sm:block'>
            israelherrera.dev
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center gap-8'>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='font-mono text-sm text-muted hover:text-lime transition-colors duration-200'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-4'>
          {/* Language switcher */}
          <Link
            href={langHref}
            className='font-mono text-xs border border-border px-3 py-1.5 rounded-md text-muted hover:border-lime hover:text-lime transition-all duration-200'
          >
            {langLabel}
          </Link>

          {/* CV button - desktop */}
          <a
            href={
              isEs
                ? '/cv/CV-ES-IsraelHerrera-Fullstack-React-TypeScript-Developer.pdf'
                : '/cv/CV-EN-IsraelHerrera-Fullstack-React-TypeScript-Developer.pdf'
            }
            target='_blank'
            rel='noopener noreferrer'
            className='hidden md:flex items-center gap-2 bg-lime text-black font-mono text-xs font-bold px-4 py-2 rounded-md hover:bg-lime-300 transition-colors duration-200'
          >
            {isEs ? 'Descargar CV' : 'Download CV'}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-muted hover:text-lime transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden border-t border-border bg-[rgba(10,10,10,0.95)]'
          >
            <ul className='flex flex-col px-6 py-4 gap-4'>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='font-mono text-sm text-muted hover:text-lime transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={
                    isEs
                      ? '/cv/CV-ES-IsraelHerrera-Fullstack-React-TypeScript-Developer.pdf'
                      : '/cv/CV-EN-IsraelHerrera-Fullstack-React-TypeScript-Developer.pdf'
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-lime text-black font-mono text-xs font-bold px-4 py-2 rounded-md'
                >
                  {isEs ? 'Descargar CV' : 'Download CV'}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
