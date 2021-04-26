import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/help">
              Help
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active_link" to="/news">
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuBar;
