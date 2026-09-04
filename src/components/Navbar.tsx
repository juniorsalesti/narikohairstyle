import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, MessageSquare } from 'lucide-react';
import { BARBERSHOP_INFO, getWhatsAppUrl } from '../data/barbershopData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-black md:bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-2 sm:py-3 shadow-2xl'
          : 'bg-black md:bg-gradient-to-b md:from-[#050505]/90 md:via-[#050505]/50 md:to-transparent border-b border-white/10 md:border-b-0 py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="navbar-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center group cursor-pointer py-0.5"
        >
          <img
            src={BARBERSHOP_INFO.logoUrl}
            alt={BARBERSHOP_INFO.name}
            className="h-16 sm:h-16 md:h-15 w-auto max-w-[210px] sm:max-w-[250px] object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors duration-150 font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-300 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            id="navbar-cta-button"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-md hover:shadow-white/10 active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
            Agendar Horário
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-black border-b border-white/10 px-6 py-6 transition-all duration-200 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest text-neutral-300 hover:text-white py-2 border-b border-white/5 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                id="mobile-drawer-cta"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#128C7E] to-[#25D366] hover:brightness-110 transition-all shadow-lg active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-white" />
                Agendar via WhatsApp ({BARBERSHOP_INFO.phoneFormatted})
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
