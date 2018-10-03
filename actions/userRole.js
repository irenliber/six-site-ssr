// import Parse from "parse";
import { getHotel } from "./hotel";

export const GET_USER_ROLE = 'GET_USER_ROLE'
export const GET_USER_ROLE_SUCCESS = 'GET_USER_ROLE_SUCCESS'
export const GET_USER_ROLE_ERROR = 'GET_USER_ROLE_ERROR'

export const getUserRole = () => (dispatch, getState) => {
  // dispatch({ type: GET_USER_ROLE })
  //
  // Parse.Cloud.run('adminConfig')
  //   .then(res => {
  //     if (res.user.hasHotelRole) {
  //       dispatch(getHotel())
  //     }
  //     dispatch({ type: GET_USER_ROLE_SUCCESS, result: res })
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: GET_USER_ROLE_ERROR, error: err })
  //   })
}
