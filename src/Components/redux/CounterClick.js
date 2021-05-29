import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../redux/actions/counterActions";

const CounterClick = ({ count, increment, decrement, reset, error }) => {
  useEffect(() => {
    if (count === 0) {
      document.title = `Count`;
    } else {
      document.title = `Count (${count})`;
    }
  });
  return (
    <>
      <h1>Redux - Counter Example</h1>
      <hr />
      <h2 style={{ color: "red" }}> Counter = {count}</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={reset}>reset</button>
      {error && <p>Counter value can't be negative</p>}
    </>
  );
};
const mapStateToProps = (state) => {
  let { count, error } = state.counterReducer;
  return {
    count: count,
    error: error,
  };
};
export default connect(mapStateToProps, { increment, decrement, reset })(
  CounterClick
);
