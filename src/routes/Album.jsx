import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as albumSelectors from '../redux/store/album/selectors'
import { useMemo } from 'react'
import { fetchAlbums } from '../redux/store/album/actions'
import { fetchPhotos } from '../redux/store/photo/actions'
import * as photosSelectors from '../redux/store/photo/selectors'
import { useEffect } from 'react'
import '../css/Album.css'

export default function Album() {
  const params = useParams()
  const albums = useSelector(albumSelectors.albums)
  const photos = useSelector(photosSelectors.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    async function disp() {
      dispatch(fetchAlbums())
    }
    disp()
  }, [])

  useEffect(() => {
    async function disp() {
      dispatch(fetchPhotos())
    }
    disp()
  }, [])

  const getAlbumById = (data, id) => {
    return data.filter((item) => item.id.toString() === id.toString())[0]
  }
  const getPhoto = (photos, albumId) => {
    return photos.filter(
      (photo) => photo.albumId.toString() === albumId.toString()
    )
  }

  const currentAlbum = useMemo(
    () => getAlbumById(albums, params.id),
    [albums, params.id]
  )
  const photo = useMemo(() => getPhoto(photos, params.id), [photos, params.id])

  return (
    <div className="mainSection">
      <div> {currentAlbum?.title} </div>
      <div className="photoSection">
        {photo.map((photo, id) => (
          <img key={id} src={photo.url} alt="square" />
        ))}
      </div>
    </div>
  )
}
