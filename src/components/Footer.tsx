import React from 'react';
import { Scissors, Instagram, MessageSquare, ArrowUp } from 'lucide-react';
import { BARBERSHOP_INFO, getWhatsAppUrl } from '../data/barbershopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Logo & Slogan */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm border border-white/20 bg-white/5 flex items-center justify-center text-white">
                <Scissors className="w-4 h-4 transform -rotate-45" />
              </div>
              <span className="font-bebas text-3xl tracking-widest text-white">
                {BARBERSHOP_INFO.name}
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6 font-medium">
              Corte masculino • Barba • Sobrancelha • Química
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Espaço dedicado ao homem contemporâneo que preza por visual impecável, conforto e excelência técnica.
            </p>
          </div>

          {/* Address, Phone & Hours */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-white font-semibold mb-3">
              ENDEREÇO
            </span>
            <p className="text-sm text-neutral-300 mb-4 font-normal">
              {BARBERSHOP_INFO.address}
            </p>

            <span className="text-xs uppercase tracking-widest text-white font-semibold mb-1">
              WHATSAPP & CONTATO
            </span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold mb-4 transition-colors inline-block"
            >
              {BARBERSHOP_INFO.phoneFormatted}
            </a>

            <span className="text-xs uppercase tracking-widest text-white font-semibold mb-2">
              ATENDIMENTO
            </span>
            <p className="text-xs text-neutral-400">
              Segunda a Sexta: 09:00 às 20:00<br />
              Sábado: 08:30 às 19:30
            </p>
          </div>

          {/* Direct CTA & Socials */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-white font-semibold mb-3 block">
                Agende seu horário pelo WhatsApp
              </span>
              <a
                id="footer-whatsapp-cta"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors duration-200 mb-6"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Iniciar Conversa
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                id="footer-social-instagram"
                href={BARBERSHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Barbearia"
                className="w-9 h-9 rounded-sm bg-[#111111] border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="footer-social-whatsapp"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Barbearia"
                className="w-9 h-9 rounded-sm bg-[#111111] border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo da página"
                className="w-9 h-9 rounded-sm bg-[#111111] border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-colors ml-auto cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 {BARBERSHOP_INFO.name}. Todos os direitos reservados.</p>
          <p className="tracking-widest uppercase text-[10px]">
            Design & Excelência Editorial
          </p>
        </div>
      </div>
    </footer>
  );
};
