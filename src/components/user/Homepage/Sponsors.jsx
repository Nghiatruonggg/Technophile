import React from "react";

// Import Images
import AppleLogo from "../../../assets/common/images/Sponsor Logo/Apple-Logo-2048x1152.png"
import AsusLogo from "../../../assets/common/images/Sponsor Logo/AsusTek-black-logo.png"
import LGLogo from "../../../assets/common/images/Sponsor Logo/LG Logo.png"
import SamsungLogo from "../../../assets/common/images/Sponsor Logo/Samsung Logo.png"


const Sponsors = () => {
  return (
    <>
      {/* Sponsors */}
      <div className="sponsor-section">
        <div className="container">
          {/* Sponsor Title */}
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              <h2 className="sponsor-title">Sponsored By</h2>
            </div>
            {/* Sponsor Logo */}
            <div className="wrap-sponsor-logo">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="logo-box">
                    <img
                      src={AppleLogo}
                      alt="AppleLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="logo-box asus-logo">
                    <img
                      src={AsusLogo}
                      alt="AsusLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="logo-box">
                    <img
                      src={LGLogo}
                      alt="LGLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="logo-box">
                    <img
                      src={SamsungLogo}
                      alt="SamsungLogo"
                    />
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

export default Sponsors;
