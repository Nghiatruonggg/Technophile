import React, { useContext } from "react";
import { searchContext } from "../../contexts/Contexts";

const SearchPopup = ({searchBoxRef}) => {
  const searchFunction = useContext(searchContext);
  const {isSearchClicked, handleSearchClicked} = searchFunction;



  return (
    <>
      {/* Search Popup */}
      <div ref={searchBoxRef} className={isSearchClicked == true ? "search-box active" : "search-box"}>
        <div className="container">
          <div className="wrap-overflow">
            <div className={isSearchClicked == true ? "search-close-ic active" : "search-close-ic"} onClick={handleSearchClicked}>
              <i className="fa-solid fa-xmark" />
            </div>
            <div className="row" id="search-input">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Search here!</label>
                </div>
              </div>
            </div>
            <div className="row" id="search-status">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="wrap-search-status">
                  <p className="result-number">1 result found</p>
                  <a href="./mobile-categories.html">View All</a>
                </div>
              </div>
            </div>
            <div className="row search-product-js" id="search-product">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="wrap-search-product">
                  <a href="./product-detail.html">
                    <div className="search-product-info">
                      <div className="search-image">
                        <img
                          src="./assets/images/Product Imagess/Iphone 15 BlueBlack.webp"
                          alt=""
                        />
                      </div>
                      <div className="search-text">
                        <p className="search-name">Iphone 15</p>
                        <p className="search-price">1200$</p>
                      </div>
                    </div>
                  </a>
                  <div className="add-to-cart-button-shopping">
                    <button type="button">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
