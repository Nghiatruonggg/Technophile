import React from "react";

const ProductNavbar = ({activeTab, handleActive}) => {
  return (
    <>
      <div className="row" id="product-navbar">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="wrap-product-navbar">
            <ul className="navbar-main">
              <li
                className={activeTab == "description" ? "active" : ""}
                id="description-navbar"
                onClick={() => handleActive("description")}
              >
                <a href="#wrap-product-description">Description</a>
              </li>

              <li
                className={activeTab == "specification" ? "active" : ""}
                id="spec-navbar"
                onClick={() => handleActive("specification")}
              >
                <a href="#wrap-product-spec">Technical Specification</a>
              </li>
              <li
                className={activeTab === "reviews" ? "active" : ""}
                id="review-navbar"
                onClick={() => handleActive("reviews")}
              >
                <a href="#wrap-product-review">Reviews</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
