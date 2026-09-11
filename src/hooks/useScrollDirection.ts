"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const getInitialScrollY = () =>
  typeof window === "undefined" ? 0 : window.scrollY;

export const useScrollDirection = (threshold = 100) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    () => (getInitialScrollY() <= threshold ? null : "down")
  );
  const storedScrollY = useRef(getInitialScrollY());

  const handleScroll = useCallback(() => {
    const position = window.scrollY;

    if (position <= threshold) {
      setScrollDirection(null);
    } else {
      setScrollDirection(storedScrollY.current >= position ? "up" : "down");
    }

    storedScrollY.current = position;
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollDirection;
};
