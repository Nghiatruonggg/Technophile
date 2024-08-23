import React from "react";
import titleImage from "../../assets/common/images/Title Image/Samsung-Galaxy-S24-Ultra-Violet-PNG.png";

const MainTitle = ({pageSubName, pageName}) => {
  return (
    <>
      <div className="main-title-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-main-title">
                <div className="main-sub-title">
                  <p>Home |</p>
                  <span>{pageSubName}</span>
                  <h1>{pageName}</h1>
                </div>
                <div className="title-image">
                  <img src={titleImage} alt="title-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
