import { projects } from "./data";

const demoUrls: Record<string, string> = {
  "01": "https://tomobilty-mu.vercel.app/",
  "02": "https://survival-fitness.vercel.app/",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div data-reveal className="section-label">
        My Work
      </div>
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 data-reveal className="section-title">
          Projects I&apos;m Proud Of
        </h2>
        <p data-reveal className="max-w-xl text-lg leading-8 text-[var(--muted)]">
          Quality over quantity. Always.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article data-reveal key={project.number} className="project-panel">
            <p className="font-heading text-sm font-black uppercase tracking-[0.32em] text-[#8B85FF]">
              {project.number}
            </p>
            <h3 className="mt-8 font-heading text-5xl font-black tracking-[-0.06em] sm:text-7xl">
              {project.name}
            </h3>
            <p className="mt-3 font-semibold text-[#8B85FF]">
              {project.tagline}
            </p>
            <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn-primary"
                href={demoUrls[project.number] ?? "#"}
                target="_blank"
                rel="noreferrer"
                data-magnetic
              >
                View Demo
              </a>
              <a
                className="btn-secondary"
                href="https://github.com/Mouad-Ennaciri"
                target="_blank"
                rel="noreferrer"
                data-magnetic
              >
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-10 flex flex-col items-start gap-3 text-lg font-bold text-[var(--text)] sm:flex-row sm:items-center sm:justify-between">
        <p>More projects coming soon.</p>
        <a
          href="https://github.com/Mouad-Ennaciri"
          target="_blank"
          rel="noreferrer"
          className="text-[#8B85FF]"
          data-magnetic
        >
          See all on GitHub -&gt;
        </a>
      </div>
    </section>
  );
}
