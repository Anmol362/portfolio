import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Anmol | React + React Native Developer",
  description:
    "Portfolio site for Anmol, a frontend engineer specializing in React and React Native."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-[var(--text)]">
        <ThemeProvider>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,242,157,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(143,211,255,0.05),transparent_30%)]" />
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
