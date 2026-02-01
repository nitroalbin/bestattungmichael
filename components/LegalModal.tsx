
import React from 'react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz';
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-serif text-brand font-bold capitalize">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8 prose prose-sm max-w-none text-gray-600">
          {type === 'impressum' ? (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold text-gray-900">Angaben gemäß § 5 TMG</h3>
                <p>
                  Bestattungen Dörr<br />
                  Michael Dörr<br />
                  Mainstraße 16<br />
                  65474 Bischofsheim
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-gray-900">Kontakt</h3>
                <p>
                  Telefon: 06144 970118<br />
                  E-Mail: info@doerrbestattungen.de
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900">Aufsichtsbehörde</h3>
                <p>Ordnungsamt Bischofsheim</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Michael Dörr, Mainstraße 16, 65474 Bischofsheim</p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold text-gray-900">1. Datenschutz auf einen Blick</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-gray-900">2. Datenerfassung auf unserer Website</h3>
                <h4 className="font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Michael Dörr (Kontakt siehe Impressum).</p>
                
                <h4 className="font-bold mt-4">Wie erfassen wir Ihre Daten?</h4>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900">3. Web3Forms Integration</h3>
                <p>Für unsere Kontaktformulare nutzen wir den Dienst Web3Forms. Die von Ihnen eingegebenen Daten werden an die Server von Web3Forms weitergeleitet, um die E-Mail-Zustellung zu ermöglichen. Dies erfolgt auf Grundlage unseres berechtigten Interesses an einer effizienten Kommunikation (Art. 6 Abs. 1 lit. f DSGVO).</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900">4. Ihre Rechte</h3>
                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
