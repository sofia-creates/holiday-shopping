import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/'} >Logo</NavLink>
      <div className="searchBar">
        <input type="text"  />
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      <a href="#">Favorites</a>
      <a href="#">Cart</a>

    </nav>
  )
}

export default NavBar