import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Backbtn from "../Components/Backbtn";
import genesyslogo from "../assets/Logo.png";
import "../Styles/createinvoice.css";
import { InvoiceData } from "../types/sharedtypes";
import { HiArrowNarrowRight } from "react-icons/hi";
import WaveLoader from "../Components/WaveLoader"; 

const Installment = () => {
  const { invoiceId } = useParams();
  const { pathname } = useLocation();

  const [invoicedetails, setInvoiceDetails] = useState<InvoiceData>(
    {} as InvoiceData
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [payOp, setPayOp] = useState("installment"); 
  const [invoiceDate, setInvoiceDate] = useState<string>("");

  useEffect(() => {
    if (pathname.includes("installment")) {
      setPayOp("installment");
    }
  }, [pathname]);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get(
          `https://genesys-web-app-revamp.onrender.com/api/v1/invoice/${invoiceId}`,
          { headers: { "Content-Type": "application/json" } }
        );
        setInvoiceDetails(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (invoiceId) {
      fetchInvoice();
    } else {
      setError("Invoice ID is missing");
      setLoading(false);
    }
  }, [invoiceId]);

  useEffect(() => {
    const today = new Date();
    const invoiceFormatted = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setInvoiceDate(invoiceFormatted);
  }, []);

  const handleProceedToPayment = async () => {
    try {
      const response = await axios.post(
        `https://genesys-web-app-revamp.onrender.com/api/v1/payment/paystack/initialize/${invoicedetails.email}`,
        { invoiceId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data?.authorizationUrl) {
        window.location.href = response.data.authorizationUrl;
      } else {
        console.error("Error initializing Paystack:", response.data);
        setError("Error initializing payment.");
      }
    } catch (err: any) {
      setError("An error occurred during payment initialization.");
    }
  };

  if (loading) return <WaveLoader />;
 
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="createInvoice">
      <Backbtn />
      <img src={genesyslogo} alt="logo" className="academylogo" />
      <div className="invoice-title">
        <div className="nfthdc">Invoice</div>
        <p className="jvhv">Invoice: {invoicedetails?.invoiceNo}</p>
        <p className="yqean2">Date: {invoiceDate}</p>
      </div>
      <div className="company-info">
        <div className="cinfo">
          <p>Genesys Academy</p>
          <p>Kilometer 7, Enugu/Port Harcourt Expressway, Enugu, Nigeria.</p>
          <p>Email: academy@genesystechhub.com</p>
          <p>Phone: +234 814 012 0539</p>
        </div>
      </div>
      <section className="bill-to">
        <h6 className="mghvfgh">Bill To</h6>
        <p>
          {invoicedetails?.internId.firstName}{" "}
          {invoicedetails?.internId.lastName}
        </p>
        <p>Email: {invoicedetails?.email}</p>
        <p>Phone: {invoicedetails?.internId.phoneNumber}</p>
      </section>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{invoicedetails?.title}</td>
            <td>{invoicedetails?.amount}</td>
            <td>{invoicedetails?.amount}</td>
          </tr>
        </tbody>
      </table>
      <div className="sub">
        <p>Total: {invoicedetails?.amount}</p>
      </div>
      <footer className="payment-info">
        <div className="payment-buttonpn">
          <button className="payment-button" onClick={handleProceedToPayment}>
            Proceed To Payment <HiArrowNarrowRight />
          </button>
        </div>
      </footer>
      <div className="bye">{payOp}</div>
    </div>
  );
};

export default Installment;
