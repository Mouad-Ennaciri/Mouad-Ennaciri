import { Icon } from "@iconify/react";
import { skillCategories } from "./data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div data-reveal className="section-label">
        My Stack
      </div>
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 data-reveal className="section-title">
          Technologies I Work With
        </h2>
        <p data-reveal className="max-w-xl text-lg leading-8 text-[var(--muted)]">
          Every tool I use, I chose with intention.
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div data-reveal key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {category.skills.map(([name, icon]) => (
                <div data-skill key={name} className="skill-tile">
                  <Icon icon={icon} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
