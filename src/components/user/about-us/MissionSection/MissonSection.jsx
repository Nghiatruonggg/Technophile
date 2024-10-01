import AboutUs2 from "../../../../assets/common/images/About Us Section/AU-2.jpg"

const MissonSection = () => {
  return (
    <>
      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <div className="row" id="wrap-info-section">
            <div className="col-12 col-sm-12 col-md-7">
              <div className="info-text">
                <div className="wrap-info-text">
                  <div className="sub-info-title">
                    <p>
                      <i className="fa-solid fa-users-line" />
                      Our Mission
                    </p>
                    <h2>Connecting People Through Technology</h2>
                  </div>
                  <div className="info-detail">
                    <p>
                      At Technophile, our mission is to connect people with the
                      latest in technology. We believe that tech has the power
                      to bring people together, and we strive to make
                      cutting-edge gadgets and electronics accessible to
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5">
              <div className="info-image">
                <img src={AboutUs2} alt="Technophile Mission" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissonSection;
