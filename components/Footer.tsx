import Link from "next/link";

const socials = [
  { href: "https://github.com/Anmol362", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/anmol-rahangdale-a3b582195/",
    label: "LinkedIn"
  },
  { href: "mailto:mailtoanmolrahangdale@gmail.com", label: "Email" }
];

const Footer = () => (
  <footer className="mt-12 border-t border-[var(--border)] bg-[var(--surface-alt)] py-8 text-sm text-[var(--muted)]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="space-y-2">
        <p className="mono text-xs uppercase tracking-[0.22em] text-[var(--text)]">
          Anmol Rahangdale
        </p>
        <p className="max-w-lg text-sm text-[var(--muted)]">
          Frontend engineer focused on building resilient, high-quality React
          and React Native products.
        </p>
      </div>
      <div className="text-center md:text-right">
        <div className="flex justify-center gap-4 md:justify-end">
          {socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              className="mono link-underline text-xs uppercase tracking-[0.18em] text-[var(--text)] hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-3 text-xs text-[var(--muted)]">
          © Copyright 2026. Crafted by Anmol Rahangdale.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
