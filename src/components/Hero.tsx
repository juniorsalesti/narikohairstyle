import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Scissors, MessageSquare } from 'lucide-react';
import { IMAGES, getWhatsAppUrl } from '../data/barbershopData';

export const Hero: React.FC = () => {
  const indicators = ['CORTE MASCULINO', 'BARBA', 'QUÍMICA', 'ACABAMENTO'];

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#servicos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-24 sm:pt-28 pb-16"
    >
      {/* Background Image with slow, subtle zoom and parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <img
          src={IMAGES.hero}
          alt="Barbearia premium corte masculino"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
        />
      </motion.div>

      {/* Cinematic dark gradients & vignette overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      <div className="absolute inset-0 z-10 bg-grain pointer-events-none opacity-20" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="max-w-3xl">
          {/* Small Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Scissors className="w-3.5 h-3.5 text-neutral-300 transform -rotate-45" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300 font-semibold">
              BARBEARIA • ESTILO • PRECISÃO
            </span>
          </motion.div>

          {/* Main Giant Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.9] tracking-wider mb-6"
          >
            SEU ESTILO<br />
            COMEÇA NO<br />
            <span className="text-neutral-200">CORTE.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl mb-10"
          >
            Cortes, barba e acabamento impecáveis para quem valoriza presença, estilo e personalidade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <a
              id="hero-cta-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-xl hover:shadow-white/10 group cursor-pointer active:scale-[0.99]"
            >
              <MessageSquare className="w-4 h-4 text-black shrink-0" />
              <span>AGENDAR NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </a>

            <a
              id="hero-cta-services"
              href="#servicos"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/50 transition-all duration-200 backdrop-blur-sm cursor-pointer active:scale-[0.99]"
            >
              VER SERVIÇOS
            </a>
          </motion.div>

          {/* Bottom Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-10"
          >
            {indicators.map((indicator, index) => (
              <div key={indicator} className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {indicator}
                </span>
                {index < indicators.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-neutral-600 hidden sm:inline-block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <motion.a
        href="#impact-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-neutral-400 hover:text-white p-2"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
};
