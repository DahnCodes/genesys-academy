import Emptynav from "../Components/Emptynav";
import qa from "../assets/qa.png";
import "../Styles/productdesign.css";
import qa2 from "../assets/qa2.png";
import design from "../assets/Design.png";
import Datacard from "../Components/Datacard";
import Footer from "../Components/Footer";
import Goback from "../Components/Goback";
import Productcard from "../Components/Productcard";
import Backcard from "../Components/Backcard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Qualityassurance = () => {
  const location = useLocation();

  useEffect(() => {
  
      window.scrollTo({ top: 0, behavior: "smooth" });
   
  }, [location]);
  return (
    <div className="body-container">
      <div>
        <Emptynav />

        <Goback />
        <section className="about">
          <div className="about-pd">
            <img src={qa} alt="" className="pd" />

            <div className="about-text">
              <h1>About this pathway</h1>
              <p>
                <b> Quality Assurance (QA)</b> ensures that products and
                services meet specified requirements and <br />
                standards before they reach the customer. This field focuses on
                systematic processes to test <br />
                and validate product functionality, reliability, and
                performance.
              </p>
              <p>
                QA professionals use manual and automated testing methods,
                employing tools like Selenium, JUnit, <br />
                and Jenkins, to identify defects and ensure that the final
                product is of high quality. They work closely <br />
                with developers and product teams to create and implement
                effective testing strategies.
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
                  Manual Testing: Learn the fundamentals of manual testing and
                  various testing <br />
                  techniques.
                </li>
                <li>
                  Automated Testing: Gain proficiency in automated testing tools
                  like Selenium and <br />
                  JUnit.
                </li>
                <li>
                  Testing Frameworks: Understand different testing frameworks
                  and methodologies.
                </li>
                <li>
                  Bug Tracking and Reporting: Learn to use bug tracking tools
                  like JIRA to report <br />
                  and manage defects.
                </li>
                <li>
                  Quality Assurance Processes: Master the QA lifecycle and
                  processes to ensure <br />
                  product quality.
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
            This program is designed to provide you with in-depth knowledge on
            the following:
          </p>
          <div className="learn-wrapper">
            <div className="first-list">
              <ul className="qa-list">
                <li>Introduction to Software Testing</li>
                <li>Testing objectives and principles</li>
                <li>Test strategy, planning and Management</li>
                <li>Test execution processes</li>
                <li>Test reporting and metrics in Agile projects</li>
                <li>Test management tools and practices</li>
              </ul>
            </div>
            <div className="second-list">
              <ul className="qa-list2">
                <li>Non-functional Testing</li>
                <li>Introduction to test automation</li>
                <li>Test Execution and Reporting with Test Management Tool</li>
                <li>Approaches to Automation</li>
                <li>Continuous integration and continuous testing</li>
                <li>
                  Practical project work applying software testing principles
                </li>
              </ul>
            </div>
          </div>
          <img src={qa2} alt="" className="pd2" />
          <img src={design} alt="" className="design" />
        </section>

        <section className="others">
          <h2>Other Learning Pathways</h2>
          <div className="other-paths">
            <Datacard />
            <Productcard />
            <Backcard />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Qualityassurance;
