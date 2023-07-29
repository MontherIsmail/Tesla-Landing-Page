"use client";
import ServiceCard from "../ServiceCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslate from "../../hooks/useTranslate";
import fix from "../../assets/fix.png";
import Gears from "../../assets/Gears.png";
import buttery from "../../assets/buttery.png";
import condation from "../../assets/condation.png";
import carIcon from "../../assets/carIcon.png";

const Services = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const isMobileLayout = useMediaQuery("(max-width:817px)");
  const { t } = useTranslate("home");

  return (
    <div id="services" className="ServicesStyle">
      <h3 className="TitleStyle">{t("services.title")}</h3>
      <p className="InfoTextStyle">{t("services.description")}</p>
      <div className="CardsContainerStyle">
        <ServiceCard
          title={t("services.cards.card1.title")}
          image={fix}
          content={t("services.cards.card1.description")}
        />
        <ServiceCard
          title={t("services.cards.card2.title")}
          image={Gears}
          content={t("services.cards.card2.description")}
        />
        <ServiceCard
          title={t("services.cards.card3.title")}
          image={buttery}
          content={t("services.cards.card3.description")}
        />
        <ServiceCard
          title={t("services.cards.card4.title")}
          image={condation}
          content={t("services.cards.card4.description")}
        />
        <ServiceCard
          title={t("services.cards.card5.title")}
          image={carIcon}
          content={t("services.cards.card5.description")}
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
