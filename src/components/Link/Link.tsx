"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../Button/Button";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== to) {
      animatePageOut(to, router);
    }
  };

  return <Button onClick={handleClick}>{children}</Button>;
};
