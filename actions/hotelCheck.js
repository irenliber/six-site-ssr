// import Parse from 'parse'

export const HOTEL_SIGNUP_CHECK = 'HOTEL_SIGNUP_CHECK'
export const HOTEL_SIGNUP_CHECK_SUCCESS = 'HOTEL_SIGNUP_CHECK_SUCCESS'
export const HOTEL_SIGNUP_CHECK_ERROR = 'HOTEL_SIGNUP_CHECK_ERROR'

export const hotelSignupCheck = (hotelCode) => (dispatch) => {

  dispatch({ type: HOTEL_SIGNUP_CHECK })

  // Parse.Cloud.run('hotelSignupCheck', { signupCode: hotelCode })
  //   .then(res => {
  //     dispatch({ type: HOTEL_SIGNUP_CHECK_SUCCESS, checked: res.result })
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: HOTEL_SIGNUP_CHECK_ERROR, error: err })
  //   })

}
