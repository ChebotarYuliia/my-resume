"use client";

import { ComponentPropsWithoutRef, ElementType, Ref, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

type InViewOwnProps = {
  className?: string;
  inClassName: string;
  active?: boolean;
  rootMargin?: string;
  elementRef?: Ref<Element>;
};

type Props<T extends ElementType> = InViewOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof InViewOwnProps | "as">;

const applyRef = (ref: Ref<Element> | undefined, node: Element | null) => {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
};

export const InView = <T extends ElementType = "div">({
  as,
  className,
  inClassName,
  active = true,
  rootMargin,
  elementRef,
  ...rest
}: Props<T>) => {
  const Component = (as ?? "div") as ElementType;
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, rootMargin });

  const setRefs = useCallback(
    (node: Element | null) => {
      inViewRef(node);
      applyRef(elementRef, node);
    },
    [inViewRef, elementRef]
  );

  return (
    <Component
      ref={setRefs}
      className={classNames(className, { [inClassName]: inView && active })}
      {...rest}
    />
  );
};
