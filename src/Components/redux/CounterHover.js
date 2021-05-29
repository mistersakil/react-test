import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../redux/actions/counterActions";

const CounterHover = (props) => {
  const { count, error } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count === 0) {
      document.title = `Count`;
    } else {
      document.title = `Count (${count})`;
    }
  });
  return (
    <>
      <h2 style={{ color: "red" }}> Counter = {count}</h2>
      <button onMouseEnter={() => dispatch(increment(2))}>increment</button>
      <button onMouseEnter={() => dispatch(decrement(2))}>decrement</button>
      <button onMouseEnter={() => dispatch(reset())}>reset</button>
      {error && <p>Counter value can't be negative</p>}
    </>
  );
};

export default CounterHover;
