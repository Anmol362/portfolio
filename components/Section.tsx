"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, label, title, children }: Props) => (
  <section id={id} className="scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8"
    >
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          {label}
        </span>
        <div>
          <h2 className="text-3xl font-display font-semibold text-[var(--text)] md:text-4xl">
            {title}
          </h2>
          <div className="mt-3 h-[2px] w-20 rounded-full bg-[var(--accent)]" />
        </div>
      </div>
      {children}
    </motion.div>
  </section>
);

export default Section;
