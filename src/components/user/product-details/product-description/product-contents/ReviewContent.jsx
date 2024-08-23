import React from "react";
import reviewImg from "../../../../../assets/common/images/Product Detail/uifaces-popular-image.jpg"

const ReviewContent = ({activeTab}) => {
  return (
    <>
      <div className="row" id="wrap-product-review">
        {activeTab === "reviews" && (
          <>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="review-title">
                <h2 className="section-title">Reviews</h2>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-5">
              <div className="show-review-section">
                <h5 className="section-title">1 Review for this Product</h5>
                <div className="show-user-review">
                  <div className="user-avatar">
                    <img
                      src={reviewImg}
                      alt="User-1"
                    />
                  </div>
                  <div className="review-detail">
                    <div className="user-info">
                      <p className="section-title">Nick Cannon</p>
                      <div className="star-icon">
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                      </div>
                    </div>
                    <div className="review-text">
                      <p>
                        It was a really wonderful day with the staff of
                        Technophile that I can finally choose the phone that
                        really suits me!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7">
              <div className="fill-review-section">
                <h5 className="section-title">Add a Review</h5>
                <p>
                  Please fill all the information required to submit this
                  review. Thank you for your time!
                </p>
                <div className="input-review-info">
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
                  <div className="info-input">
                    <div className="form-floating mb-3">
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
                    <div className="form-floating">
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
                  <div className="submit-button">
                    <button type="submit">Submit Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ReviewContent;
