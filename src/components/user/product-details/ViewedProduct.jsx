import React from "react";

import ViewedRecently from "./viewed-product/ViewedRecently";

const ViewedProduct = () => {
  return (
    <>
      <div className="viewed-product-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-viewed-title">
                <div className="sub-viewed-title">
                  <p>
                    <i className="fa-solid fa-bag-shopping" />
                    Recently
                  </p>
                  <h2>Viewed Products</h2>
                </div>
              </div>
            </div>
          </div>

          <ViewedRecently/>
        </div>
      </div>
    </>
  );
};

export default ViewedProduct;
