import { useState } from "react";
import "./styling/modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const PaymentModal = () => {
  const [activeOption, setActiveOption] = useState("");
  const [buttonContent, setButtonContent] = useState("Make Payment");

  const handleOptionChange = (option: string, content: string) => {
    setActiveOption(option);
    setButtonContent(content);
  };

  return (
    <>
      <div className="payment-background">
        <div className="head-text">
          <h4>Payment Options</h4>
          <IoIosCloseCircleOutline className="close" />
        </div>
        <div className="options">
          <div
            className={`full-pay ${activeOption === "full" ? "active" : ""}`}
            onClick={() =>
              handleOptionChange("full", "Make Payment")
            }
          >
            <div className="full-pay">
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
            </div>
          </div>

          <div
            className={`full-pay ${activeOption === "offline" ? "active" : ""}`}
            onClick={() =>
              handleOptionChange("offline", "Generate Invoice")
            }
          >
            <div className="full-pay">
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
            </div>
          </div>

          <div
            className={`full-pay ${
              activeOption === "installment" ? "active" : ""
            }`}
            onClick={() =>
              handleOptionChange(
                "installment",
                "Make Payment"
              )
            }
          >
            <div className="full-pay">
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
            </div>
          </div>

          <div
            className={`full-pay ${activeOption === "small" ? "active" : ""}`}
            onClick={() =>
              handleOptionChange("small", "Start Pay Small Small")
            }
          >
            <div className="full-pay">
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
            </div>
          </div>
        <button className="dynamic-button">{buttonContent}</button>
        </div>

      </div>
    </>
  );
};

export default PaymentModal;
