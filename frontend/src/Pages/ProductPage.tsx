//neccessary imports
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { IProduct } from '../Models/IProduct';
import imagePath from "../assets/olena-bohovyk-PS6S9cOPvxE-unsplash.jpg"


const ProductPage = () => {
  const[product, setProduct] = useState<IProduct | null>(null); //add type here later
  const {id} = useParams();

  useEffect(() => {
    const getProduct = async () => {
      console.log('getProduct is run')
      //bygga ett url
      let url=`http://localhost:5021/products/${id}`;
      console.log('url is: ', url)
      const result = await axios.get(url);
      console.log(result.data);

      setProduct(result.data);
      return result.data;
    }
    
    getProduct();
    
  }, [])
  
  useEffect(()=> {
    console.log('product is', product)
  },[product])

  return (
    <div className='outerContainer'>
      {product ? ( 
        <div className='productContainer'>
          <img src={imagePath} alt={product.product_name} className='productPageImg' />
          <div className='productInfo'>
            <h1>{product.product_name}</h1>
            <p>{product.description}</p>
            <p>{product.price} kr</p>
            <p>Available in stock: {product.available_in_warehouse}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ) : (
        <p>Loading product... </p>
      )}
         
    
    </div>
  )
}

export default ProductPage