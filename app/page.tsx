import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import Section from "@/components/Section";
import SidebarRail from "@/components/SidebarRail";

const webProjects: Project[] = [
  {
    title: "React Native Mobile App (Fitness / Health), Admin Web",
    description:
      "Developed cross-platform fitness app with workouts, diet tracking, progress monitoring, and custom UI components.",
    stack: ["React Native", "TypeScript / JavaScript", "Tailwind-style", "Tan-Stack", "React js", "Next Js", "SEO", "JSON-LD", "CI_CD", "DeepLink", "Redux"],
    link: "https://www.fitbattle.in/",
    badge: "App"
  },
  {
    title: "React Native Expo Mobile App (Health)",
    description:
      "Built Nashmukti platform from scratch collaboratively, handling architecture, UI, backend integration, optimization, and deployment.",
    stack: ["React Native Expo", "TypeScript / JavaScript", "Tailwind-style", "Tan-Stack", "Firebase"],
    link: "https://www.nashamuktis.com/",
    badge: "App"
  },
  {
    title: "Path IAS ECommerce Website ",
    description:
      "Developed Pathias platform collaboratively from scratch using React, Next.js, REST APIs, and UI architecture, UI Development.",
    stack: ["Nextjs", "Reactjs", "TypeScript", "Tailwind", "SCSS"],
    link: "https://www.pathiasacademy.com/",
    badge: "Website + Admin"
  },
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
export const metadata = {
  title: "Projects | Anmol Rahangdale",
  description: "Projects by Full Stack Developer Anmol Rahangdale",
};

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
                items: ["TypeScript", "JavaScript", "PHP"]
              },
              {
                title: "Frameworks",
                items: ["React", "React Native", "Next.js", "Vanilla js", "Wordpress"]
              },
              {
                title: "Tools",
                items: ["VSCode", "Figma", "Git"]
              },
              {
                title: "Databases",
                items: ["MySqli"]
              },
              {
                title: "Other",
                items: ["SEO", "JSON-LD", "Animations", "Testing"]
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
                  "I like to be in sports",
                  "Favourite Sports Cricket, Badminton.",
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
