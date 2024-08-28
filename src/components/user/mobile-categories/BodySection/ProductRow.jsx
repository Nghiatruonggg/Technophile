import React, { useEffect, useState } from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { mobile_categories } from "../../../../untils/variable";
import Pagination from "../../../common/Pagination";
import { Link } from "react-router-dom";
import useCallAPIwithPagination from "../../../../hooks/useCallAPIwithPagination";

const ProductRow = ({ data, isLoading }) => {
  if (isLoading) return <p>Data is Loading</p>;

  return (
    <>
      <div className="product-row">
        <div className="row-custom row-js">
          {data.map((product) => {
            return (
              <div key={product.id} className="column column-3 column-2">
                <Link
                  to={`/mobile-categories/${product.id}`}
                >
                  <div className="wrap-product">
                    <div className="product-image">
                      <img src={product.mainImage} alt={product.name} />
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
