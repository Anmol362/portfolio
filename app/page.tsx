import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";

const webProjects: Project[] = [
  {
    title: "Realtime Workspace",
    description:
      "Collaborative whiteboard with multiplayer cursors, custom canvas tools, and offline-ready sync.",
    stack: ["Next.js", "React", "Framer Motion", "Tailwind", "Supabase"],
    link: "#",
    badge: "Web"
  },
  {
    title: "Commerce Design System",
    description:
      "Systematized UI kit powering checkout, merchandising, and analytics surfaces for a D2C platform.",
    stack: ["Storybook", "TypeScript", "Tailwind", "Radix UI"],
    link: "#",
    badge: "Design System"
  },
  {
    title: "Analytics Studio",
    description:
      "Dynamic dashboards with streaming charts, drill-down interactions, and custom data visualizations.",
    stack: ["Next.js", "React Query", "D3", "Tailwind"],
    link: "#"
  }
];

const nativeProjects: Project[] = [
  {
    title: "Wellness Companion",
    description:
      "Motion-rich React Native app with guided flows, haptics, and background audio.",
    stack: ["React Native", "Reanimated", "Expo", "TypeScript"],
    badge: "Mobile"
  },
  {
    title: "Delivery Ops",
    description:
      "Courier routing app with offline caching, GPS heatmaps, and push notifications.",
    stack: ["React Native", "Maps SDK", "MMKV", "Native Modules"]
  },
  {
    title: "Creator Toolkit",
    description:
      "Cross-platform suite for editing clips with gesture-driven timelines and GPU-accelerated effects.",
    stack: ["React Native", "Skia", "Zustand"]
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SidebarRail />
      <Hero />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 md:px-6">
        <Section id="projects" label="Projects" title="#projects">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--muted)]">
              Selected builds for web and native.
            </p>
            <a
              href="#projects"
              className="mono text-xs font-semibold text-[var(--accent)]"
            >
              View all ↠
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {webProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills" title="#skills">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Languages",
                items: ["TypeScript", "JavaScript", "Lua", "Python"]
              },
              {
                title: "Frameworks",
                items: ["React", "React Native", "Next.js", "Express.js"]
              },
              {
                title: "Tools",
                items: ["VSCode", "Figma", "Storybook", "Git"]
              },
              {
                title: "Databases",
                items: ["PostgreSQL", "MongoDB", "SQLite"]
              },
              {
                title: "Other",
                items: ["REST", "Design Systems", "Animations", "Testing"]
              }
            ].map((group) => (
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

        <Section id="about" label="About" title="#about-me">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <p>Hello, I&apos;m Anmol!</p>
              <p>
                I&apos;m a self-taught front-end developer who blends design and
                engineering to build intentional, responsive experiences across
                web and native.
              </p>
              <p>
                I love transforming ideas into launch-ready products, building
                systems that scale, and adding just enough motion to make
                interfaces feel alive.
              </p>
            </div>
            <div className="panel rounded-sm px-4 py-4">
              <p className="mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Fun facts
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "I like winter more than summer",
                  "I bike with friends often",
                  "I like pizza and pasta",
                  "I was in Egypt, Poland and Turkey",
                  "Favorite movie: The Green Mile",
                  "I am still in school"
                ].map((fact) => (
                  <span
                    key={fact}
                    className="pill mono rounded-sm px-3 py-1 text-[12px] text-[var(--text)]"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" label="Contact" title="#contacts">
          <Contact />
        </Section>

        <Footer />
      </div>
    </main>
  );
}
