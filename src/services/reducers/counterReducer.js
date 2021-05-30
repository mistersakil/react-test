import { INCREMENT, DECREMENT } from "../types";
const defaultState = {
  count: 0,
  error: false,
};

const counterReducer = (state = defaultState, actions) => {
  let { count } = state;
  const { type, payload } = actions;
  switch (type) {
    case INCREMENT: {
      return { ...state, count: count + payload, error: false };
    }
    case DECREMENT: {
      count = count - payload;
      return count >= 0
        ? { ...state, count }
        : { ...state, count: 0, error: true };
    }
    default: {
      return defaultState;
    }
  }
};

export default counterReducer;
