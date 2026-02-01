
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Erdbestattungen',
      desc: 'Eine würdevolle Beisetzung im Sarg auf einem Friedhof Ihrer Wahl.',
      icon: 'M20 12H4M12 4v16M8 8l8 8M16 8l-8 8' 
    },
    {
      title: 'Feuerbestattungen',
      desc: 'Die Einäscherung des Verstorbenen mit anschließender Beisetzung der Urne.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Seebestattungen',
      desc: 'Ein letzter Gruß an die Unendlichkeit des Meeres in einer speziellen See-Urne.',
      icon: 'M3 10h18M3 14h18M3 18h18'
    },
    {
      title: 'Rheinbestattungen',
      desc: 'Eine würdevolle Beisetzung im Rhein, begleitet von einer stillen Abschiedszeremonie.',
      icon: 'M3 12h18M3 16h18M3 8h18'
    },
    {
      title: 'Flussbestattungen',
      desc: 'Eine naturnahe Form des Abschieds auf ausgewählten Flüssen und Gewässern.',
      icon: 'M4 9c3 3 5 3 8 0s5-3 8 0M4 15c3 3 5 3 8 0s5-3 8 0'
    },
    {
      title: 'Flugzeugbestattungen',
      desc: 'Eine besondere Abschiedsform aus der Luft – still, würdevoll und individuell begleitet.',
      icon: 'M10.5 6l9 4.5-9 4.5V18l-6-3V9l6-3z'
    },
    {
      title: 'Motorradbestattungen',
      desc: 'Ein persönlicher Abschied für Motorradliebhaber – mit individuell abgestimmter Begleitung.',
      icon: 'M5 16a3 3 0 116 0 3 3 0 01-6 0m8 0a3 3 0 116 0 3 3 0 01-6 0m-5-4h4l2-4h4'
    },
    {
      title: 'Waldbestattungen',
      desc: 'Die Rückkehr zur Natur in der schlichten Schönheit eines zertifizierten Ruhewaldes.',
      icon: 'M12 2L2 7l10 5 10-5-10-5z'
    },
    {
      title: 'Anonyme Bestattungen',
      desc: 'Eine schlichte und diskrete Form der Beisetzung ohne namentliche Kennzeichnung.',
      icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3v1m0 16v1m0-1a8.967 8.967 0 01-6-2.292m12-14.208V4M7.5 14.5L9 13'
    },
    {
      title: 'Bestattungsvorsorge',
      desc: 'Sorgen Sie heute vor, um Ihren Angehörigen morgen schwere Entscheidungen abzunehmen.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Überführungen',
      desc: 'Wir organisieren den pietätvollen Transport des Verstorbenen im In- und Ausland.',
      icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h1m8-1h2l5 5v11h-5'
    },
    {
      title: 'Behördengänge',
      desc: 'Wir übernehmen für Sie die komplette Abwicklung aller notwendigen Formalitäten.',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Ratenzahlung',
      desc: 'Wir bieten Ihnen faire und flexible Finanzierungsmodelle für eine würdevolle Bestattung.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Dienstleistungen</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Unsere Leistungen</h2>
          <div className="w-24 h-1 bg-brand/30 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "Jeder Abschied ist so individuell wie das gelebte Leben. Wir beraten Sie einfühlsam zu allen Möglichkeiten der Beisetzung."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-50/50 p-10 rounded-2xl border border-gray-100 hover:border-brand/20 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-10 py-5 rounded-lg shadow-lg shadow-brand/20 transition-all font-bold text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Persönliche Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
