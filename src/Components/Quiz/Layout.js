import React from "react";
import { Link } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div className="container">
      <p className="text-center mt-5">
        <Link to="/">
          <FaCubes className="text-primary " style={{ fontSize: "50px" }} />
        </Link>
      </p>
      <h1 className="text-center mt-1">Welcome to React Quiz App</h1>
      <ul>
        <Navbar />
      </ul>
      <hr />

      {props.children}
    </div>
  );
};

export default Layout;
