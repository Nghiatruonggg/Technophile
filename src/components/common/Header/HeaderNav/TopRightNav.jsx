import React, { useContext, useState } from "react";
import { cartContext, searchContext } from "../../../../contexts/Contexts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const TopRightNav = () => {
  const searchFunction = useContext(searchContext);
  const { handleSearchClicked } = searchFunction;

  const cartFunction = useContext(cartContext);
  const { handleCartClicked } = cartFunction;

  const cartStore = useSelector((state) => state.cart);
  const { productList } = cartStore;

  let totalQuantity = 0;
  productList.forEach(({ quantity }) => {
    totalQuantity += quantity;
  });

  return (
    <>
      <div className="user-logo">
        <div className="wrap-user-logo">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-desktop nav-icon"
            onClick={handleSearchClicked}
          />

          <div className="cart-wrapper">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cart-ic nav-icon"
              onClick={handleCartClicked}
            ></FontAwesomeIcon>
            <span>{totalQuantity}</span>
          </div>

          <Link to="/login">
            <FontAwesomeIcon
              icon={faUser}
              className="user-desktop nav-icon"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopRightNav;
