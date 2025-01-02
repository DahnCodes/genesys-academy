import { IoIosCloseCircleOutline } from "react-icons/io";
import "./styling/accountmodal.css";


const Accountmodal = () => {

  return (
    <>
      <div className="account-background">
        <div className="account-head">
          <h3>Account Details</h3>
          <IoIosCloseCircleOutline className="closer" />
        </div>

        <div className="account-text">
          <h4>Account Name</h4>
          <p>Hubly LTD</p>

          <h4>Account Number</h4>
          <p>1228322121</p>

          <h4>Bank Name</h4>
          <p>Zenith Bank PLC</p>
        </div>
        <button className="dyn-button">Hompage</button>
      </div>
    </>
  );
};

export default Accountmodal;
