import { useState, useEffect } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import { paymentOptions, formatPrice } from "../configs/paymentOptions";
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
  const [activeOption, setActiveOption] = useState<string>(
    personalDataResponse.paymentOption || ""
  );
  const [buttonContent, setButtonContent] = useState<string>("Make Payment");
  const [generatedInvoiceData, setGeneratedInvoiceData] = useState<
    InvoiceGenerateResponse[]
  >([]);
  const [showTwoInstallmentModal, setShowTwoInstallmentModal] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (personalDataResponse.paymentOption) {
      setActiveOption(personalDataResponse.paymentOption);
    }
  }, [personalDataResponse]);

  const handleOptionChange = (option: string, content: string) => {
    if (personalDataResponse.paymentOption) return;

    setActiveOption(option);
    setButtonContent(
      option === "Two Installment" || option === "Pay Small Small"
        ? "Start Payment"
        : content
    );

    if (option === "Two Installment") setShowTwoInstallmentModal(false);
  };

  const handleButtonClick = async () => {
    if (!activeOption) {
      toast.error("Please select a payment option first!");
      return;
    }

    setLoading(true);

    if (activeOption === "Two Installment") {
      setShowTwoInstallmentModal(true);
      await handleCreateInvoice();
    } else if (activeOption === "Pay Small Small") {
      await handleCreateInvoice();
      navigate(`/pay-small/${personalDataResponse.email}`);
    } else if (activeOption) {
      await handleCreateInvoice();
    }

    setLoading(false);
  };

  const handleCreateInvoice = async () => {
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        {
          paymentOption: activeOption,
        }
      );

      const invGenData: InvoiceGenerateResponse[] = response.data.data;
      if (response.data.success && invGenData) {
        setGeneratedInvoiceData(invGenData);

        if (activeOption === "Full Payment") {
          const invoiceId = invGenData[0]?._id;
          if (invoiceId) {
            navigate(`/create-invoice/full-payment/${invoiceId}`);
          } else {
            navigate(`/redirect/full-payment/${personalDataResponse.email}`);
          }
        } else if (activeOption === "Two Installment") {
          setShowTwoInstallmentModal(true);
        } else if (activeOption === "Pay Small Small") {
          navigate(`/pay-small/${personalDataResponse.email}`);
        }
      } else if (response.data.message === "Redirecting to existing invoice") {
        if (activeOption === "Full Payment") {
          navigate(`/redirect/full-payment/${personalDataResponse.email}`);
        } else if (activeOption === "Pay Small Small") {
          navigate(`/pay-small/${personalDataResponse.email}`);
        }
      } else {
        console.error("Error occurred in creating invoice");
        toast.error("Failed to create or fetch invoice.");
      }
    } catch (err: any) {
      console.error("Network or server error during invoice creation:", err);
      toast.error("Network error while creating invoice.");
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
                    disabled={!!personalDataResponse.paymentOption}
                  />
                  <div className="fullpay-text">
                    <p className="top">Full Payment</p>
                    <p className="down">
                      {formatPrice(paymentOptions.fullPayment.price)}
                    </p>
                  </div>
                </label>
              </div>

              {/* Two Installment Option */}
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
                    disabled={!!personalDataResponse.paymentOption}
                  />
                  <div className="fullpay-text">
                    <p className="top">{paymentOptions.installment.label}</p>
                    <p className="down">Two Part Payment</p>
                  </div>
                </label>
              </div>

              {/* Pay Small Small Option */}
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
