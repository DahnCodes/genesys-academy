import { useState, useEffect } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Invoicemodal from "./Invoicemodal";
import TwoInstallment from "../Components/OfflineTwoInstallment";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import { paymentOptions, formatPrice } from "../configs/paymentOptions";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (personalDataResponse.paymentOption) {
      setActiveOption(personalDataResponse.paymentOption);
    }
  }, [personalDataResponse.paymentOption]);

  const handleOptionChange = (option: string, content: string) => {
    if (!personalDataResponse.paymentOption) {
      setActiveOption(option);
      setButtonContent(content);
    }
  };

  const handleButtonClick = async () => {
    if (activeOption === "Two Installment") {
      setLoading(true);
      await handleCreateInvoice();
    } else if (activeOption) {
      setLoading(true);
      await handleCreateInvoice();
    } else {
      toast.error("Please select a payment option first!");
    }
  };

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        { paymentOption: activeOption }
      );

      const invGenData: InvoiceGenerateResponse[] = response.data.data;
      if (response.data.data) {
        setNewInvoiceId(invGenData[0]?.invoiceNo);
        setNewInvoiceamount(invGenData[0]?.amount);
        setNewInvoicemethod(invGenData[0]?.method);
      }

      if (response.data.success) {
        if (activeOption === "Two Installment") {
          console.log("got here 1 ");

          setShowTwoInstallmentModal(true);
          if (response.data.message === "Redirecting to existing invoice") {
            setShowTwoInstallmentModal(true);
            console.log("got here 2");
          }
        } else {
          console.log("got nowhere 3");

          setShowInvoiceModal(true);
          if (response.data.message === "Redirecting to existing invoice") {
            setShowInvoiceModal(true);
            console.log("got here 4 ");
          }
        }
      } else {
        console.log("Error occurred while generating the invoice.");
        toast.error("Error occurred while generating the invoice.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error occurred while generating the invoice.");
    }
    setLoading(false);
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
                    disabled={!!personalDataResponse.paymentOption}
                  />
                  <div className="fullpay-text">
                    <p className="top">{paymentOptions.fullPayment.label}</p>
                    <p className="down">
                      {" "}
                      {formatPrice(paymentOptions.fullPayment.price)}
                    </p>
                  </div>
                </label>
              </div>

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
                    disabled={!!personalDataResponse.paymentOption}
                  />
                  <div className="fullpay-text">
                    <p className="top">{paymentOptions.installment.label}</p>
                    <p className="down">Two Part Payment</p>
                  </div>
                </label>
              </div>

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
                    disabled={!!personalDataResponse.paymentOption}
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
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? <div className="spinner"></div> : buttonContent}
              </button>
            </div>
          </section>
        </div>
      ) : null}
      {showInvoiceModal && (
        <Invoicemodal
          onClose={onClose}
          invId={newinvoiceid}
          no={newInvoiceamount}
          method={newInvoicemethod}
        />
      )}
      {showTwoInstallmentModal && (
        <TwoInstallment
          onClose={onClose}
          personalDataResponse={personalDataResponse}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
};

export default PaymentOptionsOffline;
