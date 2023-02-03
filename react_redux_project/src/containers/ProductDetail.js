import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productID}=useParams();
    const [productdetails,setProductDetails]=useState({})
    console.log(productID);
    const fetchProductDetails=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productID}`)
        setProductDetails(response.data)
    }
    useEffect(()=>{
        fetchProductDetails();
    },[productID])
    return (
        <div className="ui grid container">
            {Object.keys(productdetails).length === 0 ? (
        <div>...Loading</div>
      ) :(
            <div className="ui placeholder  segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src={productdetails.image} />
                  </div>
                  <div className="column rp">
                    <h1>{productdetails.title}</h1>
                    <h2>
                      <a className="ui teal tag label">${productdetails.price}</a>
                    </h2>
                    <h3 className="ui brown block header">{productdetails.category}</h3>
                    <p>{productdetails.description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      );
}
export default ProductDetail;