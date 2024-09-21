import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryNav from "../../components/admin/admin-product-forms/CategoryNav";
import AdminProductForm from "../../components/admin/admin-product-forms/AdminProductForm";

const CreateProduct = () => {
    // Tab Switch Function
    const [activeTab, setActiveTab] = useState("basicInfo")

    const handleActive = (tab) => {
        setActiveTab(tab)
    }

  return (
    <>
      <div className="common-listing">
        <div className="listing-header">
          <p className="chart-title">Add New Product</p>
          <Link to="/dashboard/products">
            <button className="add-product">Back</button>
          </Link>
        </div>

      <CategoryNav handleActive={handleActive} activeTab={activeTab}/>

      <AdminProductForm activeTab={activeTab} />
      </div>
    </>
  );
};

export default CreateProduct;
