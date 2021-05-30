import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { increment, decrement, reset } from "./services/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const { count, error } = useSelector((state) => state.counterReducer);
  useEffect(() => {
    document.title = count === 0 ? `Count` : `Count (${count})`;
    if (error) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
  });
  return (
    <>
      <div className="container text-center mt-5">
        <h1>Hello Redux</h1>
        <hr />
        <h2>
          <span style={{ color: "red" }}>Redux Count</span> = {count}
        </h2>

        <button
          type="button"
          onClick={() => dispatch(increment(5))}
          className="btn btn-success "
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement(2.5))}
          className="btn btn-warning btn-lg"
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn btn-danger">
          Reset
        </button>
        {error && (
          <div className="alert alert-danger mt-5" role="alert">
            <h4>Counter value can't be negative</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default ReduxCounter;
