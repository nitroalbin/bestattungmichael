
import React from 'react';

const TeamImage: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <img 
            src={`${baseUrl}images/fraumann.jpeg`} 
            alt="Michael und Sina Dörr - Ihre Ansprechpartner bei Bestattungen Dörr" 
            className="w-full rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamImage;
