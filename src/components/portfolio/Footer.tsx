export function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-sm font-bold text-[var(--muted)] sm:px-10 lg:grid-cols-3 lg:px-12">
        <a href="#home" className="footer-name">
          Mouad Ennaciri
        </a>
        <p className="text-center">
          (c) 2026 - Designed & Built by Mouad Ennaciri
        </p>
        <p className="text-right">Built with Next.js & GSAP</p>
        <p className="text-center text-xs lg:col-span-3">
          Marrakech, Morocco
        </p>
      </div>
    </footer>
  );
}
