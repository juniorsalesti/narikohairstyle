import React from 'react';
import { motion } from 'motion/react';
import { IMPACT_WORDS } from '../data/barbershopData';

export const ImpactMarquee: React.FC = () => {
  // Repeating the array multiple times to guarantee an unbroken infinite loop
  const repeatedWords = [...IMPACT_WORDS, ...IMPACT_WORDS, ...IMPACT_WORDS, ...IMPACT_WORDS];

  return (
    <div
      id="impact-bar"
      className="w-full bg-[#080808] border-y border-white/10 py-4 overflow-hidden relative select-none"
    >
      {/* Subtle edge fades for infinite editorial feel */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
      >
        {repeatedWords.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center">
            <span className="font-bebas text-lg sm:text-xl md:text-2xl uppercase tracking-[0.3em] text-neutral-300 font-medium px-4 sm:px-6">
              {word}
            </span>
            <span className="text-neutral-600 text-xs sm:text-sm select-none">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
