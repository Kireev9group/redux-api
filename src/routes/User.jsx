import * as userSelectors from '../redux/store/user/selectors'
import * as albumSelectors from '../redux/store/album/selectors'

import { fetchUsers } from '../redux/store/user/actions'
import { fetchAlbums } from '../redux/store/album/actions'
import { Link, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
import '../css/User.css'

export default function User() {
  const params = useParams()
  const users = useSelector(userSelectors.users)
  const albums = useSelector(albumSelectors.albums)
  const dispatch = useDispatch()
  useEffect(() => {
    async function disp() {
      dispatch(fetchUsers())
    }
    disp()
  }, [])
  useEffect(() => {
    async function disp() {
      dispatch(fetchAlbums())
    }
    disp()
  }, [])
  const getCurrentUSerById = (data, id) => {
    return data.filter((item) => item.id.toString() === id.toString())[0]
  }
  const getUserAlbums = (albums, userId) => {
    return albums.filter(
      (album) => album.userId.toString() === userId.toString()
    )
  }
  const currentUser = useMemo(
    () => getCurrentUSerById(users, params.id),
    [users, params.id]
  )
  const userAlbums = useMemo(
    () => getUserAlbums(albums, params.id),
    [albums, params.id]
  )

  return (
    <div>
      <div className="infoSection">
        <div> {currentUser?.name} </div>
        <div>
          Username: <span>{currentUser.username}</span>
        </div>
        <div>
          Email: <span>{currentUser.email}</span>
        </div>
        <div>Phone: {currentUser.phone}</div>
        <div>
          Site: <span>{currentUser.website}</span>
        </div>
      </div>
      <div>
        {userAlbums.map((album, id) => (
          <Link key={id} to={`/albums/${album.id}`} className="linkAlbumsUser">
            <div className="listAlbumsUser">
              <img
                className="icon"
                alt="list"
                src="https://cdn-icons-png.flaticon.com/512/45/45009.png"
              />
              {album.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
