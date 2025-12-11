import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 md:px-6">
        <Section id="contacts" label="Contacts" title="/contacts">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <p className="text-base text-[var(--text)]">Who am I?</p>
              <p>
                I&apos;m interested in freelance opportunities. If you have requests
                or questions, don&apos;t hesitate to reach out.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="panel rounded-sm px-4 py-3">
                  <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Support me here
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                    4149500120690030
                  </p>
                </div>
                <div className="panel rounded-sm px-4 py-3">
                  <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Message me here
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-[var(--text)]">
                    <p>Anmol#1234</p>
                    <p className="mono text-[var(--muted)]">hello@anmol.dev</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel rounded-sm px-4 py-4">
              <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                All media
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--text)]">
                <div className="flex items-center gap-2">
                  <span>GH</span>
                  <span className="mono text-[var(--muted)]">@anmol</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>DB</span>
                  <span className="mono text-[var(--muted)]">@anmol</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>EM</span>
                  <span className="mono text-[var(--muted)]">hello@anmol.dev</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact-form" label="Message" title="#contact">
          <Contact />
        </Section>

        <Footer />
      </div>
    </main>
  );
}
