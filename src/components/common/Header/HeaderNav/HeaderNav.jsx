import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TechnophileLogo from "../../../../assets/common/images/Technophile Logo/Transparent V2/Logo LM V2.png";
import TopLeftNav from "./TopLeftNav";
import CenterNav from "./CenterNav";
import TopRightNav from "./TopRightNav";

const HeaderNav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menuBoxRef = useRef();


  const handleClickedOutside = (e) => {
    if (!menuBoxRef.current.contains(e.target)) {
      setIsMenuClicked(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickedOutside);
    return (
      document.removeEventListener("mousedown", handleClickedOutside)
    )
  }, [])

  return (
    <>
      {/* Main Menu */}
      <div className="main-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-md-12">
              <div className="wrap-menu">
                <TopLeftNav
                  TechnophileLogo={TechnophileLogo}
                  setIsMenuClicked={setIsMenuClicked}
                  isMenuClicked={isMenuClicked}
                />

                <CenterNav
                  TechnophileLogo={TechnophileLogo}
                  isMenuClicked={isMenuClicked}
                  setIsMenuClicked={setIsMenuClicked}
                  menuBoxRef={menuBoxRef}
                />

                <TopRightNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
