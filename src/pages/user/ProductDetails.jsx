import React, { useEffect } from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import Newsletter from "../../components/common/Newsletter/Newsletter";
import ProductDetail from "../../components/user/product-details/ProductDetail/ProductDetail";
import ProductDescription from "../../components/user/product-details/ProductDescription/ProductDescription";
import ViewedProduct from "../../components/user/product-details/ViewedProduct/ViewedProduct";
import { useParams } from "react-router-dom";
import useCallAPI from "../../hooks/useCallAPI";
import { mobile_categories } from "../../untils/variable";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useCallAPI(mobile_categories + `/${id}`);

  useEffect(() => {
    if (data) {
      const storedViewedData =
        JSON.parse(localStorage.getItem("viewedProducts")) || [];

      const isProductDuplicated = storedViewedData.some((product) => {
        return product.id === data.id;
      });

      if (!isProductDuplicated) {
        const updatedStoredData = [...storedViewedData, data];
        localStorage.setItem("viewedProducts", JSON.stringify(updatedStoredData));
      }

    }
  }, [data]);


  return (
    <>
      <Subbanner />
      {/* Product Detail */}
      <ProductDetail data={data} />
      {/* Product Description */}
      <ProductDescription data={data} />
      {/* Viewed Products Section */}
      <ViewedProduct />
      <Newsletter />
    </>
  );
};

export default ProductDetails;
