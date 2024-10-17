import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsFilter = ({ styles }) => {
  const [viewedProduct, setViewedProduct] = useState(() => {
    const viewedProduct =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];

    if (
      Array.isArray(viewedProduct) &&
      viewedProduct.length > 0 &&
      viewedProduct[0].length == 0
    ) {
      viewedProduct.shift();
    }

    return viewedProduct;
  });


  return (
    <Col xs={12} sm={12} md={4}>
      <div className={styles.newsFilter}>
        <div className={styles.newSearch}>
          <h4>Search</h4>
          <input placeholder="Search here" />
        </div>

        <div className={styles.recentViewed}>
          <h4>Recent Viewed</h4>
          <div className={styles.productWrap}>
            {viewedProduct.length == 0 && <p>No Products Viewed</p>}
            {viewedProduct.length > 0 &&
              viewedProduct.map((product) => {
                return (
                  <Link
                    key={product.id}
                    to={`/mobile-categories/${product.id}`}
                  >
                    <div className={styles.productCard}>
                      <div className={styles.imageWrap}>
                        <img src={product.mainImage} alt="" />
                      </div>
                      <div className={styles.textWrap}>
                        <div className={styles.productText}>
                          <p>{product.name}</p>
                          <p>${product.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NewsFilter;
