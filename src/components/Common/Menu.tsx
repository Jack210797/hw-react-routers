import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
