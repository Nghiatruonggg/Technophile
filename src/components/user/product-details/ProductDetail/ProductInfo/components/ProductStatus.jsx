import React from "react";

const ProductStatus = ({styles}) => {
  return (
    <>
      <div className={styles.productStatus}>
        <p>
          <i className="fa-solid fa-check"></i>In Stock
        </p>
        <p>
          <i className="fa-solid fa-check"></i>Free Delivery Available
        </p>
        <p>
          <i className="fa-solid fa-check"></i>Sale 50% for first-time customer
        </p>
      </div>
    </>
  );
};

export default ProductStatus;
