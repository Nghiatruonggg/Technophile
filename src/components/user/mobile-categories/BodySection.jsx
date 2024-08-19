import React, { useState } from "react";
import FilterInfo from "./BodySection/FilterInfo";
import ProductRow from "./BodySection/ProductRow";
import BelowButtons from "./BodySection/BelowButtons";
import Pagination from "../../common/Pagination";
import useCallAPI from "../../../hooks/useCallAPI";
import { mobile_categories } from "../../../untils/variable";

const BodySection = () => {
  const { data } = useCallAPI(mobile_categories);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(6);
  return (
    <>
      <div className="body-section">
        <div className="container">
          <FilterInfo />
          <ProductRow
            currentPage={currentPage}
            productPerPage={productPerPage}
          />
        </div>
      </div>

      <Pagination totalProducts = {data.length} productPerPage = {productPerPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default BodySection;
