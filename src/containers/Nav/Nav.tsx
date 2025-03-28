"use client";

import { navLinks } from "@/app/data/nav";
import { Button } from "@/components/Button/Button";
import { Nav } from "@/components/nav/Nav";
import { useUiState } from "@/hooks/useUiState";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export const NavContainer = ({ isMenu = false }: { isMenu?: boolean }) => {
  const { setUIState } = useUiState();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const t = useTranslations("Client");

  const navLinksLocation: { [key: string]: number | null } = {};

  // Throttle function to limit the rate of function calls
  const throttle = (func: () => void, limit: number) => {
    let inThrottle: boolean;
    return () => {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  /*
   * Determine which section the user is viewing, based on their scroll-depth
   * Locating the active section allows us to update our MenuItems to show which
   * item is currently active
   */
  // Throttle scroll event handler to limit updates to every 200ms
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    Object.keys(navLinks).forEach((section) => {
      const el = document.getElementById(navLinks[section].to);
      const sectionHeight = el!.offsetHeight;
      const sectionTop = el!.offsetTop - 100;
      const screenHeight = screen.availHeight;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveItem(section);
      }
      if (scrollY < screenHeight * 0.9) {
        setActiveItem(null);
      }
    });
  }, 200);

  /*
   * Determine where to set AnchorPoints for our Nav
   */
  const getAnchorPoints = () => {
    if (typeof document !== "undefined") {
      const curScroll = window.scrollY - 50;

      for (const link of Object.keys(navLinks)) {
        const el = document.getElementById(navLinks[link].to);
        navLinksLocation[link] = el
          ? el.getBoundingClientRect().top + curScroll
          : null;
      }
      handleScroll();
    }
  };

  /*
   * We listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      getAnchorPoints();
      window.addEventListener("scrollend", handleScroll);
    }
    return () => window.removeEventListener("scrollend", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    key: string,
    id: string
  ) => {
    event.preventDefault();
    setUIState({ isMenuOpen: false });
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setActiveItem(key);
  };

  const links = Object.keys(navLinks).map((key, id) => (
    <Button
      active={activeItem === key}
      aria-current={activeItem === key ? true : undefined}
      area-label={`Scroll to ${navLinks[key].label}`}
      onClick={(e) => handleClick(e, key, navLinks[key].to)}
      style={{ "--i": id } as React.CSSProperties}
      tabIndex={0}
      key={id}
    >
      {t(navLinks[key].label)}
    </Button>
  ));

  if (isMenu) {
    return links;
  }
  return <Nav>{links}</Nav>;
};
