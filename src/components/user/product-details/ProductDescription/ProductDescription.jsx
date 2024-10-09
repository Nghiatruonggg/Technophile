import React, { useState } from "react";
import ProductNavbar from "./ProductNavbars/ProductNavbar";
import ProductContents from "./ProductContents/ProductContents";
import styles from "./ProductDescription.module.css"
import { Container } from "react-bootstrap";

const ProductDescription = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.productDescription}>
        <Container>
          <ProductNavbar activeTab={activeTab} handleActive={handleActive} />

          <ProductContents activeTab={activeTab} data={data} />
        </Container>
      </div>
    </>
  );
};

export default ProductDescription;
