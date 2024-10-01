import React from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import MainTitle from "../../components/common/MainTitle/MainTitle";
import ContactSection from "../../components/user/contact-us/ContactSection";
import AddressSection from "../../components/user/contact-us/AddressSection";
import ServiceSection from "../../components/user/contact-us/ServiceSection";

const ContactUs = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageSubName="Contact" pageName="Contact With Us" />
      <ContactSection/>
      <AddressSection/>
      <ServiceSection/>
    </>
  );
};

export default ContactUs;
