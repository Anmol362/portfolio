'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const stats = [
	{ label: 'Experience', value: '5+ yrs', hint: 'Product-focused frontend delivery' },
	{ label: 'Projects', value: '3 live', hint: 'Active production projects in portfolio' },
	{ label: 'Platforms', value: 'Web & Native', hint: 'Consistent UX across devices' },
];

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const floatItems = [
	{
		label: 'React Native',
		position: 'left-[-2.4rem] top-[18%]',
		delay: 0,
		duration: 7.2,
		bg: 'bg-[var(--surface)]'
	},
	{
		label: 'Next.js',
		position: 'right-[-2.6rem] top-[22%]',
		delay: 0.8,
		duration: 8.4,
		bg: 'bg-[var(--surface-alt)]'
	},
	{
		label: 'TypeScript',
		position: 'right-[-2.2rem] bottom-[14%]',
		delay: 0.5,
		duration: 7.8,
		bg: 'bg-[var(--surface)]'
	}
];

const Hero = () => {
	const heroRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const contentY = useTransform(scrollYProgress, [0, 1], [0, 58]);
	const artY = useTransform(scrollYProgress, [0, 1], [0, 94]);
	const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.46, 0.12]);
	const objectY = useTransform(scrollYProgress, [0, 1], [0, -35]);
	const backObjectY = useTransform(scrollYProgress, [0, 1], [0, -40]);

	return (
		<section
			ref={heroRef}
			id='home'
			className='relative overflow-hidden border-b border-[var(--border)] px-4 pb-16 pt-14 md:px-6 md:pt-20'
		>
			<div className='grid-overlay absolute inset-0 opacity-40' />
			<motion.div
				aria-hidden
				style={{ opacity: glowOpacity }}
				className='ambient-orb left-[8%] top-[10%] h-72 w-72 bg-[var(--accent)] opacity-30'
			/>

			<div className='mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.14fr_0.86fr] md:items-center'>
				<motion.div
					style={{ y: contentY }}
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.62, ease: smoothEase }}
					className='space-y-6'
				>
					<p className='mono text-xs uppercase tracking-[0.26em] text-[var(--muted)]'>#home</p>
					<h1 className='text-4xl font-semibold leading-[1.1] text-[var(--text)] sm:text-5xl md:text-6xl'>
						Designing polished
						<span className='bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent'>
							{' '}
							digital products{' '}
						</span>
						with frontend precision.
					</h1>
					<p className='max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base'>
						I build responsive web and React Native interfaces with clear architecture, strong UX, and motion that
						feels intentional instead of decorative.
					</p>
					<div className='flex flex-wrap items-center gap-3 pt-1'>
						<Link
							href='#contact'
							className='mono rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]'
						>
							Start a project
						</Link>
						<Link
							href='#projects'
							className='mono rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] shadow-[var(--shadow-soft)] transition hover:border-[var(--ring)] hover:text-[var(--text)]'
						>
							View projects
						</Link>
						<span className='mono flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] text-[var(--muted)] shadow-[var(--shadow-soft)]'>
							<span className='h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(255,122,26,0.18)]' />
							Available for freelance work
						</span>
					</div>
					<div className='grid gap-3 sm:max-w-2xl sm:grid-cols-3'>
						{stats.map(item => (
							<div
								key={item.label}
								className='panel rounded-2xl px-4 py-4 text-sm text-[var(--text)] transition hover:-translate-y-[2px] hover:border-[var(--ring)]'
							>
								<div className='mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]'>{item.label}</div>
								<div className='mt-2 text-lg font-semibold'>{item.value}</div>
								<p className='mt-1 text-xs text-[var(--muted)]'>{item.hint}</p>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div style={{ y: artY }} className='relative flex justify-center'>
					<motion.div
						aria-hidden
						style={{ y: backObjectY }}
						animate={{ x: [-10, 18, -10], scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
						transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
						className='absolute bottom-6 left-4 z-0 h-40 w-40 rounded-[34%] bg-[conic-gradient(at_28%_32%,var(--accent),var(--accent-2),var(--accent-3),var(--accent))] opacity-35 blur-2xl'
					/>

					<motion.div
						aria-hidden
						animate={{ rotate: 360 }}
						transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
						className='absolute -left-12 top-9 hidden h-28 w-28 rounded-full border border-[var(--ring)] opacity-80 md:block'
					/>
					<div className='absolute -right-10 bottom-8 hidden h-24 w-24 rounded-2xl border border-[var(--ring)] opacity-70 md:block' />

					<motion.div
						initial={{ opacity: 0, y: 24, rotate: -2 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.72, ease: smoothEase, delay: 0.1 }}
						whileHover={{ rotate: 0, y: -8 }}
						className='panel relative z-10 aspect-[4/5] w-full max-w-[390px] rounded-[28px] p-5'
					>
						{floatItems.map(item => (
							<motion.span
								key={item.label}
								style={{ y: objectY }}
								animate={{ y: [0, -9, 0], x: [0, 3, 0] }}
								transition={{
									duration: item.duration,
									delay: item.delay,
									ease: 'easeInOut',
									repeat: Infinity
								}}
								className={`absolute z-20 hidden rounded-full border border-[var(--ring)] ${item.position} ${item.bg} px-3 py-1 text-[10px] text-[var(--text)] shadow-[var(--shadow-soft)] backdrop-blur md:block`}
							>
								{item.label}
							</motion.span>
						))}
						<div className='glass-border absolute -left-8 top-14 hidden h-16 w-16 rounded-xl md:block' />
						<div className='glass-border absolute -right-9 bottom-12 hidden h-20 w-20 rounded-2xl md:block' />
						<motion.span
							aria-hidden
							animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.95, 0.45] }}
							transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
							className='absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(249,115,22,0.12)]'
						/>
						<motion.span
							aria-hidden
							animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
							transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
							className='absolute bottom-10 left-9 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]'
						/>
						<div className='flex h-full items-center justify-center'>
							<div className='relative h-full w-full overflow-hidden rounded-[22px] border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface-alt)] to-transparent'>
								<div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
								<Image
									src='/Anmol.jpg'
									alt='Anmol Rahangdale Full Stack Developer'
									fill
									priority
									sizes='(max-width: 768px) 85vw, 360px'
									className='object-cover object-center'
								/>
								<div className='absolute bottom-4 left-4 rounded-full border border-[var(--ring)] bg-[var(--surface)] px-3 py-1 text-[11px] text-[var(--text)] backdrop-blur'>
									Frontend Engineer
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
