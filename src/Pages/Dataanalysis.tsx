import Emptynav from "../Components/Emptynav";
import Goback from "../Components/Goback";
import Productcard from "../Components/Productcard";
import design from "../assets/Design.png";
import "../Styles/productdesign.css";
import da from "../assets/da.png";
import da2 from "../assets/da2.png";
import Footer from "../Components/Footer";
import Qualitycard from "../Components/Qualitycard";
import Backcard from "../Components/Backcard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Dataanalysis = () => {
  const location = useLocation();

  useEffect(() => {
 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
   
  }, [location]); 
  return (
    <div className="body-container">
    <div>
      <Emptynav />

      <Goback />
      <section className="about">
        <div className="about-pd">
          <img src={da} alt="" className="pd" />

          <div className="about-text">
            <h1>About this pathway</h1>
            <p>
              Data Analysis (DA) involves examining, cleaning, transforming, and
              modeling data to discover useful <br />information, draw conclusions,
              and support decision-making. This field focuses on applying
              statistical <br />and computational techniques to large datasets to
              identify patterns, trends, and relationships.
            </p>
            <p>
              Data Analysts use tools such as Python, R, SQL, and Excel, along
              with visualization tools like Tableau <br />and Power BI, to analyze
              data effectively. They work closely with stakeholders across
              various <br />departments to provide insights that drive business
              strategies and improve performance.
            </p>
          </div>
        </div>
      </section>

      <section className="learn">
        <div className="learn-wrap">
          <div className="learn-point">
            <h2>What you’ll learn</h2>
            <ul className="list">
              <li>
                Data Cleaning and Preprocessing: Learn techniques to clean and
                prepare data for <br />analysis.
              </li>
              <li>
                Statistical Analysis: Understand the principles of statistical
                analysis to interpret <br />data accurately.
              </li>
              <li>
                Data Visualization: Master tools like Tableau and Power BI to
                create compelling <br />data visualizations.
              </li>
              <li>
                Programming for Data Analysis: Gain proficiency in Python for
                data manipulation <br />and analysis.
              </li>
              <li>
                SQL for Data Management: Learn to query and manage databases
                using SQL.
              </li>
              {/* <li>
                Collaboration: Work effectively with cross-functional teams to
                turn design <br />
                concepts into real products.
              </li> */}
            </ul>
          </div>
          <div className="require">
            <h2>Requirements</h2>
            <ul className="lists">
              <li>A fully functional laptop</li>
              <li>A working mobile phone.</li>
              <li>A learning attitude; and</li>
              <li>A desire to achieve excellence.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="curri">
        <h2>Curriculum</h2>
        <p>
          This program is designed to provide you with in-depth knowledge on the
          following:
        </p>
        <div className="learn-wrapper">
          <div className="first-list">
            <ul className="da-list">
              <li>Introduction to Data Analysis</li>
              <li>Gathering Data</li>
              <li>Introduction to Spreadsheets</li>
              <li>Intermediate Excel: Formulas, Functions</li>
              {/* <li>UI Design Elements and Components</li> */}
            </ul>
          </div>
          <div className="second-list">
            <ul className="da-list2">
              <li>Advanced Excel: Conditional Formatting, VLOOKUP, XLOOKU</li>
              <li>Introduction to SQL; MSSQL</li>
              <li>Business Intelligence Tools; Power BI and Tableau</li>
              <li>Data Analysis with R programming</li>
              {/* <li>Multi Device Design and Responsive Design</li> */}
            </ul>
          </div>
        </div>
        <img src={da2} alt="" className="pd2" />
        <img src={design} alt="" className="design" />
      </section>

      <section className="others">
        <h2>Other Learning Pathways</h2>
        <div className="other-paths">
          <Productcard />
          <Qualitycard />
          <Backcard />
        </div>
      </section>

      <Footer />
    </div>

    </div>
  );
};

export default Dataanalysis;
