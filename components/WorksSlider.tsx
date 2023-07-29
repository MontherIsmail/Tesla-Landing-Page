"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ourWork1 from "../assets/ourWork1.png";
import ourWork2 from "../assets/ourWork2.png";
import ourWork3 from "../assets/ourWork3.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from 'next/router'

const WorksSlider = () => {
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
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const router = useRouter();
  const { locale } = router;

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
              {locale === "ar" ? <BsArrowRight /> : <BsArrowLeft />}
            </button>
            <button
              className="navigate-btn"
              disabled={currentSlide === 0}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              {locale === "ar" ? <BsArrowLeft /> : <BsArrowRight />}
            </button>
          </div>
        </div>
      )}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image src={ourWork1} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={ourWork2} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={ourWork3} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={ourWork1} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={ourWork2} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={ourWork3} width={isSmallLayout ? 380 : 222} alt="our work image" />
        </div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          background: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: ${isSmallLayout ? "300px" : "220px"};
          max-height: 100vh;
          border-radius: 8px;
        }

        .slides-btns {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100px;
        }

        .btns-container {
          width: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navigate-btn {
          background: none;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default WorksSlider;
