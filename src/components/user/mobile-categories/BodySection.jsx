import React, { useState } from "react";
import FilterInfo from "./BodySection/FilterInfo";
import ProductRow from "./BodySection/ProductRow";
import BelowButtons from "./BodySection/BelowButtons";
import Pagination from "../../common/Pagination";
import useCallAPI from "../../../hooks/useCallAPI";
import { mobile_categories } from "../../../untils/variable";
import useCallAPIwithPagination from "../../../hooks/useCallAPIwithPagination";

const BodySection = () => {
  const {data, isLoading, totalPages, currentPage, setCurrentPage} = useCallAPIwithPagination(mobile_categories)
  return (
    <>
      <div className="body-section">
        <div className="container">
          <FilterInfo />
          <ProductRow data={data} isLoading={isLoading}/>
        </div>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default BodySection;
