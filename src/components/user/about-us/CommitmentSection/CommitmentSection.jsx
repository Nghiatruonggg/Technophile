import React from "react";
import AboutUs3 from "../../../../assets/common/images/About Us Section/AU-3.jpg"
import styles from "../CommitmentSection/CommitmentSection.module.css"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCommit } from "@fortawesome/free-solid-svg-icons";

const CommitmentSection = () => {
  return (
    <>
      {/* Commitment Section */}
      <div className={styles.commitmentSection}>
        <Container>
          <Row id="wrap-info-section">
            <Col xs={12} sm={12} md={5}>
              <div className={styles.infoImage}>
                <img src={AboutUs3} alt="Technophile Commitment" />
              </div>
            </Col>

            <Col xs={12} sm={12} md={7} >
              <div className={styles.infoText}>
                <div className={styles.wrapInfoText}>
                  <div className="sub-info-title">
                    <p>
                      <FontAwesomeIcon icon={faCodeCommit} className="sub-icon" />
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CommitmentSection;
