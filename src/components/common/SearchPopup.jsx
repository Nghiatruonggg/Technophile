import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../contexts/Contexts";
import useCallAPI from "../../hooks/useCallAPI";
import { mobile_categories } from "../../untils/variable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartReducerSlice";

const SearchPopup = ({ searchBoxRef }) => {
  const searchFunction = useContext(searchContext);
  const { isSearchClicked, handleSearchClicked } = searchFunction;

  const { data, isLoading } = useCallAPI(mobile_categories);
  const [valueInput, setValueInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();
  const handleAdded = (product) => {
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
  }
  
  useEffect(() => {
    if (!data) return;

    if (valueInput == "") {
      setSearchData(data);
    }

    const searchTerm = valueInput.toLowerCase().trim();

    const filteredData = data.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm);
    })

    setSearchData(filteredData)


  }, [valueInput, data])


  return (
    <>
      {/* Search Popup */}
      <div
        ref={searchBoxRef}
        className={isSearchClicked == true ? "search-box active" : "search-box"}
      >
        <div className="container">
          <div className="wrap-overflow">
            <div
              className={
                isSearchClicked == true
                  ? "search-close-ic active"
                  : "search-close-ic"
              }
              onClick={handleSearchClicked}
            >
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
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Search here!</label>
                </div>
              </div>
            </div>
            <div className="row" id="search-status">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="wrap-search-status">
                  <p className="result-number">{`${searchData.length} result found`}</p>
                  <Link to="/mobile-categories">View All</Link>
                </div>
              </div>
            </div>
            <div className="row" id="search-product">
              <div className="col-12 col-sm-12 col-md-12">
                {searchData.map((product) => {
                  return (
                    <div key={product.id} className="wrap-search-product">
                      <Link to={`/mobile-categories/${product.id}`}>
                        <div className="search-product-info">
                          <div className="search-image">
                            <img
                              src={product.mainImage}
                              alt={product.name}
                            />
                          </div>
                          <div className="search-text">
                            <p className="search-name">{product.name}</p>
                            <p className="search-price">{product.price}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="add-to-cart-button-shopping">
                        <button onClick={() => handleAdded(product)} type="button">Add To Cart</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
