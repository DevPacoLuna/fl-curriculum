import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const hasWindow = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState<number>(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hasWindow) {
      handleResize();
    }
  }, [hasWindow]);

  return windowSize;
};
