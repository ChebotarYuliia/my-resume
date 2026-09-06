"use client";

import { useCursor } from "@/hooks/useCursor";
import { useUiState } from "@/hooks/useUiState";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const { setUIState } = useUiState();

  useEffect(() => {
    setUIState({ openAnimation: "completed" });
  }, [setUIState]);

  useCursor();

  return children;
}
