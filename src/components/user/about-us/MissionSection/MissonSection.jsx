import { Col, Container, Row } from "react-bootstrap";
import AboutUs2 from "../../../../assets/common/images/About Us Section/AU-2.jpg";
import styles from "./MissionSection.module.css";
const MissonSection = () => {
  return (
    <>
      {/* Mission Section */}
      <div className={styles.missionSection}>
        <Container>
          <Row id="wrap-info-section">
            <Col xs={12} sm={12} md={7}>
              <div className={styles.infoText}>
                <div className={styles.wrapInfoText}>
                  <div className="sub-info-title">
                    <p>
                      <i className="fa-solid fa-users-line" />
                      Our Mission
                    </p>
                    <h2>Connecting People Through Technology</h2>
                  </div>
                  <div className={styles.infoDetail}>
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
            </Col>

            <Col xs={12} sm={12} md={5}>
              <div className={styles.infoImage}>
                <img src={AboutUs2} alt="Technophile Mission" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MissonSection;
