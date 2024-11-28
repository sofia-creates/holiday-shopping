import { IProduct } from "../Models/IProduct"

const ProductList = ({products}: {products: IProduct[]}) => { //ta in products här
  return (
    <>
    {/* mappa ut products här */}
    {products.map((product: IProduct)=>(
      <div key={product.id}>{product.product_name}</div>
    ))}
    </>
  )
}

export default ProductList