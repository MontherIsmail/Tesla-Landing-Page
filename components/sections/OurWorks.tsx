"use client";

import Image from "next/image";
import WorksSlider from "../WorksSlider";
import ourWorksBackground from "../../assets/ourWorksBackground.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { translate, getLanguage } from '../../hooks/translation';


const OurWorks = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const language = getLanguage();

  return (
    <div id="our-works" className="ourWorksSection">
      <div className="ourWorks-background">
        <Image
        src={ourWorksBackground}
        style={{ width: "100%", height: isSmallLayout ? "800px" :"400px" }}
        alt="background"
      /> 
      </div>
      <div className="our-works-content">
        <div className="our-works-info">
          <h3 className="TitleStyle">{translate('ourWorksTitle', language)}</h3>
          <p className="InfoTextStyle">{translate('ourWorksDescription', language)}</p>
        </div>
        <div className="slider-container">
          <WorksSlider />
        </div>
      </div>
      <style jsx>{`
        .ourWorksSection {
          width: 100%;
          height: ${isSmallLayout? "fit-content" : "400px"};
          position: relative;
        }
        .ourWorks-background {
          width: 100%;
          height: ${isSmallLayout? "fit-content" : "100%"};
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .our-works-content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          ${isSmallLayout? "flex-direction: column" : "display: flex; align-items: center; justify-content: space-between;"}
          padding: ${isSmallLayout ? "50px 30px" : "50px 100px"};
        }

        .our-works-info{
          width: ${isSmallLayout ? "90%" : "38%"};
          margin: ${isSmallLayout ? "0 30px" : ""};
        }

        .TitleStyle {
          color: #fff;
          text-align: start;
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px;
          margin-top: ${isSmallLayout ? "30px" : ""};
        }
        .InfoTextStyle {
          color: rgba(242, 242, 242, 1);
          text-align: start;
          font-size: 12px;
          font-style: normal;
          font-weight: 100;
          line-height: 30px;
        }
        .slider-container{
          width: ${isSmallLayout ? "90%" : "60%"};
          margin: ${isSmallLayout ? "0 20px 0 20px" : ""};
          max-width: ${isSmallLayout ? " " : "670px"} ;
        }
      `}</style>
    </div>
  );
};

export default OurWorks;
