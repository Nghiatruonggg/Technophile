import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CenterNav = ({ TechnophileLogo }) => {


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
          <li>
            <NavLink className="LinkHover" activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="product-menu">
            <a href="#">
              Product <i className="fa-solid fa-chevron-down" />
            </a>
            <div className="sub-menu sub-menu-1 sub-menu-mobile">
              <ul>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="/mobile-categories"
                  >
                    Mobile
                  </NavLink>
                </li>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="/desktop-categories"
                  >
                    Desktop
                  </NavLink>
                </li>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="#"
                  >
                    Laptop
                  </NavLink>
                </li>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="#"
                  >
                    Monitor
                  </NavLink>
                </li>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="#"
                  >
                    Networking
                  </NavLink>
                </li>
                <li className="sub-item">
                  <NavLink
                    className="LinkHover"
                    activeclassname="active"
                    to="#"
                  >
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              className="LinkHover"
              activeclassname="active"
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <NavLink
              className="LinkHover"
              activeclassname="active"
              to="/contact-us"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CenterNav;
