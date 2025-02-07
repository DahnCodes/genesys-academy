import "../Styles/paysmall.css";
import React, { useEffect, useState } from "react";
import Backbtn from "../Components/Backbtn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PaysmallInvoice } from "../types/sharedtypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaveLoader from "../Components/WaveLoader";
const PaySmall: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [invoiceId, setInvoiceId] = useState("");
  const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { email } = useParams();

  const handleCardClick = (index: number) => {
    const status = invoiceDetails[index]?.status;
    if (status === "Paid") {
      toast.info("This invoice has already been paid and cannot be selected.");
      return; 
    }

    if (isInvoiceSelectable(index)) {
      setSelectedIndex(index);
      setInvoiceId(invoiceDetails[index]._id);
    }
  };

  const fetchInvoiceByEmail = async (email: string) => {
    if (!email) return;
    try {
      const response = await axios.get(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/`,
        {
          params: { email },
        }
      );
      setInvoiceDetails(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching invoice:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      fetchInvoiceByEmail(email);
    }
  }, [email]);

  const handleGenerateInvoice = async () => {
    if (!invoiceId) {
      toast.error("Please select a payment option before proceeding!");
      return;
    }

    setLoading(true);
    try {
      navigate(`/create-invoice/pay-small/${invoiceId}`);
    } catch (error) {
      console.error("Error generating invoice:", error);
    }
    setLoading(false);
  };

  const isInvoiceSelectable = (index: number) => {
    if (index === 0) return true;
    if (invoiceDetails[index - 1]?.status === "Paid") {
      return true;
    }
    return false; 
  };

  // Check if the invoice is paid and return respective classes for styling
  const getInvoiceClass = (index: number) => {
    const status = invoiceDetails[index]?.status;

    if (status === "Paid") {
      // Apply "paid" class for paid invoices
      return "paid";
    } else if (isInvoiceSelectable(index)) {
      // Apply "enabled" class for selectable invoices
      return "enabled";
    } else {
      // Apply "disabled" class for non-selectable invoices
      return "disabled";
    }
  };

  return (
    <div className="containerII">
      {/* Show LoadingState if loading is true */}
      {loading ? (
        <WaveLoader />
      ) : (
        <>
          <Backbtn />
          <h2 className="titleII">Flexible Payment Plan</h2>
          <p className="subtitle">
            Spread your payments over six months with our easy installment
            payment plan.
            <br />
            <strong>No Interest, Stay In Control.</strong>
          </p>
          <div className="gridII">
            {invoiceDetails.map((plan, index) => (
              <div
                key={index}
                className={`card1 card1-${index + 1} ${getInvoiceClass(
                  index
                )} ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: plan.status === "Paid" ? "not-allowed" : "pointer", // Disable click on paid invoices
                  opacity: plan.status === "Paid" ? 0.5 : 1, // Fade out paid invoices
                }}
              >
                <div className="gridinner">
                  <h3 className="card-title">{plan.title}</h3>
                  <p className="amount">{plan.amount}</p>
                  <span className="status">{plan.status}</span>
                </div>
                <div className="ksks">
                  <p className="ksksII">{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="generate">
            <button
              className="generate-button"
              onClick={handleGenerateInvoice}
              disabled={loading || !invoiceId} // Disable the button if loading or no invoice selected
            >
              {loading ? (
                <div className="spinner"></div> // Loading spinner for the button
              ) : (
                "Generate Invoice"
              )}
            </button>
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={true} // New toasts will appear on top
        closeOnClick={true} // Close toast on click
        rtl={false} // Right to left support
        pauseOnFocusLoss={false} // Pause on focus loss
        draggable={true} // Allow toast dragging
        pauseOnHover={true} // Pause on hover
      />
    </div>
  );
};

export default PaySmall;
