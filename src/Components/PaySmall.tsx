import "../Styles/paysmall.css";
import React, { useEffect, useState } from "react";
import Backbtn from "../Components/Backbtn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PaysmallInvoice } from "../types/sharedtypes";
// Import react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

const PaySmall: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // Initialize navigate function
  const { email } = useParams();
  const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
  const [invoiceId, setInvoiceId] = useState("");

  const handleCardClick = (index: number) => {
    setSelectedIndex(index); // Set the selected card index
    setInvoiceId(invoiceDetails[index]._id); // Set the selected invoice ID
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
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  };

  useEffect(() => {
    if (email) {
      fetchInvoiceByEmail(email);
    }
  }, [email]);

  useEffect(() => {
    console.log("Selected Invoice ID:", invoiceId);
  }, [invoiceId]);

  const handleGenerateInvoice = () => {
    if (!invoiceId) {
      // Show toast notification if no invoice ID is selected
      toast.error("Please select a payment option before proceeding!");
    } else {
      // Proceed to generate invoice if an option is selected
      navigate(`/create-invoice/pay-small/${invoiceId}`);
    }
  };

  return (
    <div className="containerII">
      <Backbtn />
      <h2 className="titleII">Flexible Payment Plan</h2>
      <p className="subtitle">
        Spread your payments over six months with our easy installment payment
        plan.
        <br />
        <strong>No Interest, Stay In Control.</strong>
      </p>
      <div className="gridII">
        {invoiceDetails.map((plan, index) => (
          <div
            key={index}
            className={`card1 card1-${index + 1} ${
              selectedIndex === index ? "selected" : ""
            }`}
            onClick={() => handleCardClick(index)}
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
        <button className="generate-button" onClick={handleGenerateInvoice}>
          Generate Invoice
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default PaySmall;
