import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3 font-display text-base">
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-sm font-semibold">
            AG
          </span>
          <span className="mono text-sm text-[var(--text)]">Anmol.dev</span>
        </Link>
        <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              #{item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/resume.pdf"
            className="hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)] sm:inline-flex"
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
