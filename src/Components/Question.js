import React from "react";

const Question = ({ question }) => {
  return (
    <>
      <h6
        className="text-center"
        dangerouslySetInnerHTML={{ __html: question }}
      ></h6>
    </>
  );
};

export default Question;
