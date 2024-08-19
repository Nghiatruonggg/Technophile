import React from "react";
import titleImage from "../../assets/common/images/Title Image/Samsung-Galaxy-S24-Ultra-Violet-PNG.png";
import Subbanner from "../../components/user/mobile-categories/Subbanner";
import MainTitle from "../../components/user/mobile-categories/MainTitle";
import BodySection from "../../components/user/mobile-categories/BodySection";

const MobileCategories = () => {
  return (
    <>
      <Subbanner />
      <MainTitle titleImage={titleImage} />

     <BodySection/>
    </>
  );
};

export default MobileCategories;
