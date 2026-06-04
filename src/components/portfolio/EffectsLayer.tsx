export function EffectsLayer() {
  return (
    <>
      <div data-scroll-progress className="scroll-progress" />
      <div data-cursor className="custom-cursor hidden lg:block" />
      <div data-cursor-dot className="custom-cursor-dot hidden lg:block" />
      <div className="noise-layer" />
      <div className="ambient-grid" />
    </>
  );
}
