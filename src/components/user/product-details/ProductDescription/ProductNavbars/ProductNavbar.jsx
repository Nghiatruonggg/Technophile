import styles from "../ProductNavbars/ProductNavbars.module.css";
const ProductNavbar = ({ activeTab, handleActive }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className={styles.wrapProductNavbar}>
            <ul>
              <li
                className={activeTab == "description" ? `${styles.active}` : ""}
                onClick={() => handleActive("description")}
              >
                <p>Description</p>
              </li>

              <li
                className={activeTab == "specification" ? `${styles.active}` : ""}
                onClick={() => handleActive("specification")}
              >
                <p>Technical Specification</p>
              </li>
              <li
                className={activeTab === "reviews" ? `${styles.active}` : ""}
                onClick={() => handleActive("reviews")}
              >
                <p>Reviews</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
