import React from "react";

const Answer = ({ answer, index, onAnswerCheck }) => {
  return (
    <>
      <div className="form-check form-check-inline ">
        <input
          className="form-check-input"
          type="radio"
          id={`answer_${index}`}
          name="answer"
          onChange={() => onAnswerCheck(answer)}
        />
        <label
          className="form-check-label"
          htmlFor={`answer_${index}`}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></label>
      </div>
    </>
  );
};

export default Answer;
