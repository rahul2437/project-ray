// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  user: {},
  response: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, response: payload.message };
    case types.SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.LOGOUT_REQUEST:
      console.log("logout request falied");
      return initialState;
    default:
      return state;
  }
};

export { reducer };
