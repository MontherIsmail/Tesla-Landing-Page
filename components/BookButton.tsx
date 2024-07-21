"use client";

import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { getLanguage } from "../hooks/translation";

interface BookButtonProps {
  title: string;
  dimensions: any;
}

const BookButton = ({ title, dimensions }: BookButtonProps) => {
  const language = getLanguage();
  const BookButtonStyle = {
    width: dimensions[1],
    height: dimensions[0],
    backgroundColor: "#bf2132",
    color: "#ffff",
    border: "none",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <button style={BookButtonStyle}>
      <span>{title}</span> {language === "ar" ?<BsArrowLeftCircle /> : <BsArrowRightCircle />}
      <style jsx>{`
        span{
          margin-left: 10px;
          margin-right: 10px;
        }
      `}</style>
    </button>
  );
};

export default BookButton;
