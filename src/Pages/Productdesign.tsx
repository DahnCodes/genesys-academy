import Emptynav from "../Components/Emptynav";
import pd from "../assets/pd.png";
import "../Styles/productdesign.css";
import pd2 from "../assets/pd2.png";
import design from "../assets/Design.png";
import Frontcard from "../Components/Frontcard";
import Datacard from "../Components/Datacard";
import Qualitycard from "../Components/Qualitycard";
import Footer from "../Components/Footer";
import Goback from "../Components/Goback";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Productdesign = () => {
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
            <img src={pd} alt="" className="pd" />

            <div className="about-text">
              <h1>About this pathway</h1>
              <p>
                <b>Product Design (PD) </b>is the process of creating and
                developing a physical or digital product from <br />
                concept to completion ensuring they meet the users goals and
                business goals. This track <br /> encompasses a wide range of
                skills, including user research, user interface (UI) design,
                interaction <br />
                design, prototyping, and usability testing.
              </p>
              <p>
                Product designers collaborate closely with cross-functional
                teams, from developers to marketers, to <br />
                create innovative and user-friendly products. In essence,
                product design is about solving problems, <br />
                empathizing with users, and translating their needs into
                elegant, intuitive, and visually appealing <br />
                solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="learn">
          <div className="learn-wrap">
            <div className="learn-point">
              <h2>What you’ll learn</h2>
              <ul className="list">
                <li>Principles of Designs and Introduction to Figma.</li>
                <li>
                  User Research: Develop skills to understand and emphathise
                  with user needs <br />
                  and behaviours.
                </li>
                <li>
                  UI/UX Design: Create visually appealing, user-friendly
                  interfaces through <br />
                  wireframing and prototyping.
                </li>
                <li>
                  Design Thinking: Employ a problem-solving methodology to craft
                  innovative and <br />
                  user-centred solutions.
                </li>
                <li>
                  Usability Testing: Learn how to test and refine designs based
                  on user feedback.
                </li>
                <li>
                  Collaboration: Work effectively with cross-functional teams to
                  turn design <br />
                  concepts into real products.
                </li>
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
              <ul>
                <li>Principles of Design and Introduction to Figma</li>
                <li>User Data, User Research and Personas</li>
                <li>Ideation</li>
                <li>Usability Testing and Evaluation</li>
                <li>UI Design Elements and Components</li>
              </ul>
            </div>
            <div className="second-list">
              <ul>
                <li>UI Design Patterns</li>
                <li>Branding and UI</li>
                <li>Design Systems</li>
                <li>Blockchain/Web3</li>
                <li>Multi Device Design and Responsive Design</li>
              </ul>
            </div>
          </div>
          <img src={pd2} alt="" className="pd2" />
          <img src={design} alt="" className="design" />
        </section>

        <section className="others">
          <h2>Other Learning Pathways</h2>
          <div className="other-paths">
            <Frontcard />
            <Datacard />
            <Qualitycard />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Productdesign;
