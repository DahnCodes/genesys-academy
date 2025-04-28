// import { useState } from "react";
// import "../Styles/paymentmodal.css";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Invoicemodal from "./Invoicemodal";
// import TwoInstallment from "../Components/OfflineTwoInstallment";
// import {
//   InternDataResFromPersonalData,
//   InvoiceGenerateResponse,
// } from "../types/sharedtypes";
// import { paymentOptions } from "../configs/paymentOptions";
// import axios from "axios";
// // Import react-toastify
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import styles

// const PaymentOptionsOffline = ({
//   onClose,
//   personalDataResponse,
// }: {
//   onClose: () => void;
//   personalDataResponse: InternDataResFromPersonalData;
// }) => {
//   const [activeOption, setActiveOption] = useState("");
//   const [buttonContent, setButtonContent] = useState("Make Payment");
//   const [showInvoiceModal, setShowInvoiceModal] = useState(false);
//   const [showTwoInstallmentModal, setShowTwoInstallmentModal] = useState(false);
//   const [newinvoiceid, setNewInvoiceId] = useState("");
//   const [newInvoiceamount, setNewInvoiceamount] = useState<number | string>("");
//   const [newInvoicemethod, setNewInvoicemethod] = useState("");
//   const [loading, setLoading] = useState<boolean>(false); // Loading state to manage button spinner

//   const handleOptionChange = (option: string, content: string) => {
//     setActiveOption(option);
//     setButtonContent(content);
//   };

//   const handleButtonClick = async () => {
//     if (activeOption === "Two Installment") {
//       setLoading(true); // Start loading when button is clicked
//       setShowTwoInstallmentModal(true);
//       await handleCreateInvoice();
//     } else if (activeOption) {
//       setLoading(true); // Start loading when button is clicked
//       await handleCreateInvoice();
//     } else {
//       toast.error("Please select a payment option first!"); // Show error if no option selected
//     }
//   };

//   const handleCreateInvoice = async () => {
//     try {
//       const response = await axios.post(
//         `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${personalDataResponse.email}`,
//         { paymentOption: activeOption }
//       );

//       const invGenData: InvoiceGenerateResponse[] = response.data.data;
//       setNewInvoiceId(invGenData[0]?.invoiceNo);
//       setNewInvoiceamount(invGenData[0]?.amount);
//       setNewInvoicemethod(invGenData[0]?.method);

//       if (response.data.success) {
//         setShowInvoiceModal(true);
//       } else {
//         console.log("Error occurred while generating the invoice.");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     setLoading(false); // Stop loading after API call is done
//   };

//   return (
//     <>
//       {!showInvoiceModal && !showTwoInstallmentModal ? (
//         <div className="payment-background">
//           <section className="payment-modal">
//             <header className="head-text">
//               <h4 className="headpayment">Payment Options</h4>
//               <IoIosCloseCircleOutline className="close" onClick={onClose} />
//             </header>
//             <div className="options">
//               {/* Full Payment Option */}
//               <div
//                 className={`full-pay ${
//                   activeOption === "Full Payment" ? "active" : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionChange("Full Payment", "Generate Invoice")
//                 }
//               >
//                 <label htmlFor="Full Payment" className="full-pay">
//                   <input
//                     type="radio"
//                     id="Full Payment"
//                     name="payment"
//                     value="Full Payment"
//                     className="radio"
//                     checked={activeOption === "Full Payment"}
//                     onChange={() =>
//                       handleOptionChange("Full Payment", "Pay 550,000 Now")
//                     }
//                   />
//                   <div className="fullpay-text">
//                     <p className="top">{paymentOptions.fullPayment.label}</p>
//                     <p className="down">{paymentOptions.fullPayment.price}</p>
//                   </div>
//                 </label>
//               </div>

//               {/* Two Installment Option */}
//               <div
//                 className={`full-pay ${
//                   activeOption === "Two Installment" ? "active" : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionChange("Two Installment", "Start Payment")
//                 }
//               >
//                 <label htmlFor="Two Installment" className="full-pay">
//                   <input
//                     type="radio"
//                     id="Two Installment"
//                     name="payment"
//                     value="Two Installment"
//                     className="radio"
//                     checked={activeOption === "Two Installment"}
//                     onChange={() =>
//                       handleOptionChange(
//                         "Two Installment",
//                         "Pay First Installment (330,000)"
//                       )
//                     }
//                   />
//                   <div className="fullpay-text">
//                     <p className="top">{paymentOptions.installment.label}</p>
//                     <p className="down">Two Part Payment</p>
//                   </div>
//                 </label>
//               </div>

