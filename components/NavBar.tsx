import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import BookButton from "./BookButton";
import logo from "../assets/logo.png";
import { useRouter } from 'next/router';
import useTranslate from '../hooks/useTranslate';
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const { t } = useTranslate('home');
  const router = useRouter();
  const { locale } = router;
  const SmallNavStyle = {
    height: "80px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
  };
  const DisktopNavStyle = {
    height: "80px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
    paddingLeft: "100px !important",
    paddingRight: "100px !important",
  };

  const NavLinkStyle = isSmallLayout
    ? { margin: "10px 50px" }
    : { marginLeft: "20px" };

  return (
    <Navbar
      expand="lg"
      style={isSmallLayout ? SmallNavStyle : DisktopNavStyle}
      className="bg-body-tertiary"
    >
      <Navbar.Brand href="#home">
        <div style={isSmallLayout ? { marginRight: "10px", marginLeft: "10px" } : {}}>
          <Image src={logo} alt="Logo" />
        </div>
      </Navbar.Brand>
      <div style={isSmallLayout ? { marginLeft: "20px", marginRight: "20px" } : {}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse style={isSmallLayout ? {backgroundColor: "#A1A0AE", zIndex: "10"} : {}} id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={NavLinkStyle} href="#services">
          {t("navbar.services")}
          </Nav.Link> 
          <Nav.Link style={NavLinkStyle} href="#agents">
          {t("navbar.Agents")}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#certified">
          {t("navbar.certified")}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#our-works">
          {t("navbar.ourWorks")}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#about-us">
          {t("navbar.testimonials")}
          </Nav.Link>
          <Nav.Link style={isSmallLayout ? { margin: "10px 50px" } : {}} href="#contact-us">
          {t("navbar.contactUs")}
          </Nav.Link>
        </Nav>
        <Nav className={locale === "ar"? "me-auto" : "english-margin"}>
          <div style={isSmallLayout ? { margin: "20px" } : {}}>
            <BookButton
              title={t("info.buttonText")}
              dimensions={["40px", "190px"]}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        .english-margin{
          margin: 0 100px;
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;
