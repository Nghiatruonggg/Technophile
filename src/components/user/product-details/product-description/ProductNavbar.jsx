import React from "react";
import { Link } from "react-router-dom";

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
                <Link>Description</Link>
              </li>

              <li
                className={activeTab == "specification" ? "active" : ""}
                id="spec-navbar"
                onClick={() => handleActive("specification")}
              >
                <Link>Technical Specification</Link>
              </li>
              <li
                className={activeTab === "reviews" ? "active" : ""}
                id="review-navbar"
                onClick={() => handleActive("reviews")}
              >
                <Link>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
