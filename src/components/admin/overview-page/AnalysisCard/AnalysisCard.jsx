import styles from "./AnalysisCard.module.css"
import { analysisCard } from "../../../../structures/AdminStructure";

const AnalysisCard = () => {
  return (
    <>
      <div className="row">
        {analysisCard.map((card) => {
          const compareClass = card.compareClass
          const styledCompareClass = compareClass.split(" ").map((compare) => styles[compare])

          const cardCompare = card.cardCompare
          const splittedCardCompare = cardCompare.split(" ")

          return (
            <div key={card.cardTitle} className="col-12 col-sm-6 col-md-4">
              <div className={styles.analysisCard}>
                <div className={styles.analysisLogo}>
                  <i className={card.cardLogo}></i>
                  <p className={styles.analysisTitle}>{card.cardTitle}</p>
                </div>

                <div className="analysis-detail">
                  <h2 className="total-revenue">{card.totalRevenue}</h2>
                  <p className={styles.analysisCompare}>
                    <i className={`${cardCompare} ${styles[splittedCardCompare[2]]}`}></i>
                    <span className={styledCompareClass}>{card.compareNumber}%</span> Balance
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnalysisCard;
