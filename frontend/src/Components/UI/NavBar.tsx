import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/'} >Logo</NavLink>
      <div className="searchBar">
        <input type="text"  />
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      <a href="#">Favorites <i className="fa-solid fa-heart"></i></a>
      <a href="#">Cart <i className="fa-solid fa-cart-shopping"></i></a>

    </nav>
  )
}

export default NavBar