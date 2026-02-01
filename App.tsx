
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certificate from './components/Certificate';
import Trust from './components/Trust';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [legalModalContent, setLegalModalContent] = useState<'impressum' | 'datenschutz' | null>(null);
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      setHasConsent(true);
      // Here you would initialize scripts like Google Analytics
      console.debug('Initializing analytics with user consent...');
    }
  }, []);

  const handleConsentUpdate = (accepted: boolean) => {
    setHasConsent(accepted);
    if (accepted) {
      localStorage.setItem('cookie-consent', 'accepted');
    } else {
      localStorage.setItem('cookie-consent', 'essential');
    }
  };

  const showPrivacy = () => setLegalModalContent('datenschutz');
  const showImpressum = () => setLegalModalContent('impressum');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow" role="main">
        <Hero />
        <About />
        <Services />
        <Certificate />
        <Trust />
        <Process />
        <Contact onShowPrivacy={showPrivacy} />
      </main>
      <Footer onShowLegal={(type) => setLegalModalContent(type)} />
      
      <CookieBanner onShowPrivacy={showPrivacy} onUpdateConsent={handleConsentUpdate} />
      
      {legalModalContent && (
        <LegalModal 
          type={legalModalContent} 
          onClose={() => setLegalModalContent(null)} 
        />
      )}
    </div>
  );
};

export default App;
