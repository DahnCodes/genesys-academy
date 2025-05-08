import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import "../Styles/invoicemodal.css";
import { toast, ToastContainer } from "react-toastify";
import "../Styles/accountmodal.css";

const Invoicemodal = ({
  onClose,
  invId,
  no,
  method,
}: {
  onClose: () => void;
  invId: any;
  no: any;
  method: any;
}) => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(invId)
      .then(() => {
        toast.success("Invoice ID copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy invoice ID.");
      });
  };

  const handleCopyClick1 = () => {
    const accountNumber = "1228322121";
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        toast.success("Account number copied");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to Account Number.");
      });
  };

  return (
    <>
      <div className="invoice-background">
        <section className="invoicewrapper">
          <header className="invoice-text">
            <h3 className="payinv1">Payment Details</h3>
            <IoIosCloseCircleOutline
              className="closer"
              onClick={onClose}
            />{" "}
            {/* Close button */}
          </header>

          <div className="knjkn">Invoice Code</div>

          <article className="subhead2">
            <div className="kbh">
              <div className="icon-container">
                <MdOutlineContentCopy
                  className="copy"
                  onClick={handleCopyClick}
                />
              </div>
              <div className="gcvg">
                <div className="invnotsame">{invId}</div>
                <div className="invnotsame2">{method}</div>
              </div>
            </div>
          </article>

          <div className="display-invoice">
            <div className="hg">
              Amount: <span className="mb">{no?.toLocaleString()}</span>
            </div>

            <section className="account-background1">
              <header className="account-head1">
                <h3 className="acces">Account Details</h3>
              </header>

              <div className="account-text">
                <div className="acnumberj">
                  Account Name: <span className="mb">Hubly LTD</span>
                </div>
                {/* <p className="acnumberj2">Hubly LTD</p> */}

                <div className="acnumberj">
                  Bank Name: <span className="mb">Zenith Bank PLC</span>
                </div>
                {/* <p className="acnumberj2">Zenith Bank PLC</p> */}

                <div className="acnumberj" id="mmmm">
                  {" "}
                  Account Number:
                  <span>
                    <p className="acnumberj">
                      <span className="mb">1228322121 </span>
                      <span>
                        <MdOutlineContentCopy
                          className="copy"
                          onClick={handleCopyClick1}
                        />
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="jeffisannoying">
            <p className="azx">
              Payment can be made directly to the office, to the bank, or
              through POS terminals.
            </p>
            <p className="az1x">
              Submit/upload receipt(s) with INVOICE NUMBER to validate payment.
            </p>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Invoicemodal;
