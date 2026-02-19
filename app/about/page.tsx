import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollLag from "@/components/ScrollLag";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";
import Image from "next/image";
import Link from "next/link";

const skillGroups = [
  {
    title: "Core stack",
    items: ["React", "React Native", "Next.js", "TypeScript"]
  },
  {
    title: "Product skills",
    items: ["UI Architecture", "Component Systems", "SEO", "Performance"]
  },
  {
    title: "Tooling",
    items: ["Git", "Figma", "VSCode", "Postman"]
  },
  {
    title: "Working style",
    items: ["Ownership", "Fast Iteration", "Clear Communication"]
  }
];

const milestones = [
  "5+ years building frontend products",
  "20+ shipped web and mobile projects",
  "Strong focus on scalable UI and maintainable code"
];

const funFacts = [
  "Cricket and badminton are part of my weekly routine.",
  "I like translating rough concepts into usable UI fast.",
  "I care about details that make interfaces feel premium."
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />

      <ScrollLag className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-12 md:px-6" intensity={22}>
        <Section id="about-hero" label="About" title="/about-me">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
              <p className="text-base font-semibold text-[var(--text)]">Who am I?</p>
              <p>
                I&apos;m Anmol, a frontend engineer focused on creating smooth,
                scalable digital experiences across web and native platforms.
              </p>
              <p>
                I work at the intersection of design and engineering, building UI
                systems that feel polished while remaining maintainable for teams.
              </p>
              <p>
                I enjoy shipping production-ready interfaces with practical motion,
                strong accessibility foundations, and reliable performance.
              </p>
              <Link
                href="/contact"
                className="mono inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
              >
                Let&apos;s talk
              </Link>
            </div>

            <div className="panel relative overflow-hidden rounded-[28px] p-4">
              <div className="relative h-[420px] w-full overflow-hidden rounded-[20px] border border-[var(--border)]">
                <Image
                  src="/Anmol.jpg"
                  alt="Anmol Rahangdale"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4">
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Frontend Engineer
                  </p>
                  <p className="mt-1 text-sm text-[var(--text)]">
                    React + React Native + Next.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" label="Skills" title="#what-i-work-with">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="panel rounded-2xl px-5 py-4">
                <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {group.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="pill mono rounded-full px-3 py-1 text-[11px] text-[var(--text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="panel-alt rounded-2xl px-5 py-5">
            <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Milestones
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {milestones.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="fun-facts" label="Personal" title="#quick-notes">
          <div className="panel rounded-2xl px-5 py-5">
            <div className="flex flex-wrap gap-2">
              {funFacts.map((fact) => (
                <span
                  key={fact}
                  className="pill mono rounded-full px-3 py-1 text-[11px] text-[var(--text)]"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Footer />
      </ScrollLag>
    </main>
  );
}
