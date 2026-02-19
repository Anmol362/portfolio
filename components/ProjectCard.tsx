"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  badge?: string;
};

type Props = {
  project: Project;
  index: number;
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.52, ease: smoothEase, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="panel group relative overflow-hidden rounded-3xl"
    >
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/3 rounded-full bg-[var(--accent)] opacity-25 blur-3xl transition duration-300 group-hover:bg-[var(--accent-2)] group-hover:opacity-30" />
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent" />

      <div className="relative h-36 w-full overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(125deg,rgba(255,122,26,0.22),rgba(255,196,61,0.12),rgba(34,211,238,0.12))]">
        <div className="grid-overlay absolute inset-0 opacity-20" />
        <span className="mono absolute right-4 top-4 text-[11px] tracking-[0.16em] text-[var(--muted)]">
          0{index + 1}
        </span>
        {project.badge ? (
          <span className="mono absolute left-4 top-4 rounded-full border border-[var(--ring)] bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] backdrop-blur">
            {project.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 px-5 py-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-[var(--text)]">
            {project.title}
          </h3>
          {project.link ? (
            <Link
              target="_blank"
              href={project.link}
              className="mono rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
            >
              Visit
            </Link>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          {project.stack.map((item) => (
            <span
              key={item}
              className="pill mono rounded-full px-3 py-1 text-[11px] text-[var(--text)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
