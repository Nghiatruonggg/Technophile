import React from "react";

const TopInfo = ({data, styles}) => {
  console.log(data)
  return (
    <>
      <div className={styles.wrapTopInfo}>
        <h2 className={styles.productName}>{data.name}</h2>
        <span className={styles.productPrice}>${data.price}</span>
        <div className={styles.productRating}>
          <div className={styles.starIcon}>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p className={styles.ratingNumber}>{`(${data.rating_numbers} reviews)`}</p>
        </div>
      </div>
    </>
  );
};

export default TopInfo;
