import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CenterNav = ({TechnophileLogo}) => {
    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(true);
    }

    
  return (
    <>
      <div className="main-section">
        <div className="top-menu-mobile">
          <img src={TechnophileLogo} alt="LogoImg" />
          <span>
            <i className="fa-solid fa-xmark" />
          </span>
        </div>


        <ul className="menu-list">
          <li >
            <NavLink className="LinkHover" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="product-menu">
            <a href="#">
              Product <i className="fa-solid fa-chevron-down" />
            </a>
            <div className="sub-menu sub-menu-1 sub-menu-mobile">
              <ul>
                <li className="sub-item">
                  <NavLink activeClassName="active" to="/mobile-categories">
                    <p className="LinkHover">Mobile</p>
                  </NavLink>
                </li>
                <li className="sub-item">
                  <a href="#">
                    <p>Desktop</p>
                  </a>
                </li>
                <li className="sub-item">
                  <a href="#">
                    <p>Laptop</p>
                  </a>
                </li>
                <li className="sub-item">
                  <a href="#">
                    <p>Monitors</p>
                  </a>
                </li>
                <li className="sub-item">
                  <a href="#">
                    <p>Networking</p>
                  </a>
                </li>
                <li className="sub-item">
                  <a href="#">
                    <p>Accesories</p>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li >
            <NavLink className="LinkHover" activeClassName="active" to="/about-us">About Us</NavLink>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <NavLink className="LinkHover" activeClassName="active"  to="/contact-us">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CenterNav;
