import { registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { skipWaiting } from "workbox-core";

skipWaiting();

registerRoute(
    ({ request }) => request.destination === "script" || request.destination === 'style',
    new StaleWhileRevalidate({
        cacheName: 'static-cache'
    })
)

registerRoute(
    ({ request }) => request.destination === "document",
    new NetworkFirst({
        cacheName: 'html-cache'
    })
)

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);
