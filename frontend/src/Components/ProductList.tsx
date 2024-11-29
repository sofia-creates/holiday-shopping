import { IProduct } from "../Models/IProduct"
import ProductCard from "./ProductCard"

const ProductList = ({products}: {products: IProduct[]}) => { //ta in products här
  return (
    <div className='productList' >
    {/* mappa ut products här */}
    {products.map((product: IProduct)=>(
      <>
        <ProductCard product={product}/>  
      </>
    ))}
    </div>
  )
}

export default ProductList