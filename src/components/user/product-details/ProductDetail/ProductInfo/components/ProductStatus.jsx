import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductStatus = ({styles}) => {
  return (
    <>
      <div className={styles.productStatus}>
        <p>
          <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} ></FontAwesomeIcon>In Stock
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} ></FontAwesomeIcon>Free Delivery Available
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} ></FontAwesomeIcon>Sale 50% for first-time customer
        </p>
      </div>
    </>
  );
};

export default ProductStatus;
