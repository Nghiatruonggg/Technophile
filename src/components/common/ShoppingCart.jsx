import React from "react";

const ShoppingCart = () => {
  return (
    <>
      {/* Shopping cart */}
      <div className="shopping-cart shopping-cart-js">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-review">
                <h2>Cart Review</h2>
                <i className="fa-solid fa-xmark" id="cart-close-ic" />
              </div>
            </div>
          </div>
          <div className="row" id="wrap-product-section">
            <div
              className="col-12 col-sm-12 col-md-12"
              id="product-row-js"
            ></div>
          </div>
          <div className="row" id="wrap-cart-checkout">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-subtotal">
                <h2>Subtotal</h2>
                <span>0$</span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-button">
                <button type="submit">
                  <a href="./cart-page.html">Cart View</a>
                </button>
                <button type="submit">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
