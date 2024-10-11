import React from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { user_reviews } from "../../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options2 } from "../../../../untils/third-lib";
import styles from "../UserReview/UserReview.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const UserReview = () => {
  const { data, isLoading } = useCallAPI(user_reviews);

  if (isLoading)
    return (
      <div className={styles.userReview}>
        {/* User Review Title */}
        <Container>
          <Row>
            <Col>
              <div className={`${styles.subUserReviewTitle} sub-title`}>
                <p>
                  <FontAwesomeIcon icon={faUsers} className="icon" />
                  Community
                </p>
                <h1>User Review</h1>
              </div>
            </Col>
          </Row>

          <p>Data is Loading</p>
        </Container>
      </div>
    );

  return (
    <>
      {/* User Review */}
      <div className={styles.userReview}>
        {/* User Review Title */}
        <Container>
          <Row>
            <Col>
              <div className={`${styles.subUserReviewTitle} sub-title`}>
                <p>
                  <FontAwesomeIcon icon={faUsers} className="icon" />
                  Community
                </p>
                <h1>User Review</h1>
              </div>
            </Col>
          </Row>

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
        </Container>
      </div>
    </>
  );
};

export default UserReview;
