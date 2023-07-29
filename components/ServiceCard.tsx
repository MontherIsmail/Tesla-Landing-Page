"use client";

import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


interface ServiceCardProps {
  image: any;
  title: string;
  content: string;
}

const ServiceCard = ({ image, title, content }: ServiceCardProps) => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");

  return (
    <div className="ServiceCardStyle">
      <Image src={image} className="service-img" width={50} alt="Service Image" />
      <h4 className="TitleStyle">{title}</h4>
      <p className="ContentStyle">{content}</p>
      <style jsx>{`
        .service-img {
          alin-self: center;
          margin-bottom: 21px;
        }
      `}</style>
      <style jsx>{`
        .ServiceCardStyle {
          width: 210px;
          height: 230px;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.07);
          padding: 28px;
          margin-left: 15px;
          text-align: center;
          ${isSmallLayout? "margin-top: 20px;" : ""}
        }
        .TitleStyle {
          color: #333;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          margin: 0;
          padding: 0;
        }
        .ContentStyle {
          color: #4f4f4f;
          text-align: center;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
