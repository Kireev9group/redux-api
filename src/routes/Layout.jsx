import { NavLink, Outlet } from 'react-router-dom'
import '../css/Layout.css'
export default function Layout() {
  return (
    <div className="wrapper">
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/albums" end={true}>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <div>Created by: Kireev Mikhail</div>
        <div>BSU: 2022</div>
      </div>
    </div>
  )
}
