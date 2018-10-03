import {
  GET_HOTEL, GET_HOTEL_SUCCESS, GET_HOTEL_ERROR,
  UPDATE_HOTEL_SUCCESS, UPDATE_HOTEL_ERROR,
} from '../actions/hotel'

const INITIAL_STATE = {
  hotel: null,
  hotelObject: null,
  isFetching: false,
  error: null
};

const hotel = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOTEL:
      return {
        ...state,
        isFetching: true
      }
    case GET_HOTEL_SUCCESS:
      return {
        ...state,
        hotel: action.res.toJSON(),
        hotelObject: action.res,
        isFetching: false
      }
    case GET_HOTEL_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case UPDATE_HOTEL_SUCCESS:
      return {
        ...state,
        hotel: action.res.toJSON(),
        hotelObject: action.res
      }
    case UPDATE_HOTEL_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default hotel
