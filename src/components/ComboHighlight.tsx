import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, Scissors, MessageSquare } from 'lucide-react';
import { COMBO_NARIKO, getWhatsAppUrl } from '../data/barbershopData';

export const ComboHighlight: React.FC = () => {
  return (
    <section id="precos" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative group rounded-sm bg-gradient-to-b from-[#111111] via-[#090909] to-[#070707] border border-white/15 hover:border-amber-400/40 p-5 sm:p-10 lg:p-16 shadow-2xl transition-all duration-300"
        >
          {/* Subtle accent corner ornament com leve aura dourada */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-amber-500/[0.08] via-amber-400/[0.03] to-transparent pointer-events-none rounded-tr-sm blur-md" />

          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-white">
                {COMBO_NARIKO.smallTitle}
              </span>
            </div>

            {/* O MAIS PEDIDO - Efeito Blur Dourado Chamativo */}
            <div className="relative group/badge inline-flex items-center">
              {/* Blur radiante dourado de fundo com pulso sutil */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500/60 via-yellow-400/80 to-amber-600/60 blur-md opacity-85 group-hover/badge:opacity-100 transition-opacity duration-300 animate-pulse" />
              
              {/* Badge dourado com acabamento metálico e brilho */}
              <div className="relative flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1d160c] via-[#2a2012] to-[#1c150b] border border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.45)] backdrop-blur-md">
                <Scissors className="w-3.5 h-3.5 text-amber-300 transform -rotate-45 drop-shadow-[0_0_6px_rgba(250,204,21,0.9)]" />
                <span className="font-bebas text-xs sm:text-base tracking-[0.22em] bg-gradient-to-r from-yellow-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]">
                  O MAIS PEDIDO
                </span>
                <span className="relative flex h-2 w-2 ml-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300 shadow-[0_0_8px_#fde047]" />
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h3 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider leading-none mb-3">
                {COMBO_NARIKO.title}
              </h3>

              <p className="text-xl sm:text-2xl text-neutral-200 font-bebas tracking-wide mb-4">
                {COMBO_NARIKO.description}
              </p>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8 max-w-md">
                {COMBO_NARIKO.complement}
              </p>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {COMBO_NARIKO.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Price Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-sm bg-[#050505]/80 border border-white/10 text-center relative">
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-2">
                VALOR PROMOCIONAL
              </span>

              <div className="font-bebas text-6xl sm:text-7xl text-white tracking-tight mb-2 leading-none">
                {COMBO_NARIKO.price}
              </div>

              <span className="text-xs text-neutral-400 mb-6 font-normal">
                Economize agendando o combo completo
              </span>

              <a
                id="combo-cta-whatsapp"
                href={getWhatsAppUrl('Olá! Gostaria de agendar o COMBO NARIKO (Corte + Barba + Sombra por R$ 80,00).')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-xl group cursor-pointer active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-black shrink-0" />
                <span>{COMBO_NARIKO.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
