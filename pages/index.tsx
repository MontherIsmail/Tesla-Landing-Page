import React from "react";
import {
  Info,
  Services,
  Agents,
  Certified,
  OurWorks,
  AboutUs,
  ContactUs,
  Footer,
} from "../components/sections";
import { NavBar } from "../components";
import { getLanguage } from "../hooks/translation";

const Home = () => {
  const language = getLanguage();

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <NavBar />
      <Info />
      <Services />
      <Agents />
      <Certified />
      <OurWorks />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
