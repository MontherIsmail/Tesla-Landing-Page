import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import BookButton from "./BookButton";
import logo from "../assets/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from './LanguageSwitcher';
import { translate, getLanguage } from '../hooks/translation';
// import useTranslation from '../hooks/translation';


const NavBar = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const language = getLanguage();
  // const { language, translate } = useTranslation();
  
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
    : { marginLeft: "18px" };

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
          {translate("navServices", language)}
          </Nav.Link> 
          <Nav.Link style={NavLinkStyle} href="#agents">
          {translate("navAgents", language)}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#certified">
          {translate("navCertified", language)}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#our-works">
          {translate("navOurWorks", language)}
          </Nav.Link>
          <Nav.Link style={NavLinkStyle} href="#about-us">
          {translate("navTestimonials", language)}
          </Nav.Link>
          <Nav.Link style={isSmallLayout ? { margin: "10px 50px" } : {}} href="#contact-us">
          {translate("navContactUs", language)}
          </Nav.Link>
        </Nav>
        <LanguageSwitcher />
        <Nav className={language === "ar"? "me-auto" : "english-margin"}>
          <div style={isSmallLayout ? { margin: "20px" } : {marginLeft: "30px"}}>
            <BookButton
              title={translate('buttonText', language)}
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
