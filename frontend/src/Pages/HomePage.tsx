import ProductList from "../Components/ProductList"
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../Models/IProduct";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // data fetch here
  const getData = async (): Promise<void> => {
    const response = await axios.get(`http://localhost:5021/products`);
    await setProducts(response.data);
    //console.log('products are: ', products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        {/* productList */}
        <ProductList products={products}/>
    </>
  )
}

export default HomePage