import React, { useState } from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import MainTitle from "../../components/common/MainTitle/MainTitle";
import BodySection from "../../components/user/mobile-categories/BodySection";

const MobileCategories = () => {

  return (
    <>
      <Subbanner />
      <MainTitle pageSubName="Product" pageName="Mobile" />

     <BodySection/>
    </>
  );
};

export default MobileCategories;
