import React, { useEffect, useState } from "react";
import "../Styles/twoinsallment.css";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import axios from "axios";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Invoicemodal from "../Components/Invoicemodal";

const OfflineTwoInstallment: React.FC<{
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}> = ({ onClose, personalDataResponse }) => {
  const [selectedOption, setSelectedOption] = useState<string>(""); // Track selected option
  const [loading, setLoading] = useState<boolean>(false); // Track loading state
  const [invoiceDetails, setInvoiceDetails] = useState<
    InvoiceGenerateResponse[]
  >([]); // Track invoice details
  const [showInvoiceModal, setShowInvoiceModal] = useState(false); // Track whether modal is shown
  const [newInvoiceId, setNewInvoiceId] = useState(""); // New invoice ID
  const [newInvoiceAmount, setNewInvoiceAmount] = useState<number | string>(""); // New invoice amount
  const [newInvoiceMethod, setNewInvoiceMethod] = useState(""); // New invoice method
  const [firstInstallmentPaid, setFirstInstallmentPaid] = useState(false); // Track if first installment is paid

  const handleOptionChange = (value: string) => {
    setSelectedOption(value); // Set selected option when clicked
  };

  useEffect(() => {
    // Fetch the invoice data when component mounts
    if (invoiceDetails.length === 0) {
      fetchInvoiceByEmail(personalDataResponse.email);
    }
  }, [invoiceDetails, personalDataResponse.email]);

  const fetchInvoiceByEmail = async (email: string) => {
    if (!email) return;
    try {
      const response = await axios.get(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/`,
        {
          params: { email },
        }
      );
      setInvoiceDetails(response.data.data); // Set the fetched invoice data
      // Check if first installment is paid
      const firstInstallment = response.data.data.find(
        (invoice: InvoiceGenerateResponse) =>
          invoice.title === "First Installment"
      );
      if (firstInstallment?.status === "Paid") {
        setFirstInstallmentPaid(true); // Set first installment status as paid
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  };

  // Handle button click to display the invoice modal
  const handleButtonClick = () => {
    if (selectedOption) {
      setLoading(true); // Start loading spinner when the button is clicked

      // Get the selected invoice option
      const selectedInvoice = invoiceDetails.find(
        (invoice) => invoice.title === selectedOption
      );
      if (selectedInvoice) {
        setNewInvoiceId(selectedInvoice.invoiceNo); // Set new invoice ID
        setNewInvoiceAmount(selectedInvoice.amount); // Set new invoice amount
        setNewInvoiceMethod(selectedInvoice.title); // Set new invoice method
        setShowInvoiceModal(true); // Show the invoice modal
      }

      setLoading(false); // Stop loading after the modal has been shown
    }
  };

  // Dynamically map the installment options from invoiceDetails
  const installmentOptions = [...invoiceDetails]
    .sort((a, b) => {
      // Compare invoice titles to swap first and second position
      if (b.title === "Second Installment") return -1; // "Second Installment" comes first
      if (a.title === "Second Installment") return 1;
      return 0; // Keep the order as is for other invoices
    })
    .map((invoice) => ({
      title: invoice.title,
      amount: invoice.amount,
      status: invoice.status,
    }));

  return (
    <>
      {!showInvoiceModal ? (
        <div className="payment-invoice-modal__overlay">
          <div className="payment-invoice-modal__container_xyz123">
            <div className="hfgcgcv">
              <div className="payment-invoice-modal__header_abc456">
                Payment Invoice
              </div>
              <IoIosCloseCircleOutline className="close" onClick={onClose} />
            </div>

            <div className="payment-invoice-modal__options-list_qwe789">
              {/* Dynamically mapping through installment options */}
              {installmentOptions?.map((option, index) => {
                // Apply logic to disable second installment if first is not paid
                const isDisabled =
                  (option.title === "Second Installment" &&
                    !firstInstallmentPaid) ||
                  option.status === "Paid";

                return (
                  <label
                    key={index}
                    className={`payment-invoice-modal__option-item_hjk321 ${
                      selectedOption === option.title ? "highlighted" : ""
                    } ${option.status === "Paid" ? "paid" : ""} ${
                      option.status === "Paid" ? "disabled" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option.title}
                      checked={selectedOption === option.title}
                      onChange={() => handleOptionChange(option.title)}
                      className={`payment-invoice-modal__radio-btn_lmn987 ${
                        option.status === "Paid" ? "paid-radio" : ""
                      }`}
                      disabled={option.status === "Paid" || isDisabled}
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
                disabled={!selectedOption || loading} // Disable the button when no option is selected or loading
              >
                {loading ? (
                  <div className="spinner"></div> // Loading spinner
                ) : (
                  "Generate Invoice"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showInvoiceModal && (
        <Invoicemodal
          onClose={onClose}
          invId={newInvoiceId}
          no={newInvoiceAmount}
          method={newInvoiceMethod}
        />
      )}
    </>
  );
};

export default OfflineTwoInstallment;
