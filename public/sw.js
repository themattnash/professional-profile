// Simple cache-first strategy for built assets
const CACHE_NAME = 'static-v2';

self.addEventListener('install', (event) => {
  // Activate immediately on new deployment
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clean up old caches and take control
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith('static-') && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
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
      const fetchAndUpdate = fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200 && (resp.type === 'basic' || resp.type === 'cors')) {
            cache.put(req, resp.clone());
          }
          return resp;
        })
        .catch(() => undefined);

      if (cached) {
        // Update in background for next visit
        event.waitUntil(fetchAndUpdate);
        return cached;
      }
      return fetchAndUpdate;
    })
  );
});
