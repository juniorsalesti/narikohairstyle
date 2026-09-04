import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/barbershopData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#050505] relative overflow-hidden text-center">
      {/* Decorative horizontal accent line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Small text */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-neutral-400 font-semibold mb-6 block">
            CORTE. ESTILO. PRESENÇA.
          </span>

          {/* Giant title */}
          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-white uppercase leading-[0.9] tracking-wider mb-10">
            PRONTO PARA<br />
            <span className="text-neutral-300">MUDAR O VISUAL?</span>
          </h2>

          {/* Button */}
          <div className="w-full sm:w-auto inline-block">
            <a
              id="final-cta-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-4.5 sm:py-5 rounded-sm text-xs sm:text-base font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-2xl hover:shadow-white/10 group cursor-pointer active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-black shrink-0" />
              <span>AGENDAR HORÁRIO NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};
