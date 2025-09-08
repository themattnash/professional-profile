import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Debug helpers (safe in prod)
if (typeof window !== 'undefined') {
  window.addEventListener('error', (e) => {
    console.error('GlobalError:', e.error || e.message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    console.error('UnhandledRejection:', e.reason)
  })
}


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/professional-profile">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Register a simple service worker to cache static assets for repeat visits
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch((err) => {
      console.error('SW registration failed:', err);
    });
  });
}
