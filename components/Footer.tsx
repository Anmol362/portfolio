const Footer = () => (
  <footer className="mt-10 border-t border-[var(--border)] bg-[var(--surface)]/40 py-8 text-sm text-[var(--muted)]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="space-y-1">
        <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--text)]">
          Anmol
        </p>
        <p className="mono text-[13px] text-[var(--muted)]">hello@anmol.dev</p>
        <p>Web designer and front-end developer</p>
      </div>
      <div className="text-center md:text-right">
        <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--text)]">
          Media
        </p>
        <div className="mt-2 flex justify-center gap-3 md:justify-end">
          <span className="mono text-[var(--text)]">GH</span>
          <span className="mono text-[var(--text)]">DB</span>
          <span className="mono text-[var(--text)]">EM</span>
        </div>
        <p className="mt-3 text-xs">© Copyright 2024. Made by Anmol</p>
      </div>
    </div>
  </footer>
);

export default Footer;
