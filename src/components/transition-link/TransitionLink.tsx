"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { usePageAnimationOut } from "@/hooks/usePageAnimation";
import { useUiState } from "@/hooks/useUiState";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const TransitionLink = ({ to, children, className }: Props) => {
  const { setUIState } = useUiState();

  const router = useRouter();
  const pathname = usePathname();

  const animatePageOut = usePageAnimationOut();

  const handleClick = () => {
    if (pathname !== to) {
      animatePageOut(to, router);
      setUIState({ isMenuOpen: false });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
