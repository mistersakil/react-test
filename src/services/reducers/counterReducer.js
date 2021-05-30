import { INCREMENT, DECREMENT } from "../types";
const defaultState = {
  count: 0,
  error: false,
};

const counterReducer = (state = defaultState, actions) => {
  let { count } = state;
  switch (actions.type) {
    case INCREMENT: {
      return { ...state, count: count + 1, error: false };
    }
    case DECREMENT: {
      count -= 1;
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
