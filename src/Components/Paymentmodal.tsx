import { useState } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Invoicemodal from "./Invoicemodal";
import Paystack from "./Paystack"; // Import Paystack modal
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PaymentModal = ({ onClose }: { onClose: () => void }) => {
  const [activeOption, setActiveOption] = useState("");
  const [buttonContent, setButtonContent] = useState("Make Payment");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showPaystackModal, setShowPaystackModal] = useState(false); // To control Paystack modal visibility
  const navigate = useNavigate(); // Initialize navigate function

  const handleOptionChange = (option: string, content: string) => {
    setActiveOption(option);
    setButtonContent(content);
  };

  const handleButtonClick = () => {
    if (activeOption === "offline") {
      setShowInvoiceModal(true); // Show invoice modal for offline option
    } else if (activeOption === "installment" || activeOption === "full") {
      setShowPaystackModal(true); // Show Paystack modal for both full and 60% installment
    } else if (activeOption === "small") {
      navigate("/pay-small"); // Navigate to PaySmall page
    }
  };

  return (
    <>
      {!showInvoiceModal && !showPaystackModal ? (
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
                  activeOption === "full" ? "active" : ""
                }`}
                onClick={() => handleOptionChange("full", "Make Payment")}
              >
                <label htmlFor="full" className="full-pay">
                  <input
                    type="radio"
                    id="full"
                    name="payment"
                    value="full payment"
                    className="radio"
                    checked={activeOption === "full"}
                    onChange={() =>
                      handleOptionChange("full", "Pay 550,000 Now")
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">Full Payment</p>
                    <p className="down">550,000</p>
                  </div>
                </label>
              </div>

              {/* Offline Payment Option */}
              <div
                className={`full-pay ${
                  activeOption === "offline" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("offline", "Generate Invoice")
                }
              >
                <label htmlFor="offline" className="full-pay">
                  <input
                    type="radio"
                    id="offline"
                    name="payment"
                    value="offline payment"
                    className="radio"
                    checked={activeOption === "offline"}
                    onChange={() =>
                      handleOptionChange("offline", "Generate Invoice")
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">Offline Payment</p>
                    <p className="down">Generate Invoice</p>
                  </div>
                </label>
              </div>

              {/* 60% First Installment Option */}
              <div
                className={`full-pay ${
                  activeOption === "installment" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("installment", "Make Payment")
                }
              >
                <label htmlFor="installment" className="full-pay">
                  <input
                    type="radio"
                    id="installment"
                    name="payment"
                    value="First installment"
                    className="radio"
                    checked={activeOption === "installment"}
                    onChange={() =>
                      handleOptionChange(
                        "installment",
                        "Pay First Installment (330,000)"
                      )
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">60% First Installment</p>
                    <p className="down">330,000</p>
                  </div>
                </label>
              </div>

              {/* Spread Payment Option */}
              <div
                className={`full-pay ${
                  activeOption === "small" ? "active" : ""
                }`}
                onClick={() =>
                  handleOptionChange("small", "Start Pay Small Small")
                }
              >
                <label htmlFor="small" className="full-pay">
                  <input
                    type="radio"
                    id="small"
                    name="payment"
                    value="small payment"
                    className="radio"
                    checked={activeOption === "small"}
                    onChange={() =>
                      handleOptionChange("small", "Spread Payment Plan")
                    }
                  />
                  <div className="fullpay-text">
                    <p className="top">Pay Small Small</p>
                    <p className="down">Spread Payment</p>
                  </div>
                </label>
              </div>

              {/* Button to trigger payment modal */}
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

      {/* Invoice Modal */}
      {showInvoiceModal && <Invoicemodal onClose={onClose} />}

      {/* Paystack Modal for Full Payment and 60% First Installment */}
      {showPaystackModal && (
        <Paystack
          isOpen={showPaystackModal}
          onClose={() => setShowPaystackModal(false)}
        />
      )}
    </>
  );
};

export default PaymentModal;
