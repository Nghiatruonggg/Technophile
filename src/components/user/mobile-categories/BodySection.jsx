import React, { useEffect, useState } from "react";
import FilterInfo from "./BodySection/FilterInfo";
import ProductRow from "./BodySection/ProductRow";
import Pagination from "../../common/Pagination";
import { mobile_categories } from "../../../untils/variable";
import useCallAPIwithPagination from "../../../hooks/useCallAPIwithPagination";
import { filterCategoriesContext } from "../../../contexts/Contexts";

const BodySection = () => {
  const { data, isLoading, totalPages, currentPage, setCurrentPage } =
    useCallAPIwithPagination(mobile_categories);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategoriesChecked = (event) => {
    const { id, checked } = event.target;

    // Update selected categories
    setSelectedCategories((prevCategories) => {
      if (checked) {
        return [...prevCategories, id];
      } else {
        return prevCategories.filter((category) => category !== id);
      }
    });
  };

  // Use `useEffect` to update filtered products whenever `selectedCategories` changes
  useEffect(() => {
    let filteredData = data;

    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter(({ phone_type, price_range }) => {
        const isSmartphonesSelected = selectedCategories.includes("Smartphones");
        const isFeaturePhonesSelected = selectedCategories.includes("Feature Phones")

        if (
          isSmartphonesSelected == true &&
          isFeaturePhonesSelected == true
        ) {
          return false;
        }

        return (
          selectedCategories.includes(phone_type) ||
          selectedCategories.includes(price_range)
        );
      });
    }

    setFilteredProducts(filteredData);
  }, [selectedCategories, data]);

  return (
    <>
      <div className="body-section">
        <div className="container">
          <filterCategoriesContext.Provider value={{ handleCategoriesChecked }}>
            <FilterInfo />
          </filterCategoriesContext.Provider>
          <ProductRow
            data={data}
            isLoading={isLoading}
            filteredProducts={filteredProducts}
          />
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
