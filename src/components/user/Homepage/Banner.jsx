import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { bannerGroup } from "../../../structures/UserStructure";

const Banner = () => {
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
