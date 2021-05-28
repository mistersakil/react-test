import React from "react";
import Hoc from "./Hoc";
const CounterClick = ({ count, up, reset, type }) => {
  return (
    <>
      <h2>
        {type} Counter {"=>"}
        {count}
      </h2>
      <button onClick={up}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Hoc(CounterClick);
