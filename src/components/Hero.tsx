import React from 'react';
import { heroData } from "@/data/hero";

const Hero: React.FC = React.memo(() => {
  React.useEffect(() => {
    // Preload hero background image to improve LCP
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroData.backgroundImage as unknown as string;
    // @ts-expect-error fetchpriority is not yet in TS lib dom types everywhere
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 gradient-hero opacity-90" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {heroData.name}
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-8 opacity-90 animate-fade-in [animation-delay:200ms]">
            {heroData.title}
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
