import { useCallback, useEffect, useState } from "react";

export function useScroll(threshold: number) {
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);

  const handleScroll = useCallback(() => {
    setHasScrolledPastThreshold(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return hasScrolledPastThreshold;
}
