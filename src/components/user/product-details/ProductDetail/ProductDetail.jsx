import { useState } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import styles from "./ProductDetail.module.css"

const ProductDetail = ({data}) => {

  return (
    <>
      <div className={styles.productDetail}>
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
