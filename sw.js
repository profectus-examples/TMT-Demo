if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/@ivanv.bf09ddfc.js",revision:null},{url:"assets/@pixi.c5050cb0.js",revision:null},{url:"assets/@vue.861e8bf0.js",revision:null},{url:"assets/earcut.17d42416.js",revision:null},{url:"assets/eventemitter3.dc5195d7.js",revision:null},{url:"assets/index.4d68ca01.css",revision:null},{url:"assets/index.c851429a.js",revision:null},{url:"assets/is-plain-object.906d88e8.js",revision:null},{url:"assets/ismobilejs.5c6954b9.js",revision:null},{url:"assets/lz-string.f2f3b7cf.js",revision:null},{url:"assets/nanoevents.1080beb7.js",revision:null},{url:"assets/querystring.776b9ab3.js",revision:null},{url:"assets/sortablejs.bd686609.js",revision:null},{url:"assets/url.b1bd21f4.js",revision:null},{url:"assets/vue-next-select.9e6f4164.css",revision:null},{url:"assets/vue-next-select.aa58f779.js",revision:null},{url:"assets/vue-textarea-autosize.35804eaf.js",revision:null},{url:"assets/vue-toastification.17ba848b.js",revision:null},{url:"assets/vue-toastification.4b5f8ac8.css",revision:null},{url:"assets/vue.67040123.js",revision:null},{url:"assets/vuedraggable.502d3696.js",revision:null},{url:"assets/workbox-window.60401ce8.js",revision:null},{url:"index.html",revision:"b63ed9d61653ea3e4f0b99b4cafe1ce0"},{url:"favicon.ico",revision:"eead31eb5b19fa3bdc34af83d898c0b7"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"26e53bb981d06c8069ffd9d2a14fce0e"},{url:"pwa-192x192.png",revision:"a16785d9e890858c5b508e0ef6954aaf"},{url:"pwa-512x512.png",revision:"b84004b93fd62ef6599ff179372861a1"},{url:"manifest.webmanifest",revision:"324df043058f919e7a1495348320e1ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));