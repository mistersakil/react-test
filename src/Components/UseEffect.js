import React, { useState, useEffect } from "react";
import { SiHellofresh } from "react-icons/si";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { ImWarning } from "react-icons/im";

const UseEffect = () => {
  const [counter, counterSet] = useState(0);
  const [counterWarning, counterWarningSet] = useState(false);
  const counterUpHandler = () => {
    counterSet(counter + 1);
    if (counter >= 0) {
      counterWarningSet(false);
    }
  };
  const counterDownHandler = () => {
    if (counter > 0) {
      counterSet(counter - 1);
      counterWarningSet(false);
    } else {
      counterSet(0);
      counterWarningSet(1);
    }
  };
  useEffect(() => {
    if (counter > 0) {
      document.title = `Counts - ${counter}`;
    } else {
      document.title = `Counts`;
    }
  }, [counter]);
  return (
    <>
      <h1>
        <SiHellofresh />
        Hello Reducer
        <hr />
      </h1>
      <h2>Count - {counter}</h2>
      <button type="button" onClick={counterUpHandler}>
        <MdAddCircle className="icon_custom_style" />
      </button>
      <button type="button" onClick={counterDownHandler}>
        <IoIosRemove className="icon_custom_style" />
      </button>
      {counterWarning && (
        <p>
          Negative value not allowed
          <ImWarning style={{ color: "red", marginLeft: "5px" }} />
        </p>
      )}
    </>
  );
};

export default UseEffect;
