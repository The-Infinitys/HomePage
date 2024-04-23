/*
==============================================
Thank you for Mozzila!
==============================================
https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
*/

//when installed
self.addEventListener("install", (e) => {
  console.log("The-Infinitys' [Service Worker] Installed");
});

//when activated
self.addEventListener("install", (e) => {
  console.log("The-Infinitys' [Service Worker] activated");
});

//動的キャッシュ
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
