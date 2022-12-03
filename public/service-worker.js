console.log("service worker is  running")
const cacheName="app-v2"
const fileCache =['/','/index.html','/manifest.json']

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache)=>cache.addAll(fileCache))
    )
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        (async ()=>{
            const resource =await caches.match(event.request)
            if(resource){
                return resource
            }
            const response = await fetch(event.request)
            const cache = await caches.open(cacheName);
            cache.put(event.request, response.clone());
            return response
        })(),
    )
})
self.addEventListener('activate', async(event)=>{
    const keys =await caches.keys()
    await Promise.all(
        keys.map((key)=>{
            if(keys !== cacheName){
                return caches.delete(key);
            }
        })
    )
    clients.claim()
})