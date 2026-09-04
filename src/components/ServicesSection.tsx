import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/barbershopData';

type CategoryFilter = 'all' | 'corte-barba' | 'acabamento' | 'quimica';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'corte-barba', label: 'Corte & Barba' },
    { id: 'acabamento', label: 'Acabamento & Estilo' },
    { id: 'quimica', label: 'Química & Cor' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#0B0B0B] relative">
      {/* Background subtle grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-neutral-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                MENU EXCLUSIVO
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
              SERVIÇOS
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-normal mt-3 max-w-lg">
              Tudo o que você precisa para manter seu estilo em dia.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black shadow-md'
                    : 'bg-[#121212] text-neutral-400 hover:text-white hover:bg-[#181818] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group relative bg-[#070707] border border-white/5 hover:border-white/20 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Top Bar: Category Tag & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-400 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
                      {service.categoryLabel}
                    </span>
                    <span className="inline-flex items-center text-[11px] text-neutral-400 font-medium">
                      <Clock className="w-3 h-3 mr-1 text-neutral-500" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <span className="font-bebas text-2xl sm:text-3xl text-neutral-100 font-normal">
                      {service.price}
                    </span>
                    {service.isStartingPrice && (
                      <span className="text-[11px] text-neutral-400 uppercase tracking-widest ml-1.5 font-sans">
                        (valor inicial)
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <a
                    id={`service-schedule-${service.id}`}
                    href={getWhatsAppUrl(`Olá! Gostaria de agendar o serviço de ${service.name} na barbearia.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs uppercase tracking-widest text-neutral-300 group-hover:text-white font-semibold transition-colors"
                  >
                    <span>Agendar este serviço</span>
                    <div className="w-7 h-7 rounded-sm bg-white/5 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-200">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
