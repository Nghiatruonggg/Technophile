import React, { useState } from "react";

const ProductButton = ({ product, handleAddToCart }) => {
  const [quantityDetail, setQuantityDetail] = useState(1);

  const minusQuantity = () => {
    if (quantityDetail > 1) {
      setQuantityDetail(quantityDetail - 1);
    }
  };

  const addQuantity = () => {
    setQuantityDetail(quantityDetail + 1);
  }

  return (
    <>
      <div className="product-button">
        <div className="product-quantity">
          <button
            onClick={minusQuantity}
            className="minus-button"
            type="button"
          >
            <i className="fa-solid fa-minus" />
          </button>
          <span>{quantityDetail}</span>
          <button onClick={addQuantity} className="plus-button" type="button">
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <div className="add-to-cart-button">
          <button onClick={() => handleAddToCart(product, quantityDetail)} type="submit">
            Add To Cart
          </button>
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
