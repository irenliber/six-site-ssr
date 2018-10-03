// import Parse from "parse";
import { getUserRole } from "./userRole";

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT = 'LOGOUT';
// export const LOGOUT_ERROR = 'LOGOUT_ERROR';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const login = (data) => (dispatch) => {
  // dispatch({ type: LOGIN })
  // Parse.User.logIn(data.email, data.password)
  //   .then(res => {
  //     dispatch({ type: LOGIN_SUCCESS, user: res.attributes })
  //     window.location.reload();
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: LOGIN_ERROR, error: err })
  //   })
}

export const logout = () => (dispatch) => {
  // Parse.User.logOut().then(() => {
  //   dispatch({ type: LOGOUT });
  //   window.location.reload();
  // });

};

