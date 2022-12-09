import { fetchUsers } from '../redux/store/user/actions'
import * as userSelectors from '../redux/store/user/selectors'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Users() {
  const users = useSelector(userSelectors.users)
  const dispatch = useDispatch()
  useEffect(() => {
    async function disp() {
      dispatch(fetchUsers())
    }
    disp()
  }, [])

  return (
    <div>
      <div>
        {users.map((user, id) => (
          <Link to={`/users/${user.id}`} key={id}>
            <div>{user.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
