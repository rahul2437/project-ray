import axios from "axios";
import * as types from "./actionTypes";

const signup = (payload) => (dispatch) => {
  const signupURL = `/api/users/signup`;
  dispatch({ type: types.SIGNUP_REQUEST });
  try {
    axios
      .post(signupURL, payload)
      .then((res) => {
        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: { user: res.data.user, message: res.data.message },
        });
      })
      .catch((err) => {
        dispatch({ type: types.SIGNUP_FAILURE, error: err });
      });
  } catch (err) {
    dispatch({ type: types.SIGNUP_FAILURE });
  }
};

const signin = (payload) => (dispatch) => {
  const signinURL = `/api/users/login`;
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    axios
      .post(signinURL, payload)
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: { user: res.data.user, token: res.data.token },
        });
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_FAILURE, error: err });
      });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};
const signout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_REQUEST });
};
export { signin, signout, signup };
