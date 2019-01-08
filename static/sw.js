importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0eb63eb637a32f4bffb9.js",
    "revision": "ccc09bd9a99b566e6d665d88fde9e010"
  },
  {
    "url": "/_nuxt/1c966b5cb320d8c32cc9.js",
    "revision": "e8d4b839847c60c21a824f83850073e7"
  },
  {
    "url": "/_nuxt/2d6610f3f696f83bfd09.js",
    "revision": "a2227f1e93fd5cf1a8ea4235f0de8ad9"
  },
  {
    "url": "/_nuxt/411bca48daba1410932c.js",
    "revision": "27e22870f4c017970a4d4947d2f3bcee"
  },
  {
    "url": "/_nuxt/6b898374e4aa9d15eaaf.js",
    "revision": "5d2148922323212827f8e5c8b2b53f5f"
  },
  {
    "url": "/_nuxt/6d6e42010db97441528a.js",
    "revision": "615644f13dc906f3469444dff641e715"
  },
  {
    "url": "/_nuxt/788a58fccb1406441648.js",
    "revision": "441a1f3f2ad09e33a814ebb4d152c4e3"
  },
  {
    "url": "/_nuxt/8f66ad55538af61b297b.js",
    "revision": "34f62fa24f88e8c718c5a63cc95a692d"
  },
  {
    "url": "/_nuxt/ac0fe2da38def945120f.js",
    "revision": "87e19c40bcded4339c3dfa50c84761bf"
  },
  {
    "url": "/_nuxt/b72aff6c5ef665eaa935.js",
    "revision": "182cc9977a7cf69ef2d82d816953735c"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
