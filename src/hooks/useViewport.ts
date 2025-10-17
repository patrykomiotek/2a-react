import { useEffect, useState } from "react";

const getSize = () => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

// Custom hooks
// 1. "use"
// 2. utilize other React hooks: useEffect, useState, useRef etc...
export function useViewport() {
  const [size, setSize] = useState(getSize());

  const handleResize = () => {
    setSize(getSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
