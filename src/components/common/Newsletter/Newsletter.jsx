import React from "react";
import newsletterImg from "../../../assets/common/images/Newsletter section/Adjusted bgimg.png"
import styles from "../Newsletter/Newsletter.module.css"
const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
