import React from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import CartTop from "../../components/user/cart-page/CartTop";
import CartCenter from "../../components/user/cart-page/CartCenter";
import CartBottom from "../../components/user/cart-page/CartBottom";
import { useSelector } from "react-redux";

const CartView = () => {
  const cartState = useSelector((state) => state.cart);

  const { productList, total } = cartState;

  return (
    <>
      <Subbanner />
      <div className="main-cartpage">
        <div className="container">
          <div className="row">
            <div className="cart-view">
              <div className="col-12 col-sm-12 col-md-12">
                <CartTop />

                <CartCenter productList={productList} />

                <CartBottom total={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
