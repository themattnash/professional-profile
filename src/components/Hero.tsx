import React from 'react';
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/portfolio";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Hero: React.FC = React.memo(() => {
  const { scrollToSection } = useSmoothScroll();

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-8 py-4"
              aria-label="View my work projects"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              aria-label="Get in touch contact form"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;