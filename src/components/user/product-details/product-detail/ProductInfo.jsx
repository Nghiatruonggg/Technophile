import React from "react";
import TopInfo from "./product-info/TopInfo";
import ProductStatus from "./product-info/ProductStatus";
import ProductButton from "./product-info/ProductButton";

const ProductInfo = ({data}) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6">
        <div className="wrap-product-info">
          <TopInfo data={data}/>

          <div className="wrap-bottom-info">
            <ProductStatus/>

            <div className="product-brief-intro">
              <p>{data.product_brief_intro}</p>
            </div>

            <ProductButton/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
