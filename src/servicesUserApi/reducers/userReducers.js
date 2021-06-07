import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../types";

const initialState = {
  users: null,
  loading: true,
  error: null,
};

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUEST: {
      return { ...state };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, loading: false };
    }
    case GET_USERS_FAILED: {
      return { ...state, loading: false, error: payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducers;
