const staticCacheName = 'FinalProject';
const assets = [
    './POF.html',
    './Funxtions.js',
    './POFStyle.css',
    './Formula1 (2).JPG',
    './Formula 2 (2).JPG',
    './Formula1 3.JPG',
    './Formula1 4.JPG',
    './Formula1 5.JPG',
];
    

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});