import * as albumSelectors from '../redux/store/album/selectors'
import { Link } from 'react-router-dom'
import { fetchAlbums } from '../redux/store/album/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Albums() {
  const albums = useSelector(albumSelectors.albums)
  const disptach = useDispatch()
  useEffect(() => {
    async function disp() {
      disptach(fetchAlbums())
    }
    disp()
  }, [])

  return (
    <div>
      <div>
        {albums.map((album, id) => (
          <Link key={id} to={`/albums/${album.id}`}>
            <div>{album.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
