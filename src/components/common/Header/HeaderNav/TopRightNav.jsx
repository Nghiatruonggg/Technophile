import React, { useContext, useState } from "react";
import { cartContext, searchContext } from "../../../../contexts/Contexts";

const TopRightNav = () => {
  const searchFunction = useContext(searchContext);
  const {handleSearchClicked} = searchFunction;

  const cartFunction = useContext(cartContext);
  const {handleCartClicked} = cartFunction;


  return (
    <>
      <div className="user-logo">
        <div className="wrap-user-logo">
          <i
            className="fa-solid fa-magnifying-glass search-desktop" onClick={handleSearchClicked}
          />
          <i className="fa-solid fa-cart-shopping cart-ic" onClick={handleCartClicked}>
            <span>0</span>
          </i>

          <i className="fa-solid fa-user user-desktop" />
        </div>
      </div>
    </>
  );
};

export default TopRightNav;
