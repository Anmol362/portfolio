"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Experience", value: "5+ yrs" },
  { label: "Projects", value: "20+" },
  { label: "Platforms", value: "Web & Native" }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] px-4 pb-16 pt-12 md:px-6"
    >
      <div className="grid-overlay absolute inset-0 opacity-30" />

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.9fr] md:items-center">
        <div className="space-y-5">
          <p className="mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            #home
          </p>
          <h1 className="text-3xl font-semibold leading-[1.2] text-[var(--text)] sm:text-4xl md:text-5xl">
            Anmol is a{" "}
            <span className="text-[var(--accent)]">web designer</span> and{" "}
            <span className="text-[var(--accent)]">front-end developer</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            I craft responsive experiences where technology meets creativity.
            Clean layouts, performant builds, and a dash of motion to keep
            things memorable.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="mono rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              Contact me !!
            </Link>
            <span className="mono flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] text-[var(--muted)]">
              <span className="h-3 w-3 rounded-[3px] bg-[var(--accent)]" />
              Currently working on <span className="font-semibold">Portfolio</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:max-w-md">
            {stats.map((item) => (
              <div
                key={item.label}
                className="panel rounded-sm px-3 py-3 text-sm text-[var(--text)]"
              >
                <div className="mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.label}
                </div>
                <div className="mt-1 text-base font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -left-12 top-10 hidden h-24 w-24 border border-[var(--accent)]/40 md:block" />
          <div className="absolute -right-8 bottom-12 hidden h-24 w-24 border border-[var(--accent)]/40 md:block" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full max-w-[360px] rounded-sm border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <div className="absolute -left-6 top-12 hidden h-16 w-16 border border-[var(--border)] md:block" />
            <div className="absolute -right-10 bottom-10 hidden h-20 w-20 border border-[var(--border)] md:block" />
            <div className="flex h-full items-center justify-center">
              <div className="h-[90%] w-[90%] rounded-sm border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-alt)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
