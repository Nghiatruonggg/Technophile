import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const CenterNav = ({ TechnophileLogo, isMenuClicked, setIsMenuClicked, menuBoxRef }) => {

  return (
    <>
      <div ref={menuBoxRef} className={isMenuClicked ? "main-section active" : "main-section"}>
        <div className="top-menu-mobile">
          <img src={TechnophileLogo} alt="LogoImg" />
          <span>
            <FontAwesomeIcon className="close-mobile-menu" onClick={() => setIsMenuClicked(false)} icon={faXmark} />
          </span>
        </div>

        <ul className="menu-list">
          <li className="user-mobile">
            <NavLink className="LinkHover" to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink className="LinkHover" activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="product-menu">
            <Link>
              Product <FontAwesomeIcon icon={faChevronDown} />
            </Link>
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
                  <Link
                    className="LinkHover"
                    to="#"
                  >
                    Laptop
                  </Link>
                </li>
                <li className="sub-item">
                  <Link
                    className="LinkHover"
                    to="#"
                  >
                    Monitor
                  </Link>
                </li>
                <li className="sub-item">
                  <Link
                    className="LinkHover"
                    to="#"
                  >
                    Networking
                  </Link>
                </li>
                <li className="sub-item">
                  <Link
                    className="LinkHover"
                    to="#"
                  >
                    Accessories
                  </Link>
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
            <NavLink className="LinkHover" activeclassname="active" to='/news'>News</NavLink>
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
