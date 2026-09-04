/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMarquee } from './components/ImpactMarquee';
import { AboutExperience } from './components/AboutExperience';
import { ServicesSection } from './components/ServicesSection';
import { ComboHighlight } from './components/ComboHighlight';
import { GallerySection } from './components/GallerySection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* 1. Header Fixo / Navbar */}
      <Navbar />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* 2. Hero — Impacto Visual */}
        <Hero />

        {/* 3. Barra de Impacto */}
        <ImpactMarquee />

        {/* 4. Seção "Mais que um corte" */}
        <AboutExperience />

        {/* 5. Serviços */}
        <ServicesSection />

        {/* 6. Combo Destaque */}
        <ComboHighlight />

        {/* 7. Galeria / Estilo */}
        <GallerySection />

        {/* 8. Seção de Diferencial */}
        <DifferentialsSection />

        {/* 9. Avaliações dos Clientes */}
        <ReviewsSection />

        {/* 10. Agendamento */}
        <BookingSection />

        {/* 10. Localização */}
        <LocationSection />

        {/* 11. CTA Final */}
        <FinalCta />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

