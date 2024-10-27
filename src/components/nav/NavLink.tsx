"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button, ButtonProps } from "../Button/Button";

type Props = {
  active?: boolean;
} & ButtonProps;

export const NavLink = ({
  to,
  children,
  active = undefined,
  ...props
}: Props) => {
  const pathname = usePathname();
  const parentPathname = `/${pathname.split("/")[1]}`;

  const isActive = active || (parentPathname === to && active === undefined);

  return (
    <Button
      to={to}
      active={isActive}
      aria-current={parentPathname === to ? "page" : undefined}
      {...props}
    >
      {children}
    </Button>
  );
};
