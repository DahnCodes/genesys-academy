import Accordion from "../Components/Accordion";
import Navigationbar from "../Components/Navigationbar";
import banner from "../assets/banner.png";
import "../Styles/faq.css";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Faq = () => {

  const location = useLocation();

  useEffect(() => {
 
      window.scrollTo({ top: 0, behavior: "smooth" });

  }, [location]);
  return (
    <div className="body-container">
      <div>
        <Navigationbar />
        <img src={banner} alt="" className="banner" />
        <div className="faq-section">
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p>
            Necessary questions answered. Everything you need to know about
            Genesys Academy.
          </p>
          <div className="accord">
            <Accordion
              title="Is Genesys Academy a paid internship?"
              content="No, it's not. 
"
            />
            <Accordion
              title="Can I make payment in installments?"
              content="Of course, you can. We have installment plans made available.
"
            />

            <Accordion
              title="Can I change my pathway after registration?"
              content="Yes you can, provided that you reach out to us before the program begins.
"
            />

            <Accordion
              title="Do I get a certificate at the end of the program?"
              content="On completion of the program, you'll receive a certificate.
"
            />

            <Accordion
              title="How long will the learning at Genesys Academy take?"
              content="The program is scheduled for 6 months.
"
            />

            <Accordion
              title="Can I get a job recommendation after my internship with Genesys?"
              content="Provision of job opportunities is part of what we offer to our interns who successfully complete the program."
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
