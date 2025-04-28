import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navigationbar from './Components/Navigationbar'
import LandingPage from "./Pages/LandingPage";
import Productdesign from "./Pages/Productdesign";
import Frontend from "./Pages/Frontend";
import Backend from "./Pages/Backend";
import Dataanalysis from "./Pages/Dataanalysis";
import Qualityassurance from "./Pages/Qualityassurance";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Personaldata from "./Components/Personaldata";
import PaySmall from "./Components/PaySmall";
import CreateInvoice from "./Components/CreateInvoice";
import Installment from "./Components/Installment";
import Paysmallinvoice from "./Components/Paysmallinvoice";
import Paysmallsmall from "./Pages/Paysmallsmall";
import RedirectFullPayment from "./Components/RedirectFullPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productdesign" element={<Productdesign />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/dataanalysis" element={<Dataanalysis />} />
        <Route path="/qualityassurance" element={<Qualityassurance />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/personaldata" element={<Personaldata />} />
        <Route path="/pay-small/:email" element={<PaySmall />} />
        <Route
          path="/create-invoice/full-payment/:invoiceId"
          element={<CreateInvoice />}
        />
        <Route
          path="/create-invoice/installment/:invoiceId"
          element={<Installment />}
        />
        <Route
          path="/create-invoice/pay-small/:invoiceId"
          element={<Paysmallinvoice />}
        />
        {/* <Route path="/pay-small" element={<PaySmall />} /> */}
        <Route path="/pay-smallsmall" element={<Paysmallsmall />} />
        <Route
          path="/redirect/full-payment/:email"
          element={<RedirectFullPayment />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
