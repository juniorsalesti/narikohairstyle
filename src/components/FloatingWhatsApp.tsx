import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/barbershopData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past hero
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
      {/* Tooltip on desktop */}
      <span className="hidden sm:inline-block bg-[#0D0D0D]/95 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        Agendar via WhatsApp
      </span>

      {/* Button with WhatsApp green branding */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário no WhatsApp"
        className="group relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
      >
        {/* Glowing pulse ring in WhatsApp green */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping pointer-events-none opacity-40 duration-1000" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] opacity-90 group-hover:opacity-100 transition-opacity" />

        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 fill-white/10 drop-shadow-sm" />
      </a>
    </div>
  );
};
