import { Link } from 'react-router-dom'
import '../css/Error.css'

export default function PageNotFound() {
  return (
    <div className="error">
      <div>
        <h2>Error 404</h2>
      </div>
      <div>
        <p>
          Go to page
          <Link to={`/albums`} className="linkFromError">
            Albums
          </Link>
        </p>
      </div>
    </div>
  )
}
