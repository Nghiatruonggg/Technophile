import React from "react";

const TopInfo = ({data}) => {
  return (
    <>
      <div className="wrap-top-info">
        <h2 className="product-name">{data.name}</h2>
        <span className="product-price">{data.price}</span>
        <div className="product-rating">
          <div className="star-icon">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p className="rating-number">(2000+ reviews)</p>
        </div>
      </div>
    </>
  );
};

export default TopInfo;
