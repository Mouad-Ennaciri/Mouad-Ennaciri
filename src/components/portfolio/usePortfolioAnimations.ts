"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  setupLenis,
  setupMobileMenuInitialState,
  setupNavbar,
  setupPreloader,
  setupProgress,
} from "./animationCore";
import { setupCursor, setupMagneticItems } from "./interactionEffects";
import { setupHeroAnimation, setupScrollAnimations } from "./scrollEffects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PortfolioAnimationOptions = {
  mobileMenuRef: RefObject<HTMLDivElement | null>;
  navRef: RefObject<HTMLElement | null>;
  rootRef: RefObject<HTMLDivElement | null>;
  setCounter: (counter: number) => void;
  setIsPreloaded: (isPreloaded: boolean) => void;
};

export function usePortfolioAnimations({
  mobileMenuRef,
  navRef,
  rootRef,
  setCounter,
  setIsPreloaded,
}: PortfolioAnimationOptions) {
  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      const nav = navRef.current;

      if (!root || !nav) {
        return;
      }

      const makeContextSafe =
        contextSafe ?? (<T extends (...args: never[]) => void>(fn: T) => fn);
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const cleanup: Array<() => void> = [];
      const lenis = setupLenis(reducedMotion, cleanup);

      setupProgress(root);
      setupPreloader(reducedMotion, setCounter, setIsPreloaded);
      setupNavbar(nav, makeContextSafe, cleanup);
      setupMobileMenuInitialState(mobileMenuRef.current);
      setupCursor(root, makeContextSafe, reducedMotion, cleanup);
      setupMagneticItems(makeContextSafe, cleanup);
      setupHeroAnimation(reducedMotion);
      setupScrollAnimations();

      return () => {
        cleanup.forEach((item) => item());
        lenis?.destroy();
      };
    },
    { scope: rootRef },
  );
}