//               {/* Pay Small Small Option */}
//               <div
//                 className={`full-pay ${
//                   activeOption === "Pay Small Small" ? "active" : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionChange("Pay Small Small", "Start Payment")
//                 }
//               >
//                 <label htmlFor="Pay Small Small" className="full-pay">
//                   <input
//                     type="radio"
//                     id="Pay Small Small"
//                     name="payment"
//                     value="Pay Small Small"
//                     className="radio"
//                     checked={activeOption === "Pay Small Small"}
//                     onChange={() =>
//                       handleOptionChange(
//                         "Pay Small Small",
//                         "Spread Payment Plan"
//                       )
//                     }
//                   />
//                   <div className="fullpay-text">
//                     <p className="top">Pay Small Small</p>
//                     <p className="down">Spread Payment</p>
//                   </div>
//                 </label>
//               </div>
//             </div>

//             {/* Button Section */}
//             <div className="revampbn">
//               <button
//                 type="button"
//                 className="dynamic-button"
//                 onClick={handleButtonClick}
//                 disabled={loading} // Disable button when loading
//               >
//                 {loading ? (
//                   <div className="spinner"></div> // Loading spinner
//                 ) : (
//                   buttonContent
//                 )}
//               </button>
//             </div>
//           </section>
//         </div>
//       ) : null}

//       {/* Invoice Modal */}
//       {showInvoiceModal && (
//         <Invoicemodal
//           onClose={onClose}
//           invId={newinvoiceid}
//           no={newInvoiceamount}
//           method={newInvoicemethod}
//         />
//       )}

//       {/* Two Installment Modal */}
//       {showTwoInstallmentModal && (
//         <TwoInstallment
//           onClose={onClose}
//           personalDataResponse={personalDataResponse}
//         />
//       )}

//       {/* Toast Notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//       />
//     </>
//   );
// };

// export default PaymentOptionsOffline;

import { useState } from "react";
import "../Styles/paymentmodal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Invoicemodal from "./Invoicemodal";
import TwoInstallment from "../Components/OfflineTwoInstallment";
import {
  InternDataResFromPersonalData,
  InvoiceGenerateResponse,
} from "../types/sharedtypes";
import { paymentOptions } from "../configs/paymentOptions";
import axios from "axios";
// Import react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

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
  const [loading, setLoading] = useState<boolean>(false); // Loading state to manage button spinner

  const handleOptionChange = (option: string, content: string) => {
    setActiveOption(option);
    setButtonContent(content);
  };

  const handleButtonClick = async () => {
    if (activeOption === "Two Installment") {
      setLoading(true); // Start loading when button is clicked
      await handleCreateInvoice(); // Create invoice before showing Two Installment modal
    } else if (activeOption) {
      setLoading(true); // Start loading when button is clicked
      await handleCreateInvoice(); // Create invoice before proceeding with the payment
    } else {
      toast.error("Please select a payment option first!"); // Show error if no option selected
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
          
          setShowTwoInstallmentModal(true); // Show Two Installment modal after generating the invoice
          if (response.data.message === "Redirecting to existing invoice") {
            setShowTwoInstallmentModal(true); // Show Invoice modal if it's a different payment option
            console.log("got here 2");
          }
        } else {
          console.log("got nowhere 3");
          
          setShowInvoiceModal(true); // Show Invoice modal if it's a different payment option
          if (response.data.message === "Redirecting to existing invoice") {
            setShowInvoiceModal(true); // Show Invoice modal if it's a different payment option
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
    setLoading(false); // Stop loading after API call is done
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
                    <p className="top">{paymentOptions.fullPayment.label}</p>
                    <p className="down">{paymentOptions.fullPayment.price}</p>
                  </div>
                </label>
              </div>

              {/* Two Installment Option */}
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
                  />
                  <div className="fullpay-text">
                    <p className="top">Pay Small Small</p>
                    <p className="down">Spread Payment</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Button Section */}
            <div className="revampbn">
              <button
                type="button"
                className="dynamic-button"
                onClick={handleButtonClick}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <div className="spinner"></div> // Loading spinner
                ) : (
                  buttonContent
                )}
              </button>
            </div>
          </section>
        </div>
      ) : null}

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <Invoicemodal
          onClose={onClose}
          invId={newinvoiceid}
          no={newInvoiceamount}
          method={newInvoicemethod}
        />
      )}

      {/* Two Installment Modal */}
      {showTwoInstallmentModal && (
        <TwoInstallment
          onClose={onClose}
          personalDataResponse={personalDataResponse}
        />
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
};

export default PaymentOptionsOffline;
