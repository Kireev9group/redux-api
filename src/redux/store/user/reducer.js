const defaultState = {
  users: [],
  status: false,
  error: null,
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH/USERS/START':
      return { ...state, status: false }
    case 'FETCH/USERS/SUCCESS':
      return {
        ...state,
        status: true,
        users: [...state.users, ...action.payload],
      }
    case 'FETCH/USERS/ERROR':
      return { ...state, status: true, error: action.payload.error }
    default:
      return state
  }
}
