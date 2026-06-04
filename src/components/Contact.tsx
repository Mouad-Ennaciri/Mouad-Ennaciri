"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "motion/react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const title = titleRef.current;

      if (!container || !title) {
        return;
      }

      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        container.querySelectorAll(".contact-item"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  const socialLinks = [
    { label: "GitHub", icon: "→", url: "#" },
    { label: "LinkedIn", icon: "→", url: "#" },
    { label: "Twitter", icon: "→", url: "#" },
    { label: "Dribbble", icon: "→", url: "#" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        {/* Email CTA */}
        <div className="mb-16">
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-center font-bold text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              className="contact-item relative overflow-hidden group"
            >
              <div className="px-6 py-4 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-colors duration-300 text-center">
                <p className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                  {link.label}
                </p>
                <div className="text-2xl text-slate-600 group-hover:text-cyan-500 transition-colors duration-300">
                  {link.icon}
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Your Name. Crafted with ✨ using React, Next.js, GSAP &
            Motion.
          </p>
        </div>
      </div>
    </section>
  );
}
