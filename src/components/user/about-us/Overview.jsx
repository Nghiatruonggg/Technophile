import React from "react";
import AboutUs1 from "../../../assets/common/images/About Us Section/AU-1.webp"

const Overview = () => {
  return (
    <>
      {/* Overview Section */}
      <div className="overview-section">
        <div className="container">
          <div className="row" id="wrap-info-section">
            <div className="col-12 col-sm-12 col-md-5">
              <div className="info-image">
                <img src={AboutUs1} alt="Customer having a good time" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7">
              <div className="info-text">
                <div className="wrap-info-text">
                  <div className="sub-info-title">
                    <p>
                      <i className="fa-solid fa-basket-shopping" />
                      About Us
                    </p>
                    <h2>Your Ultimate Online Tech Retail Destination</h2>
                  </div>
                  <div className="info-detail">
                    <p>
                      Welcome to Technophile, your go-to shop for the latest
                      gadgets, cutting-edge electronics, and top accessories.
                      From smartphones and laptops to smart home devices and
                      gaming gear, we have everything you need. Enjoy a seamless
                      shopping experience and discover the future of technology
                      with Technophile!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
