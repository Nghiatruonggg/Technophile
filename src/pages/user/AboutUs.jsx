import React from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import MainTitle from "../../components/common/MainTitle/MainTitle";
import Overview from "../../components/user/about-us/Overview/Overview";
import Achievement from "../../components/user/about-us/Achievement/Achievement";
import CoreStaff from "../../components/user/about-us/CoreStaff/CoreStaff";
import MissonSection from "../../components/user/about-us/MissionSection/MissonSection";
import CommitmentSection from "../../components/user/about-us/CommitmentSection/CommitmentSection";

const AboutUs = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageName="About Us" pageSubName="About Us" />

      <Overview />
      <Achievement />
      <CoreStaff />
      <MissonSection />
      <CommitmentSection />
    </>
  );
};

export default AboutUs;
