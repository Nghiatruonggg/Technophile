import React, { useState } from "react";
import ProductNavbar from "./ProductNavbars/ProductNavbar";
import ProductContents from "./ProductContents/ProductContents";
import styles from "./ProductDescription.module.css"

const ProductDescription = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.productDescription}>
        <div className="container">
          <ProductNavbar activeTab={activeTab} handleActive={handleActive} />

          <ProductContents activeTab={activeTab} data={data} />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
