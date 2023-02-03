import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts,fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {
    const dispatch=useDispatch();
    // async function fetchProducts(){
    //     const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
    //         console.log(err);
    //     });
    //     console.log(response.data)
    //     dispatch(setProducts(response.data))

    // }
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const products=useSelector((state)=>state)
    console.log(products)
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}
export default ProductListing;