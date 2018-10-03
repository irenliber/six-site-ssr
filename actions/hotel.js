// import Parse from 'parse'
import { getRooms } from "./rooms";

export const GET_HOTEL = 'GET_HOTEL'
export const GET_HOTEL_SUCCESS = 'GET_HOTEL_SUCCESS'
export const GET_HOTEL_ERROR = 'GET_HOTEL_ERROR'
export const UPDATE_HOTEL_SUCCESS = 'UPDATE_HOTEL_SUCCESS'
export const UPDATE_HOTEL_ERROR = 'UPDATE_HOTEL_ERROR'

export const getHotel = () => (dispatch) => {
  dispatch({ type: GET_HOTEL })

  // var Hotel = Parse.Object.extend("HotelHotel");
  // var hotelQuery = new Parse.Query(Hotel);
  //
  // hotelQuery
  //   .equalTo("owner", Parse.User.current())
  //   .include('interiorImages', 'exteriorImages').first()
  //   .then(res => {
  //     dispatch({ type: GET_HOTEL_SUCCESS, res: res })
  //     dispatch(getRooms())
  //   })
  //
  //   .catch((err) => {
  //     dispatch({ type: GET_HOTEL_ERROR, error: err })
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

export const editHotel = (
  data, newImages, deletedInteriorIds, deletedExteriorIds
) => async (dispatch, getState) => {

  const attributes = {
    name: data.name || null,
    roomCount: parseInt(data.roomCount) || 0,
    address: data.address || null,
    neighborhood: data.neighborhood || null,
    nearestAirport: data.nearestAirport || null,
    hotelDesignedBy: data.hotelDesignedBy || null,
    overviewShort: data.overviewShort || null,
    overviewLong: data.overviewLong || null,
    placeId: data.placeId || null,
    instagram: data.instagram || null,
  }

  const state = getState()
  let hotelObject = state.hotel.hotelObject

  hotelObject.set(attributes)

  const newInteriorPicturesPromises = newImages.filter(i => i.type === 'interior').map(img => createHotelImage(img))
  const newExteriorPicturesPromises = newImages.filter(i => i.type === 'exterior').map(img => createHotelImage(img))

  const newInteriorPictures = await Promise.all(newInteriorPicturesPromises).then((completed) => completed);
  const newExteriorPictures = await Promise.all(newExteriorPicturesPromises).then((completed) => completed);

  if (newInteriorPictures.length > 0) {
    hotelObject.addAll('interiorImages', newInteriorPictures.filter(i => {if (i) return i}))
  }

  if (newExteriorPictures.length > 0) {
    hotelObject.addAll('exteriorImages', newExteriorPictures.filter(i => {if (i) return i}))
  }

  return hotelObject.save()
    .then(hotel => {
      let interiorImagesObjects = hotelObject.attributes.interiorImages
      let exteriorImagesObjects = hotelObject.attributes.exteriorImages


      let interiorDeleted = interiorImagesObjects.filter((i) => deletedInteriorIds.indexOf(i.id) !== -1)
      let exteriorDeleted = exteriorImagesObjects.filter((i) => deletedExteriorIds.indexOf(i.id) !== -1)

      // let interiorDeleted = interiorImagesObjects.filter((i) => deletedInteriorIds.includes(i.id))
      // let exteriorDeleted = exteriorImagesObjects.filter((i) => deletedExteriorIds.includes(i.id))

      if (interiorDeleted.length > 0) {
        hotel.removeAll("interiorImages", interiorDeleted);
      }

      if (exteriorDeleted.length > 0) {
        hotel.removeAll("exteriorImages", exteriorDeleted);
      }

      if (hotel.dirty()) {
        return hotel.save()
          .then(res => {
            dispatch({ type: UPDATE_HOTEL_SUCCESS, res: res })
            return 'success'
          })
          .catch((err) => {
            dispatch({ type: UPDATE_HOTEL_ERROR, error: err })
            return 'error'
          })
      } else {
        dispatch({ type: UPDATE_HOTEL_SUCCESS, res: hotel })
        return 'success'
      }
    })

    .catch((err) => {
      dispatch({ type: UPDATE_HOTEL_ERROR, error: err })
      return 'error'
    })
}
