"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import car1 from "../assets/car1.png";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


const CarsSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const isSmallLayout = useMediaQuery("(max-width:1020px)");

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={car1} alt="car" width={isSmallLayout ? 450 : 550} />
        </div>
        <style jsx>{`
          [class^="number-slide"],
          [class*=" number-slide"] {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 50px;
            color: #fff;
            font-weight: 500;
            height: 300px;
            max-height: 100vh;
          }
        `}</style>
      </div>
    </>
  );
};

export default CarsSlider;
