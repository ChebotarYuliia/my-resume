"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { useUiState } from "@/hooks/useUiState";

export const useMagnetic = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  strength = 0.35
) => {
  const { uiState } = useUiState();
  const { prefersReducedMotion } = uiState;

  useEffect(() => {
    const el = ref.current;

    if (!el || prefersReducedMotion) {
      return;
    }

    const quickX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      quickX(relX * strength);
      quickY(relY * strength);
    };

    const handleMouseLeave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength, prefersReducedMotion]);
};
