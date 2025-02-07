import React, { useEffect, useState } from "react";
import "../Styles/twoinsallment.css";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TwoInstallment: React.FC<{
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
  generatedInvoiceData: InvoiceGenerateResponse[];
}> = ({ onClose, personalDataResponse, generatedInvoiceData }) => {
  const [selectedOption, setSelectedOption] = useState<string>(""); // Track selected option
  const [loading, setLoading] = useState<boolean>(false); // Track loading state
  const [invoiceDetails, setInvoiceDetails] = useState<
    InvoiceGenerateResponse[]
  >([]); // Track invoice data
  const [firstInstallmentPaid, setFirstInstallmentPaid] = useState(false); // Track if first installment is paid
  const navigate = useNavigate();
  const [invoiceId, setInvoiceId] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value); // Set selected option when clicked
  };
  console.log(invoiceId);

  // Extract title and amount from the data
  const installmentOptions = invoiceDetails?.map((invoice) => ({
    title: invoice.title,
    amount: invoice.amount,
    status: invoice.status,
    id: invoice._id,
  }));

  const fetchInvoiceByEmail = async (email: string) => {
    if (!email) return;
    try {
      const response = await axios.get(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/`,
        {
          params: { email },
        }
      );

      console.log(response);

      setInvoiceDetails(response.data.data); // Set the fetched invoice data

      // Check if the first installment is paid
      const firstInstallment = response.data.data.find(
        (invoice: InvoiceGenerateResponse) =>
          invoice.title === "First Installment"
      );
      if (firstInstallment?.status === "Paid") {
        setFirstInstallmentPaid(true); // Set first installment as paid
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  };

  useEffect(() => {
    if (generatedInvoiceData.length === 0) {
      fetchInvoiceByEmail(personalDataResponse.email);
    } else {
      setInvoiceDetails(generatedInvoiceData);
      console.log(generatedInvoiceData + "hello");
    }
  }, [generatedInvoiceData, personalDataResponse.email]);

  const handleButtonClick = () => {
    if (selectedOption) {
      setLoading(true); 

      navigate(
        `/create-invoice/installment/${
          generatedInvoiceData[0]?._id ? generatedInvoiceData[0]._id : invoiceId
        }`
      );

      setLoading(false); // Stop loading after navigation
    }
  };

  
  return (
    <div className="payment-invoice-modal__overlay">
      <div className="payment-invoice-modal__container_xyz123">
        <div className="hfgcgcv">
          <div className="payment-invoice-modal__header_abc456">
            Payment Invoice
          </div>
          <IoIosCloseCircleOutline className="close" onClick={onClose} />
        </div>

        <div className="payment-invoice-modal__options-list_qwe789">
          {installmentOptions?.map((option, index) => {
            // Disable second installment if first is not paid
            const isDisabled =
              (option.title === "Second Installment" &&
                !firstInstallmentPaid) ||
              option.status === "Paid"; // Disable second installment until the first one is paid

            return (
              <label
                key={index}
                className={`payment-invoice-modal__option-item_hjk321 ${
                  selectedOption === option.title ? "highlighted" : ""
                } ${option.status === "Paid" ? "paid" : ""}`}
              >
                <input
                  type="radio"
                  name="paymentOption"
                  value={option.title}
                  checked={selectedOption === option.title}
                  onChange={() => {
                    handleOptionChange(option.title);
                    setInvoiceId(option.id);
                  }}
                  className="payment-invoice-modal__radio-btn_lmn987"
                  disabled={isDisabled} // Disable radio button based on condition
                />
                <div className="revampsecond">
                  <p>{option.title}</p>
                  <p>₦{option.amount.toLocaleString()}</p>
                </div>
              </label>
            );
          })}
        </div>

        <div className="lmkj">
          <button
            className="payment-invoice-modal__generate-btn_zxc654"
            onClick={handleButtonClick}
            disabled={!selectedOption || loading} // Disable the button if no option is selected or loading
          >
            {loading ? <div className="spinner"></div> : "Generate Invoice"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoInstallment;
