import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../types";

export const get_users_request = (payload = false) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST, payload });
    let getUsers = await fetch("https://jsonplaceholder.typicode.com/users");

    getUsers.status === 404
      ? dispatch({ type: GET_USERS_FAILED, payload: true })
      : dispatch({ type: GET_USERS_SUCCESS, payload: await getUsers.json() });
  };
};
