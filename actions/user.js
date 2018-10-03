// import Parse from "parse";
import { getUserRole } from "./userRole";

export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'
export const STOP_FETCHING = 'STOP_FETCHING'

export const setCurrentUser = (user) => (dispatch) => {
  if (!user) return

  dispatch({ type: GET_CURRENT_USER_SUCCESS, user: user.attributes })
}

export const getCurrentUser = () => (dispatch) => {
  // dispatch({ type: GET_CURRENT_USER })
  //
  // var currentUser = Parse.User.current();
  //
  // if (currentUser) {
  //   dispatch({ type: GET_CURRENT_USER_SUCCESS, user: currentUser.attributes })
  //   dispatch(getUserRole())
  // } else {
  //   dispatch({ type: STOP_FETCHING })
  // }
}
