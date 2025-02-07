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
              content="Yes, Genesys Academy offers paid internship opportunities, providing interns with valuable work experience."
            />
            <Accordion
              title="Can I make payment in installments?"
              content="Yes, Genesys Academy offers flexible payment plans, allowing you to pay for your program in installments to ease the financial burden."
            />

            <Accordion
              title="Can I change my pathway after registration?"
              content="Yes, you can switch your pathway within the specified period after registration, providing you with the flexibility to adjust your learning direction if necessary."
            />

            <Accordion
              title="Do I get a certificate at the end of the program?"
              content="Yes, upon successful completion of the program, you will receive an official certificate that acknowledges your achievements and skills gained throughout the course."
            />

            <Accordion
              title="How long will the learning at Genesys Academy take?"
              content="The duration of the program depends on the chosen pathway, but typically, it lasts for 6 months."
            />

            <Accordion
              title="Can I get a job recommendation after my internship with Genesys?"
              content="Yes, Genesys Academy provides job recommendation support for exceptional interns, helping you connect with top employers and enhancing your career prospects."
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
