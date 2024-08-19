import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import SearchPopup from "../../components/common/SearchPopup";
import ShoppingCart from "../../components/common/ShoppingCart";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <>
      <Header />

      <Outlet />
      
      <Footer />
      <SearchPopup />
      <ShoppingCart />
    </>
  );
};

export default LayoutUser;
