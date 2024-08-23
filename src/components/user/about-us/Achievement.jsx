import React from "react";
import AUGraphic1 from "../../../assets/common/images/Achievement Section/graphic-1.webp"
import AUGraphic2 from "../../../assets/common/images/Achievement Section/graphic-2.webp"
import AUGraphic3 from "../../../assets/common/images/Achievement Section/graphic-3.webp"

const Achievement = () => {
    const AUGraphics = [AUGraphic1, AUGraphic2, AUGraphic3];
  return (
    <>
      {/* Achievement Section */}
      <div className="achievement-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="wrap-achievement">
                <div className="achievement-content">
                  <img
                    src={AUGraphics[0]}
                    alt="Happy Customer"
                  />
                  <p className="main-achievement-title">
                    40,000+ Happy Customer
                  </p>
                  <p className="achievement-text">
                    Our expert team is always ready to assist, ensuring a
                    seamless and satisfying shopping experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="wrap-achievement">
                <div className="achievement-content">
                  <img
                    src={AUGraphics[2]}
                    alt="Product Selling"
                  />
                  <p className="main-achievement-title">
                    100,000+ Products Sold
                  </p>
                  <p className="achievement-text">
                    We've proudly sold over <b>100,000+</b> products to tech
                    enthusiasts worldwide over the last year and we want to sell
                    more!.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="wrap-achievement">
                <div className="achievement-content">
                  <img
                    src={AUGraphics[1]}
                    alt="High Experience"
                  />
                  <p className="main-achievement-title">
                    5 Years of Experience
                  </p>
                  <p className="achievement-text">
                    During this time, we've curated an extensive selection of
                    the latest gadgets, cutting-edge electronics, and top-tier
                    accessories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
