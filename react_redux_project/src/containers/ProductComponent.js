// import React from 'react'
// import { useSelector } from 'react-redux'

// const ProductComponent = () => {
//     const products=useSelector((state)=>state.allProducts.products);
//     console.log(products)
//     const renderList=()=>{
//         products.map((product)=>{
//             return(<div className='four column wide' key={product.id}>
//             <div className='ui link cards'>
//                 <div className='card'>
//                     <div className='image'></div>
//                     <div className='content'>
//                         <div className='header'>{product.title}</div>
//                         <div className='meta price'>{product.price}</div>
//                         <div className='meta category'>{product.category}</div>
//                         <div className='meta'>{product.description}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>)
//         })
//     }
//   return (
//     <>{renderList}</>
//   )
// }
// export default ProductComponent

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
       
      <div className="four wide column" key={id}>
         <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
          </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;