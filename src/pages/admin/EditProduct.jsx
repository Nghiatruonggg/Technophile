import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CategoryNav from '../../components/admin/modify-product/CategoryNav';
import AdminProductForm from '../../components/admin/modify-product/AdminProductForm';
import { adminTabContext } from "../../contexts/Contexts";
import useCallAPI from '../../hooks/useCallAPI';
import { mobile_categories } from '../../untils/variable';


const EditProduct = () => {
    const [activeTab, setActiveTab] = useState("basicInfo");
    
    const handleActive = (tab) => {
      setActiveTab(tab);
    };

    const {id} = useParams();
    const URL_DETAIL = mobile_categories + "/" + id
    
    const {data, isLoading} = useCallAPI(URL_DETAIL)

    return (
      <>
        <div className="product-listing">
          <div className="listing-header">
            <p className="chart-title">Edit Product</p>
            <Link to="/dashboard/products">
                <button className="add-product">Back</button>
            </Link>
          </div>
  
          <adminTabContext.Provider value={{activeTab, handleActive}}>
            <CategoryNav />
            {isLoading ? <p>Loading..</p> : <AdminProductForm oldData={data} URL_DETAIL={URL_DETAIL}/> }
          </adminTabContext.Provider>
        </div>
      </>
    );
}

export default EditProduct
