import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllProduct } from "../../../reducers/cartReducerSlice";

const CartTop = () => {
  const cartReducer = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeAllProducts = () => {
    dispatch(deleteAllProduct());
  }

  return (
    <>
      <div className="cart-top">
        <p>Your Cart</p>
        <button onClick={removeAllProducts}>Clear Cart</button>
      </div>
    </>
  );
};

export default CartTop;
