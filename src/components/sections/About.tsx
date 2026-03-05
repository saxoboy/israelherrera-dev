'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface AboutProps {
  lang: 'en' | 'es';
  data: {
    title: string;
    paragraphs: string[];
  };
  photoSrc?: string;
}

export default function About({ data, photoSrc }: AboutProps) {
  return (
    <section id='about' className='py-24 px-6'>
      <div className='mx-auto max-w-6xl w-full'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          {/* Text column */}
          <div className='w-full lg:w-3/5'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-5xl font-bold text-gradient-lime mb-10'
            >
              {data.title}
            </motion.h2>

            <div className='flex flex-col gap-5'>
              {data.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className='text-base md:text-sm text-muted leading-relaxed'
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full lg:w-2/5 flex justify-center lg:justify-end lg:sticky lg:top-24'
          >
            {photoSrc ? (
              <div className='relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-border glow-lime'>
                <Image
                  src={photoSrc}
                  alt='Israel Herrera'
                  fill
                  className='object-cover object-top'
                  sizes='(max-width: 1024px) 288px, 320px'
                />
              </div>
            ) : (
              <div className='w-72 h-80 lg:w-80 lg:h-96 rounded-2xl border border-border bg-bg-card flex items-center justify-center'>
                <span className='font-mono text-sm text-muted'>
                  Photo coming soon
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
