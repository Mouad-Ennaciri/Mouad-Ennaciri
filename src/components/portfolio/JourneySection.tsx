import { Icon } from "@iconify/react";
import { journey } from "./data";

export function JourneySection() {
  return (
    <section id="journey" className="section-shell">
      <div data-reveal className="section-label">
        My Journey
      </div>
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 data-reveal className="section-title">
          From Zero to Developer.
        </h2>
        <p data-reveal className="max-w-xl text-lg leading-8 text-[var(--muted)]">
          No school. No shortcuts. Just pure dedication.
        </p>
      </div>

      <div className="relative">
        <div data-line className="absolute left-4 top-0 hidden h-full w-px bg-[#6C63FF] sm:block" />
        <div className="space-y-5">
          {journey.map((item) => (
            <div data-reveal key={`${item.year}-${item.phase}`} className="journey-card">
              <span className="absolute -left-[2.45rem] top-7 hidden h-4 w-4 rounded-full border-4 border-[var(--bg)] bg-[#6C63FF] sm:block" />
              <p className="inline-flex items-center gap-2 font-heading text-sm font-black uppercase tracking-[0.25em] text-[#6C63FF]">
                <Icon icon="mdi:calendar" />
                {item.year} - {item.phase}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
