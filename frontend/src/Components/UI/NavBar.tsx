import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/'}>Logo</NavLink>
      <input type="text" className="searchBar" />
      <a href="#">Favorites</a>
      <a href="#">Cart</a>
      
    </nav>
  )
}

export default NavBar