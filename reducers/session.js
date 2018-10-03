import { SIGN_UP_SUCCESS } from '../actions/signUp'
import { LOGIN_SUCCESS, LOGOUT } from '../actions/auth'
import { GET_CURRENT_USER_SUCCESS } from '../actions/user'

const session = (state = null, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case GET_CURRENT_USER_SUCCESS:
      return action.user.sessionToken
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default session
