"use client";

import { useCursor } from "@/hooks/useCursor";
import { useUiState } from "@/hooks/useUiState";
import s from "./Cursor.module.scss";

export const Cursor = () => {
  const cursorRef = useCursor();
  const { uiState } = useUiState();

  if (uiState.prefersReducedMotion) {
    return null;
  }

  return <div className={s.cursor} ref={cursorRef} aria-hidden />;
};
