import gsap from "gsap";

export function setupHeroAnimation(reducedMotion: boolean) {
  const heroTimeline = gsap.timeline({
    delay: reducedMotion ? 0 : 1.15,
    defaults: { ease: "power4.out", duration: 1 },
  });

  heroTimeline
    .from("[data-hero-label]", { y: 24, opacity: 0 })
    .from(
      "[data-hero-word]",
      { yPercent: 112, rotateX: -62, opacity: 0, stagger: 0.05, duration: 1.12 },
      "-=0.65",
    )
    .from("[data-hero-subheadline]", { y: 28, opacity: 0 }, "-=0.65")
    .from("[data-hero-paragraph]", { y: 28, opacity: 0 }, "-=0.7")
    .from("[data-hero-actions]", { y: 20, opacity: 0 }, "-=0.62")
    .from("[data-social]", { y: 16, opacity: 0, stagger: 0.08 }, "-=0.55")
    .from("[data-stat]", { y: 20, opacity: 0, stagger: 0.08 }, "-=0.45");

  gsap.to("[data-hero-orbit]", {
    rotate: 360,
    duration: 44,
    ease: "none",
    repeat: -1,
  });
  gsap.to("[data-hero-parallax]", {
    yPercent: 16,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-hero]",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function setupScrollAnimations() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 64,
      opacity: 0,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        toggleActions: "play none none reverse",
      },
    });
  });

  setupSkillAnimations();
  setupCounters();
  setupTimelineLines();
}

function setupSkillAnimations() {
  gsap.utils.toArray<HTMLElement>("[data-skill]").forEach((element, index) => {
    gsap.from(element, {
      y: 30,
      rotate: index % 2 === 0 ? -2 : 2,
      opacity: 0,
      duration: 0.72,
      delay: (index % 5) * 0.04,
      ease: "back.out(1.6)",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function setupCounters() {
  gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((element) => {
    const value = element.dataset.counter;
    const targetValue = Number(value);

    if (!value || !Number.isFinite(targetValue)) {
      return;
    }

    const counterObject = { value: 0 };
    gsap.to(counterObject, {
      value: targetValue,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 90%", once: true },
      onUpdate: () => {
        element.textContent = `${Math.round(counterObject.value)}${
          value === "100" ? "%" : "+"
        }`;
      },
    });
  });
}

function setupTimelineLines() {
  gsap.utils.toArray<HTMLElement>("[data-line]").forEach((element) => {
    gsap.from(element, {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 78%",
        end: "bottom 35%",
        scrub: 0.6,
      },
    });
  });
}
