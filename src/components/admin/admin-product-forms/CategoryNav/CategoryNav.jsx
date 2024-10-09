import styles from "./CategoryNav.module.css"
const CategoryNav = ({ handleActive, activeTab }) => {
  return (
    <div className={styles.categorySection}>
      <button
        onClick={() => handleActive("basicInfo")}
        className={activeTab == "basicInfo" ? `${styles.active}` : ""}
      >
        Basic Info
      </button>
      <button
        onClick={() => handleActive("detailInfo")}
        className={activeTab == "detailInfo" ? `${styles.active}` : ""}
      >
        Detail Info
      </button>
      <button
        onClick={() => handleActive("productSpecs")}
        className={activeTab == "productSpecs" ? `${styles.active}` : ""}
      >
        Specifications
      </button>
    </div>
  );
};

export default CategoryNav;
