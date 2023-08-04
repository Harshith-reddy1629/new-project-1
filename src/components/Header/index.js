import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {location} = props
  console.log(location)
  const {pathname} = location

  console.log(pathname)

  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isContact = pathname === '/contact'
  const isProjects = pathname === '/projects'

  return (
    <nav className="header-container">
      <div className="logo-and-title-container">
        <img
          alt="wave"
          className="logo"
          src="https://res.cloudinary.com/reddyimgs/image/upload/v1686216028/9893906f-6524-4032-8a0a-7fca0b73c3e4_ur1i91.jpg"
        />
      </div>

      <ul className="nav-items-list">
        <Link className="route-link" to="/">
          <li className={`link-item ${isHome && 'active-link'}`}>Home</li>
        </Link>
        <Link className="route-link" to="/about">
          <li className={`link-item ${isAbout && 'active-link'}`}>About me</li>
        </Link>
        <Link className="route-link" to="/projects">
          <li className={`link-item ${isProjects && 'active-link'}`}>
            Projects
          </li>
        </Link>
        <Link className="route-link" to="/contact">
          <li className={`link-item ${isContact && 'active-link'}`}>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
