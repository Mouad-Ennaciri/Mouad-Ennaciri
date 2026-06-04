"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "./data";

const tomobiltyScreenshots = [
  {
    src: "/images/tomobilty/tomobilty-home.png",
    alt: "Tomobilty home page screenshot",
    width: 1920,
    height: 6667,
  },
  {
    src: "/images/tomobilty/tomobilty-details.png",
    alt: "Tomobilty vehicle details screenshot",
    width: 1920,
    height: 1412,
  },
  {
    src: "/images/tomobilty/tomobilty-voitures-all(2).png",
    alt: "Tomobilty vehicle listing screenshot",
    width: 1920,
    height: 2247,
  },
  {
    src: "/images/tomobilty/tomobilty-dashboard admin.png",
    alt: "Tomobilty admin dashboard screenshot",
    width: 1920,
    height: 1406,
  },
];

const czsScreenshots = [
  {
    src: "/images/czs/czs-landing.png",
    alt: "CZS landing page screenshot",
    width: 1920,
    height: 6150,
  },
  {
    src: "/images/czs/czs-qui-somme-nous.png",
    alt: "CZS about section screenshot",
    width: 1920,
    height: 1523,
  },
  {
    src: "/images/czs/czs-qui-etes-vous.png",
    alt: "CZS who are you section screenshot",
    width: 1920,
    height: 1282,
  },
  {
    src: "/images/czs/czs-qui-etes-vous-01.png",
    alt: "CZS audience section screenshot",
    width: 1920,
    height: 1101,
  },
  {
    src: "/images/czs/czs-landing-qui-etes-vous-light-mode.png",
    alt: "CZS light mode section screenshot",
    width: 1920,
    height: 1212,
  },
];

export function ProjectsSection() {
  const [isTomobiltyDemoOpen, setIsTomobiltyDemoOpen] = useState(false);
  const [isCzsDemoOpen, setIsCzsDemoOpen] = useState(false);

  useEffect(() => {
    if (!isTomobiltyDemoOpen && !isCzsDemoOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsTomobiltyDemoOpen(false);
        setIsCzsDemoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTomobiltyDemoOpen, isCzsDemoOpen]);

  const tomobiltyDemoModal =
    isTomobiltyDemoOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            aria-labelledby="tomobilty-demo-title"
            aria-modal="true"
            className="fixed inset-0 z-[120] flex touch-none items-center justify-center overflow-hidden bg-black/78 px-4 py-5 backdrop-blur-xl sm:px-6"
            role="dialog"
            onClick={() => setIsTomobiltyDemoOpen(false)}
            onTouchMove={(event) => event.preventDefault()}
            onWheel={(event) => event.preventDefault()}
          >
            <div
              className="relative flex h-[90dvh] max-h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b0b12] shadow-2xl shadow-black/60"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6">
                <div>
                  <p className="font-heading text-xs font-black uppercase tracking-[0.28em] text-[#8B85FF]">
                    Project 01
                  </p>
                  <h3
                    id="tomobilty-demo-title"
                    className="mt-1 font-heading text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl"
                  >
                    Tomobilty Screenshots
                  </h3>
                </div>
                <button
                  aria-label="Close Tomobilty screenshots modal"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-lg font-black text-white transition hover:border-[#8B85FF] hover:text-[#8B85FF]"
                  type="button"
                  onClick={() => setIsTomobiltyDemoOpen(false)}
                >
                  X
                </button>
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6"
                onTouchMove={(event) => event.stopPropagation()}
                onWheel={(event) => event.stopPropagation()}
                style={{
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                }}
              >
                <div className="mx-auto flex max-w-5xl flex-col gap-5">
                  {tomobiltyScreenshots.map((screenshot, index) => (
                    <figure
                      key={screenshot.src}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <figcaption className="border-b border-white/10 px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.22em] text-white/60">
                        Screen {String(index + 1).padStart(2, "0")}
                      </figcaption>
                      <Image
                        alt={screenshot.alt}
                        className="h-auto w-full"
                        height={screenshot.height}
                        sizes="(max-width: 768px) 92vw, 960px"
                        src={screenshot.src}
                        width={screenshot.width}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  const czsDemoModal =
    isCzsDemoOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            aria-labelledby="czs-demo-title"
            aria-modal="true"
            className="fixed inset-0 z-[120] flex touch-none items-center justify-center overflow-hidden bg-black/78 px-4 py-5 backdrop-blur-xl sm:px-6"
            role="dialog"
            onClick={() => setIsCzsDemoOpen(false)}
            onTouchMove={(event) => event.preventDefault()}
            onWheel={(event) => event.preventDefault()}
          >
            <div
              className="relative flex h-[90dvh] max-h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b0b12] shadow-2xl shadow-black/60"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6">
                <div>
                  <p className="font-heading text-xs font-black uppercase tracking-[0.28em] text-[#8B85FF]">
                    Project 02
                  </p>
                  <h3
                    id="czs-demo-title"
                    className="mt-1 font-heading text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl"
                  >
                    CZS Screenshots
                  </h3>
                </div>
                <button
                  aria-label="Close CZS screenshots modal"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-lg font-black text-white transition hover:border-[#8B85FF] hover:text-[#8B85FF]"
                  type="button"
                  onClick={() => setIsCzsDemoOpen(false)}
                >
                  X
                </button>
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6"
                onTouchMove={(event) => event.stopPropagation()}
                onWheel={(event) => event.stopPropagation()}
                style={{
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                }}
              >
                <div className="mx-auto flex max-w-5xl flex-col gap-5">
                  {czsScreenshots.map((screenshot, index) => (
                    <figure
                      key={screenshot.src}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <figcaption className="border-b border-white/10 px-4 py-3 font-heading text-xs font-black uppercase tracking-[0.22em] text-white/60">
                        Screen {String(index + 1).padStart(2, "0")}
                      </figcaption>
                      <Image
                        alt={screenshot.alt}
                        className="h-auto w-full"
                        height={screenshot.height}
                        sizes="(max-width: 768px) 92vw, 960px"
                        src={screenshot.src}
                        width={screenshot.width}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

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
              {project.number === "01" ? (
                <button
                  className="btn-primary cursor-pointer"
                  type="button"
                  data-magnetic
                  onClick={() => setIsTomobiltyDemoOpen(true)}
                >
                  View Demo
                </button>
              ) : project.number === "02" ? (
                <button
                  className="btn-primary cursor-pointer"
                  type="button"
                  data-magnetic
                  onClick={() => setIsCzsDemoOpen(true)}
                >
                  View Demo
                </button>
              ) : (
                <a className="btn-primary" href="#" data-magnetic>
                  Live Demo
                </a>
              )}
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
          See all on GitHub →
        </a>
      </div>

      {tomobiltyDemoModal}
      {czsDemoModal}
    </section>
  );
}
