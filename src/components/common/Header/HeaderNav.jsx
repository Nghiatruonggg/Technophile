import React from "react";
import { Link, NavLink } from "react-router-dom";
import TechnophileLogo from "../../../assets/common/images/Technophile Logo/Transparent V2/Logo LM V2.png";
import TopLeftNav from "./HeaderNav/TopLeftNav";
import CenterNav from "./HeaderNav/CenterNav";
import TopRightNav from "./HeaderNav/TopRightNav";


const HeaderNav = () => {
  return (
    <>
      {/* Main Menu */}
      <div className="main-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-md-12">
              <div className="wrap-menu">

                <TopLeftNav TechnophileLogo={TechnophileLogo}/>
        
                <CenterNav TechnophileLogo={TechnophileLogo}/>


                <TopRightNav />
              </div>

              
            </div>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="search-mobile">
                <input type="text" placeholder="What ya looking?" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
