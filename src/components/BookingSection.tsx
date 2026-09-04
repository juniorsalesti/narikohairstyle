import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Calendar, Clock, CheckCircle } from 'lucide-react';
import { IMAGES, BARBERSHOP_INFO, getWhatsAppUrl } from '../data/barbershopData';

export const BookingSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Combo Nariko');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Qualquer horário');

  const servicesQuick = ['Combo Nariko', 'Corte masculino', 'Barba', 'Sobrancelha', 'Química'];
  const periodsQuick = ['Manhã', 'Tarde', 'Noite', 'Qualquer horário'];

  // Formulate the WhatsApp message
  const customMessage =
    selectedService && selectedPeriod !== 'Qualquer horário'
      ? `Olá! Gostaria de agendar um horário na barbearia para ${selectedService} no período da ${selectedPeriod}.`
      : BARBERSHOP_INFO.defaultWhatsappMessage;

  return (
    <section id="agendamento" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background Image: Barber Chair with extreme moody dark treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.chair}
          alt="Cadeira de barbearia profissional"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale contrast-[1.2] brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-300 font-semibold">
              AGENDAMENTO RÁPIDO & PRÁTICO
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.92] tracking-wider mb-6">
            SEU PRÓXIMO CORTE<br />
            <span className="text-neutral-300">COMEÇA AQUI.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mx-auto mb-10">
            Escolha seu horário e venha viver uma experiência diferente.
          </p>

          {/* Quick interactive preferences (service & period) */}
          <div className="bg-[#0B0B0B]/90 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-sm text-left mb-8 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              1. Selecione o serviço de interesse:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {servicesQuick.map((srv) => (
                <button
                  key={srv}
                  onClick={() => setSelectedService(srv)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                    selectedService === srv
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#151515] text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>

            <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              2. Preferência de turno (opcional):
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {periodsQuick.map((prd) => (
                <button
                  key={prd}
                  onClick={() => setSelectedPeriod(prd)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                    selectedPeriod === prd
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#151515] text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  {prd}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-neutral-400 bg-black/50 p-3 rounded-sm border border-white/5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neutral-300 shrink-0" />
              <span>
                Mensagem que será enviada: &quot;{customMessage}&quot;
              </span>
            </div>
          </div>

          {/* Big WhatsApp CTA Button */}
          <a
            id="booking-cta-whatsapp"
            href={getWhatsAppUrl(customMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-12 py-4.5 sm:py-5 rounded-sm text-xs sm:text-base font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-2xl hover:shadow-white/10 group cursor-pointer active:scale-[0.99]"
          >
            <MessageSquare className="w-5 h-5 text-black shrink-0" />
            <span className="text-center">AGENDAR MEU HORÁRIO NO WHATSAPP</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </a>

          <p className="text-[11px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-4">
            Atendimento imediato e confirmação rápida pelo WhatsApp ({BARBERSHOP_INFO.phoneFormatted})
          </p>
        </motion.div>
      </div>
    </section>
  );
};
