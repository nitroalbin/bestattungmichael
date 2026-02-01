
import React from 'react';

const Hero: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={`${baseUrl}images/hero.webp`} 
          alt="Ruhige See- und Gebirgslandschaft zur Dämmerung" 
          className="w-full h-full object-cover animate-slow-zoom brightness-95 grayscale-[0.1]"
          fetchpriority="high"
        />
        {/* Modern Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-5 py-2 rounded-full shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" aria-hidden="true"></span>
            <span className="text-brand font-bold text-xs uppercase tracking-[0.2em]">Seit 1996 – Inhabergeführt in Bischofsheim</span>
          </div>
          
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-6">
            Bestattungen <br />
            <span className="text-brand">Michael Dörr</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-serif text-gray-700 italic mb-8 max-w-xl">
            "Raum für Abschied, <br className="hidden sm:block" /> Zeit für Trauer."
          </p>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-lg">
            Seit über 30 Jahren begleiten wir Familien in Bischofsheim und der Mainspitze. Wir sind Ihr verlässlicher Anker, wenn Worte fehlen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:06144970118" 
              className="flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white px-10 py-5 rounded-lg shadow-xl shadow-brand/20 transition-all transform hover:-translate-y-1 font-bold text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Tag & Nacht erreichbar
            </a>
            <a 
              href="#kontakt" 
              className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-lg shadow-lg border border-gray-100 transition-all transform hover:-translate-y-1 font-bold text-lg"
            >
              Beratung anfordern
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
