"use client";

import { FaRegCopyright } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslate from '../../hooks/useTranslate';


const Footer = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const { t } = useTranslate('home');

  return (
    <div className="footer-style">
      <div className="footer-body">
        <div className="part-1">
          <Image src={logo} alt="logo" width={150} />
          <p>{t('footer.description')}</p>
        </div>
        <div className="part-2">
            <p className="contact-info-title">{t('footer.services.title')}</p>
            <p className="p">{t('footer.services.text1')}</p>
            <p className="p">{t('footer.services.text2')}</p>
            <p className="p">{t('footer.services.text3')}</p>
            <p className="p">{t('footer.services.text4')}</p>
            <p className="p">{t('footer.services.text5')}</p>
        </div>
        <div className="part-3">
        <p>{t('footer.contactUs.title')}</p>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlineLocationMarker /> <span>{t('footer.contactUs.subTitle1')}</span> </p>
            <p className="p-content">{t('footer.contactUs.text1')}</p>
        </div>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlineLocationMarker /> <span>{t('footer.contactUs.subTitle2')}</span> </p>
            <p className="p-content">{t('footer.contactUs.text2')}</p>
        </div>
        <div className="contact-info">
            <p className="contact-info-title"><HiOutlineLocationMarker /> <span>{t('footer.contactUs.subTitle3')}</span> </p>
            <p className="p-content">{t('footer.contactUs.text3')}</p>
        </div>

        </div>
        <div className="part-4">
        <p className="contact-info-title">{t('footer.timeOfwork.title')}</p>
        <div className="contact-info">
            <p className="contact-info-title"><AiOutlineClockCircle /> <span>{t('footer.timeOfwork.subTitle')}</span> </p>
            <p className="p-content">{t('footer.timeOfwork.text')}</p>
        </div>
        </div>
      </div>
      <div className="footer-c">
        <p>
        {t('footer.copyright.title1')}<FaRegCopyright /> {t('footer.copyright.title2')}
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
            width: ${isSmallLayout ? "100%" : "31%"};
            margin-left: ${isSmallLayout? "20px" : "100px"};
            margin-bottom: ${isSmallLayout? "20px" : ""};
        }
        .part-1 p{
            margin-top: 28px;
            line-height: 30px;
            font-size: 14px;
            color: rgba(79, 79, 79, 1);
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
            margin-right: 5px;
            font-size: 16px;
        }

        .contact-info-title{
            color: #000;
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 5px;

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
