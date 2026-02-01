
import React from 'react';

const About: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="ueber-uns" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={`${baseUrl}images/uberuns.webp`} 
              alt="Das Bestattungsinstitut Dörr in Bischofsheim - Seit 1996 inhabergeführt" 
              className="rounded-2xl shadow-2xl grayscale-[0.2]"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand p-8 text-white rounded-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold">30+</p>
              <p className="text-sm uppercase tracking-widest">Jahre Erfahrung</p>
            </div>
          </div>
          
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Über uns</span>
            <h2 className="text-4xl font-serif mb-6 text-gray-900 leading-tight">Tradition und Moderne in Bischofsheim und der Mainspitze.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bestattungen Dörr wurde 1996 gegründet und ist heute das älteste spezialisierte Bestattungsinstitut in Bischofsheim. Der Betrieb wurde über viele Jahre von den Eltern geführt und wird nun von Sohn Michael Dörr gemeinsam mit seiner Frau Sina Dörr weitergeführt. Unsere Arbeit ist geprägt von tiefem Respekt vor dem Leben und den Verstorbenen.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Als inhabergeführtes Unternehmen legen wir Wert auf die persönliche Betreuung. Michael und Sina Dörr begleiten Sie einfühlsam durch alle Schritte der Bestattung und Vorsorge.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-brand mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Regional verwurzelt</h4>
                  <p className="text-sm text-gray-500">Beste Kenntnisse der lokalen Friedhöfe und Bräuche.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-brand mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Persönliche Begleitung</h4>
                  <p className="text-sm text-gray-500">Michael und Sina Dörr sind Ihre direkten Ansprechpartner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
