import React, { useState } from 'react'
import CategoryNav from '../../components/admin/admin-product-forms/CategoryNav/CategoryNav'
import AdminProductForm from '../../components/admin/admin-product-forms/AdminProductForm'
import { Link, useParams } from 'react-router-dom'
import useCallAPI from '../../hooks/useCallAPI'
import { mobile_categories } from '../../untils/variable'

const EditProduct = () => {
    // Tab Switch Function
    const [activeTab, setActiveTab] = useState("basicInfo")

    const handleActive = (tab) => {
        setActiveTab(tab)
    }

    // Edit Logic
    const {id} = useParams();
    const URL_DETAIL = mobile_categories + "/" + id
    
    const {data, isLoading} = useCallAPI(URL_DETAIL)

  return (
    <div className="common-listing">
        <div className="listing-header">
          <p className="chart-title">Edit Product</p>
          <Link to="/dashboard/products">
            <button className="add-product">Back</button>
          </Link>
        </div>

      <CategoryNav handleActive={handleActive} activeTab={activeTab}/>

      <AdminProductForm activeTab={activeTab} oldData={data} isLoadingOldData={isLoading} />
      </div>
  )
}

export default EditProduct