// import Parse from 'parse'
// import { push } from 'connected-react-router'

export const GET_ROOMS = 'GET_ROOMS'
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS'
export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR'
export const ADD_NEW_ROOM_SUCCESS = 'ADD_NEW_ROOM_SUCCESS'
export const ADD_NEW_ROOM_ERROR = 'ADD_NEW_ROOM_ERROR'
export const UPDATE_ROOM = 'UPDATE_ROOM'
export const UPDATE_ROOM_SUCCESS = 'UPDATE_ROOM_SUCCESS'
export const UPDATE_ROOM_ERROR = 'UPDATE_ROOM_ERROR'

export const getRooms = () => (dispatch, getState) => {
  // dispatch({ type: GET_ROOMS })
  //
  // const state = getState()
  // var hotelObject = state.hotel.hotelObject
  //
  // var Room = Parse.Object.extend("HotelRoom");
  // var roomQuery = new Parse.Query(Room);
  //
  // roomQuery.equalTo('hotel', hotelObject).include('roomImages').find()
  //   .then(res => {
  //     dispatch({ type: GET_ROOMS_SUCCESS, rooms: res })
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: GET_ROOMS_ERROR, error: err })
  //   })
}

const createHotelImage = async (fileObject) => {
  // let hotelImage = new Parse.Object("HotelImage");
  // let file = new Parse.File(fileObject.file.name, fileObject.file);
  //
  // if (fileObject.title !== '') {
  //   hotelImage.set("title", fileObject.title);
  // }
  // hotelImage.set("image", file);
  //
  // const result = await hotelImage.save()
  // if (!result.isNew()) return result
}

export const addNewRoom = (data, images) => (dispatch, getState) => {
  // const state = getState()
  // let hotelObject = state.hotel.hotelObject
  //
  // const attributes = {
  //   name: data.name || null,
  //   roomSize: data.roomSize || null,
  //   bedSize: data.bedSize || null,
  //   overview: data.overview || null,
  //   view: data.view  || null,
  //   maxPersons: parseInt(data.maxPersons)  || 0,
  //   roomAmenities: data.roomAmenities || []
  // }
  //
  // let Room = Parse.Object.extend("HotelRoom");
  // let newRoom = new Room();
  //
  // newRoom.set(attributes);
  // newRoom.set("hotel", hotelObject);
  //
  // return newRoom.save()
  //   .then(async room => {
  //     if (images.length > 0) {
  //       const newImagesPromises = images.map(img => createHotelImage(img))
  //       const newPictures = await Promise.all(newImagesPromises).then((completed) => completed);
  //
  //       room.addAll('roomImages', newPictures.filter(i => {if (i) return i}))
  //     }
  //
  //     if (room.dirty()) {
  //       return room.save()
  //         .then(res => {
  //           dispatch({ type: ADD_NEW_ROOM_SUCCESS, room: res })
  //           dispatch(push('/rooms'))
  //           return 'success'
  //         })
  //         .catch((err) => {
  //           dispatch({ type: ADD_NEW_ROOM_ERROR, error: err })
  //           return 'error'
  //         })
  //     } else {
  //       dispatch({ type: ADD_NEW_ROOM_SUCCESS, room: room })
  //       dispatch(push('/rooms'))
  //       return 'success'
  //     }
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: ADD_NEW_ROOM_ERROR, error: err })
  //     return 'error'
  //   })
}

export const updateRoom = (roomId, data, newImages, deletedInmagesIds) => async (dispatch, getState) => {
  // dispatch({ type: UPDATE_ROOM })
  //
  // const attributes = {
  //   name: data.name,
  //   roomSize: data.roomSize,
  //   bedSize: data.bedSize,
  //   overview: data.overview,
  //   view: data.view,
  //   maxPersons: parseInt(data.maxPersons),
  //   roomAmenities: data.roomAmenities
  // }
  //
  // const state = getState()
  // let roomObject = state.rooms.roomsObjects.find(r => r.id === roomId)
  //
  // roomObject.set(attributes)
  //
  // if (newImages.length > 0) {
  //   const newPicturesPromises = newImages.map(img => createHotelImage(img))
  //   const newPictures = await Promise.all(newPicturesPromises).then((completed) => completed);
  //
  //   roomObject.addAll('roomImages', newPictures.filter(i => {if (i) return i}))
  // }
  //
  // return roomObject.save()
  //   .then(room => {
  //     let imagesObjects = roomObject.attributes.roomImages
  //     let imagesDeleted = imagesObjects.filter((i) => deletedInmagesIds.indexOf(i.id) !== -1)
  //     // let imagesDeleted = imagesObjects.filter((i) => deletedInmagesIds.includes(i.id))
  //
  //     if (imagesDeleted.length > 0) {
  //       room.removeAll("roomImages", imagesDeleted);
  //     }
  //
  //     if (room.dirty()) {
  //       return room.save()
  //         .then(res => {
  //           dispatch({ type: UPDATE_ROOM_SUCCESS, room: res })
  //           return 'success'
  //         })
  //         .catch((err) => {
  //           dispatch({ type: UPDATE_ROOM_ERROR, error: err })
  //           return 'error'
  //         })
  //     } else {
  //       dispatch({ type: UPDATE_ROOM_SUCCESS, room: room })
  //       return 'success'
  //     }
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: UPDATE_ROOM_ERROR, error: err })
  //     return 'error'
  //   })
}
