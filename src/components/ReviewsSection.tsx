import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, ArrowRight, Quote } from 'lucide-react';
import { REVIEWS_DATA, getWhatsAppUrl, BARBERSHOP_INFO } from '../data/barbershopData';

// Authentic Google "G" vector icon
const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = REVIEWS_DATA.length;

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality (slow autoplay 4.8s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextReview();
    }, 4800);
    return () => clearInterval(interval);
  }, [isPaused, nextReview]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      nextReview();
    } else if (isRightSwipe) {
      prevReview();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Indices to render for desktop (previous, current, next)
  const prevIdx = (currentIndex - 1 + total) % total;
  const nextIdx = (currentIndex + 1) % total;

  const getVisibleCards = () => [
    { item: REVIEWS_DATA[prevIdx], position: 'prev', index: prevIdx },
    { item: REVIEWS_DATA[currentIndex], position: 'current', index: currentIndex },
    { item: REVIEWS_DATA[nextIdx], position: 'next', index: nextIdx },
  ];

  const visibleCards = getVisibleCards();

  const ctaMessage = 'Olá! Vi as avaliações e gostaria de agendar um horário.';

  return (
    <section
      id="avaliacoes"
      className="relative py-24 sm:py-32 bg-[#050505] text-white overflow-hidden border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.28em] text-neutral-400 font-semibold block mb-3">
              QUEM CONHECE, RECOMENDA.
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.95] text-white mb-6">
              EXPERIÊNCIAS QUE
              <br />
              <span className="text-neutral-300">FALAM POR SI.</span>
            </h2>
          </motion.div>

          {/* Google 5.0 Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-[#0E0E0E] border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="font-bebas text-2xl tracking-wider text-white font-bold">5,0</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
                  />
                ))}
              </div>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/15" />

            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <span>Avaliações no Google</span>
              <span className="text-neutral-500">•</span>
              <div className="inline-flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Verificadas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel Area */}
        <div
          className="relative max-w-6xl mx-auto mb-12 sm:mb-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons (Desktop & Tablet) */}
          <button
            id="reviews-prev-btn"
            onClick={prevReview}
            aria-label="Avaliação anterior"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#121212]/90 hover:bg-[#1f1f1f] text-white items-center justify-center border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-300" />
          </button>

          <button
            id="reviews-next-btn"
            onClick={nextReview}
            aria-label="Próxima avaliação"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#121212]/90 hover:bg-[#1f1f1f] text-white items-center justify-center border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-neutral-300" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-1 py-4 sm:py-6">
            {/* Desktop View (3 cards simultaneously) */}
            <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch">
              {visibleCards.map(({ item, position, index }) => {
                const isCenter = position === 'current';
                return (
                  <motion.div
                    key={`${item.id}-${position}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`relative rounded-md flex flex-col justify-between transition-all duration-300 group cursor-default ${
                      isCenter
                        ? 'bg-[#121212] border border-amber-400/30 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.85)] -translate-y-1 z-10'
                        : 'bg-[#0D0D0D] border border-white/[0.08] p-7 shadow-lg opacity-85 hover:opacity-100 hover:border-white/20'
                    } hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(0,0,0,0.9)]`}
                  >
                    {/* Subtle Corner Glow on Center Card */}
                    {isCenter && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/[0.08] to-transparent rounded-tr-md pointer-events-none" />
                    )}

                    <div>
                      {/* Top: Stars & Google Icon */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]"
                            />
                          ))}
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                          <GoogleIcon className="w-3.5 h-3.5" />
                          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Google</span>
                        </div>
                      </div>

                      {/* Comment */}
                      <div className="relative mb-6">
                        <Quote className="w-5 h-5 text-white/10 absolute -top-2 -left-1 pointer-events-none" />
                        <p className="text-neutral-200 text-sm sm:text-base leading-relaxed pl-3 font-normal italic">
                          "{item.comment}"
                        </p>
                      </div>
                    </div>

                    {/* Footer: Name & Time */}
                    <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between">
                      <span className="font-semibold text-sm text-white tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {item.timeAgo}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tablet View (2 cards) */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5">
              {[REVIEWS_DATA[currentIndex], REVIEWS_DATA[nextIdx]].map((item, idx) => (
                <div
                  key={`${item.id}-tab-${idx}`}
                  className="bg-[#0D0D0D] border border-white/[0.08] hover:border-white/20 p-7 rounded-md flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]"
                          />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                        <GoogleIcon className="w-3 h-3" />
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Google</span>
                      </div>
                    </div>

                    <p className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">{item.name}</span>
                    <span className="text-xs text-neutral-400">{item.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View (1 card at a time with smooth animation) */}
            <div className="sm:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={REVIEWS_DATA[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0D0D0D] border border-white/[0.1] p-6 rounded-md shadow-xl flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]"
                          />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                        <GoogleIcon className="w-3 h-3" />
                        <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium">Google</span>
                      </div>
                    </div>

                    <p className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                      "{REVIEWS_DATA[currentIndex].comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">
                      {REVIEWS_DATA[currentIndex].name}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {REVIEWS_DATA[currentIndex].timeAgo}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile swipe hint & arrows */}
          <div className="flex sm:hidden items-center justify-between mt-3 px-1">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Deslize para ver mais
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Anterior"
                className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-neutral-300" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Próximo"
                className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white active:scale-95"
              >
                <ChevronRight className="w-4 h-4 text-neutral-300" />
              </button>
            </div>
          </div>

          {/* Pagination Indicators (Dots) */}
          <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
            {REVIEWS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir para avaliação ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? 'w-6 h-1.5 bg-amber-400'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Below Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center pt-4 border-t border-white/[0.08]"
        >
          <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-white mb-6">
            SEU PRÓXIMO VISUAL PODE SER O PRÓXIMO AVALIADO.
          </h3>

          <div className="w-full sm:w-auto inline-block">
            <a
              id="reviews-cta-whatsapp"
              href={getWhatsAppUrl(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-4.5 sm:py-5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-2xl hover:shadow-white/10 group cursor-pointer active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-black shrink-0" />
              <span>AGENDAR MEU HORÁRIO →</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </div>

          <p className="text-[11px] text-neutral-400 uppercase tracking-widest mt-3">
            Agendamento direto pelo WhatsApp: {BARBERSHOP_INFO.phoneFormatted}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
