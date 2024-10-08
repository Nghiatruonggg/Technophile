import React, { useEffect, useState } from "react";
import { mobile_categories } from "../../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useCallAPI from "../../../../hooks/useCallAPI";
import { options } from "../../../../untils/third-lib";
import { Link } from "react-router-dom";
import styles from "../ProductSection/ProductSection.module.css";
import { Col, Container, Row } from "react-bootstrap";

const ProductSection = () => {
  const { data, isLoading } = useCallAPI(mobile_categories);

  return (
    <>
      {/* Products Section */}
      <div className={styles.productSection}>
        <Container>
          {/* Product Title */}
          <Row>
            <Col>
              <div className={`${styles.subProductTitle} sub-title`}>
                <p>
                  <i className="fa-solid fa-fire-flame-curved" />
                  Our Products
                </p>
                <h1>Explore Our Products</h1>
              </div>
            </Col>
          </Row>

          {/* Product Main */}
          <div className={`${styles.productMain} product-main`}>
            <OwlCarousel
              className="owl-theme"
              dots={false}
              nav={true}
              items={4}
              {...options}
            >
              {isLoading ? (
                <p>Data is Loading</p>
              ) : (
                data.map((product) => {
                  return (
                    <div key={product.id} className="item">
                      <div className={styles.productItem}>
                        <Link
                          className={styles.productLink}
                          to={`/mobile-categories/${product.id}`}
                        >
                          <div className={styles.productImage}>
                            <img src={product.mainImage} alt="Iphone 15" />
                          </div>
                          <div className={styles.productText}>
                            <div className={styles.productName}>
                              <p>{product.name}</p>
                            </div>
                            <div className={styles.productPrice}>
                              <p>${product.price}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductSection;
