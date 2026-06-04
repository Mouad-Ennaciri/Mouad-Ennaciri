import { Icon } from "@iconify/react";
import { highlights } from "./data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div data-reveal className="section-label">
        About Me
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.90fr_1.10fr]">
        <div>
          <h2 data-reveal className="section-title">
            A Developer Built
            <br />
            By Curiosity & Code.
          </h2>
          <div data-reveal className="mt-8">
            <p className="mb-4 text-sm font-bold text-[var(--muted)]">
              Want to work together?
            </p>
            <a
              className="btn-secondary"
              href="/ENNACIRI_MOUAD_Frontend.pdf"
              download
              data-magnetic
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p data-reveal>
            I&apos;m Mouad Ennaciri, a self-taught Front-End Developer based in
            Marrakech, Morocco. My journey into code started with pure curiosity
            — no classroom, no university, just a screen, the internet, and an
            obsession with building things that look and feel amazing.
          </p>
          <p data-reveal>
            I specialize in React and Next.js, building web applications that
            are fast, accessible, and visually exceptional. I believe the best
            interfaces are the ones users don&apos;t have to think about — they
            just feel right.
          </p>
          <p data-reveal>
            Being self-taught taught me more than just code — it taught me how
            to learn, how to solve problems independently, and how to never stop
            growing. Every project I build is proof of that dedication.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(([icon, text]) => (
              <div data-reveal key={text} className="highlight-card">
                <Icon icon={icon} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
