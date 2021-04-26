import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <h6>404: Not Found</h6>
      <Link to="/">Please Go Back</Link>
    </>
  );
};

export default Error404;
