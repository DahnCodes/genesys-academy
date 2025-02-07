// import "../Styles/paysmall.css";
// import React, { useEffect, useState } from "react";
// import Backbtn from "../Components/Backbtn";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { PaysmallInvoice } from "../types/sharedtypes";
// // Import react-toastify
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import styles

// const PaySmall: React.FC = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [invoiceId, setInvoiceId] = useState("");
//   const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
//   const [loading, setLoading] = useState<boolean>(false); // Track loading state
//   const navigate = useNavigate(); // Initialize navigate function
//   const { email } = useParams();

//   const handleCardClick = (index: number) => {
//     const status = sortedInvoiceDetails[index]?.status;
//     if (status === "Paid") {
//       // Show a message if the invoice is already paid and cannot be selected
//       toast.info("This invoice has already been paid and cannot be selected.");
//       return; // Prevent any action if it's paid
//     }

//     if (isInvoiceSelectable(index)) {
//       setSelectedIndex(index); // Set the selected card index
//       setInvoiceId(invoiceDetails[index]._id); // Set the selected invoice ID
//     }
//   };

//   const fetchInvoiceByEmail = async (email: string) => {
//     if (!email) return;
//     try {
//       const response = await axios.get(
//         `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/`,
//         {
//           params: { email },
//         }
//       );
//       setInvoiceDetails(response.data.data);
//     } catch (error) {
//       console.error("Error fetching invoice:", error);
//     }
//   };

//   useEffect(() => {
//     if (email) {
//       fetchInvoiceByEmail(email);
//     }
//   }, [email]);

//   const handleGenerateInvoice = async () => {
//     if (!invoiceId) {
//       // Show toast notification if no invoice ID is selected
//       toast.error("Please select a payment option before proceeding!");
//       return;
//     }

//     setLoading(true); // Set loading to true when the button is clicked
//     try {
//       // Proceed to generate invoice
//       navigate(`/create-invoice/pay-small/${invoiceId}`);
//     } catch (error) {
//       console.error("Error generating invoice:", error);
//     }
//     setLoading(false); // Stop loading once navigation is complete
//   };

//   // Sorting the invoiceDetails according to your requested order
//   const sortedInvoiceDetails =
//     invoiceDetails.length > 0
//       ? [
//           invoiceDetails[5], // First stays first
//           invoiceDetails[4], // Fifth becomes second
//           invoiceDetails[3], // Fourth becomes third
//           invoiceDetails[1], // Second becomes fourth
//           invoiceDetails[2], // Third stays fifth
//           invoiceDetails[0], // Sixth stays sixth
//         ]
//       : [];

//   // Check if the invoice is selectable based on the previous invoice's status
//   const isInvoiceSelectable = (index: number) => {
//     // Allow selecting the first invoice
//     if (index === 0) return true;
//     // If the previous invoice is paid, allow selecting the current one
//     if (sortedInvoiceDetails[index - 1]?.status === "Paid") {
//       return true;
//     }
//     return false; // Otherwise, it's not selectable
//   };

//   // Check if the invoice is paid and return respective classes for styling
//   const getInvoiceClass = (index: number) => {
//     const status = sortedInvoiceDetails[index]?.status;

//     if (status === "Paid") {
//       // Apply "paid" class for paid invoices
//       return "paid";
//     } else if (isInvoiceSelectable(index)) {
//       // Apply "enabled" class for selectable invoices
//       return "enabled";
//     } else {
//       // Apply "disabled" class for non-selectable invoices
//       return "disabled";
//     }
//   };

//   return (
//     <div className="containerII">
//       <Backbtn />
//       <h2 className="titleII">Flexible Payment Plan</h2>
//       <p className="subtitle">
//         Spread your payments over six months with our easy installment payment
//         plan.
//         <br />
//         <strong>No Interest, Stay In Control.</strong>
//       </p>
//       <div className="gridII">
//         {sortedInvoiceDetails.map((plan, index) => (
//           <div
//             key={index}
//             className={`card1 card1-${index + 1} ${getInvoiceClass(index)} ${
//               selectedIndex === index ? "selected" : ""
//             }`}
//             onClick={() => handleCardClick(index)}
//             style={{
//               cursor: plan.status === "Paid" ? "not-allowed" : "pointer", // Disable click on paid invoices
//               opacity: plan.status === "Paid" ? 0.5 : 1, // Fade out paid invoices
//             }}
//           >
//             <div className="gridinner">
//               <h3 className="card-title">{plan.title}</h3>
//               <p className="amount">{plan.amount}</p>
//               <span className="status">{plan.status}</span>
//             </div>
//             <div className="ksks">
//               <p className="ksksII">{index + 1}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="generate">
//         <button
//           className="generate-button"
//           onClick={handleGenerateInvoice}
//           disabled={loading || !invoiceId} // Disable the button if loading or no invoice selected
//         >
//           {loading ? (
//             <div className="spinner"></div> // Loading spinner
//           ) : (
//             "Generate Invoice"
//           )}
//         </button>
//       </div>
//       <ToastContainer
//         // position="top-right"
//         // autoClose={5000}
//         // hideProgressBar={false}

//         position="top-right"
//         autoClose={5000} // Auto close after 5 seconds
//         hideProgressBar={false} // Show progress bar
//         newestOnTop={true} // New toasts will appear on top
//         closeOnClick={true} // Close toast on click
//         rtl={false} // Right to left support
//         pauseOnFocusLoss={false} // Pause on focus loss
//         draggable={true} // Allow toast dragging
//         pauseOnHover={true} // Pause on hover
//       />
//     </div>
//   );
// };

// export default PaySmall;

import "../Styles/paysmall.css";
import React, { useEffect, useState } from "react";
import Backbtn from "../Components/Backbtn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PaysmallInvoice } from "../types/sharedtypes";
// Import react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import WaveLoader from "../Components/WaveLoader"; // Import the loading state

const PaySmall: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [invoiceId, setInvoiceId] = useState("");
  const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Initially set loading to true
  const navigate = useNavigate(); // Initialize navigate function
  const { email } = useParams();

  const handleCardClick = (index: number) => {
    const status = sortedInvoiceDetails[index]?.status;
    if (status === "Paid") {
      // Show a message if the invoice is already paid and cannot be selected
      toast.info("This invoice has already been paid and cannot be selected.");
      return; // Prevent any action if it's paid
    }

    if (isInvoiceSelectable(index)) {
      setSelectedIndex(index); // Set the selected card index
      setInvoiceId(invoiceDetails[index]._id); // Set the selected invoice ID
    }
  };

  const fetchInvoiceByEmail = async (email: string) => {
    if (!email) return;
    try {
      const response = await axios.get(
        `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/`,
        {
          params: { email },
        }
      );
      setInvoiceDetails(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching invoice:", error);
      setLoading(false); // Set loading to false in case of error too
    }
  };

  useEffect(() => {
    if (email) {
      fetchInvoiceByEmail(email);
    }
  }, [email]);

  const handleGenerateInvoice = async () => {
    if (!invoiceId) {
      // Show toast notification if no invoice ID is selected
      toast.error("Please select a payment option before proceeding!");
      return;
    }

    setLoading(true); // Set loading to true when the button is clicked
    try {
      // Proceed to generate invoice
      navigate(`/create-invoice/pay-small/${invoiceId}`);
    } catch (error) {
      console.error("Error generating invoice:", error);
    }
    setLoading(false); // Stop loading once navigation is complete
  };

  // Sorting the invoiceDetails according to your requested order
  const sortedInvoiceDetails =
    invoiceDetails.length > 0
      ? [
          invoiceDetails[5], // First stays first
          invoiceDetails[4], // Fifth becomes second
          invoiceDetails[3], // Fourth becomes third
          invoiceDetails[1], // Second becomes fourth
          invoiceDetails[2], // Third stays fifth
          invoiceDetails[0], // Sixth stays sixth
        ]
      : [];

  // Check if the invoice is selectable based on the previous invoice's status
  const isInvoiceSelectable = (index: number) => {
    // Allow selecting the first invoice
    if (index === 0) return true;
    // If the previous invoice is paid, allow selecting the current one
    if (sortedInvoiceDetails[index - 1]?.status === "Paid") {
      return true;
    }
    return false; // Otherwise, it's not selectable
  };

  // Check if the invoice is paid and return respective classes for styling
  const getInvoiceClass = (index: number) => {
    const status = sortedInvoiceDetails[index]?.status;

    if (status === "Paid") {
      // Apply "paid" class for paid invoices
      return "paid";
    } else if (isInvoiceSelectable(index)) {
      // Apply "enabled" class for selectable invoices
      return "enabled";
    } else {
      // Apply "disabled" class for non-selectable invoices
      return "disabled";
    }
  };

  return (
    <div className="containerII">
      {/* Show LoadingState if loading is true */}
      {loading ? (
        <WaveLoader />
      ) : (
        <>
          <Backbtn />
          <h2 className="titleII">Flexible Payment Plan</h2>
          <p className="subtitle">
            Spread your payments over six months with our easy installment
            payment plan.
            <br />
            <strong>No Interest, Stay In Control.</strong>
          </p>
          <div className="gridII">
            {sortedInvoiceDetails.map((plan, index) => (
              <div
                key={index}
                className={`card1 card1-${index + 1} ${getInvoiceClass(
                  index
                )} ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: plan.status === "Paid" ? "not-allowed" : "pointer", // Disable click on paid invoices
                  opacity: plan.status === "Paid" ? 0.5 : 1, // Fade out paid invoices
                }}
              >
                <div className="gridinner">
                  <h3 className="card-title">{plan.title}</h3>
                  <p className="amount">{plan.amount}</p>
                  <span className="status">{plan.status}</span>
                </div>
                <div className="ksks">
                  <p className="ksksII">{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="generate">
            <button
              className="generate-button"
              onClick={handleGenerateInvoice}
              disabled={loading || !invoiceId} // Disable the button if loading or no invoice selected
            >
              {loading ? (
                <div className="spinner"></div> // Loading spinner for the button
              ) : (
                "Generate Invoice"
              )}
            </button>
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={true} // New toasts will appear on top
        closeOnClick={true} // Close toast on click
        rtl={false} // Right to left support
        pauseOnFocusLoss={false} // Pause on focus loss
        draggable={true} // Allow toast dragging
        pauseOnHover={true} // Pause on hover
      />
    </div>
  );
};

export default PaySmall;
