import { GET_USER_ROLE, GET_USER_ROLE_SUCCESS, GET_USER_ROLE_ERROR } from '../actions/userRole'

const INITIAL_STATE = {
  role: null,
  isFetching: false,
  error: null
};

const userRole = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_ROLE:
      return {
        ...state,
        isFetching: true
      }
    case GET_USER_ROLE_SUCCESS:
      return {
        ...state,
        role: action.result,
        isFetching: false
      }
    case GET_USER_ROLE_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    default:
      return state
  }
}

export default userRole
