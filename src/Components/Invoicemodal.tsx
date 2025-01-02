import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import "./styling/invoicemodal.css";

const Invoicemodal = () => {
  
  return (
    <>
      <div className="invoice-background">
        <div className="invoice-text">
          <h3>Payment Invoice</h3>
          <IoIosCloseCircleOutline className="closer" />
        </div>
        <p className="subhead">
          To validate and confirm your offline payment, kindly upload the bank
          receipt.
        </p>

        <div className="display-invoice">
          <div className="invoice-texts">
            <MdOutlineContentCopy className="copy" />
            <span>
              <h4>60% First Installment Invoice Code</h4>
              <p>aSfDuebTUDKyxYz</p>
            </span>
          </div>

          <div className="invoice">
            <MdOutlineContentCopy className="copy" />
            <span>
              <h4>Full Payment Invoice Code</h4>
              <p>aSfDuebTUDKyxYz</p>
            </span>
          </div>
        </div>
        <button className="dyn-btn">Get Account Details</button>
      </div>
    </>
  );
};

export default Invoicemodal;
