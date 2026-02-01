
import React from 'react';

interface FooterProps {
  onShowLegal: (type: 'impressum' | 'datenschutz') => void;
}

const Footer: React.FC<FooterProps> = ({ onShowLegal }) => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <footer className="bg-brand text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={`${baseUrl}images/logo.webp`}
                alt="Bestattungen Dörr Logo"
                className="w-12 h-12 object-contain rounded-full bg-white/95 p-1.5 shadow-lg ring-1 ring-white/40"
                loading="lazy"
              />
              <h3 className="text-2xl font-serif text-white">Bestattungen Dörr</h3>
            </div>
            <p className="max-w-md leading-relaxed text-brand-light/90">
              Ihr vertrauensvoller Partner in Bischofsheim. Wir begleiten Sie mit Herz und Verstand durch die Zeit des Abschieds. Seit 1996 inhabergeführt durch Michael Dörr.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Menü</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#ueber-uns" className="hover:text-brand-light transition-colors">Über uns</a></li>
              <li><a href="#leistungen" className="hover:text-brand-light transition-colors">Leistungen</a></li>
              <li><a href="#zertifikat" className="hover:text-brand-light transition-colors">Zertifikat</a></li>
              <li><a href="#ablauf" className="hover:text-brand-light transition-colors">Ablauf</a></li>
              <li><a href="#kontakt" className="hover:text-brand-light transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Rechtliches</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onShowLegal('impressum')} className="hover:text-brand-light transition-colors text-left">Impressum</button></li>
              <li><button onClick={() => onShowLegal('datenschutz')} className="hover:text-brand-light transition-colors text-left">Datenschutzerklärung</button></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-80">
          <p>&copy; {new Date().getFullYear()} Bestattungen Michael Dörr. Alle Rechte vorbehalten.</p>
          <p className="mt-4 md:mt-0 italic">Tradition & Vertrauen in Bischofsheim</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
