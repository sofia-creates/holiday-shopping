import ProductList from "../Components/ProductList"
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../Models/IProduct";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // data fetch here
  const getData = async (): Promise<void> => {
    const response = await axios.get(`http://localhost:5021/products`);
    setProducts(response.data);
    console.log(response.data);
    console.log('products are: ', products);

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <h1>HomePage</h1>
        {/* productList */}
        <ProductList />
    </>
  )
}

export default HomePage