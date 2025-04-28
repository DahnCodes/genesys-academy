import React, { useState, useEffect } from "react";
import "../Styles/onlineandoffline.css";
import PaymentModal from "./Paymentmodal";
import PaymentOptionsOffline from "./PaymentOptionsOffline";
import { InternDataResFromPersonalData } from "../types/sharedtypes";
import axios from "axios";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}

const OnlineAndOfflineOption: React.FC<PaymentModalProps> = ({ open, onClose, personalDataResponse }) => {
  const [paymentMode, setPaymentMode] = useState<"Online" | "Offline" | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [proceedToPayment, setProceedToPayment] = useState(false);
  const [autoProceed, setAutoProceed] = useState(false);

  useEffect(() => {
    if (personalDataResponse?.paymentType) {
      // If paymentType already exists
      setPaymentMode(personalDataResponse.paymentType);
      setAutoProceed(true);
    }
  }, [personalDataResponse]);

  useEffect(() => {
    if (autoProceed && paymentMode) {
      setProceedToPayment(true);
    }
  }, [autoProceed, paymentMode]);

  if (!open) return null;

  const handleProceed = async () => {
    if (!paymentMode) {
      toast.error("Please select a payment option first!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = `https://genesys-web-app-revamp.onrender.com/api/v1/intern/update/${personalDataResponse.email}`;
      const requestData = { paymentType: paymentMode };

      const response = await axios.patch(apiUrl, requestData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Payment mode updated successfully!");
        setProceedToPayment(true);
      } else {
        throw new Error("Failed to update payment method.");
      }
    } catch (error: any) {
      setError(error.message || "An error occurred while processing the request.");
      toast.error(error.message || "An error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  if (proceedToPayment) {
    if (paymentMode === "Online") {
      return <PaymentModal onClose={onClose} personalDataResponse={personalDataResponse} />;
    } else if (paymentMode === "Offline") {
      return <PaymentOptionsOffline onClose={onClose} personalDataResponse={personalDataResponse} />;
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="payment-modal1" onClick={(e) => e.stopPropagation()}>
        <div className="paymodalax">
          <h2 className="modal-title">Payment Mode</h2>
          <IoIosCloseCircleOutline className="close" onClick={onClose} />
        </div>
        <p className="modal-subtitle">Choose mode of payment.</p>

        <div className="payment-options22">
          <label className={`payment-option ${paymentMode === "Online" ? "selected" : ""}`}>
            <input
              type="radio"
              name="payment"
              value="Online"
              checked={paymentMode === "Online"}
              onChange={() => setPaymentMode("Online")}
            />
            <span className="custom-radio"></span>
            <span className="onpayspan">Online Payment</span>
          </label>

          <label className={`payment-option ${paymentMode === "Offline" ? "selected" : ""}`}>
            <input
              type="radio"
              name="payment"
              value="Offline"
              checked={paymentMode === "Offline"}
              onChange={() => setPaymentMode("Offline")}
            />
            <span className="custom-radio"></span>
            <span className="onpayspan">Offline Payment</span>
          </label>
        </div>

        <div className="nbaz">
          <button
            className="proceed-button"
            onClick={handleProceed}
            disabled={loading || !paymentMode}
          >
            {loading ? <div className="spinner"></div> : "Proceed To Payment"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </div>

      <ToastContainer
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton
        className="custom-toast-container"
      />
    </div>
  );
};

export default OnlineAndOfflineOption;
