import {
  ADD_NEW_ROOM, ADD_NEW_ROOM_SUCCESS, ADD_NEW_ROOM_ERROR,
  UPDATE_ROOM_SUCCESS, UPDATE_ROOM_ERROR,
  GET_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR
} from '../actions/rooms'

const INITIAL_STATE = {
  rooms: [],
  roomsObjects: [],
  isFetching: false,
  error: null
};

const rooms = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        isFetching: true
      }
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.rooms.map(r => r.toJSON()),
        roomsObjects: action.rooms,
        isFetching: false
      }
    case ADD_NEW_ROOM_SUCCESS:
      return {
        ...state,
        rooms: [...state.rooms, action.room.toJSON()],
        roomsObjects: [...state.roomsObjects, action.room],
      }
    case UPDATE_ROOM_SUCCESS:
      return {
        ...state,
        rooms: state.rooms.map(r => (r.objectId === action.room.id ? action.room : r)),
      }
    case GET_ROOMS_ERROR:
    case ADD_NEW_ROOM_ERROR:
    case UPDATE_ROOM_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    default:
      return state
  }
}

export default rooms
