"use client";
import React, { MouseEvent, useCallback, useState } from "react";
import s from "./Button.module.scss";
import classNames from "classnames/bind";
import { TransitionLink } from "../transition-link/TransitionLink";

const c = classNames.bind(s);

export const ButtonVariant = ["default", "outlined", "filled"] as const;
export type ButtonVariantType = (typeof ButtonVariant)[number];

export type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  animated?: boolean;
  active?: boolean;
  disabled?: boolean;
  variant?: ButtonVariantType;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  children,
  className,
  onClick,
  to,
  animated,
  active,
  disabled,
  variant = "default",
  href,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const classNames = c(s.button, className, `variant-${variant}`, {
    hovered,
    active,
    animated,
    disabled,
  });

  const handleMouseEnter = useCallback(() => setHovered(true), []);

  const handleMouseLeave = useCallback(() => setHovered(false), []);

  // used for cool interpage transition
  if (to) {
    return (
      <TransitionLink
        to={to}
        className={classNames}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </TransitionLink>
    );
  }
  if (href) {
    return (
      <a
        className={classNames}
        type="button"
        aria-disabled={disabled}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
