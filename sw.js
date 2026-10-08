self.addEventListener('install', (e) => {
  console.log('Service Worker terinstal');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong atau tangani fetch standar
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
