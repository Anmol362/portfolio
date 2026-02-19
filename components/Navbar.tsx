"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<"home" | "projects">("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.24
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const projectsSection = document.getElementById("projects");
      if (!projectsSection) {
        setActiveSection((prev) => (prev === "home" ? prev : "home"));
        return;
      }

      const sectionTop = projectsSection.getBoundingClientRect().top;
      const triggerLine = window.innerHeight * 0.4;
      const nextSection = sectionTop <= triggerLine ? "projects" : "home";
      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeSection === "home";
    if (href === "/#projects") return pathname === "/" && activeSection === "projects";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-xl">
      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)]"
      />
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3 font-display text-base">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-sm font-semibold text-[var(--text)] shadow-[var(--shadow-soft)] transition group-hover:border-[var(--ring)]">
            AG
          </span>
          <span className="mono text-sm text-[var(--text)]">Anmol.dev</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1.5 text-xs font-semibold uppercase tracking-[0.17em] shadow-[var(--shadow-soft)] md:flex">
          {links.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.06 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`mono link-underline ${
                  isActive(item.href)
                    ? "rounded-full border border-[var(--ring)] bg-[var(--surface-alt)] px-3 py-1.5 text-[var(--accent)]"
                    : "rounded-full px-3 py-1.5 text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                #{item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/resume.pdf"
            className="hidden rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:border-[var(--ring)] hover:text-[var(--accent)] sm:inline-flex"
            download
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
