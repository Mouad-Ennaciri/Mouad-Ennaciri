import { RefObject } from "react";
import { Icon } from "@iconify/react";
import { navLinks } from "./data";

type NavbarProps = {
  isLight: boolean;
  isMenuOpen: boolean;
  navRef: RefObject<HTMLElement | null>;
  mobileMenuRef: RefObject<HTMLDivElement | null>;
  onToggleMenu: () => void;
  onToggleTheme: () => void;
  onCloseMenu: () => void;
};

export function Navbar({
  isLight,
  isMenuOpen,
  navRef,
  mobileMenuRef,
  onToggleMenu,
  onToggleTheme,
  onCloseMenu,
}: NavbarProps) {
  return (
    <>
      <header ref={navRef} className="site-header">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#home" className="font-heading text-lg font-black tracking-tight" data-magnetic>
            Mouad<span className="text-[#6C63FF]">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            {navLinks.map((item) => (
              <a key={item} className="nav-link" href={`#${item.toLowerCase()}`} data-magnetic>
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-bold text-[var(--text)] sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.95)]" />
              Available for work
            </div>
            <button type="button" onClick={onToggleTheme} className="theme-toggle cursor-pointer" aria-label="Toggle color theme" data-magnetic>
              <Icon icon={isLight ? "mdi:weather-night" : "mdi:white-balance-sunny"} />
            </button>
            <button
              type="button"
              className="hamburger md:hidden cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={onToggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <div ref={mobileMenuRef} className="mobile-menu md:hidden">
        {navLinks.map((item) => (
          <a className="hover:text-[#6C63FF]! w-fit!" key={item} href={`#${item.toLowerCase()}`} onClick={onCloseMenu}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
