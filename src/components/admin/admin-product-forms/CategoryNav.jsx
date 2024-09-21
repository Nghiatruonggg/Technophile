const CategoryNav = ({ handleActive, activeTab }) => {
  return (
    <div className="category-section">
      <button
        onClick={() => handleActive("basicInfo")}
        className={activeTab == "basicInfo" ? "active" : ""}
      >
        Basic Info
      </button>
      <button
        onClick={() => handleActive("detailInfo")}
        className={activeTab == "detailInfo" ? "active" : ""}
      >
        Detail Info
      </button>
      <button
        onClick={() => handleActive("productSpecs")}
        className={activeTab == "productSpecs" ? "active" : ""}
      >
        Specifications
      </button>
    </div>
  );
};

export default CategoryNav;
