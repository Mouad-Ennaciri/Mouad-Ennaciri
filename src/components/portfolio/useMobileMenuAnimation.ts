"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type MobileMenuAnimationOptions = {
  isMenuOpen: boolean;
  mobileMenuRef: RefObject<HTMLDivElement | null>;
  rootRef: RefObject<HTMLDivElement | null>;
};

export function useMobileMenuAnimation({
  isMenuOpen,
  mobileMenuRef,
  rootRef,
}: MobileMenuAnimationOptions) {
  useGSAP(
    () => {
      const menu = mobileMenuRef.current;
      if (!menu) {
        return;
      }

      gsap.to(menu, {
        autoAlpha: isMenuOpen ? 1 : 0,
        yPercent: isMenuOpen ? 0 : -8,
        duration: 0.48,
        ease: "power4.out",
      });

      gsap.fromTo(
        menu.querySelectorAll("a"),
        { y: isMenuOpen ? 30 : 0, opacity: isMenuOpen ? 0 : 1 },
        {
          y: 0,
          opacity: isMenuOpen ? 1 : 0,
          duration: 0.55,
          stagger: 0.055,
          ease: "power3.out",
        },
      );
    },
    { dependencies: [isMenuOpen], scope: rootRef },
  );
}
