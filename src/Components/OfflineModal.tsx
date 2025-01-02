import { IoIosCloseCircleOutline } from "react-icons/io";
import "./styling/offlinemodal.css";
import { IoCloudUploadOutline } from "react-icons/io5";

const OfflineModal = () => {
  return (
    <>
      <div className="pay-background">
        <div className="payment-details">
          <div className="pay-text">
            <h3>Confirm Payment</h3>
            <IoIosCloseCircleOutline className="closer" />
          </div>
          <p className="subhead">
            To validate and confirm your offline payment, kindly upload the bank
            receipt.
          </p>

          <div className="pay-fields">
            <form action="" className="forms">
              <label htmlFor="">Payment Invoice</label>
              <br />
              <input
                type="text"
                id="invoice"
                name="invoice"
                placeholder="Enter Payment Invoice"
                className="inputs"
              />
              <br />
              <div className="email">
                <label htmlFor="">Email Address</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="inputs"
                />
              </div>
              <div className="receipt">
                <label htmlFor="">Payment Reciept</label>
                <div className="choose">
                  <IoCloudUploadOutline className="cloud" />
                  <p>
                    <span>Drag and drop your file</span>
                    <br />
                    (png, jpg, jpeg, and pdf) <br />
                    Maximum Size: 5MB
                  </p>
                  <input type="file" className="file"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button className="dynamic-btn">Submit Payment Reciept</button>
      </div>
    </>
  );
};

export default OfflineModal;
