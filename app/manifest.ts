import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Anmol Portfolio',
		short_name: 'Anmol',
		description:
			'Portfolio site for Anmol Rahangdale, React & React Native Developer, highlighting projects and contact links.',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#1d2029',
		theme_color: '#1d2029',
		icons: [
			{
				src: '/icons/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icons/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
