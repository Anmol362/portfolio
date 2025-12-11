import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";

const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Lua", "Python"] },
  {
    title: "Frameworks",
    items: ["React", "React Native", "Next.js", "Express.js"]
  },
  {
    title: "Tools",
    items: ["VSCode", "Figma", "Storybook", "Git", "Neovim"]
  },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { title: "Other", items: ["Design Systems", "Animations", "REST", "Testing"] }
];

const funFacts = [
  "I like winter more than summer",
  "I often bike with my friends",
  "I like pizza and pasta",
  "I was in Egypt, Poland and Turkey",
  "My favorite movie is The Green Mile",
  "I am still in school",
  "I don’t have any siblings"
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 md:px-6">
        <Section id="about-hero" label="About" title="/about-me">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <p className="text-base text-[var(--text)]">Who am I?</p>
              <p>Hello, I&apos;m Anmol!</p>
              <p>
                I&apos;m a self-taught front-end developer based in India. I build
                responsive web and native experiences that mix technology with
                creativity and motion.
              </p>
              <p>
                I focus on clean systems, accessibility, and animations that feel
                intentional. From scratch builds to scaling design systems, I help
                teams ship polished experiences.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -left-6 top-12 hidden h-16 w-16 border border-[var(--border)] lg:block" />
              <div className="absolute -right-10 bottom-10 hidden h-20 w-20 border border-[var(--border)] lg:block" />
              <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-sm border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="flex h-full items-center justify-center">
                  <div className="h-[90%] w-[90%] rounded-sm border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-alt)]" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" label="Skills" title="#skills">
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="panel rounded-sm px-4 py-3 text-[var(--text)]"
              >
                <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {group.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="pill mono rounded-sm px-2 py-1 text-[12px] text-[var(--text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="fun-facts" label="Fun" title="#my-fun-facts">
          <div className="flex flex-wrap gap-2">
            {funFacts.map((fact) => (
              <span
                key={fact}
                className="pill mono rounded-sm px-3 py-1 text-[12px] text-[var(--text)]"
              >
                {fact}
              </span>
            ))}
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
