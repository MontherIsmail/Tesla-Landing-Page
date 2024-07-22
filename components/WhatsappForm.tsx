import { useState, useEffect } from "react";
import { translate, getLanguage } from "../hooks/translation";
import Toasts from "./Toast";
import "react-datepicker/dist/react-datepicker.css";

export default function WhatsappForm({ carDetails }: any) {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showToasts, setShowToasts] = useState<boolean>(false);
  const [minDateTime, setMinDateTime] = useState<any>("");
  const language = getLanguage();

  useEffect(() => {
    const now = new Date();
    const fivePM = new Date();
    fivePM.setHours(17, 0, 0, 0);

    const minDate = now > fivePM ? now : fivePM;
    setMinDateTime(minDate.toISOString().slice(0, 16));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (carDetails.carNumber) {
      setShowToasts(false);
      const { carNumber, kinuy_mishari, shnat_yitzur, tozeret_nm } = carDetails;

      const formattedMessage = `Name: ${name}\nPhone: ${phoneNumber}\n Car Number: ${carNumber}\nCar Name: ${kinuy_mishari}\n Car Modal: ${shnat_yitzur}\n Trade Name: ${tozeret_nm} \n Date and Time: ${date}\n\nMessage:\n${message}`;
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappNumber = "+972597804383";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
    }
    return setShowToasts(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs-container">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          className="gray-input"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <label htmlFor="phoneNumber">Your Phone Number</label>
        <input
          id="phoneNumber"
          className="gray-input"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Your Phone Number"
          required
        />
        <label htmlFor="datetime">Date</label>
        <input
          id="datetime"
          className="gray-input"
          name="datetime"
          type="datetime-local"
          min={minDateTime}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="write-container">
        <label style={{ marginTop: "30px" }} htmlFor="message">
          {translate("contactUsWriteLabel", language)}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="gray-input write"
          placeholder={translate("contactUsWritePlaceholder", language)}
          style={{ width: "100%" }}
          required
        />
      </div>
      <button className="send-btn" type="submit">
        {translate("contactUsSendBtn", language)}
      </button>
      {showToasts && (
        <Toasts
          title="Error"
          color="red"
          bodyColor="red"
          body="Please Search About Your Car!"
        />
      )}
      <style jsx>{`
        .gray-input {
          border: none;
          border-radius: 8px;
          background-color: rgba(94, 91, 91, 1);
          color: #fff;
          padding: 0 22px;
          width: 100%;
        }
        .write {
          height: 200px;
          padding: 10px 22px;
        }
        .write-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .send-btn {
          width: 100%;
          height: 45px;
          margin-top: 20px;
          border-radius: 8px;
          border: none;
          background-color: rgba(191, 33, 50, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
        }
        .inputs-container input,
        select {
          height: 45px;
        }
        .inputs-container label,
        .write-container label {
          color: rgba(242, 242, 242, 1);
          font-size: 12px;
          margin-top: 20px;
          margin-bottom: 5px;
        }
          ::-webkit-calendar-picker-indicator {
          filter: invert(1);
      }
      `}</style>
    </form>
  );
}
