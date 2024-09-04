import React, { useState } from "react";
import FilterInfo from "./BodySection/FilterInfo";
import ProductRow from "./BodySection/ProductRow";
import BelowButtons from "./BodySection/BelowButtons";
import Pagination from "../../common/Pagination";
import useCallAPI from "../../../hooks/useCallAPI";
import { mobile_categories } from "../../../untils/variable";
import useCallAPIwithPagination from "../../../hooks/useCallAPIwithPagination";
import { cartContext } from "../../../contexts/Contexts";
import useCartClicked from "../../../hooks/useCartClicked";

const BodySection = () => {
  const { data, isLoading, totalPages, currentPage, setCurrentPage } =
    useCallAPIwithPagination(mobile_categories);

  // const { isCartClicked, setIsCartClicked, handleCartClicked } =
  //   useCartClicked();
    
  return (
    <>
      <div className="body-section">
        <div className="container">
          <FilterInfo />
          {/* <cartContext.Provider
            value={{
              isCartClicked,
              setIsCartClicked,
              handleCartClicked,
            }}
          > */}
            <ProductRow data={data} isLoading={isLoading} />
          {/* </cartContext.Provider> */}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default BodySection;
