import {
  HOTEL_SIGNUP_CHECK,
  HOTEL_SIGNUP_CHECK_SUCCESS,
  HOTEL_SIGNUP_CHECK_ERROR
} from '../actions/hotelCheck'

const INITIAL_STATE = {
  checked: null,
  isChecking: false,
};

const hotelCheck = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOTEL_SIGNUP_CHECK:
      return {
        ...state,
        isChecking: true
      }
    case HOTEL_SIGNUP_CHECK_SUCCESS:
      return {
        ...state,
        checked: action.checked,
        isChecking: false
      }
    case HOTEL_SIGNUP_CHECK_ERROR:
      return {
        ...state,
        checked: false,
        isChecking: false
      }
    default:
      return state
  }
}

export default hotelCheck
