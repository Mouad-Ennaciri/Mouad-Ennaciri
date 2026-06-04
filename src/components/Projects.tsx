"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Interactive Animation Platform",
    description:
      "A premium web platform showcasing scroll-triggered GSAP animations with smooth Lenis integration.",
    tags: ["GSAP", "Lenis", "React", "Next.js"],
    color: "from-cyan-500 to-blue-500",
    stats: "12 Interactions",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    description:
      "Luxury product showcase with magnetic hover effects, product morphing, and 3D scroll reveals.",
    tags: ["Three.js", "GSAP", "WebGL"],
    color: "from-purple-500 to-pink-500",
    stats: "24+ Animations",
  },
  {
    id: 3,
    title: "Brand Identity Website",
    description:
      "Minimalist design with sophisticated text animations, kinetic typography, and scroll parallax.",
    tags: ["Motion", "CSS", "Lenis"],
    color: "from-emerald-500 to-teal-500",
    stats: "8 Scroll Triggers",
  },
  {
    id: 4,
    title: "Creative Agency Portfolio",
    description:
      "Portfolio site featuring staggered reveals, smooth transitions, and award-winning micro-interactions.",
    tags: ["GSAP", "Motion", "Anime.js"],
    color: "from-yellow-500 to-orange-500",
    stats: "360 Frames",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const title = titleRef.current;

      if (!container || !title) {
        return;
      }

      // Title animation
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

      // Project cards stagger reveal
      gsap.fromTo(
        container.querySelectorAll(".project-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
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

  return (
    <section className="relative py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
              Featured Work
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Award-worthy projects combining stunning design with interactive
            excellence
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-500 p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${project.color}`}
              />

              <div className="relative z-10">
                {/* Stats badge */}
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {project.stats}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700/50 rounded-full border border-slate-600/50 hover:border-slate-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
