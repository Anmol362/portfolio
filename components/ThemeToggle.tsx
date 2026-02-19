"use client";

import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text)] shadow-[var(--shadow-soft)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
    >
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
};

export default ThemeToggle;
