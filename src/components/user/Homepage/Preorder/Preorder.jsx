import { orderImage } from "../../../../structures/UserStructure";
import styles from "../Preorder/Preorder.module.css";

const Preorder = () => {
  return (
    <>
      <div className={styles.preorderSection}>
        <div className="container">
          <div className={`row ${styles.wrapPreorder}`}>
            <div className="col-12 col-sm-12 col-md-6">
              <div className={styles.preorderText}>
                <div className={styles.preorderSubtitle}>
                  <i
                    className={`fa-solid fa-bookmark ${styles.preorderLogo}`}
                  />
                  <p className={styles.smallTitle}>Hot Preorder</p>
                </div>
                <h1 className={styles.preorderTitle}>
                  Enhance your <br /> Gaming Experience
                </h1>
                <div className={styles.preorderTimer}>
                  <span className={styles.timer}>00</span>
                  <span className={styles.timer}>00</span>
                  <span className={styles.timer}>00</span>
                </div>
                <button className={styles.preorderButton}>Check Now!</button>
              </div>
            </div>
            <div
              className={`col-12 col-sm-12 col-md-6 ${styles.wrapPreorderImage}`}
            >
              <div className={styles.preorderImageSection}>
                <img
                  className={styles.preorderImage}
                  src={orderImage}
                  alt="Order Now!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preorder;
