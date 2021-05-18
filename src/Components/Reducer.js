import React, { useEffect, useReducer } from "react";
import { SiHellofresh } from "react-icons/si";

import { MdAddCircle } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

import MyReducer, { initialState } from "./MyReducer";

const Reducer = () => {
  const [count, dispatch] = useReducer(MyReducer, initialState);

  useEffect(() => {
    document.title = `Counts (${count.number})`;
    if (count.number === 0) {
      document.title = `Counts`;
      if (count.error) {
        setTimeout(() => {
          dispatch({ type: "isError" });
        }, 3000);
      }
    }
    console.log(count);
  }, [count]);
  return (
    <>
      <h1>
        <SiHellofresh />
        Hello Reducer
        <hr />
      </h1>
      <h2>
        Counter -&gt; {count.number} is{" "}
        <span style={{ color: count.color }}>{count.type}</span>
      </h2>
      <button type="button" onClick={() => dispatch({ type: "counterPlus" })}>
        <MdAddCircle className="icon_custom_style" />
      </button>
      <button type="button" onClick={() => dispatch({ type: "counterMinus" })}>
        <IoIosRemove className="icon_custom_style" />
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        title="Reset"
      >
        <GrPowerReset className="icon_custom_style" />
      </button>
      {count.error && <p>Count value can't be negative</p>}
    </>
  );
};

export default Reducer;
