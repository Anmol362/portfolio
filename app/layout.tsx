import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Anmol | React & React Native Developer",
  description:
    "Portfolio site for Anmol, a frontend engineer specializing in React and React Native.",
  keywords: [
    "Anmol",
    "React Developer",
    "React Native Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Anmol" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://anmolrahangdale.netlify.app",
  },
  openGraph: {
    title: "Anmol | React & React Native Developer",
    description:
      "Portfolio site for Anmol, a frontend engineer specializing in React and React Native.",
    url: "https://anmolrahangdale.netlify.app",
    siteName: "Anmol Portfolio",
    images: [
      {
        url: "https://anmolrahangdale.netlify.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Anmol Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol | React Developer",
    description: "React & React Native Developer Portfolio",
    images: ["https://anmolrahangdale.netlify.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-[var(--text)]">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anmol",
              url: "https://anmolrahangdale.netlify.app",
              jobTitle: "React & React Native Developer",
              sameAs: [
                "https://github.com/anmolrahangdale",
                "https://www.linkedin.com/in/anmolrahangdale",
              ],
            }),
          }}
        />

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
