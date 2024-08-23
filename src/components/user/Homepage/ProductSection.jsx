import React, { useEffect, useState } from "react";
import { mobile_categories } from "../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useCallAPI from "../../../hooks/useCallAPI";
import { options } from "../../../untils/third-lib";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const { data, isLoading } = useCallAPI(mobile_categories);

  if (isLoading) {
    return <p>Data Loading</p>;
  }

  return (
    <>
      {/* Products Section */}
      <div className="product-section">
        <div className="container">
          {/* Product Title */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="sub-product-title sub-title">
                <p>
                  <i className="fa-solid fa-fire-flame-curved" />
                  Our Products
                </p>
                <h1>Explore Our Products</h1>
              </div>
            </div>
          </div>

          {/* Product Main */}
          <div className="product-main">
            <OwlCarousel
              className="owl-theme"
              id="wrap-product-main"
              dots={false}
              nav={true}
              items={4}
              {...options}
            >
              {data.map((product) => {
                return (
                  <div key={product.id} className="item">
                    <div className="product-item">
                      <Link to={`/mobile-categories/${product.id}`}>
                        <div className="product-image">
                          <img src={product.mainImage} alt="Iphone 15" />
                        </div>
                        <div className="product-text">
                          <div className="product-name">
                            <p>{product.name}</p>
                          </div>
                          <div className="product-price">
                            <p>{product.price}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
