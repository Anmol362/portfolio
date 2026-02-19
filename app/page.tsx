import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ScrollLag from "@/components/ScrollLag";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";

const webProjects: Project[] = [
  {
    title: "Fitbattle Platform (App + Admin)",
    description:
      "Developed a cross-platform fitness app and supporting admin portal with workout flows, diet tracking, SEO, and scalable UI components.",
    stack: [
      "React Native",
      "TypeScript",
      "Next.js",
      "TanStack",
      "Redux",
      "Deep Linking"
    ],
    link: "https://www.fitbattle.in/",
    badge: "App"
  },
  {
    title: "Nashamukti Mobile Platform",
    description:
      "Built the health-focused app from scratch with architecture planning, backend integration, optimization, and release management.",
    stack: ["React Native Expo", "TypeScript", "Firebase", "TanStack"],
    link: "https://www.nashamuktis.com/",
    badge: "App"
  },
  {
    title: "Path IAS ECommerce",
    description:
      "Built the full learning-commerce website with UI architecture, API integrations, and production-focused frontend delivery.",
    stack: ["Nextjs", "Reactjs", "TypeScript", "Tailwind", "SCSS"],
    link: "https://www.pathiasacademy.com/",
    badge: "Website + Admin"
  }
];

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "PHP"]
  },
  {
    title: "Frameworks",
    items: ["React", "React Native", "Next.js", "WordPress"]
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "VSCode", "Postman"]
  },
  {
    title: "Engineering Focus",
    items: ["Architecture", "Performance", "SEO", "UI Motion", "Testing"]
  }
];

const processSteps = [
  "Define product goals, constraints, and user paths.",
  "Create scalable UI structures and reusable components.",
  "Ship fast, optimize continuously, and keep quality measurable."
];

const funFacts = [
  "Sports keep my mindset sharp.",
  "Cricket and badminton are my go-to reset.",
  "I enjoy turning messy ideas into clean product flows."
];

export const metadata = {
  title: "Projects | Anmol Rahangdale",
  description: "Projects by Full Stack Developer Anmol Rahangdale"
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />
      <Hero />

      <ScrollLag className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 md:px-6" intensity={26}>
        <Section id="projects" label="Projects" title="#projects">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              Three real projects shipped for production use across web and
              mobile, with focus on performance, UI quality, and reliability.
            </p>
            <a
              href="#projects"
              className="mono rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition hover:border-[var(--ring)] hover:text-[var(--accent)]"
            >
              Explore work
            </a>
          </div>

          <div className="space-y-4">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Selected Work
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {webProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" label="Skills" title="#capabilities">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="panel rounded-2xl px-5 py-4 text-[var(--text)] transition hover:-translate-y-[2px] hover:border-[var(--ring)]"
              >
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
              Delivery Approach
            </p>
            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="about" label="About" title="#about-me">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
              <p className="text-base font-semibold text-[var(--text)]">
                Hello, I&apos;m Anmol.
              </p>
              <p>
                I&apos;m a self-taught front-end developer blending design and
                engineering to craft memorable product experiences.
              </p>
              <p>
                My work is centered around robust architecture, responsive UI,
                and intentional motion that supports usability.
              </p>
              <p>
                I enjoy taking ideas from rough concept to launch-ready product
                with clear communication and practical execution.
              </p>
            </div>

            <div className="panel rounded-2xl px-5 py-5">
              <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Quick Notes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
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
          </div>
        </Section>

        <Section id="contact" label="Contact" title="#let-s-build">
          <Contact />
        </Section>

        <Footer />
      </ScrollLag>
    </main>
  );
}
