import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        midnight: "#0b1021",
        accent: "#7ef29d",
        accent2: "#8fd3ff"
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
        "hero-gradient":
          "linear-gradient(135deg, rgba(126,242,157,0.18), rgba(143,211,255,0.18))"
      }
    }
  },
  plugins: []
};

export default config;
