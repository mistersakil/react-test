import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { increment, decrement, reset } from "./services/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const { count, error } = useSelector((state) => state.counterReducer);
  return (
    <>
      <div className="container text-center mt-5">
        <h1>Hello Redux</h1>
        <hr />
        <h2>
          <span style={{ color: "red" }}>Count</span> = {count}
        </h2>

        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="btn btn-success "
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-warning btn-lg"
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn btn-danger">
          Reset
        </button>
        {error && (
          <div class="alert alert-danger mt-5" role="alert">
            <h4>Counter value can't be negative</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default ReduxCounter;
