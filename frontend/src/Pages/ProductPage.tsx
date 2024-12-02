//neccessary imports
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//interface/typ för id så det går att skicka in i useeffecten

const ProductPage = () => {
  const[product, setProduct] = useState(); //add type here later
  const {id} = useParams();

  useEffect(() => {
    const getProduct = async () => {

    }
  }, [])

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage