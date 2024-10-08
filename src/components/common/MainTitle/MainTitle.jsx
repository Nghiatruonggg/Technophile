import React from "react";
import titleImage from "../../../assets/common/images/Title Image/Samsung-Galaxy-S24-Ultra-Violet-PNG.png";
import styles from "../MainTitle/MainTitle.module.css"
import { Col, Container, Row } from "react-bootstrap";

const MainTitle = ({pageSubName, pageName}) => {
  return (
    <>
      <div className={styles.mainTitleSection}>
        <Container>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainTitle;
