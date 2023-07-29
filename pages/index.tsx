import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
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

export async function getStaticProps({ locale = "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default Home;
