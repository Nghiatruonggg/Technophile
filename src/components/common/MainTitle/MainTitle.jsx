import React from "react";
import titleImage from "../../../assets/common/images/Title Image/Samsung-Galaxy-S24-Ultra-Violet-PNG.png";
import styles from "../MainTitle/MainTitle.module.css"

const MainTitle = ({pageSubName, pageName}) => {
  return (
    <>
      <div className={styles.mainTitleSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={styles.wrapMainTitle}>
                <div className={styles.mainSubTitle}>
                  <p>Home |</p>
                  <span>{pageSubName}</span>
                  <h1>{pageName}</h1>
                </div>
                <div className={styles.titleImage}>
                  <img src={titleImage} alt="title-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
