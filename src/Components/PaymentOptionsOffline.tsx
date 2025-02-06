import { useState } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Invoicemodal from "./Invoicemodal"; // Default invoice modal
import TwoInstallment from "../Components/OfflineTwoInstallment"; // Import the new two installment modal
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import { paymentOptions } from "../configs/paymentOptions";
import axios from "axios";

const PaymentOptionsOffline = ({
  onClose,
  personalDataResponse,
}: {
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}) => {
  const [activeOption, setActiveOption] = useState("");
  const [buttonContent, setButtonContent] = useState("Make Payment");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showTwoInstallmentModal, setShowTwoInstallmentModal] = useState(false);
  const [newinvoiceid, setNewInvoiceId] = useState("");
  const [newInvoiceamount, setNewInvoiceamount] = useState<number | string>("");
  const [newInvoicemethod, setNewInvoicemethod] = useState("");

  const handleOptionChange = (option: string, content: string) => {
    setActiveOption(option);
    setButtonContent(content);
  };

  const handleButtonClick = () => {
    if (activeOption === "Two Installment") {
      // Directly show the Two Installment Modal without creating an invoice
      setShowTwoInstallmentModal(true);
    } else if (activeOption) {
      // For other options, create an invoice and show the invoice modal
      handleCreateInvoice();
    } else {
      alert("Please select a payment option first!");
    }
  };

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        { paymentOption: activeOption }
      );

      const invGenData: InvoiceGenerateResponse[] = response.data.data;
      setNewInvoiceId(invGenData[0]?.invoiceNo);
      setNewInvoiceamount(invGenData[0]?.amount);
      setNewInvoicemethod(invGenData[0]?.method);

      if (response.data.success) {
        // Show the default invoice modal
        setShowInvoiceModal(true);
      } else {
        console.log("Error occurred while generating the invoice.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!showInvoiceModal && !showTwoInstallmentModal ? (
        <div className="payment-background">
          <section className="payment-modal">
            <header className="head-text">
              <h4 className="headpayment">Payment Options</h4>
              <IoIosCloseCircleOutline className="close" onClick={onClose} />
            </header>
            <div className="options">
              {/* Full Payment Option */}
              <div
                className={`full-pay ${
                  activeOption === "Full Payment" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("Full Payment", "Generate Invoice")
                }
              >
                <label htmlFor="Full Payment" className="full-pay">
                  <input
                    type="radio"
                    id="Full Payment"
                    name="payment"
                    value="Full Payment"
                    className="radio"
                    checked={activeOption === "Full Payment"}
                    onChange={() =>
                      handleOptionChange("Full Payment", "Pay 550,000 Now")
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">{paymentOptions.fullPayment.label}</p>
                    <p className="down">{paymentOptions.fullPayment.price}</p>
                  </div>
                </label>
              </div>

              {/* Two Installment Option */}
              <div
                className={`full-pay ${
                  activeOption === "Two Installment" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("Two Installment", "Start Payment")
                }
              >
                <label htmlFor="Two Installment" className="full-pay">
                  <input
                    type="radio"
                    id="Two Installment"
                    name="payment"
                    value="Two Installment"
                    className="radio"
                    checked={activeOption === "Two Installment"}
                    onChange={() =>
                      handleOptionChange(
                        "Two Installment",
                        "Pay First Installment (330,000)"
                      )
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">{paymentOptions.installment.label}</p>
                    <p className="down">Two Part Payment</p>
                  </div>
                </label>
              </div>

              {/* Spread Payment Option */}
              <div
                className={`full-pay ${
                  activeOption === "Pay Small Small" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("Pay Small Small", "Start Payment")
                }
              >
                <label htmlFor="Pay Small Small" className="full-pay">
                  <input
                    type="radio"
                    id="Pay Small Small"
                    name="payment"
                    value="Pay Small Small"
                    className="radio"
                    checked={activeOption === "Pay Small Small"}
                    onChange={() =>
                      handleOptionChange(
                        "Pay Small Small",
                        "Spread Payment Plan"
                      )
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">Pay Small Small</p>
                    <p className="down">Spread Payment</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Button to trigger payment */}
            <div className="revampbn">
              <button
                type="button"
                className="dynamic-button"
                onClick={handleButtonClick}
              >
                {buttonContent}
              </button>
            </div>
          </section>
        </div>
      ) : null}

      {/* Show Invoice Modal */}
      {showInvoiceModal && (
        <Invoicemodal
          onClose={onClose}
          invId={newinvoiceid}
          no={newInvoiceamount}
          method={newInvoicemethod}
        />
      )}

      {/* Show Two Installment Modal */}
      {showTwoInstallmentModal && (
        <TwoInstallment
          onClose={onClose}
          personalDataResponse={personalDataResponse}
        />
      )}
    </>
  );
};

export default PaymentOptionsOffline;
