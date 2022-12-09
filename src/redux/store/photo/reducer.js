const defaultState = {
  photos: [],
  status: false,
  error: null,
}

export const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH/PHOTOS/START':
      return { ...state, status: false }
    case 'FETCH/PHOTOS/SUCCESS':
      return {
        ...state,
        status: true,
        photos: [...state.photos, ...action.payload],
      }
    case 'FETCH/PHOTOS/ERROR':
      return { ...state, status: true, error: action.payload.error }
    default:
      return state
  }
}
