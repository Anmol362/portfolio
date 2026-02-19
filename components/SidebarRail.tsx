"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

const socials = [
  { href: "https://github.com/Anmol362", label: "GitHub", icon: "GH" },
  { href: "https://www.linkedin.com/in/anmol-rahangdale-a3b582195/", label: "LinkedIn", icon: "LN" },
  { href: "mailto:mailtoanmolrahangdale@gmail.com", label: "Email", icon: "EM" }
];

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SidebarRail = () => {
  const { scrollYProgress } = useScroll();
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3
  });

  const dots = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, idx) => (
        <span
          key={idx}
          className="block h-[5px] w-[5px] rounded-full bg-[var(--border)]"
        />
      )),
    []
  );

  return (
    <motion.aside
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: smoothEase }}
      className="fixed left-4 top-28 hidden h-[78vh] w-16 flex-col items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-6 shadow-[var(--shadow-soft)] backdrop-blur md:flex"
    >
      <div className="flex flex-col items-center gap-5">
        <span className="block h-8 w-[1px] bg-[var(--border)]" />
        {socials.map((item, idx) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
          >
            <Link
              href={item.href}
              target="_blank"
              aria-label={item.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:-translate-y-[2px] hover:border-[var(--ring)] hover:text-[var(--accent)]"
            >
              <span className="mono text-[11px]">{item.icon}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="relative mb-1 flex w-full justify-center">
        <div className="absolute bottom-8 h-24 w-[2px] overflow-hidden rounded-full bg-[var(--border)]">
          <motion.span
            style={{ scaleY: railProgress }}
            className="absolute inset-0 origin-bottom rounded-full bg-gradient-to-t from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 px-1">{dots}</div>
    </motion.aside>
  );
};

export default SidebarRail;
