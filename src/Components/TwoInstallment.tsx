// import React, { useState } from "react";
// import "../Styles/twoinsallment.css";
// import { InternDataResFromPersonalData } from "../types/sharedtypes";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { IoIosCloseCircleOutline } from "react-icons/io";

// const TwoInstallment: React.FC<{
//   onClose: () => void;
//   personalDataResponse: InternDataResFromPersonalData;
// }> = ({ onClose, personalDataResponse }) => {
//   const [selectedOption, setSelectedOption] = useState<string>("");

//   const handleOptionChange = (value: string) => {
//     setSelectedOption(value);
//   };
//   const navigate = useNavigate();

//   const handleGenerateInvoice = async (selectedOption: string) => {
//     if (!selectedOption) return; // Prevent API call if no option is selected
//     try {
//       const response = await axios.post(
//         `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
//         {
//           paymentOption: selectedOption,
//         }
//       );
//       //   console.log("Invoice Created:", response.data);
//       const invGenData = response.data.data;

//       if (response.data.success) {
//         if (
//           response.data.success &&
//           response.data.message === "Redirecting to existing invoice"
//         ) {
//           navigate(
//             `/create-invoice/installment/${personalDataResponse.invoiceId[1]}`
//           );
//         }
//         navigate(`/create-invoice/installment/${invGenData[0]?._id}`);
//       } else {
//         console.log("Error occurred");
//       }
//     } catch (error) {
//       console.error("Error generating invoice:", error);
//     }
//   };

//   return (
//     <div className="payment-invoice-modal__overlay">
//       <div className="payment-invoice-modal__container_xyz123">
//         <div className="hfgcgcv">
//           <div className="payment-invoice-modal__header_abc456">
//             Payment Invoice
//           </div>
//            <IoIosCloseCircleOutline className="close" onClick={onClose} />
//         </div>

//         <div className="payment-invoice-modal__options-list_qwe789">
//           {/* First Installment Option */}
//           <label className="payment-invoice-modal__option-item_hjk321">
//             <input
//               type="radio"
//               name="paymentOption"
//               value="Two Installment"
//               checked={selectedOption === "Two Installment"}
//               onChange={() => handleOptionChange("Two Installment")}
//               className="payment-invoice-modal__radio-btn_lmn987"
//             />
//             <div className="revampsecond">
//               <p className="mgvngcv">First Installment (60%)</p>
//               <p className="xfacvg">₦330,000</p>
//             </div>
//           </label>

//           {/* Second Installment Option */}
//           <label className="payment-invoice-modal__option-item_hjk321">
//             <input
//               type="radio"
//               name="paymentOption"
//               value="Two Installment"
//               checked={selectedOption === "Two Installment"}
//               onChange={() => handleOptionChange("Two Installment")}
//               className="payment-invoice-modal__radio-btn_lmn987"
//             />
//             <div className="revampsecond">
//               <p  className="mgvngcv">Second Installment (40%)</p>
//               <p className="xfacvg">₦220,000</p>
//             </div>
//           </label>
//         </div>

//         <button
//           className="payment-invoice-modal__generate-btn_zxc654"
//           onClick={() => handleGenerateInvoice(selectedOption)}
//           disabled={!selectedOption} // Disable the button if no option is selected
//         >
//           Generate Invoice
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TwoInstallment;


import React, { useState } from "react";
import "../Styles/twoinsallment.css";
import { InternDataResFromPersonalData } from "../types/sharedtypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TwoInstallment: React.FC<{
  onClose: () => void;
  personalDataResponse: InternDataResFromPersonalData;
}> = ({ onClose, personalDataResponse }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const navigate = useNavigate();

  const handleGenerateInvoice = async (selectedOption: string) => {
    if (!selectedOption) return; // Prevent API call if no option is selected
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
        {
          paymentOption: selectedOption,
        }
      );
      const invGenData = response.data.data;

      if (response.data.success) {
        if (
          response.data.success &&
          response.data.message === "Redirecting to existing invoice"
        ) {
          navigate(
            `/create-invoice/installment/${personalDataResponse.invoiceId[1]}`
          );
        }
        navigate(`/create-invoice/installment/${invGenData[0]?._id}`);
      } else {
        console.log("Error occurred");
      }
    } catch (error) {
      console.error("Error generating invoice:", error);
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
          {/* First Installment Option */}
          <label
            className={`payment-invoice-modal__option-item_hjk321 ${
              selectedOption === "Two Installment" ? "highlighted" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentOption"
              value="Two Installment"
              checked={selectedOption === "Two Installment"}
              onChange={() => handleOptionChange("Two Installment")}
              className="payment-invoice-modal__radio-btn_lmn987"
            />
            <div className="revampsecond">
              <p className="mgvngcv">First Installment (60%)</p>
              <p className="xfacvg">₦330,000</p>
            </div>
          </label>

          {/* Second Installment Option */}
          <label
            className={`payment-invoice-modal__option-item_hjk321 ${
              selectedOption === "Two Installment" ? "highlighted" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentOption"
              value="Two Installment"
              checked={selectedOption === "Two Installment"}
              onChange={() => handleOptionChange("Two Installment")}
              className="payment-invoice-modal__radio-btn_lmn987"
            />
            <div className="revampsecond">
              <p className="mgvngcv">Second Installment (40%)</p>
              <p className="xfacvg">₦220,000</p>
            </div>
          </label>
        </div>

        <button
          className="payment-invoice-modal__generate-btn_zxc654"
          onClick={() => handleGenerateInvoice(selectedOption)}
          disabled={!selectedOption} // Disable the button if no option is selected
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
};

export default TwoInstallment;
