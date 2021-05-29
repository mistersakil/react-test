import { INCREMENT, DECREMENT, RESET } from "../types";

const defaultState = {
  count: 0,
  error: false,
};
const CounterReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const { count } = state;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: count + payload,
        error: false,
      };
    case DECREMENT: {
      let newCount = count - payload;
      return newCount < 0
        ? { ...state, count: 0, error: true }
        : { ...state, count: newCount, error: false };
    }

    case RESET:
      return defaultState;
    default:
      return state;
  }
};
export default CounterReducer;
