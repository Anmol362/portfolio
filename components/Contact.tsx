"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6"
  >
    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-2">
        <p className="mono text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Contact
        </p>
        <h3 className="text-xl font-semibold text-[var(--text)]">
          Let&apos;s ship your next interface.
        </h3>
        <p className="max-w-xl text-sm text-[var(--muted)]">
          Interested in freelance opportunities. For other requests or questions,
          drop a message.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="panel rounded-sm px-4 py-3">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Support me
          </p>
          <p className="mt-2 text-sm font-semibold text-[var(--text)]">
            4149500120690030
          </p>
        </div>
        <div className="panel rounded-sm px-4 py-3">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Message me here
          </p>
          <div className="mt-2 space-y-1 text-sm text-[var(--text)]">
            <p>Anmol#1234</p>
            <p className="mono text-[var(--muted)]">hello@anmol.dev</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="mailto:hello@anmol.dev"
          className="mono rounded-sm border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
        >
          Email me
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="mono rounded-sm border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  </motion.div>
);

export default Contact;
