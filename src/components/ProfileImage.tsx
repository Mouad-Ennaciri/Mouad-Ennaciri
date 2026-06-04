"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PROFILE_IMAGE_SRC = "/images/accept-6.jpeg";
const PROFILE_IMAGE_ALT = "Mouad Ennaciri - Front-End Developer";

export function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      if (!frameRef.current || !imageRef.current) {
        return;
      }

      const frame = frameRef.current;
      const image = imageRef.current;
      const makeContextSafe =
        contextSafe ?? (<T extends (...args: never[]) => void>(fn: T) => fn);

      gsap.from(frameRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: frame,
          start: "top 82%",
          once: true,
        },
      });

      gsap.to(frame, {
        y: -10,
        scale: 1.018,
        duration: 3.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const handlePointerEnter = makeContextSafe(() => {
        gsap.to(image, {
          scale: 1.08,
          filter: "grayscale(0%) saturate(112%)",
          duration: 0.65,
          ease: "power3.out",
        });
      });

      const handlePointerLeave = makeContextSafe(() => {
        gsap.to(image, {
          scale: 1,
          filter: "grayscale(100%) saturate(70%)",
          duration: 0.75,
          ease: "power3.out",
        });
      });

      frame.addEventListener("pointerenter", handlePointerEnter);
      frame.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        frame.removeEventListener("pointerenter", handlePointerEnter);
        frame.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[24rem]">
      <div className="absolute -inset-5 rounded-[2rem] bg-[#6C63FF]/20 blur-3xl" />
      <div className="absolute left-8 top-8 h-full w-full rounded-[2rem] border border-[#6C63FF]/35" />

      <div
        ref={frameRef}
        className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#6C63FF]/80 bg-[#10101A] p-3 shadow-[18px_18px_0_#6C63FF]"
        style={{
          clipPath: "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 8% 100%, 0 88%)",
        }}
      >
        <div
          ref={imageRef}
          className="relative h-full w-full overflow-hidden rounded-[1.45rem] bg-[#0B0B12]"
          style={{
            clipPath:
              "polygon(12% 0, 100% 0, 100% 82%, 88% 100%, 0 100%, 0 18%)",
            filter: "grayscale(100%) saturate(70%)",
            transformOrigin: "center",
          }}
        >
          <Image
            src={PROFILE_IMAGE_SRC}
            alt={PROFILE_IMAGE_ALT}
            fill
            preload
            sizes="(max-width: 768px) 82vw, 384px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(108,99,255,0.16)_48%,transparent_100%)] opacity-75 mix-blend-screen" />
        </div>

        <div className="pointer-events-none absolute left-5 top-5 h-4 w-4 border-l border-t border-white/80" />
        <div className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b border-r border-white/80" />
      </div>
    </div>
  );
}
