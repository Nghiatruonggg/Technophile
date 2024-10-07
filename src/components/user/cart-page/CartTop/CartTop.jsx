import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllProduct } from "../../../../reducers/cartReducerSlice";
import styles from "./CartTop.module.css"

const CartTop = () => {
  const dispatch = useDispatch();

  const removeAllProducts = () => {
    dispatch(deleteAllProduct());
  }

  return (
    <>
      <div className={styles.cartTop}>
        <p>Your Cart</p>
        <button onClick={removeAllProducts}>Clear Cart</button>
      </div>
    </>
  );
};

export default CartTop;
