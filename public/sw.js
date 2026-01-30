const CACHE_NAME = 'anmol-portfolio-v1';

const ASSETS = [
	'/',
	'/manifest.webmanifest',
	'/icons/icon-192.png',
	'/icons/icon-512.png',
	'/icons/icon-180.png',
];

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
			),
		),
	);
	self.clients.claim();
});

async function cacheFirst(request) {
	const cache = await caches.open(CACHE_NAME);
	const cached = await cache.match(request);
	if (cached) return cached;

	const response = await fetch(request);
	cache.put(request, response.clone());
	return response;
}

async function networkFirst(request) {
	const cache = await caches.open(CACHE_NAME);
	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch (error) {
		const cached = await cache.match(request);
		if (cached) return cached;

		if (request.mode === 'navigate') {
			const fallback = await cache.match('/');
			if (fallback) return fallback;
		}

		throw error;
	}
}

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);

	// Always try to keep navigations online first, with offline fallback.
	if (event.request.mode === 'navigate') {
		event.respondWith(networkFirst(event.request));
		return;
	}

	// Cache Next.js static assets and our pre-defined assets.
	if (url.origin === self.location.origin) {
		if (url.pathname.startsWith('/_next/static/')) {
			event.respondWith(cacheFirst(event.request));
			return;
		}

		if (ASSETS.includes(url.pathname)) {
			event.respondWith(cacheFirst(event.request));
			return;
		}
	}

	// Default: try network, fall back to cache.
	event.respondWith(networkFirst(event.request));
});
