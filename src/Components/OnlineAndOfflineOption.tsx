import React, { useState } from "react";
import "../Styles/onlineandoffline.css";
import PaymentModal from "./Paymentmodal";
import PaymentOptionsOffline from "./PaymentOptionsOffline";
import { InternDataResFromPersonalData } from "../types/sharedtypes";
import axios from "axios"; // Import axios
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}

const OnlineAndOfflineOption: React.FC<PaymentModalProps> = ({
  open,
  onClose,
  personalDataResponse,
}) => {
  const [paymentMode, setPaymentMode] = useState<"Online" | "Offline" | "">("");
  const [canProceed, setCanProceed] = useState(false);
  const [loading, setLoading] = useState(false); // To track API request status
  const [error, setError] = useState<string | null>(null); // To track error messages

  if (!open) return null;

  const handleProceed = async () => {
    if (!paymentMode) {
      toast.error("Please select a payment option first!"); // Show toast if no payment is selected
      return;
    }

    setLoading(true);
    setError(null); // Reset error message before making the request

    try {
      // URL for the PATCH request (assuming the email is part of the URL)
      const apiUrl = `https://genesys-web-app-revamp.onrender.com/api/v1/intern/update/${personalDataResponse.email}`;

      // Directly send the paymentMode value as the request body
      const requestData = { paymentType: paymentMode }; // 'Online' or 'Offline'

      // Send the PATCH request using axios
      const response = await axios.patch(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // If the request is successful (status 200), set canProceed to true
      if (response.status === 200) {
        toast.success("Payment mode updated successfully!"); // Success toast
        setCanProceed(true);
      } else {
        throw new Error("Failed to update payment method.");
      }
    } catch (error: any) {
      setError(
        error.message || "An error occurred while processing the request."
      );
      toast.error(
        error.message || "An error occurred while processing the request."
      ); // Error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="payment-modal1" onClick={(e) => e.stopPropagation()}>
        <div className="paymodalax">
          <h2 className="modal-title">Payment Mode</h2>
          <IoIosCloseCircleOutline className="close" onClick={onClose} />
        </div>
        <p className="modal-subtitle">Choose mode of payment.</p>

        <div className="payment-options22">
          {/* Online Payment Option */}
          <label
            className={`payment-option ${
              paymentMode === "Online" ? "selected" : ""
            }`}
          >
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

          {/* Offline Payment Option */}
          <label
            className={`payment-option ${
              paymentMode === "Offline" ? "selected" : ""
            }`}
          >
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

        {/* Proceed Button */}
        <div className="nbaz">

        <button
          className="proceed-button"
          onClick={handleProceed}
          disabled={loading || !paymentMode} // Disable if no payment option is selected or loading
        >
          {/* {loading ? "Processing..." : "Proceed To Payment"} */}
          {loading ? (
            <div className="spinner"></div> // Loading spinner
          ) : (
            "Proceed To Payment"
          )}
        </button>
        </div>

        {/* Show error message if any */}
        {error && <p className="error-message">{error}</p>}

        {canProceed && paymentMode === "Online" && (
          <PaymentModal
            onClose={onClose}
            personalDataResponse={personalDataResponse}
          />
        )}

        {canProceed && paymentMode === "Offline" && (
          <PaymentOptionsOffline
            onClose={onClose}
            personalDataResponse={personalDataResponse}
          />
        )}
      </div>

      {/* ToastContainer to display toast notifications */}
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
