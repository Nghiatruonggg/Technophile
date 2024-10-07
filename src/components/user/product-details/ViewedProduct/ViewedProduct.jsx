import ViewedRecently from "./ViewedRecently/ViewedRecently";
import styles from "./ViewedProduct.module.css"
const ViewedProduct = () => {

  return (
    <>
      <div className={styles.ViewedProductSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={styles.wrapViewedTitle}>
                <div className={styles.subViewedTitle}>
                  <p>
                    <i className="fa-solid fa-bag-shopping" />
                    Recently
                  </p>
                  <h2>Viewed Products</h2>
                </div>
              </div>
            </div>
          </div>

          <ViewedRecently styles={styles} />
        </div>
      </div>
    </>
  );
};

export default ViewedProduct;
