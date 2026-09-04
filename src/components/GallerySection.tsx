import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppUrl } from '../data/barbershopData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-neutral-500" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              PORTFÓLIO & INSPIRAÇÃO
            </span>
            <span className="w-6 h-[1px] bg-neutral-500" />
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
            SEU ESTILO FALA POR VOCÊ.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal mt-4">
            Fotografia editorial dos nossos cortes, degradês, barbas esculpidas e transformações reais.
          </p>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // Give subtle asymmetric height emphasis to first and third
            const isTall = index === 0 || index === 2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveItem(item)}
                className={`group relative overflow-hidden rounded-sm bg-[#0C0C0C] border border-white/10 cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-2xl ${
                  isTall ? 'md:h-[460px]' : 'md:h-[410px]'
                } h-[380px]`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75" />

                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Floating Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 rounded-sm bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-bebas text-2xl text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#0B0B0B] border border-white/20 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-sm bg-black/70 text-white hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-[340px] md:h-[480px]">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3 block">
                      {activeItem.tag}
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wider mb-3">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                      {activeItem.subtitle}. Conquistado com equipamentos profissionais e técnicas modernas de visagismo.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <a
                      href={getWhatsAppUrl(`Olá! Vi o estilo "${activeItem.title}" na galeria e gostaria de um corte similar.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Quero um visual assim
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
