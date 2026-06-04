import gsap from "gsap";
import { CleanupList, ContextSafe } from "./animationCore";

export function setupCursor(
  root: HTMLElement,
  makeContextSafe: ContextSafe,
  reducedMotion: boolean,
  cleanup: CleanupList,
) {
  const cursor = root.querySelector<HTMLElement>("[data-cursor]");
  const cursorDot = root.querySelector<HTMLElement>("[data-cursor-dot]");
  const cursorPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const cursorRender = { ...cursorPosition };

  const handleMouseMove = makeContextSafe((event: MouseEvent) => {
    cursorPosition.x = event.clientX;
    cursorPosition.y = event.clientY;
  });

  const cursorTick = () => {
    cursorRender.x += (cursorPosition.x - cursorRender.x) * 0.18;
    cursorRender.y += (cursorPosition.y - cursorRender.y) * 0.18;
    if (cursor) {
      gsap.set(cursor, { x: cursorRender.x, y: cursorRender.y });
    }
    if (cursorDot) {
      gsap.set(cursorDot, { x: cursorPosition.x, y: cursorPosition.y });
    }
  };

  if (!reducedMotion && cursor && cursorDot) {
    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(cursorTick);
    cleanup.push(() => window.removeEventListener("mousemove", handleMouseMove));
    cleanup.push(() => gsap.ticker.remove(cursorTick));
  }
}

export function setupMagneticItems(
  makeContextSafe: ContextSafe,
  cleanup: CleanupList,
) {
  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((item) => {
    const move = makeContextSafe((event: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.22;
      const cursor = document.querySelector<HTMLElement>("[data-cursor]");

      gsap.to(item, { x, y, duration: 0.35, ease: "power3.out" });
      gsap.to(cursor, { scale: 1.75, duration: 0.25, ease: "power3.out" });
    });

    const leave = makeContextSafe(() => {
      const cursor = document.querySelector<HTMLElement>("[data-cursor]");
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.45)",
      });
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
    });

    item.addEventListener("mousemove", move);
    item.addEventListener("mouseleave", leave);
    cleanup.push(() => {
      item.removeEventListener("mousemove", move);
      item.removeEventListener("mouseleave", leave);
    });
  });
}
