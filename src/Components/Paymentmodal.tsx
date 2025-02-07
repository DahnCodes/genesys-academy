import { useState } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import { paymentOptions } from "../configs/paymentOptions";
import axios from "axios";
import TwoInstallment from "../Components/TwoInstallment";
import { toast } from "react-toastify";

const PaymentModal = ({
  onClose,
  personalDataResponse,
}: {
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}) => {
  const [activeOption, setActiveOption] = useState<string>(""); // Track selected payment option
  const [buttonContent, setButtonContent] = useState<string>("Make Payment");
  const [generatedInvoiceData, setGeneratedInvoiceData] = useState<
    InvoiceGenerateResponse[]
  >([]);
  const [showTwoInstallmentModal, setShowTwoInstallmentModal] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Loading state for button
  const navigate = useNavigate();

  const handleOptionChange = (option: string, content: string) => {
    setActiveOption(option); // Set the active payment option

    // Customize the button text based on the selected option
    if (option === "Two Installment") {
      setButtonContent("Start Payment"); // Set text for Two Installment option
    } else if (option === "Pay Small Small") {
      setButtonContent("Start Payment"); // Set text for Pay Small Small option
    } else {
      setButtonContent(content); // Default button text for other options
    }

    // No need to open the TwoInstallment modal automatically, only open when the button is clicked
    if (option === "Two Installment") {
      setShowTwoInstallmentModal(false); // Don't automatically show modal when selecting this option
    }
  };

  const handleButtonClick = async () => {
    // Check if an option is selected
    if (!activeOption) {
      // Show toast if no option is selected
      toast.error("Please select a payment option first!");
      return;
    }

    setLoading(true); // Disable the button and show loading state

    // Handle logic for different payment options
    if (activeOption === "Two Installment") {
      setShowTwoInstallmentModal(true); // Show Two Installment modal when button is clicked
      await handleCreateInvoice();
    } else if (activeOption === "Pay Small Small") {
      await handleCreateInvoice(); // Create invoice before navigation
      navigate(`/pay-small/${personalDataResponse.email}`); // Redirect to pay-small
    } else if (activeOption) {
      await handleCreateInvoice(); // Create invoice before navigation
    }

    setLoading(false); // Re-enable the button after the request
  };

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        {
          paymentOption: activeOption,
        }
      );

      console.log(response);

      const invGenData: InvoiceGenerateResponse[] = response.data.data;
      if (response.data.data) {
        setGeneratedInvoiceData(invGenData);
      }

      if (response.data.success) {
        if (activeOption === "Full Payment") {
          // Navigate to full payment page
          navigate(`/create-invoice/full-payment/${invGenData[0]?._id}`);
        } else if (
          activeOption === "Two Installments" ||
          response.data.message === "Redirecting to existing invoice"
        ) {
          // Show two installment modal for Two Installments or if redirecting to an existing invoice
          setShowTwoInstallmentModal(true);
          console.log("got here");
          
        } else if (
          activeOption === "Pay Small Small" &&
          response.data.message === "Redirecting to existing invoice"
        ) {
          // Navigate to Pay Small Small page
          navigate(`/pay-small/${personalDataResponse.email}`);
        }
      } else {
        console.error("Error occurred in creating invoice");
      }
    } catch (err) {
      console.error("Error in creating invoice:", err);
    }
  };

  return (
    <>
      {!showTwoInstallmentModal ? (
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
                    <p className="top">Full Payment</p>
                    <p className="down">{paymentOptions.fullPayment.price}</p>
                  </div>
                </label>
              </div>

              {/* 60% First Installment Option */}
              <div
                className={`full-pay ${
                  activeOption === "Two Installment" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("Two Installment", "Create Invoice")
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
                  handleOptionChange("Pay Small Small", "Start Pay Small Small")
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

            <div className="revampbn">
              <button
                type="button"
                className="dynamic-button"
                onClick={handleButtonClick} // Only proceed when clicked
                disabled={loading} // Disable the button when loading
              >
                {/* {loading ? "Processing..." : buttonContent} Change button text when loading */}
                {loading ? (
                  <div className="spinner"></div> // Loading spinner
                ) : (
                  // "Submit"
                  buttonContent
                )}
              </button>
            </div>
          </section>
        </div>
      ) : (
        <TwoInstallment
          onClose={() => setShowTwoInstallmentModal(false)}
          personalDataResponse={personalDataResponse}
          generatedInvoiceData={generatedInvoiceData}
        />
      )}
    </>
  );
};

export default PaymentModal;
