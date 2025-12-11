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

const ProjectCard = ({ project, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
    className="group relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)]"
  >
    <div className="relative h-full overflow-hidden bg-[var(--surface)]">
      <div className="h-36 w-full bg-[var(--surface-alt)]" />

      <div className="flex items-start justify-between gap-3 border-t border-[var(--border)] px-4 py-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text)]">
            {project.title}
          </h3>
          <p className="mono text-xs text-[var(--muted)]">{project.description}</p>
        </div>
        {project.link ? (
          <Link
            href={project.link}
            className="mono rounded-sm border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-[11px] font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
          >
            View
          </Link>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-[var(--border)] px-4 py-3 text-xs text-[var(--muted)]">
        {project.stack.map((item) => (
          <span
            key={item}
            className="mono rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
