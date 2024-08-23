import React, { act } from "react";
import DescriptionContent from "./product-contents/DescriptionContent";
import SpecContent from "./product-contents/SpecContent";
import ReviewContent from "./product-contents/ReviewContent";

const ProductContents = ({ activeTab, data }) => {
  return (
    <>
      <DescriptionContent data={data} activeTab={activeTab} />
      <SpecContent data={data} activeTab={activeTab} />
      <ReviewContent activeTab={activeTab} />
    </>
  );
};

export default ProductContents;
