import { Col, Container, Row } from "react-bootstrap";
import styles from "../Subbanner/Subbanner.module.css";

const Subbanner = () => {
  return (
    <>
      {/* Sub-Banner */}
      <div className={styles.subBannerSection}>
        <div className={styles.customContainer}>
          <Row>
            <Col>
              <div className={styles.wrapSubBanner}>
                <p>Get 10% off by subscribing to us!</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Subbanner;
