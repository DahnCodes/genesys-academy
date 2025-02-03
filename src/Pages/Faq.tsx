import Accordion from "../Components/Accordion";
import Navigationbar from "../Components/Navigationbar";
import banner from "../assets/banner.png";
import "../Styles/faq.css";
import Footer from "../Components/Footer";
const Faq = () => {
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
              content="yes"
            />
            <Accordion
              title="Can I make payment in installments?"
              content="yes"
            />
            <Accordion
              title="Can I change my pathway after registration?"
              content="yes"
            />
            <Accordion
              title="Do I get a certificate at the end of the program?"
              content="yes"
            />
            <Accordion
              title="How long will the learning at Genesys Academy take?"
              content="yes"
            />
            <Accordion
              title="Can I get a job recommendation after my internship with Genesys?"
              content="yes"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
