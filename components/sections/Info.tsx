"use client";

import BookButton from "../BookButton";
import CarsSlider from "../CarsSlider";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { translate, getLanguage } from "../../hooks/translation";

const Info = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const isMobileLayout = useMediaQuery("(max-width:817px)");
  const isBigScreenLayout = useMediaQuery("(min-width:1700px)");
  const language = getLanguage();

  return (
    <div
      id="home"
      className={isSmallLayout ? "SmallInfoSectionStyle" : "InfoSectionStyle"}
    >
      <div
        className={isSmallLayout ? "SmallSliderAndContent" : "SliderAndContent"}
      >
        <div className={isSmallLayout ? "SmallContentStyle" : "ContentStyle"}>
          <h2 className="TitleStyle">{translate("infoTitle", language)}</h2>
          <h2 style={{ marginBottom: "15px" }} className="TitleStyle">
            {translate("infoSubtitle", language)}
            <span style={{ color: "#BF2132" }}>
              {" "}
              {translate("infoSecSubtitle", language)}
            </span>
          </h2>
          <p style={{ marginBottom: "10px" }} className="TextStyle">
            {translate("infoDescription", language)}
          </p>
          <p style={{ marginBottom: "30px" }} className="TextStyle">
            {translate("infoSecDescription", language)}
          </p>
          <BookButton
            title={translate("buttonText", language)}
            dimensions={["48px", "190px"]}
            href="#contact-us"
          />
        </div>
        {isMobileLayout ? (
          ""
        ) : (
          <div
            className={
              isSmallLayout
                ? "smallCarSliderAndbackground"
                : "carSliderAndbackground"
            }
          >
            <div
              className={
                isSmallLayout
                  ? "smaill-parallelogram-background"
                  : "parallelogram-background"
              }
            ></div>
            <div className="carSliderContainer">
              <CarsSlider />
            </div>
          </div>
        )}
      </div>
      <div className={isSmallLayout ? "smallParallelogram" : "parallelogram"}>
        <div
          className={
            isSmallLayout
              ? "small-parallelogram-content"
              : "parallelogram-content"
          }
        >
          <div className={isSmallLayout ? "smallPart" : "part part-border"}>
            <p className="parallelogram-title">
              <AiOutlineClockCircle />{" "}
              <span>{translate("infoWorkTime", language)}</span>{" "}
            </p>
            <p className="parallelogram-text">
              {translate("infoTime", language)}
            </p>
          </div>
          <div className={isSmallLayout ? "smallPart" : "part part-border"}>
            <p className="parallelogram-title">
              <HiOutlineLocationMarker />
              <span>{translate("infoLocation", language)}</span>{" "}
            </p>
            <p className="parallelogram-text">
              {translate("infoLocationDetails", language)}
            </p>
          </div>
          <div className={isSmallLayout ? "smallPart" : "part part-border"}>
            <p className="parallelogram-title">
              <HiOutlineMail /> <span>{translate("infoEmail", language)}</span>{" "}
            </p>
            <p className="parallelogram-text">
              {translate("infoEmailDetails", language)}
            </p>
          </div>
          <div className={isSmallLayout ? "smallPart" : "part"}>
            <p className="parallelogram-title">
              <BiPhone />{" "}
              <span>{translate("infoPhoneNumbertitle", language)}</span>{" "}
            </p>
            <p className="parallelogram-text">
              {translate("infoPhoneNumber", language)}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .InfoSectionStyle {
          height: 550px;
          background-color: #fbfbfb;
          padding-right: 100px;
          padding-left: 100px;
        }
        .SmallInfoSectionStyle {
          height: 410px;
          background-color: #fbfbfb;
          padding-right: 30px;
          padding-left: 30px;
        }
        .SliderAndContent {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .SmallSliderAndContent {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;
        }
        .ContentStyle {
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          width: 40%;
        }
        .SmallContentStyle {
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          width: 100%;
          margin-bottom: 50px;
        }
        .TitleStyle {
          color: #000;
          text-align: right;
          font-size: 38px;
          font-style: normal;
          font-weight: 700;
          line-height: 65px;
          margin: 0;
          padding: 0;
        }
        .TextStyle {
          color: #676767;
          text-align: right;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
        }
        .parallelogram {
          width: 100%;
          height: 80px;
          transform: skew(15deg);
          background: #fff;
          border-radius: 15px;
          box-shadow: -5px 0px 50px 0px rgba(0, 0, 0, 0.1);
        }
        .smallParallelogram {
          width: 100%;
          height: fit-content;
          background: #fff;
          border-radius: 15px;
          box-shadow: -5px 0px 50px 0px rgba(0, 0, 0, 0.1);
          margin-top: ${isMobileLayout ? "0" : "220px"};
        }
        .mobileParallelogram {
          width: 100%;
          height: fit-content;
          background: #fff;
          border-radius: 15px;
          box-shadow: -5px 0px 50px 0px rgba(0, 0, 0, 0.1);
          margin-top: 0;
        }

        .parallelogram-content {
          color: #000;
          width: 96%;
          margin-right: 1%;
          margin-left: 1%;
          transform: skew(-15deg);
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-parallelogram-content {
          color: #000;
          width: 96%;
          margin-right: 1%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          padding: 0 10px 10px 10px;
        }

        .part {
          width: 25%;
          height: 80px;
          padding-top: 18px;
          margin-right: 35px;
          margin-left: 35px;
        }
        .smallPart {
          width: fit-content;
          height: fit-content;
          padding-top: 18px;
          margin-right: 35px;
        }
        .part-border {
          ${language === "ar"
            ? "border-left: solid 1px rgba(240, 240, 240, 1);"
            : "border-right: solid 1px rgba(240, 240, 240, 1);"}
        }
        .parallelogram-title {
          margin: 0;
          padding: 0;
        }
        .parallelogram-title span {
          font-size: 14px;
          margin-right: 5px;
        }
        .parallelogram-text {
          font-size: 12px;
          margin-top: 5px;
          color: #000;
        }

        .parallelogram-background {
          width: 300px;
          height: 470px;
          transform: skew(28deg);
          background: rgba(191, 33, 50, 1);
          position: absolute;
          top: 0;
          left: ${isBigScreenLayout ? "30%" : "20%"};
          z-index: 1;
        }

        .smaill-parallelogram-background {
          width: 80%;
          height: 470px;
          transform: skew(28deg);
          background: rgba(191, 33, 50, 1);
          position: absolute;
          top: 0;
          right: 30px;
          z-index: 1;
        }

        .carSliderContainer {
          position: absolute;
          top: 20%;
          left: 0;
          z-index: 2;
          width: 100%;
        }

        .carSliderAndbackground {
          width: 65%;
          height: 470px;
          position: relative;
        }
        .smallCarSliderAndbackground {
          width: 60%;
          height: 250px;
          position: relative;
          margin-right: 15%;
        }
      `}</style>
    </div>
  );
};

export default Info;
