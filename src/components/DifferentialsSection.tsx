import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/barbershopData';

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-neutral-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              PADRÃO DE QUALIDADE
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
            PRECISÃO EM CADA DETALHE.
          </h2>
        </div>

        {/* 4 Differential Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={diff.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group p-8 rounded-sm bg-[#0B0B0B] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Number */}
                <div className="font-bebas text-4xl sm:text-5xl text-neutral-500 group-hover:text-white transition-colors duration-200 mb-6 tracking-wider">
                  {diff.number}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-wider mb-3">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="w-8 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-white/40 transition-all duration-300 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
