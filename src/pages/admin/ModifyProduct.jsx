import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryNav from "../../components/admin/modify-product/CategoryNav";
import BasicInfoForm from "../../components/admin/modify-product/product-forms/BasicInfoForm";
import { adminTabContext } from "../../contexts/Contexts";
import AdminProductForm from "../../components/admin/modify-product/AdminProductForm";

const ModifyProduct = () => {
  const [activeTab, setActiveTab] = useState("basicInfo");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <div className="product-listing">
        <div className="listing-header">
          <p className="chart-title">Add New Product</p>
          <button className="add-product">
            <Link to="/dashboard/products">Back</Link>
          </button>
        </div>

        <adminTabContext.Provider value={{activeTab, handleActive}}>
          <CategoryNav />

          <AdminProductForm/>
        </adminTabContext.Provider>
      </div>
    </>
  );
};

export default ModifyProduct;
