import { Col, Container, Row } from "react-bootstrap";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <>
      {/* Contact Section */}
      <div className={styles.contactSection}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className={styles.wrapContactInput}>
                <div className={styles.contactTitle}>
                  <h3>We would love to hear from you</h3>
                  <p className={styles.subContactTitle}>
                    Please leave us a message or even a feedback that can make
                    us improve our services better for you guys!
                  </p>
                </div>
                <div className={styles.contactInput}>
                  <div
                    className={`${styles.customFormFloating} form-floating mb-3`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">
                      Name<span>*</span>
                    </label>
                  </div>
                  <div
                    className={`${styles.customFormFloating} form-floating mb-3`}
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">
                      Email Address<span>*</span>
                    </label>
                  </div>
                  <div
                    className={`${styles.customFormFloating} form-floating mb-3`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">
                      Phone Number<span>*</span>
                    </label>
                  </div>
                </div>
                <div className={styles.thoughtInput}>
                  <textarea
                    className="form-control"
                    id="user-review"
                    placeholder="Your Thought"
                    rows={8}
                    defaultValue={""}
                  />
                  <label htmlFor="user-review" className="form-label" />
                </div>
                <div className={styles.sendButton}>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={4}>
              <div className={styles.wrapContactInfo}>
                <div>
                  <h3>Our Store</h3>
                  <p className={styles.subContactTitle}>
                    Alley 53 Nguyen Ngoc Vu Street, Ha Noi
                  </p>
                  <p className={styles.subContactTitle}>
                    Phone: 098 378 5848 <br />
                    Email: nghiatruong110700@gmail.com
                  </p>
                </div>
                <div className={styles.contactForHire}>
                  <h3>Contact for Hire</h3>
                  <p className={styles.subContactTitle}>
                    We are currently available many positions and we are really
                    looking forward to have new staffs for our team!
                  </p>
                  <p className={styles.subContactTitle}>
                    Email for Work: technophileHR@gmail.com <br />
                    Phone: 1900 2000
                  </p>
                </div>
                <div className="opening-hour">
                  <h3>Opening Hours</h3>
                  <p className={styles.subContactTitle}>
                    Monday to Saturday: 9am - 10pm <br />
                    Sundays: 10am - 6pm
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactSection;
