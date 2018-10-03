import { combineReducers } from 'redux';
import hotel from './hotel';
import hotelCheck from './hotelCheck';
import rooms from './rooms';
import session from './session';
import user from './user';
import userRole from './userRole';

const rootReducer = combineReducers({
  hotel,
  hotelCheck,
  rooms,
  session,
  user,
  userRole,
});

export default rootReducer;
