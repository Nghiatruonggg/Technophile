import React from "react";
import Pagination from "../../../common/Pagination";

const BelowButtons = () => {
  return (
    <>
      <div className="below-buttons">
        <div className="container">
          <div className="row justify-content-space-between">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-below-buttons">
                <div className="blank" />
                <div className="show-more-buttons">
                  <button type="submit">Show More</button> 
                </div>

               <Pagination/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BelowButtons;
