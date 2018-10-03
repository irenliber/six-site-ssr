// import Parse from 'parse'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
export const HOTEL_SIGNUP_HANDLE  = 'HOTEL_SIGNUP_HANDLE'
export const HOTEL_SIGNUP_HANDLE_ERROR = 'HOTEL_SIGNUP_HANDLE_ERROR'

export const hotelSignupHandle = (hotelCode) => (dispatch) => {
  // dispatch({ type: HOTEL_SIGNUP_HANDLE })
  //
  // Parse.Cloud.run('hotelSignupHandle', { signupCode: hotelCode })
  //   .then(res => {
  //     if (res.result === true) {
  //       window.location.reload()
  //     }
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: HOTEL_SIGNUP_HANDLE_ERROR, error: err })
  //   })
}

export const signUp = (data, hotelCode) => (dispatch) => {
  // dispatch({ type: SIGN_UP })
  //
  // var user = new Parse.User();
  // user.set("username", data.name);
  // user.set("password", data.password);
  // user.set("email", data.email);
  //
  // user.signUp()
  //   .then(res => {
  //     dispatch({ type: SIGN_UP_SUCCESS, user: res.attributes })
  //     dispatch(hotelSignupHandle(hotelCode))
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: SIGN_UP_ERROR, error: err })
  //   })
}
