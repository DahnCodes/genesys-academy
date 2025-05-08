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
import { useNavigate } from "react-router-dom";

const API_BASE = "https://genesys-web-app-revamp.onrender.com/api/v1/invoice";

const PaymentOptionCard = ({
  option,
  label,
  subtext,
  selected,
  onChange,
  disabled,
}: {
  option: string;
  label: string;
  subtext: string;
  selected: boolean;
  onChange: () => void;
  disabled: boolean;
}) => (
  <div className={`full-pay ${selected ? "active" : ""}`} onClick={onChange}>
    <label htmlFor={option} className="full-pay">
      <input
        type="radio"
        id={option}
        name="payment"
        value={option}
        className="radio"
        checked={selected}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="fullpay-text">
        <p className="top">{label}</p>
        <p className="down">{subtext}</p>
      </div>
    </label>
  </div>
);

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
  const [invoiceId, setInvoiceId] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState<number | string>("");
  const [invoiceMethod, setInvoiceMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post(
        `${API_BASE}/${personalDataResponse.email}`,
        {
          paymentOption: activeOption,
        }
      );

      if (
        activeOption === "Full Payment" &&
        response.data.success &&
        response.data.redirectUrl
      ) {
        const invoiceNo = response.data.redirectUrl.split("/").pop();
        setInvoiceId(invoiceNo || "");
        setInvoiceAmount(550000); // fallback
        setInvoiceMethod("Full Payment");
        setShowInvoiceModal(true);
        return;
      }

      const invData: InvoiceGenerateResponse[] = response.data.data;
      if (invData && invData.length) {
        setInvoiceId(invData[0].invoiceNo);
        setInvoiceAmount(invData[0].amount);
        setInvoiceMethod(invData[0].method);
      }

      if (response.data.success) {
        if (activeOption === "Two Installment") {
          setShowTwoInstallmentModal(true);
        } else if (activeOption === "Pay Small Small") {
          navigate(`/offlinePaySmallSmall/${personalDataResponse.email}`);
        } else {
          setShowInvoiceModal(true);
        }
      } else {
        toast.error("Error occurred while generating the invoice.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error occurred while generating the invoice.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    if (activeOption) {
      setLoading(true);
      await handleCreateInvoice();
    } else {
      toast.error("Please select a payment option first!");
    }
  };

  return (
    <>
      {!showInvoiceModal && !showTwoInstallmentModal && (
        <div className="payment-background">
          <section className="payment-modal">
            <header className="head-text">
              <h4 className="headpayment">Payment Options</h4>
              <IoIosCloseCircleOutline className="close" onClick={onClose} />
            </header>
            <div className="options">
              <PaymentOptionCard
                option="Full Payment"
                label={paymentOptions.fullPayment.label}
                subtext={formatPrice(paymentOptions.fullPayment.price)}
                selected={activeOption === "Full Payment"}
                onChange={() =>
                  handleOptionChange("Full Payment", "Pay 550,000 Now")
                }
                disabled={!!personalDataResponse.paymentOption}
              />
              <PaymentOptionCard
                option="Two Installment"
                label={paymentOptions.installment.label}
                subtext="Two Part Payment"
                selected={activeOption === "Two Installment"}
                onChange={() =>
                  handleOptionChange(
                    "Two Installment",
                    "Pay First Installment (330,000)"
                  )
                }
                disabled={!!personalDataResponse.paymentOption}
              />
              <PaymentOptionCard
                option="Pay Small Small"
                label="Pay Small Small"
                subtext="Spread Payment"
                selected={activeOption === "Pay Small Small"}
                onChange={() =>
                  handleOptionChange("Pay Small Small", "Spread Payment Plan")
                }
                disabled={!!personalDataResponse.paymentOption}
              />
            </div>
            <div className="revampbn">
              <button
                type="button"
                className="dynamic-button"
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? <div className="spinner" /> : buttonContent}
              </button>
            </div>
          </section>
        </div>
      )}

      {showInvoiceModal && (
        <Invoicemodal
          onClose={onClose}
          invId={invoiceId}
          no={invoiceAmount}
          method={invoiceMethod}
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
