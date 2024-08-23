import React, { useState } from "react";
import ProductNavbar from "./product-description/ProductNavbar";
import ProductContents from "./product-description/ProductContents";

const ProductDescription = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="product-description">
        <div className="container">
          <ProductNavbar activeTab={activeTab} handleActive={handleActive} />

          <ProductContents activeTab={activeTab} data={data} />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
