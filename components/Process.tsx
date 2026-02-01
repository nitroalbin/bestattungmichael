
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Erstkontakt',
      desc: 'Rufen Sie uns an. Wir sind Tag und Nacht für Sie erreichbar und besprechen die sofort nötigen Schritte.'
    },
    {
      num: '02',
      title: 'Beratungsgespräch',
      desc: 'In Ruhe besprechen wir Ihre Wünsche – bei uns im Institut oder gerne auch bei Ihnen zu Hause.'
    },
    {
      num: '03',
      title: 'Organisation',
      desc: 'Wir kümmern uns um alle Behördengänge, Termine mit dem Friedhof und die Gestaltung der Trauerfeier.'
    },
    {
      num: '04',
      title: 'Begleitung',
      desc: 'Am Tag der Beisetzung sind wir diskret an Ihrer Seite und sorgen für einen würdevollen Ablauf.'
    }
  ];

  return (
    <section id="ablauf" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Der Ablauf</span>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Was im Trauerfall zu tun ist</h2>
          <p className="text-gray-600">Keine Sorge, wir nehmen Sie an die Hand. Hier sind die ersten Schritte der Zusammenarbeit.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gray-100 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-white text-center">
              <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg shadow-brand/20">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
