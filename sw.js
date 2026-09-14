// Ein ganz simpler Service Worker, der die Installations-Anforderung erfüllt
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installiert');
});

self.addEventListener('fetch', (e) => {
  // Lädt die Seite einfach normal aus dem Internet
});
