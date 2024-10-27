import { Nav } from "@/components/nav/Nav";
import { NavLink } from "@/components/nav/NavLink";
import React from "react";

const navLinks = [
  {
    label: "Expertise",
    to: "/expertise",
  },
  {
    label: "About me",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Work experience",
    to: "/skills",
  },
  {
    label: "Contact me",
    to: "/contacts",
  },
];

export const NavContainer = ({ isMenu = false }: { isMenu?: boolean }) => {
  const links = navLinks.map(({ label, to }, id) => (
    <NavLink to={to} key={id}>
      {label}
    </NavLink>
  ));

  if (isMenu) {
    return links;
  }
  return <Nav>{links}</Nav>;
};
