import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import Images
import Banner1 from "../../assets/common/images/Banner_LandingPage/Banner Des 1.png"
import Banner2 from "../../assets/common/images/Banner_LandingPage/Banner Des 2.png"
import Banner3 from "../../assets/common/images/Banner_LandingPage/Banner Des 3.png"


const Banner = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner ">
        <OwlCarousel className="owl-theme" items={1}>
          <div className="item">
            <img
              src={Banner1}
              alt="Banner1"
            />
          </div>
          <div className="item">
            <img
              src={Banner2}
              alt="Banner2"
            />
          </div>
          <div className="item">
            <img
              src={Banner3}
              alt="Banner3"
            />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Banner;
