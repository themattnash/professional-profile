import React from 'react';
import Hero from "@/components/Hero";
import LazyLoad from '@/components/LazyLoad';
import Footer from "@/components/Footer";

const Index: React.FC = React.memo(() => {
  return (
    <main className="min-h-screen">
      <Hero />
      <LazyLoad loader={() => import('@/components/About')} />
      <LazyLoad loader={() => import('@/components/Skills')} />
      <LazyLoad loader={() => import('@/components/Experience')} />
      <LazyLoad loader={() => import('@/components/Education')} />
      <LazyLoad loader={() => import('@/components/Contact')} />
      <Footer />
    </main>
  );
});

Index.displayName = 'Index';

export default Index;
