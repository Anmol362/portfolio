"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const contactItems = [
  { label: "Email", value: "mailtoanmolrahangdale@gmail.com" },
  { label: "Availability", value: "Freelance + contract projects" },
  { label: "Primary stack", value: "React, Next.js, React Native" }
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, ease: smoothEase }}
      className="panel relative overflow-hidden rounded-[26px] p-6 md:p-8"
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.24),transparent_64%)]" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <p className="mono text-xs uppercase tracking-[0.34em] text-[var(--muted)]">
            Contact
          </p>
          <h3 className="max-w-2xl text-2xl font-semibold text-[var(--text)] md:text-3xl">
            Looking for a frontend engineer who can ship clean UI fast?
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
            I partner with founders and product teams on web apps, design
            systems, and React Native products where performance and polish both
            matter.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:w-[43%]">
          {contactItems.map((item) => (
            <div key={item.label} className="panel-alt rounded-2xl px-4 py-3">
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                {item.value}
              </p>
            </div>
          ))}
          <div className="panel-alt rounded-2xl px-4 py-3">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Reach me
            </p>
            <Link
              href="mailto:mailtoanmolrahangdale@gmail.com"
              target="_blank"
              className="link-underline mt-2 block text-sm font-semibold text-[var(--text)]"
            >
              Send an email
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
        <Link
          href="mailto:mailtoanmolrahangdale@gmail.com"
          target="_blank"
          className="mono rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
        >
          Email
        </Link>
        <Link
          href="https://www.linkedin.com/in/anmol-rahangdale-a3b582195/"
          className="mono rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/Anmol362"
          className="mono rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
