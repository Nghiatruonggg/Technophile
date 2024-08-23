import React from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { mobile_categories } from "../../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../../../../untils/third-lib";
import { Link } from "react-router-dom";

const ViewedRecently = () => {
  const { data } = useCallAPI(mobile_categories);

  return (
    <>
      <div className="viewed-product">
        <OwlCarousel
          className="owl-theme"
          dots={false}
          nav={true}
          items={4}
          {...options}
        >
          {data.map((product) => {
            return (
              <>
                <div className="item">
                  <div className="warp-viewed-product">
                    <Link to={`/mobile-categories/${product.id}`}>
                      <div className="viewed-product-image">
                        <img
                          src={product.mainImage}
                          alt=""
                        />
                      </div>
                      <div className="viewed-product-detail">
                        <div className="product-text">
                          <p className="product-name">{product.name}</p>
                          <p className="product-price">{product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
};

export default ViewedRecently;
