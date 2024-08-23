import React from "react";

const TopRightNav = () => {
  return (
    <>
      <div className="user-logo">
        <div className="wrap-user-logo">
          <i className="fa-solid fa-magnifying-glass search-desktop" />
          <i className="fa-solid fa-cart-shopping cart-ic">
            <span>0</span>
          </i>

          <i className="fa-solid fa-user user-desktop" />
        </div>
      </div>
    </>
  );
};

export default TopRightNav;
