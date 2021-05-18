const MyReducer = (state, action) => {
  switch (action.type) {
    case "counterPlus": {
      let newState = {};
      if ((state.number + 1) % 2 === 0) {
        newState = { number: state.number + 1, type: "even", color: "green" };
      } else {
        newState = { number: state.number + 1, type: "odd", color: "red" };
      }
      return newState;
    }
    case "counterMinus": {
      let newState = {};
      let number = state.number - 1;
      if (number < 0) {
        return (newState = {
          number: 0,
          type: "even",
          color: "green",
          error: true,
        });
      }
      if (number % 2 === 0) {
        newState = { number, type: "even", color: "green" };
      } else {
        newState = { number, type: "odd", color: "red" };
      }
      return newState;
    }
    case "isError": {
      return { ...state, error: false };
    }
    case "reset": {
      return initialState;
    }
    default:
      return {};
  }
};
export const initialState = {
  number: 0,
  type: "even",
  color: "green",
  error: false,
};
export default MyReducer;
