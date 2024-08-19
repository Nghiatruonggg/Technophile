import React from "react";
import useCallAPI from "../../../hooks/useCallAPI";
import { user_reviews } from "../../../untils/variable";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const UserReview = () => {
  const { data, isLoading } = useCallAPI(user_reviews);
  
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      {/* User Review */}
      <div className="user-review">
        {/* User Review Title */}
        <div className="container">
          <div className="row" id="user-review-title">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="sub-user-review-title sub-title">
                <p>
                  <i className="fa-solid fa-users" />
                  Community
                </p>
                <h1>User Review</h1>
              </div>
            </div>
          </div>

          {/* User Review Main */}
          <div className="wrap-main-review">
            <div className="user-review-main">
              <OwlCarousel className="owl-theme" {...options}>
                {data.map((user) => {
                  return (
                    <div key={user.id} className="item">
                      <div className="wrap-user-review">
                        <div className="wrap-review-image">
                          <img
                            src={user.image_url}
                            alt={user.user_name}
                          />
                          <div className="user-review-name">
                            <p>
                              <b>{user.user_name}</b>
                            </p>
                            <p>{user.job_role}</p>
                          </div>
                        </div>
                        <div className="wrap-review-text">
                          <p>
                            {user.review_description}
                          </p>
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
