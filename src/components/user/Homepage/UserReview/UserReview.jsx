import React from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { user_reviews } from "../../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options2 } from "../../../../untils/third-lib";
import styles from "../UserReview/UserReview.module.css";

const UserReview = () => {
  const { data, isLoading } = useCallAPI(user_reviews);

  return (
    <>
      {/* User Review */}
      <div className={styles.userReview}>
        {/* User Review Title */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={`${styles.subUserReviewTitle} sub-title`}>
                <p>
                  <i className="fa-solid fa-users" />
                  Community
                </p>
                <h1>User Review</h1>
              </div>
            </div>
          </div>

          {/* User Review Main */}
          <div className={styles.wrapMainReview}>
            <div className={styles.userReviewMain}>
              <OwlCarousel className="owl-theme" {...options2}>
                {data.map((user) => {
                  return (
                    <div key={user.id} className="item">
                      <div className={styles.wrapUserReview}>
                        <div>
                          <img
                            className={styles.reviewImage}
                            src={user.image_url}
                            alt={user.user_name}
                          />
                          <div className={styles.userReviewName}>
                            <p>
                              <b>{user.user_name}</b>
                            </p>
                            <p>
                              <b>{user.job_role}</b>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p>{user.review_description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserReview;
