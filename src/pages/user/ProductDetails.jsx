import React from "react";
import Subbanner from "../../components/common/Subbanner";
import Newsletter from "../../components/common/Newsletter"
import ProductDetail from "../../components/user/product-details/ProductDetail";
import ProductDescription from "../../components/user/product-details/ProductDescription";
import ViewedProduct from "../../components/user/product-details/ViewedProduct";
import { useParams } from "react-router-dom";
import useCallAPI from "../../hooks/useCallAPI"
import { mobile_categories } from "../../untils/variable";

const ProductDetails = () => {
  const {id} = useParams();

  const {data, isLoading} = useCallAPI(mobile_categories + `/${id}`)


  return (
    <>
      <Subbanner />
      {/* Product Detail */}
      <ProductDetail data={data}/>
      {/* Product Description */}
      <ProductDescription data={data}/>
      {/* Viewed Products Section */}
      <ViewedProduct/>
      <Newsletter/>
    </>
  );
};

export default ProductDetails;
