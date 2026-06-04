"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "motion/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const cta = ctaRef.current;

      if (!container || !title || !subtitle || !cta) {
        return;
      }

      const tl = gsap.timeline();

      // Stagger text lines in from bottom with opacity
      tl.fromTo(
        title.querySelectorAll(".line"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "cubic.out" },
        0,
      );

      tl.fromTo(
        subtitle,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.4,
      );

      tl.fromTo(
        cta,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out" },
        0.6,
      );

      // Parallax effect on scroll
      gsap.to(container, {
        yPercent: 50,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                             linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <div ref={titleRef} className="mb-6 overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="line block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
              Creative Developer
            </span>
            <span className="line block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
              & Designer
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting award-worthy digital experiences with cutting-edge animations
          and interactive design. GSAP • Lenis • Next.js
        </div>

        {/* CTA Button */}
        <div ref={ctaRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/50"
          >
            Explore My Work
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
