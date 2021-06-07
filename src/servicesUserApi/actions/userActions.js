import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../types";

export const get_users_request = (payload = false) => {
  let action = { type: GET_USERS_REQUEST, payload };
  return (dispatch) => {
    dispatch(action);
  };
};
