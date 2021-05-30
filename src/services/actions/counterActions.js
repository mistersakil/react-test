import { INCREMENT, DECREMENT, RESET } from "../types";

export const increment = (payload = 1) => {
  return { type: INCREMENT, payload };
};
export const decrement = (payload = 1) => {
  return {
    type: DECREMENT,
    payload,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
