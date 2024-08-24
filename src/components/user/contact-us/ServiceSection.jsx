import React from "react";
import Service1 from "../../../assets/common/images/Service Graphic/service1.webp"
import Service2 from "../../../assets/common/images/Service Graphic/service2.webp"
import Service3 from "../../../assets/common/images/Service Graphic/service3.webp"
import Service4 from "../../../assets/common/images/Service Graphic/service4.webp"




const ServiceSection = () => {
    const serviceGraphic = [Service1, Service2, Service3, Service4];
  return (
    <>
      {/* Service Section */}
      <div className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <div className="wrap-service">
                <div className="service-image">
                  <img
                    src={serviceGraphic[0]}
                    alt="Fast And Secure Delivery"
                  />
                </div>
                <div className="service-text">
                  <p className="upper-text">Fast and Secure Delivery</p>
                  <p className="bottom-text">Always be on time</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3 ">
              <div className="wrap-service">
                <div className="service-image">
                  <img
                    src={serviceGraphic[1]}
                    alt="Money Back"
                  />
                </div>
                <div className="service-text">
                  <p className="upper-text">Money Back Guarantee</p>
                  <p className="bottom-text">Within 14 days</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <div className="wrap-service fix-1">
                <div className="service-image">
                  <img
                    src={serviceGraphic[2]}
                    alt="48 Hours Return Policy"
                  />
                </div>
                <div className="service-text">
                  <p className="upper-text">48 Hours Return Policy</p>
                  <p className="bottom-text">Assist the best we can</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <div className="wrap-service fix-2">
                <div className="service-image">
                  <img
                    src={serviceGraphic[3]}
                    alt="Live Support"
                  />
                </div>
                <div className="service-text ">
                  <p className="upper-text">Pro Quality Support</p>
                  <p className="bottom-text">24/7 Live Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
