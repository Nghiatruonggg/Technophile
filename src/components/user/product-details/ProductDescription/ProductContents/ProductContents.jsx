import React from "react";
import DescriptionContent from "./components/DescriptionContent";
import SpecContent from "./components/SpecContent";
import ReviewContent from "./components/ReviewContent";
import styles from "./ProductContent.module.css";

const ProductContents = ({ activeTab, data }) => {
  return (
    <>
      {activeTab === "description" && (
        <DescriptionContent data={data} styles={styles} />
      )}
      {activeTab === "specification" && (
        <SpecContent data={data} styles={styles} />
      )}
      {activeTab === "reviews" && <ReviewContent data={data} styles={styles} />}
    </>
  );
};

export default ProductContents;
