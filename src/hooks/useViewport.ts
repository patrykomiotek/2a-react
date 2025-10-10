export function useViewport() {
  const x = window.innerWidth;
  const y = window.innerHeight;

  return { x, y };
}
