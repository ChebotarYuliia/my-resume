import React, { useState } from "react";
import s from "./Button.module.scss";
import Link from "next/link";
import classNames from "classnames/bind";

const c = classNames.bind(s);

export type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
  active?: boolean;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  children,
  className,
  onClick,
  to,
  animated,
  active,
  disabled,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const classNames = c(s.button, className, {
    hovered,
    active,
    animated,
    disabled,
  });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  if (to) {
    return (
      <Link
        href={to}
        className={classNames}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
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
