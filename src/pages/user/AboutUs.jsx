import React from "react";
import Subbanner from "../../components/common/Subbanner";
import MainTitle from "../../components/common/MainTitle";
import Overview from "../../components/user/about-us/Overview";
import Achievement from "../../components/user/about-us/Achievement";
import CoreStaff from "../../components/user/about-us/CoreStaff";
import MissonSection from "../../components/user/about-us/MissonSection";
import CommitentSection from "../../components/user/about-us/CommitentSection";

const AboutUs = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageName="About Us" pageSubName="About Us" />

      <Overview />
      <Achievement />
      <CoreStaff />
      <MissonSection />
      <CommitentSection />
    </>
  );
};

export default AboutUs;
