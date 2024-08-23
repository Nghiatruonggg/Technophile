import React from "react";

const ProductButton = () => {
  return (
    <>
      <div className="product-button">
        <div className="product-quantity">
          <button className="minus-button" type="button">
            <i className="fa-solid fa-minus" />
          </button>
          <span>1</span>
          <button className="plus-button" type="button">
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <div className="add-to-cart-button">
          <button type="submit">Add To Cart</button>
        </div>
        <div className="wishlist-button">
          <button type="button">
            <i className="fa-regular fa-heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductButton;
