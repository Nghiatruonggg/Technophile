import React, { useState } from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { mobile_categories } from "../../../../untils/variable";
import Pagination from "../../../common/Pagination";

const ProductRow = ({currentPage, productPerPage}) => {


    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage;



  const { data, isLoading } = useCallAPI(mobile_categories);
  console.log(data);


  if (isLoading) return <p>Data is Loading</p>;

  const currentItems = data.slice(firstProductIndex, lastProductIndex);
  console.log(currentItems);

  return (
    <>
      <div className="product-row">
        <div className="row-custom row-js">
          {currentItems.map((product) => {
            return (
              <div key={product.id} className="column column-3 column-2">
                <div className="wrap-product">
                  <div className="product-image">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                    />
                  </div>

                  <div className="product-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                  </div>

                  <div className="cart-product-button">
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
