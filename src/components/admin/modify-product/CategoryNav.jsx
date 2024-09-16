import React, { useContext } from "react";
import { adminTabContext } from "../../../contexts/Contexts";

const CategoryNav = () => {
    const tabFunction = useContext(adminTabContext);
    const {activeTab, handleActive} = tabFunction
  return (
    <div className="category-section">
      <button className={activeTab == "basicInfo" ? "active" : ""} onClick={() => handleActive("basicInfo")}>Basic Info</button>
      <button className={activeTab == "detailInfo" ? "active" : ""} onClick={() => handleActive("detailInfo")}>Detail Info</button>
      <button className={activeTab == "productSpecs" ? "active" : ""} onClick={() => handleActive("productSpecs")}>Specifications</button>
    </div>
  );
};

export default CategoryNav;
