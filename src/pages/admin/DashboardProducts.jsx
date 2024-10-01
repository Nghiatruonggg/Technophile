import React, { useEffect } from "react";
import ProductTable from "../../components/admin/product-manage/ProductTable";
import useCallAPIwithPagination from "../../hooks/useCallAPIwithPagination";
import { mobile_categories } from "../../untils/variable";
import AdminPagination from "../../components/admin/common/AdminPagination";
import { useDispatch } from "react-redux";
import { getProduct } from "../../reducers/productCRUDSlice";
import { Link } from "react-router-dom";

const DashboardProducts = () => {
  const { data, isLoading, totalPages, currentPage, setCurrentPage } =
    useCallAPIwithPagination(mobile_categories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getProduct(data));
    }
  }, [data]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="common-listing">
            <div className="listing-header">
              <p className="chart-title">Product Listing</p>
              <Link to="/dashboard/products/add">
                <button className="add-product">Add New Product</button>
              </Link>
            </div>

            <div className="product-manage">
              <ProductTable data={data} isLoading={isLoading} setCurrentPage={setCurrentPage} />
            </div>

            <AdminPagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProducts;
