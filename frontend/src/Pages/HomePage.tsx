import ProductList from "../Components/ProductList"
import axios from "axios";
import { useEffect, useState } from "react";

import { IProduct } from "../Models/IProduct";
import Header from "../Components/UI/Header";
import Aside from "../Components/Aside";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // data fetch here
  const getData = async (): Promise<void> => {
    const response = await axios.get(`http://localhost:5021/products`);
    await setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <Header />
        <div className='flexRow'>
          <Aside/>
          <ProductList products={products}/>
        </div>
    </>
  )
}

export default HomePage