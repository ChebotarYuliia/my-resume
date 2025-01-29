"use client";

import { useEffect } from "react";

export const useCursor = () => {
  // bubbles in array
  const trailArr = [1, 1.5];
  // const trailArr = [1, 0.01, 1.2, 0.5, 1.5, 0.6, 0.4, 0.9, 0.2];

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

    setTimeout(function () {
      document.body.removeChild(elem);

      // 1000 = lifespan of particles
    }, Math.round(Math.random() * i * 600));
  };

  const randomColor = () => {
    const c = [];
    c[0] = 255;
    c[1] = Math.floor(Math.random() * 256);
    c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
    c.sort(function () {
      return 0.5 - Math.random();
    });
    return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")";
  };

  // 50 = spread of particles
  // 10 = size of particles
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
