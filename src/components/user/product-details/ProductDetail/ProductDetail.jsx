import { useState } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import styles from "./ProductDetail.module.css"
import { Container, Row } from "react-bootstrap";

const ProductDetail = ({data}) => {

  return (
    <>
      <div className={styles.productDetail}>
        <Container>
          <Row>
           <ProductImage data={data}/>

           <ProductInfo data={data}/>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetail;
