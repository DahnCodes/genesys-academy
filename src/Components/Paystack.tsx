import React, { useState } from "react";
import "../Styles/paystack.css";
import paystack from "../assets/Paystack-mark-white-twitter.png";
import { FaCreditCard } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { MdQrCode2 } from "react-icons/md";

interface PayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Paystack: React.FC<PayModalProps> = ({ isOpen, onClose }) => {
  // const Paystack: React.FC<PayModalProps> = ({ isOpen }) => {
  const [activeTab, setActiveTab] = useState("card");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Sidebar */}
        <div className="modal-sidebar">
          <p className="paywith">Pay with</p>
          <button
            className={activeTab === "card" ? "active" : ""}
            onClick={() => setActiveTab("card")}
          >
           <FaCreditCard /> Card
          </button>
          <button
            className={activeTab === "bank" ? "active" : ""}
            onClick={() => setActiveTab("bank")}
          >
            <CiBank /> Bank
          </button>
          <button
            className={activeTab === "mobile" ? "active" : ""}
            onClick={() => setActiveTab("mobile")}
          >
         <CiMobile3 /> Mobile Money
          </button>
          <button
            className={activeTab === "visa" ? "active" : ""}
            onClick={() => setActiveTab("visa")}
          >
           <MdQrCode2 /> Visa QR
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          {activeTab === "card" && (
            <div>
              <div className="paystackimage">
                <figure className="figpay">
                  <img src={paystack} alt="" />
                </figure>
                <div>
                  <p>demo@paystack.com</p>
                  <p className="pays330">Pay N330,000</p>
                </div>
              </div>
              <p className="enterdetails">Enter your card details</p>
              <form className="firstpayentintegration">
                <input type="text" placeholder="Card Number" />
                <div className="togther_cn">
                  <input type="text" placeholder="MM / YY" />
                  <input type="text" placeholder="CVV" />
                </div>
                <div className="bnpaymenform">
                  <button type="button" className="bnpaymenform9">Pay NGN 330,000</button>
                  <button className="close-button" onClick={onClose}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeTab !== "card" && (
            <div>
              <h3>{activeTab} Payment Coming Soon!</h3>
            </div>
          )}
          {/* <button className="close-button" onClick={onClose}>
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Paystack;
