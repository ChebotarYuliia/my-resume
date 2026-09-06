"use client";

import { useEffect } from "react";

// current section theme accent color;
const randomColor = () => {
  return "var(--section-color-accent)";
};

// 50 = spread of particles
// 5 = size of particles
const styleSparkle = (
  elem: HTMLDivElement,
  e: MouseEvent,
  i: number
): HTMLDivElement => {
  const j = (1 - i) * 50;
  const size = Math.ceil(Math.random() * 5 * i) + "px";

  // 2 = effevescence
  elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + "px";
  elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + "px";

  elem.style.width = size;
  elem.style.height = size;
  elem.style.borderRadius = size;

  // colour of particles
  elem.style.backgroundColor = randomColor();

  return elem;
};

const trailAnimation = (
  e: MouseEvent,
  i: number,
  callbackFn?: (el: HTMLDivElement) => HTMLDivElement
) => {
  let elem = document.createElement("div");

  elem = styleSparkle(elem, e, i);

  if (typeof callbackFn == "function") {
    elem = callbackFn(elem);
  }

  elem.classList.add("cursor-sparkle");

  document.body.appendChild(elem);

  // 500 = lifespan of particles
  const lifespan = Math.round(Math.random() * i * 500);

  setTimeout(function () {
    document.body.removeChild(elem);
  }, lifespan);
};

export const useCursor = () => {
  // bubbles in array
  const trailArr = [1, 0.5];

  const mouseMoveHandler = (e: MouseEvent) => {
    trailArr.forEach((i) => {
      trailAnimation(e, i);
    });

    trailArr.forEach((i) => {
      trailAnimation(e, i, (elem) => {
        elem.style.animation = "fallingCursorSparkles 1s";

        return elem;
      });
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", mouseMoveHandler);
    }
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
