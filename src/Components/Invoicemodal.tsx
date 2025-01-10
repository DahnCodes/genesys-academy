import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import "../Styles/invoicemodal.css";
import Accountmodal from "./Accountmodal";

const Invoicemodal = ({ onClose }: { onClose: () => void }) => {
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleAccountDetailsClick = () => {
    setShowAccountModal(true);
  };

  return (
    <>
      {showAccountModal ? (
        <Accountmodal />
      ) : (
        <div className="invoice-background">
          <section className="invoicewrapper">
            <header className="invoice-text">
              <h3 className="payinv1">Payment Invoice</h3>
              <IoIosCloseCircleOutline
                className="closer"
                onClick={onClose}
              />{" "}
              {/* Close button */}
            </header>
            <p className="subhead">
              To validate and confirm your offline payment, kindly upload the
              bank receipt.
            </p>

            <div className="display-invoice">
              <article className="invoice-texts">
                <MdOutlineContentCopy className="copy" />
                <div>
                  <h4 className="invnotsame">
                    60% First Installment Invoice Code
                  </h4>
                  <div className="invnotsame2">aSfDuebTUDKyxYz</div>
                </div>
              </article>

              <article className="invoice">
                <MdOutlineContentCopy className="copy" />
                <div>
                  <h4 className="invnotsame">Full Payment Invoice Code</h4>
                  <div className="invnotsame2">aSfDuebTUDKyxYz</div>
                </div>
              </article>
            </div>

            <div className="dyn_bn">


            <button
              type="button"
              className="dyn-btn"
              onClick={handleAccountDetailsClick}
            >
              Get Account Details
            </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Invoicemodal;
