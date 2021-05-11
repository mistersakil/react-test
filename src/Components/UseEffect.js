import React, { useState, useEffect, createContext } from "react";
import { SiHellofresh } from "react-icons/si";
import { ImWarning } from "react-icons/im";
import Buttons from "./Buttons";

const counterContext = createContext();

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
    <counterContext.Provider value={{ counterDownHandler, counterUpHandler }}>
      <h1>
        <SiHellofresh />
        Hello Reducer
        <hr />
      </h1>
      <h2>Count - {counter}</h2>
      <Buttons />
      {counterWarning && (
        <p>
          Negative value not allowed
          <ImWarning style={{ color: "red", marginLeft: "5px" }} />
        </p>
      )}
    </counterContext.Provider>
  );
};

export default UseEffect;
export { counterContext };
