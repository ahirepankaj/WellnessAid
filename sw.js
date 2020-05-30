self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/WellnessAid/',
       '/WellnessAid/index.html',
       '/WellnessAid/index.js',
       '/WellnessAid/css/style.css',
	   '/WellnessAid/css/owl.carousel.min.css',
	   '/WellnessAid/css/bootstrap.min.css',
       '/WellnessAid/img/banner.png',
       '/WellnessAid/img/banner2.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
