import "../Styles/paysmall.css";
import React, { useState } from "react";
import Backbtn from "../Components/Backbtn";

interface PaymentPlan {
  month: string;
  amount: string;
  status: string;
  number: string;
}

const paymentData: PaymentPlan[] = [
  { month: "First Month", amount: "₦85,000", status: "Unpaid", number: "1" },
  { month: "Second Month", amount: "₦85,000", status: "Unpaid", number: "2" },
  { month: "Third Month", amount: "₦85,000", status: "Unpaid", number: "3" },
  { month: "Fourth Month", amount: "₦85,000", status: "Unpaid", number: "4" },
  { month: "Fifth Month", amount: "₦110,000", status: "Unpaid", number: "5" },
  { month: "Sixth Month", amount: "₦100,000", status: "Unpaid", number: "6" },
];

const PaySmall: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index); // Set the selected card index
  };

  return (
    <div className="containerII">
      <Backbtn />
      <h2 className="titleII">Flexible Payment Plan</h2>
      <p className="subtitle">
        Spread your payments over six months with our easy installment payment
        plan.
        <br />
        <strong>No Interest, Stay In Control.</strong>
      </p>
      <div className="gridII">
        {paymentData.map((plan, index) => (
          <div
            key={index}
            className={`card1 card1-${index + 1} ${
              selectedIndex === index ? "selected" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="gridinner">
              <h3 className="card-title">{plan.month}</h3>
              <p className="amount">{plan.amount}</p>
              <button className="status">{plan.status}</button>
            </div>
            <div className="ksks">
              <p className="ksksII">{plan.number}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="generate">
        <button className="generate-button">Generate Invoice</button>
      </div>
    </div>
  );
};

export default PaySmall;
