export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: 'FETCH/ALBUMS/START' })
  try {
    const albums = await fetch(
      'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json())
    dispatch({ type: 'FETCH/ALBUMS/SUCCESS', payload: albums })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'FETCH/ALBUMS/ERROR', payload: err })
  }
}
