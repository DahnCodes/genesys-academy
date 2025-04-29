// import React, { useState, useEffect } from "react";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // You need to import the CSS

// import "../Styles/offlinemodal.css";

// interface OfflineModalProps {
//   closeModal: () => void;
// }

// const OfflineModal = ({ closeModal }: OfflineModalProps) => {
//   const [invoiceNo, setInvoiceNo] = useState("");
//   const [email, setEmail] = useState("");
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!invoiceNo || !email || !file) {
//       toast.error("Please fill in all fields and upload a file.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const uploadResponse = await fetch(
//         "https://genesys-web-app-revamp.onrender.com/api/v1/file/upload/",
//         { method: "POST", body: formData }
//       );
//       const uploadResult = await uploadResponse.json();

//       if (!uploadResult.success) {
//         toast.error("File upload failed. Please try again.");
//         setLoading(false);
//         return;
//       }

//       const requestData = {
//         invoiceNo,
//         email,
//         fileUrl: uploadResult.data.fileUrl,
//       };

//       const validationResponse = await fetch(
//         "https://genesys-web-app-revamp.onrender.com/api/v1/validate-pay/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(requestData),
//         }
//       );
//       const validationResult = await validationResponse.json();

//       if (validationResult.success) {
//         toast.success("Payment validated successfully!");
//       } else {
//         toast.error("Payment validation failed. Please try again.");
//       }
//     } catch (err) {
//       toast.error("An error occurred while processing your request.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pay-background">
//       <div className="payment-details">
//         <div className="pay-text-payment">
//           <div className="pay-text">
//             <h3 className="cpmodalheader">Confirm Payment</h3>
//             <IoIosCloseCircleOutline className="closer" onClick={closeModal} />
//           </div>
//           <div className="subhead">
//             To validate and confirm your offline payment, kindly upload the bank
//             receipt.
//           </div>
//         </div>

//         <div className="pay-fields">
//           <form className="forms">
//             <label htmlFor="invoice" className="labelupdated">
//               Payment Invoice
//             </label>
//             <input
//               type="text"
//               id="invoice"
//               name="invoice"
//               placeholder="Enter Payment Invoice"
//               className="inputss"
//               value={invoiceNo}
//               onChange={(e) => setInvoiceNo(e.target.value)}
//             />

//             <div className="email1">
//               <label htmlFor="email" className="labelupdated">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter Email Address"
//                 className="inputss"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="receipt">
//               <label htmlFor="file" className="labelupdated">
//                 Payment Receipt
//               </label>
//               <div className="choose">
//                 <IoCloudUploadOutline className="cloud" />
//                 <p className="modcolorII">
//                   <span className="modcolor">Drag and drop your file</span>
//                   <br />
//                   <p className="png">
//                     (png, jpg, jpeg, and pdf) <br />
//                     Maximum Size: 5MB
//                   </p>
//                   {/* (png, jpg, jpeg, and pdf) <br />
//                   Maximum Size: 5MB */}
//                 </p>
//                 <input
//                   type="file"
//                   className="file"
//                   onChange={handleFileChange}
//                 />
//               </div>
//             </div>
//           </form>

//           <div className="dynamicbtn">
//             <button
//               className="dynamic-btn"
//               onClick={handleSubmit}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Submit Payment Receipt"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Add ToastContainer to display toast messages */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default OfflineModal;

import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Styles/offlinemodal.css";

interface OfflineModalProps {
  closeModal: () => void;
}

const OfflineModal = ({ closeModal }: OfflineModalProps) => {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!invoiceNo || !email || !file) {
      toast.error("Please fill in all fields and upload a file.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch(
        "https://genesys-web-app-revamp.onrender.com/api/v1/file/upload/",
        { method: "POST", body: formData }
      );
      const uploadResult = await uploadResponse.json();

      if (!uploadResult.success) {
        toast.error("File upload failed. Please try again.");
        setLoading(false);
        return;
      }

      const requestData = {
        invoiceNo,
        email,
        fileUrl: uploadResult.data.fileUrl,
      };

      const validationResponse = await fetch(
        "https://genesys-web-app-revamp.onrender.com/api/v1/validate-pay/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );
      const validationResult = await validationResponse.json();

      if (validationResult.success) {
        toast.success("Payment validated successfully!");
      } else {
        toast.error("Payment validation failed. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pay-background">
      <div className="payment-details">
        <div className="pay-text-payment">
          <div className="pay-text">
            <h3 className="cpmodalheader">Confirm Payment</h3>
            <IoIosCloseCircleOutline className="closer" onClick={closeModal} />
          </div>
          <div className="subhead">
            To validate and confirm your offline payment, kindly upload the bank
            receipt.
          </div>
        </div>

        <div className="pay-fields">
          <form className="forms">
            <label htmlFor="invoice" className="labelupdated">
              Payment Invoice
            </label>
            <input
              type="text"
              id="invoice"
              name="invoice"
              placeholder="Enter Payment Invoice"
              className="inputss"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />

            <div className="email1">
              <label htmlFor="email" className="labelupdated">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="inputss"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="receipt">
              <label htmlFor="file" className="labelupdated">
                Payment Receipt
              </label>
              <div className="choose">
                <IoCloudUploadOutline className="cloud" />
                <p className="modcolorII">
                  <span className="modcolor">Drag and drop your file</span>
                  <br />
                  <p className="png">
                    (png, jpg, jpeg, and pdf) <br />
                    Maximum Size: 5MB
                  </p>
                </p>
                <input
                  type="file"
                  className="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </form>

          <div className="dynamicbtn">
            <button
              className="dynamic-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Submit Payment Receipt"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Toast for Notifications */}
      <ToastContainer />
    </div>
  );
};

export default OfflineModal;
