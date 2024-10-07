import React, { useEffect, useState } from "react";
import useCallAPI from "../../../../../hooks/useCallAPI";
import { mobile_categories } from "../../../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../../../../../untils/third-lib";
import { Link, useNavigate } from "react-router-dom";

const ViewedRecently = ({styles}) => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("viewedProducts"));

    if (
      Array.isArray(storedData) &&
      storedData[0].length == 0 &&
      storedData.length > 0
    ) {
      storedData.shift();
    }

    setStoredData(storedData);
  }, []);

  const redirectProduct = (id) => {
    window.location.href = `/mobile-categories/${id}`;
  };

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
          {storedData.map((product) => {
            return (
              <>
                <div
                  onClick={() => {
                    redirectProduct(product.id);
                  }}
                >
                  <div className="item">
                    <div className={styles.wrapViewedProduct}>
                      <Link to={`/mobile-categories/${product.id}`}>
                        <div className={styles.viewedProductImage}>
                          <img src={product.mainImage} alt={product.name}/>
                        </div>
                        <div>
                          <div className={styles.productText}>
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productPrice}>${product.price}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
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
