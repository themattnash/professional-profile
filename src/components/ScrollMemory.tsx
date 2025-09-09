import React from 'react';
import { useLocation } from 'react-router-dom';

// Remembers scroll position across refreshes for the current path
const ScrollMemory: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      // Avoid browser fighting with our manual restore
      history.scrollRestoration = 'manual';
    }

    const storageKey = `scroll:${location.pathname}${location.search}`;

    const restore = () => {
      // If URL has a hash, let the browser handle anchor scrolling
      if (location.hash) return;
      try {
        const raw = sessionStorage.getItem(storageKey);
        if (!raw) return;
        const { x, y } = JSON.parse(raw) as { x: number; y: number };
        // Use rAF to run after paint to reduce layout race conditions
        requestAnimationFrame(() => {
          window.scrollTo(x || 0, y || 0);
        });
      } catch {
        // ignore parse errors
      }
    };

    const save = () => {
      try {
        sessionStorage.setItem(
          storageKey,
          JSON.stringify({ x: window.scrollX, y: window.scrollY })
        );
      } catch {
        // ignore quota errors
      }
    };

    // Restore once on page show (better timing on back/forward and refresh)
    const onPageShow = () => restore();
    window.addEventListener('pageshow', onPageShow);

    // Fallback: attempt restore on mount (first load)
    restore();

    // Persist on page hide and before unload
    window.addEventListener('pagehide', save);
    window.addEventListener('beforeunload', save);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('pagehide', save);
      window.removeEventListener('beforeunload', save);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollMemory;
