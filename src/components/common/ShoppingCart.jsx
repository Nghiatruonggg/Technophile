import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/Contexts";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  deleteProduct,
  minusQuantity,
} from "../../reducers/cartReducerSlice";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartBoxRef }) => {
  const [totalCalculate, setTotalCalculate] = useState(0);

  // Popup/Close Function
  const cartFunction = useContext(cartContext);

  const { isCartClicked, handleCartClicked } = cartFunction;

  // Redux Functions
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { productList, total } = cartState;

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const handleMinusQuantity = (id) => {
    dispatch(minusQuantity(id));
  };

  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    setTotalCalculate(total);
  }, [total]);

  return (
    <>
      {/* Shopping cart */}
      <div
        ref={cartBoxRef}
        className={
          isCartClicked === true ? "shopping-cart active" : "shopping-cart"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-review">
                <h2>Cart Review</h2>
                <i className="fa-solid fa-xmark" onClick={handleCartClicked} />
              </div>
            </div>
          </div>
          <div className="row" id="wrap-product-section">
            <div className="col-12 col-sm-12 col-md-12" id="product-row-js">
              {productList.length == 0 && <p>Cart Empty</p>}
              {productList.length > 0 &&
                productList.map((product) => {
                  return (
                      <div key={product.id} className="product-wrap" >
                        <div className="product-cart">
                          <div className="product-cart-image">
                            <img src={product.mainImage} alt={product.name} />
                            <i
                              id="remove-btn"
                              className="fa-solid fa-xmark"
                              onClick={() => removeProduct(product.id)}
                            ></i>
                          </div>
                          <div className="product-cart-text">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                          </div>
                        </div>
                        <div className="product-quantity">
                          <button
                            onClick={() => handleMinusQuantity(product.id)}
                            className="minus-button"
                            type="button"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            onClick={() => handleAddQuantity(product.id)}
                            className="plus-button"
                            type="button"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                  );
                })}
            </div>
          </div>
          <div className="row" id="wrap-cart-checkout">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-subtotal">
                <h2>Subtotal</h2>
                <span>${totalCalculate}</span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="cart-button">
                <Link to="/cart-view">
                  <button className="cart-view-button">Cart View</button>
                </Link>
                <Link to="#">
                  <button className="checkout-cart">Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
