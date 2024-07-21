"use client";

import { FaRegCopyright } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { translate, getLanguage } from '../../hooks/translation';

const Footer = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const language = getLanguage();

  return (
    <div className="footer-style">
      <div className="footer-body">
        <div className={language === "ar" ? "part-1" : "part-1-en"}>
          <Image src={logo} alt="logo" width={150} />
          <p>{translate('fDescription', language)}</p>
        </div>
        <div className="part-2">
            <p className="contact-info-title">{translate('fSerTitle', language)}</p>
            <p className="p">{translate('fSerText1', language)}</p>
            <p className="p">{translate('fSerText2', language)}</p>
            <p className="p">{translate('fSerText3', language)}</p>
            <p className="p">{translate('fSerText4', language)}</p>
            <p className="p">{translate('fSerText5', language)}</p>
        </div>
        <div className="part-3">
        <p>{translate('fContactUsTitle', language)}</p>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlineLocationMarker /> <span className="contact-us-sub-title">{translate('fContactUsSubTitle1', language)}</span> </p>
            <p className="p-content">{translate('fContactUsText1', language)}</p>
        </div>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlinePhone /> <span className="contact-us-sub-title">{translate('fContactUsSubTitle2', language)}</span> </p>
            <p className="p-content">{translate('fContactUsText2', language)}</p>
        </div>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlineMail /> <span className="contact-us-sub-title">{translate('fContactUsSubTitle3', language)}</span> </p>
            <p className="p-content">{translate('fContactUsText3', language)}</p>
        </div>

        </div>
        <div className="part-4">
        <p className="contact-info-title">{translate('TOWtitle', language)}</p>
        <div className="contact-info">
            <p className="contact-info-title"><AiOutlineClockCircle /> <span>{translate('TOWsubTitle', language)}</span> </p>
            <p className="p-content">{translate('TOWtext', language)}</p>
        </div>
        </div>
      </div>
      <div className="footer-c">
        <p>
        {translate('copyrightTitle1', language)}<FaRegCopyright /> {translate('copyrightTitle2', language)}
        </p>
      </div>
      <style jsx>{`
        .footer-style {
          width: 100%;
          height: ${isSmallLayout? "fit-content" : "450px"};
        }
        .footer-body {
          background-color: rgba(244, 247, 254, 1);
          height: ${isSmallLayout? "fit-content" : "410px"};
          padding: ${isSmallLayout? "30px" : "55px 100px"};
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          ${isSmallLayout? "flex-wrap: wrap" : ""}
        }
        .footer-c {
          width: 100%;
          height: 40px;
          background-color: rgba(191, 33, 50, 1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer-c p {
          color: #fff;
          padding: 0;
          margin: 0;
          font-size: 14px;
        }
        .part-1{
            text-align: start;
            width: ${isSmallLayout ? "100%" : "40%"};
            margin-left: ${isSmallLayout? "20px" : "70px"};
            margin-bottom: ${isSmallLayout? "20px" : ""};
        }
        .part-1-en{
          text-align: start;
          width: ${isSmallLayout ? "100%" : "33%"};
          margin-left: ${isSmallLayout? "20px" : "90px"};
          margin-bottom: ${isSmallLayout? "20px" : ""};
      }
        .part-1 p{
            margin-top: 28px;
            line-height: 30px;
            font-size: 14px;
            color: rgba(79, 79, 79, 1);
            margin-bottom: 20px;
        }
        .part-1-en p{
          margin-top: 18px;
          line-height: 26px;
          font-size: 13px;
          color: rgba(79, 79, 79, 1);
          margin-bottom: 20px;
        }
        .part-2{
            margin-left: ${isSmallLayout? "20px" : "100px"};
            width: ${isSmallLayout ? "" : "15%"};
            margin-bottom: ${isSmallLayout? "20px" : ""};
        }
        .part-2 .p{
            margin-top: 20px;
            font-size: 14px;
            color: rgba(79, 79, 79, 1);
        }
        .part-3{
          margin-left: ${isSmallLayout? "20px" : "100px"};
          width: ${isSmallLayout ? "" : "15%"};
          margin-bottom: ${isSmallLayout? "20px" : ""};
        }

        .part-4{
          margin-left: ${isSmallLayout? "20px" : "100px"};

        }

        .contact-info{
            margin-top: 12px;
        }

        .contact-info p{
            display: flex;
            align-items: center;
        }

        .contact-info p span{
            font-size: 16px;
            ${language === "en" ? "margin-left: 5px;" : "margin-right: 5px;"}
        }

        .contact-info-title{
            color: #000;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 5px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .contact-us-sub-title{
          font-size: 12px;
          margin-start: 5px;
        }

        .p-content{
            color: rgba(79, 79, 79, 1);
            font-size: 14px;
        }

      `}</style>
    </div>
  );
};

export default Footer;
