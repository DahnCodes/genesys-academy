import React, { useState } from "react";
import "../Styles/twoinsallment.css";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import axios from "axios";
import Invoicemodal from "../Components/Invoicemodal";

const OfflineTwoInstallment: React.FC<{
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}> = ({ onClose, personalDataResponse }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [activeOption, setActiveOption] = useState("");
  const [newinvoiceid, setNewInvoiceId] = useState("");
  const [newInvoiceamount, setNewInvoiceamount] = useState<number | string>("");
  const [newInvoicemethod, setNewInvoicemethod] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setActiveOption(value); // Set active option when the radio button is selected
  };

  const handleButtonClick = () => {
    // Check if an option is selected before creating the invoice
    if (
      selectedOption === "First Installment" ||
      selectedOption === "Second Installment"
    ) {
      handleCreateInvoice();
    }
  };

  const handleCreateInvoice = async () => {
    try {
      // Step 1: Create Invoice
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        {
          paymentOption: "Two Installment",
        }
      );

      console.log("API Response: ", response); // Log the full response for debugging

      const invGenData: InvoiceGenerateResponse[] = response.data.data;
      //   setNewInvoiceId(invGenData[0]?.invoiceNo); // Set the new invoice ID
      setNewInvoiceId(invGenData[0]?.invoiceNo);
      setNewInvoiceamount(invGenData[0]?.amount);
      setNewInvoicemethod(invGenData[0]?.title);

      if (response.data.success) {
        console.log("Invoice created successfully"); // Log success message
        setShowInvoiceModal(true); // Show the modal after successful invoice creation
      } else {
        console.log("Error Occurred", response.data.message); // Log any error message
      }
    } catch (err: any) {
      console.log("Error creating invoice:", err); // Log the error if the request fails
    }
  };

  return (
    <>
      {!showInvoiceModal ? (
        <div className="payment-invoice-modal__overlay">
          <div className="payment-invoice-modal__container_xyz123">
            <h2 className="payment-invoice-modal__header_abc456">
              Payment Invoice
            </h2>
            <button className="close-button" onClick={onClose}>
              X
            </button>

            <div className="payment-invoice-modal__options-list_qwe789">
              {/* First Installment Option */}
              <label className="payment-invoice-modal__option-item_hjk321">
                <input
                  type="radio"
                  name="paymentOption"
                  value="First Installment"
                  checked={selectedOption === "First Installment"}
                  onChange={() => handleOptionChange("First Installment")}
                  className="payment-invoice-modal__radio-btn_lmn987"
                />
                <div className="revampsecond">
                  <p>First Installment (60%)</p>
                  <p>₦330,000</p>
                </div>
              </label>

              {/* Second Installment Option */}
              <label className="payment-invoice-modal__option-item_hjk321">
                <input
                  type="radio"
                  name="paymentOption"
                  value="Second Installment"
                  checked={selectedOption === "Second Installment"}
                  onChange={() => handleOptionChange("Second Installment")}
                  className="payment-invoice-modal__radio-btn_lmn987"
                />
                <div className="revampsecond">
                  <p>Second Installment (40%)</p>
                  <p>₦220,000</p>
                </div>
              </label>
            </div>

            <button
              className="payment-invoice-modal__generate-btn_zxc654"
              onClick={handleButtonClick}
              disabled={!selectedOption} // Disable the button if no option is selected
            >
              Generate Invoice
            </button>
          </div>
          <div className="activeOption">{activeOption}</div>
        </div>
      ) : null}

      {showInvoiceModal && (
        // <Invoicemodal onClose={onClose} invId={newInvoiceId} />
        <Invoicemodal
          onClose={onClose}
          invId={newinvoiceid}
          no={newInvoiceamount}
          method={newInvoicemethod}
        />
      )}
    </>
  );
};

export default OfflineTwoInstallment;
