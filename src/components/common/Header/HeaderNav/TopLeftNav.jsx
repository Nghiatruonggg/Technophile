import React from "react";
import { Link } from "react-router-dom";


const TopLeftNav = ({TechnophileLogo}) => {
  return (
    <>
      <div className="menu-mobile">
        <div className="logo-menu-mobile">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={TechnophileLogo} alt="LogoImg" />
        </Link>
      </div>
    </>
  );
};

export default TopLeftNav;
