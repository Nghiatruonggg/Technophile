import styles from "../Subbanner/Subbanner.module.css"

const Subbanner = () => {
  return (
    <>
      {/* Sub-Banner */}
      <div className={styles.subBannerSection}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={styles.wrapSubBanner}>
                <p>
                  Get 10% off by subscribing to us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subbanner;
