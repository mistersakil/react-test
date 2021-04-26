import React from "react";
import { useParams } from "react-router-dom";
const NewsDetails = (props) => {
  const { id } = useParams();
  return (
    <>
      <h2>Welcome to {props.title} Page</h2>
      <h5>
        <small>News Id: {id}</small>
      </h5>
    </>
  );
};

export default NewsDetails;
