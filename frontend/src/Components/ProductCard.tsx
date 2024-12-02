import { IProduct } from "../Models/IProduct"
import { NavLink } from "react-router-dom";

const ProductCard = ({product}: {product: IProduct}) => {
  return (
    <NavLink to={`/products/${product.id}`}>
        <div key={product.id} className="productCard">
            <h3>{product.product_name}</h3>
            <p>{product.price} kr</p>
            <p className="productDescription"><i>{product.description}</i></p>
            <p className="productAvailability">Available: {product.available_in_warehouse}</p>
        </div>
    </NavLink>
  )
}

export default ProductCard