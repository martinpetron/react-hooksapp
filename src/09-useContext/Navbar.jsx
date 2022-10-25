import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">useContext</NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink 
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/" end>
                Home
            </NavLink>
            <NavLink 
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/about" >
                About
            </NavLink>
            <NavLink 
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/login" >
                Login
            </NavLink>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}