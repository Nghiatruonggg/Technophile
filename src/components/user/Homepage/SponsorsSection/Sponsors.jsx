// Import Images
import { sponsorGroup } from "../../../../structures/UserStructure";
import styles from "../SponsorsSection/sponsorsSection.module.css"

console.log(styles);

const Sponsors = () => {
  return (
    <>
      {/* Sponsors */}
      <div className={styles.sponsorSection}>
        <div className="container">
          {/* Sponsor Title */}
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              <h2 className={styles.sponsorTitle}>Sponsored By</h2>
            </div>
            {/* Sponsor Logo */}
            <div className={styles.wrapSponsorLogo}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className={styles.logoBox}>
                    <img
                      src={sponsorGroup[0]}
                      alt="AppleLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className={`${styles.logoBox} ${styles.asusLogo}`}>
                    <img
                      src={sponsorGroup[1]}
                      alt="AsusLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className={`${styles.logoBox}`}>
                    <img
                      src={sponsorGroup[2]}
                      alt="LGLogo"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className={styles.logoBox}>
                    <img
                      src={sponsorGroup[3]}
                      alt="SamsungLogo"
                    />
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

export default Sponsors;
