
import React from 'react';

const Certificate: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="zertifikat" className="py-24 bg-gray-50 border-y border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-4 bg-brand/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                <img 
                  src={`${baseUrl}images/zerti.webp`} 
                  alt="Zertifikat Geprüfter Bestatter - Bestattungen Dörr" 
                  className="w-full h-auto rounded-lg shadow-inner"
                  loading="lazy"
                />
                <div className="absolute top-8 right-8 w-20 h-20 bg-brand/90 backdrop-blur rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg transform rotate-12">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Qualität & Vertrauen</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">Zertifizierte <span className="text-brand">Professionalität</span></h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Als qualifizierter Fachbetrieb legen wir höchsten Wert auf die Einhaltung ethischer Standards und fachlicher Kompetenz. Unser Zertifikat ist kein bloßes Dokument, sondern ein Versprechen an Sie.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Die regelmäßige Weiterbildung und Zertifizierung garantiert Ihnen, dass wir alle rechtlichen, hygienischen und handwerklichen Anforderungen der modernen Bestattungskultur auf höchstem Niveau erfüllen.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-bold text-gray-700 text-sm">Fachgeprüfter Bestatter</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-bold text-gray-700 text-sm">Ethische Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
