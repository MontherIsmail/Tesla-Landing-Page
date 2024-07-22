"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import commaIcons from "../assets/commaIcons.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { translate, getLanguage } from "../hooks/translation";

const AboutUsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      const relativeSlide = slider.track.details.rel;
      console.log({ relativeSlide });
      setCurrentSlide(relativeSlide);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 0 },
      },
    },
    slides: { perView: 1 },
  });

  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const language = getLanguage();

  return (
    <div>
      {loaded && instanceRef.current && (
        <div className="slides-btns">
          <div className="btns-container">
            <button
              className="navigate-btn"
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              {language === "ar" ? <BsArrowRight /> : <BsArrowLeft />}
            </button>
            <button
              className="navigate-btn"
              disabled={currentSlide === 0}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              {language === "ar" ? <BsArrowLeft /> : <BsArrowRight />}
            </button>
          </div>
        </div>
      )}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle1", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription1", language)}
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle2", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription2", language)}
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle3", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription3", language)}
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle4", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription4", language)}
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle5", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription5", language)}
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6">
          <div className="slider-item">
            <div className="image-container">
              <Image src={commaIcons} width={100} alt="our work image" />
            </div>
            <div className="slide-content">
              <p className="client-name">
                {translate("aboutUsCardTitle6", language)}
              </p>
              <p className="client-type">
                {translate("aboutUsCardType", language)}
              </p>
              <p className="message-text">
                {translate("aboutUsCardDescription6", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-footer">
          {loaded && instanceRef.current && (
            <div className="dots">
              {isSmallLayout
                ? [
                    ...Array(
                      instanceRef.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          "dot" + (currentSlide === idx ? " active" : "")
                        }
                      ></button>
                    );
                  })
                : [
                    ...Array(
                      instanceRef.current.track.details.slides.length - 2
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          "dot" + (currentSlide === idx ? " active" : "")
                        }
                      ></button>
                    );
                  })}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${isSmallLayout ? "280px" : "240px"};
          max-height: 100vh;
          border-radius: 8px;
        }

        .slider-item {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);
          height: ${isSmallLayout ? "270px" : "220px"};
          margin-top: 25px;
          padding-top: ${isSmallLayout ? "" : "25px"};
          width: 100%;
          border-radius: 8px;
          margin: 0 7px;
          position: relative;
        }

        .slides-btns {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 50px;
        }

        .btns-container {
          width: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navigate-btn {
          background-color: rgba(244, 247, 254, 1);
          color: rgba(191, 33, 50, 1);
          border: 1px solid rgba(191, 33, 50, 1);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: absolute;
          top: 20px;
          ${language === "ar" ? "left: 20px;" : "right: 20px;"}
          z-index: 1;
        }

        .slide-content {
          position: absolute;
          top: ${isSmallLayout ? "10" : "20"};
          ${language === "ar" ? "right: 20px;" : "left: 20px;"}
          z-index: 5;
          width: 80%;
          display: flex;
          align-items: flex-start;
          justify-content: start;
          flex-direction: column;
        }

        .client-name {
          color: rgba(191, 33, 50, 1);
          font-size: 14px;
        }
        .client-type {
          color: rgba(79, 79, 79, 1);
          font-size: 10px;
        }
        .message-text {
          color: rgba(0, 0, 0, 1);
          font-size: 12px;
        }
        .client-name,
        .client-type,
        .message-text {
          padding: 0;
          margin: 5px 0;
        }

        .dots {
          display: flex;
          padding: 10px 0;
          justify-content: center;
        }

        .dot {
          border: none;
          width: 30px;
          padding: 1.5px;
          max-height: 5px;
          background: rgba(217, 217, 217, 1);
          border-radius: 5px;
          margin: 0 3px;
          cursor: pointer;
        }

        .dot:focus {
          outline: none;
        }

        .dot.active {
          background: rgba(191, 33, 50, 1);
        }
      `}</style>
    </div>
  );
};

export default AboutUsSlider;
