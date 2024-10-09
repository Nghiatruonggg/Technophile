import React from "react";
import TopInfo from "./components/TopInfo";
import ProductStatus from "./components/ProductStatus";
import ProductButton from "./components/ProductButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  addToCart,
  minusQuantity,
} from "../../../../../reducers/cartReducerSlice";
import styles from "./ProductInfo.module.css";
import { Col } from "react-bootstrap";

const ProductInfo = ({ data }) => {
  // Redux Function
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantityDetail) => {
    dispatch(
      addToCart({
        ...product,
        quantity: quantityDetail,
      })
    );
  };

  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <div className={styles.wrapProductInfo}>
          <TopInfo data={data} styles={styles} />

          <div className={styles.wrapBottomInfo}>
            <ProductStatus styles={styles} />

            <div className={styles.productBriefIntro}>
              <p>{data.product_brief_intro}</p>
            </div>

            <ProductButton product={data} handleAddToCart={handleAddToCart} styles={styles} />
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductInfo;
