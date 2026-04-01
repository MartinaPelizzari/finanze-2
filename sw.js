{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'finanze-cache-v1';\
const urlsToCache = [\
  './',\
  './index.html',\
  './manifest.json',\
  './icon-192.png',\
  './icon-512.png'\
];\
\
// Installa il service worker e salva i file in cache\
self.addEventListener('install', event => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME)\
      .then(cache => \{\
        return cache.addAll(urlsToCache);\
      \})\
  );\
\});\
\
// Usa la cache per caricare l'app offline\
self.addEventListener('fetch', event => \{\
  event.respondWith(\
    caches.match(event.request)\
      .then(response => \{\
        if (response) return response;\
        return fetch(event.request);\
      \})\
  );\
\});}