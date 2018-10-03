import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  HOTEL_SIGNUP_HANDLE,
  HOTEL_SIGNUP_HANDLE_ERROR,
} from '../actions/signUp'
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/auth'
import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS, STOP_FETCHING } from '../actions/user'


const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: null
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOGIN:
    case GET_CURRENT_USER:
    case HOTEL_SIGNUP_HANDLE:
      return {
        ...state,
        isFetching: true
      }
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false
      }
    case SIGN_UP_ERROR:
    case LOGIN_ERROR:
    case HOTEL_SIGNUP_HANDLE_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      }
    case LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

export const isAuthenticated = state => {
  return state.user.user && state.user.user.id && state.session;
}

export default user
