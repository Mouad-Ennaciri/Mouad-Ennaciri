"use client";

import { useRef, useState } from "react";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EffectsLayer } from "@/components/portfolio/EffectsLayer";
import { Footer } from "@/components/portfolio/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { JourneySection } from "@/components/portfolio/JourneySection";
import { Navbar } from "@/components/portfolio/Navbar";
import { Preloader } from "@/components/portfolio/Preloader";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { useContactForm } from "@/components/portfolio/useContactForm";
import { useMobileMenuAnimation } from "@/components/portfolio/useMobileMenuAnimation";
import { usePortfolioAnimations } from "@/components/portfolio/usePortfolioAnimations";

export function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const { formError, handleContactSubmit, isMessageSent, isSending } =
    useContactForm();

  usePortfolioAnimations({
    mobileMenuRef,
    navRef,
    rootRef,
    setCounter,
    setIsPreloaded,
  });

  useMobileMenuAnimation({
    isMenuOpen,
    mobileMenuRef,
    rootRef,
  });

  return (
    <div
      ref={rootRef}
      data-theme={isLight ? "light" : "dark"}
      className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      <Preloader counter={counter} isPreloaded={isPreloaded} />
      <EffectsLayer />
      <Navbar
        isLight={isLight}
        isMenuOpen={isMenuOpen}
        mobileMenuRef={mobileMenuRef}
        navRef={navRef}
        onCloseMenu={() => setIsMenuOpen(false)}
        onToggleMenu={() => setIsMenuOpen((value) => !value)}
        onToggleTheme={() => setIsLight((value) => !value)}
      />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection
          formError={formError}
          isMessageSent={isMessageSent}
          isSending={isSending}
          onSubmit={handleContactSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}
