import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryNav from "../../components/admin/modify-product/CategoryNav";
import { adminTabContext } from "../../contexts/Contexts";
import AdminProductForm from "../../components/admin/modify-product/AdminProductForm";

const CreateProduct = () => {
  const [activeTab, setActiveTab] = useState("basicInfo");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="product-listing">
        <div className="listing-header">
          <p className="chart-title">Add New Product</p>
          <Link to="/dashboard/products">
            <button className="add-product">Back</button>
          </Link>
        </div>

        <adminTabContext.Provider value={{ activeTab, handleActive }}>
          <CategoryNav />

          <AdminProductForm />
        </adminTabContext.Provider>
      </div>
    </>
  );
};

export default CreateProduct;
