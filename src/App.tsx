import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollMemory from '@/components/ScrollMemory';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <ErrorBoundary>
    <ScrollMemory />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ErrorBoundary>
);

export default App;
