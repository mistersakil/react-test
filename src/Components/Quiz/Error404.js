import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { FaRobot } from "react-icons/fa";
const Error404 = () => {
  return (
    <div className="container">
      <p className="text-center mt-5">
        <FaRobot className="text-primary " style={{ fontSize: "150px" }} />
      </p>
      <h2 className="text-center text-danger">404 : Not Found</h2>
      <p className="text-center">
        <Link to="/" exact className="btn btn-sm btn-info text-light">
          Please go Back
        </Link>
      </p>
    </div>
  );
};

export default Error404;
