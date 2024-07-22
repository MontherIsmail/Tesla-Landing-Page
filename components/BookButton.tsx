"use client";

import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { getLanguage } from "../hooks/translation";
import Nav from "react-bootstrap/Nav";

interface BookButtonProps {
  title: string;
  dimensions: any;
  href: string;
}

const BookButton = ({ title, dimensions, href }: BookButtonProps) => {
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
    <Nav.Link style={BookButtonStyle} href={href}>
      <span>{title}</span> {language === "ar" ?<BsArrowLeftCircle /> : <BsArrowRightCircle />}
      <style jsx>{`
        span{
          margin-left: 10px;
          margin-right: 10px;
        }
      `}</style>
    </Nav.Link>
  );
};

export default BookButton;
