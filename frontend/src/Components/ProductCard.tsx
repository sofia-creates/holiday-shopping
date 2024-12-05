import { IProduct } from "../Models/IProduct"
import { NavLink } from "react-router-dom";
import imagePath from "../assets/olena-bohovyk-PS6S9cOPvxE-unsplash.jpg"

const ProductCard = ({product}: {product: IProduct}) => {
  return (
    <NavLink to={`/products/${product.id}`}>
        <div key={product.id} className="productCard productContainer">
            <img src={imagePath} alt={product.product_name} className='cardImg'/>
            <h3>{product.product_name}</h3>
            
            <p className='price'>{product.price} kr</p>
            <button>Add to cart</button>
        </div>
    </NavLink>
  )
}

export default ProductCard