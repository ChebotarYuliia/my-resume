"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import s from "./CardsTrail.module.scss";

export type CardsTrailItem = {
  src: string;
  width: number;
  height: number;
};

type CardsTrailProps = {
  items: CardsTrailItem[];
  alt: string;
  gap?: number;
  title?: string;
};

export function CardsTrail({
  items,
  alt,
  gap = 140,
  title,
}: CardsTrailProps) {
  const flairRefs = useRef<(HTMLLIElement | null)[]>([]);

  const indexRef = useRef(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!items.length) return;

    const flair = flairRefs.current.filter(
      (el): el is HTMLLIElement => el !== null,
    );

    if (!flair.length) return;

    const playAnimation = (card: HTMLLIElement) => {
      const tl = gsap.timeline();

      const rotation = gsap.utils.random(-5, 5);

      tl.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.82,
          rotation: rotation * 0.5,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 0.45,
          ease: "back.out(1.4)",
        },
      )
        // Stay visible for a moment
        .to(card, {
          rotation,
          duration: 0.65,
        })

        // Little "whoop" - very quick expansion
        .to(card, {
          scale: 1.05,
          duration: 0.25,
          ease: "power2.out",
        })

        // Immediately shrink + fade
        .to(card, {
          scale: 0.72,
          opacity: 0,
          rotation: rotation + gsap.utils.random(-3, 3),
          duration: 0.5,
          ease: "power3.in",
        });
    };

    const animateCard = () => {
      const wrappedIndex = indexRef.current % flair.length;
      const card = flair[wrappedIndex];

      if (!card || !listRef.current) return;

      const rect = listRef.current.getBoundingClientRect();

      const x = mousePos.current.x - rect.left;
      const y = mousePos.current.y - rect.top;

      gsap.killTweensOf(card);

      gsap.set(card, {
        clearProps: "all",
      });

      gsap.set(card, {
        opacity: 0,
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        zIndex: indexRef.current,
      });

      playAnimation(card);

      indexRef.current++;
    };
    const cardTrail = () => {
      const { x: mouseX, y: mouseY } = mousePos.current;
      const { x: lastX, y: lastY } = lastMousePos.current;

      const travelDistance = Math.hypot(lastX - mouseX, lastY - mouseY);

      cachedMousePos.current.x = gsap.utils.interpolate(
        cachedMousePos.current.x || mouseX,
        mouseX,
        0.1,
      );

      cachedMousePos.current.y = gsap.utils.interpolate(
        cachedMousePos.current.y || mouseY,
        mouseY,
        0.1,
      );

      if (travelDistance > gap) {
        animateCard();

        lastMousePos.current = {
          x: mouseX,
          y: mouseY,
        };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(cardTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(cardTrail);

      flair.forEach((itm) => {
        gsap.killTweensOf(itm);
      });
    };
  }, [items, gap]);

  return (
    <div className={s.cardsTrail}>
      <h3>{title}</h3>
      <ul className={s.cardsTrail__list} aria-hidden="true" ref={listRef}>
        {[...items, ...items, ...items].map((item, i) => (
          <li
            key={i}
            ref={(el) => {
              flairRefs.current[i] = el;
            }}
          >
            <Image
              src={`/pictures/${item.src}.webp`}
              alt={alt}
              loading="lazy"
              width={600}
              height={600}
            />
          </li>
        ))}
      </ul>
      <ul className={s.cardsTrail__slider}>
        {items.map((item) => (
          <li
            key={item.src}
            className={s.cardsTrail__slide}
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
          >
            <Image
              src={`/pictures/${item.src}.webp`}
              alt={alt}
              loading="lazy"
              width={item.width}
              height={item.height}
              sizes="(min-width: 768px) 320px, 70vw"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
