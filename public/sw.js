// Simple cache-first strategy for built assets
const CACHE_NAME = 'static-v1';

self.addEventListener('install', (event) => {
  // Activate immediately on new deployment
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of existing clients
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin built assets under the repo base path
  // Example: /professional-profile/assets/... (GitHub Pages base)
  const base = self.registration.scope.replace(self.origin, '') || '/';
  const isAsset = url.origin === location.origin && url.pathname.startsWith(`${base}assets/`);

  if (!isAsset || req.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      const resp = await fetch(req);
      // Only cache successful, basic (same-origin) responses
      if (resp && resp.status === 200 && resp.type === 'basic') {
        cache.put(req, resp.clone());
      }
      return resp;
    })
  );
});

