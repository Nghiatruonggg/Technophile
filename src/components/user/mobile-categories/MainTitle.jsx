import React from "react";

const MainTitle = ({titleImage}) => {
  return (
    <>
      <div className="main-title-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-main-title">
                <div className="main-sub-title">
                  <p>Home |</p>
                  <span>Product</span>
                  <h1>Mobile</h1>
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
