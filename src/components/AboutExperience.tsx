import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, getWhatsAppUrl } from '../data/barbershopData';

export const AboutExperience: React.FC = () => {
  const highlights = [
    {
      num: '01',
      label: 'PRECISÃO',
      desc: 'Linhas milimétricas e análise da estrutura capilar.',
    },
    {
      num: '02',
      label: 'ESTILO',
      desc: 'Visual alinhado ao seu perfil profissional e pessoal.',
    },
    {
      num: '03',
      label: 'ACABAMENTO',
      desc: 'Toalha quente, navalhete afiado e cosméticos de alto padrão.',
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-neutral-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                EXPERIÊNCIA EXCLUSIVA
              </span>
            </div>

            {/* Section Title */}
            <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white uppercase leading-[0.95] tracking-wide mb-8">
              MAIS QUE UM CORTE.<br />
              <span className="text-neutral-300">UMA EXPERIÊNCIA.</span>
            </h2>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10 max-w-xl">
              Cada detalhe importa. Do primeiro contato ao acabamento final, o objetivo é entregar um visual que combine com você e faça você sair da cadeira se sentindo ainda melhor.
            </p>

            {/* Typographic Highlights (01 — PRECISÃO, 02 — ESTILO, 03 — ACABAMENTO) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/10 mb-10">
              {highlights.map((item) => (
                <div key={item.num} className="flex flex-col">
                  <span className="font-bebas text-xl text-neutral-400 tracking-wider mb-1">
                    {item.num} — {item.label}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick action button */}
            <div>
              <a
                id="about-cta-whatsapp"
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma experiência na barbearia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-neutral-300 transition-colors group cursor-pointer"
              >
                <span>CONHEÇA DE PERTO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border frame */}
              <div className="absolute -inset-2 rounded-sm border border-white/10 opacity-70 pointer-events-none transition-all duration-300 group-hover:border-white/20" />
              
              <div className="relative overflow-hidden rounded-sm bg-[#0B0B0B] border border-white/10 shadow-2xl">
                <img
                  src={IMAGES.craft}
                  alt="Barbeiro profissional trabalhando com tesoura e navalha"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[3/4] object-cover object-center filter grayscale-[25%] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#050505]/90 border border-white/15 backdrop-blur-md rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white font-semibold">
                        Cuidado Artesanal
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        Navalha, toalha quente e precisão
                      </p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-neutral-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
