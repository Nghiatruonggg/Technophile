import React, { useEffect, useState } from "react";
import FilterInfo from "./BodySection/components/FilterInfo";
import ProductRow from "./BodySection/components/ProductRow";
import Pagination from "../UserPagination/UserPagination";
import { mobile_categories } from "../../../untils/variable";
import useCallAPI from "../../../hooks/useCallAPI";
import styles from "../mobile-categories/BodySection.module.css"

const BodySection = () => {
  const { data, isLoading } = useCallAPI(mobile_categories);

  // search categories and filtered products
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(6);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const productSlice = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

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
          <FilterInfo handleCategoriesChecked={handleCategoriesChecked} styles={styles} />
          <ProductRow
            isLoading={isLoading}
            productSlice={productSlice}
            styles={styles}
          />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProduct={filteredProducts.length}
        productPerPage={productPerPage}
      />
    </>
  );
};

export default BodySection;
