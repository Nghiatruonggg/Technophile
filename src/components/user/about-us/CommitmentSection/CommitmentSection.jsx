import React from "react";
import AboutUs3 from "../../../../assets/common/images/About Us Section/AU-3.jpg"
import styles from "../CommitmentSection/CommitmentSection.module.css"

const CommitmentSection = () => {
  return (
    <>
      {/* Commitment Section */}
      <div className={styles.commitmentSection}>
        <div className="container">
          <div className="row" id="wrap-info-section">
            <div className="col-12 col-sm-12 col-md-5">
              <div className={styles.infoImage}>
                <img src={AboutUs3} alt="Technophile Commitment" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7">
              <div className={styles.infoText}>
                <div className={styles.wrapInfoText}>
                  <div className="sub-info-title">
                    <p>
                      <i className="fa-solid fa-code-commit" />
                      Our Commitment
                    </p>
                    <h2>Committed to Excellence in Customer Service</h2>
                  </div>
                  <div className={styles.infoDetail}>
                    <p>
                      At Technophile, we are dedicated to providing the best
                      service to our customers. Our commitment to excellence
                      ensures a seamless shopping experience, from the moment
                      you browse our products to the moment they arrive at your
                      door. Trust us to deliver top-quality tech with unmatched
                      support and care.
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

export default CommitmentSection;
