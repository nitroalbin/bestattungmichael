
import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  onShowPrivacy: () => void;
  onUpdateConsent: (accepted: boolean) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onShowPrivacy, onUpdateConsent }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    onUpdateConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    onUpdateConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:p-6 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100" role="alert" aria-live="polite">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center text-brand" aria-hidden="true">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.9L9.03 1.903a2.002 2.002 0 011.939 0l6.865 2.997A2.006 2.006 0 0119 6.743v4.92a10 10 0 01-4.148 8.16l-3.322 2.373a2.002 2.002 0 01-2.316 0L5.892 19.823A10 10 0 012 11.662V6.743a2.006 2.006 0 011.166-1.843zM10 5.059L4 7.676v3.986a8 8 0 003.332 6.527L10 19.442l2.668-1.903A8 8 0 0016 11.662V7.676l-6-2.617z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Ihre Privatsphäre ist uns wichtig</h4>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-4xl">
              Wir verwenden Cookies, um die Nutzerfreundlichkeit unserer Website zu verbessern. 
              Durch Klicken auf „Alle akzeptieren“ stimmen Sie der Verwendung von Analyse- und Marketing-Cookies zu. 
              Wählen Sie „Nur Essenziell“, wenn Sie nur technisch notwendige Cookies zulassen möchten. 
              Details finden Sie in unserer{' '}
              <button 
                onClick={onShowPrivacy} 
                className="text-brand font-bold hover:underline"
              >
                Datenschutzerklärung
              </button>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button 
              onClick={handleDecline}
              className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all order-2 sm:order-1"
            >
              Nur Essenziell
            </button>
            <button 
              onClick={handleAccept}
              className="px-10 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl shadow-lg shadow-brand/20 transition-all text-sm whitespace-nowrap order-1 sm:order-2"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
