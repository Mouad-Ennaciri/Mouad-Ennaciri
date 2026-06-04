import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type CleanupList = Array<() => void>;
export type ContextSafe = <T extends (...args: never[]) => void>(fn: T) => T;

export function setupLenis(reducedMotion: boolean, cleanup: CleanupList) {
  if (reducedMotion) {
    return undefined;
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
    smoothWheel: true,
  });
  const lenisTick = (time: number) => lenis.raf(time * 1000);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(lenisTick);
  gsap.ticker.lagSmoothing(0);
  cleanup.push(() => gsap.ticker.remove(lenisTick));

  return lenis;
}

export function setupProgress(root: HTMLElement) {
  const progress = root.querySelector<HTMLElement>("[data-scroll-progress]");
  if (!progress) {
    return;
  }

  gsap.to(progress, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.35 },
  });
}

export function setupPreloader(
  reducedMotion: boolean,
  setCounter: (counter: number) => void,
  setIsPreloaded: (isPreloaded: boolean) => void,
) {
  const preloaderCounter = { value: 0 };

  gsap.to(preloaderCounter, {
    value: 100,
    duration: reducedMotion ? 0.1 : 1.65,
    ease: "power3.out",
    onUpdate: () => setCounter(Math.round(preloaderCounter.value)),
    onComplete: () => {
      gsap.to("[data-preloader]", {
        yPercent: -100,
        duration: reducedMotion ? 0.1 : 0.85,
        ease: "power4.inOut",
        onComplete: () => setIsPreloaded(true),
      });
    },
  });
}

export function setupNavbar(
  nav: HTMLElement,
  makeContextSafe: ContextSafe,
  cleanup: CleanupList,
) {
  let previousScrollY = window.scrollY;
  const handleScroll = makeContextSafe(() => {
    const currentScrollY = window.scrollY;
    nav.dataset.scrolled = currentScrollY > 24 ? "true" : "false";
    nav.dataset.hidden =
      currentScrollY > previousScrollY && currentScrollY > 160
        ? "true"
        : "false";
    previousScrollY = currentScrollY;
  });

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  cleanup.push(() => window.removeEventListener("scroll", handleScroll));
}

export function setupMobileMenuInitialState(menu: HTMLDivElement | null) {
  if (menu) {
    gsap.set(menu, { autoAlpha: 0, yPercent: -8 });
  }
}
