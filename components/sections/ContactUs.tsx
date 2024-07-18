"use client";

import Image from "next/image";
import contactUsBackground from "../../assets/contactUsBackground.png";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { search } from "../../pages/api/search";
import Toasts from "../Toast";
import { translate, getLanguage } from '../../hooks/translation';

const ContactUs = () => {
  const [carNumber, setCarNumber] = useState<string>('');
  const [showToasts, setShowToasts] = useState<boolean>(false);
  const [carDetails, setCarDetails] = useState<any>({})
  const language = getLanguage();

  const submitSearch = async () => {
    try{
      setShowToasts(false)
      const data = await search(carNumber);
      if(data){
        setCarDetails(data);
      }else{
        setCarDetails({});
        setShowToasts(true);
      }
    }catch(error){
      setShowToasts(true);
    }
  }
  
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  return (
    <div id="contact-us" className="contact-us">
      {showToasts && <Toasts title="Error" color="#000" bodyColor="red" body="Car Not Found" />}
      <div className="image-container">
        <Image
          src={contactUsBackground}
          alt="background"
          style={{ width: "100%", height: "100%" }}
          className="contactUs-background"
        />
      </div>
      <div className="contact-us-form">
        <h3 className="TitleStyle">{translate('contactUsTitle', language)}</h3>
        <p className="InfoTextStyle">{translate('contactUsDescription', language)}</p>
        <div className="car-num-button">
          <div className="car-number-container">
            <label htmlFor="car-number">{translate('contactUsSearchlabel', language)}</label>
            <input
              type="tel"
              id="car-number"
              name="car-number"
              className="gray-input car-number"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              placeholder={translate('contactUsSearchPlaceholder', language)}
            />
          </div>
          <button onClick={submitSearch} className="search-btn" disabled={carNumber === ''} >{translate('contactUsSearchBtn', language)}</button>
        </div>
        <div className="write-container">
        {carDetails.carNumber && carNumber && <div className="result-car-details">
          <div>
          <p className="detaile-title">{translate('contactUsCarNumber', language)}</p>
          <p>{carDetails.carNumber}</p>
          </div>
          <div>
          <p className="detaile-title">{translate('contactUsCarName', language)}</p>
          <p>{carDetails.kinuy_mishari}</p>
          </div>
          <div>
          <p className="detaile-title">{translate('contactUsTradeName', language)}</p>
          <p>{carDetails.shnat_yitzur}</p>
          </div>
          <div>
          <p className="detaile-title">{translate('contactUsCarModal', language)}</p>
          <p>{carDetails.tozeret_nm}</p>
          </div>
        </div>}
          <label style={{marginTop: "30px"}} htmlFor="write">{translate('contactUsWriteLabel', language)}</label>
          <textarea
            id="write"
            name="write"
            className="gray-input write"
            placeholder={translate('contactUsWritePlaceholder', language)}
            style={{ width: "100%" }}
          />
        </div>
        <button className="send-btn">{translate('contactUsSendBtn', language)}</button>
      </div>
      <style jsx>{`
        .contact-us {
          width: 100%;
          height: 720px;
          position: relative;
          margin-top: 120px;
        }
        .image-container {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .contact-us-form {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: ${isSmallLayout? "30px" : "100px"};
        }

        .TitleStyle {
          color: #fff;
          text-align: center;
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px;
        }
        .InfoTextStyle {
          color: rgba(242, 242, 242, 1);
          text-align: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 100;
          line-height: 30px;
          margin-bottom: 30px;
        }

        label {
          color: rgba(242, 242, 242, 1);
          font-size: 12px;
          text-align: start;
          margin-bottom: 10px;
        }

        .gray-input {
          border: none;
          border-radius: 8px;
          background-color: rgba(94, 91, 91, 1);
          color: #fff;
          padding: 0 22px;
          width: 100%;
        }

        .car-num-button {
          width: ${isSmallLayout? "100%" : "50%"};
          text-align: start;
          position: relative;
        }

        .car-number-container {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .search-btn {
          position: absolute;
          top: 34px;
          ${language === "ar" ? "left: 3px;" : "right: 3px;"}
          z-index: 1;
          height: 41px;
          width: 120px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 1);
          background-color: rgba(126, 124, 124, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
        }

        .search-btn:disabled,
        .search-btn[disabled]{
          color: #fff;
        }

        .car-number {
          height: 45px;
        }

        .write-container {
          width: ${isSmallLayout? "100%" : "50%"};
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          margin-top: ${carDetails.carNumber? "": "100px"}
        }
        
        .write {
          height: 200px;
          padding: 10px 22px;
        }

        .send-btn{
          width: ${isSmallLayout? "100%" : "50%"};
          height: 45px;
          margin-top: 20px;
          border-radius: 8px;
          border: none;
          background-color: rgba(191, 33, 50, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
        }

        .result-car-details{
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom-right-radius: 8px;
          border-bottom-left-radius: 8px;
          background-color: rgba(94, 91, 91, 1);
          width: ${isSmallLayout? "100%" : "100%"};
          color: #fff;
          padding: 10px 22px;
          margin-bottom: 50px;
        }

        .result-car-details p{
          font-size: 14px;
          margin: 5px;
        }

        .detaile-title{
          color: rgba(189, 189, 189, 1);
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
