"use client";

import Image from "next/image";
import לוגו from "../../assets/לוגו.png";
import ThePhoenixHoldings from "../../assets/ThePhoenixHoldings.png";
import Migdal from "../../assets/Migdal.png";
import trustInsurance from "../../assets/trustInsurance.png";
import pepsi from "../../assets/pepsi.png";
import PalestineInsurance from "../../assets/PalestineInsurance.png";
import AlTakafulInsurance from "../../assets/AlTakafulInsurance.png";
import nationalInsuranceComponey from "../../assets/nationalInsuranceComponey.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslate from '../../hooks/useTranslate';

const Certified = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const { t } = useTranslate('home');

  return (
    <div id="certified" className="CertifiedSectionStyle">
      <h3 className="CertifiedTitleStyle">{t('certified.title')}</h3>
      <div className="CertifiedLogosStyle">
        <div className="first-row">
        <div className="componey-logo">
          <Image
            src={לוגו}
            alt="Componey Logo"
            className="logo-style"
            width={100}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={ThePhoenixHoldings}
            alt="Componey Logo"
            className="logo-style"
            width={100}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={Migdal}
            alt="Componey Logo"
            className="logo-style"
            height={100}
          />
        </div>
        </div>
        <div className="second-row">
        <div className="componey-logo">
          <Image
            src={trustInsurance}
            alt="Componey Logo"
            className="logo-style"
            width={100}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={pepsi}
            alt="Componey Logo"
            className="logo-style"
            width={120}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={PalestineInsurance}
            alt="Componey Logo"
            className="logo-style"
            width={120}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={AlTakafulInsurance}
            alt="Componey Logo"
            className="logo-style"
            width={120}
          />
        </div>
        <div className="componey-logo">
          <Image
            src={nationalInsuranceComponey}
            alt="Componey Logo"
            width={120}
          />
        </div>
        </div>
      </div>
      <style jsx>{`
        .CertifiedSectionStyle {
          background: #f4f7fe;
          height: ${isSmallLayout ? "fit-content" : "352px"};
          display: flex;
          justify-content: ${isSmallLayout ? "center" : "space-between"};
          align-items: center;
          padding: ${isSmallLayout ? "30px" : "100px"};
          margin-bottom: 70px;
          flex-wrap: wrap;
        }
        .first-row {
          margin-bottom: 50px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 40%;
          flex-wrap: ${isSmallLayout ? "wrap" : " "};
        }
        .CertifiedTitleStyle {
          color: #333;
          text-align: right;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 45px;
          margin-bottom: ${isSmallLayout ? "30px" : ""};
        }
        .CertifiedLogosStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: ${isSmallLayout ? "100%" : "70%"};
        }
        .second-row {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: ${isSmallLayout ? "100%" : "80%"};
          flex-wrap: ${isSmallLayout ? "wrap" : ""};
        }
        .componey-logo {
          margin: ${isSmallLayout ? "20px" : "0"};
        }
      `}</style>
    </div>
  );
};

export default Certified;
