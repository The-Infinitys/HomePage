const staticCacheName = 'The-Infinitys-cache'; // 独自のキャッシュ名を設定
const offlineImage = '/image/loading-infinity.svg'; // 代替画像のパス

//when installed
self.addEventListener("install", (e) => {
  console.log("The-Infinitys' [Service Worker] Installed");
});

//when activated
self.addEventListener("install", (e) => {
  console.log("The-Infinitys' [Service Worker] activated");
});

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the network first
      return fetch(event.request.url).then((fetchedResponse) => {
        cache.put(event.request, fetchedResponse.clone());
        return fetchedResponse;
      }).catch(() => {
        // If the network is unavailable, get
        return cache.match(event.request.url);
      });
    }));
  } else {
    return cache.match(offlineImage);
  }
});