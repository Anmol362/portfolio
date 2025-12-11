"use client";

import Link from "next/link";
import { useMemo } from "react";

const socials = [
  { href: "https://github.com", label: "GitHub", icon: "GH" },
  { href: "https://dribbble.com", label: "Dribbble", icon: "DB" },
  { href: "mailto:hello@anmol.dev", label: "Email", icon: "EM" }
];

const SidebarRail = () => {
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
    <aside className="fixed left-3 top-28 hidden h-[80vh] w-14 flex-col items-center justify-between border-r border-[var(--border)] bg-[var(--bg)]/60 py-6 backdrop-blur md:flex">
      <div className="flex flex-col items-center gap-5">
        <span className="block h-10 w-[1px] bg-[var(--border)]" />
        {socials.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            aria-label={item.label}
            className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text)] transition hover:border-[var(--accent)]"
          >
            <span className="mono text-xs">{item.icon}</span>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 px-1">{dots}</div>
    </aside>
  );
};

export default SidebarRail;
