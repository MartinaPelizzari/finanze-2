{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'finanze-app-v1';\
const ASSETS = [\
  './index.html',\
  './manifest.json',\
  './icon-192.png',\
  './icon-512.png',\
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@400;500;600;700&display=swap',\
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'\
];\
\
self.addEventListener('install', (e) => \{\
  e.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => \{\
      return cache.addAll(ASSETS);\
    \})\
  );\
\});\
\
self.addEventListener('fetch', (e) => \{\
  e.respondWith(\
    caches.match(e.request).then((response) => \{\
      return response || fetch(e.request);\
    \})\
  );\
\});}