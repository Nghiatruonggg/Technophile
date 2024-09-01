import React, { useContext, useState } from "react";
import { cartContext, searchContext } from "../../../../contexts/Contexts";
import { useSelector } from "react-redux";

const TopRightNav = () => {
  const searchFunction = useContext(searchContext);
  const {handleSearchClicked} = searchFunction;

  const cartFunction = useContext(cartContext);
  const {handleCartClicked} = cartFunction;

  const cartStore = useSelector(state => state.cart)
  const {productList} = cartStore;

  let totalQuantity = 0;
  productList.forEach(({quantity}) => {
    totalQuantity += quantity
  })


  return (
    <>
      <div className="user-logo">
        <div className="wrap-user-logo">
          <i
            className="fa-solid fa-magnifying-glass search-desktop" onClick={handleSearchClicked}
          />
          <i className="fa-solid fa-cart-shopping cart-ic" onClick={handleCartClicked}>
            <span>{totalQuantity}</span>
          </i>

          <i className="fa-solid fa-user user-desktop" />
        </div>
      </div>
    </>
  );
};

export default TopRightNav;
