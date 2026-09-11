"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useUiState } from "@/hooks/useUiState";
import s from "@/components/cursor/Cursor.module.scss";

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { uiState } = useUiState();
  const { prefersReducedMotion } = uiState;

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || prefersReducedMotion) {
      return;
    }

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const quickX = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const quickY = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    // matches [data-cursor-hover] on Button/ContactLink/hoverable list items —
    // same $transition-duration/$default-ease Button's own hover fill uses
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-hover]")) {
        cursor.classList.add(s.isHovering);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-hover]")) {
        cursor.classList.remove(s.isHovering);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [prefersReducedMotion]);

  return cursorRef;
};
