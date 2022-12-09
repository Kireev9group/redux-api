export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: 'FETCH/PHOTOS/START' })
  try {
    const photos = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    ).then((r) => r.json())
    dispatch({ type: 'FETCH/PHOTOS/SUCCESS', payload: photos })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'FETCH/PHOTOS/ERROR', payload: err })
  }
}
