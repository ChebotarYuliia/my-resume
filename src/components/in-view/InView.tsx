"use client";

import { ComponentPropsWithoutRef, ElementType } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

type InViewOwnProps = {
  className?: string;
  inClassName: string;
  active?: boolean;
  rootMargin?: string;
};

type Props<T extends ElementType> = InViewOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof InViewOwnProps | "as">;

export const InView = <T extends ElementType = "div">({
  as,
  className,
  inClassName,
  active = true,
  rootMargin,
  ...rest
}: Props<T>) => {
  const Component = (as ?? "div") as ElementType;
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });

  return (
    <Component
      ref={ref}
      className={classNames(className, { [inClassName]: inView && active })}
      {...rest}
    />
  );
};
