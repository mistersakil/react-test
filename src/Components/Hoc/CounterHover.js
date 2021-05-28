import React from "react";
import Hoc from "./Hoc";
const CounterHover = ({ count, type, up, reset }) => {
  return (
    <>
      <h2>
        {type} Counter {"=>"}
        {count}
      </h2>
      <button onMouseEnter={up}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Hoc(CounterHover);
