// import "../Styles/paysmall.css";
// import React, { useEffect, useState } from "react";
// import Backbtn from "../Components/Backbtn";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { PaysmallInvoice } from "../types/sharedtypes";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import WaveLoader from "../Components/WaveLoader";
// import "../Styles/invoicemodal.css";
// import "../Styles/accountmodal.css";
// import Invoicemodal from "../Components/Invoicemodal"

// const OfflinePaySmallSmall: React.FC = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [invoiceId, setInvoiceId] = useState("");
//   const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedInvoiceData, setSelectedInvoiceData] = useState<{
//     id: string;
//     amount: number;
//     method: string;
//   } | null>(null);
  
//   // const navigate = useNavigate();
//   const { email } = useParams();

//   const handleCardClick = (index: number) => {
//     const status = invoiceDetails[index]?.status;
//     if (status === "Paid") {
//       toast.info("This invoice has already been paid and cannot be selected.");
//       return;
//     }

//     if (isInvoiceSelectable(index)) {
//       setSelectedIndex(index);
//       setInvoiceId(invoiceDetails[index]._id);
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
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching invoice:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (email) {
//       fetchInvoiceByEmail(email);
//     }
//   }, [email]);

//   const handleGenerateInvoice = async () => {
//     if (!invoiceId) {
//       toast.error("Please select a payment option before proceeding!");
//       return;
//     }

//     const selectedInvoice = invoiceDetails.find(inv => inv._id === invoiceId);
//     if (selectedInvoice) {
//       setSelectedInvoiceData({
//         id: selectedInvoice._id,
//         amount: selectedInvoice.amount,
//         method: "Bank Transfer"
//       });
//       setShowModal(true);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const isInvoiceSelectable = (index: number) => {
//     if (index === 0) return true;
//     if (invoiceDetails[index - 1]?.status === "Paid") {
//       return true;
//     }
//     return false;
//   };

//   const getInvoiceClass = (index: number) => {
//     const status = invoiceDetails[index]?.status;

//     if (status === "Paid") {
//       return "paid";
//     } else if (isInvoiceSelectable(index)) {
//       return "enabled";
//     } else {
//       return "disabled";
//     }
//   };

//   return (
//     <div className="containerII">
//       {loading ? (
//         <WaveLoader />
//       ) : (
//         <>
//           <Backbtn />
//           <h2 className="titleII">Flexible Payment Plan</h2>
//           <p className="subtitle">
//             Spread your payments over six months with our easy installment
//             payment plan.
//             <br />
//             <strong>No Interest, Stay In Control.</strong>
//           </p>
//           <div className="gridII">
//             {invoiceDetails.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`card1 card1-${index + 1} ${getInvoiceClass(
//                   index
//                 )} ${selectedIndex === index ? "selected" : ""}`}
//                 onClick={() => handleCardClick(index)}
//                 style={{
//                   cursor: plan.status === "Paid" ? "not-allowed" : "pointer",
//                   opacity: plan.status === "Paid" ? 0.5 : 1,
//                 }}
//               >
//                 <div className="gridinner">
//                   <h3 className="card-title">{plan.title}</h3>
//                   <p className="amount">{plan.amount?.toLocaleString()}</p>
//                   <span className="status">{plan.status}</span>
//                 </div>
//                 <div className="ksks">
//                   <p className="ksksII">{index + 1}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="generate">
//             <button
//               className="generate-button"
//               onClick={handleGenerateInvoice}
//               disabled={loading || !invoiceId}
//             >
//               {loading ? (
//                 <div className="spinner"></div>
//               ) : (
//                 "Generate Invoice"
//               )}
//             </button>
            
//             {showModal && selectedInvoiceData && (
//               <div className="invoice-modal-container" style={{ position: 'relative' }}>
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '100%',
//                   right: 0,
//                   marginBottom: '10px',
//                   zIndex: 1000,
//                   width: '100%',
//                   maxWidth: '400px'
//                 }}>
//                   <Invoicemodal
//                     onClose={closeModal}
//                     invId={selectedInvoiceData.id}
//                     no={selectedInvoiceData.amount}
//                     method={selectedInvoiceData.method}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick={true}
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable={true}
//         pauseOnHover={true}
//       />
//     </div>
//   );
// };

// export default OfflinePaySmallSmall;

import "../Styles/paysmall.css";
import React, { useEffect, useState } from "react";
import Backbtn from "../Components/Backbtn";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PaysmallInvoice } from "../types/sharedtypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaveLoader from "../Components/WaveLoader";
import "../Styles/invoicemodal.css";
import "../Styles/accountmodal.css";
import Invoicemodal from "../Components/Invoicemodal";

const OfflinePaySmallSmall: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDetails, setInvoiceDetails] = useState<PaysmallInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoiceData, setSelectedInvoiceData] = useState<{
    invoiceNo: string;
    amount: number;
    method: string;
  } | null>(null);

  const { email } = useParams();

  const handleCardClick = (index: number) => {
    const status = invoiceDetails[index]?.status;
    if (status === "Paid") {
      toast.info("This invoice has already been paid and cannot be selected.");
      return;
    }

    if (isInvoiceSelectable(index)) {
      setSelectedIndex(index);
      setInvoiceNo(invoiceDetails[index].invoiceNo);
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching invoice:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      fetchInvoiceByEmail(email);
    }
  }, [email]);

  const handleGenerateInvoice = async () => {
    if (!invoiceNo) {
      toast.error("Please select a payment option before proceeding!");
      return;
    }

    const selectedInvoice = invoiceDetails.find(inv => inv.invoiceNo === invoiceNo);
    if (selectedInvoice) {
      setSelectedInvoiceData({
        invoiceNo: selectedInvoice.invoiceNo,
        amount: selectedInvoice.amount,
        method: "Bank Transfer",
      });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const isInvoiceSelectable = (index: number) => {
    if (index === 0) return true;
    if (invoiceDetails[index - 1]?.status === "Paid") {
      return true;
    }
    return false;
  };

  const getInvoiceClass = (index: number) => {
    const status = invoiceDetails[index]?.status;

    if (status === "Paid") {
      return "paid";
    } else if (isInvoiceSelectable(index)) {
      return "enabled";
    } else {
      return "disabled";
    }
  };

  return (
    <div className="containerII">
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
            {invoiceDetails.map((plan, index) => (
              <div
                key={index}
                className={`card1 card1-${index + 1} ${getInvoiceClass(
                  index
                )} ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: plan.status === "Paid" ? "not-allowed" : "pointer",
                  opacity: plan.status === "Paid" ? 0.5 : 1,
                }}
              >
                <div className="gridinner">
                  <h3 className="card-title">{plan.title}</h3>
                  <p className="amount">{plan.amount?.toLocaleString()}</p>
                  <span className="status">{plan.status}</span>
                  {/* Display invoiceNo instead of index */}
                  {/* <p className="invoiceNo">Invoice No: {plan.invoiceNo}</p> */}
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
              disabled={loading || !invoiceNo}
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Generate Invoice"
              )}
            </button>

            {showModal && selectedInvoiceData && (
              <div className="invoice-modal-container" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  bottom: '100%',
                  right: 0,
                  marginBottom: '10px',
                  zIndex: 1000,
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <Invoicemodal
                    onClose={closeModal}
                    invId={selectedInvoiceData.invoiceNo}
                    no={selectedInvoiceData.amount}
                    method={selectedInvoiceData.method}
                  />
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  );
};

export default OfflinePaySmallSmall;
