
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const navItems = [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Zertifikat', href: '#zertifikat' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="fixed w-full z-50 bg-transparent" role="banner">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-900 hover:text-brand transition-colors font-medium text-xs uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="tel:06144970118" 
            className="text-gray-900 font-bold text-sm border-l pl-6 lg:pl-8 border-black/20"
            aria-label="Telefonnummer anrufen"
          >
            Tel: 06144 970118
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <a href="#" className="flex items-center group ml-auto" aria-label="Zur Startseite">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-lg opacity-70 group-hover:opacity-100 transition"></div>
            <img
              src={`${baseUrl}images/logo.webp`}
              alt="Bestattungen Dörr Logo"
              className="relative w-12 h-12 md:w-14 md:h-14 object-contain rounded-full bg-white p-1.5 shadow-md ring-1 ring-gray-200"
              loading="eager"
            />
          </div>
        </a>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/40 absolute w-full shadow-lg p-4 max-h-[90vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-gray-700 font-medium py-2 text-lg border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="tel:06144970118" 
              className="bg-brand text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-brand/20 mt-4"
            >
              Jetzt anrufen: 06144 970118
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
