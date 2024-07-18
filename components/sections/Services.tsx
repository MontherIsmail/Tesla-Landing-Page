"use client";
import ServiceCard from "../ServiceCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import fix from "../../assets/fix.png";
import Gears from "../../assets/Gears.png";
import buttery from "../../assets/buttery.png";
import condation from "../../assets/condation.png";
import carIcon from "../../assets/carIcon.png";
import { translate, getLanguage } from '../../hooks/translation';

const Services = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const isMobileLayout = useMediaQuery("(max-width:817px)");
  const language = getLanguage();

  return (
    <div id="services" className="ServicesStyle">
      <h3 className="TitleStyle">{translate("servicesTitle", language)}</h3>
      <p className="InfoTextStyle">{translate("servicesDescription", language)}</p>
      <div className="CardsContainerStyle">
        <ServiceCard
          title={translate("serCard1Title", language)}
          image={fix}
          content={translate("serCard1Description", language)}
        />
        <ServiceCard
          title={translate("serCard2Title", language)}
          image={Gears}
          content={translate("serCard2Description", language)}
        />
        <ServiceCard
          title={translate("serCard3Title", language)}
          image={buttery}
          content={translate("serCard3Description", language)}
        />
        <ServiceCard
          title={translate("serCard4Title", language)}
          image={condation}
          content={translate("serCard4Description", language)}
        />
        <ServiceCard
          title={translate("serCard5Title", language)}
          image={carIcon}
          content={translate("serCard5Description", language)}
        />
      </div>
      <style jsx>{`
        .ServicesStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: ${isSmallLayout ? "100px 30px" : "100px"};
          ${isMobileLayout ? "margin-top: 120px" : ""}
        }
        .TitleStyle {
          color: #333;
          text-align: right;
          font-size: 38px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          ${isSmallLayout && !isMobileLayout ? "margin-top: 410px" : ""}
        }
        .InfoTextStyle {
          color: #4f4f4f;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 38px;
          width: ${isSmallLayout ? "100%" : "60%"};
        }
        .CardsContainerStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 60px;
          ${isSmallLayout ? "flex-wrap: wrap" : ""}
        }
      `}</style>
    </div>
  );
};

export default Services;
