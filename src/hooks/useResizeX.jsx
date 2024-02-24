import { useEffect, useState } from "react";

export const useResizeX = (targetResize) => {
  const [resized, setResized] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > targetResize) setResized(true);
      else setResized(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetResize]);
  return resized;
};
