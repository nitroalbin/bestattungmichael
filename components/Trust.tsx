
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-brand text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 -mr-20 -mt-20">
        <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-serif mb-8 leading-tight">Warum Familien uns seit Jahrzehnten ihr Vertrauen schenken.</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">1996</p>
                <p className="text-brand-light font-medium uppercase text-xs tracking-widest">Gegründet</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-brand-light font-medium uppercase text-xs tracking-widest">Transparenz</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-brand-light font-medium uppercase text-xs tracking-widest">Erreichbar</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">Bischofsheim</p>
                <p className="text-brand-light font-medium uppercase text-xs tracking-widest">Zuhause</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white/10 backdrop-blur p-10 rounded-3xl border border-white/20">
            <blockquote className="text-xl italic mb-6">
              "In den schwersten Stunden braucht es jemanden, der Ruhe bewahrt, die Hand reicht und die nötigen Wege zuverlässig geht. Das ist unser Versprechen an Sie."
            </blockquote>
            <p className="font-bold">— Michael Dörr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
