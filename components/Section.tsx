"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.62,
      ease: smoothEase
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
};

const Section = ({ id, label, title, children }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "end 0.1"]
  });
  const lagY = useTransform(scrollYProgress, [0, 1], [20, -14]);
  const smoothY = useSpring(lagY, {
    stiffness: 90,
    damping: 26,
    mass: 0.34
  });

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      style={{ y: smoothY }}
      className="scroll-mt-28"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={item} className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)] shadow-[var(--shadow-soft)]">
          <span className="h-[6px] w-[6px] rounded-full bg-[var(--accent)]" />
          {label}
        </span>
        <div>
          <h2 className="text-3xl font-display font-semibold text-[var(--text)] md:text-[2.7rem]">
            {title}
          </h2>
          <div className="accent-line mt-3" />
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-8 space-y-6">
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
