import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import Images
import Banner1 from "../../../assets/common/images/Banner_LandingPage/Banner Des 1.png";
import Banner2 from "../../../assets/common/images/Banner_LandingPage/Banner Des 2.png";
import Banner3 from "../../../assets/common/images/Banner_LandingPage/Banner Des 3.png";

const Banner = () => {
  const bannerGroup = [Banner1, Banner2, Banner3];

  return (
    <>
      {/* Banner */}
      <div className="banner ">
        <OwlCarousel className="owl-theme" items={1} nav={true}>
          {bannerGroup.map((banner, index) => {
            return (
              <div key={index} className="item">
                <img src={banner} alt="Banner1" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Banner;
