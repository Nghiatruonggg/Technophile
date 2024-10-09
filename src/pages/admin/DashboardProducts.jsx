import React, { useEffect } from "react";
import ProductTable from "../../components/admin/product-manage/ProductTable/ProductTable";
import useCallAPIwithPagination from "../../hooks/useCallAPIwithPagination";
import { mobile_categories } from "../../untils/variable";
import AdminPagination from "../../components/admin/common/AdminPagination/AdminPagination";
import { useDispatch } from "react-redux";
import { getProduct } from "../../reducers/productCRUDSlice";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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
      <Row>
        <Col>
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
        </Col>
      </Row>
    </>
  );
};

export default DashboardProducts;
