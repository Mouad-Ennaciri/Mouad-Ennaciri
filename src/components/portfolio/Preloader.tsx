type PreloaderProps = {
  counter: number;
  isPreloaded: boolean;
};

export function Preloader({ counter, isPreloaded }: PreloaderProps) {
  if (isPreloaded) {
    return null;
  }

  return (
    <div data-preloader className="preloader">
      <div className="preloader-mark">
        <span>M</span>
        <span>E</span>
      </div>
      <p>Mouad Ennaciri</p>
      <strong>{counter}%</strong>
    </div>
  );
}
