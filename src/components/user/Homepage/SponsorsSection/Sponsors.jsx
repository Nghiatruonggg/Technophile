// Import Images
import { Col, Container, Row } from "react-bootstrap";
import { sponsorGroup } from "../../../../structures/UserStructure";
import styles from "../SponsorsSection/sponsorsSection.module.css";

const Sponsors = () => {
  return (
    <>
      {/* Sponsors */}
      <div className={styles.sponsorSection}>
        {/* Sponsor Title */}
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sponsorTitle}>Sponsored By</h2>
            </Col>

            {/* Sponsor Logo */}
            <div className={styles.wrapSponsorLogo}>
              <Row>
                <Col xs={12} sm={6} md={3}>
                  <div className={styles.logoBox}>
                    <img src={sponsorGroup[0]} alt="AppleLogo" />
                  </div>
                </Col>

                <Col xs={12} sm={6} md={3}>
                  <div className={`${styles.logoBox} ${styles.asusLogo}`}>
                    <img src={sponsorGroup[1]} alt="AsusLogo" />
                  </div>
                </Col>

                <Col xs={12} sm={6} md={3}>
                  <div className={`${styles.logoBox}`}>
                    <img src={sponsorGroup[2]} alt="LGLogo" />
                  </div>
                </Col>

                <Col xs={12} sm={6} md={3}>
                  <div className={styles.logoBox}>
                    <img src={sponsorGroup[3]} alt="SamsungLogo" />
                  </div>
                </Col>
              </Row>

            </div>
            
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sponsors;
