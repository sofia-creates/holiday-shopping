import { NavLink } from "react-router-dom";
import logoPath from "../../assets/HolidayShop_logo_small.png"

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/'} >
      <img src={logoPath} alt="Holiday Shop Logo" id="navLogo"/>
      </NavLink>

      <div className="searchBar">
        <input type="text"  />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      
      <a href="#" className="navItem">
        <i className="fa-solid fa-user"></i>
        <p>Login</p> 
      </a>

      <a href="#" className="navItem">
        <i className="fa-solid fa-heart"></i>
        <p>Favorites</p>
      </a>

      <a href="#" className="navItem">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Cart</p> 
      </a>

    </nav>
  )
}

export default NavBar