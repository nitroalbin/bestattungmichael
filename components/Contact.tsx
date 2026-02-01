
import React, { useState } from 'react';

interface ContactProps {
  onShowPrivacy: () => void;
}

const Contact: React.FC<ContactProps> = ({ onShowPrivacy }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Kontakt & Erreichbarkeit</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">Wir sind jederzeit für Sie da.</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Ein Todesfall hält sich an keine Geschäftszeiten. Deshalb erreichen Sie uns persönlich – 24 Stunden am Tag, auch an Sonn- und Feiertagen.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Telefon (24h)</h4>
                  <a href="tel:06144970118" className="text-2xl font-serif text-gray-900 hover:text-brand transition-colors font-bold">06144 970118</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Anschrift</h4>
                  <p className="text-xl font-serif text-gray-900 leading-relaxed font-bold">
                    Mainstraße 16<br />
                    65474 Bischofsheim
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 relative">
            {formStatus === 'success' ? (
              <div className="text-center py-16">
                <h3 className="text-3xl font-serif mb-4 text-gray-900">Nachricht versendet</h3>
                <p className="text-gray-500 max-w-xs mx-auto">Vielen Dank für Ihr Vertrauen. Wir melden uns umgehend.</p>
              </div>
            ) : (
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-8 relative z-10"
              >
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Name</label>
                    <input type="text" name="name" required className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-brand outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Telefon</label>
                    <input type="tel" name="phone" required className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-brand outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Anliegen</label>
                    <textarea name="message" rows={4} required className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-brand outline-none resize-none"></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full bg-brand text-white font-bold py-5 rounded-xl shadow-lg">Nachricht senden</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
