const defaultState = {
  albums: [],
  status: false,
  error: null,
}

export const albumReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH/ALBUMS/START':
      return { ...state, status: false }
    case 'FETCH/ALBUMS/SUCCESS':
      return {
        ...state,
        status: true,
        albums: [...state.albums, ...action.payload],
      }
    case 'FETCH/ALBUMS/ERROR':
      return { ...state, status: true, error: action.payload.error }
    default:
      return state
  }
}
