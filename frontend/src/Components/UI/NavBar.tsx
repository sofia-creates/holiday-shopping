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
        <p className="navText">Login</p> 
      </a>

      <a href="#" className="navItem">
        <i className="fa-solid fa-heart"></i>
        <p className="navText">Favorites</p>
      </a>

      <a href="#" className="navItem">
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="navText">Cart</p> 
      </a>

    </nav>
  )
}

export default NavBar