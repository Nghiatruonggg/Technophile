
import { useState } from "react";
import ProductImage from "./product-detail/ProductImage";
import ProductInfo from "./product-detail/ProductInfo";


const ProductDetail = ({data}) => {

  return (
    <>
      <div className="product-detail">
        <div className="container">
          <div className="row" id="product-display">
           <ProductImage data={data}/>

           <ProductInfo data={data}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
