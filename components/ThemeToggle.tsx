"use client";

import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
    >
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
};

export default ThemeToggle;
