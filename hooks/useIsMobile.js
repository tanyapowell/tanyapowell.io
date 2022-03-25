import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const resizeHandler = () => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth > 767 && window.innerWidth < 1023);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth > 767 && window.innerWidth < 1023);

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return { isMobile, isTablet };
};
