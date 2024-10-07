import React from "react";

const DescriptionContent = ({ data, styles }) => {
  return (
    <>
      <div className={`row ${styles.wrapProductDescription}`}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className={styles.wrapDescriptionSection}>
            <h2 className={styles.descriptionTitle}>
              {data.description_title_1}
            </h2>
            <p className="description-text">{data.description_text_1}</p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12">
          <div className={styles.wrapDescriptionSection}>
            <h2 className={styles.descriptionTitle}>{data.description_title_2}</h2>
            <p className="description-text">{data.description_text_2}</p>
            <h5 className={styles.descriptionSubtitle}>
              {data.description_sub_title_1}
            </h5>
            <p className="description-text">{data.description_text_3}</p>
            <div className={styles.descriptionImage}>
              <img src={data.description_image_1} alt={data.name} />
            </div>
            <p className="description-text">{data.description_text_4}</p>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12">
          <div className={styles.wrapDescriptionSection}>
            <h5 className={styles.descriptionSubtitle}>
              {data.description_sub_title_2}
            </h5>
            <p className="description-text">{data.description_text_5}</p>
            <div className={styles.descriptionImage}>
              <img src={data.description_image_2} alt={data.name} />
            </div>
            <p className="description-text">{data.description_text_6}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionContent;
