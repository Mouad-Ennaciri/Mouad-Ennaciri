"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const skills = [
  "React",
  "Next.js",
  "GSAP",
  "Motion",
  "Three.js",
  "TypeScript",
  "Tailwind",
  "Web Design",
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const image = imageRef.current;
      const content = contentRef.current;
      const container = containerRef.current;

      if (!image || !content || !container) {
        return;
      }

      // Parallax effect on image
      gsap.to(image, {
        yPercent: 30,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Content fade in and slide
      gsap.fromTo(
        content.querySelectorAll(".reveal-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with parallax */}
          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-700">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-slate-500 font-mono">Creative Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
                  About Me
                </span>
              </h2>
            </div>

            <div className="reveal-item space-y-4">
              <p className="text-slate-400 text-lg leading-relaxed">
                I&apos;m a creative developer passionate about building award-worthy
                digital experiences. With expertise in modern animation
                libraries like GSAP and Framer Motion, I craft websites that not
                just look amazing, but feel premium through every interaction.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Every project is an opportunity to push boundaries—from smooth
                scroll experiences powered by Lenis to complex 3D interactions
                using Three.js and WebGL.
              </p>
            </div>

            <div className="reveal-item">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Skills & Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300 text-center text-slate-300 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-item pt-6">
              <button className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-semibold">
                Download Resume →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
