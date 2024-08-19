import React from "react";
import newsletterImg from "../../assets/common/images/Newsletter section/Adjusted bgimg.png"

const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="newsletter-bg">
                <img
                  src={newsletterImg}
                  alt="Newsletter-img"
                />
                <div className="newsletter-text">
                  <div className="sub-newsletter-title sub-title">
                    <p>
                      <i className="fa-regular fa-envelope" />
                      Newsletter
                    </p>
                    <h2>Get Weekly Update</h2>
                    <div className="newsletter-input">
                      <input type="text" placeholder="example@gmail.com" />
                      <button type="submit">Submit</button>
                    </div>
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

export default Newsletter;
