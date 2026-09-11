"use client";
import React, { MouseEvent, useCallback, useRef, useState } from "react";
import s from "./Button.module.scss";
import classNames from "classnames/bind";
import { useMagnetic } from "@/hooks/useMagnetic";

const c = classNames.bind(s);

export const ButtonVariant = ["default", "outlined", "filled"] as const;
export type ButtonVariantType = (typeof ButtonVariant)[number];

export type ButtonProps = {
  children: React.ReactNode;
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
  animated,
  active,
  disabled,
  variant = "default",
  href,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useMagnetic(linkRef);
  useMagnetic(buttonRef);

  const classNames = c(s.button, className, `variant-${variant}`, {
    hovered,
    active,
    animated,
    disabled,
  });

  const handleMouseEnter = useCallback(() => setHovered(true), []);

  const handleMouseLeave = useCallback(() => setHovered(false), []);

  if (href) {
    return (
      <a
        className={classNames}
        type="button"
        aria-disabled={disabled}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={linkRef}
        data-cursor-hover=""
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
      ref={buttonRef}
      data-cursor-hover=""
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
