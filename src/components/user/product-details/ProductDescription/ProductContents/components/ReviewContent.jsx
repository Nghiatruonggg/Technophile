import React from "react";
import reviewImg from "../../../../../../assets/common/images/Product Detail/uifaces-popular-image.jpg";
import { Col, Form, Row } from "react-bootstrap";

const ReviewContent = ({ styles }) => {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <div className={styles.reviewTitle}>
            <h2 className={styles.sectionTitle}>Reviews</h2>
          </div>
        </Col>

        <Col xs={12} sm={12} md={5}>
          <div className={styles.showReviewSection}>
            <h5 className={styles.sectionTitle}>1 Review for this Product</h5>
            <div className={styles.showUserReview}>
              <div className={styles.userAvatar}>
                <img src={reviewImg} alt="User-1" />
              </div>
              <div className="review-detail">
                <div className={styles.userInfo}>
                  <p className={styles.sectionTitle}>Nick Cannon</p>
                  <div className={styles.starIcon}>
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                </div>
                <div className={styles.reviewText}>
                  <p>
                    It was a really wonderful day with the staff of Technophile
                    that I can finally choose the phone that really suits me!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} className="col-12 col-sm-12 col-md-7">
          <div className={styles.fillReviewSection}>
            <h5 className={styles.sectionTitle}>Add a Review</h5>
            <p>
              Please fill all the information required to submit this review.
              Thank you for your time!
            </p>

            <Form className={styles.inputReviewInfo}>
              <div className="review-input">
                <textarea
                  className="form-control"
                  id="user-review"
                  placeholder="Your Comment"
                  rows={8}
                  defaultValue={""}
                />
                <label htmlFor="user-review" className="form-label" />
              </div>
              <div className={styles.infoInput}>
                <div className={`${styles.customFormFloating} form-floating mb-3`}>
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
                <div className={`${styles.customFormFloating} form-floating`}>
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
              </div>
              <div className={styles.submitButton}>
                <button type="submit">Submit Comment</button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ReviewContent;
