import React, { useRef } from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import SearchPopup from "../../components/common/SearchPopup";
import ShoppingCart from "../../components/common/ShoppingCart";
import { Outlet } from "react-router-dom";
import { searchContext, cartContext } from "../../contexts/Contexts";
import useSearchClicked from "../../hooks/useSearchClicked";
import useCartClicked from "../../hooks/useCartClicked";

const LayoutApp = () => {
  const searchBoxRef = useRef();

  const { isSearchClicked, setIsSearchClicked, handleSearchClicked } =
    useSearchClicked(searchBoxRef);

  const cartBoxRef = useRef();

  const { isCartClicked, setIsCartClicked, handleCartClicked } =
    useCartClicked(cartBoxRef);

  return (
    <>
      <cartContext.Provider
        value={{
          isCartClicked,
          setIsCartClicked,
          handleCartClicked,
        }}
      >
        <searchContext.Provider
          value={{
            isSearchClicked,
            setIsSearchClicked,
            handleSearchClicked,
          }}
        >
          <Header />

          <Outlet />

          <Footer />
          <SearchPopup searchBoxRef={searchBoxRef} />
          <ShoppingCart cartBoxRef={cartBoxRef} />
        </searchContext.Provider>
      </cartContext.Provider>
    </>
  );
};

export default LayoutApp;
