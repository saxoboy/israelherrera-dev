'use client';

import { motion } from 'motion/react';
import { RiMapPinLine, RiCalendarLine, RiCheckLine } from 'react-icons/ri';

interface TerminalCardProps {
  location: string;
  experience: string;
  role: string;
  lang: 'en' | 'es';
}

export default function TerminalCard({
  location,
  experience,
  role,
  lang,
}: TerminalCardProps) {
  const isEs = lang === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='card-base p-5 w-full max-w-sm'
    >
      {/* Window chrome */}
      <div className='flex items-center gap-2 mb-4'>
        <span className='h-3 w-3 rounded-full bg-red-500 opacity-80' />
        <span className='h-3 w-3 rounded-full bg-yellow-400 opacity-80' />
        <span className='h-3 w-3 rounded-full bg-green-500 opacity-80' />
        <span className='ml-2 font-mono text-sm md:text-xs text-muted'>
          israel-terminal.exe
        </span>
      </div>

      {/* Terminal prompt */}
      <p className='font-mono text-base md:text-sm text-lime mb-3'>
        <span className='text-muted'>israel@dev:~$</span> whoami --verbose
      </p>

      {/* Info lines */}
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center gap-2'>
          <RiMapPinLine className='text-lime shrink-0' size={16} />
          <span className='font-mono text-base md:text-sm text-muted'>
            {location}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <RiCalendarLine className='text-lime shrink-0' size={16} />
          <span className='font-mono text-base md:text-sm text-muted'>
            {isEs
              ? `${experience} de experiencia`
              : `${experience} of experience`}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <RiCheckLine className='text-lime shrink-0' size={16} />
          <span className='font-mono text-base md:text-sm text-lime'>
            {role}
          </span>
        </div>
      </div>

      {/* Cursor */}
      <p className='font-mono text-base md:text-sm text-muted mt-3'>
        <span className='text-lime'>▋</span>
        <span className='cursor-blink'>_</span>
      </p>
    </motion.div>
  );
}
