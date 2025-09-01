import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = React.memo(() => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
});

Index.displayName = 'Index';

export default Index;
