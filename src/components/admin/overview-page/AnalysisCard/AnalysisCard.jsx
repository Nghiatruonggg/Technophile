import styles from "./AnalysisCard.module.css"
import { analysisCard } from "../../../../structures/AdminStructure";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const AnalysisCard = () => {
  return (
    <>
      <Row>
        {analysisCard.map((card) => {
          const compareClass = card.compareClass
          // const styledCompareClass = compareClass.split(" ").map((compare) => styles[compare])

          const cardCompare = card.cardCompare
          // const splittedCardCompare = cardCompare.split(" ")

          return (
            <Col xs={12} sm={6} md={4} key={card.cardTitle}>
              <div className={styles.analysisCard}>
                <div className={styles.analysisLogo}>
                  <FontAwesomeIcon className={styles.cardLogo} icon={card.cardLogo}></FontAwesomeIcon>
                  <p className={styles.analysisTitle}>{card.cardTitle}</p>
                </div>

                <div className="analysis-detail">
                  <h2 className="total-revenue">{card.totalRevenue}</h2>
                  <p className={styles.analysisCompare}>
                    <FontAwesomeIcon className={`${styles.commonIcon} ${styles[card.compareCustom]}`} icon={card.cardCompare}></FontAwesomeIcon>
                    <span className={styles[compareClass]}>{card.compareNumber}%</span> Balance
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AnalysisCard;
