import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Coffee, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barbershopData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BARBERSHOP_INFO.address
  )}`;

  // Encode address for Google Maps iframe embed
  const embedMapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    BARBERSHOP_INFO.address
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-neutral-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              LOCALIZAÇÃO PRIVILEGIADA
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
            ONDE ESTAMOS
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal mt-3">
            Local de fácil acesso, preparado para oferecer o máximo conforto em cada visita.
          </p>
        </div>

        {/* Two-column layout: Map + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] rounded-sm overflow-hidden border border-white/10 relative bg-[#111111]"
          >
            <iframe
              title="Mapa de Localização da Barbearia"
              src={embedMapsSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 right-4 sm:right-auto pointer-events-none bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-sm border border-white/10 flex items-center gap-2 max-w-full sm:max-w-md shadow-lg">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-[11px] font-medium tracking-wide text-neutral-200 truncate">
                {BARBERSHOP_INFO.address}
              </span>
            </div>
          </motion.div>

          {/* Info Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#0D0D0D] border border-white/10 p-8 sm:p-10 rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                <MapPin className="w-4 h-4 text-white" />
                <span>Espaço Nariko</span>
              </div>

              <h3 className="font-bebas text-4xl sm:text-5xl text-white uppercase tracking-wider mb-2">
                VENHA NOS VISITAR
              </h3>

              <div className="text-lg text-neutral-200 font-medium mb-6">
                {BARBERSHOP_INFO.address}
              </div>

              {/* Working Hours */}
              <div className="py-5 border-y border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Horários de Atendimento</span>
                </div>
                <div className="space-y-2">
                  {BARBERSHOP_INFO.workingHours.map((wh) => (
                    <div key={wh.days} className="flex justify-between text-xs text-neutral-300">
                      <span className="font-medium text-neutral-400">{wh.days}</span>
                      <span className="font-semibold text-white">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perks */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <Coffee className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Café expresso e bebidas especiais</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Ambiente climatizado & Wi-Fi de alta velocidade</span>
                </div>
              </div>
            </div>

            {/* Open in Google Maps Button */}
            <a
              id="location-cta-maps"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest text-white bg-[#181818] hover:bg-white hover:text-black border border-white/15 hover:border-white transition-all duration-200 group cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>ABRIR NO GOOGLE MAPS →</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
