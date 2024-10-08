import React from "react";
import newsletterImg from "../../../assets/common/images/Newsletter section/Adjusted bgimg.png"
import styles from "../Newsletter/Newsletter.module.css"
import { Col, Container, Row } from "react-bootstrap";
const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <Container >
          <Row >
            <Col >
              <div className={styles.newsletterBg }>
                <img className={styles.newsImg}
                  src={newsletterImg}
                  alt="Newsletter-img"
                />
                <div className={styles.newsletterText}>
                  <div className={`${styles.subNewsletterTitle} sub-title`}>
                    <p>
                      <i className="fa-regular fa-envelope" />
                      Newsletter
                    </p>
                    <h2>Get Weekly Update</h2>
                    <div className={styles.newsletterInput}>
                      <input type="text" placeholder="example@gmail.com" />
                      <button type="submit">Submit</button>
                    </div>
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

export default Newsletter;
