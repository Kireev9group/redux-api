export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH/USERS/START' })
  try {
    const users = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((r) => r.json())
    dispatch({ type: 'FETCH/USERS/SUCCESS', payload: users })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'FETCH/USERS/ERROR', payload: err })
  }
}
