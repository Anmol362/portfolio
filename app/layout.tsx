import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import PageTransition from '@/components/PageTransition';
import FloatingObjects from '@/components/FloatingObjects';
import SpaceBackdrop from '@/components/SpaceBackdrop';

export const metadata: Metadata = {
	title: 'Anmol | React & React Native Developer',
	description:
		'Portfolio site for Anmol, a frontend engineer specializing in React and React Native, passionate about crafting intuitive interfaces, writing maintainable code, and building fast, user-centric digital experiences.',
	applicationName: 'Anmol Portfolio',
	keywords: [
		'Anmol Rahangdale',
		'Anmol Portfolio',
		'Anmol React Developer',
		'Anmol React Native Developer',
		'Frontend Developer',
		'Front-end Developer',
		'UI Developer',
		'JavaScript Developer',
		'TypeScript Developer',
		'Next.js Developer',
		'Web Developer',
		'Mobile App Developer',
		'Cross Platform Developer',
		'React JS Developer',
		'React Native Engineer',
		'Frontend Engineer',
		'Software Developer',
		'Portfolio Website',
		'Personal Portfolio',
		'India React Developer',
		'Freelance React Developer',
		'Hire React Developer',
		'Hire React Native Developer',
		'Hire Frontend Developer',
		'Web Application Developer',
		'Mobile Application Developer',
		'UI/UX Developer',
	],
	authors: [{ name: 'Anmol' }],
	robots: 'index, follow',
	themeColor: '#030712',
	manifest: '/manifest.webmanifest',
	icons: {
		icon: [
			{ url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
		],
		apple: [{ url: '/icons/icon-180.png', sizes: '180x180', type: 'image/png' }],
	},
	alternates: {
		canonical: 'https://anmolrahangdale.netlify.app',
	},
	openGraph: {
		title: 'Anmol | React & React Native Developer',
		description:
			'Portfolio site for Anmol, a frontend engineer specializing in React and React Native, passionate about crafting intuitive interfaces, writing maintainable code, and building fast, user-centric digital experiences.',
		url: 'https://anmolrahangdale.netlify.app',
		siteName: 'Anmol Portfolio',
		images: [
			{
				url: 'https://anmolrahangdale.netlify.app/preview.png',
				width: 1200,
				height: 630,
				alt: 'Anmol Portfolio Preview',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Anmol | React Developer',
		description:
			'Portfolio site for Anmol, a frontend engineer specializing in React and React Native, passionate about crafting intuitive interfaces, writing maintainable code, and building fast, user-centric digital experiences.',
		images: ['https://anmolrahangdale.netlify.app/preview.png'],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='antialiased text-[var(--text)]'>
				{/* JSON-LD Schema */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							'name': 'Anmol',
							'url': 'https://anmolrahangdale.netlify.app',
							'jobTitle': 'React & React Native Developer',
							'sameAs': ['https://github.com/anmolrahangdale', 'https://www.linkedin.com/in/anmolrahangdale'],
						}),
					}}
				/>

				<ThemeProvider>
					<ServiceWorkerRegister />
					<div className='relative overflow-hidden'>
						<SpaceBackdrop />
						<FloatingObjects />
						<div className='relative z-10'>
							<PageTransition>{children}</PageTransition>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
