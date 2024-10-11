import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../contexts/Contexts";
import useCallAPI from "../../hooks/useCallAPI";
import { mobile_categories } from "../../untils/variable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartReducerSlice";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchPopup = ({ searchBoxRef }) => {
  const searchFunction = useContext(searchContext);
  const { isSearchClicked, handleSearchClicked } = searchFunction;

  const { data, isLoading } = useCallAPI(mobile_categories);
  const [valueInput, setValueInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();
  const handleAdded = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  useEffect(() => {
    if (!data) return;

    if (valueInput == "") {
      setSearchData(data);
    }

    const searchTerm = valueInput.toLowerCase().trim();

    const filteredData = data.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm);
    });

    // Debounce
    setTimeout(() => {
      setSearchData(filteredData);
    }, 1000);

  }, [valueInput, data]);

  return (
    <>
      {/* Search Popup */}
      <div
        ref={searchBoxRef}
        className={isSearchClicked == true ? "search-box active" : "search-box"}
      >
        <Container>
          <div className="wrap-overflow">
            <div
              className={
                isSearchClicked == true
                  ? "search-close-ic active"
                  : "search-close-ic"
              }
              onClick={handleSearchClicked}
            >
              <FontAwesomeIcon className="close-icon" icon={faXmark} />
            </div>
            <Row id="search-input">
              <Col >
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
              </Col>
            </Row>

            <Row id="search-status">
              <Col>
                <div className="wrap-search-status">
                  <p className="result-number">{`${searchData.length} result found`}</p>
                  <Link to="/mobile-categories">View All</Link>
                </div>
              </Col>
            </Row>

            <Row id="search-product">
              <Col>
                {searchData.map((product) => {
                  return (
                    <div key={product.id} className="wrap-search-product">
                      <Link to={`/mobile-categories/${product.id}`}>
                        <div className="search-product-info">
                          <div className="search-image">
                            <img src={product.mainImage} alt={product.name} />
                          </div>
                          <div className="search-text">
                            <p className="search-name">{product.name}</p>
                            <p className="search-price">${product.price}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="add-to-cart-button-shopping">
                        <button
                          onClick={() => handleAdded(product)}
                          type="button"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchPopup;
