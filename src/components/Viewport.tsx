import { useViewport } from "../hooks/useViewport";

export function Viewport() {
  const size = useViewport();

  return (
    <div>
      X: {size.x}, Y: {size.y}
    </div>
  );
}
