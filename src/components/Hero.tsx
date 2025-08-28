import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Matt Nash
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-8 opacity-90 animate-fade-in [animation-delay:200ms]">
            Product leader with 15+ years of experience building impactful, scalable solutions in e-commerce, marketplaces, and SaaS. Passionate about using emerging tech and data to solve complex problems.
          </p>
          {/*<p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto opacity-80 animate-fade-in [animation-delay:400ms]">
            Using emerging tech and data to solve complex problems • Turning ideas into products users love • Customer-first mindset driving growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-8 py-4"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Get In Touch
            </Button>
          </div>*/}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;