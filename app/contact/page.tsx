import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollLag from "@/components/ScrollLag";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";
import Link from "next/link";

const channels = [
  {
    label: "Email",
    value: "mailtoanmolrahangdale@gmail.com",
    href: "mailto:mailtoanmolrahangdale@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "anmol-rahangdale-a3b582195",
    href: "https://www.linkedin.com/in/anmol-rahangdale-a3b582195/"
  },
  {
    label: "GitHub",
    value: "Anmol362",
    href: "https://github.com/Anmol362"
  }
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />

      <ScrollLag className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-12 md:px-6" intensity={20}>
        <Section id="contacts" label="Contact" title="/contact">
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
              <p className="text-base font-semibold text-[var(--text)]">
                Let&apos;s build something meaningful.
              </p>
              <p>
                I&apos;m open to freelance and contract collaborations focused on
                frontend engineering, app interfaces, and product experience work.
              </p>
              <p>
                If you have a project in mind, send details around scope,
                timeline, and expectations so I can respond quickly.
              </p>
            </div>

            <div className="panel rounded-2xl px-5 py-5">
              <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Preferred channels
              </p>
              <div className="mt-3 space-y-3">
                {channels.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group block rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 transition hover:border-[var(--ring)]"
                  >
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)]">
                      {item.value}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact-form" label="Message" title="#reach-out">
          <Contact />
        </Section>

        <Footer />
      </ScrollLag>
    </main>
  );
}
