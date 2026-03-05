'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface OrbitalPhotoProps {
  skills: string[];
  photoSrc?: string;
  name: string;
}

// Position 8 badges around a circle
const positions = [
  { top: '2%', left: '50%', transform: 'translateX(-50%)' }, // top center
  { top: '18%', right: '4%' }, // top right
  { top: '50%', right: '-2%', transform: 'translateY(-50%)' }, // right center
  { bottom: '18%', right: '4%' }, // bottom right
  { bottom: '2%', left: '50%', transform: 'translateX(-50%)' }, // bottom center
  { bottom: '18%', left: '4%' }, // bottom left
  { top: '50%', left: '-2%', transform: 'translateY(-50%)' }, // left center
  { top: '18%', left: '4%' }, // top left
];

export default function OrbitalPhoto({
  skills,
  photoSrc,
  name,
}: OrbitalPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='relative w-72 h-72 md:w-80 md:h-80 mx-auto'
    >
      {/* Outer ring */}
      <div className='absolute inset-0 rounded-full border border-lime/20' />
      {/* Middle ring */}
      <div className='absolute inset-4 rounded-full border border-lime/10' />

      {/* Photo */}
      <div className='absolute inset-8 rounded-full overflow-hidden border-2 border-lime/30 bg-bg-card'>
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={name}
            fill
            className='object-cover'
            priority
          />
        ) : (
          // Placeholder with initials
          <div className='w-full h-full flex items-center justify-center bg-[rgba(190,242,100,0.05)]'>
            <span className='font-mono text-3xl font-bold text-gradient-lime'>
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Orbital skill badges */}
      {skills.slice(0, 8).map((skill, i) => (
        <motion.div
          key={`${skill}-${i}`}
          style={positions[i] as React.CSSProperties}
          className='absolute'
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
          transition={{
            duration: 2.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className='font-mono text-[10px] bg-[rgba(10,10,10,0.9)] border border-lime/25 text-lime px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap'>
            {skill}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
