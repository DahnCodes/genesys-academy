import Backcard from "../Components/Backcard";
import Datacard from "../Components/Datacard";
import Emptynav from "../Components/Emptynav";
import Goback from "../Components/Goback";
import Productcard from "../Components/Productcard";
import design from "../assets/Design.png";
import "../Styles/productdesign.css";
import fe from "../assets/fe.png";
import fe2 from "../assets/fe2.png";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Frontend = () => {
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
            <img src={fe} alt="" className="pd" />

            <div className="about-text">
              <h1>About this pathway</h1>
              <p>
                <b>Frontend Development (FE)</b> involves the process of
                creating and implementing the User Interface <br />
                (UI) and User Experience (UX) for online and mobile apps is
                referred to as Frontend Development. This <br />
                area of development is concerned with producing aesthetically
                beautiful, engaging, and user-friendly <br />
                designs that meet end-user requirements.
              </p>
              <p>
                To create user-friendly and captivating interfaces, Frontend
                Developers will use frameworks and <br />
                libraries like React together with programming languages like
                HTML, CSS, and JavaScript. To achieve <br />
                smooth interaction between the user interface and the underlying
                application logic, these developers <br />
                collaborate closely with Product Designers and Backend
                Developers.
              </p>
            </div>
          </div>
        </section>

        <section className="learn">
          <div className="learn-wrap">
            <div className="learn-point">
              <h2>What you’ll learn</h2>
              <ul className="list">
                <li>Introduction to Programming</li>
                <li>
                  HTML, CSS, JavaScript: You'll master the fundamental building
                  blocks of web <br />
                  development.
                </li>
                <li>
                  Responsive Design: Learn to create web applications that adapt
                  to various screen <br />
                  sizes and devices.
                </li>
                <li>
                  UI Frameworks: Explore popular frameworks like React, Angular,
                  or Vue for <br />
                  efficient front-end development.
                </li>
                <li>
                  User Experience (UX): Understand how to design user-friendly
                  interfaces for a <br />
                  great user experience.
                </li>
                <li>
                  Web Performance: Optimise web applications for speed and
                  responsiveness.
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
                <li>Introduction to Programming</li>
                <li>Git & Version Control</li>
                <li>Ideation</li>
                <li>JavaScript Fundamentals</li>
                <li>Data structures - Arrays and Objects</li>
              </ul>
            </div>
            <div className="second-list">
              <ul>
                <li>HTML & CSS Fundamentals</li>
                <li>Advanced HTML & CSS</li>
                <li>JavaScript Design Patterns</li>
                <li>Developing Web Apps with React</li>
                {/* <li>Multi Device Design and Responsive Design</li> */}
              </ul>
            </div>
          </div>
          <img src={fe2} alt="" className="pd2" />
          <img src={design} alt="" className="design" />
        </section>

        <section className="others">
          <h2>Other Learning Pathways</h2>
          <div className="other-paths">
            <Productcard />
            <Datacard />
            <Backcard />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Frontend;
