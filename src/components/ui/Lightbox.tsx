'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';

interface LightboxProps {
  images: string[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  alt: string;
}

export default function Lightbox({
  images,
  current,
  onClose,
  onPrev,
  onNext,
  alt,
}: LightboxProps) {
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4'
        onClick={onClose}
      >
        {/* Image container */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='relative max-w-5xl w-full max-h-[85vh] aspect-video'
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            fill
            className='object-contain'
            sizes='(max-width: 1280px) 100vw, 1280px'
            priority
          />
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white rounded-full p-1.5 transition-colors z-10'
          aria-label='Close'
        >
          <RiCloseLine size={22} />
        </button>

        {/* Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-lime/20 border border-white/10 hover:border-lime/40 text-white rounded-full p-2 transition-colors z-10'
              aria-label='Previous'
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-lime/20 border border-white/10 hover:border-lime/40 text-white rounded-full p-2 transition-colors z-10'
              aria-label='Next'
            >
              <RiArrowRightSLine size={24} />
            </button>
          </>
        )}

        {/* Dots */}
        {hasMultiple && (
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-lime' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {hasMultiple && (
          <span className='absolute top-4 left-4 font-mono text-xs text-white/50 z-10'>
            {current + 1} / {images.length}
          </span>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
