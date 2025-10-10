import { useEffect, useState } from "react";

const getSize = () => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

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
