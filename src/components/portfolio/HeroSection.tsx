import { Icon } from "@iconify/react";
import { ProfileImage } from "@/components/ProfileImage";
import { headlineLines, socialLinks, stats } from "./data";

export function HeroSection() {
  return (
    <section
      id="home"
      data-hero
      className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-16 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.08fr_0.82fr] lg:px-12"
    >
      <div data-hero-parallax className="pointer-events-none absolute inset-0 overflow-hidden">
        <div data-hero-orbit className="hero-orbit" />
        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-[#6C63FF]/30" />
        <div className="absolute bottom-[16%] right-[12%] h-36 w-36 rotate-12 rounded-[2rem] border border-cyan-300/20" />
      </div>

      <div className="relative z-10">
        <p data-hero-label className="section-label mb-5">
          Based in Marrakech, Morocco
        </p>
        <h1 className="hero-title font-heading text-[clamp(4rem,11vw,10.5rem)] font-black leading-[0.82] tracking-[-0.075em] text-[var(--text)]">
          {headlineLines.map((line) => (
            <span key={line} className="word-mask block">
              <span data-hero-word>{line}</span>
            </span>
          ))}
        </h1>
        <p data-hero-subheadline className="mt-8 max-w-2xl text-xl font-semibold leading-8 text-[var(--text)]">
          Front-End Developer specializing in React & Next.js - crafting fast,
          animated, and pixel-perfect web experiences.
        </p>
        <p data-hero-paragraph className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Self-taught and driven by pure passion, I turn ideas into beautiful
          digital products that live at the intersection of design and code.
        </p>

        <div data-hero-actions className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a className="btn-primary" href="#projects" data-magnetic>
            View My Work
          </a>
          <a className="btn-secondary" href="#contact" data-magnetic>
            Let&apos;s Talk
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              data-social
              data-magnetic
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="social-icon"
              aria-label={link.label}
            >
              <Icon icon={link.icon} />
            </a>
          ))}
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map(([value, label]) => {
            const counterValue = value.replace(/[+%]/g, "");
            const shouldCount = Number.isFinite(Number(counterValue));

            return (
              <div data-stat key={label} className="stat-card">
                <strong data-counter={shouldCount ? counterValue : undefined}>
                  {value}
                </strong>
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm font-bold text-[var(--muted)]">
          Scroll to explore
          <span className="scroll-cue" />
        </div>
      </div>

      <div className="relative z-10">
        <ProfileImage />
      </div>
    </section>
  );
}
