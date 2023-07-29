"use client";

import AboutUsSlider from "../AboutUsSlider";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslate from '../../hooks/useTranslate';

const AboutUs = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const { t } = useTranslate('home');

  return (
    <div className="about-us" id="about-us">
      <h3 className="TitleStyle">{t('aboutUs.title')}</h3>
      <p className="InfoTextStyle">{t('aboutUs.description')}</p>
      <AboutUsSlider />
      <style jsx>{`
      .about-us{
        width: 100%;
        height: 600px;
        padding: ${isSmallLayout? "30px" : "100px"};
        ${isSmallLayout? "margin-top: 900px;" : ""}
      }
        .TitleStyle {
          color: #000;
          text-align: center;
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px;
        }
        .InfoTextStyle {
          color: rgba(79, 79, 79, 1);
          text-align: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 100;
          line-height: 30px;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
