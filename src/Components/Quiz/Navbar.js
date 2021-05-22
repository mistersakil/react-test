import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const navLinks = () => {
  return [
    { route: "/", title: "Home", masking: "Home" },
    { route: "/play/instructions", title: "Instructions", masking: "Play" },
  ];
};
const Navbar = () => {
  const navLinkList = navLinks().map((link) => {
    return (
      <li>
        <NavLink to={link.route} exact>
          {link.title}
        </NavLink>
      </li>
    );
  });
  return <>{navLinkList}</>;
};

export default Navbar;
